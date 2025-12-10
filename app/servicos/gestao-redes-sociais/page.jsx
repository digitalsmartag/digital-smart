import Link from "next/link";
import { Share2, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Calendar, PenTool, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Gestão de Redes Sociais | Digital Smart",
  description: "Estratégia completa de conteúdo, criação de posts e gestão profissional das suas redes sociais para fortalecer sua marca.",
};

const benefits = [
  "Estratégia de conteúdo personalizada",
  "Criação de posts profissionais",
  "Calendário editorial organizado",
  "Análise de métricas e resultados",
  "Engajamento com a audiência",
  "Relatórios mensais detalhados",
];

const services = [
  { 
    icon: Calendar, 
    name: "Planejamento", 
    description: "Calendário editorial estratégico alinhado aos seus objetivos" 
  },
  { 
    icon: PenTool, 
    name: "Criação de Conteúdo", 
    description: "Posts, stories e reels profissionais para sua marca" 
  },
  { 
    icon: MessageCircle, 
    name: "Gestão de Comunidade", 
    description: "Interação e engajamento com sua audiência" 
  },
  { 
    icon: BarChart3, 
    name: "Análise de Dados", 
    description: "Métricas e insights para otimização contínua" 
  },
];

export default function GestaoRedesSociaisPage() {
  return (
    <div className="pt-20 max-lg:pt-0">
      {/* Hero */}
      <section className="pt-20 max-lg:pt-34 bg-[#543295] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Share2 className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Gestão de Redes Sociais
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Estratégia completa de conteúdo, criação de posts profissionais e gestão 
              das suas redes sociais para fortalecer sua marca e gerar resultados.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white text-[#543295] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#543295] font-semibold text-sm uppercase tracking-wider">
                Benefícios
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
                Por que investir em Gestão de Redes?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                As redes sociais são essenciais para construir autoridade, engajar 
                seu público e gerar oportunidades de negócio. Com uma gestão profissional, 
                sua marca se destaca e conquista resultados consistentes.
              </p>

              <ul className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#543295] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <TrendingUp className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">+200%</div>
                <div className="text-sm text-gray-600 mt-1">Aumento em engajamento</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Users className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">+40</div>
                <div className="text-sm text-gray-600 mt-1">Empresas atendidas</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Calendar className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">30+</div>
                <div className="text-sm text-gray-600 mt-1">Posts por mês</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Share2 className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">100%</div>
                <div className="text-sm text-gray-600 mt-1">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#543295] font-semibold text-sm uppercase tracking-wider">
              O que fazemos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Nossos Serviços
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#543295]/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#543295]/10 rounded-lg mb-4">
                  <service.icon className="w-6 h-6 text-[#543295]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
