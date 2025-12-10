"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LandingFooter from "../components/LandingFooter";
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  TrendingUp, 
  Music, 
  Star,
  Sparkles,
  Play,
  Heart,
  MessageCircle,
  Phone,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus
} from "lucide-react";

const stats = [
  { value: "+300%", label: "Aumento em matrículas", icon: TrendingUp },
  { value: "+40", label: "Escolas parceiras", icon: Users },
  { value: "5.0", label: "Nota no Google", icon: Star },
];

const danceStyles = [
  "Ballet", "Jazz", "Hip Hop", "Dança de Salão", "Zumba", "Contemporâneo", "Sapateado", "Pole Dance"
];

const steps = [
  { number: "01", title: "Análise", desc: "Estudamos sua escola e concorrência" },
  { number: "02", title: "Estratégia", desc: "Criamos campanhas personalizadas" },
  { number: "03", title: "Execução", desc: "Lançamos e otimizamos os anúncios" },
  { number: "04", title: "Resultados", desc: "Você recebe alunos qualificados" },
];

const testimonials = [
  {
    name: "Maria Silva",
    school: "Studio Dance BH",
    content: "Em 3 meses triplicamos o número de alunos. O investimento se pagou já no primeiro mês!",
  },
  {
    name: "Carlos Santos",
    school: "Academia CS Dance",
    content: "Finalmente uma agência que entende escolas de dança. Resultados incríveis desde o início.",
  },
];

const faqs = [
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os primeiros leads começam a chegar já na primeira semana. Resultados consistentes e escaláveis são vistos a partir de 30 dias de campanha otimizada.",
  },
  {
    question: "Qual o investimento mínimo em anúncios?",
    answer: "Recomendamos um investimento mínimo de R$ 1.000/mês em anúncios para resultados consistentes, além da nossa taxa de gestão. O valor ideal depende do tamanho da sua cidade e objetivos.",
  },
  {
    question: "Vocês criam os anúncios e artes?",
    answer: "Sim! Cuidamos de toda a criação, desde as artes visuais até os textos persuasivos, tudo otimizado para conversão no segmento de escolas de dança.",
  },
  {
    question: "Como funciona o acompanhamento?",
    answer: "Você recebe relatórios semanais e mensais detalhados, além de ter acesso direto ao nosso time via WhatsApp para dúvidas e alinhamentos.",
  },
  {
    question: "Tem contrato de fidelidade?",
    answer: "Não trabalhamos com contratos de fidelidade. Acreditamos que os resultados falam por si. Você pode cancelar a qualquer momento com aviso prévio de 30 dias.",
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
        <div className={`w-10 h-10 rounded-full bg-[#543295]/10 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#543295] rotate-180" : ""}`}>
          {isOpen ? (
            <Minus className={`w-5 h-5 ${isOpen ? "text-white" : "text-[#543295]"}`} />
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

export default function EscolaDeDancaPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen">
      {/* Hero - Full Screen com Gradiente Purple */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#543295] via-[#6b3fa0] to-[#432476]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#543295]/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        </div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo */}
          <Image 
            src="/root/logo-branca.png" 
            alt="Digital Smart" 
            width={160} 
            height={50} 
            className="h-10 w-auto object-contain mx-auto mb-10" 
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full text-white text-sm font-medium mb-8 border border-white/20">
            <Music className="w-4 h-4" />
            Especialistas em Escolas de Dança
            <Sparkles className="w-4 h-4" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none mb-6 tracking-tight">
            Lote sua
            <span className="block bg-gradient-to-r from-purple-200 via-white to-violet-200 bg-clip-text text-transparent">
              escola de dança
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Atraia alunos apaixonados por dança com campanhas de marketing 
            digital que realmente convertem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5531984169075?text=Olá! Tenho uma escola de dança e quero mais alunos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#543295] px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/25"
            >
              <MessageCircle className="w-6 h-6" />
              Quero Mais Alunos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+5531984169075"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:bg-white/20"
            >
              <Phone className="w-5 h-5" />
              (31) 98416-9075
            </a>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-purple-300" />
                  <span className="text-4xl md:text-5xl font-black text-white">{stat.value}</span>
                </div>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* Dance Styles Marquee */}
      <section className="py-5 bg-[#3d2570] overflow-hidden">
        <div className="flex animate-scroll">
          {[...danceStyles, ...danceStyles, ...danceStyles].map((style, index) => (
            <div key={index} className="flex items-center gap-4 mx-4 whitespace-nowrap">
              <span className="text-white/80 font-medium text-lg">{style}</span>
              <Heart className="w-4 h-4 text-purple-400" />
            </div>
          ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-[#543295] font-bold text-sm uppercase tracking-widest">
              Como Funciona
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-gray-900">
              4 passos para lotar sua escola
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#543295] to-[#6b3fa0]" />
                )}
                
                <div className="relative bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#543295] to-[#6b3fa0] rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-black text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#543295] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-purple-300 font-bold text-sm uppercase tracking-widest">
              Depoimentos
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
              Escolas que transformamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/90 text-xl leading-relaxed mb-8">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-white/60">{testimonial.school}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
      <section className="py-24 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#543295]/30 via-transparent to-[#543295]/30" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#543295]/30 px-4 py-2 rounded-full text-purple-300 text-sm font-medium mb-8">
            <Play className="w-4 h-4" />
            Comece Agora
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Sua escola merece
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">
              estar lotada
            </span>
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Não perca mais tempo. Entre em contato agora e comece a 
            receber alunos qualificados ainda esta semana.
          </p>

          <a
            href="https://wa.me/5531984169075?text=Olá! Tenho uma escola de dança e quero mais alunos."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#543295] to-[#6b3fa0] text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#543295]/30"
          >
            <MessageCircle className="w-7 h-7" />
            Falar com Especialista
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-white/40 text-sm">
            Resposta em menos de 2 horas
          </p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
