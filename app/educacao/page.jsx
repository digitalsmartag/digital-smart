import Image from "next/image";
import { HiArrowRight, HiCheckCircle, HiShieldCheck, HiStar } from "react-icons/hi2";
import SwupProvider from "./components/SwupProvider";
import FAQ from "./components/FAQ";
import "./components/animations.css";

const HOTMART_LINK = "https://pay.hotmart.com/G103687377H?off=dh7vs4ag&bid=1769039048750";

const marqueeText = "VENDAS EDUCACIONAIS • MATRÍCULAS • CONVERSÃO • FECHAMENTO • PROSPECÇÃO • RESULTADOS • ";

const targetAudience = [
  "Já empreende vendendo cursos educacionais, mas não tem um processo claro de vendas",
  "Sofre com atendimentos confusos, leads frios ou pouca conversão",
  "Quer passar mais credibilidade para alunos e parceiros",
  "Deseja aumentar o faturamento e o número de matrículas",
  "Quer parar de \"testar no escuro\" e aplicar um método validado no mercado",
];

const modules = [
  {
    num: "01",
    title: "Estrutura que gera credibilidade",
    desc: "Aprenda como estruturar sua empresa educacional para transmitir confiança, profissionalismo e segurança desde o primeiro contato com o aluno.",
  },
  {
    num: "02",
    title: "Onde anunciar e como atrair alunos certos",
    desc: "Descubra onde anunciar seus cursos, quais canais fazem mais sentido para o mercado educacional e como atrair pessoas realmente interessadas em se matricular.",
  },
  {
    num: "03",
    title: "Vendas na prática: do atendimento ao pós-venda",
    desc: "Um passo a passo completo de vendas educacionais: abordagem, diagnóstico, apresentação da oferta, fechamento e estratégias de pós-venda para fidelizar alunos.",
  },
];

export default function EducacaoPage() {
  return (
    <SwupProvider>
      <div id="swup-main" className="transition-main min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden selection:bg-violet-500/30">
        
        {/* ============================================
            SEÇÃO 1 — HERO (Split Screen Layout)
            ============================================ */}
        <section className="relative min-h-screen lg:h-screen overflow-hidden">
          
          {/* ========== MOBILE LAYOUT ========== */}
          <div className="lg:hidden relative max-h-[80vh]">
            {/* Background Image - Mobile */}
            <div className="absolute inset-0">
              <Image
                src="/landing-educacao/max-hero.webp"
                alt="Maxsuel Moreira"
                fill
                className="object-cover object-top max-md:object-contain max-md:scale-85 max-md:pl-10 max-md:object-bottom max-md:absolute"
                priority
              />
              {/* Overlay gradients */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-transparent to-[#0d0d0d]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/80 via-[#0d0d0d]/40 to-transparent" />
            </div>

            {/* Content - Mobile */}
            <div className="relative z-10 min-h-screen flex flex-col justify-end px-5 pb-10 pt-20">
              {/* Badge */}
              <div data-animate="fade-down" className="inline-flex items-center gap-2 bg-violet-500/20 backdrop-blur-sm border border-violet-500/30 rounded-full px-3 py-1.5 mb-4 w-fit">
                <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
                <span className="text-violet-300 text-xs font-medium">Curso Online</span>
              </div>

              {/* Title */}
              <h1 data-animate="fade-up" data-delay="100" className="text-5xl sm:text-4xl font-black leading-[1.1] tracking-tight">
                <span className="text-white">Dominando as</span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Vendas Educacionais
                </span>
              </h1>

              {/* Subtitle */}
              <p data-animate="fade-up" data-delay="200" className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-[280px]">
                O passo a passo prático para estruturar sua empresa educacional e aumentar o número de alunos.
              </p>

              {/* CTA */}
              <div data-animate="fade-up" data-delay="300" className="mt-6">
                <a
                  href={HOTMART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 rounded-full font-bold text-sm transition-all duration-300"
                >
                  Quero começar agora
                  <HiArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Trust indicators - Mobile */}
              <div data-animate="fade-up" data-delay="400" className="mt-6 flex items-center gap-4 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <HiShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  <span>7 dias garantia</span>
                </div>
                
              </div>
            </div>
          </div>

          {/* ========== DESKTOP LAYOUT ========== */}
          <div className="hidden lg:block relative z-10 h-full">
            <div className="flex flex-row h-full">
              
              {/* LEFT SIDE - Content */}
              <div className="flex-1 flex items-center justify-center px-12 xl:px-20">
                <div className="max-w-xl">
                  {/* Badge */}
                  <div data-animate="fade-down" className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                    <span className="text-violet-300 text-sm font-medium">Curso Online • Acesso Imediato</span>
                  </div>

                  {/* Title */}
                  <h1 data-animate="fade-up" data-delay="100" className="text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
                    <span className="text-white">Dominando as</span>
                    <br />
                    <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                      Vendas Educacionais
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p data-animate="fade-up" data-delay="200" className="mt-6 text-lg text-zinc-400 leading-relaxed">
                    O passo a passo prático para estruturar sua empresa educacional, gerar credibilidade e aumentar o número de alunos de forma previsível.
                  </p>

                  {/* CTA */}
                  <div data-animate="fade-up" data-delay="300" className="mt-8">
                    <a
                      href={HOTMART_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105"
                    >
                      Quero começar agora
                      <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Image */}
              <div className="relative w-1/2 xl:w-[50%]">
                {/* Background gradient para a imagem */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-900/40 via-violet-800/20 to-indigo-900/30" />
                
                {/* Gradiente de transição lateral (esquerda) */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-[1]" />
               
                {/* Image Container */}
                <div className="relative h-full flex items-end justify-center" data-animate="fade-left" data-delay="300">
                  <Image
                    src="/landing-educacao/max-hero.webp"
                    alt="Maxsuel Moreira - Especialista em Vendas Educacionais"
                    width={550}
                    height={700}
                    className="relative z-10 w-auto h-[85vh] object-contain object-bottom"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gradient fade no final da hero - transição suave */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent z-20 pointer-events-none" />
        </section>

        {/* MARQUEE TEXT SLIDER
        <div className="py-8 border-y border-white/5 overflow-hidden ">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl font-black text-white/5 mx-4">
                {marqueeText}
              </span>
            ))}
          </div>
        </div> */}

        {/* ============================================
            SEÇÃO 2 — Para quem é este curso
            ============================================ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16" data-animate="fade-up">
                <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Público Alvo</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4">
                  Esse curso é para <span className="text-violet-400">você que:</span>
                </h2>
              </div>

              {/* Target Audience List */}
              <div className="space-y-4 mb-12" data-animate-stagger>
                {targetAudience.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-gradient-to-r from-white/5 to-transparent border border-white/5 rounded-2xl p-5 card-hover"
                  >
                    <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <HiCheckCircle className="w-5 h-5 text-violet-400" />
                    </div>
                    <p className="text-zinc-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>

              {/* Closing Statement */}
              <div className="text-center" data-animate="scale-up" data-delay="300">
                <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-8">
                  <p className="text-xl text-zinc-300">
                    Se você quer transformar sua operação de vendas educacionais em um negócio <strong className="text-white">estruturado e profissional</strong>, você está no lugar certo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SEÇÃO 3 — O que você vai aprender
            ============================================ */}
        <section className="py-24 lg:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8" data-animate="fade-down">
              <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Estrutura do Curso</span>
              <h2 className="text-4xl md:text-5xl font-black mt-4">
                O que você vai aprender no <br className="hidden md:block" />
                <span className="text-violet-400">Dominando as Vendas Educacionais</span>
              </h2>
            </div>

            {/* Intro Text */}
            <p className="text-center text-zinc-400 text-lg max-w-2xl mx-auto mb-16" data-animate="fade-up" data-delay="200">
              O curso é direto ao ponto, prático e focado em aplicação real. Você vai aprender exatamente o que precisa para vender mais cursos com organização e autoridade.
            </p>

            {/* Modules */}
            <div className="grid md:grid-cols-3 gap-8">
              {modules.map((module, i) => (
                <div
                  key={i}
                  data-animate="flip-up"
                  data-delay={`${(i + 1) * 200}`}
                  className="group bg-gradient-to-b from-white/5 to-transparent border border-white/5 rounded-3xl p-8 hover:border-violet-500/30 transition-all duration-500 card-hover"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl font-black text-violet-500/30">{module.num}</span>
                    <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-400 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {module.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SEÇÃO 4 — Diferencial do curso
            ============================================ */}
        <section className="py-24 lg:py-32 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[150px] -translate-y-1/2" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div data-animate="fade-right">
                  <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Diferencial</span>
                  <h2 className="text-4xl md:text-5xl font-black mt-4 mb-8">
                    Aqui você aprende vendas educacionais <span className="text-violet-400">na prática</span>
                  </h2>
                  
                  <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                    <p>
                      Este <strong className="text-white">não é um curso teórico</strong> ou genérico sobre vendas.
                    </p>
                    <p>
                      Você vai aprender um método aplicado diariamente por empresas reais, com processos simples, replicáveis e focados em resultado.
                    </p>
                  </div>
                </div>

                {/* Right - Highlights */}
                <div className="space-y-4" data-animate="fade-left" data-delay="200">
                  {[
                    { icon: "❌", text: "Nada de achismos" },
                    { icon: "❌", text: "Nada de fórmulas mágicas" },
                    { icon: "✅", text: "Apenas estratégias testadas no mercado educacional" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-5"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-zinc-300 text-lg font-medium">{item.text}</p>
                    </div>
                  ))}

                  <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-6 mt-6">
                    <p className="text-zinc-300 text-lg">
                      Estratégias testadas para você <strong className="text-white">aplicar no seu negócio.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SEÇÃO 5 — Quem será seu mentor
            ============================================ */}
        <section className="py-24 lg:py-32 bg-[#0a0a0a]">
          <div className="container mx-auto px-4 lg:px-8 flex flex-col items-center w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl">
              {/* Left - Photo */}
              <div className="relative max-w-md mx-auto lg:mx-0" data-animate="fade-right">
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <Image
                    src="/landing-educacao/maxsuel.webp"
                    alt="Maxsuel Moreira"
                    width={400}
                    height={480}
                    className="rounded-3xl object-cover w-full"
                  />
                  {/* Floating Card */}
                  <div className="absolute -bottom-6 -right-6 bg-[#111] border border-white/10 rounded-2xl p-5 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center">
                        <HiStar className="w-6 h-6 text-violet-400" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">+5 anos</div>
                        <div className="text-zinc-400 text-xs">de experiência</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div data-animate="fade-left" data-delay="200">
                <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">Seu Mentor</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6">
                  Quem vai te guiar <span className="text-violet-400">nessa jornada</span>
                </h2>
                
                <div className="space-y-4 text-zinc-400 text-lg leading-relaxed mb-8">
                  <p>
                    Meu nome é <strong className="text-white">Maxsuel Moreira</strong>, sou gestor em marketing e vendas, fundador da Digital Smart e especialista em vendas educacionais.
                  </p>
                  <p>
                    Atuo no mercado digital desde 2020, com mais de <strong className="text-white">5 anos de experiência</strong>, ajudando mais de <strong className="text-white">100 empresas</strong> do setor educacional a estruturarem seus processos de vendas, aumentarem a credibilidade e escalarem o faturamento.
                  </p>
                  <p>
                    Criei este curso para ajudar empresários como você a montar uma estrutura sólida, profissional e lucrativa, sem depender de tentativas aleatórias.
                  </p>
                </div>

               
              </div>
            </div>
          </div>
        </section>

        {/* ============================================
            SEÇÃO 6 — Dúvidas Frequentes
            ============================================ */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16" data-animate="fade-up">
                <span className="text-violet-400 font-semibold text-sm uppercase tracking-widest">FAQ</span>
                <h2 className="text-4xl md:text-5xl font-black mt-4">
                  Dúvidas <span className="text-violet-400">frequentes</span>
                </h2>
              </div>

              {/* FAQ Component */}
              <FAQ />
            </div>
          </div>
        </section>

        {/* ============================================
            SEÇÃO 7 — Oferta e Chamada para Ação
            ============================================ */}
        <section className="py-32 lg:py-40 relative">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[200px]" />
          </div>
          
          <div className="container mx-auto px-4 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" data-animate="scale-up">
                Invista hoje no crescimento do seu
                <span className="text-violet-400"> negócio educacional</span>
              </h2>

              {/* Price */}
              <div className="mt-12" data-animate="fade-up" data-delay="200">
                <div className="inline-flex items-center gap-4 mb-4">
                  <span className="text-zinc-600 line-through text-2xl">De R$ 129,90</span>
                </div>
                <div className="text-lg text-zinc-400 mb-2">Por apenas</div>
                <div className="text-7xl md:text-8xl font-black text-white tracking-tighter">
                  R$ 89<span className="text-4xl text-zinc-500">,90</span>
                </div>
                <span className="text-xl font-normal text-zinc-400 ml-2">à vista</span>
                <div className="text-zinc-400 mt-3 text-lg">Ou 12x de R$ 8,90 no cartão</div>
              </div>

              {/* Benefits */}
              <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4" data-animate="fade-up" data-delay="300">
                {[
                  "Acesso imediato",
                  "Acesso vitalício",
                  "Plataforma Hotmart",
                  "7 dias de garantia",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <HiCheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="mt-8 text-zinc-400 text-lg max-w-xl mx-auto" data-animate="fade-up" data-delay="400">
                Tenha acesso imediato ao <strong className="text-white">Dominando as Vendas Educacionais</strong> e comece hoje mesmo a estruturar sua empresa para vender mais, com mais organização e credibilidade.
              </p>

              {/* CTA */}
              <div data-animate="bounce-in" data-delay="500">
                <a
                  href={HOTMART_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-12 py-6 max-md:px-6 max-md:text-lg rounded-full font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/30 hover:scale-105 animate-pulse-glow"
                >
                  👉 Garanta sua vaga agora e transforme suas vendas educacionais
                  <HiArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Guarantee */}
              <div className="mt-8 flex items-center justify-center gap-3 text-zinc-500" data-animate="fade-up" data-delay="600">
                <HiShieldCheck className="w-5 h-5 text-green-400" />
                <span>7 dias de garantia incondicional</span>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-16 border-t border-white/5">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Big Text */}
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white/5">
                Comece Agora
              </h2>
            </div>

            {/* Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
    </SwupProvider>
  );
}
