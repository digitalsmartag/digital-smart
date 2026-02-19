"use client";

import { HiArrowRight } from "react-icons/hi2";

export default function ScrollToPrecoButton({ className, children }) {
  function scrollToPreco(e) {
    e.preventDefault();
    const element = document.getElementById('preco');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
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
