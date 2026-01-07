"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm, FieldError, UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "../utils/authClient";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Mail, Lock, ArrowRight, Shield } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function AdminPage() {
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const [isError, setIsError] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [checkingSession, setCheckingSession] = useState(true);

    const loginForm = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    });

    const handleLogin = (data: LoginData) => {
        setMessage(null);
        setIsError(false);
        startTransition(async () => {
            try {
                const result = await authClient.signIn.email({
                    email: data.email,
                    password: data.password,
                    callbackURL: "/admin/dashboard",
                    rememberMe: false
                }, {});

                if (result?.error) {
                    setMessage("E-mail ou senha inválidos");
                    setIsError(true);
                    return;
                }

                setMessage("Login realizado com sucesso! Redirecionando...");
                setIsError(false);
            } catch (err: any) {
                setMessage("Erro inesperado ao entrar");
                setIsError(true);
            }
        });
    };

    useEffect(() => {
        authClient.getSession().then(({ data }) => {
            if (data?.user) {
                router.push('/admin/dashboard');
            } else {
                setCheckingSession(false);
            }
        }).catch(() => setCheckingSession(false));
    }, [router]);

    if (checkingSession) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570] flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-4 border-white/30 border-t-white rounded-full" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#543295] via-[#4a2d85] to-[#3d2570] flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Login Card */}
            <div className="relative w-full max-w-md">
                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-16">
                        <Image
                            src="/root/logo-branca.png"
                            alt="Digital Smart"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#543295] to-[#6b46c1] rounded-2xl mb-4 shadow-lg">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            Área Administrativa
                        </h1>
                        <p className="text-gray-500">
                            Entre com suas credenciais para acessar
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-5">
                        <FormField
                            label="E-mail"
                            type="email"
                            placeholder="seu@email.com"
                            icon={<Mail className="w-5 h-5 text-gray-400" />}
                            register={loginForm.register("email")}
                            error={loginForm.formState.errors.email}
                        />
                        <FormField
                            label="Senha"
                            type="password"
                            placeholder="••••••••"
                            icon={<Lock className="w-5 h-5 text-gray-400" />}
                            register={loginForm.register("password")}
                            error={loginForm.formState.errors.password}
                        />

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-gradient-to-r from-[#543295] to-[#6b46c1] hover:from-[#6b46c1] hover:to-[#7c3aed] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 group"
                        >
                            {isPending ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Entrando...
                                </>
                            ) : (
                                <>
                                    Entrar
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Message */}
                    {message && (
                        <div className={`mt-6 p-4 rounded-xl flex items-center gap-3 ${
                            isError 
                                ? 'bg-red-50 border border-red-200 text-red-700' 
                                : 'bg-green-50 border border-green-200 text-green-700'
                        }`}>
                            <div className={`w-2 h-2 rounded-full ${isError ? 'bg-red-500' : 'bg-green-500'}`} />
                            {message}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <p className="text-center text-white/50 text-sm mt-6">
                    © {new Date().getFullYear()} Digital Smart. Todos os direitos reservados.
                </p>
            </div>
        </div>
    );
}

function FormField({ 
    label, 
    type, 
    placeholder,
    icon,
    register, 
    error 
}: { 
    label: string; 
    type: string; 
    placeholder?: string;
    icon?: React.ReactNode;
    register: UseFormRegisterReturn; 
    error?: FieldError 
}) {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <div className="relative">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        {icon}
                    </div>
                )}
                <input
                    type={type}
                    placeholder={placeholder}
                    {...register}
                    className={`w-full ${icon ? 'pl-12' : 'pl-4'} pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#543295] focus:border-transparent transition-all duration-300 hover:border-gray-300`}
                />
            </div>
            {error?.message && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <span className="w-1 h-1 bg-red-500 rounded-full" />
                    {error.message}
                </p>
            )}
        </div>
    );
}
