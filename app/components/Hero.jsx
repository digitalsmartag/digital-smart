"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, Zap, Star, Heart, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-violet-700">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden border-b-2 border-white">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/10 rounded-full blur-3xl" />
        
        {/* Floating Emojis */}
        <div className="absolute top-[15%] left-[5%] text-4xl animate-float">🚀</div>
        <div className="absolute top-[25%] right-[8%] text-4xl animate-float-delayed">💡</div>
        <div className="absolute bottom-[30%] left-[12%] text-3xl animate-float-delayed">⚡</div>
        <div className="absolute bottom-[20%] right-[15%] text-4xl animate-float">🎯</div>
        <div className="absolute top-[40%] right-[5%] text-3xl animate-float">✨</div>
        <div className="absolute top-[60%] left-[8%] text-3xl animate-float-delayed">💜</div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 pt-20">
        <div className="text-center">
         

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Destaque o seu
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300">
                negócio
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            <br />
            no mundo digital! 🌟
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl text-violet-100 max-w-2xl mx-auto leading-relaxed">
            Somos a agência que transforma sua presença online em{" "}
            <span className="text-yellow-400 font-semibold">resultados reais</span>. 
            Tráfego pago, sites incríveis, landing pages que convertem e muito mais!
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-1 hover:scale-105"
            >
              <Rocket className="w-5 h-5" />
              Quero Crescer!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Conhecer a Digital Smart ✨
            </Link>
          </div>

          {/* Services Pills */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {[
              { icon: "🎯", text: "Tráfego Pago" },
              { icon: "🌐", text: "Sites" },
              { icon: "⚡", text: "Landing Pages" },
              { icon: "📱", text: "Posts" },
              { icon: "💬", text: "WhatsApp" },
            ].map((service, index) => (
              <div
                key={service.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/10 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default"
              >
                <span>{service.icon}</span>
                <span className="font-medium">{service.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400">+40</div>
              <div className="text-sm text-violet-200 mt-1">Parceiros</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-yellow-400">5+</div>
              <div className="text-sm text-violet-200 mt-1">Anos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <div className="text-sm text-violet-200 mt-1">Avaliação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
