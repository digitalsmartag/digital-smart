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
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#543295] font-semibold text-sm uppercase tracking-wider bg-[#543295]/10 px-4 py-2 rounded-full">
            Sobre Nós
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Quem Somos
          </h2>
        </div>

        <div className="grid lg:grid-cols-[auto_1fr] items-center gap-8">

          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#543295]/20 to-purple-600/20 rounded-3xl blur-2xl" />
              <div className="relative">
                <Image
                  src="/landing-educacao/maxsuel.webp"
                  alt="Maxsuel Moreira - CEO Digital Smart"
                  width={450}
                  height={400}
                  className="rounded-3xl object-cover shadow-2xl"
                />
                
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6 text-gray-600 text-xl max-md:text-lg leading-relaxed">
              <p>
                A <span className="font-bold text-[#543295]">Digital Smart</span> é uma empresa especialista em estratégias online nas plataformas que mais vendem hoje no Brasil e no mundo. Com uma paixão pelo marketing digital e uma abordagem centrada no cliente, estamos comprometidos a impulsionar o crescimento dos seus negócios através de estratégias inovadoras e eficazes.
              </p>
              <p>
                Estamos desde <span className="font-semibold text-[#543295]">2020</span> no marketing digital, gerando valores para empresas e negócios, focada em gerar resultados para o seu negócio com anúncios online, sites e landing pages, imagens de alta qualidade e automações, treinamentos em marketing e vendas e muito mais.
              </p>
              
            </div>
          </div>

          {/* Stats Grid */}
          

        </div>
      </div>
    </section>
  );
}
