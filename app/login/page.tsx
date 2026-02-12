'use client';

import { useState } from 'react';
import { User, Lock, ArrowRight, Sparkles, ArrowLeft, ShieldCheck, Mail, Eye, EyeOff, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { authenticate } from '@/actions/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const result = await authenticate(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    }
    // If successful, NextAuth will redirect automatically
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#05120d] font-sans overflow-hidden">
      {/* Left Column - Branding & Visuals (Hidden on Mobile) */}
      <div className="relative hidden lg:flex flex-col justify-between p-16 bg-[#0a1f18] overflow-hidden border-r border-white/5">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 opacity-40 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 opacity-30 blur-[100px] rounded-full pointer-events-none translate-y-1/4 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[length:40px_40px] opacity-[0.03]" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_BASE_PATH || ''}/grid.svg')` }} />

        {/* Top Content */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-3 text-emerald-400 font-bold text-xl mb-12 hover:text-emerald-300 transition-colors group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-emerald-500/10">
                <span className="font-bold">K</span>
            </div>
            <span className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">Kainos Academy</span>
          </Link>

          <div className="space-y-6 max-w-lg">
            <h1 className="text-5xl font-bold text-white leading-tight tracking-tight">
                Impulsa tu <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Camino al Éxito</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
                Accede a un ecosistema educativo gamificado diseñado para maximizar tu potencial. Aprende, compite y crece con Kainos.
            </p>
          </div>
        </div>

        {/* Bottom Content - Trust Indicator */}
        <div className="relative z-10 space-y-8">
             <div className="flex gap-4">
                <div className="flex -space-x-3">
                    {[1,2,3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a1f18] bg-slate-700 flex items-center justify-center text-xs text-white overflow-hidden relative">
                             <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-${80 + (i*5)}`} />
                        </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-[#0a1f18] bg-emerald-600 flex items-center justify-center text-xs text-white font-bold">
                        +1k
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-white font-bold text-sm">Estudiantes Activos</span>
                    <span className="text-emerald-400 text-xs">Comunidad en crecimiento</span>
                </div>
             </div>

             <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 max-w-sm hover:bg-white/10 transition-colors cursor-default">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <div className="text-white font-semibold text-sm">Institución Verificada</div>
                    <div className="text-slate-400 text-xs">Acceso seguro y monitoreado</div>
                </div>
             </div>
        </div>
      </div>

      {/* Right Column - Login Form */}
      <div className="flex flex-col justify-center items-center p-8 lg:p-16 relative bg-[#05120d]">
         {/* Mobile Back Link */}
         <div className="absolute top-6 left-6 lg:hidden z-20">
            <Link 
            href="/" 
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1f18]/40 backdrop-blur-md border border-white/10 text-slate-400 text-sm font-medium transition-all duration-300 hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:text-emerald-200"
            >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Volver</span>
            </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left space-y-2">
                <div className="inline-flex lg:hidden w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 items-center justify-center mb-6 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <span className="text-3xl font-bold bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent">K</span>
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">Bienvenido de nuevo</h2>
                <p className="text-slate-400">Ingresa tus credenciales para acceder a tu cuenta.</p>
            </div>

            {/* Error Message */}
            {error && (
                <div className="rounded-xl bg-red-500/10 border border-red-500/20 p-4 flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-200">{error}</p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300 ml-1">Email Institucional</label>
                        <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                                <Mail size={18} />
                            </div>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#0a1f18]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:bg-[#0a1f18]"
                                placeholder="estudiante@kainos.edu"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
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
                                className="w-full bg-[#0a1f18]/50 border border-white/10 rounded-xl py-3.5 pl-11 pr-12 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:bg-[#0a1f18]"
                                placeholder="••••••••"
                                required
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
                </div>

                <div className="space-y-4">
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold py-3.5 px-4 transition-all shadow-lg shadow-emerald-900/20 hover:shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                         <span className="relative z-10 flex items-center justify-center gap-2">
                            {loading ? (
                                <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                            ) : (
                                <>
                                    <span>Iniciar Sesión</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </span>
                    </button>
                    
                    <div className="relative py-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/5" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#05120d] px-2 text-slate-600 font-medium">Acceso Seguro</span>
                        </div>
                    </div>
                </div>
            </form>

            <div className="pt-6 text-center lg:text-left grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center lg:items-start gap-2 hover:bg-white/10 transition-colors cursor-pointer group">
                    <Sparkles size={16} className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-xs text-slate-400 font-medium">Soporte 24/7</span>
                 </div>
                 <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col items-center lg:items-start gap-2 hover:bg-white/10 transition-colors cursor-pointer group">
                    <Lock size={16} className="text-emerald-500/50 group-hover:text-emerald-400 transition-colors" />
                    <span className="text-xs text-slate-400 font-medium">Datos Encriptados</span>
                 </div>
            </div>
            
            <p className="text-center text-xs text-slate-600 mt-8">
                &copy; {new Date().getFullYear()} Kainos Academy. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </div>
  );
}
