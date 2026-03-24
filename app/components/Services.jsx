import Image from "next/image";

const services = [
  {
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads, Meta Ads e outras plataformas para atrair clientes qualificados e aumentar suas vendas de forma previsível.",
    image: "/root/trafego.webp",
  },
  {
    title: "Sites e Landing Pages",
    description: "Desenvolvimento de sites profissionais e landing pages de alta conversão, otimizados para SEO e focados em resultados.",
    image: "/root/landing.jpeg",
  },
  {
    title: "Gestão de Redes Sociais",
    description: "Estratégia completa de conteúdo, criação de posts e gestão profissional das suas redes sociais para fortalecer sua marca.",
    image: "/root/gestao.webp",
  },
  {
    title: "Edições de Imagens e Vídeos",
    description: "Produção de conteúdo visual de alta qualidade, edição profissional de imagens e vídeos para redes sociais, anúncios e materiais institucionais.",
    image: "/root/edicao.webp",
  },
  {
    title: "Automações em IA",
    description: "Implementação de automações inteligentes com inteligência artificial para otimizar processos, atendimento e aumentar a produtividade do seu negócio.",
    image: "/root/automacao.jpg",
  },
  {
    title: "Treinamentos em Marketing",
    description: "Capacitação completa em marketing digital para você e sua equipe, com metodologias práticas e atualizadas para gerar resultados.",
    image: "/root/marketing.webp",
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
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#543295] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
