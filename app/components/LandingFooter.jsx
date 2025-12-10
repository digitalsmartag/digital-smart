import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export default function LandingFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Image 
              src="/root/logo-branca.png" 
              alt="Digital Smart" 
              width={160} 
              height={50} 
              className="h-10 w-auto object-contain mb-6" 
            />
            <p className="text-gray-400 leading-relaxed max-w-md mb-6">
              Somos especialistas em marketing digital com foco em resultados. 
              Ajudamos empresas a crescerem no mundo digital com estratégias 
              personalizadas e eficazes.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5531984169075"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+5531984169075"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@digitalsmart.com.br"
                className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#543295] flex-shrink-0 mt-0.5" />
                <span>+55 (31) 98416-9075</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#543295] flex-shrink-0 mt-0.5" />
                <span>contato@digitalsmart.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#543295] flex-shrink-0 mt-0.5" />
                <span>Brasil | Estados Unidos</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Digital Smart. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
