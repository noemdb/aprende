'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login attempt:', { email, password });
    };

    return (
        <main className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950">
            {/* Back to Home Link */}
            <Link href="/" className="absolute top-8 left-8 z-20 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                <span>Volver al inicio</span>
            </Link>

            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/20 opacity-30 blur-[100px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 opacity-20 blur-[100px] rounded-full pointer-events-none" />

            <FadeIn>
                <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 lg:gap-0 bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl relative z-10">

                    {/* Branding Section */}
                    <div className="relative p-12 lg:p-16 flex flex-col justify-between bg-slate-900/40 lg:border-r border-slate-700/30">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />

                        <div className="relative z-10">
                            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-sm">
                                <span className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase">
                                    Plataforma Educativa
                                </span>
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                                Kainos Academy
                            </h1>
                            <p className="text-emerald-400 text-lg font-medium mb-6">
                                Tu Compañero de Estudio
                            </p>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                Accede a tus cursos, monitorea tu progreso en SAEFL y continúa tu racha de aprendizaje hoy mismo.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12">
                            <div className="flex -space-x-4 mb-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-800 bg-slate-700 flex items-center justify-center text-xs text-white overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-80" />
                                        <span className="relative z-10 font-bold">{i}</span>
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-slate-800 bg-emerald-600 flex items-center justify-center text-xs text-white font-bold">
                                    +1k
                                </div>
                            </div>
                            <p className="text-sm text-slate-400">
                                Se parte de una experiencia educativa gamificada.
                            </p>
                        </div>
                    </div>

                    {/* Login Form Section */}
                    <div className="p-12 lg:p-16 flex flex-col justify-center bg-slate-950/20">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">Bienvenido de nuevo</h2>
                            <p className="text-slate-400 text-sm">
                                Ingresa tus credenciales para acceder a tu cuenta
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-slate-300 ml-1">Email</label>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:bg-slate-900/70"
                                        placeholder="estudiante@ejemplo.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-bold text-slate-300">Contraseña</label>
                                    <Link href="#" className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                                        ¿Olvidaste tu contraseña?
                                    </Link>
                                </div>
                                <div className="relative group">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                                        <Lock size={18} />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-3.5 pl-11 pr-12 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:bg-slate-900/70"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-900/20 hover:shadow-emerald-900/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
                            >
                                <span>Iniciar Sesión</span>
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-slate-800">
                            <button className="w-full py-3 rounded-xl border border-slate-700 hover:bg-slate-800/50 text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-3">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Continuar con Google
                            </button>
                        </div>

                        <div className="mt-6 text-center">
                            <p className="text-slate-400 text-sm">
                                ¿No tienes una cuenta?{' '}
                                <Link href="#" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                                    Regístrate gratis
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </main>
    );
}
