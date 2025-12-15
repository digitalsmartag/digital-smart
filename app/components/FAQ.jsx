"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Moro longe de você, é possível realizarmos a execução que preciso?",
    answer: "Sim, atualmente marcamos reuniões online e toda a elaboração, avaliação e execução é possível realizarmos 100% Online.",
  },
  {
    question: "É cobrado para fazer orçamento do meu projeto?",
    answer: "Não, nossa reunião inicial é somente para entender o projeto e analisar a melhor maneira de executá-lo, se aprovado somente após a elaboração do contrato que haverá investimentos.",
  },
  {
    question: "É possível realizar apenas um dos seus serviços ou preciso fazer um pacote completo?",
    answer: "Você pode escolher um de nossos serviços ou um pacote completo e caso precise de algum serviço adicional que não oferecemos temos também empresas parceiras que oferecem super descontos para nossos parceiros.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#543295] font-semibold text-sm uppercase tracking-wider bg-[#543295]/10 px-4 py-2 rounded-full">
            <HelpCircle className="w-4 h-4" />
            Dúvidas Frequentes
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            FAQ
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Tire suas principais dúvidas sobre nossos serviços
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#543295] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
