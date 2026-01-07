"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { authClient } from "../../utils/authClient";
import { Search, UserPlus, Shield, Key, Trash2, X, Check, AlertCircle, User } from "lucide-react";

type Account = {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt?: number | Date | string;
};

const roles = [
  { value: "user", label: "Usuário", icon: User },
  { value: "admin", label: "Admin", icon: Shield },
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

  const isAdmin = useMemo(() => sessionRole === "admin", [sessionRole]);

  const filteredAccounts = useMemo(() => {
    if (!searchTerm) return accounts;
    return accounts.filter(u => 
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [accounts, searchTerm]);

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
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-yellow-400" />
            <h2 className="text-xl font-semibold text-white">Acesso Restrito</h2>
          </div>
          <p className="text-white/70">Apenas administradores podem acessar esta página.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">Gerenciar Contas</h1>
            <p className="text-white/70">Crie, edite e gerencie usuários e permissões</p>
          </div>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-xl transition-all"
          >
            <UserPlus className="w-4 h-4" />
            Nova Conta
          </button>
        </div>
      </div>

      {/* Alert Messages */}
      {message && (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${
          message.type === 'success' 
            ? 'bg-green-500/10 border-green-500/30 text-green-300' 
            : 'bg-red-500/10 border-red-500/30 text-red-300'
        }`}>
          {message.type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span className="text-sm font-medium">{message.text}</span>
        </div>
      )}

      {/* Create Form */}
      {showCreateForm && (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Criar Nova Conta</h2>
            <button
              onClick={() => setShowCreateForm(false)}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Nome</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                placeholder="Nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">E-mail</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                placeholder="email@exemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Senha</label>
              <input
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">Função</label>
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
              >
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              disabled={isPending}
              onClick={submitCreate}
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 rounded-xl transition-all disabled:opacity-50"
            >
              {isPending ? "Criando..." : "Criar Conta"}
            </button>
            <button
              onClick={() => setShowCreateForm(false)}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* Search Bar */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
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
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Usuários Cadastrados</h2>
        <div className="space-y-4">
          {filteredAccounts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-white/50" />
              </div>
              <p className="text-white/60">
                {searchTerm ? "Nenhum usuário encontrado para esta busca." : "Nenhum usuário cadastrado ainda."}
              </p>
              {!searchTerm && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="mt-4 text-purple-400 hover:text-purple-300 font-medium"
                >
                  Criar primeiro usuário
                </button>
              )}
            </div>
          ) : (
            filteredAccounts.map((u) => {
              const RoleIcon = roles.find(r => r.value === u.role)?.icon || User;
              return (
                <div key={u.id} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {u.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">{u.name}</h3>
                        <p className="text-white/60 text-sm">{u.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <RoleIcon className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-400 text-sm font-medium capitalize">{u.role}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <select
                        value={u.role}
                        onChange={(e) => changeRole(u.id, e.target.value)}
                        className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                      >
                        {roles.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => setEditingPassword({ userId: u.id, password: "" })}
                        className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all"
                      >
                        <Key className="w-4 h-4" />
                        <span className="hidden sm:inline">Trocar Senha</span>
                        <span className="sm:hidden">Senha</span>
                      </button>
                      <button
                        onClick={() => removeAccount(u.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                        <span className="hidden sm:inline">Remover</span>
                        <span className="sm:hidden">Del</span>
                      </button>
                    </div>
                  </div>

                  {/* Password Change Form */}
                  {editingPassword?.userId === u.id && (
                    <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <input
                          type="password"
                          value={editingPassword.password}
                          onChange={(e) => setEditingPassword({ userId: u.id, password: e.target.value })}
                          placeholder="Nova senha"
                          className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={changePassword}
                            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all"
                          >
                            Salvar
                          </button>
                          <button
                            onClick={() => setEditingPassword(null)}
                            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
