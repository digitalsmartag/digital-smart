"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { authClient } from "../../utils/authClient";
import { 
  Search, UserPlus, Shield, Key, Trash2, X, Check, AlertCircle, User, 
  Mail, Lock, ChevronDown, MoreVertical, Edit3, Users, Crown
} from "lucide-react";

type Account = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: number | Date | string;
};

const roles = [
  { value: "user", label: "Usuário", icon: User, color: "from-blue-500 to-cyan-500" },
  { value: "admin", label: "Administrador", icon: Crown, color: "from-purple-500 to-pink-500" },
];

export default function AccountsPage() {
  const [sessionRole, setSessionRole] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const [editingPassword, setEditingPassword] = useState<{ userId: string; password: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isAdmin = useMemo(() => sessionRole === "admin", [sessionRole]);

  const filteredAccounts = useMemo(() => {
    if (!searchTerm) return accounts;
    return accounts.filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [accounts, searchTerm]);

  const stats = useMemo(() => ({
    total: accounts.length,
    admins: accounts.filter(a => a.role === 'admin').length,
    users: accounts.filter(a => a.role === 'user').length,
  }), [accounts]);

  const fetchAccounts = async () => {
    try {
      const res = await fetch("/admin/api/accounts");
      const data = await res.json();
      setAccounts(data.users || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      const role = (data as any)?.user?.role ?? null;
      setSessionRole(role);
    });
  }, []);

  useEffect(() => {
    (async () => {
      await fetchAccounts();
    })();
  }, []);

  const submitCreate = () => {
    if (!form.name || !form.email || !form.password) {
      setMessage({ type: "error", text: "Preencha todos os campos obrigatórios." });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    setMessage(null);
    startTransition(async () => {
      await fetch("/admin/api/accounts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", ...form }),
      });
      setForm({ name: "", email: "", password: "", role: "user" });
      setShowCreateForm(false);
      fetchAccounts();
      setMessage({ type: "success", text: "Conta criada com sucesso!" });
      setTimeout(() => setMessage(null), 3000);
    });
  };

  const changeRole = async (userId: string, role: string) => {
    await fetch("/admin/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "updateRole", userId, role }),
    });
    fetchAccounts();
    setActiveDropdown(null);
    setMessage({ type: "success", text: "Função atualizada com sucesso!" });
    setTimeout(() => setMessage(null), 3000);
  };

  const changePassword = async () => {
    if (!editingPassword?.password) return;
    await fetch("/admin/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "updatePassword", userId: editingPassword.userId, password: editingPassword.password }),
    });
    setEditingPassword(null);
    setMessage({ type: "success", text: "Senha atualizada com sucesso!" });
    setTimeout(() => setMessage(null), 3000);
  };

  const removeAccount = async (userId: string) => {
    if (!confirm("Tem certeza que deseja remover esta conta?")) return;
    await fetch("/admin/api/accounts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", userId }),
    });
    fetchAccounts();
    setMessage({ type: "success", text: "Conta removida com sucesso!" });
    setTimeout(() => setMessage(null), 3000);
  };

  if (sessionRole && !isAdmin) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Acesso Restrito</h2>
          <p className="text-white/60">Apenas administradores podem acessar esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="  rounded-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
           
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            <UserPlus className="w-5 h-5" />
            Nova Conta
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm font-medium">Total de Contas</p>
              <p className="text-2xl font-bold text-white">{stats.total}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm font-medium">Administradores</p>
              <p className="text-2xl font-bold text-white">{stats.admins}</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-white/60 text-sm font-medium">Usuários</p>
              <p className="text-2xl font-bold text-white">{stats.users}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Messages */}
      {message && (
        <div className={`flex items-center gap-3 px-5 py-4 rounded-xl border ${
          message.type === 'success' 
            ? 'bg-green-500/10 border-green-500/30 text-green-300' 
            : 'bg-red-500/10 border-red-500/30 text-red-300'
        }`}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            message.type === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
          }`}>
            {message.type === 'success' ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
          </div>
          <span className="font-medium">{message.text}</span>
        </div>
      )}

      {/* Create Form Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Nova Conta</h2>
              </div>
              <button
                onClick={() => setShowCreateForm(false)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    placeholder="Digite o nome"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    placeholder="email@exemplo.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Senha</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Função</label>
                <div className="grid grid-cols-2 gap-3">
                  {roles.map((role) => {
                    const Icon = role.icon;
                    const isSelected = form.role === role.value;
                    return (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setForm({ ...form, role: role.value })}
                        className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                          isSelected 
                            ? 'border-purple-500 bg-purple-500/20' 
                            : 'border-white/20 hover:border-white/40 bg-white/5'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className={`font-medium ${isSelected ? 'text-purple-300' : 'text-white/70'}`}>
                          {role.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-white/10 flex gap-3">
              <button
                onClick={() => setShowCreateForm(false)}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
              >
                Cancelar
              </button>
              <button
                disabled={isPending}
                onClick={submitCreate}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50"
              >
                {isPending ? "Criando..." : "Criar Conta"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Password Change Modal */}
      {editingPassword && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-white/10 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Key className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-white">Alterar Senha</h2>
              </div>
              <button
                onClick={() => setEditingPassword(null)}
                className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <label className="block text-sm font-medium text-white/80 mb-2">Nova Senha</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  value={editingPassword.password}
                  onChange={(e) => setEditingPassword({ ...editingPassword, password: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                  placeholder="Digite a nova senha"
                />
              </div>
            </div>
            <div className="px-6 py-4 border-t border-white/10 flex gap-3">
              <button
                onClick={() => setEditingPassword(null)}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={changePassword}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome ou e-mail..."
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Users List */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">Usuários Cadastrados</h2>
        </div>
        
        {filteredAccounts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white/50" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {searchTerm ? "Nenhum resultado" : "Nenhuma conta cadastrada"}
            </h3>
            <p className="text-white/60 mb-6">
              {searchTerm ? "Tente buscar com outros termos." : "Crie a primeira conta para começar."}
            </p>
            {!searchTerm && (
              <button
                onClick={() => setShowCreateForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all"
              >
                <UserPlus className="w-5 h-5" />
                Criar Conta
              </button>
            )}
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredAccounts.map((u) => {
              const roleData = roles.find(r => r.value === u.role) || roles[0];
              const RoleIcon = roleData.icon;
              return (
                <div key={u.id} className="p-6 hover:bg-white/5 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${roleData.color} rounded-full flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">
                          {u.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{u.name}</h3>
                        <p className="text-white/60 text-sm">{u.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <RoleIcon className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-400 text-sm font-medium">{roleData.label}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <div className="relative">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === u.id ? null : u.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all"
                        >
                          <RoleIcon className="w-4 h-4" />
                          {roleData.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        {activeDropdown === u.id && (
                          <div className="absolute top-full left-0 mt-1 bg-gray-900 border border-white/20 rounded-xl shadow-xl py-1 z-10 min-w-[160px]">
                            {roles.map((role) => {
                              const Icon = role.icon;
                              return (
                                <button
                                  key={role.value}
                                  onClick={() => changeRole(u.id, role.value)}
                                  className={`w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                                    u.role === role.value ? 'text-purple-400 font-medium' : 'text-white/70'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  {role.label}
                                  {u.role === role.value && <Check className="w-4 h-4 ml-auto" />}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setEditingPassword({ userId: u.id, password: "" })}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all"
                      >
                        <Key className="w-4 h-4" />
                        <span className="hidden sm:inline">Trocar Senha</span>
                      </button>
                      <button
                        onClick={() => removeAccount(u.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Remover</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
