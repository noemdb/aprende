'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/estudiants/hooks/useAuthStore';
import { User, Lock, ArrowRight, Sparkles } from 'lucide-react';

export default function StudentLoginPage() {
    const [ci, setCi] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const { login, status, error, user } = useAuthStore();

    useEffect(() => {
        if (status === 'authenticated' && user) {
            router.push('/estudiantes/dashboard');
        }
    }, [status, user, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!ci || !password) return;

        const success = await login(ci, password);
        if (success) {
            router.push('/estudiantes/dashboard');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#05120d] relative overflow-hidden font-sans">

            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a7c59]/10 opacity-40 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1b3c2e]/10 opacity-30 blur-[100px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md p-8 relative z-10">
                <div className="bg-[#0a1f18]/60 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden group">

                    {/* Decorative top glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

                    <div className="text-center mb-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mx-auto mb-6 border border-emerald-500/20 shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform duration-500 relative">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="text-3xl font-bold bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent relative z-10">K</span>
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Bienvenido</h1>
                        <p className="text-slate-400 text-sm">Ingresa a tu portal de aprendizaje</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-emerald-500 uppercase tracking-wider ml-1">Cédula de Identidad</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User size={18} className="text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" />
                                </div>
                                <input
                                    type="text"
                                    value={ci}
                                    onChange={(e) => setCi(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/5 rounded-xl focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all text-white placeholder-slate-600 font-medium"
                                    placeholder="Ej: 12345678"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-emerald-500 uppercase tracking-wider ml-1">Contraseña</label>
                            <div className="relative group/input">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock size={18} className="text-slate-500 group-focus-within/input:text-emerald-400 transition-colors" />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-black/20 border border-white/5 rounded-xl focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 outline-none transition-all text-white placeholder-slate-600 font-medium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl text-center font-medium backdrop-blur-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold py-4 px-4 rounded-xl transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:shadow-none disabled:transform-none flex items-center justify-center gap-2 group/btn relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10">{status === 'loading' ? 'Verificando...' : 'Iniciar Sesión'}</span>
                            {!status && <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                            <Sparkles size={12} className="text-emerald-500/50" />
                            Ecosistema Educativo Kainos
                            <Sparkles size={12} className="text-emerald-500/50" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
