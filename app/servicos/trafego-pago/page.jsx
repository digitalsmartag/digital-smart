"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Target, Zap, LineChart, BarChart3, Search, Share2, Play, MessageCircle, CheckCircle2, Store, Laptop, Wrench } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";

export default function TrafegoPagoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#fdfdfd] overflow-x-hidden">

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#543295] via-[#4a2d85] to-[#3d2570] flex flex-col">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative z-10 flex flex-col flex-1">
          {/* Mini header */}
          <header className="w-full px-6 py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <Link href="/">
                <Image src="/root/logo-branca.png" alt="Digital Smart" width={150} height={45} className="h-10 w-auto" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all cursor-pointer"
              >
                Solicitar orçamento
              </button>
            </div>
          </header>

          {/* Hero content — centralizado */}
          <div className="flex-1 flex items-center">
            <div className="max-w-4xl mx-auto px-6 py-16 text-center w-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Gestão de Tráfego Pago</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] mb-6">
                Anuncie onde está a atenção<br className="hidden sm:block" />
                <span className="text-white/60"> dos seus clientes,</span><br />
                na Internet!
              </h1>

              <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
                Contratar um especialista em tráfego pago é fundamental para fazer seu negócio vender muito mais através dos anúncios online.
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <Search className="w-4 h-4 text-white/70" />
                  <span className="text-white/80 text-sm font-medium">Google Ads</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <Share2 className="w-4 h-4 text-white/70" />
                  <span className="text-white/80 text-sm font-medium">Meta Ads</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <Play className="w-4 h-4 text-white/70" />
                  <span className="text-white/80 text-sm font-medium">TikTok Ads</span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:scale-105 cursor-pointer"
              >
                Solicitar orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-md mx-auto">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">+100</div>
                  <div className="text-white/50 text-sm">Empresas atendidas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">5.2x</div>
                  <div className="text-white/50 text-sm">ROI médio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">2020</div>
                  <div className="text-white/50 text-sm">No mercado desde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PLATAFORMAS ========== */}
      <section className="py-16 bg-white border-b border-[#e5e5e5]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-gray-400 text-sm mb-10 uppercase tracking-widest font-medium">Anunciamos nas principais plataformas</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { name: "Google Ads", detail: "Rede de pesquisa, display, YouTube e muito mais", icon: Search },
              { name: "Meta Ads", detail: "Facebook, Instagram e Audience Network", icon: Share2 },
              { name: "TikTok Ads", detail: "Alcance o público em crescimento no TikTok", icon: Play },
            ].map((p) => (
              <div key={p.name} className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-[#e5e5e5] hover:border-[#543295]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#543295]/10 flex items-center justify-center">
                  <p.icon className="w-6 h-6 text-[#543295]" />
                </div>
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{p.name}</p>
                  <p className="text-[#666666] text-sm mt-1">{p.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARA QUEM É ========== */}
      <section className="py-20 md:py-28 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Para quem é</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              Se você é dono de micro, pequeno,<br className="hidden md:block" /> médio ou grande negócio, o tráfego é pra você!
            </h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">Analise se seu negócio se encaixa em algum dos ramos abaixo:</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Prestação de Serviços",
                items: ["Contabilidade", "Fotógrafo", "Advogado", "Médico / Dentista", "Nutricionista", "Psicólogo", "Salão de Beleza", "Profissional de Limpeza"],
              },
              {
                icon: Store,
                title: "Negócios Locais",
                items: ["Lojas", "Petshop", "Clínicas", "Restaurantes", "Cafeterias", "Lanchonetes", "Academias", "E muito mais..."],
              },
              {
                icon: Laptop,
                title: "Lojas Virtuais",
                items: ["Eletrônicos", "Perfumes", "Óculos", "Produtos físicos", "Artesanatos", "Moda e vestuário", "Cosméticos", "E muito mais..."],
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-white border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#543295]/30 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#543295]/10 rounded-xl flex items-center justify-center mb-6">
                  <cat.icon className="w-6 h-6 text-[#543295]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#666666] text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#543295] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#543295] hover:bg-[#3d2570] text-white font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              Quero aumentar minhas vendas
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== COMO TRABALHAMOS ========== */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e5e5e5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Como trabalhamos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
              Veja como trabalhamos os seus anúncios
            </h2>
            <p className="text-[#666666] text-lg max-w-3xl mx-auto">
              Somos especialistas em Gestão de Tráfego Pago — criação e otimização de campanhas em Google Ads, Meta Ads e outras plataformas, direcionando clientes potenciais para o seu canal de vendas e gerando mais leads e vendas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                icon: Target,
                title: "Estratégia Personalizada",
                desc: "É desenvolvida uma estratégia sob medida com base no seu público-alvo e objetivos comerciais, garantindo que cada centavo seja bem aproveitado.",
              },
              {
                num: "02",
                icon: Zap,
                title: "Criatividade Impactante",
                desc: "São desenvolvidos e criados anúncios irresistíveis, com textos envolventes e visuais cativantes, que se destacam em meio à concorrência e geram cliques e vendas.",
              },
              {
                num: "03",
                icon: LineChart,
                title: "Monitoramento Constante",
                desc: "Mantemos uma constante vigilância no desempenho das suas campanhas, ajustando estratégias conforme necessário para garantir resultados consistentes e melhorar o retorno sobre o investimento.",
              },
              {
                num: "04",
                icon: BarChart3,
                title: "Relatórios Detalhados",
                desc: "São fornecidos relatórios detalhados para que você possa acompanhar o progresso das suas campanhas e fazer os devidos ajustes e investimentos.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-6 p-8 bg-[#fdfdfd] border border-[#e5e5e5] rounded-2xl hover:border-[#543295]/30 transition-all">
                <div className="shrink-0">
                  <div className="w-12 h-12 bg-[#543295]/10 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#543295]" />
                  </div>
                </div>
                <div>
                  <span className="text-[#543295]/40 text-xs font-bold uppercase tracking-widest">{item.num}</span>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mt-1 mb-2">{item.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PARCEIROS ========== */}
      <section className="py-20 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Quem confia no nosso trabalho</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Mais de 100 empresas no Brasil e EUA
          </h2>
          <p className="text-[#666666] text-lg mb-12">confiam no nosso trabalho</p>
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-30">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="w-28 h-12 bg-[#1a1a1a] rounded-lg" />
            ))}
          </div>
          <p className="text-[#666666] text-sm mt-8">Logos dos parceiros em breve</p>
        </div>
      </section>

      {/* ========== QUEM SOU ========== */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/root/maxsuel.png"
                alt="Maxsuel Moreira"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>
            <div className="lg:col-span-3">
              <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Quem sou</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Olá, sou Maxsuel Moreira
              </h2>
              <div className="space-y-5 text-[#cccccc] text-lg leading-relaxed font-light">
                <p>
                  Sou especialista em Anúncios Online nas plataformas que mais vendem hoje no Brasil e no Mundo.
                </p>
                <p>
                  Com uma paixão pelo marketing digital e uma abordagem centrada no cliente, estou comprometido em impulsionar o crescimento dos seus negócios através de estratégias inovadoras e eficazes.
                </p>
                <p>
                  Trabalho desde 2020 no marketing digital centrado em serviços de tráfego pago, gerando valores para empresas e negócios no Brasil e nos EUA.
                </p>
                <p className="font-medium text-white">
                  Vamos trabalhar juntos para alavancar o faturamento do seu negócio.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#1a1a1a] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                Solicitar orçamento gratuito
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Quanto eu preciso investir?",
                a: "Em nossa consultoria gratuita estarei realizando uma análise e orientando você com base nas informações da sua empresa.",
              },
              {
                q: "Quais as formas de pagamento?",
                a: "Para mim você pagará sempre via PIX ou transferência bancária. Para as plataformas, sugiro cartão de crédito para evitar que seus anúncios sejam pausados por esquecimento de pagamento.",
              },
              {
                q: "Qual o valor do seu serviço?",
                a: "A taxa de gerenciamento vai depender do seu investimento no Google Ads, Facebook Ads e Instagram Ads e de suas necessidades. Entre em contato para saber mais.",
              },
              {
                q: "Minha cidade é longe da sua, dá para anunciar?",
                a: "Claro! Hoje tudo é feito pela internet e te atenderei como faço com os demais clientes.",
              },
            ].map((faq, i) => (
              <div key={faq.q} className="border border-[#e5e5e5] rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-[#fdfdfd] transition-colors"
                >
                  <span className="font-semibold text-[#1a1a1a] pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#543295] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[#666666] leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#543295] via-[#4a2d85] to-[#3d2570] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Ainda com dúvidas?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Chegou até aqui e ainda tem alguma dúvida? Clique no botão abaixo ou no WhatsApp que está ao longo dessa página.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-white hover:bg-white/90 text-[#543295] font-semibold text-lg rounded-full transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-lg"
          >
            Solicitar orçamento gratuito
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5531984169075?text=Olá! Gostaria de saber mais sobre gestão de tráfego pago."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      {/* Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        servicoPredefinido="tráfego-pago"
      />
    </div>
  );
}
