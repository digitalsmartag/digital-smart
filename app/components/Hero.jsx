"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Star, Sparkles, Award } from "lucide-react";
import { partners } from "../data/partners";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#543295] via-[#4a2d85] to-[#3d2570]">
      

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">

          {/* Mobile Image - Aparece primeiro no mobile */}
          <div className="lg:hidden relative w-full flex justify-center mt-8 -mb-12 z-0">
            <div className="absolute -bottom-20 w-full left-0 right-0 h-40  bg-gradient-to-t via-60% from-transparent  via-[#543295] to-transparent z-10 pointer-events-none" />

            <div className="relative w-[85%] max-w-[320px]">
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

          {/* Left Content (Texto) - 7 colunas no desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10 w-full text-center lg:text-left">

            {/* Badge superior */}
            <div className="inline-flex items-center max-lg:hidden gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 w-fit mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white/90 text-sm font-medium">Agência de Marketing Digital</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[2rem] sm:text-5xl lg:text-6xl xl:text-[5.5rem] max-lg:px-5 max-lg:absolute max-lg:-top-8 font-bold text-white leading-[1.1] mb-6">
              Acelere o crescimento do seu{" "}
              <span className="text-white">negócio</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl max-lg:px-5 text-white/70 max-w-2xl max-lg:absolute max-lg:top-14 mx-auto lg:mx-0 leading-relaxed mb-8">
              Somos especialistas em marketing digital com foco em resultados com soluções em Tráfego pago, sites e landing pages de alta conversão, gestão estratégica de redes sociais, edições em imagens e vídeos de alta qualidade, treinamentos em marketing, automações em IA e muito mais..
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 max-lg:mt-60 lg:mb-12 max-lg:px-5">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/sobre"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300"
              >
                Conheça a Digital Smart
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-xl leading-none">+{partners.length}</div>
                  <span className="text-sm text-white/60">Clientes Ativos</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-xl leading-none">R$ 15M</div>
                  <span className="text-sm text-white/60">Movimentados</span>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 group-hover:bg-white/20 transition-all">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-white text-xl leading-none">5.0</div>
                  <span className="text-sm text-white/60">Avaliação Google</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Image - 5 colunas no desktop */}
          <div className="lg:col-span-5 relative hidden lg:flex items-end justify-center h-full pb-0">
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl" />

              {/* Decorative circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-white/10 rounded-full" />

              <Image
                src="/root/maxsuel-perfil.webp"
                alt="Maxsuel Moreira - CEO Digital Smart"
                width={900}
                height={1100}
                className="min-w-[550px] w-[650px] xl:w-[750px] h-auto object-contain object-bottom relative z-20"
                priority
              />

              {/* Badge flutuante - CEO */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 animate-float">
                <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
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
