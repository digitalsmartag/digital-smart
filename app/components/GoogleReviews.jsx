"use client";

import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

export default function GoogleReviews() {
  const featurableWidgetId = "e6024c41-ec90-4eb4-9e3a-c162fecb718d";

  return (
    <section className="py-20 lg:py-28 bg-[#543295] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-purple-300 font-semibold text-sm uppercase tracking-wider bg-white/10 px-4 py-2 rounded-full">
            ⭐ Avaliações do Google
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            O que dizem nossos clientes
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
            Resultados reais de empresas que confiaram em nosso trabalho
          </p>
        </div>

        {/* Google Reviews Widget */}
        <div className="google-reviews-container">
          <ReactGoogleReviews 
            layout="carousel" 
            featurableId={featurableWidgetId}
          />
        </div>
      </div>

      <style jsx global>{`
        .google-reviews-container {
          --gr-carousel-bg: rgba(255, 255, 255, 0.1);
          --gr-carousel-border: rgba(255, 255, 255, 0.1);
          --gr-carousel-text: rgba(255, 255, 255, 0.9);
          --gr-carousel-text-secondary: rgba(255, 255, 255, 0.6);
          --gr-carousel-accent: #a855f7;
          --gr-carousel-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .google-reviews-container [class*="carousel"] {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
        }
        
        .google-reviews-container [class*="review"] {
          background: transparent !important;
        }
        
        .google-reviews-container p,
        .google-reviews-container span {
          color: rgba(255, 255, 255, 0.9) !important;
        }
        
        .google-reviews-container svg {
          fill: #facc15 !important;
        }
      `}</style>
    </section>
  );
}
