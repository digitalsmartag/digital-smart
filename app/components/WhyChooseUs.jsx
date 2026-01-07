import { CheckCircle, Users, Rocket, Shield, HeartHandshake, TrendingUp } from "lucide-react";
import { partners } from "../data/partners";

const reasons = [
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais experientes e atualizados com as últimas tendências do marketing digital.",
  },
  {
    icon: Rocket,
    title: "Resultados Comprovados",
    description: `Mais de ${partners.length} empresas parceiras satisfeitas com nossos serviços e resultados.`,
  },
  {
    icon: Shield,
    title: "Transparência Total",
    description: "Relatórios detalhados e comunicação clara sobre o andamento de cada projeto.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Personalizado",
    description: "Soluções sob medida para as necessidades específicas do seu negócio.",
  },
  {
    icon: TrendingUp,
    title: "Foco em Conversão",
    description: "Estratégias orientadas a resultados que geram vendas e leads qualificados.",
  },
  {
    icon: CheckCircle,
    title: "Suporte Contínuo",
    description: "Acompanhamento constante e suporte dedicado para garantir seu sucesso.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#543295] text-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white/80 font-semibold text-sm uppercase tracking-wider">
            Por que nos escolher
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold">
            Nosso Compromisso
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Estamos comprometidos em fornecer soluções personalizadas e eficazes 
            para cada um dos nossos clientes.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-lg mb-4 group-hover:bg-white/20 transition-all">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
