'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Zap, Book, User, Flame, Star, LogOut } from 'lucide-react';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Inicio', href: '/estudiantes/dashboard', icon: Home },
        { name: 'Entrenar', href: '/estudiantes/practica', icon: Zap },
        { name: 'Mis Cursos', href: '/estudiantes/materias', icon: Book },
        { name: 'Mi Perfil', href: '/estudiantes/perfil', icon: User },
    ];

    return (
        <div className="flex h-screen bg-[#0f172a] text-slate-200 overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20">
                <div className="p-6 border-b border-slate-800">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center border border-indigo-400/30">
                            <span className="text-white font-bold text-xl">E</span>
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight">EduQuest</span>
                    </Link>
                    <div className="mt-2 text-xs text-indigo-400 uppercase tracking-wider font-bold">Portal Estudiante</div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${isActive
                                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-lg shadow-indigo-500/5'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                <Icon size={22} className={isActive ? 'text-indigo-400' : 'text-slate-500 group-hover:text-slate-300'} />
                                <span className="font-bold text-sm tracking-wide">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium">
                        <LogOut size={18} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0f172a] to-slate-950">
                {/* Gamified Header */}
                <header className="h-20 border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8 relative z-10">
                    {/* User Info */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 p-0.5">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                <span className="font-bold text-white text-sm">AS</span>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-white leading-none">Ana Silva</div>
                            <div className="text-xs text-slate-400 mt-1">3er Año A</div>
                        </div>
                    </div>

                    {/* Gamification Stats */}
                    <div className="flex items-center gap-6">
                        {/* Streak */}
                        <div className="flex items-center gap-2 group cursor-help" title="Racha de estudio: 5 días">
                            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 group-hover:scale-110 transition-transform">
                                <Flame size={18} className="fill-orange-500" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-white leading-none">5</span>
                                <span className="text-[10px] font-bold text-orange-400 uppercase">Racha</span>
                            </div>
                        </div>

                        {/* XP / Level */}
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-xs font-bold text-indigo-400 uppercase">Nivel 8</div>
                                <div className="text-sm font-bold text-white">3,450 XP</div>
                            </div>
                            <div className="w-12 h-12 relative flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-slate-700" />
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-indigo-500" strokeDasharray="125.6" strokeDashoffset="35" strokeLinecap="round" />
                                </svg>
                                <Star size={16} className="text-yellow-400 fill-yellow-400 absolute" />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto relative p-8">
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 opacity-40 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/10 opacity-30 blur-[100px] rounded-full pointer-events-none" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
