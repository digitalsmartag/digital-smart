"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { authClient } from "../../utils/authClient";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface AdminLayoutProps {
  children: React.ReactNode;
  session: any;
  newLeadsCount?: number;
}

export default function AdminLayout({ children, session, newLeadsCount }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const hideChrome = pathname === "/admin";
  const [resolvedSession, setResolvedSession] = useState(session);

  // Determina a seção ativa baseado no pathname
  const getActiveSection = () => {
    if (pathname.includes('/admin/leads')) return 'leads';
    if (pathname.includes('/admin/accounts')) return 'accounts';
    return 'overview'; // default para /admin/dashboard
  };

  const [activeSection, setActiveSection] = useState(getActiveSection());

  // Fallback: se não veio sessão do server, tentar recuperar no client
  useEffect(() => {
    const fetchRole = async () => {
      try {
        const res = await fetch("/admin/api/user-role");
        const json = await res.json();
        return json?.role ?? null;
      } catch {
        return null;
      }
    };

    const ensureSession = async () => {
      // 1) Se não veio sessão do server, busca completa
      if (!resolvedSession) {
        try {
          const { data } = await authClient.getSession();
          setResolvedSession(data?.user ?? null);
          console.log("🧑‍💻 Session (client fetch):", data?.user);
        } catch {
          // ignore
        }
        return;
      }

      // 2) Se veio sem role, tenta completar via API server action
      if (resolvedSession && !resolvedSession.role) {
        const role = await fetchRole();
        if (role) {
          setResolvedSession({ ...resolvedSession, role });
          console.log("🧑‍💻 Session (role from API):", role);
        }
      }
    };

    ensureSession();

    console.log("🧑‍💻 Session (passed):", resolvedSession);
  }, [resolvedSession]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Navegação baseada na seção
    switch (section) {
      case 'overview':
        router.push('/admin/dashboard');
        break;
      case 'leads':
        router.push('/admin/leads');
        break;
      case 'accounts':
        router.push('/admin/accounts');
        break;
      default:
        router.push('/admin/dashboard');
    }
  };

  // Atualiza o título baseado na seção ativa
  const getHeaderInfo = () => {
    switch (activeSection) {
      case 'overview':
        return { title: "Dashboard", subtitle: "Bem-vindo de volta! Aqui está o resumo do seu negócio." };
      case 'leads':
        return { title: "Leads", subtitle: "Gerencie todos os seus leads e acompanhe as conversões." };
      case 'accounts':
        return { title: "Contas", subtitle: "Crie, edite e gerencie usuários e permissões de acesso." };
      default:
        return { title: "Dashboard", subtitle: "Bem-vindo de volta! Aqui está o resumo do seu negócio." };
    }
  };

  const headerInfo = getHeaderInfo();

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#543295] via-[#4a2d85] to-[#3d2570]">
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="flex h-screen relative">
        {/* Sidebar */}
        <Sidebar
          isOpen={true}
          onToggle={() => {}}
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          session={resolvedSession}
          newLeadsCount={newLeadsCount}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header
            title={headerInfo.title}
            subtitle={headerInfo.subtitle}
          />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
