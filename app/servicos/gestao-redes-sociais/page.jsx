"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Instagram, MessageCircle, Play, Star, Users, TrendingUp, Calendar, BarChart3, Sparkles, Heart, Target, Zap } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";
import PartnersMarquee from "../../components/PartnersMarquee";
import AboutUs from "../../components/AboutUs";

export default function GestaoRedesSociaisPage() {
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

          {/* Hero content */}
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-6 py-12 w-full">
              <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Texto */}
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/90 text-sm font-medium uppercase tracking-wider">Gestão de Redes Sociais</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                    Sua marca<br />
                    presente onde<br />
                    <span className="text-white/55">seu cliente está.</span>
                  </h1>

                  <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
                    Mais visibilidade, mais engajamento, mais resultados. Conteúdo estratégico que gera conexão e vendas nas principais redes sociais.
                  </p>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:scale-105 cursor-pointer"
                  >
                    Solicitar orçamento
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  
                 
                </div>

                {/* Phone mockup — Instagram real */}
                <div className="relative hidden lg:flex justify-center items-center">
                  <div className="relative">
                    {/* Phone body */}
                    <div className="relative bg-[#111] rounded-[3rem] p-[10px] shadow-2xl shadow-black/50 border border-white/5">
                      {/* Dynamic Island */}
                      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-[#111] rounded-full z-30" />

                      {/* Phone side buttons */}
                      <div className="absolute -right-[4px] top-28 w-[4px] h-14 bg-[#2a2a2a] rounded-r-lg" />
                      <div className="absolute -left-[4px] top-24 w-[4px] h-10 bg-[#2a2a2a] rounded-l-lg" />
                      <div className="absolute -left-[4px] top-40 w-[4px] h-10 bg-[#2a2a2a] rounded-l-lg" />

                      {/* Screen */}
                      <div className="bg-white rounded-[2.4rem] overflow-hidden w-[256px] h-[540px] flex flex-col">

                        {/* Status bar */}
                        <div className="pt-[44px] px-5 pb-1 flex items-center justify-between shrink-0">
                          <span className="text-[11px] font-bold text-black">9:41</span>
                          <div className="flex items-center gap-[5px]">
                            <div className="flex gap-[2px] items-end h-[12px]">
                              {[4, 6, 8, 10].map((h, i) => (
                                <div key={i} className="w-[3px] bg-black rounded-[1px]" style={{ height: `${h}px` }} />
                              ))}
                            </div>
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
                            <div className="w-[22px] h-[11px] rounded-[3px] border-[1.5px] border-black relative flex items-center pr-[2px]">
                              <div className="w-[13px] h-[7px] bg-black rounded-[2px] ml-[1px]" />
                              <div className="absolute -right-[3px] w-[2px] h-[6px] bg-black rounded-r-[2px]" />
                            </div>
                          </div>
                        </div>

                        {/* Instagram top bar */}
                        <div className="px-4 py-2 flex items-center justify-between shrink-0">
                          <span className="text-[18px] font-bold tracking-tight text-black" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>Instagram</span>
                          <div className="flex items-center gap-3.5">
                            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                            <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                          </div>
                        </div>

                        {/* Stories row */}
                        <div className="px-3 pb-3 flex gap-2.5 border-b border-gray-100 shrink-0 overflow-hidden">
                          {[
                            { name: "Você", grad: "from-[#543295] to-violet-400", ring: true },
                            { name: "Ana", grad: "from-pink-500 to-orange-400", ring: true },
                            { name: "Bruno", grad: "from-blue-500 to-indigo-600", ring: true },
                            { name: "Carol", grad: "from-gray-300 to-gray-400", ring: false },
                          ].map((s) => (
                            <div key={s.name} className="flex flex-col items-center gap-1 shrink-0">
                              <div className={`p-[2px] rounded-full ${s.ring ? "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600" : "bg-gray-200"}`}>
                                <div className="p-[2px] bg-white rounded-full">
                                  <div className={`w-[38px] h-[38px] rounded-full bg-gradient-to-br ${s.grad}`} />
                                </div>
                              </div>
                              <span className="text-[9px] text-gray-700 w-11 text-center leading-tight truncate">{s.name}</span>
                            </div>
                          ))}
                        </div>

                        {/* Post */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                          {/* Post header */}
                          <div className="px-3 py-2 flex items-center justify-between shrink-0">
                            <div className="flex items-center gap-2">
                              <div className="w-[28px] h-[28px] rounded-full bg-gradient-to-br from-[#543295] to-violet-400 ring-2 ring-[#543295]/30" />
                              <div>
                                <p className="text-[11px] font-semibold text-black leading-tight">digital_smart</p>
                                <p className="text-[9px] text-gray-400 leading-tight">Brasil e EUA</p>
                              </div>
                            </div>
                            <span className="text-[16px] font-bold text-gray-600 leading-none tracking-widest">···</span>
                          </div>

                          {/* Post image */}
                          <div className="w-full bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570] flex items-center justify-center shrink-0" style={{ height: "210px" }}>
                            <div className="text-center text-white px-6">
                              <p className="text-[10px] uppercase tracking-[3px] text-white/50 mb-2">Marketing Digital</p>
                              <p className="text-[17px] font-bold leading-tight">Sua marca em alta 🚀</p>
                              <p className="text-[10px] text-white/60 mt-1">digital_smart.com.br</p>
                            </div>
                          </div>

                          {/* Actions + likes + caption */}
                          <div className="px-3 py-2 shrink-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-3">
                                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                              </div>
                              <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.8"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                            </div>
                            <p className="text-[11px] font-semibold text-black">4.231 curtidas</p>
                            <p className="text-[10px] text-black mt-0.5 leading-tight">
                              <span className="font-semibold">digital_smart</span>{" "}
                              <span className="text-gray-500">Eleve sua marca com estratégia e criatividade...</span>
                            </p>
                          </div>
                        </div>

                        {/* Bottom nav */}
                        <div className="bg-white border-t border-gray-100 px-5 py-2.5 flex items-center justify-between shrink-0">
                          <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                          <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                          <div className="w-[22px] h-[22px] border-[2px] border-black rounded-[6px]" />
                          <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                          <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-[#543295] to-violet-400 ring-2 ring-[#543295]/20" />
                        </div>

                      </div>
                    </div>

                    {/* Floating badge — seguidores */}
                    <div className="absolute -left-14 top-16 bg-white rounded-2xl px-4 py-3 shadow-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                          <TrendingUp className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Crescimento</p>
                          <p className="text-gray-900 font-bold text-sm">+127%</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating badge — engajamento */}
                    <div className="absolute -right-14 bottom-24 bg-white rounded-2xl px-4 py-3 shadow-xl">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 bg-[#543295]/10 rounded-lg flex items-center justify-center shrink-0">
                          <Users className="w-4 h-4 text-[#543295]" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-[10px]">Novos leads</p>
                          <p className="text-gray-900 font-bold text-sm">+48/mês</p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== HUMANIZAÇÃO SECTION ========== */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#543295]/5 rounded-full blur-[100px] opacity-50" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm">
                HUMANIZAMOS SUA MARCA
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a]">
                no digital
              </h2>

              <div className="mt-8 flex items-center gap-4">
                {[Instagram, MessageCircle, Play, Heart, Users].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 bg-[#543295]/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#543295]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="text-5xl font-bold text-[#543295]">5K+</div>
                <div className="text-[#666666]">conteúdos<br />produzidos</div>
              </div>

              <p className="mt-8 text-lg text-[#666666] leading-relaxed">
                "Ajudamos você a se tornar referência no seu nicho. Mais que seguidores: fãs e clientes fiéis."
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#543295] text-white font-semibold rounded-full hover:bg-[#3d2570] transition-all cursor-pointer"
              >
                Clique aqui e fale conosco!
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] relative bg-gradient-to-br from-[#543295]/20 to-violet-200 rounded-3xl overflow-hidden">
                    <Image
                      src="/landing-gestao/redes-1.webp"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />
                </div>
                <div className="aspect-square relative bg-gradient-to-br from-violet-200 to-[#543295]/20 rounded-3xl overflow-hidden">
                       <Image
                      src="/landing-gestao/redes-2.webp"
                      alt="Logo"
                      fill
                      className="object-cover"
                    />         
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gradient-to-br from-[#543295]/20 to-purple-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400')] bg-cover bg-center" />
                </div>
                <div className="aspect-[4/5] bg-gradient-to-br from-violet-200 to-[#543295]/30 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552581234-26160f608093?w=400')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PARCEIROS ========== */}
      <PartnersMarquee />

      {/* ========== COMO TRABALHAMOS ========== */}
      <section id="como-funciona" className="py-20 md:py-28 bg-[#fdfdfd]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Como trabalhamos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight">
              Estratégia que gera resultado
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Produção de Conteúdo",
                desc: "Criação estratégica de postagens que fortalecem a imagem da marca e atraem o público certo.",
              },
              {
                icon: Heart,
                title: "Engajamento e Relacionamento",
                desc: "Interação ativa com os seguidores para gerar conexão, confiança e fidelização.",
              },
              {
                icon: Target,
                title: "Resultados Concretos",
                desc: "Análise e ajustes contínuos focados em aumentar o alcance, engajamento e conversões.",
              }
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#e5e5e5] rounded-2xl p-8 hover:border-[#543295]/30 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-[#543295]/10 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#543295]" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
                <p className="text-[#666666] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#543295] hover:bg-[#3d2570] text-white font-semibold rounded-full transition-all cursor-pointer"
            >
              Quero saber mais
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== NOSSOS NÚMEROS ========== */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[#a881ff] text-sm font-semibold uppercase tracking-widest mb-3 block">Nossos números</span>
            <h2 className="text-4xl md:text-5xl font-bold">Resultados que falam por si</h2>
          </div>

          

          <div className="text-center">
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">
              Estamos sempre de olho no que está em alta. Sua marca se mantém atual, relevante e dentro das conversas que importam.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#1a1a1a] font-semibold rounded-full transition-all cursor-pointer"
            >
              Quero fazer um orçamento
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      

      {/* ========== SOBRE NÓS ========== */}
      <AboutUs />

      {/* ========== PERFIS GERENCIADOS ========== */}
      <section className="py-20 md:py-28 bg-[#1a1a1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/70 text-sm font-medium uppercase tracking-wider mb-6">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Perfis que gerenciamos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Marcas reais. Resultados reais.
            </h2>
            <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto">
              Alguns dos perfis que a Digital Smart gerencia no Instagram.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { username: "joaopaulocorretor.rv", segment: "Corretor de Imóveis", url: "https://www.instagram.com/joaopaulocorretor.rv", color: "#0ea5e9" },
              { username: "carlaferreirarealtornj", segment: "Real Estate (EUA)", url: "https://www.instagram.com/carlaferreirarealtornj", color: "#ec4899" },
              { username: "weconstrutora_", segment: "Construtora", url: "https://www.instagram.com/weconstrutora_", color: "#f97316" },
              { username: "oticasevangeliktimoteo", segment: "Ótica", url: "https://www.instagram.com/oticasevangeliktimoteo", color: "#543295" },
              { username: "marybonaldo_ny", segment: "Salão de Beleza", url: "https://www.instagram.com/marybonaldo_ny", color: "#d946ef" },
              { username: "airesnails_academy", segment: "Nails Design", url: "https://www.instagram.com/airesnails_academy", color: "#f43f5e" },
              { username: "agencia.digitalsmart", segment: "Agência Digital", url: "https://www.instagram.com/agencia.digitalsmart", color: "#7c3aed" },
              { username: "uniconnect_oficial", segment: "Educacional", url: "https://www.instagram.com/uniconnect_oficial", color: "#10b981" },
            ].map((profile) => (
              <a
                key={profile.username}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                {/* Header colorido */}
                <div className="h-16 relative" style={{ background: `linear-gradient(135deg, ${profile.color}33, ${profile.color}66)` }}>
                  <div className="absolute inset-0 flex items-end justify-center pb-0">
                    {/* Avatar */}
                    <div
                      className="w-14 h-14 rounded-full border-4 border-[#1a1a1a] flex items-center justify-center text-white font-bold text-xl translate-y-7 shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${profile.color}, ${profile.color}99)` }}
                    >
                      {profile.username[0].toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-10 pb-4 px-4 text-center">
                  <p className="text-white font-semibold text-sm truncate">@{profile.username}</p>
                  <p className="text-white/40 text-xs mt-1">{profile.segment}</p>
                  <div
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-all"
                    style={{ color: profile.color, background: `${profile.color}20` }}
                  >
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Ver perfil
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/agencia.digitalsmart"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#1a1a1a] font-semibold rounded-full transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              Siga a Digital Smart
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 md:py-28 bg-white border-y border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#543295] text-sm font-semibold uppercase tracking-widest mb-3 block">Dúvidas</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a]">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Vocês atendem pessoas de qualquer região?", a: "Sim, atendemos pessoas de diversas regiões inclusive de outros países." },
              { q: "Qual é o diferencial de vocês?", a: "Unimos estratégia, criatividade e análise de dados para gerar resultados reais — não só curtidas." },
              { q: "Quais redes sociais vocês atendem?", a: "Atuamos no Instagram, Facebook, TikTok, LinkedIn, Google Meu Negócio e YouTube. Também criamos e gerenciamos blogs e sites." },
              { q: "Qual é o valor dos serviços?", a: "Depende do tipo de trabalho que você busca. Entre em contato para obter um orçamento personalizado." }
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
            Pronto para transformar suas redes sociais em uma máquina de vendas?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e descubra como podemos elevar sua presença digital.
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
        href="https://wa.me/5531984169075?text=Olá! Gostaria de saber mais sobre gestão de redes sociais."
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
        servicoPredefinido="redes-sociais"
      />
    </div>
  );
}
