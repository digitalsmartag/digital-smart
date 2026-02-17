import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-[#543295] to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-xl">DS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">Digital Smart</span>
              <span className="text-xs text-zinc-500">Marketing Digital</span>
            </div>
          </Link>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/agencia.digitalsmart/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 px-5 py-3 rounded-full transition-all duration-300"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <span className="text-zinc-300 group-hover:text-white transition-colors">@agencia.digitalsmart</span>
          </a>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Copyright */}
          <p className="text-zinc-500 text-sm text-center">
            © {new Date().getFullYear()} Digital Smart. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
