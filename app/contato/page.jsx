"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, Sparkles, Rocket } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  company: z.string().optional(),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

const services = [
  { value: "trafego-pago", label: "Tráfego Pago" },
  { value: "sites", label: "Criação de Sites" },
  { value: "landing-pages", label: "Landing Pages" },
  { value: "posts", label: "Criação de Posts" },
  { value: "automacoes-whatsapp", label: "Automações WhatsApp" },
  { value: "outro", label: "Outro" },
];

export default function ContatoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Fale Conosco 💬
            </h1>
            <p className="text-xl text-violet-100 leading-relaxed">
              Estamos prontos para ajudar seu negócio a crescer no mundo digital. 
              Entre em contato e vamos conversar sobre seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h2>
              <p className="text-gray-600 mb-8">
                Entre em contato conosco através dos canais abaixo ou preencha o 
                formulário ao lado.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">E-mail</h3>
                    <p className="text-gray-600">contato@digitalsmart.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Telefone</h3>
                    <p className="text-gray-600">+55 (31) 98416-9075</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Localização</h3>
                    <p className="text-gray-600">Brasil 🇧🇷 | EUA 🇺🇸</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Por que escolher a Digital Smart?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-violet-600" />
                    +40 empresas parceiras
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-violet-600" />
                    Atendimento personalizado
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-violet-600" />
                    Resultados comprovados
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-violet-600" />
                    Suporte contínuo
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Mensagem Enviada!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Obrigado pelo contato. Retornaremos em breve.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-violet-600 font-medium hover:underline"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Envie sua mensagem
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Nome *
                          </label>
                          <input
                            type="text"
                            id="name"
                            {...register("name")}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:ring-violet-500"
                            } focus:outline-none focus:ring-2 transition-all`}
                            placeholder="Seu nome"
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            {...register("email")}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:ring-violet-500"
                            } focus:outline-none focus:ring-2 transition-all`}
                            placeholder="seu@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Telefone *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            {...register("phone")}
                            className={`w-full px-4 py-3 rounded-xl border ${
                              errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-200 focus:ring-violet-500"
                            } focus:outline-none focus:ring-2 transition-all`}
                            placeholder="(11) 99999-9999"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-sm text-red-500">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Empresa
                          </label>
                          <input
                            type="text"
                            id="company"
                            {...register("company")}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
                            placeholder="Nome da empresa"
                          />
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Serviço de interesse *
                        </label>
                        <select
                          id="service"
                          {...register("service")}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.service
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:ring-violet-500"
                          } focus:outline-none focus:ring-2 transition-all bg-white`}
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.service.message}
                          </p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Mensagem *
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          {...register("message")}
                          className={`w-full px-4 py-3 rounded-xl border ${
                            errors.message
                              ? "border-red-500 focus:ring-red-500"
                              : "border-gray-200 focus:ring-violet-500"
                          } focus:outline-none focus:ring-2 transition-all resize-none`}
                          placeholder="Conte-nos sobre seu projeto..."
                        />
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 disabled:from-violet-400 disabled:to-purple-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25 flex items-center justify-center gap-2 hover:scale-[1.02]"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Enviar Mensagem
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
