import { Building, Target, Calendar, Award } from "lucide-react";
import { partners } from "../data/partners";
import Image from "next/image";

const highlights = [
  {
    icon: Calendar,
    value: "2020",
    label: "No mercado desde",
  },
  {
    icon: Building,
    value: `+${partners.length}`,
    label: "Parceiros",
  },
  {
    icon: Target,
    value: "100%",
    label: "Foco em resultados",
  },
  {
    icon: Award,
    value: "5.0",
    label: "Avaliação Google",
  },
];

export default function AboutUs() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Logo da Digital Smart */}
            <div className="mb-8 relative">
              <div className="inline-block relative">
                {/* Glow effect atrás da logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#543295] to-purple-600 blur-2xl opacity-20 rounded-3xl" />
                
                {/* Container da logo */}
                <div className="relative bg-gradient-to-br from-[#543295] to-[#6b46c1] p-8 rounded-3xl shadow-2xl border border-white/10">
                  <div className="relative w-48 h-24">
                    <Image
                      src="/root/logo-branca.png"
                      alt="Digital Smart Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <span className="inline-flex items-center gap-2 text-[#543295] font-semibold text-sm uppercase tracking-wider bg-[#543295]/10 px-4 py-2 rounded-full">
              Sobre Nós
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              SOBRE NÓS
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                A Digital Smart é uma empresa especialista em estratégias online nas plataformas que mais vendem hoje no Brasil e no mundo. Com uma paixão pelo marketing digital e uma abordagem centrada no cliente, estamos comprometidos a impulsionar o crescimento dos seus negócios através de estratégias inovadoras e eficazes.
              </p>
              <p>
                Estamos desde 2020 no marketing digital, gerando valores para empresas e negócios, focada em gerar resultados para o seu negócio com anúncios online, sites e landing pages, imagens de alta qualidade e automações, treinamentos em marketing e vendas e muito mais.
              </p>
              <p className="font-semibold text-[#543295]">
                Vamos trabalhar juntos para alavancar o faturamento do seu negócio!
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#543295]/30 transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#543295]/10 rounded-xl mb-4 group-hover:bg-[#543295] transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#543295] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  {item.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
