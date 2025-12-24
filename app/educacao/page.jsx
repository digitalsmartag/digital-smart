"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingFooter from "../components/LandingFooter";
import { partners } from "../data/partners";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  BookOpen, 
  Star,
  Target,
  BarChart3,
  MessageCircle,
  Phone,
  Award,
  Laptop,
  Building,
  ChevronDown,
  Zap,
  Plus,
  Minus
} from "lucide-react";

const segments = [
  { icon: Building, name: "Escolas" },
  { icon: BookOpen, name: "Cursos" },
  { icon: GraduationCap, name: "Faculdades" },
  { icon: Laptop, name: "EAD" },
];

const metrics = [
  { value: "+300%", label: "Aumento em matrículas", description: "Média de crescimento dos nossos clientes" },
  { value: "-50%", label: "Custo por lead", description: "Redução no custo de aquisição" },
  { value: `+${partners.length}`, label: "Instituições", description: "Parceiros ativos em todo Brasil" },
  { value: "98%", label: "Satisfação", description: "Taxa de renovação de contratos" },
];

const features = [
  { icon: Target, title: "Segmentação Precisa", desc: "Alcance pais e alunos no momento certo da decisão" },
  { icon: BarChart3, title: "Dados em Tempo Real", desc: "Dashboard com métricas atualizadas diariamente" },
  { icon: Zap, title: "Otimização Contínua", desc: "Ajustes semanais para maximizar resultados" },
  { icon: Award, title: "Equipe Especializada", desc: "Profissionais com experiência no setor educacional" },
];

const testimonials = [
  {
    content: "Dobramos as matrículas em apenas um semestre. A Digital Smart entende profundamente o mercado educacional.",
    author: "Prof. Roberto Lima",
    role: "Diretor Acadêmico",
    institution: "Colégio Excelência",
  },
  {
    content: "O custo por lead caiu pela metade e a qualidade dos interessados aumentou significativamente.",
    author: "Dra. Carla Mendes",
    role: "Coordenadora de Marketing",
    institution: "Faculdade Inovação",
  },
];

const faqs = [
  {
    question: "Vocês trabalham com qual tipo de instituição?",
    answer: "Atendemos escolas, colégios, cursos livres, faculdades, pós-graduação, cursos técnicos e plataformas EAD. Nossa experiência abrange todo o setor educacional.",
  },
  {
    question: "Como funciona a captação de alunos?",
    answer: "Criamos campanhas segmentadas no Google e redes sociais que aparecem para pessoas buscando cursos ou escolas na sua região, direcionando para landing pages otimizadas para conversão.",
  },
  {
    question: "Qual o prazo para ver resultados?",
    answer: "Os primeiros leads chegam já na primeira semana. Resultados consistentes e escaláveis são vistos a partir de 30 dias de campanha otimizada.",
  },
  {
    question: "Vocês cuidam de toda a criação?",
    answer: "Sim! Criamos anúncios, artes, textos, landing pages e configuramos toda a automação de leads. Você só precisa atender os interessados.",
  },
  {
    question: "Qual o investimento necessário?",
    answer: "O investimento varia conforme o tamanho da instituição e objetivos. Recomendamos um mínimo de R$ 1.500/mês em anúncios para resultados consistentes, além da nossa taxa de gestão.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#543295]/20 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full bg-[#543295]/30 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#543295]" : ""}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-purple-300" />
          )}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-96 pb-6" : "max-h-0"}`}>
        <p className="text-gray-400 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function EducacaoPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#0f0a1f]">
      {/* Hero - Dark Purple Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1030_1px,transparent_1px),linear-gradient(to_bottom,#1a1030_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#543295]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#543295]/20 to-violet-600/10 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            {/* Logo */}
            <Image 
              src="/root/logo-branca.png" 
              alt="Digital Smart" 
              width={160} 
              height={50} 
              className="h-10 w-auto object-contain mb-10" 
            />

            {/* Segments Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {segments.map((segment, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center gap-2 bg-[#543295]/30 border border-[#543295]/50 px-4 py-2 rounded-full text-white text-sm font-medium"
                >
                  <segment.icon className="w-4 h-4 text-purple-300" />
                  {segment.name}
                </div>
              ))}
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
              Capte alunos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#543295] via-purple-400 to-violet-300">
                com precisão
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r pb-3 from-purple-400 to-violet-300">
                cirúrgica
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Marketing digital baseado em dados para instituições de ensino 
              que querem crescer de forma previsível e escalável.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5531984169075?text=Olá! Tenho uma instituição de ensino e quero captar mais alunos."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-gray-100"
              >
                Agendar Diagnóstico Gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5531984169075"
                className="inline-flex items-center justify-center gap-3 bg-[#543295]/30 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#543295]/50 border border-[#543295]/50"
              >
                <Phone className="w-5 h-5" />
                (31) 98416-9075
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-purple-400/50 animate-bounce" />
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-[#150d2a] relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="group relative bg-[#1a1030] rounded-2xl p-8 border border-[#543295]/30 hover:border-[#543295] transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#543295]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="text-5xl font-black text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-lg font-semibold text-[#543295] mb-1">
                    {metric.label}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0f0a1f]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Por que instituições escolhem a Digital Smart
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Combinamos tecnologia, dados e experiência no setor educacional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#1a1030] to-[#0f0a1f] rounded-3xl p-8 border border-[#543295]/30 hover:border-[#543295]/60 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#543295] to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#150d2a]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#543295]/20 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Depoimentos
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Resultados que falam por si
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#1a1030] rounded-3xl p-10 border border-[#543295]/30"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white text-xl leading-relaxed mb-8">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#543295] to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.author}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role} - {testimonial.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0f0a1f]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#543295] font-bold text-sm uppercase tracking-widest">
              Dúvidas Frequentes
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
              Perguntas e Respostas
            </h2>
          </div>

          <div className="bg-[#1a1030] rounded-3xl p-8 border border-[#543295]/30">
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
      <section className="py-24 bg-gradient-to-b from-[#0f0a1f] to-[#150d2a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#543295]/30 to-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Pronto para escalar
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#543295] to-purple-400">
              suas matrículas?
            </span>
          </h2>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Agende um diagnóstico gratuito e descubra o potencial de crescimento 
            da sua instituição com marketing digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5531984169075?text=Olá! Tenho uma instituição de ensino e quero captar mais alunos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#543295] to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#543295]/25"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-gray-500 text-sm">
            Diagnóstico gratuito e sem compromisso
          </p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
