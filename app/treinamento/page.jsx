"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingFooter from "../components/LandingFooter";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  GraduationCap, 
  BookOpen, 
  Star,
  Target,
  MessageCircle,
  Phone,
  Award,
  Clock,
  PlayCircle,
  Lightbulb,
  Rocket,
  Video,
  FileCheck,
  Headphones,
  Plus,
  Minus,
  ChevronDown
} from "lucide-react";

const courses = [
  {
    title: "Tráfego Pago para Educação",
    description: "Domine Google Ads e Meta Ads para captar alunos qualificados",
    duration: "8h",
    level: "Intermediário",
  },
  {
    title: "Métricas e Analytics",
    description: "Aprenda a medir e otimizar o ROI das suas campanhas",
    duration: "4h",
    level: "Básico",
  },
  {
    title: "Copywriting Educacional",
    description: "Técnicas de escrita persuasiva que convertem",
    duration: "6h",
    level: "Intermediário",
  },
  {
    title: "Estratégias de Captação",
    description: "Planejamento completo para campanhas de matrícula",
    duration: "8h",
    level: "Avançado",
  },
];

const features = [
  { icon: Video, title: "Aulas Práticas", desc: "Aprenda fazendo, não apenas assistindo" },
  { icon: FileCheck, title: "Certificado", desc: "Reconhecido pelo mercado" },
  { icon: Headphones, title: "Suporte 30 dias", desc: "Tire dúvidas após o curso" },
  { icon: Users, title: "Turmas Reduzidas", desc: "Atenção personalizada" },
];

const stats = [
  { number: "500+", label: "Profissionais treinados" },
  { number: "50+", label: "Instituições" },
  { number: "98%", label: "Satisfação" },
];

const modules = [
  { num: "01", title: "Fundamentos", items: ["Marketing digital na educação", "Jornada do aluno", "Canais e estratégias"] },
  { num: "02", title: "Tráfego Pago", items: ["Google Ads", "Meta Ads", "Remarketing"] },
  { num: "03", title: "Conteúdo", items: ["Copywriting", "Landing pages", "Criativos"] },
  { num: "04", title: "Análise", items: ["Google Analytics", "Métricas", "Otimização"] },
];

const faqs = [
  {
    question: "O treinamento é online ou presencial?",
    answer: "Oferecemos ambas as modalidades. O treinamento online é ao vivo via Zoom, e o presencial pode ser realizado na sua instituição ou em nosso espaço.",
  },
  {
    question: "Quantas pessoas podem participar?",
    answer: "Não há limite mínimo. Para turmas acima de 10 pessoas, oferecemos condições especiais. Também realizamos treinamentos individuais.",
  },
  {
    question: "Preciso ter conhecimento prévio?",
    answer: "Não. Nossos treinamentos são estruturados do básico ao avançado, adequando-se ao nível de cada turma.",
  },
  {
    question: "Há suporte após o treinamento?",
    answer: "Sim! Oferecemos 30 dias de suporte via WhatsApp para dúvidas sobre a aplicação do conteúdo aprendido.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim, emitimos nota fiscal de serviços para todas as contratações, facilitando a prestação de contas da sua instituição.",
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

export default function TreinamentoPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero - Clean Purple Theme */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570]">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
                <GraduationCap className="w-4 h-4" />
                Treinamentos Especializados
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                Capacite sua
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-white">equipe</span>
              </h1>

              <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
                Treinamentos práticos em marketing digital desenvolvidos 
                especialmente para instituições de ensino.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a
                  href="https://wa.me/5531984169075?text=Olá! Quero saber mais sobre os treinamentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-100"
                >
                  Solicitar Proposta
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+5531984169075"
                  className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:bg-white/20"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Agora
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-black text-white">{stat.number}</div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Cards Stack */}
            <div className="relative hidden lg:block">
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                    style={{ marginLeft: `${index * 16}px` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold">
                        <Clock className="w-3 h-3" />
                        {course.duration}
                      </div>
                      <span className="text-xs text-white/50 font-medium">{course.level}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{course.title}</h3>
                    <p className="text-white/60 text-sm">{course.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Features - Icon Grid */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-[#543295]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#543295] transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#543295] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-[#543295]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Conteúdo Programático
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              O que você vai aprender
            </h2>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="text-5xl font-black text-white/20">
                    {module.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      {module.items.map((item, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-purple-300" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-[#432476]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
            O treinamento transformou nossa equipe. Hoje gerenciamos nossas 
            campanhas internamente com resultados superiores aos que tínhamos 
            com agências.
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xl">
              L
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Profa. Luciana Costa</div>
              <div className="text-white/60">Coordenadora de Marketing - Grupo Educacional ABC</div>
            </div>
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
                Pronto para capacitar sua equipe?
              </h2>

              <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                Solicite uma proposta personalizada e descubra como nossos 
                treinamentos podem transformar os resultados da sua instituição.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5531984169075?text=Olá! Quero saber mais sobre os treinamentos."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:bg-gray-100"
                >
                  <MessageCircle className="w-6 h-6" />
                  Falar com Especialista
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <p className="mt-6 text-white/40 text-sm">
                Proposta sem compromisso em até 24h
              </p>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
