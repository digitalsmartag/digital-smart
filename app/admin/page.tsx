"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm, FieldError, UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { authClient } from "../utils/authClient";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "Mínimo 6 caracteres"),
});

type LoginData = z.infer<typeof loginSchema>;

export default function AdminPage() {
    const router = useRouter();
    const [message, setMessage] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const [checkingSession, setCheckingSession] = useState(true);

    const loginForm = useForm<LoginData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    });

    const handleLogin = (data: LoginData) => {
        setMessage(null);
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
                    return;
                }

                setMessage("Login realizado com sucesso.");
            } catch (err: any) {
                setMessage("Erro inesperado ao entrar");
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
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#543295] via-[#4a2d85] to-[#3d2570] flex items-center justify-center p-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
            </div>

            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl" />

            <div className="relative w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8">
                <header className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        Painel Administrativo
                    </h1>
                    <p className="text-white/70 text-lg">
                        Use suas credenciais para entrar.
                    </p>
                </header>

                <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-6">
                    <FormField
                        label="E-mail"
                        type="email"
                        register={loginForm.register("email")}
                        error={loginForm.formState.errors.email}
                    />
                    <FormField
                        label="Senha"
                        type="password"
                        register={loginForm.register("password")}
                        error={loginForm.formState.errors.password}
                    />
                    <button
                        type="submit"
                        disabled={isPending}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isPending ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Enviando...
                            </span>
                        ) : (
                            "Entrar"
                        )}
                    </button>
                </form>

                {message && (
                    <div className="mt-6 p-4 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-sm">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

function FormField({ label, type, register, error }: { label: string; type: string; register: UseFormRegisterReturn; error?: FieldError }) {
    return (
        <div>
            <label className="block text-sm font-medium text-white/90 mb-2">{label}</label>
            <input
                type={type}
                {...register}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:bg-white/20"
            />
            {error?.message && <p className="mt-2 text-sm text-red-400">{error.message}</p>}
        </div>
    );
}
