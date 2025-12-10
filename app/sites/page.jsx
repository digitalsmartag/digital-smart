"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingFooter from "../components/LandingFooter";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe,
  Smartphone,
  Zap,
  Star,
  Target,
  MessageCircle,
  Phone,
  Award,
  Clock,
  Rocket,
  Code,
  Palette,
  TrendingUp,
  Shield,
  Plus,
  Minus,
  ChevronDown,
  MousePointer,
  BarChart3
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites Institucionais",
    description: "Sites profissionais que transmitem credibilidade e convertem visitantes em clientes.",
  },
  {
    icon: MousePointer,
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em captar leads e gerar vendas.",
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Perfeito em qualquer dispositivo: desktop, tablet ou celular.",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sites rápidos e otimizados para SEO que ranqueiam no Google.",
  },
];

const stats = [
  { value: "+150", label: "Sites entregues" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "7 dias", label: "Prazo médio" },
  { value: "24h", label: "Suporte" },
];

const benefits = [
  { icon: Palette, title: "Design Exclusivo", desc: "Criado do zero para sua marca" },
  { icon: Code, title: "Código Limpo", desc: "Tecnologias modernas e escaláveis" },
  { icon: TrendingUp, title: "Otimizado para SEO", desc: "Apareça no Google" },
  { icon: Shield, title: "SSL Incluso", desc: "Segurança para seus visitantes" },
];

const portfolio = [
  { name: "E-commerce Fashion", type: "Site Institucional", color: "from-[#543295] to-purple-600" },
  { name: "Clínica Odontológica", type: "Landing Page", color: "from-purple-600 to-violet-600" },
  { name: "Escritório Advocacia", type: "Site Institucional", color: "from-violet-600 to-[#543295]" },
  { name: "Academia Fitness", type: "Landing Page", color: "from-[#543295] to-purple-500" },
];

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO - TechStart",
    content: "O site ficou incrível! Em 2 semanas já estava gerando leads qualificados. Investimento que se pagou rapidamente.",
  },
  {
    name: "Dra. Camila Santos",
    role: "Diretora - Clínica Vida",
    content: "A landing page superou todas as expectativas. Taxa de conversão de 15%, muito acima do mercado.",
  },
];

const faqs = [
  {
    question: "Qual o prazo de entrega?",
    answer: "Landing pages são entregues em 5-7 dias úteis. Sites institucionais em 10-15 dias úteis, dependendo da complexidade e quantidade de páginas.",
  },
  {
    question: "O site será responsivo?",
    answer: "Sim! Todos os nossos sites são 100% responsivos, funcionando perfeitamente em celulares, tablets e desktops.",
  },
  {
    question: "Vocês cuidam da hospedagem?",
    answer: "Sim, oferecemos planos de hospedagem com SSL incluso, backups automáticos e suporte técnico. Você não precisa se preocupar com nada técnico.",
  },
  {
    question: "Posso editar o site depois?",
    answer: "Sim! Entregamos o site com um painel administrativo intuitivo onde você pode editar textos, imagens e adicionar conteúdo sem conhecimento técnico.",
  },
  {
    question: "Qual o investimento?",
    answer: "Landing pages a partir de R$ 997 e sites institucionais a partir de R$ 2.497. Solicite um orçamento personalizado para seu projeto.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#543295]/20 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-gray-900 group-hover:text-[#543295] transition-colors duration-300">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full bg-[#543295]/10 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#543295]" : ""}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-[#543295]" />
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function SitesLandingPagesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570]">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        
        {/* Floating Browser Mockup */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:block">
          <div className="w-[400px] bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white/10 rounded-full px-4 py-1.5 text-white/50 text-xs">
                  www.seusite.com.br
                </div>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="h-4 bg-white/20 rounded w-3/4" />
              <div className="h-3 bg-white/10 rounded w-full" />
              <div className="h-3 bg-white/10 rounded w-5/6" />
              <div className="h-20 bg-white/10 rounded-lg mt-4" />
              <div className="flex gap-3 mt-4">
                <div className="h-10 bg-purple-400/30 rounded-lg flex-1" />
                <div className="h-10 bg-white/10 rounded-lg flex-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            {/* Logo */}
            <Image 
              src="/root/logo-branca.png" 
              alt="Digital Smart" 
              width={160} 
              height={50} 
              className="h-10 w-auto object-contain mb-10" 
            />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Globe className="w-4 h-4" />
              Sites e Landing Pages
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
              Seu site
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">
                profissional
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
                em 7 dias
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-10 leading-relaxed">
              Criamos sites e landing pages de alta conversão que transformam 
              visitantes em clientes. Design exclusivo e performance garantida.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/5531984169075?text=Olá! Quero um orçamento para criação de site/landing page."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-100"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5531984169075"
                className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:bg-white/20"
              >
                <Phone className="w-5 h-5" />
                (31) 98416-9075
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#543295] font-bold text-sm uppercase tracking-widest">
              Nossos Serviços
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
              O que criamos para você
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-[#543295]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#543295] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#543295] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#543295] font-bold text-sm uppercase tracking-widest">
                Diferenciais
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Por que criar seu site conosco?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Não entregamos apenas um site bonito. Entregamos uma ferramenta 
                de vendas que trabalha 24 horas por dia para o seu negócio.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#543295]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#543295]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Portfolio Preview */}
            <div className="grid grid-cols-2 gap-4">
              {portfolio.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300`}
                >
                  <div className="text-sm text-white/70 mb-2">{item.type}</div>
                  <div className="font-bold text-lg">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#543295]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-300 font-bold text-sm uppercase tracking-widest">
              Depoimentos
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
              Clientes satisfeitos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 text-xl leading-relaxed mb-8">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-white/60 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#543295] font-bold text-sm uppercase tracking-widest">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#543295] to-[#3d2570] rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Comece Agora
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Pronto para ter seu site profissional?
              </h2>

              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                Solicite um orçamento gratuito e receba uma proposta 
                personalizada em até 24 horas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5531984169075?text=Olá! Quero um orçamento para criação de site/landing page."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-100"
                >
                  <MessageCircle className="w-6 h-6" />
                  Solicitar Orçamento Grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="mt-6 text-white/40 text-sm">
                Orçamento sem compromisso
              </p>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
