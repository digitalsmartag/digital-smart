import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";
import { partners } from "../data/partners";

const services = [
  { name: "Tráfego Pago", href: "/servicos/trafego-pago" },
  { name: "Sites e Landing Pages", href: "/servicos/sites" },
  { name: "Gestão de Redes Sociais", href: "/servicos/gestao-redes-sociais" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre Nós", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-[#543295]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Pronto para destacar seu negócio?
              </h3>
              <p className="text-white/80 mt-2">
                Entre em contato e descubra como podemos ajudar
              </p>
            </div>
            <Link
              href="/contato"
              className="bg-white text-[#543295] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg whitespace-nowrap flex items-center gap-2"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
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
              <span className="text-4xl font-bold text-[#543295]">DS</span>
              <span className="block text-sm font-medium text-gray-400 mt-1">
                DIGITAL SMART
              </span>
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Uma empresa de marketing digital que oferece uma ampla gama de
              serviços para ajudar outras empresas e negócios a alcançar seus
              objetivos on-line.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/agencia.digitalsmart/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#543295] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#543295] rounded-lg flex items-center justify-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-[#543295] rounded-lg flex items-center justify-center transition-all duration-300"
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
                    className="text-gray-400 hover:text-[#543295] transition-colors duration-200"
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
                    className="text-gray-400 hover:text-[#543295] transition-colors duration-200"
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
                <Mail className="w-5 h-5 text-[#543295] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">contato@digitalsmart.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#543295] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+55 (31) 98416-9075</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#543295] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Brasil | EUA</span>
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
              +{partners.length} empresas parceiras no Brasil e EUA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
