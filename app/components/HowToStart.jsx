import { MessageCircle, Users, FileText, FileCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Atendimento inicial via WhatsApp",
    description: "Entre em contato conosco pelo WhatsApp para iniciarmos a conversa sobre seu projeto.",
  },
  {
    icon: Users,
    number: "02",
    title: "Reunião para reconhecimento do projeto",
    description: "Agendamos uma reunião para entender suas necessidades e objetivos.",
  },
  {
    icon: FileText,
    number: "03",
    title: "Envio de projeto e proposta",
    description: "Elaboramos uma proposta personalizada com todas as soluções para seu negócio.",
  },
  {
    icon: FileCheck,
    number: "04",
    title: "Contrato de prestação de serviços",
    description: "Formalizamos nossa parceria com um contrato claro e transparente.",
  },
  {
    icon: Rocket,
    number: "05",
    title: "Execução de projeto personalizado",
    description: "Iniciamos a execução do projeto personalizado para alcançar seus resultados.",
  },
];

export default function HowToStart() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#543295] font-semibold text-sm uppercase tracking-wider bg-[#543295]/10 px-4 py-2 rounded-full">
            Passo a Passo
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            COMO INICIAR UM PROJETO CONOSCO
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Conheça o processo simples e transparente para começarmos a trabalhar juntos
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#543295]/20 via-[#543295] to-[#543295]/20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#543295] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-[#543295] rounded-full flex items-center justify-center">
                    <span className="text-[#543295] font-bold text-sm">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
