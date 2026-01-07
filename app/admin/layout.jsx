import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import AdminLayoutComponent from "./_components/AdminLayout";
import { getSessionWithRole } from "../utils/auth";
import { Suspense } from "react";
import QueryProvider from "./_components/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Painel Administrativo | Digital Smart",
  description: "Painel administrativo da Digital Smart",
};

export default async function AdminLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        }>
          <QueryProvider>
            <AdminLayoutWrapper>
              {children}
            </AdminLayoutWrapper>
          </QueryProvider>
        </Suspense>
      </body>
    </html>
  );
}

async function AdminLayoutWrapper({ children }) {
  // Usa a função adaptada que já inclui o role na sessão
  const sessionResult = await getSessionWithRole();
  const user = sessionResult?.data?.user ?? null;
  
  return (
    <AdminLayoutComponent session={user} newLeadsCount={0}>
      {children}
    </AdminLayoutComponent>
  );
}
