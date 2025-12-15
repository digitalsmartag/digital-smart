import { Building2, Users, TrendingUp, Globe } from "lucide-react";

// Empresas parceiras com iniciais para criar logos estilizados
const partners = [
  { name: "TechCorp", initials: "TC", color: "bg-blue-500" },
  { name: "InnovateBR", initials: "IB", color: "bg-emerald-500" },
  { name: "GlobalTech", initials: "GT", color: "bg-purple-500" },
  { name: "StartupHub", initials: "SH", color: "bg-orange-500" },
  { name: "DigiFlow", initials: "DF", color: "bg-cyan-500" },
  { name: "CloudMax", initials: "CM", color: "bg-indigo-500" },
  { name: "DataPro", initials: "DP", color: "bg-rose-500" },
  { name: "WebMaster", initials: "WM", color: "bg-teal-500" },
  { name: "AppGenius", initials: "AG", color: "bg-amber-500" },
  { name: "MarketPro", initials: "MP", color: "bg-violet-500" },
  { name: "GrowthLab", initials: "GL", color: "bg-lime-500" },
  { name: "BrandUp", initials: "BU", color: "bg-pink-500" },
  { name: "LeadGen", initials: "LG", color: "bg-sky-500" },
  { name: "ConvertMax", initials: "CX", color: "bg-red-500" },
  { name: "DigitalEdge", initials: "DE", color: "bg-fuchsia-500" },
];

const stats = [
  { icon: Building2, value: "+40", label: "Empresas" },
  { icon: Globe, value: "3", label: "Países" },
  { icon: TrendingUp, value: "+300%", label: "Crescimento médio" },
  { icon: Users, value: "100%", label: "Satisfação" },
];

export default function PartnersMarquee() {
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
          {/* Gradient Overlays */}
          <div className="absolute max-lg:-left-5 left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute max-lg:-right-5 right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* First Row - Scrolling Left */}
          <div className="flex animate-scroll mb-4">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-2 md:mx-3"
              >
                <div className="flex items-center gap-3 bg-gray-50 hover:bg-white rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#543295]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-10 h-10 ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {partner.initials}
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">
                    {partner.name}
                  </span>
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
                <div className="flex items-center gap-3 bg-gray-50 hover:bg-white rounded-2xl px-5 py-4 border border-gray-100 hover:border-[#543295]/30 hover:shadow-lg transition-all duration-300 group">
                  <div className={`w-10 h-10 ${partner.color} rounded-xl flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300`}>
                    {partner.initials}
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">
                    {partner.name}
                  </span>
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
                  className={`w-8 h-8 ${partner.color} rounded-full border-2 border-[#543295] flex items-center justify-center text-white text-xs font-bold`}
                >
                  {partner.initials}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              Junte-se a mais de 40 empresas satisfeitas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
