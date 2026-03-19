"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Target, 
  TrendingUp, 
  MonitorSmartphone,
  Plus,
  Minus,
  ExternalLink,
  Instagram
} from "lucide-react";
import ContactModal from "../components/ContactModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const WHATSAPP_LINK = "https://wa.me/5531984169075?text=Olá! Gostaria de falar sobre a criação de um site/landing page para minha empresa.";


const benefits = [
  {
    title: "Mais tempo para focar no que gera resultado",
    description: "Enquanto você cuida de vender e atender seus clientes, nós cuidamos da entrega técnica do site — com processo claro e prazo definido."
  },
  {
    title: "Estruturas de alta conversão",
    description: "Sites bem estruturados, com lógica clara e foco em conversão, mantendo consistência e qualidade profissional."
  },
  {
    title: "Entregas com padrão e previsibilidade",
    description: "Processo claro do início ao fim. Você sabe exatamente o que vai receber e quando vai receber."
  },
  {
    title: "Mais margem, menos custo fixo",
    description: "Você transforma custo fixo em custo variável, mantendo margem saudável e liberdade para crescer sem risco."
  }
];

const steps = [
  {
    num: "1",
    title: "Briefing Estratégico",
    description: "Iniciamos com um entendimento profundo do seu negócio, metas e expectativas, para garantir a criação de um projeto verdadeiramente personalizado.",
    image: "/landing-sites/briefing.webp"
  },
  {
    num: "2",
    title: "Planejamento e Estrutura",
    description: "Desenvolvemos um planejamento estratégico e estruturamos o esqueleto do site, focando na organização das informações e na navegação intuitiva.",
    image: "/landing-sites/planejamento.webp"
  },
  {
    num: "3",
    title: "Design Personalizado",
    description: "Elaboramos um layout exclusivo, alinhado à sua identidade visual, sempre priorizando usabilidade e responsividade para todos os dispositivos.",
    image: "/landing-sites/design.webp"
  },
  {
    num: "4",
    title: "Desenvolvimento e Testes",
    description: "Transformamos o design em um site funcional, realizando testes rigorosos para garantir que todas as funcionalidades operem corretamente.",
    image: "/landing-sites/desenvolvimento.webp"
  },
  {
    num: "5",
    title: "Otimização e Suporte",
    description: "Após a entrega, otimizamos o site para garantir máxima performance, carregamento rápido e segurança, com assistência técnica contínua.",
    image: "/landing-sites/suporte.webp"
  }
];

const portfolio = [
  {
    title: "Uniconnect",
    type: "Site Institucional",
    description: "Plataforma de cursos técnicos EAD com sistema completo de matrículas e gestão acadêmica.",
    url: "https://www.uniconnectead.com.br",
    image: "/screenshots/uniconnectead-com-br-hero.png",
    color: "from-blue-500/80 to-indigo-600/80"
  },
  {
    title: "Juba Natural Hair",
    type: "Landing Page",
    description: "Guia completo para cuidados com cabelos cacheados e crespos nos Estados Unidos.",
    url: "https://www.jubanaturalhair.com/guia",
    image: "/screenshots/jubanaturalhair-com-hero.png",
    color: "from-purple-500/80 to-pink-600/80"
  },
  {
    title: "Aires Nails",
    type: "Landing Page",
    description: "Curso presencial exclusivo de refinamento técnico para profissionais de unhas.",
    url: "https://www.airesnails.com/",
    image: "/screenshots/airesnails-com-hero.png",
    color: "from-rose-500/80 to-pink-700/80"
  },
  {
    title: "VMARTELOZO Global Accounting",
    type: "Site Institucional",
    description: "Consultoria contábil estratégica para SMBs nos EUA com metodologia Valtax.",
    url: "https://www.vmartelozo.com/",
    image: "/screenshots/vmartelozo-com-hero.png",
    color: "from-emerald-500/80 to-teal-600/80"
  },
  {
    title: "C & R Cleaning",
    type: "Site Institucional",
    description: "Serviços profissionais de limpeza residencial e comercial na Filadélfia.",
    url: "https://www.cercleaning.com/",
    image: "/screenshots/cercleaning-com-hero.png",
    color: "from-cyan-500/80 to-blue-600/80"
  },
  {
    title: "COS - Cleaning & Organization",
    type: "Site Institucional",
    description: "Serviços de limpeza e organização profissional no Sul da Flórida.",
    url: "https://www.cleaningorganizationsolutions.com/",
    image: "/screenshots/cleaningorganizationsolutions-com-hero.png",
    color: "from-green-500/80 to-emerald-600/80"
  },
];

const features = [
  {
    icon: MonitorSmartphone,
    title: "Design Responsivo e Moderno",
    description: "Sites que se adaptam perfeitamente a celulares, tablets e computadores, garantindo a melhor experiência em qualquer dispositivo."
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    description: "Layouts pensados estrategicamente para guiar o olhar do visitante e incentivar o clique no botão de contato ou compra."
  },
  {
    icon: Clock,
    title: "Velocidade Extrema",
    description: "Códigos limpos e otimizados para garantir carregamento quase instantâneo, reduzindo a taxa de rejeição."
  },
  {
    icon: Target,
    title: "Otimização SEO",
    description: "Estrutura pronta para ser encontrada nos mecanismos de busca, com tags, metadados e hierarquia de títulos corretos."
  }
];

const faqs = [
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Cada projeto é personalizado em suas características e o tempo de entrega, mas durante o levantamento de orçamento já é passado o prazo que seu site será entregue, mas fique tranquilo(a) que a entrega é rápida!"
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Sim. Mais de 80% dos acessos vêm de celulares, então nosso processo de desenvolvimento já prioriza a experiência mobile (Mobile First), garantindo navegação fluida em qualquer dispositivo."
  },
  {
    question: "Depois de pronto tem algum valor mensal obrigatório?",
    answer: "Ao contratar, você paga pelo valor do desenvolvimento. Os únicos custos adicionais são domínio e hospedagem, que são pagos diretamente pelos provedores."
  },
  {
    question: "Vocês fazem a manutenção depois de pronto?",
    answer: "Sim! Oferecemos planos de suporte e manutenção mensais para garantir que seu site continue seguro, atualizado e funcionando perfeitamente."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#e5e5e5] last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-medium text-[#1a1a1a] pr-8 group-hover:text-[#543295] transition-colors">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#543295]" : "bg-white border border-[#e5e5e5]"}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-[#666666]" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-[#666666] leading-relaxed text-base md:text-lg pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function SitesLandingPagesPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)] min-h-screen bg-[#Fdfdfd] text-[#1a1a1a] selection:bg-[#543295] selection:text-white`}>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#Fdfdfd]/80 backdrop-blur-xl border-b border-[#e5e5e5]/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/root/logo-roxa.png" 
              alt="Digital Smart" 
              width={140} 
              height={40} 
              className="h-7 md:h-10 w-auto"
            />
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 bg-[#543295] text-white rounded-full text-sm font-semibold hover:bg-[#3d2570] transition-all duration-300"
          >
            Fazer orçamento
          </button>
        </div>
      </header>

      <main className="pt-20">

        {/* ===== HERO ===== */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(84,50,149,0.08),transparent_60%)]" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-8">
              Criação de sites, landing Pages e{" "}
              <span className="text-[#543295]">
                lojas virtuais
              </span>{" "}
              de alta conversão.
            </h1>
            
            <p className="text-lg md:text-xl text-[#666666] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Crie uma presença digital que gere resultados reais. A Digital Smart desenvolve sites, landing page e lojas virtuais, com foco em conversão, performance e design profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-[#543295] hover:bg-[#3d2570] text-white rounded-full text-base font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Fazer orçamento agora
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-[#e5e5e5] text-[#1a1a1a] rounded-full text-base font-medium transition-all duration-300 hover:border-[#543295]/30 flex items-center justify-center gap-2"
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </section>

        
        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
              <div>
                <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Portfólio</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  Veja alguns dos<br />nossos projetos
                </h2>
              </div>
              <p className="text-[#666666] text-lg mt-4 md:mt-0 max-w-md font-light">
                Cada projeto é único e desenvolvido sob medida para o negócio do cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolio.map((project, index) => (
                <a 
                  key={index}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer block"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-2 block">
                      {project.type}
                    </span>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFÍCIOS ===== */}
        <section className="py-20 md:py-28 bg-white border-y border-[#e5e5e5]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-32">
                <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Por que nos escolher</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  O que um site bem feito resolve no seu negócio
                </h2>
                <p className="text-[#666666] text-lg font-light leading-relaxed">
                  Não entregamos apenas um site bonito. Entregamos uma ferramenta de vendas que trabalha 24 horas por dia para o seu negócio.
                </p>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-[#Fdfdfd] border border-[#e5e5e5] rounded-2xl p-6 md:p-8 hover:border-[#543295]/30 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#543295]" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-[#1a1a1a] mb-2">{benefit.title}</h3>
                        <p className="text-[#666666] leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROCESSO ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 md:mb-20">
              <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Processo</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Como funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-[#Fdfdfd] border border-[#e5e5e5] rounded-2xl overflow-hidden hover:border-[#543295]/30 transition-all duration-300 h-full">
                    {/* Imagem em cima */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
                        <span className="text-[#543295] font-semibold text-lg">{item.num}</span>
                      </div>
                    </div>
                    
                    {/* Informações embaixo */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{item.title}</h3>
                      <p className="text-[#666666] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SOBRE / AUTORIDADE ===== */}
        <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/root/maxsuel.png"
                  alt="Maxsuel - Digital Smart"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
              </div>
              
              <div className="lg:col-span-3">
                <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Sobre nós</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
                  Quem está por trás dos projetos
                </h2>
                
                <div className="space-y-5 text-[#cccccc] text-lg leading-relaxed font-light">
                  <p>
                    A Digital Smart é uma agência focada em resultados reais. Nossa especialidade é unir design sofisticado com estratégias de conversão de alto impacto.
                  </p>
                  <p>
                    Não criamos apenas &quot;sites bonitos&quot;. Desenvolvemos ferramentas de vendas otimizadas para carregamento rápido, experiência do usuário impecável em celulares e estruturadas para converter visitantes em clientes reais.
                  </p>
                  <p>
                    Com experiência prática no mercado digital, entendemos exatamente o que uma empresa precisa para se destacar profissionalmente e vender mais através da internet.
                  </p>
                </div>

                
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Aqui você tem
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div key={index} className="bg-[#Fdfdfd] border border-[#e5e5e5] rounded-2xl p-8 md:p-10 hover:border-[#543295]/30 transition-all duration-300 group">
                  <feature.icon className="w-8 h-8 text-[#543295] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a1a] mb-3">{feature.title}</h3>
                  <p className="text-[#666666] leading-relaxed text-base md:text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 bg-white border-y border-[#e5e5e5]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Dúvidas</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Perguntas Frequentes
              </h2>
            </div>
            
            <div>
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

        {/* ===== CTA FINAL ===== */}
        <section className="py-24 lg:py-32 bg-[#1a1a1a] text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(84,50,149,0.15),transparent_70%)]" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Vamos construir sua presença digital?
            </h2>
            <p className="text-[#cccccc] text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Me conte um pouco sobre o seu projeto. Vou analisar e enviar uma proposta personalizada em até 24 horas.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex px-8 py-4 bg-white hover:bg-white/90 text-[#1a1a1a] rounded-full text-lg font-semibold transition-all duration-300 items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Solicitar orçamento grátis
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="mt-6 text-white/40 text-sm">
              Orçamento sem compromisso • Resposta em até 24h
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-white border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-[#543295] to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Digital Smart</span>
                <span className="text-xs text-zinc-500">Marketing Digital</span>
              </div>
            </Link>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/agencia.digitalsmart/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full transition-all duration-300"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <span className="text-zinc-300 group-hover:text-white transition-colors">@agencia.digitalsmart</span>
            </a>

            {/* Divider */}
            <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Copyright */}
            <p className="text-zinc-500 text-sm text-center">
              © {new Date().getFullYear()} Digital Smart. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} servicoPredefinido="sites-landing-pages" />
    </div>
  );
}
