import Link from "next/link";
import { Zap, MousePointer, TrendingUp, Target, CheckCircle, ArrowRight, Layers, Gauge } from "lucide-react";

export const metadata = {
  title: "Landing Pages | Digital Smart",
  description: "Páginas de alta conversão focadas em capturar leads e vender seus produtos ou serviços de forma eficiente.",
};

const benefits = [
  "Design focado em conversão",
  "Copy persuasiva e estratégica",
  "Formulários otimizados",
  "Testes A/B inclusos",
  "Integração com CRM e e-mail",
  "Análise de métricas detalhada",
];

const types = [
  { 
    icon: MousePointer,
    name: "Captura de Leads", 
    description: "Capture contatos qualificados para sua base de e-mails e nutrição." 
  },
  { 
    icon: TrendingUp,
    name: "Vendas", 
    description: "Páginas otimizadas para vender produtos físicos ou digitais." 
  },
  { 
    icon: Layers,
    name: "Lançamentos", 
    description: "Landing pages para lançamentos de produtos e infoprodutos." 
  },
  { 
    icon: Gauge,
    name: "Webinars", 
    description: "Páginas de inscrição para webinars e eventos online." 
  },
];

export default function LandingPagesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-violet-700 via-violet-600 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Landing Pages
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Páginas de alta conversão focadas em capturar leads e vender seus 
              produtos ou serviços de forma eficiente e escalável.
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
                Por que investir em Landing Pages?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Landing pages são páginas focadas em um único objetivo: converter. 
                Diferente de um site comum, elas eliminam distrações e guiam o 
                visitante para a ação desejada.
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
                <div className="text-3xl font-bold text-violet-600">+50%</div>
                <div className="text-sm text-gray-600 mt-1">Taxa de conversão</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <MousePointer className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">CTA</div>
                <div className="text-sm text-gray-600 mt-1">Otimizado</div>
              </div>
              <div className="bg-amber-50 rounded-2xl p-6 text-center">
                <Target className="w-10 h-10 text-amber-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-amber-500">A/B</div>
                <div className="text-sm text-gray-600 mt-1">Testes inclusos</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <Zap className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">&lt;2s</div>
                <div className="text-sm text-gray-600 mt-1">Carregamento</div>
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
              Tipos de Landing Pages
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              Qual é o seu objetivo?
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
