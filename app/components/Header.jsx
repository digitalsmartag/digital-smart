"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";

const services = [
  { name: "🎯 Tráfego Pago", href: "/servicos/trafego-pago" },
  { name: "🌐 Sites", href: "/servicos/sites" },
  { name: "⚡ Landing Pages", href: "/servicos/landing-pages" },
  { name: "📱 Posts", href: "/servicos/posts" },
  { name: "💬 Automações WhatsApp", href: "/servicos/automacoes-whatsapp" },
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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-3xl font-black transition-all duration-300 group-hover:scale-105 text-violet-600">
                DS
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-600">
              DIGITAL SMART
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-violet-600"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 font-medium transition-colors duration-200 text-gray-700 hover:text-violet-600"
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
                      className="block px-4 py-2.5 text-gray-700 hover:bg-violet-50 hover:text-violet-600 transition-colors duration-200"
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
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-violet-600"
            >
              Sobre Nós
            </Link>

            <Link
              href="/contato"
              className="font-medium transition-colors duration-200 text-gray-700 hover:text-violet-600"
            >
              Contato
            </Link>

            <Link
              href="/contato"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-colors text-gray-700 hover:text-violet-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 rounded-b-2xl shadow-xl">
            <div className="py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                🏠 Home
              </Link>

              <div className="px-4 py-2">
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Serviços
                </span>
                <div className="mt-2 space-y-1 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block py-2 text-gray-700 hover:text-violet-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/sobre"
                className="block px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                ℹ️ Sobre Nós
              </Link>

              <Link
                href="/contato"
                className="block px-4 py-2 text-gray-700 hover:bg-violet-50 hover:text-violet-600 rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                📧 Contato
              </Link>

              <div className="px-4 pt-2">
                <Link
                  href="/contato"
                  className="block w-full bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-bold text-center transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  ✨ Fale Conosco
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
