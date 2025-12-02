import Link from "next/link";
import { Target, TrendingUp, Users, BarChart3, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

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
  { name: "Google Ads", emoji: "🔍", description: "Anúncios na busca, display e YouTube" },
  { name: "Facebook Ads", emoji: "📘", description: "Campanhas no Facebook e Instagram" },
  { name: "LinkedIn Ads", emoji: "💼", description: "Anúncios B2B profissionais" },
  { name: "TikTok Ads", emoji: "🎵", description: "Alcance o público jovem" },
];

export default function TrafegoPagoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
          <div className="absolute top-[20%] left-[10%] text-4xl animate-float">🎯</div>
          <div className="absolute bottom-[30%] right-[10%] text-4xl animate-float-delayed">💰</div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Target className="w-4 h-4 text-amber-400" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Tráfego Pago 🚀
            </h1>
            <p className="text-xl text-violet-100 mb-8 leading-relaxed">
              Campanhas estratégicas no Google Ads, Facebook Ads e Instagram para atrair 
              clientes qualificados e aumentar suas vendas de forma escalável.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-gray-900 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
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
              <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
                ✨ Benefícios
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
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
                    <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-violet-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <TrendingUp className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-violet-600">+300%</div>
                <div className="text-sm text-gray-600 mt-1">Aumento médio em vendas</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <Users className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-amber-600">+40</div>
                <div className="text-sm text-gray-600 mt-1">Empresas atendidas</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <BarChart3 className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-amber-600">5x</div>
                <div className="text-sm text-gray-600 mt-1">ROI médio</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <Target className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-black text-violet-600">100%</div>
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
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
              📱 Plataformas
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Onde anunciamos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white rounded-2xl p-6 shadow-sm border-2 border-gray-100 hover:shadow-lg hover:border-violet-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{platform.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
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
