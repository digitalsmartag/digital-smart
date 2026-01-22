"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  ArrowUpRight,
  Check,
  Shield,
  ChevronDown,
  ChevronUp,
  Play,
  Star,
  Mail,
  MapPin,
  Phone,
  Eye
} from "lucide-react";

const HOTMART_LINK = "https://pay.hotmart.com/G103687377H?off=dh7vs4ag&bid=1769039048750";

const services = [
  { num: "01", category: "Vendas", title: "Técnicas de Fechamento", desc: "Domine as melhores técnicas para converter leads em matrículas com alta taxa de conversão" },
  { num: "02", category: "Prospecção", title: "Captação de Alunos", desc: "Aprenda a encontrar e qualificar os melhores leads para sua instituição de ensino" },
  { num: "03", category: "Apresentação", title: "Pitch Irresistível", desc: "Estruture apresentações que convencem pais e alunos a escolherem sua escola" },
  { num: "04", category: "Negociação", title: "Quebra de Objeções", desc: "Transforme objeções em oportunidades e feche mais matrículas" },
  { num: "05", category: "Fidelização", title: "Pós-Venda Estratégico", desc: "Crie um sistema de indicações que multiplica seus resultados" },
];

const processSteps = [
  { title: "Mentalidade", items: ["Mindset de alta performance", "Gestão emocional em vendas", "Rotina produtiva"] },
  { title: "Método", items: ["Prospecção inteligente", "Qualificação de leads", "Apresentação estruturada"] },
  { title: "Resultado", items: ["Fechamento consistente", "Indicações espontâneas", "Crescimento escalável"] },
];

const faqs = [
  { q: "Para quem é esse curso?", a: "Donos de escolas, cursos, faculdades e instituições de ensino que querem aumentar suas matrículas e construir uma equipe comercial de alta performance." },
  { q: "Quanto tempo de acesso?", a: "1 ano de acesso completo a todo o conteúdo e atualizações." },
  { q: "Tem garantia?", a: "7 dias de garantia incondicional. Não gostou, devolvemos 100%." },
  { q: "Posso parcelar?", a: "Sim, em até 10x de R$ 8,99 no cartão de crédito." },
];

const marqueeText = "VENDAS EDUCACIONAIS • MATRÍCULAS • CONVERSÃO • FECHAMENTO • PROSPECÇÃO • RESULTADOS • ";

export default function EducacaoPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden selection:bg-violet-500/30">
      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-[#0d0d0d] to-indigo-950/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-20 lg:pt-0">
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              Sua escola está <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                perdendo matrículas
              </span>
              <br className="hidden sm:block" />
              por falta de método?
            </h1>

            {/* Subtitle */}
            <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              Descubra como transformar sua equipe comercial em uma 
              <strong className="text-white"> máquina de captação de alunos</strong> com 
              técnicas testadas no mercado educacional.
            </p>

            {/* Pain Points */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {[
                "Equipe sem método de vendas",
                "Baixa conversão de leads",
                "Matrículas abaixo da meta",
                "Concorrência agressiva",
              ].map((pain, i) => (
                <div key={i} className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
                  <span className="text-red-400 text-sm">✕</span>
                  <span className="text-zinc-300 text-sm">{pain}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105"
              >
                Quero Resolver Isso Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-center sm:text-left">
                <div className="text-zinc-500 line-through text-sm">De R$ 297,00</div>
                <div className="text-2xl font-black text-white">R$ 89,90 <span className="text-sm font-normal text-zinc-400">ou 10x de R$ 8,99</span></div>
              </div>
            </div>

            {/* Trust */}
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                7 dias de garantia
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Acesso imediato
              </div>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-zinc-500 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* MARQUEE TEXT SLIDER */}
      <div className="py-8 border-y border-white/5 overflow-hidden max-md:mt-18">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-black text-white/5 mx-4">
              {marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* ABOUT SECTION - SOBRE O MAXSUEL */}
      <section id="about" className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-2xl" />
              <div className="relative">
                <Image
                  src="/landing-educacao/maxsuel.webp"
                  alt="Maxsuel Moreira Silva"
                  width={500}
                  height={600}
                  className="rounded-3xl object-cover w-full"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-[#111] border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                      <Star className="w-6 h-6 text-violet-400" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">Especialista</div>
                      <div className="text-zinc-400 text-xs">Vendas Educacionais</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Quem Criou Este Método</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                Maxsuel <span className="text-violet-400">Moreira Silva</span>
              </h2>
              
              <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-8">
                <p>
                  <strong className="text-white">Consultor especializado em vendas para o setor educacional.</strong> Desenvolveu 
                  uma metodologia prática focada em ajudar donos de escolas, cursos e faculdades a estruturarem 
                  seus processos comerciais.
                </p>
                <p>
                  Seu método foi criado a partir da vivência real no mercado educacional, entendendo as 
                  <strong className="text-white"> dores específicas</strong> de quem precisa captar alunos em um 
                  mercado cada vez mais competitivo.
                </p>
                <p>
                  A abordagem é <strong className="text-white">100% prática e aplicável</strong>, sem teorias 
                  genéricas. Tudo o que você vai aprender pode ser implementado imediatamente na sua instituição.
                </p>
              </div>

              {/* What He Delivers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "📈", text: "Método de captação estruturado" },
                  { icon: "🎯", text: "Scripts de vendas prontos" },
                  { icon: "💡", text: "Estratégias de conversão" },
                  { icon: "🔄", text: "Processos replicáveis" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-zinc-300 bg-white/5 rounded-xl p-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-6">
                <p className="text-zinc-300 italic">
                  &ldquo;Criei este curso para entregar exatamente o que eu gostaria de ter recebido quando 
                  comecei a trabalhar com vendas no setor educacional: um método claro, prático e que funciona.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES/MODULES SECTION */}
      <section id="services" className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Conteúdo do Curso</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              O Que Você Vai <span className="text-violet-400">Aprender</span>
            </h2>
          </div>

          {/* Services List */}
          <div className="space-y-0 md:hidden">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group border-b border-white/5 py-8 md:py-10 hover:bg-white/[0.02] transition-all duration-300 px-4 -mx-4"
              >
                <div className="flex flex-row md:flex-row justify-between md:items-center gap-4 md:gap-8">
                  {/* Number & Category */}
                  <div>
                    <div className="flex items-center gap-6 md:w-48">
                    <span className="text-zinc-600 font-mono text-sm">{service.num}</span>
                    <span className="text-violet-400 text-sm uppercase tracking-wider">{service.category}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white flex-1 group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-500 text-sm md:w-80 hidden lg:block">
                    {service.desc}
                  </p>
                  </div>
                  
                  {/* Arrow */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-0 max-md:hidden">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group border-b border-white/5 py-8 md:py-10 hover:bg-white/[0.02] transition-all duration-300 px-4 -mx-4"
              >
                <div className="flex flex-row md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Number & Category */}
                  <div className="flex items-center gap-6 md:w-48">
                    <span className="text-zinc-600 font-mono text-sm">{service.num}</span>
                    <span className="text-violet-400 text-sm uppercase tracking-wider">{service.category}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white flex-1 group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-zinc-500 text-sm md:w-80 hidden lg:block">
                    {service.desc}
                  </p>
                  
                  {/* Arrow */}
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-600 transition-all">
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Metodologia</span>
            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Seu Caminho Para o <span className="text-violet-400">Sucesso</span>
            </h2>
          </div>

          {/* Process Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div 
                key={i}
                className="group bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500"
              >
                <h3 className="text-3xl font-black text-white mb-6">{step.title}</h3>
                <p className="text-zinc-500 mb-8 text-sm">
                  Desenvolva habilidades essenciais para dominar o mercado educacional.
                </p>
                <ul className="space-y-3">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-zinc-400 text-sm">
                      <Check className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-32 lg:py-40 relative">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[200px]" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Pronto para
              <span className="text-violet-400"> transformar </span>
              sua captação?
            </h2>
            
            {/* Subtitle */}
            <p className="mt-6 text-zinc-400 text-xl max-w-xl mx-auto">
              Acesso completo ao método por 1 ano. Sem enrolação, direto ao ponto.
            </p>
            
            {/* Includes */}
            <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
              {[
                "5 módulos práticos",
                "1 ano de acesso",
                "Atualizações inclusas",
                "Suporte por e-mail",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mt-16">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="text-zinc-600 line-through text-2xl">R$ 297</span>
                <span className="text-violet-400 text-sm font-bold">-70%</span>
              </div>
              <div className="text-8xl md:text-9xl font-black text-white tracking-tighter">
                R$ 89<span className="text-5xl text-zinc-500">,90</span>
              </div>
              <div className="text-zinc-500 mt-3 text-lg">ou 10x de R$ 8,99</div>
            </div>

            {/* CTA */}
            <a
              href={HOTMART_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-12 inline-flex items-center gap-3 bg-violet-600 hover:bg-violet-500 px-12 py-5 rounded-full font-bold text-lg transition-all duration-300"
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Guarantee */}
            <div className="mt-8 flex items-center justify-center gap-3 text-zinc-500">
              <Shield className="w-5 h-5 text-green-400" />
              <span>7 dias de garantia incondicional</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">FAQ</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4">
                Dúvidas <span className="text-violet-400">Frequentes</span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40' : 'max-h-0'}`}>
                    <div className="px-6 py-5 text-zinc-400 border-t border-white/5">
                      {faq.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER - Get In Touch */}
      <footer className="py-24 lg:py-32 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Big Text */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white/5">
              Comece Agora
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left */}
            <div>
              <p className="text-zinc-400 text-lg mb-8 max-w-md">
                Transforme sua carreira no setor educacional. Junte-se a centenas de profissionais que já dominam a arte de vender educação.
              </p>
              <a 
                href={HOTMART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl md:text-3xl font-bold text-violet-400 hover:text-violet-300 transition-colors"
              >
                Garantir Minha Vaga →
              </a>
            </div>

            {/* Right - Social Links */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Instagram", icon: ArrowUpRight },
                { name: "YouTube", icon: ArrowUpRight },
                { name: "Facebook", icon: ArrowUpRight },
                { name: "WhatsApp", icon: ArrowUpRight },
              ].map((social, i) => (
                <a 
                  key={i}
                  href="#"
                  className="flex items-center justify-between py-4 border-b border-white/10 text-zinc-400 hover:text-white transition-colors group"
                >
                  {social.name}
                  <social.icon className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-600 text-sm">
              © {new Date().getFullYear()} Dominando as Vendas Educacionais. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-zinc-600">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
