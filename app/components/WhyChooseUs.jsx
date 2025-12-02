import { CheckCircle, Users, Rocket, Shield, HeartHandshake, TrendingUp, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Users,
    emoji: "👥",
    title: "Equipe Especializada",
    description: "Profissionais experientes e atualizados com as últimas tendências do marketing digital.",
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Resultados Comprovados",
    description: "Mais de 40 empresas parceiras satisfeitas com nossos serviços e resultados.",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "Transparência Total",
    description: "Relatórios detalhados e comunicação clara sobre o andamento de cada projeto.",
  },
  {
    icon: HeartHandshake,
    emoji: "🤝",
    title: "Atendimento Personalizado",
    description: "Soluções sob medida para as necessidades específicas do seu negócio.",
  },
  {
    icon: TrendingUp,
    emoji: "📈",
    title: "Foco em Conversão",
    description: "Estratégias orientadas a resultados que geram vendas e leads qualificados.",
  },
  {
    icon: CheckCircle,
    emoji: "✅",
    title: "Suporte Contínuo",
    description: "Acompanhamento constante e suporte dedicado para garantir seu sucesso.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-r from-violet-600 to-purple-600 border-b border-white/20 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        
        {/* Floating Emojis */}
        <div className="absolute top-[10%] right-[10%] text-4xl animate-float">💎</div>
        <div className="absolute bottom-[20%] left-[5%] text-4xl animate-float-delayed">⭐</div>
        <div className="absolute top-[50%] right-[5%] text-3xl animate-float">🎯</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Por que nos escolher
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black">
            Nosso Objetivo 💜
          </h2>
          <p className="mt-4 text-lg text-violet-100">
            Aqui na nossa empresa estamos comprometidos em fornecer soluções
            personalizadas e eficazes para cada um dos nossos clientes.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-amber-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-400/20 rounded-xl group-hover:bg-amber-400/30 transition-all group-hover:scale-110">
                  <reason.icon className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-2xl">{reason.emoji}</span>
              </div>
              <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
              <p className="text-violet-200 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform">+40</div>
            <div className="text-violet-200 mt-2">Empresas Parceiras</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform">2</div>
            <div className="text-violet-200 mt-2">Países Atendidos</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-violet-200 mt-2">Comprometimento</div>
          </div>
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-black text-amber-400 group-hover:scale-110 transition-transform">24/7</div>
            <div className="text-violet-200 mt-2">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
