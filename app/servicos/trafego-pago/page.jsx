import Link from "next/link";
import { Target, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Search, Share2, Briefcase, Play } from "lucide-react";

export const metadata = {
  title: "Tráfego Pago | Digital Smart",
  description: "Campanhas estratégicas no Google Ads, Facebook Ads e Instagram para atrair clientes qualificados e aumentar suas vendas.",
};

const benefits = [
  "Segmentação precisa do público-alvo",
  "Otimização contínua das campanhas",
  "Relatórios detalhados de performance",
  "ROI mensurável e escalável",
  "Testes A/B para melhor conversão",
  "Remarketing estratégico",
];

const platforms = [
  { name: "Google Ads", icon: Search, description: "Anúncios na busca, display e YouTube" },
  { name: "Meta Ads", icon: Share2, description: "Campanhas no Facebook e Instagram" },
  { name: "LinkedIn Ads", icon: Briefcase, description: "Anúncios B2B profissionais" },
  { name: "TikTok Ads", icon: Play, description: "Alcance o público jovem" },
];

export default function TrafegoPagoPage() {
  return (
    <div className="pt-20 max-lg:pt-0">
      {/* Hero */}
      <section className="pt-20 max-lg:pt-34 py-20 bg-[#543295] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Target className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tráfego Pago
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Campanhas estratégicas no Google Ads, Meta Ads e outras plataformas para atrair 
              clientes qualificados e aumentar suas vendas de forma escalável.
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
                Por que investir em Tráfego Pago?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O tráfego pago é a forma mais rápida e eficiente de colocar seu negócio 
                na frente das pessoas certas, no momento certo. Com estratégias bem 
                definidas, você pode escalar suas vendas de forma previsível.
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
                <div className="text-3xl font-bold text-[#543295]">+300%</div>
                <div className="text-sm text-gray-600 mt-1">Aumento médio em vendas</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Users className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">+40</div>
                <div className="text-sm text-gray-600 mt-1">Empresas atendidas</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <BarChart3 className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">5x</div>
                <div className="text-sm text-gray-600 mt-1">ROI médio</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
                <Target className="w-10 h-10 text-[#543295] mx-auto mb-3" />
                <div className="text-3xl font-bold text-[#543295]">100%</div>
                <div className="text-sm text-gray-600 mt-1">Foco em resultados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#543295] font-semibold text-sm uppercase tracking-wider">
              Plataformas
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
              Onde anunciamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#543295]/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#543295]/10 rounded-lg mb-4">
                  <platform.icon className="w-6 h-6 text-[#543295]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
