// Componente de logos de parceiros em loop infinito com autoplay
const partners = [
  "TechCorp", "InnovateBR", "GlobalTech", "StartupHub", "DigiFlow",
  "CloudMax", "DataPro", "WebMaster", "AppGenius", "MarketPro",
  "SalesForce", "GrowthLab", "BrandUp", "LeadGen", "ConvertMax",
  "DigitalEdge", "SmartAds", "ClickBoost", "TrafficPro", "SocialBuzz",
  "ContentKing", "SEOMaster", "AdsPro", "FunnelMax", "EmailPro",
  "AutomateBR", "ChatBot", "CRMPro", "AnalyticsPro", "DesignHub",
  "VideoMax", "PodcastPro", "InfluencerHub", "AffiliateMax", "EcommercePro",
  "ShopifyPro", "WooMax", "PaymentPro", "SecurityMax", "HostingPro"
];

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-violet-600 font-semibold text-sm uppercase tracking-wider">
            🤝 Parceiros
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            +40 Empresas Parceiras
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Trabalhamos com empresas no Brasil 🇧🇷 e nos Estados Unidos 🇺🇸
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative pause-on-hover">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

        {/* First Row - Scrolling Left */}
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100 hover:shadow-lg hover:border-violet-300 hover:bg-violet-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <span className="text-gray-700 font-semibold whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Scrolling Right */}
        <div className="flex mt-4 animate-scroll-reverse">
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-3"
            >
              <div className="bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100 hover:shadow-lg hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <span className="text-gray-700 font-semibold whitespace-nowrap">
                  {partner}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
