import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="inline-block">
            <span className="text-4xl font-bold text-[#543295]">DS</span>
            <span className="block text-sm font-medium text-gray-400 mt-1">
              DIGITAL SMART
            </span>
          </Link>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/agencia.digitalsmart/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gray-800 hover:bg-[#543295] rounded-lg flex items-center justify-center transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Digital Smart. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
