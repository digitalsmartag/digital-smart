"use client";

import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { partners } from "../data/partners";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CEO",
    company: "TechStart",
    content: "A Digital Smart transformou nossa presença digital. Em 3 meses, triplicamos o número de leads qualificados. O investimento se pagou já no primeiro mês.",
    rating: 5,
  },
  {
    name: "Dra. Camila Santos",
    role: "Diretora",
    company: "Clínica Vida",
    content: "Profissionais extremamente competentes. A landing page que criaram tem uma taxa de conversão de 15%, muito acima da média do mercado.",
    rating: 5,
  },
  {
    name: "Fernando Costa",
    role: "Proprietário",
    company: "Academia Elite",
    content: "O tráfego pago gerenciado pela Digital Smart trouxe resultados incríveis. Lotamos todas as turmas em tempo recorde.",
    rating: 5,
  },
  {
    name: "Ana Paula Lima",
    role: "Gerente de Marketing",
    company: "Grupo Educacional ABC",
    content: "Parceria de sucesso há mais de 2 anos. A equipe é dedicada, criativa e sempre entrega além do esperado.",
    rating: 5,
  },
  {
    name: "Marcos Oliveira",
    role: "Fundador",
    company: "StartupBR",
    content: "Do zero ao primeiro milhão em faturamento com a ajuda da Digital Smart. Estratégia impecável e execução perfeita.",
    rating: 5,
  },
  {
    name: "Juliana Ferreira",
    role: "Diretora Comercial",
    company: "Imobiliária Premium",
    content: "As automações de WhatsApp revolucionaram nosso atendimento. Respondemos 10x mais rápido e fechamos mais negócios.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(testimonials);
  const [loading, setLoading] = useState(true);
  const [isGoogleReviews, setIsGoogleReviews] = useState(false);

  useEffect(() => {
    async function fetchGoogleReviews() {
      try {
        const response = await fetch('/api/google-reviews');
        const data = await response.json();
        
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          setIsGoogleReviews(!data.fallback);
        }
      } catch (error) {
        console.error('Erro ao buscar avaliações:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleReviews();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#543295] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-purple-300 font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
            <Star className="w-4 h-4" />
            {isGoogleReviews ? 'Avaliações do Google' : 'Depoimentos'}
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Resultados reais de empresas que confiaram em nosso trabalho
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-8 h-8 text-purple-300/50" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/90 leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.role} - {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/10">
            <div className="flex -space-x-3">
              {testimonials.slice(0, 4).map((t, i) => (
                <div 
                  key={i}
                  className="w-10 h-10 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full border-2 border-[#543295] flex items-center justify-center text-white text-xs font-bold"
                >
                  {t.name.charAt(0)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-white font-bold ml-2">5.0</span>
              </div>
              <div className="text-white/60 text-sm">
                {isGoogleReviews ? 'Avaliações verificadas do Google' : `Avaliação média de ${partners.length} clientes`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
