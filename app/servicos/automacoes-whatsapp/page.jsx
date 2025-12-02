import Link from "next/link";
import { MessageCircle, Bot, Clock, TrendingUp, CheckCircle, ArrowRight, Zap, Users } from "lucide-react";

export const metadata = {
  title: "Automações WhatsApp | Digital Smart",
  description: "Automatize seu atendimento e vendas com chatbots inteligentes que funcionam 24/7 no WhatsApp.",
};

const benefits = [
  "Atendimento 24 horas, 7 dias",
  "Respostas instantâneas",
  "Qualificação automática de leads",
  "Integração com CRM",
  "Funis de vendas automatizados",
  "Relatórios de performance",
];

const features = [
  { 
    icon: Bot,
    name: "Chatbots Inteligentes", 
    description: "Bots que entendem e respondem naturalmente às perguntas dos clientes." 
  },
  { 
    icon: Clock,
    name: "Atendimento 24/7", 
    description: "Nunca perca uma venda. Seu negócio funcionando mesmo quando você dorme." 
  },
  { 
    icon: Zap,
    name: "Respostas Rápidas", 
    description: "Mensagens automáticas para as perguntas mais frequentes." 
  },
  { 
    icon: Users,
    name: "Segmentação", 
    description: "Envie mensagens personalizadas para grupos específicos de clientes." 
  },
];

export default function AutomacoesWhatsAppPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-500 via-violet-600 to-violet-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-400/20 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Serviço
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Automações WhatsApp
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Automatize seu atendimento e vendas com chatbots inteligentes que 
              funcionam 24/7 no WhatsApp, o app mais usado pelos brasileiros.
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
                Por que automatizar o WhatsApp?
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                O WhatsApp é o canal de comunicação preferido dos brasileiros. 
                Automatizar seu atendimento significa estar disponível 24 horas, 
                responder instantaneamente e nunca perder uma oportunidade de venda.
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
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <Clock className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Disponibilidade</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <TrendingUp className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">+80%</div>
                <div className="text-sm text-gray-600 mt-1">Mais vendas</div>
              </div>
              <div className="bg-violet-50 rounded-2xl p-6 text-center">
                <Zap className="w-10 h-10 text-violet-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-violet-600">&lt;1s</div>
                <div className="text-sm text-gray-600 mt-1">Tempo resposta</div>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 text-center">
                <Bot className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Automatizado</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
              Funcionalidades
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-black text-gray-900">
              O que você pode fazer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-violet-200 transition-all duration-300 hover:-translate-y-1"
              >
                <feature.icon className="w-10 h-10 text-violet-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
