import Link from "next/link";
import { Image, Palette, Calendar, TrendingUp, CheckCircle, ArrowRight, Sparkles, Users } from "lucide-react";

export const metadata = {
  title: "Criação de Posts | Digital Smart",
  description: "Criação de conteúdo visual impactante para suas redes sociais que engaja e fortalece sua marca.",
};

const benefits = [
  "Design profissional e atrativo",
  "Identidade visual consistente",
  "Calendário editorial estratégico",
  "Conteúdo que engaja",
  "Formatos otimizados por rede",
  "Legendas persuasivas",
];

const types = [
  { 
    icon: Image,
    name: "Posts para Feed", 
    description: "Imagens e carrosséis que destacam sua marca no feed." 
  },
  { 
    icon: Sparkles,
    name: "Stories", 
    description: "Conteúdo dinâmico e interativo para stories." 
  },
  { 
    icon: Calendar,
    name: "Calendário Editorial", 
    description: "Planejamento mensal de conteúdo estratégico." 
  },
  { 
    icon: Palette,
    name: "Identidade Visual", 
    description: "Templates personalizados para sua marca." 
  },
];

export default function PostsPage() {
  return (
    <div className="pt-20 max-lg:pt-0">
      {/* Hero */}
      <section className="pt-20 max-lg:pt-34 bg-[#543295] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Image className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Criação de Posts
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Criação de conteúdo visual impactante para suas redes sociais que 
              engaja seu público e fortalece sua marca no digital.
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
                Por que investir em conteúdo visual?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nas redes sociais, a primeira impressão é visual. Posts bem 
                elaborados capturam atenção, geram engajamento e constroem 
                uma imagem profissional da sua marca.
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
                <TrendingUp className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">+200%</div>
                <div className="text-sm text-gray-600 mt-1">Engajamento</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <Users className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">+40</div>
                <div className="text-sm text-gray-600 mt-1">Clientes</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <Palette className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">100%</div>
                <div className="text-sm text-gray-600 mt-1">Personalizado</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <Calendar className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">30</div>
                <div className="text-sm text-gray-600 mt-1">Posts/mês</div>
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
              O que entregamos
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Tipos de conteúdo
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
