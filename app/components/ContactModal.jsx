"use client";

import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { toast } from "react-toastify";

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    segmento: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 0) {
      if (value.length <= 2) {
        value = `(${value}`;
      } else if (value.length <= 7) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      }
    }

    setFormData({ ...formData, telefone: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!", {
          position: "top-right",
          autoClose: 3000,
        });
        setFormData({
          nome: "",
          telefone: "",
          email: "",
          servico: "",
          segmento: "",
        });
        onClose();
      } else {
        toast.error("Erro ao enviar mensagem. Tente novamente.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.", {
        position: "top-right",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">Solicitar Orçamento</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <HiXMark className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Nome completo *
            </label>
            <input
              type="text"
              required
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Telefone */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Telefone *
            </label>
            <input
              type="tel"
              required
              value={formData.telefone}
              onChange={handlePhoneChange}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              placeholder="(11) 99999-9999"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
              placeholder="seu@email.com"
            />
          </div>

          {/* Serviço */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Qual serviço deseja? *
            </label>
            <select
              required
              value={formData.servico}
              onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            >
              <option value="">Selecione um serviço</option>
              <option value="tráfego-pago">Tráfego Pago</option>
              <option value="sites-landing-pages">Sites e Landing Pages</option>
              <option value="redes-sociais">Gestão de Redes Sociais</option>
              <option value="videos">Edição de Vídeos</option>
              <option value="imagens">Edição de Imagens</option>
              <option value="treinamentos">Treinamentos em Marketing</option>
              <option value="automacao-ia">Automações com IA</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Segmento */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Segmento do seu negócio *
            </label>
            <select
              required
              value={formData.segmento}
              onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            >
              <option value="">Selecione o segmento</option>
              <option value="educacao">Educação / Cursos</option>
              <option value="saude">Saúde / Bem-estar</option>
              <option value="ecommerce">E-commerce</option>
              <option value="servicos">Serviços Locais</option>
              <option value="tecnologia">Tecnologia</option>
              <option value="alimentacao">Alimentação</option>
              <option value="moda">Moda</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </form>
      </div>
    </div>
  );
}
