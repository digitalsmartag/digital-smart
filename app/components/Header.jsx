"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const services = [
  { name: "Tráfego Pago", href: "/servicos/trafego-pago" },
  { name: "Sites e Landing Pages", href: "/servicos/sites" },
  { name: "Gestão de Redes Sociais", href: "/servicos/gestao-redes-sociais" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Backdrop overlay para mobile */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#3d2570] shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/root/logo-branca.png" 
                alt="Digital Smart" 
                width={140} 
                height={50} 
                className="h-8 sm:h-11 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="font-medium transition-colors duration-200 text-white/90 hover:text-white"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onMouseEnter={() => setServicesOpen(true)}
                  className="flex items-center gap-1 font-medium transition-colors duration-200 text-white/90 hover:text-white"
                >
                  Serviços
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {servicesOpen && (
                  <div
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-scale-in"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2.5 text-gray-700 hover:bg-purple-50 hover:text-[#543295] transition-colors duration-200"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/sobre"
                className="font-medium transition-colors duration-200 text-white/90 hover:text-white"
              >
                Sobre Nós
              </Link>

              <Link
                href="/contato"
                className="font-medium transition-colors duration-200 text-white/90 hover:text-white"
              >
                Contato
              </Link>

              <Link
                href="/contato"
                className="bg-white hover:bg-gray-100 text-[#543295] px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 transition-colors text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`lg:hidden bg-[#3d2570] border-t border-white/10 overflow-hidden transition-all duration-300 ease-out ${
              isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
              <div className="py-4 space-y-2">
                <Link
                  href="/"
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <div className="px-4 py-2">
                  <span className="text-sm font-semibold text-white/60 uppercase tracking-wider">
                    Serviços
                  </span>
                  <div className="mt-2 space-y-1 pl-2">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block py-2 text-white/90 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/sobre"
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre Nós
                </Link>

                <Link
                  href="/contato"
                  className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>

                <div className="px-4 pt-2">
                  <Link
                    href="/contato"
                    className="block w-full bg-white hover:bg-gray-100 text-[#543295] px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    Fale Conosco
                  </Link>
                </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
