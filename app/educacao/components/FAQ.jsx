"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "Quais áreas de atuação esse curso atende?",
    a: "O curso é indicado para quem vende cursos profissionalizantes, técnicos, tecnólogos, graduação e pós-graduação.",
  },
  {
    q: "E se eu não gostar do curso?",
    a: "Você tem 7 dias de garantia incondicional. Basta enviar um e-mail e devolvemos 100% do seu investimento, sem burocracia.",
  },
  {
    q: "Estou iniciando nessa área e não tenho conhecimento. Faz sentido para mim?",
    a: "Sim! O curso é ideal para quem está começando e quer já iniciar com uma estrutura sólida, profissional e com credibilidade no mercado.",
  },
  {
    q: "Como é o acesso ao conteúdo?",
    a: "O acesso é 100% online, seguro e vitalício, pela plataforma Hotmart. O conteúdo é organizado em módulos e aulas, com materiais em vídeo e texto.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          data-animate="fade-up"
          data-delay={`${(i + 1) * 100}`}
          className="border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full px-6 py-5 flex items-center justify-between text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
          >
            <span className="font-semibold text-white">{faq.q}</span>
            {openFaq === i ? (
              <ChevronUp className="w-5 h-5 text-violet-400 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-zinc-500 flex-shrink-0" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openFaq === i ? "max-h-40" : "max-h-0"
            }`}
          >
            <div className="px-6 py-5 text-zinc-400 border-t border-white/5">
              {faq.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
