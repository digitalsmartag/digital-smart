"use client";

import { useState } from "react";
import { 
  Menu,
  X,
  Home,
  Users,
  LogOut,
  ChevronRight,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { authClient } from "../../utils/authClient";
import { useLeads } from "../_hooks/useLeads";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
  session: any;
  newLeadsCount?: number;
}

export default function Sidebar({ isOpen, onToggle, activeSection, onSectionChange, session, newLeadsCount }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  // Carrega leads para calcular badge em tempo real
  const { data: leads } = useLeads();
  const badgeCount = leads ? leads.filter((lead: any) => lead.status === "new").length : (newLeadsCount || 0);
  const userRole = session?.role ?? session?.user?.role;
  const userName = session?.name ?? session?.user?.name;
  const userEmail = session?.email ?? session?.user?.email;

  const menuCategories = [
    {
      title: "Principal",
      items: [
        { id: "overview", label: "Visão Geral", icon: Home, badge: null },
        { id: "leads", label: "Leads", icon: Users, badge: badgeCount > 0 ? badgeCount.toString() : null },
        ...(userRole === "admin"
          ? [{ id: "accounts", label: "Contas", icon: Users, badge: null }]
          : []),
      ]
    }
  ];

  return (
    <div className="w-72 bg-black/40 backdrop-blur-xl border-r border-white/10 transition-all duration-500 ease-out flex flex-col relative">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />
      
      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" />

      {/* Sidebar Header */}
      <div className="relative p-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group">
              
            </div>
            <div className="gap-1">
              <h2 className="text-white font-bold text-xl tracking-tight">Digital Smart</h2>
              <div className="flex items-center gap-2">
                <p className="text-white/70 text-sm font-medium">Painel Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 p-4 space-y-6 overflow-y-auto">
        {menuCategories.map((category, categoryIndex) => (
          <div key={category.title} className="space-y-2">
            <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider px-4">
              {category.title}
            </h3>
            <ul className="space-y-1">
              {category.items.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;
                
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => onSectionChange(item.id)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`w-full group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-white shadow-lg shadow-purple-500/20 border border-purple-500/30"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {/* Hover Effect Background */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-xl transition-opacity duration-300 ${
                        isHovered && !isActive ? "opacity-100" : "opacity-0"
                      }`} />
                      
                      {/* Icon Container */}
                      <div className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300 ${
                        isActive 
                          ? "bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg" 
                          : "bg-white/10 group-hover:bg-white/20"
                      }`}>
                        <Icon className={`w-5 h-5 transition-all duration-300 ${
                          isActive ? "text-white" : "text-white/80"
                        }`} />
                        
                        {/* Badge */}
                        {item.badge && item.badge !== "0" && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border-2 border-black/40">
                            <span className="text-white text-xs font-bold">{item.badge}</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1 flex items-center justify-between">
                        <span className={`font-medium transition-all duration-300 ${
                          isActive ? "text-white" : "text-white/80"
                        }`}>
                          {item.label}
                        </span>
                        
                        {/* Animated Arrow */}
                        <ChevronRight className={`w-4 h-4 transition-all duration-300 ${
                          isActive 
                            ? "text-white/80 translate-x-1" 
                            : "text-white/40 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`} />
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User Section */}
      <div className="relative p-4 border-t border-white/10">
        <div className="relative">
          <button 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 group"
            onClick={() => setProfileMenuOpen(!profileMenuOpen)}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <span className="text-white font-bold text-sm">
                  {userName?.charAt(0)?.toUpperCase() || 'A'}
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black/40" />
            </div>
            
            <div className="flex-1 text-left">
              <p className="text-white font-medium text-sm">{userName || 'Admin User'}</p>
              <p className="text-white/60 text-xs">{userEmail || 'admin@digitalsmart.com'}</p>
            </div>
            
            <ChevronDown className={`w-4 h-4 text-white/60 transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {profileMenuOpen && (
            <div className="absolute bottom-full left-4 right-4 mb-2 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden">
              <div className="py-2">
                <button 
                  className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                  onClick={async () => {
                    try {
                      await authClient.signOut();
                    } catch (error) {
                      console.error('Error signing out:', error);
                    } finally {
                      window.location.href = '/admin';
                    }
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm">Sair</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
