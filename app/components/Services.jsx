import { Target, Globe, Share2, ImageIcon, Bot, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads, Meta Ads e outras plataformas para atrair clientes qualificados e aumentar suas vendas de forma previsível.",
  },
  {
    icon: Globe,
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites profissionais e landing pages de alta conversão, otimizados para SEO e focados em resultados.",
  },
  {
    icon: Share2,
    title: "Gestão de Redes Sociais",
    description: "Estratégia completa de conteúdo, criação de posts e gestão profissional das suas redes sociais para fortalecer sua marca.",
  },
  {
    icon: ImageIcon,
    title: "Edições de Imagens e Vídeos",
    description: "Produção de conteúdo visual de alta qualidade, edição profissional de imagens e vídeos para redes sociais, anúncios e materiais institucionais.",
  },
  {
    icon: Bot,
    title: "Automações em IA",
    description: "Implementação de automações inteligentes com inteligência artificial para otimizar processos, atendimento e aumentar a produtividade do seu negócio.",
  },
  {
    icon: GraduationCap,
    title: "Treinamentos em Marketing",
    description: "Capacitação completa em marketing digital para você e sua equipe, com metodologias práticas e atualizadas para gerar resultados.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#543295] font-semibold text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Soluções completas para o seu negócio
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Estruturamos o marketing da sua empresa com soluções personalizadas 
            para gerar resultados consistentes e escaláveis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg mb-6 bg-[#543295]/10 text-[#543295] group-hover:bg-[#543295] group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#543295] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
