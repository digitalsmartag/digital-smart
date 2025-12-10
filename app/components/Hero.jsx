"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#543295]">
      {/* Background gradient layers */}
      <div className="absolute inset-0 bg-[#543295]" />
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-end min-h-screen">
          
          {/* Mobile Image - Aparece primeiro no mobile */}
          <div className="lg:hidden relative w-full flex justify-center mt-24 -mb-12 z-0">
            <div className="relative w-[85%] max-w-[320px]">
              {/* Gradiente inferior para fusão suave com o conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#543295] from-[40%] to-transparent z-10 pointer-events-none" />
              <Image
                src="/root/maxsuel-perfil.webp"
                alt="Maxsuel Moreira - CEO Digital Smart"
                width={350}
                height={450}
                className="w-full h-auto object-contain mt-6"
                priority
              />
              
              {/* Identificação Mobile */}
              <div className="absolute bottom-54 right-1/5 translate-x-1/2 z-20">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <p className="text-white font-semibold text-sm">Maxsuel Moreira</p>
                  <p className="text-white/70 text-xs text-center">CEO & Fundador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content (Texto) */}
          <div className="flex flex-col justify-center py-10 lg:py-20 lg:pt-32 lg:pb-40 relative z-10 w-full text-center lg:text-left">
            

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-7xl max-lg:absolute max-lg:-top-28 font-bold text-white leading-[1.2] lg:leading-[1.1] mb-6">
              Acelere o crescimento do seu{" "}
              <span className="text-white">negócio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-lg max-lg:absolute max-lg:-top-8 mx-auto lg:mx-0 leading-relaxed mb-8 lg:mb-10">
              Somos especialistas em marketing digital com foco em resultados. 
              Tráfego pago, sites de alta conversão e gestão estratégica de redes sociais.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 max-lg:mt-14 lg:mb-12 w-full">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-green-500/30 w-full sm:w-auto"
              >
                Quero mais informações
              </Link>
            </div>

            {/* Stats row - Mobile: Logos/Icons centered */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 pt-6 lg:pt-8 border-t border-white/10 lg:border-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white leading-none">+40</div>
                  <span className="text-xs text-white/60">Empresas</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-full">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white leading-none">+300%</div>
                  <span className="text-xs text-white/60">Vendas</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <div className="bg-white/10 p-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white leading-none">5.0</div>
                  <span className="text-xs text-white/60">Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image - Mantém layout lateral */}
          <div className="relative hidden lg:flex items-end justify-end self-end h-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-t from-[#543295] to-[30%] to-transparent z-10 pointer-events-none" />              
              <Image
                src="/root/maxsuel-perfil.webp"
                alt="Maxsuel Moreira - CEO Digital Smart"
                width={550}
                height={700}
                className="w-[450px] xl:w-[520px] h-auto object-contain relative"
                priority
              />
              
              {/* Identificação Desktop */}
              <div className="absolute bottom-12 left-0 z-20">
                <div className="bg-white/10 backdrop-blur-md pl-5 pr-6 py-3 rounded-full border border-white/20 border-l-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">M</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Maxsuel Moreira</p>
                      <p className="text-white/70 text-sm">CEO & Fundador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
