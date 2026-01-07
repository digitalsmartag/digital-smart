"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Users, Star, Sparkles, Award } from "lucide-react";
import { partners } from "../data/partners";

export default function Hero() {
  return (
    <section className="relative min-h-screen max-md:min-h-fit  min-w-[375px]  overflow-hidden bg-gradient-to-b from-[#543295] via-[#4a2d85] to-[#3d2570]">
      

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen max-md:min-h-fit max-lg:flex-col max-lg:justify-start max-lg:py-8">

          {/* Mobile Image - Aparece primeiro no mobile */}
          <div className="lg:hidden relative w-full flex justify-center mt-8 -mb-12 z-0">
            <div className="absolute -bottom-18 w-full left-0 right-0 h-40  bg-gradient-to-t via-60% from-transparent  via-[#543295] to-transparent z-10 pointer-events-none" />

            <div className="relative w-[60vw] max-w-[300px]">
              <Image
                src="/root/maxsuel-perfil.webp"
                alt="Maxsuel Moreira - CEO Digital Smart"
                width={350}
                height={450}
                className="w-full h-auto object-contain pt-10"
                priority
              />

              {/* Identificação Mobile */}
              <div className="absolute bottom-40 right-1/5 translate-x-1/2 z-20">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <p className="text-white font-semibold text-sm">Maxsuel Moreira</p>
                  <p className="text-white/70 text-xs text-center">CEO & Fundador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Left Content (Texto) - 7 colunas no desktop */}
          <div className="lg:col-span-7 flex flex-col justify-center relative z-10 w-full text-center lg:text-left -mt-12 lg:mt-24">

            {/* Main Heading */}
            <div className="max-lg:px-5  lg:pt-20">
              <h1 className="text-[1.5rem] sm:text-5xl lg:text-6xl xl:text-[5.5rem] font-bold text-white leading-[1.1] mb-6">
              Acelere o seu negócio{" "}
              <span className="text-white">com marketing estratégico e personalizado</span>
            </h1>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6  lg:mb-12 max-lg:px-5">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl max-lg:px-3 text-white/70 max-w-2xl max-lg:text-justify  mx-auto lg:mx-0 leading-relaxed mb-8">
              Somos especialistas em marketing digital com foco em resultados com soluções em Tráfego pago, sites e landing pages de alta conversão, gestão estratégica de redes sociais, edições em imagens e vídeos de alta qualidade, treinamentos em marketing, automações em IA e muito mais..
            </p>

            
            
            </div>

            {/* Stats row */}
            
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
