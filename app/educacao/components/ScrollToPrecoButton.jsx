"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function ScrollToPrecoButton({ className, children }) {
  function scrollToPreco(e) {
    e.preventDefault();
    const element = document.getElementById('preco');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  return (
    <button
      onClick={scrollToPreco}
      className={className}
    >
      {children}
    </button>
  );
}
