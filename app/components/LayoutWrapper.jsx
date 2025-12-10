"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

// Rotas que não devem ter header/footer global (landing pages)
const landingPages = [
  "/escola-de-danca",
  "/educacao",
  "/treinamento",
  "/sites",
];

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Verifica se é uma landing page
  const isLandingPage = landingPages.some(route => pathname.startsWith(route));

  if (isLandingPage) {
    // Landing pages: sem header/footer global, sem botão WhatsApp flutuante
    return <main>{children}</main>;
  }

  // Páginas normais: com header, footer e botão WhatsApp
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
