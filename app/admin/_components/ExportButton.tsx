    "use client";

import { useState } from "react";
import { CSVLink } from "react-csv";
import { Download, ChevronDown } from "lucide-react";

interface ExportButtonProps {
  data: any[];
  filename: string;
  title?: string;
  className?: string;
}

const statusMap = {
  new: "Novo",
  contacted: "Contatado", 
  in_negotiation: "Em Negociação",
  converted: "Convertido",
  lost: "Perdido"
};

const formatDate = (dateString: string) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export default function ExportButton({ data, filename, title = "Exportar", className = "" }: ExportButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Headers completos para exportação
  const headers = [
    { label: "ID", key: "id" },
    { label: "Nome Completo", key: "name" },
    { label: "Email", key: "email" },
    { label: "Telefone", key: "phone" },
    { label: "Empresa", key: "company" },
    { label: "Serviço", key: "service" },
    { label: "Status", key: "status" },
    { label: "Motivo da Perda", key: "lossReason" },
    { label: "Origem", key: "source" },
    { label: "Mensagem", key: "message" },
    { label: "Data de Criação", key: "createdAt" },
    { label: "Data de Atualização", key: "updatedAt" },
    { label: "Data de Conversão", key: "convertedAt" },
    { label: "Data da Perda", key: "lostAt" }
  ];

  // Preparar dados formatados
  const formattedData = data.map(lead => ({
    ...lead,
    status: statusMap[lead.status as keyof typeof statusMap] || lead.status,
    createdAt: formatDate(lead.createdAt),
    updatedAt: formatDate(lead.updatedAt),
    convertedAt: formatDate(lead.convertedAt),
    lostAt: formatDate(lead.lostAt),
    phone: lead.phone || "Não informado",
    company: lead.company || "N/A",
    service: lead.service || "N/A",
    lossReason: lead.lossReason || "N/A",
    source: lead.source || "Website",
    message: lead.message ? lead.message.replace(/\n/g, " ").substring(0, 200) + (lead.message.length > 200 ? "..." : "") : "N/A"
  }));

  // Opções de exportação
  const exportOptions = [
    {
      label: "Exportar Todos os Dados",
      description: "CSV completo com todas as informações",
      data: formattedData,
      filename: `${filename}-completo-${new Date().toISOString().split('T')[0]}.csv`
    },
    {
      label: "Exportar Leads Ativos",
      description: "Apenas leads não perdidos",
      data: formattedData.filter(lead => lead.status !== "Perdido"),
      filename: `${filename}-ativos-${new Date().toISOString().split('T')[0]}.csv`
    },
    {
      label: "Exportar Leads Convertidos",
      description: "Apenas leads convertidos",
      data: formattedData.filter(lead => lead.status === "Convertido"),
      filename: `${filename}-convertidos-${new Date().toISOString().split('T')[0]}.csv`
    },
    {
      label: "Exportar Leads Perdidos",
      description: "Apenas leads perdidos com motivos",
      data: formattedData.filter(lead => lead.status === "Perdido"),
      filename: `${filename}-perdidos-${new Date().toISOString().split('T')[0]}.csv`
    },
    {
      label: "Exportar Resumo",
      description: "Dados essenciais (nome, email, status, empresa)",
      data: formattedData.map(lead => ({
        "Nome": lead.name,
        "Email": lead.email,
        "Telefone": lead.phone,
        "Empresa": lead.company,
        "Status": lead.status,
        "Data Criação": lead.createdAt
      })),
      filename: `${filename}-resumo-${new Date().toISOString().split('T')[0]}.csv`
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 border border-white/20 ${className}`}
      >
        <Download className="w-4 h-4" />
        {title}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute top-full right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-20 overflow-hidden">
            <div className="p-2">
              <div className="px-3 py-2 text-xs text-white/60 font-medium uppercase tracking-wider border-b border-white/10 mb-2">
                Opções de Exportação
              </div>
              
              {exportOptions.map((option, index) => (
                <CSVLink
                  key={index}
                  data={option.data}
                  headers={index === 4 ? undefined : headers} // Resumo não usa headers personalizados
                  filename={option.filename}
                  className="block"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="px-3 py-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-start gap-3">
                      <Download className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                          {option.label}
                        </div>
                        <div className="text-xs text-white/60 mt-0.5">
                          {option.description}
                        </div>
                        <div className="text-xs text-purple-400 mt-1">
                          {option.data.length} registros
                        </div>
                      </div>
                    </div>
                  </div>
                </CSVLink>
              ))}
              
              <div className="px-3 py-2 text-xs text-white/40 border-t border-white/10 mt-2 pt-2">
                Exportado em {new Date().toLocaleString('pt-BR')}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
