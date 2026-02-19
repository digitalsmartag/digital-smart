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
  ExternalLink
} from "lucide-react";
import LandingFooter from "../components/LandingFooter";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const WHATSAPP_LINK = "https://wa.me/5531984169075?text=Olá! Gostaria de falar sobre a criação de um site/landing page para minha empresa.";

const marqueeItems = [
  "Site Institucional",
  "Landing Page",
  "One Page",
  "Loja Virtual",
  "Link Page",
  "Site Institucional",
  "Landing Page",
  "One Page",
  "Loja Virtual",
  "Link Page",
];

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
    description: "Iniciamos com um entendimento profundo do seu negócio, metas e expectativas, para garantir a criação de um projeto verdadeiramente personalizado."
  },
  {
    num: "2",
    title: "Planejamento e Estrutura",
    description: "Desenvolvemos um planejamento estratégico e estruturamos o esqueleto do site, focando na organização das informações e na navegação intuitiva."
  },
  {
    num: "3",
    title: "Design Personalizado",
    description: "Elaboramos um layout exclusivo, alinhado à sua identidade visual, sempre priorizando usabilidade e responsividade para todos os dispositivos."
  },
  {
    num: "4",
    title: "Desenvolvimento e Testes",
    description: "Transformamos o design em um site funcional, realizando testes rigorosos para garantir que todas as funcionalidades operem corretamente."
  },
  {
    num: "5",
    title: "Otimização e Suporte",
    description: "Após a entrega, otimizamos o site para garantir máxima performance, carregamento rápido e segurança, com assistência técnica contínua."
  }
];

const portfolio = [
  {
    title: "Clínica Estética Premium",
    type: "Site Institucional",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    color: "from-rose-500/80 to-pink-600/80"
  },
  {
    title: "Escritório de Advocacia",
    type: "One Page",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    color: "from-slate-700/80 to-slate-900/80"
  },
  {
    title: "Academia Fitness Pro",
    type: "Landing Page",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    color: "from-orange-500/80 to-red-600/80"
  },
  {
    title: "Restaurante Gourmet",
    type: "Site Institucional",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    color: "from-amber-600/80 to-yellow-700/80"
  },
  {
    title: "Consultoria Financeira",
    type: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    color: "from-emerald-500/80 to-teal-600/80"
  },
  {
    title: "Escola de Idiomas",
    type: "Site Institucional",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    color: "from-violet-500/80 to-purple-600/80"
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
    question: "Vocês trabalham com WordPress ou construtores de página?",
    answer: "Trabalhamos com tecnologias modernas (React, Next.js) que garantem muito mais velocidade, segurança e personalização do que plataformas tradicionais. Seu site carregará mais rápido e será mais seguro."
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Para Landing Pages, o prazo médio é de 5 a 7 dias úteis após a aprovação do design. Para sites institucionais mais complexos, o prazo varia de 10 a 15 dias úteis."
  },
  {
    question: "O site vai funcionar bem no celular?",
    answer: "Sim. Mais de 80% dos acessos vêm de celulares, então nosso processo de desenvolvimento já prioriza a experiência mobile (Mobile First), garantindo navegação fluida em qualquer dispositivo."
  },
  {
    question: "Depois de pronto tem algum valor mensal obrigatório?",
    answer: "Ao contratar, você paga pelo valor do desenvolvimento. Os únicos custos adicionais são domínio (~R$45/ano) e hospedagem (~R$50 a R$100/trimestral). Indicamos os melhores provedores."
  },
  {
    question: "Vocês fazem a manutenção depois de pronto?",
    answer: "Sim! Oferecemos planos de suporte e manutenção mensais para garantir que seu site continue seguro, atualizado e funcionando perfeitamente."
  }
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-[#2a2a2a] last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 md:py-6 flex items-center justify-between text-left group"
      >
        <span className="text-base md:text-lg font-medium text-white/90 pr-8 group-hover:text-white transition-colors">
          {question}
        </span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#543295] rotate-0" : "bg-white/5 border border-white/10"}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-white/50" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-white/50 leading-relaxed text-base md:text-lg pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function SitesLandingPagesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className={`${poppins.variable} font-[family-name:var(--font-poppins)] min-h-screen bg-[#0e0e0e] text-white selection:bg-[#543295] selection:text-white`}>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Image 
              src="/root/logo-branca.png" 
              alt="Digital Smart" 
              width={140} 
              height={40} 
              className="h-7 md:h-8 w-auto"
            />
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white text-[#0e0e0e] rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300"
          >
            Fazer orçamento
          </a>
        </div>
      </header>

      <main className="pt-20">

        {/* ===== HERO ===== */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(84,50,149,0.15),transparent_60%)]" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-8">
              Criação de sites e{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a881ff] to-[#c4a1ff]">
                estruturas digitais
              </span>{" "}
              para sua empresa.
            </h1>
            
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Produção de sites institucionais, landing pages e one pages sob demanda, com foco em conversão, velocidade e design profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-[#0e0e0e] rounded-full text-base font-semibold transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Fazer orçamento agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-8 py-4 border border-white/15 text-white/70 rounded-full text-base font-medium transition-all duration-300 hover:border-white/30 hover:text-white flex items-center justify-center gap-2"
              >
                Ver portfólio
              </a>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE DE SERVIÇOS ===== */}
        <section className="py-6 border-y border-white/5 overflow-hidden">
          <div className="relative flex">
            <div className="flex animate-marquee gap-8 whitespace-nowrap">
              {[...marqueeItems, ...marqueeItems].map((item, index) => (
                <div key={index} className="flex items-center gap-8">
                  <span className="text-sm md:text-base font-medium text-white/30 uppercase tracking-widest">
                    {item}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#543295]" />
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}</style>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
              <div>
                <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Portfólio</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  Veja alguns dos<br />nossos projetos
                </h2>
              </div>
              <p className="text-white/40 text-lg mt-4 md:mt-0 max-w-md font-light">
                Cada projeto é único e desenvolvido sob medida para o negócio do cliente.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolio.map((project, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
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
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BENEFÍCIOS ===== */}
        <section className="py-20 md:py-28 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="lg:sticky lg:top-32">
                <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Por que nos escolher</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  O que um site bem feito resolve no seu negócio
                </h2>
                <p className="text-white/40 text-lg font-light leading-relaxed">
                  Não entregamos apenas um site bonito. Entregamos uma ferramenta de vendas que trabalha 24 horas por dia para o seu negócio.
                </p>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-[#543295]/30 transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="mt-0.5 flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#a881ff]" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-white/40 leading-relaxed">{benefit.description}</p>
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
              <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Processo</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Como funciona
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 h-full hover:border-[#543295]/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#543295]/10 border border-[#543295]/20 flex items-center justify-center mb-6">
                      <span className="text-[#a881ff] font-semibold text-lg">{item.num}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white/40 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SOBRE / AUTORIDADE ===== */}
        <section className="py-20 md:py-28 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/root/maxsuel.png"
                  alt="Maxsuel - Digital Smart"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              </div>
              
              <div className="lg:col-span-3">
                <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Sobre nós</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8">
                  Quem está por trás dos projetos
                </h2>
                
                <div className="space-y-5 text-white/50 text-lg leading-relaxed font-light">
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

                <div className="mt-10 flex gap-12 pt-10 border-t border-white/5">
                  <div>
                    <div className="text-4xl font-semibold text-white mb-1">+150</div>
                    <div className="text-sm text-white/30 uppercase tracking-wider">Projetos</div>
                  </div>
                  <div>
                    <div className="text-4xl font-semibold text-white mb-1">98%</div>
                    <div className="text-sm text-white/30 uppercase tracking-wider">Satisfação</div>
                  </div>
                  <div>
                    <div className="text-4xl font-semibold text-white mb-1">7 dias</div>
                    <div className="text-sm text-white/30 uppercase tracking-wider">Prazo médio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Aqui você tem
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 md:p-10 hover:border-[#543295]/30 transition-all duration-300 group">
                  <feature.icon className="w-8 h-8 text-[#a881ff] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/40 leading-relaxed text-base md:text-lg">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 md:py-28 bg-[#141414]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Dúvidas</span>
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
        <section className="py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(84,50,149,0.2),transparent_70%)]" />
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Vamos construir sua presença digital?
            </h2>
            <p className="text-white/40 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
              Me conte um pouco sobre o seu projeto. Vou analisar e enviar uma proposta personalizada em até 24 horas.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-8 py-4 bg-white hover:bg-white/90 text-[#0e0e0e] rounded-full text-lg font-semibold transition-all duration-300 items-center justify-center gap-2 hover:scale-[1.02]"
            >
              Solicitar orçamento grátis
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-6 text-white/20 text-sm">
              Orçamento sem compromisso • Resposta em até 24h
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
