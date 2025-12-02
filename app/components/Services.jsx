import Link from "next/link";
import { Target, Globe, Zap, ImageIcon, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const services = [
  {
    icon: Target,
    emoji: "🎯",
    title: "Tráfego Pago",
    description: "Campanhas estratégicas no Google Ads, Facebook Ads e Instagram para atrair clientes qualificados e aumentar suas vendas.",
    href: "/servicos/trafego-pago",
    color: "violet",
  },
  {
    icon: Globe,
    emoji: "🌐",
    title: "Sites",
    description: "Desenvolvimento de sites profissionais, responsivos e otimizados para SEO que convertem visitantes em clientes.",
    href: "/servicos/sites",
    color: "amber",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Landing Pages",
    description: "Páginas de alta conversão focadas em capturar leads e vender seus produtos ou serviços de forma eficiente.",
    href: "/servicos/landing-pages",
    color: "violet",
  },
  {
    icon: ImageIcon,
    emoji: "📱",
    title: "Posts",
    description: "Criação de conteúdo visual impactante para suas redes sociais que engaja e fortalece sua marca.",
    href: "/servicos/posts",
    color: "amber",
  },
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "Automações WhatsApp",
    description: "Automatize seu atendimento e vendas com chatbots inteligentes que funcionam 24/7 no WhatsApp.",
    href: "/servicos/automacoes-whatsapp",
    color: "violet",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            Nossos Serviços
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
            O que fazemos? 🚀
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nós nos especializamos em identidade visual, tráfego pago e criação de sites e
            landing pages - todos fundamentais para o sucesso on-line de qualquer empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`group relative bg-white rounded-2xl p-8 border-2 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                service.color === "violet" 
                  ? "border-violet-100 hover:border-violet-300" 
                  : "border-amber-100 hover:border-amber-300"
              }`}
            >
              {/* Emoji Badge */}
              <div className="absolute -top-4 -right-4 text-4xl animate-bounce-slow">
                {service.emoji}
              </div>

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                  service.color === "violet"
                    ? "bg-violet-100 text-violet-600"
                    : "bg-amber-100 text-amber-600"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold text-gray-900 mb-3 transition-colors ${
                service.color === "violet" ? "group-hover:text-violet-600" : "group-hover:text-amber-600"
              }`}>
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <div className={`flex items-center font-semibold ${
                service.color === "violet" ? "text-violet-600" : "text-amber-600"
              }`}>
                <span>Saiba mais</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-violet-600/25 hover:-translate-y-1 hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            Solicitar Orçamento
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
