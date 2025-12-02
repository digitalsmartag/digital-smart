import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Sparkles, Rocket } from "lucide-react";

const services = [
  { name: "🎯 Tráfego Pago", href: "/servicos/trafego-pago" },
  { name: "🌐 Sites", href: "/servicos/sites" },
  { name: "⚡ Landing Pages", href: "/servicos/landing-pages" },
  { name: "📱 Posts", href: "/servicos/posts" },
  { name: "💬 Automações WhatsApp", href: "/servicos/automacoes-whatsapp" },
];

const quickLinks = [
  { name: "🏠 Home", href: "/" },
  { name: "ℹ️ Sobre Nós", href: "/sobre" },
  { name: "📧 Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
                <Rocket className="w-8 h-8" />
                Pronto para destacar seu negócio?
              </h3>
              <p className="text-violet-100 mt-2">
                Entre em contato e descubra como podemos ajudar
              </p>
            </div>
            <Link
              href="/contato"
              className="bg-amber-400 text-gray-900 hover:bg-amber-300 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-4xl font-black text-violet-400">DS</span>
              <span className="block text-sm font-medium text-gray-400 mt-1">
                DIGITAL SMART
              </span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Uma empresa de marketing digital que oferece uma ampla gama de
              serviços para ajudar outras empresas e negócios a alcançar seus
              objetivos on-line. 🚀
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/agencia.digitalsmart/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">contato@digitalsmart.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+55 (31) 98416-9075</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Brasil 🇧🇷 | EUA 🇺🇸</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Digital Smart. Todos os direitos
              reservados.
            </p>
            <p className="text-gray-500 text-sm">
              +40 empresas parceiras 🇧🇷🇺🇸
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
