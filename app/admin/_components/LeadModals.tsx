"use client";

import {
  AlertCircle,
  Calendar,
  CheckCircle,
  Copy,
  Edit,
  Building,
  Globe,
  Mail,
  MessageSquare,
  Phone,
  Save,
  Target,
  X,
  Trash2,
} from "lucide-react";
import { ReactNode } from "react";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  source?: string;
  status: string;
  lossReason?: string;
  message?: string;
  createdAt: string | number | Date;
  updatedAt?: string | number | Date;
  convertedAt?: string | number | Date;
  lostAt?: string | number | Date;
}

type StatusForm = { status: string; lossReason: string };

const statusOptions = [
  { value: "contacted", label: "Contatado" },
  { value: "in_negotiation", label: "Em Negociação" },
  { value: "converted", label: "Convertido" },
  { value: "lost", label: "Perdido" }
];

interface StatusModalProps {
  lead: Lead;
  isOpen: boolean;
  statusForm: StatusForm;
  lossReasons: string[];
  isSaving: boolean;
  onClose: () => void;
  onChangeStatus: (value: string) => void;
  onChangeLossReason: (value: string) => void;
  onSave: () => void;
}

interface LeadDetailsModalProps {
  lead: Lead;
  isOpen: boolean;
  isEditMode: boolean;
  editForm: StatusForm;
  isSaving: boolean;
  lossReasons: string[];
  statusOptions: { value: string; label: string }[];
  onClose: () => void;
  onStartEdit: () => void;
  onEditFormChange: (form: StatusForm) => void;
  onSaveChanges: () => void;
  sendEmail: (email: string) => void;
  openWhatsApp: (phone: string) => void;
  copyToClipboard: (value: string) => void;
}

interface DeleteModalProps {
  lead: Lead;
  isOpen: boolean;
  isDeleting: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const statusBadge = (status: string) =>
  status === "new"
    ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
    : status === "contacted"
    ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
    : status === "in_negotiation"
    ? "bg-purple-500/20 text-purple-200 border border-purple-500/30"
    : status === "converted"
    ? "bg-purple-500/20 text-purple-100 border border-purple-500/30"
    : status === "lost"
    ? "bg-red-500/20 text-red-300 border border-red-500/30"
    : "bg-purple-500/20 text-purple-100 border border-purple-500/30";

export function StatusModal({
  lead,
  isOpen,
  statusForm,
  lossReasons,
  isSaving,
  onClose,
  onChangeStatus,
  onChangeLossReason,
  onSave,
}: StatusModalProps) {
  return (
    lead && (
      <div
        className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      >
        <div
          className={`bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md transition-all duration-300 transform ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <h3 className="text-xl font-bold text-white">Alterar Status</h3>
              <p className="text-white/60 text-sm mt-1">{lead.name}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
                <select
                  value={statusForm.status}
                  onChange={(e) => onChangeStatus(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                >
                  <option value="new" disabled={statusForm.status !== "new"}>
                    Novo
                  </option>
                  {statusOptions.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {statusForm.status === "lost" && (
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Motivo da Perda</label>
                  <select
                    value={statusForm.lossReason}
                    onChange={(e) => onChangeLossReason(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  >
                    <option value="">Selecione um motivo</option>
                    {lossReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6 justify-end">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={onSave}
                disabled={isSaving}
                className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Salvar
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export function DeleteModal({
  lead,
  isOpen,
  isDeleting,
  onClose,
  onConfirm,
}: DeleteModalProps) {
  if (!lead) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
              <Trash2 className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Excluir Lead</h3>
              <p className="text-white/60 text-sm mt-1">{lead.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5" />
              <div>
                <p className="text-sm text-red-300 font-medium">Atenção!</p>
                <p className="text-xs text-red-200 mt-1">
                  Esta ação não pode ser desfeita. Todas as informações do lead serão permanentemente excluídas.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-lg p-3">
              <p className="text-xs text-white/60">Email</p>
              <p className="text-sm text-white font-medium">{lead.email}</p>
            </div>
            {lead.phone && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-xs text-white/60">Telefone</p>
                <p className="text-sm text-white font-medium">{lead.phone}</p>
              </div>
            )}
            {lead.company && (
              <div className="bg-white/5 border border-white/10 rounded-lg p-3">
                <p className="text-xs text-white/60">Empresa</p>
                <p className="text-sm text-white font-medium">{lead.company}</p>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              disabled={isDeleting}
              className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:opacity-50 text-white rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              disabled={isDeleting}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {isDeleting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Excluindo...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4" />
                  Excluir
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeadDetailsModal({
  lead,
  isOpen,
  isEditMode,
  editForm,
  isSaving,
  lossReasons,
  statusOptions,
  onClose,
  onStartEdit,
  onEditFormChange,
  onSaveChanges,
  sendEmail,
  openWhatsApp,
  copyToClipboard,
}: LeadDetailsModalProps) {
  if (!lead) return null;

  const content: ReactNode = (
    <>
      {/* Header */}
      <div className="bg-black/20 border-b border-white/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">{lead.name?.charAt(0)?.toUpperCase() || "L"}</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{lead.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-purple-300 text-sm">#{lead.id?.slice(-8)}</span>
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${statusBadge(lead.status)}`}>
                  {lead.status === "new"
                    ? "Novo"
                    : lead.status === "contacted"
                    ? "Contatado"
                    : lead.status === "in_negotiation"
                    ? "Em Negociação"
                    : lead.status === "converted"
                    ? "Convertido"
                    : "Perdido"}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => sendEmail(lead.email)}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-3 py-2 rounded-lg transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            Enviar Email
          </button>
          {lead.phone && (
            <button
              onClick={() => openWhatsApp(lead.phone!)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-3 py-2 rounded-lg transition-colors text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </button>
          )}
          <button
            onClick={() => copyToClipboard(lead.email)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors text-sm border border-white/20"
          >
            <Copy className="w-4 h-4" />
            Copiar Email
          </button>
          {lead.phone && (
            <button
              onClick={() => copyToClipboard(lead.phone!)}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-lg transition-colors text-sm border border-white/20"
            >
              <Copy className="w-4 h-4" />
              Copiar Telefone
            </button>
          )}
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Informações de Contato</h3>
            <div className="space-y-3">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <div>
                    <p className="text-xs text-white/60">Email</p>
                    <p className="text-sm font-medium text-white">{lead.email}</p>
                  </div>
                </div>
              </div>
              {lead.phone && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-white/60">Telefone</p>
                      <p className="text-sm font-medium text-white">{lead.phone}</p>
                    </div>
                  </div>
                </div>
              )}
              {lead.company && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-white/60">Empresa</p>
                      <p className="text-sm font-medium text-white">{lead.company}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Lead Details */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Detalhes do Lead</h3>
            <div className="space-y-3">
              {lead.service && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-white/60">Serviço</p>
                      <p className="text-sm font-medium text-white">{lead.service}</p>
                    </div>
                  </div>
                </div>
              )}
              {lead.source && (
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <div>
                      <p className="text-xs text-white/60">Origem</p>
                      <p className="text-sm font-medium text-white">{lead.source}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dates */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-white mb-3">Datas Importantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-purple-400" />
                <div>
                  <p className="text-xs text-white/60">Data de Criação</p>
                  <p className="text-sm font-medium text-white">
                    {new Date(lead.createdAt).toLocaleString("pt-BR")}
                  </p>
                </div>
              </div>
            </div>
            {lead.convertedAt && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <div>
                    <p className="text-xs text-white/60">Data de Conversão</p>
                    <p className="text-sm font-medium text-white">
                      {new Date(lead.convertedAt).toLocaleString("pt-BR")}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {lead.status === "lost" && lead.lostAt && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-red-400" />
                  <div>
                    <p className="text-xs text-white/60">Data da Perda</p>
                    <p className="text-sm font-medium text-white">
                      {new Date(lead.lostAt).toLocaleString("pt-BR")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Loss Reason */}
        {lead.status === "lost" && !isEditMode && lead.lossReason && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white mb-3">Motivo da Perda</h3>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5" />
                <div>
                  <p className="text-sm text-red-300 font-medium">Lead Perdido</p>
                  <p className="text-xs text-red-200 mt-1">{lead.lossReason}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Form */}
        {isEditMode && (
          <div className="border-t border-white/10 pt-6">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Edit className="w-4 h-4" />
              Editar Informações
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs text-white/60 mb-2">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) => onEditFormChange({ ...editForm, status: e.target.value, lossReason: e.target.value === "lost" ? editForm.lossReason : "" })}
                  className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                >
                  {statusOptions.map((option) => (
                    <option key={option.value} value={option.value} className="bg-gray-800">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {editForm.status === "lost" && (
                <div>
                  <label className="block text-xs text-white/60 mb-2 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Motivo da Perda
                  </label>
                  <select
                    value={editForm.lossReason}
                    onChange={(e) => onEditFormChange({ ...editForm, lossReason: e.target.value })}
                    className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  >
                    <option value="" className="bg-gray-800">
                      Selecione um motivo
                    </option>
                    {lossReasons.map((reason, index) => (
                      <option key={index} value={reason} className="bg-gray-800">
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6 justify-end">
              <button
                onClick={() =>
                  onEditFormChange({
                    status: lead.status,
                    lossReason: lead.lossReason || "",
                  })
                }
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={onSaveChanges}
                disabled={isSaving}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                {isSaving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Salvando...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Salvar
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="flex gap-3 mt-6 justify-end p-6 border-t border-white/10">
        {lead.status === "converted" ? (
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
          >
            Fechar
          </button>
        ) : (
          <>
            {!isEditMode && lead.status !== "converted" && (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                Fechar
              </button>
            )}
            {!isEditMode && lead.status !== "converted" && (
              <button
                onClick={onStartEdit}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-lg transition-colors flex items-center gap-2"
              >
                <Edit className="w-4 h-4" />
                Editar Lead
              </button>
            )}
          </>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transition-all duration-300 transform ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </div>
    </div>
  );
}
