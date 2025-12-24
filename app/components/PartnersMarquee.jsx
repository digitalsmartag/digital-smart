import { Building2, Users, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import { partners } from "../data/partners";

export default function PartnersMarquee() {
  const stats = [
    { icon: Building2, value: `+${partners.length}`, label: "Empresas" },
    { icon: Globe, value: "3", label: "Países" },
    { icon: TrendingUp, value: "+300%", label: "Crescimento médio" },
    { icon: Users, value: "100%", label: "Satisfação" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#543295] font-semibold text-sm uppercase tracking-wider bg-[#543295]/10 px-4 py-2 rounded-full">
            <Building2 className="w-4 h-4" />
            Nossos Parceiros
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Conheça algumas das mais de 40 empresas que confiam em nosso trabalho
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Trabalhamos com empresas no Brasil, Estados Unidos e França, 
            ajudando negócios a alcançarem resultados extraordinários.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div 
              key={stat.label}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-[#543295]/5 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#543295]/10 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-[#543295]" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee Container */}
        <div className="relative pause-on-hover">
          
          {/* First Row - Scrolling Left */}
          <div className="flex animate-scroll mb-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-2 md:mx-3"
              >
                <div className="bg-white rounded-2xl px-6 py-4 border border-gray-100 hover:border-[#543295]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="flex animate-scroll-reverse">
            {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-2 md:mx-3"
              >
                <div className="bg-white rounded-2xl px-6 py-4 border border-gray-100 hover:border-[#543295]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className="relative w-32 h-16 md:w-40 md:h-20 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-[#543295] text-white px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {partners.slice(0, 4).map((partner, index) => (
                <div 
                  key={index}
                  className="relative w-8 h-8 rounded-full border-2 border-[#543295] bg-white overflow-hidden"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain p-0.5"
                  />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              Junte-se a mais de {partners.length} empresas satisfeitas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
