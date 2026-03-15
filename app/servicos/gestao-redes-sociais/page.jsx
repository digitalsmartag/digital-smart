"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Instagram, MessageCircle, Play, Star, Users, TrendingUp, Calendar, BarChart3, Sparkles, Heart, Target, Zap } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";

export default function GestaoRedesSociaisPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#1a0a2e] via-[#2d1b4e] to-[#1a0a2e] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-600/20 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl rotate-12 opacity-60" />
          <div className="absolute top-40 left-[15%] w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full opacity-40" />
          <div className="absolute bottom-32 right-[20%] w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-pink-600 rounded-3xl -rotate-12 opacity-50" />
          <div className="absolute bottom-20 left-[10%] w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-600 rounded-xl rotate-45 opacity-40" />
        </div>

        <div className="relative z-10">
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
                Obter um orçamento
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-purple-300 text-sm font-medium uppercase tracking-widest mb-4">
                  Produção de Conteúdo com
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                  Agência de{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-violet-400">
                    Social Media
                  </span>
                </h1>
                <p className="mt-2 text-2xl sm:text-3xl font-light text-white/60">
                  REDES SOCIAIS
                </p>
                <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                  Mais visibilidade, mais engajamento, mais resultados. Conteúdo estratégico que gera conexão e vendas.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-all cursor-pointer shadow-lg shadow-purple-500/30"
                  >
                    Obter um orçamento!
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="mt-8 text-white/50 text-sm leading-relaxed max-w-md">
                  Sua marca precisa ser vista, lembrada e desejada. Criamos estratégias para que cada post fale com quem realmente importa.
                </p>
              </div>

              {/* Hero visual - Phone mockup */}
              <div className="relative hidden lg:flex justify-center">
                <div className="relative">
                  {/* Phone frame */}
                  <div className="w-[280px] h-[560px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl shadow-purple-500/20">
                    <div className="w-full h-full bg-gradient-to-b from-purple-900 to-violet-950 rounded-[2.5rem] overflow-hidden relative">
                      {/* Instagram-like header */}
                      <div className="bg-black/30 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600" />
                          <span className="text-white text-sm font-medium">sua_marca</span>
                        </div>
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      {/* Feed mockup */}
                      <div className="p-3 space-y-3">
                        <div className="aspect-square bg-gradient-to-br from-pink-500/30 to-purple-600/30 rounded-2xl flex items-center justify-center">
                          <Play className="w-12 h-12 text-white/80" />
                        </div>
                        <div className="flex items-center gap-3">
                          <Heart className="w-6 h-6 text-pink-500" />
                          <MessageCircle className="w-6 h-6 text-white/70" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-white text-xs"><span className="font-semibold">2.847 curtidas</span></p>
                          <p className="text-white/60 text-xs">Ver todos os 156 comentários</p>
                        </div>
                      </div>
                      {/* Stats overlay */}
                      <div className="absolute bottom-4 left-3 right-3 bg-white/10 backdrop-blur-md rounded-2xl p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-center">
                            <p className="text-white font-bold text-lg">+200%</p>
                            <p className="text-white/60 text-xs">Engajamento</p>
                          </div>
                          <div className="w-px h-8 bg-white/20" />
                          <div className="text-center">
                            <p className="text-white font-bold text-lg">+5K</p>
                            <p className="text-white/60 text-xs">Seguidores</p>
                          </div>
                          <div className="w-px h-8 bg-white/20" />
                          <div className="text-center">
                            <p className="text-white font-bold text-lg">+80%</p>
                            <p className="text-white/60 text-xs">Alcance</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating badges */}
                  <div className="absolute -left-16 top-20 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">Crescimento</p>
                        <p className="text-green-600 font-bold">+127%</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-12 bottom-32 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">Novos leads</p>
                        <p className="text-purple-600 font-bold">+48/mês</p>
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
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100 rounded-full blur-[100px] opacity-50" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm">
                HUMANIZAMOS SUA MARCA
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                no digital
              </h2>
              
              {/* Social icons row */}
              <div className="mt-8 flex items-center gap-4">
                {[Instagram, MessageCircle, Play, Heart, Users].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#543295]" />
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="text-5xl font-bold text-[#543295]">5K+</div>
                <div className="text-gray-500">conteúdos<br />produzidos</div>
              </div>

              <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                "Ajudamos você a se tornar referência no seu nicho. Mais que seguidores: fãs e clientes fiéis."
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[#543295] text-white font-semibold rounded-full hover:bg-[#432476] transition-all cursor-pointer"
              >
                Clique aqui e fale conosco!
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400')] bg-cover bg-center" />
                </div>
                <div className="aspect-square bg-gradient-to-br from-violet-200 to-purple-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400')] bg-cover bg-center" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400')] bg-cover bg-center" />
                </div>
                <div className="aspect-[4/5] bg-gradient-to-br from-fuchsia-200 to-purple-200 rounded-3xl overflow-hidden">
                  <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1552581234-26160f608093?w=400')] bg-cover bg-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SATISFAÇÃO SECTION ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#543295] to-[#7c3aed] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-purple-200 font-medium uppercase tracking-widest text-sm">
                Agência Especializada
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold">
                1º em Satisfação dos Clientes
              </h2>
              
              {/* Rating stars */}
              <div className="mt-6 flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-white/80">5.0</span>
              </div>

              <p className="mt-6 text-xl text-white/80">
                Sua presença online mais forte do que nunca.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-white text-[#543295] font-semibold rounded-full hover:bg-white/90 transition-all cursor-pointer"
              >
                Quero uma análise gratuita!
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Testimonial preview */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div>
                  <p className="font-semibold text-white">Maria Santos</p>
                  <p className="text-white/60 text-sm">Empresária</p>
                </div>
              </div>
              <p className="text-white/90 text-lg leading-relaxed">
                "A Digital Smart transformou completamente a presença da minha marca nas redes sociais. Em 3 meses, triplicamos o engajamento e as vendas pelo Instagram aumentaram 150%."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== COMO TRABALHAMOS ========== */}
      <section id="como-funciona" className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Como trabalhamos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Produção de Conteúdo",
                desc: "Criação estratégica de postagens que fortalecem a imagem da marca e atraem o público certo.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Heart,
                title: "Engajamento e Relacionamento",
                desc: "Interação ativa com os seguidores para gerar conexão, confiança e fidelização.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Target,
                title: "Resultados Concretos",
                desc: "Análise e ajustes contínuos focados em aumentar o alcance, engajamento e conversões.",
                color: "from-violet-500 to-indigo-500"
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#543295] text-white font-semibold rounded-full hover:bg-[#432476] transition-all cursor-pointer"
            >
              Quero saber mais!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== NOSSOS NÚMEROS ========== */}
      <section className="py-20 md:py-28 bg-[#1a0a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-purple-300 font-semibold uppercase tracking-widest text-sm mb-4">
              NOSSOS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">NÚMEROS</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "+550", label: "Trabalhos Já Realizados" },
              { number: "+300", label: "Clientes Já Atendidos" },
              { number: "6 anos", label: "Tempo de Mercado" },
              { number: "12", label: "Pessoas na Equipe" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Estamos sempre de olho no que está em alta. Sua marca se mantém atual, relevante e dentro das conversas que importam.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:opacity-90 transition-all cursor-pointer"
            >
              Quero fazer um orçamento!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== ESTATÍSTICAS DE MERCADO ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-10">
              <div className="text-7xl md:text-8xl font-bold text-[#543295] mb-4">81%</div>
              <p className="text-gray-700 text-lg">
                dos consumidores usam o Instagram para pesquisar produtos e serviços.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-3xl p-10">
              <div className="text-5xl md:text-6xl font-bold text-[#543295] mb-4">3 vezes+</div>
              <p className="text-gray-700 text-lg">
                Negócios com presença forte nas redes sociais crescem até 3 vezes mais.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#543295] text-white font-semibold rounded-full hover:bg-[#432476] transition-all cursor-pointer"
            >
              Falar com a equipe!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== DEPOIMENTOS ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm mb-4">
              O QUE ESTÃO DIZENDO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">sobre nós</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Juliana Alves",
                role: "Nutricionista",
                text: "Antes, eu postava por conta própria sem nenhum resultado. Agora tenho um perfil bonito, com conteúdos que fazem sentido e atraem exatamente quem eu quero atender.",
                avatar: "J"
              },
              {
                name: "Fernando Sousa",
                role: "Mentor de carreira",
                text: "A agência me ajudou a transformar minha autoridade em resultados. Com a organização do conteúdo e um bom planejamento, passei a fechar mentorias toda semana.",
                avatar: "F"
              },
              {
                name: "Camila Fernandes",
                role: "Esteticista",
                text: "Depois que comecei a trabalhar com essa equipe, meu Instagram virou uma vitrine profissional de verdade. O engajamento dobrou e as mensagens de clientes interessados não param de chegar!",
                avatar: "C"
              },
              {
                name: "Carlos Moura",
                role: "Loja de roupas masculinas",
                text: "A estratégia que montaram para o meu negócio foi certeira. Saí do amadorismo e hoje tenho uma presença digital que realmente vende.",
                avatar: "C"
              }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#543295] to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {item.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              DÚVIDAS FREQUENTES
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Vocês atendem empresas de qualquer segmento?",
                a: "Sim! Trabalhamos com marcas de diferentes áreas, sempre adaptando a estratégia ao nicho do cliente."
              },
              {
                q: "Qual é o diferencial de vocês?",
                a: "Unimos estratégia, criatividade e análise de dados para gerar resultados reais — não só curtidas."
              },
              {
                q: "Quais redes sociais e ferramentas vocês atendem?",
                a: "Atuamos no Instagram, Facebook, TikTok, LinkedIn, Google Meu Negócio e YouTube. Também criamos e gerenciamos blogs e sites."
              },
              {
                q: "Qual é o valor dos serviços?",
                a: "Depende do tipo de trabalho que você busca. Entre em contato para obter um orçamento personalizado."
              }
            ].map((faq, i) => (
              <div key={faq.q} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#543295] transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#543295] text-white font-semibold rounded-full hover:bg-[#432476] transition-all cursor-pointer"
            >
              Fale conosco por aqui!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#543295] to-[#7c3aed]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Pronto para transformar suas redes sociais em uma máquina de vendas?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Solicite um orçamento personalizado e descubra como podemos elevar sua presença digital.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-10 group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#543295] font-semibold rounded-full hover:bg-white/90 transition-all cursor-pointer shadow-lg"
          >
            Solicitar orçamento grátis
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
