"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Target, TrendingUp, Users, BarChart3, Zap, DollarSign, LineChart, MousePointerClick, Search, Share2, Briefcase, Play, MessageCircle, Star, Rocket, PieChart, Eye } from "lucide-react";
import ContactModal from "../../components/ContactModal";
import Footer from "../../components/Footer";

export default function TrafegoPagoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
                Solicitar orçamento
              </button>
            </div>
          </header>

          {/* Hero content */}
          <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-400 text-sm font-medium uppercase tracking-wider">Gestão de Tráfego Pago</span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
                  Transforme
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                    cliques
                  </span>
                  <br />
                  em clientes
                </h1>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <Search className="w-4 h-4 text-white/60" />
                    <span className="text-white/80 text-sm font-medium">Google Ads</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                    <Share2 className="w-4 h-4 text-white/60" />
                    <span className="text-white/80 text-sm font-medium">Meta Ads</span>
                  </div>
                </div>
                <p className="text-xl text-white/70 leading-relaxed max-w-xl mb-10">
                  Campanhas estratégicas que colocam seu negócio na frente das pessoas certas, no momento certo. Mais leads, mais vendas, mais crescimento.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all cursor-pointer"
                  >
                    Quero escalar minhas vendas
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                
                {/* Stats inline */}
                <div className="mt-12 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">+300%</div>
                    <div className="text-white/50 text-sm">Aumento em vendas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">5.2x</div>
                    <div className="text-white/50 text-sm">ROI médio</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">+40</div>
                    <div className="text-white/50 text-sm">Empresas</div>
                  </div>
                </div>
              </div>

              {/* Hero visual - Dashboard mockup */}
              <div className="relative hidden lg:flex justify-center">
                <div className="relative">
                  {/* Dashboard frame */}
                  <div className="w-[420px] bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl shadow-blue-500/10 border border-white/10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-white/60 text-sm">Performance</p>
                        <p className="text-white font-semibold text-lg">Dashboard de Campanhas</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-sm">Ao vivo</span>
                      </div>
                    </div>
                    
                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Eye className="w-4 h-4 text-blue-400" />
                          <span className="text-white/60 text-xs">Impressões</span>
                        </div>
                        <p className="text-white font-bold text-2xl">847K</p>
                        <p className="text-green-400 text-xs">+23% vs mês anterior</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <MousePointerClick className="w-4 h-4 text-purple-400" />
                          <span className="text-white/60 text-xs">Cliques</span>
                        </div>
                        <p className="text-white font-bold text-2xl">12.4K</p>
                        <p className="text-green-400 text-xs">+18% vs mês anterior</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="text-white/60 text-xs">Leads</span>
                        </div>
                        <p className="text-white font-bold text-2xl">342</p>
                        <p className="text-green-400 text-xs">+45% vs mês anterior</p>
                      </div>
                      <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          <span className="text-white/60 text-xs">ROI</span>
                        </div>
                        <p className="text-white font-bold text-2xl">5.2x</p>
                        <p className="text-green-400 text-xs">Retorno sobre investimento</p>
                      </div>
                    </div>

                    {/* Chart mockup */}
                    <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-white/60 text-xs mb-3">Conversões nos últimos 7 dias</p>
                      <div className="flex items-end gap-2 h-20">
                        {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                          <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <div className="flex justify-between mt-2 text-white/40 text-xs">
                        <span>Seg</span>
                        <span>Ter</span>
                        <span>Qua</span>
                        <span>Qui</span>
                        <span>Sex</span>
                        <span>Sáb</span>
                        <span>Dom</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -left-20 top-16 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">Vendas</p>
                        <p className="text-green-600 font-bold">+312%</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-16 bottom-24 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Target className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">CPA</p>
                        <p className="text-blue-600 font-bold">-47%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PLATAFORMAS ========== */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-8">Anunciamos nas principais plataformas</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              { name: "Google Ads", icon: Search },
              { name: "Meta Ads", icon: Share2 },
              { name: "LinkedIn Ads", icon: Briefcase },
              { name: "TikTok Ads", icon: Play },
              { name: "YouTube Ads", icon: Play },
            ].map((platform) => (
              <div key={platform.name} className="flex items-center gap-3 text-gray-400 hover:text-[#543295] transition-colors">
                <platform.icon className="w-6 h-6" />
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROBLEMA ========== */}
      <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span className="text-red-600 font-semibold uppercase tracking-wider text-sm">O Problema</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 max-w-4xl mx-auto">
              Você está
              <span className="text-red-600"> jogando dinheiro fora </span>
              com anúncios?
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A maioria das empresas gasta fortunas em anúncios sem estratégia, sem segmentação correta e sem otimização. O resultado? Dinheiro desperdiçado e zero retorno.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Stat card */}
            <div className="lg:col-span-1">
              <div className="relative bg-gradient-to-br from-red-500 to-orange-600 rounded-3xl p-8 shadow-xl h-full flex flex-col justify-center">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] rounded-3xl" />
                
                <div className="relative text-center text-white">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl md:text-7xl font-bold mb-3">72%</div>
                  <p className="text-lg text-white/90 leading-relaxed">
                    das empresas desperdiçam orçamento de anúncios
                  </p>
                </div>

                {/* Floating emoji */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl rotate-12 opacity-90 flex items-center justify-center shadow-xl">
                  <span className="text-2xl">💸</span>
                </div>
              </div>
            </div>

            {/* Problems list */}
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: "❌", text: "Campanhas sem estratégia definida", desc: "Anúncios criados sem planejamento ou objetivo claro" },
                { icon: "❌", text: "Público-alvo mal segmentado", desc: "Impactando pessoas que não têm interesse no seu produto" },
                { icon: "❌", text: "Anúncios que não convertem", desc: "Alto investimento com baixíssimo retorno em vendas" },
                { icon: "❌", text: "Falta de otimização e testes A/B", desc: "Sem melhorias contínuas para maximizar resultados" },
              ].map((pain) => (
                <div key={pain.text} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl shrink-0 mt-1">{pain.icon}</span>
                  <div>
                    <p className="text-gray-900 font-semibold mb-1">{pain.text}</p>
                    <p className="text-gray-600 text-sm">{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-red-500 rounded-xl">
            <p className="text-gray-800 font-semibold text-lg text-center">
              💡 Sem uma estratégia profissional, você está literalmente queimando dinheiro em anúncios que não trazem resultado.
            </p>
          </div>
        </div>
      </section>

      {/* ========== SOLUÇÃO ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm mb-4">
              A SOLUÇÃO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Gestão profissional de tráfego pago que gera resultados reais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Segmentação Precisa",
                desc: "Alcançamos exatamente quem tem potencial de comprar seu produto ou serviço.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: LineChart,
                title: "Otimização Contínua",
                desc: "Monitoramos e ajustamos campanhas diariamente para maximizar resultados.",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: PieChart,
                title: "Relatórios Detalhados",
                desc: "Transparência total com relatórios claros de performance e ROI.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Testes A/B",
                desc: "Testamos diferentes criativos, copies e públicos para encontrar o que converte mais.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: Users,
                title: "Remarketing",
                desc: "Reimpactamos quem já demonstrou interesse, aumentando as chances de conversão.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: Rocket,
                title: "Escalabilidade",
                desc: "Quando encontramos o que funciona, escalamos para multiplicar seus resultados.",
                color: "from-indigo-500 to-blue-500"
              }
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-3xl p-8 hover:shadow-xl transition-all border border-gray-100">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== NOSSOS NÚMEROS ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-semibold uppercase tracking-widest text-sm mb-4">
              NOSSOS RESULTADOS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Números que falam por si</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {[
              { number: "+R$2M", label: "Gerenciados em anúncios" },
              { number: "+300%", label: "Aumento médio em vendas" },
              { number: "5.2x", label: "ROI médio dos clientes" },
              { number: "+40", label: "Empresas atendidas" }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:opacity-90 transition-all cursor-pointer"
            >
              Quero esses resultados!
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ========== COMO FUNCIONA ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm mb-4">
              COMO FUNCIONA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Nosso processo de trabalho
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Analisamos seu negócio, concorrência e oportunidades de mercado." },
              { step: "02", title: "Estratégia", desc: "Definimos público, canais, orçamento e metas claras de conversão." },
              { step: "03", title: "Execução", desc: "Criamos e lançamos campanhas otimizadas para máximo desempenho." },
              { step: "04", title: "Otimização", desc: "Monitoramos, testamos e ajustamos para escalar resultados." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#543295] to-purple-600 text-white text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== DEPOIMENTOS ========== */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#543295] font-semibold uppercase tracking-widest text-sm mb-4">
              CASES DE SUCESSO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ricardo Mendes",
                role: "E-commerce de Moda",
                text: "Em 3 meses, triplicamos as vendas online. O ROI das campanhas é impressionante, cada real investido volta multiplicado.",
                result: "+312% em vendas"
              },
              {
                name: "Ana Paula Costa",
                role: "Clínica de Estética",
                text: "Antes gastava dinheiro sem saber se funcionava. Agora tenho clareza total dos resultados e a agenda sempre cheia.",
                result: "+85 leads/mês"
              },
              {
                name: "Marcos Oliveira",
                role: "Consultoria B2B",
                text: "A segmentação é cirúrgica. Só recebo leads qualificados que realmente têm potencial de fechar negócio.",
                result: "5.8x de ROI"
              }
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-3xl p-8 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">"{item.text}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {item.result}
                  </div>
                </div>
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
              Dúvidas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Qual o investimento mínimo em anúncios?",
                a: "Recomendamos um investimento mínimo de R$1.500/mês em mídia para ter resultados consistentes. Mas trabalhamos com diferentes orçamentos de acordo com o objetivo."
              },
              {
                q: "Em quanto tempo vejo resultados?",
                a: "Os primeiros resultados aparecem nas primeiras semanas. Porém, para otimização completa e escala, recomendamos um período de 2-3 meses."
              },
              {
                q: "Vocês criam os anúncios e criativos?",
                a: "Sim! Nossa equipe cuida de toda a parte estratégica, criação de copies, criativos e gestão das campanhas."
              },
              {
                q: "Como funciona o acompanhamento?",
                a: "Você recebe relatórios semanais e mensais detalhados, além de ter acesso direto ao nosso time via WhatsApp para dúvidas e alinhamentos."
              },
              {
                q: "Trabalham com qual tipo de negócio?",
                a: "Atendemos e-commerces, prestadores de serviço, clínicas, consultorias, infoprodutores e diversos outros segmentos."
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
        </div>
      </section>

      {/* ========== CTA FINAL ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#543295] to-[#7c3aed]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Pronto para escalar suas vendas com tráfego pago?
          </h2>
          <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
            Solicite uma análise gratuita e descubra o potencial de crescimento do seu negócio.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-10 group inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#543295] font-semibold rounded-full hover:bg-white/90 transition-all cursor-pointer shadow-lg"
          >
            Solicitar análise gratuita
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
