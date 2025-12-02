import Link from "next/link";
import { Globe, Smartphone, Search, Zap, CheckCircle, ArrowRight, Code, Palette } from "lucide-react";

export const metadata = {
  title: "Criação de Sites | Digital Smart",
  description: "Desenvolvimento de sites profissionais, responsivos e otimizados para SEO que convertem visitantes em clientes.",
};

const benefits = [
  "Design moderno e profissional",
  "100% responsivo (mobile-first)",
  "Otimizado para SEO",
  "Carregamento ultra-rápido",
  "Painel administrativo intuitivo",
  "Integração com redes sociais",
];

const types = [
  { 
    icon: Globe,
    name: "Site Institucional", 
    description: "Apresente sua empresa de forma profissional e conquiste credibilidade no mercado." 
  },
  { 
    icon: Code,
    name: "E-commerce", 
    description: "Venda seus produtos online com uma loja virtual completa e segura." 
  },
  { 
    icon: Palette,
    name: "Portfólio", 
    description: "Mostre seus trabalhos e conquiste novos clientes com um portfólio impactante." 
  },
  { 
    icon: Zap,
    name: "One Page", 
    description: "Site de página única, perfeito para apresentar um produto ou serviço específico." 
  },
];

export default function SitesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-amber-400 via-amber-500 to-violet-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Criação de Sites
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Desenvolvimento de sites profissionais, responsivos e otimizados para SEO 
              que convertem visitantes em clientes e fortalecem sua presença digital.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-violet-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
              <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
                Benefícios
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
                Por que ter um site profissional?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Seu site é a vitrine do seu negócio na internet. Um site bem desenvolvido 
                transmite profissionalismo, gera confiança e converte visitantes em clientes.
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
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <Smartphone className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Responsivo</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <Search className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">SEO</div>
                <div className="text-sm text-gray-600 mt-1">Otimizado</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <Zap className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">&lt;3s</div>
                <div className="text-sm text-gray-600 mt-1">Carregamento</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <Globe className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Online</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
              Tipos de Sites
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Qual site você precisa?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {types.map((type) => (
              <div
                key={type.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
              >
                <type.icon className="w-10 h-10 text-violet-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
