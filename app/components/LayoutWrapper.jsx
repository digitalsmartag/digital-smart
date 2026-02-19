"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Rotas que não devem ter header/footer global (landing pages)
const landingPages = [
  "/escola-de-danca",
  "/educacao",
  "/treinamento",
  "/sites",
];

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Verifica se é uma landing page ou página admin
  const isLandingPage = landingPages.some(route => pathname.startsWith(route));
  const isAdminPage = pathname.startsWith("/admin");

  if (isLandingPage || isAdminPage) {
    // Landing pages e admin: sem header/footer global, sem botão WhatsApp flutuante
    return <main>{children}</main>;
  }

  // Páginas normais: com header, footer e botão WhatsApp
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
