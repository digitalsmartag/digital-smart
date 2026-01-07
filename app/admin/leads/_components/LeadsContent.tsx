"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LOSS_REASONS } from "../../_data/constants";
import ExportButton from "../../_components/ExportButton";
import { 
  useLeads, 
  useCurrentMonthLeads, 
  useConvertedLeads, 
  useConvertedLeadsFromCurrentMonth, 
  useConversionStats, 
  useLostLeads,
  useUpdateLead,
  useDeleteLead
} from "../../_hooks/useLeads";
import { useServerSentEvents } from "../../_hooks/useServerSentEvents";
import { useGlobalCacheInvalidation } from "../../_hooks/useGlobalCacheInvalidation";
import { useQueryClient } from "@tanstack/react-query";
import {
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Trash2,
  Calendar,
  CheckCircle,
  AlertCircle,
  X,
  Save,
  Mail,
  MessageSquare,
  Copy,
  Phone,
  Building,
  Globe,
  Target,
  User,
  Users,
  BarChart3,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Sparkles,
  Download
} from "lucide-react";
import { StatusModal, LeadDetailsModal, DeleteModal } from "../../_components/LeadModals";

interface LeadsProps {
  leads: any[];
  currentMonthLeads: any[];
  convertedLeads: any[];
  currentMonthConvertedLeads: any[];
  conversionStats: {
    averageConversionTime: number;
    fastestConversion: number;
    slowestConversion: number;
    totalConverted: number;
  };
  lostLeads: any[];
  newLeadsCount?: number;
}

const statusOptions = [
  { value: "new", label: "Novo" },
  { value: "contacted", label: "Contatado" },
  { value: "in_negotiation", label: "Em Negociação" },
  { value: "converted", label: "Convertido" },
  { value: "lost", label: "Perdido" }
];

const lossReasons: string[] = [...LOSS_REASONS];

export default function LeadsContent() {
  const router = useRouter();
  const queryClient = useQueryClient();
  
  // Conexão SSE para atualizações em tempo real
  const { isConnected } = useServerSentEvents();
  
  // Cache global para atualizações quando não há SSE
  useGlobalCacheInvalidation();
  
  // Queries do TanStack Query
  const { data: leads, isLoading: leadsLoading, error: leadsError } = useLeads();
  const { data: currentMonthLeads } = useCurrentMonthLeads();
  const { data: convertedLeads } = useConvertedLeads();
  const { data: currentMonthConvertedLeads } = useConvertedLeadsFromCurrentMonth();
  const { data: conversionStats } = useConversionStats();
  const { data: lostLeads } = useLostLeads();
  
  // Debug logs
  console.log('📊 Leads data:', leads);
  console.log('📊 Loading:', leadsLoading);
  console.log('📊 Error:', leadsError);
  console.log('📊 SSE Connected:', isConnected);
  
  // Mutations
  const updateLeadMutation = useUpdateLead();
  const deleteLeadMutation = useDeleteLead();
  
  // Estados
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editForm, setEditForm] = useState<any>({});
  const [isSaving, setIsSaving] = useState(false);
  
  // Estado para modal rápido de status
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [statusForm, setStatusForm] = useState({ status: '', lossReason: '' });
  
  // Estado para modal de exclusão
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Estados para filtros e busca
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('createdAt');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  
  // Loading state
  if (leadsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando leads...</p>
        </div>
      </div>
    );
  }
  
  // Error state
  if (leadsError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600">Erro ao carregar leads. Tente novamente.</p>
        </div>
      </div>
    );
  }

  const openLeadModal = (lead: any) => {
    setSelectedLead(lead);
    setEditForm({
      status: lead.status,
      lossReason: lead.lossReason || ''
    });
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openStatusModal = (lead: any) => {
    if (lead.status === 'converted') {
      return;
    }
    setSelectedLead(lead);
    setStatusForm({
      status: lead.status,
      lossReason: lead.lossReason || ''
    });
    setIsStatusModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsEditMode(false);
    setTimeout(() => setSelectedLead(null), 300);
  };

  const startEdit = () => {
    setIsEditMode(true);
  };

  const saveChanges = async () => {
    if (!selectedLead) return;
    
    setIsSaving(true);
    
    try {
      await updateLeadMutation.mutateAsync({
        id: selectedLead.id,
        data: editForm
      });
      
      setIsEditMode(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const saveStatus = async () => {
    if (!selectedLead) return;
    
    setIsSaving(true);
    
    try {
      await updateLeadMutation.mutateAsync({
        id: selectedLead.id,
        data: {
          status: statusForm.status,
          lossReason: statusForm.lossReason
        }
      });
      
      setIsStatusModalOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const openDeleteModal = (lead: any) => {
    setSelectedLead(lead);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedLead) return;
    
    setIsDeleting(true);
    
    try {
      await deleteLeadMutation.mutateAsync(selectedLead.id);
      setIsDeleteModalOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Erro ao excluir lead:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  const testWebhook = async () => {
    console.log('🧪 Enviando webhook de teste...');
    
    try {
      const response = await fetch('/admin/api/test-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log('✅ Webhook de teste enviado com sucesso!');
      } else {
        console.error('❌ Erro no webhook de teste:', result);
      }
    } catch (error) {
      console.error('❌ Erro ao enviar webhook de teste:', error);
    }
  };

  const testSSEConnection = () => {
    console.log('🧪 Testando conexão SSE...');
    
    // Criar EventSource manual para teste
    const testEventSource = new EventSource('/admin/api/events');
    
    testEventSource.onopen = () => {
      console.log('🔌 SSE Test: Conexão aberta com sucesso!');
      console.log('🔌 SSE Test: readyState:', testEventSource.readyState);
      console.log('🔌 SSE Test: URL:', testEventSource.url);
    };
    
    testEventSource.onmessage = (event) => {
      console.log('📡 SSE Test: Mensagem bruta recebida:', event.data);
      try {
        const parsed = JSON.parse(event.data);
        console.log('📡 SSE Test: Mensagem parseada:', parsed);
      } catch (e) {
        console.log('📡 SSE Test: Mensagem não é JSON:', event.data);
      }
    };
    
    testEventSource.onerror = (error) => {
      console.error('❌ SSE Test: Erro na conexão:', error);
      console.error('❌ SSE Test: readyState:', testEventSource.readyState);
      console.error('❌ SSE Test: URL:', testEventSource.url);
      
      if (testEventSource.readyState === EventSource.CLOSED) {
        console.error('❌ SSE Test: Conexão foi fechada');
      } else if (testEventSource.readyState === EventSource.CONNECTING) {
        console.error('❌ SSE Test: Tentando reconectar...');
      }
      
      testEventSource.close();
    };
    
    // Fechar após 10 segundos
    setTimeout(() => {
      if (testEventSource.readyState !== EventSource.CLOSED) {
        testEventSource.close();
        console.log('🔌 SSE Test: Conexão fechada após teste');
      }
    }, 10000);
  };

  const testCacheInvalidation = () => {
    console.log('🧪 Testando invalidação de cache manualmente...');
    queryClient.invalidateQueries({ queryKey: ['leads'] });
    queryClient.invalidateQueries({ queryKey: ['leads-current-month'] });
    queryClient.invalidateQueries({ queryKey: ['leads-converted'] });
    queryClient.invalidateQueries({ queryKey: ['leads-converted-current-month'] });
    queryClient.invalidateQueries({ queryKey: ['leads-conversion-stats'] });
    queryClient.invalidateQueries({ queryKey: ['leads-lost'] });
    console.log('✅ Cache invalidado manualmente');
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const openWhatsApp = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${cleanPhone}`, '_blank');
  };

  const sendEmail = (email: string) => {
    window.open(`mailto:${email}`, '_blank');
  };

  // Filtros e ordenação
  const filteredLeads = (leads || [])
    .filter(lead => {
      const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          (lead.company && lead.company.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'createdAt' || sortBy === 'updatedAt' || sortBy === 'convertedAt' || sortBy === 'lostAt') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  // Estatísticas
  const stats = [
    { 
      label: "Total de Leads", 
      value: leads.length.toString(), 
      change: null, 
      trend: "up",
      icon: Users, 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    { 
      label: "Conversões Totais", 
      value: (convertedLeads || []).length.toString(), 
      change: null, 
      trend: "up",
      icon: Target, 
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    { 
      label: "Leads Perdidos", 
      value: (lostLeads || []).length.toString(), 
      change: null, 
      trend: "down",
      icon: AlertCircle, 
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          
        </div>
        <div className="flex items-center gap-3">
          {/* Botões de teste */}
          <button 
            onClick={testWebhook}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
          >
            📡 Testar Webhook
          </button>
          <button 
            onClick={testSSEConnection}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
          >
            🔌 Testar SSE
          </button>
          <button 
            onClick={testCacheInvalidation}
            className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm transition-colors"
          >
            🧪 Testar Cache
          </button>
          <ExportButton 
            data={filteredLeads} 
            filename="leads" 
            title="Exportar"
          />
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Novo Lead
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const TrendIcon = stat.trend === 'up' ? ArrowUp : ArrowDown;
          
          return (
            <div key={index} className={`relative group ${stat.bgColor} backdrop-blur-md border ${stat.borderColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  {stat.change && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-500/20 rounded-lg">
                      <TrendIcon className="w-3 h-3 text-green-400" />
                      <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-2">{stat.label}</h3>
                  <p className="text-white text-3xl font-bold">{stat.value}</p>
                </div>

                {/* Mini Chart Indicator */}
                <div className="absolute bottom-2 right-2 opacity-20">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters and Search */}
      <div className="mt-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              >
                <option value="all" className="bg-gray-800">Todos os Status</option>
                <option value="new" className="bg-gray-800">Novo</option>
                <option value="contacted" className="bg-gray-800">Contatado</option>
                <option value="in_negotiation" className="bg-gray-800">Em Negociação</option>
                <option value="converted" className="bg-gray-800">Convertido</option>
                <option value="lost" className="bg-gray-800">Perdido</option>
              </select>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              >
                <option value="createdAt" className="bg-gray-800">Data de Criação</option>
                <option value="name" className="bg-gray-800">Nome</option>
                <option value="status" className="bg-gray-800">Status</option>
                <option value="company" className="bg-gray-800">Empresa</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors text-white"
              >
                {sortOrder === 'asc' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-8">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Lead</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Empresa</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Serviço</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Data Criação</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Status</th>
                  <th className="text-left py-4 px-4 text-white/60 font-medium text-sm">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead, index) => (
                  <tr key={lead.id} className={`border-b border-white/5 hover:bg-white/5 transition-all duration-200 ${index === 0 ? 'bg-purple-500/5' : ''}`}>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{lead.name?.charAt(0)?.toUpperCase() || 'L'}</span>
                        </div>
                        <div>
                          <p className="font-medium text-white">{lead.name}</p>
                          <p className="text-sm text-white/60">{lead.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-white/80">{lead.company || 'N/A'}</span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-white/80">{lead.service || 'N/A'}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2 text-white/70">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(lead.createdAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => openStatusModal(lead)}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 hover:opacity-80 ${
                          lead.status === "new" ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" :
                          lead.status === "contacted" ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" :
                          lead.status === "in_negotiation" ? "bg-purple-500/20 text-purple-200 border border-purple-500/30" :
                          lead.status === "converted" ? "bg-green-500/20 text-green-300 border border-green-500/30" :
                          lead.status === "lost" ? "bg-red-500/20 text-red-300 border border-red-500/30" :
                          "bg-purple-500/20 text-purple-100 border border-purple-500/30"
                        }`}
                        title="Clique para alterar o status"
                      >
                        <div className="w-2 h-2 rounded-full bg-current" />
                        {lead.status === "new" ? "Novo" :
                         lead.status === "contacted" ? "Contatado" :
                         lead.status === "in_negotiation" ? "Em Negociação" :
                         lead.status === "converted" ? "Convertido" :
                         lead.status === "lost" ? "Perdido" : "Desconhecido"}
                      </button>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => openLeadModal(lead)}
                          className="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all duration-200"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        {lead.status !== 'converted' && (
                          <>
                            <button 
                              onClick={() => openStatusModal(lead)}
                              className="text-white/60 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition-all duration-200"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => openDeleteModal(lead)}
                              className="text-white/60 hover:text-red-400 hover:bg-red-500/10 p-1.5 rounded-lg transition-all duration-200"
                              title="Excluir lead"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        {lead.status === 'converted' && (
                          <div className="text-green-400 p-1.5 rounded-lg bg-green-500/10 border border-green-500/30" title="Lead convertido">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Table Footer */}
          <div className="flex items-center justify-between p-6 border-t border-white/10">
            <p className="text-white/60 text-sm">Mostrando {filteredLeads.length} de {leads.length} leads</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-white/60 hover:bg-white/10 rounded transition-colors">Anterior</button>
              <span className="px-3 py-1 text-white/60">1</span>
              <button className="px-3 py-1 text-white/60 hover:bg-white/10 rounded transition-colors">Próximo</button>
            </div>
          </div>
        </div>
      </div>

      {selectedLead && (
        <StatusModal
          lead={selectedLead}
          isOpen={isStatusModalOpen}
          statusForm={statusForm}
          lossReasons={lossReasons}
          isSaving={isSaving}
          onClose={() => setIsStatusModalOpen(false)}
          onChangeStatus={(value) => setStatusForm({ ...statusForm, status: value })}
          onChangeLossReason={(value) => setStatusForm({ ...statusForm, lossReason: value })}
          onSave={saveStatus}
        />
      )}

      {selectedLead && (
        <LeadDetailsModal
          lead={selectedLead}
          isOpen={isModalOpen}
          isEditMode={isEditMode}
          editForm={editForm}
          isSaving={isSaving}
          lossReasons={lossReasons}
          statusOptions={statusOptions}
          onClose={closeModal}
          onStartEdit={startEdit}
          onEditFormChange={(form) => setEditForm(form)}
          onSaveChanges={saveChanges}
          sendEmail={sendEmail}
          openWhatsApp={openWhatsApp}
          copyToClipboard={copyToClipboard}
        />
      )}

      {selectedLead && (
        <DeleteModal
          lead={selectedLead}
          isOpen={isDeleteModalOpen}
          isDeleting={isDeleting}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      )}
    </div>
  );
}
