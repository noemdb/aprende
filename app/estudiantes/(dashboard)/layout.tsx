// /home/nuser/code/aprende/app/estudiantes/layout.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Home, Zap, Book, User, Flame, Star, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';

// Importar el CSS personalizado
import './globals.css';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false); // New state for mobile

    // Detectar tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(true); // Default to collapsed logic if needed internaly
            } else {
                setIsCollapsed(false);
                setIsMobileOpen(false); // Close mobile menu when going to desktop
            }
        };

        handleResize(); // Ejecutar al montar
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { name: 'Inicio', href: '/estudiantes/dashboard', icon: Home },
        { name: 'Entrenar', href: '/estudiantes/practica', icon: Zap },
        { name: 'Mis Cursos', href: '/estudiantes/materias', icon: Book },
        { name: 'Mi Perfil', href: '/estudiantes/perfil', icon: User },
    ];

    return (
        <div className="student-layout flex h-screen bg-[#05120d] text-[#f0f8ef] overflow-hidden font-sans">

            {/* Mobile Backdrop */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar colapsable */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-40 md:relative transition-transform duration-300 ease-in-out
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                    ${isCollapsed ? 'md:w-20' : 'md:w-64'} 
                    w-64 bg-[#0a1f18] border-r border-[#1b3c2e] flex flex-col
                `}
            >
                <div className={`p-3 border-b border-[#1b3c2e] flex justify-between items-center ${isCollapsed ? 'md:flex-col md:gap-4' : ''
                    }`}>
                    {(!isCollapsed || isMobileOpen) && (
                        <div className="flex flex-col">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a7c59] to-[#1b3c2e] flex items-center justify-center border border-[#2e5c4a]">
                                    <span className="text-white font-bold text-xl">ES</span>
                                </div>
                                <span className="font-bold text-xl text-white tracking-tight items-center">Kainos</span>
                            </Link>
                            <div className="mt-1 text-[10px] text-[#a3b18a] uppercase tracking-wider font-bold ml-10">Estudiante</div>
                        </div>
                    )}

                    {isCollapsed && !isMobileOpen && (
                        <Link href="/" className="flex flex-col items-center gap-1 pt-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a7c59] to-[#1b3c2e] flex items-center justify-center border border-[#2e5c4a]">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                        </Link>
                    )}

                    {/* Botón para expandir/colapsar (Desktop Only) */}
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden md:block text-[#a3b18a] hover:text-[#f0f8ef] p-1 rounded-lg hover:bg-[#152e25] transition-colors self-end"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>

                    {/* Botón Cerrar (Mobile Only) */}
                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="md:hidden text-[#a3b18a] hover:text-white p-1"
                    >
                        <ChevronLeft size={24} />
                    </button>
                </div>

                <nav className="flex-1 p-2 space-y-1 mt-4">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMobileOpen(false)} // Close on navigate
                                className={`flex items-center ${isCollapsed && !isMobileOpen ? 'justify-center p-2 mb-2' : 'gap-3 px-3 py-3'
                                    } rounded-xl transition-all duration-300 group nav-item relative ${isActive
                                        ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-300 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                                        : 'text-slate-400 hover:text-emerald-100 hover:bg-white/5'
                                    }`}
                            >
                                <Icon
                                    size={22}
                                    className={`transition-all duration-300 ${isActive
                                            ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]'
                                            : 'text-slate-500 group-hover:text-emerald-300 group-hover:scale-110'
                                        }`}
                                />

                                {/* Tooltip para modo colapsado (Solo Desktop) */}
                                {isCollapsed && !isMobileOpen && (
                                    <span className="absolute left-full ml-4 hidden group-hover:block bg-black/80 backdrop-blur-md text-white text-xs font-medium rounded-lg px-3 py-1.5 whitespace-nowrap z-50 border border-white/10 shadow-xl">
                                        {item.name}
                                        <div className="absolute top-1/2 -left-1 -mt-1 w-2 h-2 bg-black/80 border-l border-b border-white/10 transform rotate-45"></div>
                                    </span>
                                )}

                                {(!isCollapsed || isMobileOpen) && (
                                    <span className={`font-medium text-sm tracking-wide ${isActive ? 'font-bold' : ''}`}>{item.name}</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-2 border-t border-[#1b3c2e]">
                    <button className="flex items-center justify-center w-full p-3 rounded-lg text-[#a3b18a] hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium relative">
                        <LogOut size={18} />

                        {isCollapsed && !isMobileOpen && (
                            <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                                Cerrar Sesión
                            </span>
                        )}
                        {(!isCollapsed || isMobileOpen) && <span className="ml-3">Cerrar Sesión</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#081c15]/20 via-[#05120d] to-[#0a1f18]">
                {/* Gamified Header */}
                <header className="h-16 md:h-20 border-b border-[#1b3c2e]/50 bg-[#0a1f18]/80 backdrop-blur-xl flex items-center justify-between px-4 sm:px-6 md:px-8 relative z-10 header transition-all duration-300">

                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Hamburger Button (Mobile Only) */}
                        <button
                            onClick={() => setIsMobileOpen(true)}
                            className="md:hidden p-2 -ml-2 text-emerald-400 hover:bg-white/5 rounded-lg transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        </button>

                        {/* User Info - Responsive Layout */}
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#05120d] relative flex items-center justify-center border border-white/10 z-10">
                                    <span className="font-bold bg-gradient-to-br from-white to-emerald-200 bg-clip-text text-transparent text-xs md:text-sm">AS</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="font-bold text-white leading-none text-sm md:text-base group-hover:text-emerald-300 transition-colors">Angela Silva</div>
                                <div className="text-[10px] md:text-xs text-[#a3b18a] md:mt-1 hidden sm:block font-medium">3er Año A</div>
                            </div>
                        </div>
                    </div>

                    {/* Gamification Stats - Right Side Balanced */}
                    <div className="flex items-center gap-3 md:gap-6">

                        {/* Streak - Improved Fire Gradient */}
                        <div className="flex items-center gap-1.5 md:gap-3 group cursor-help p-1.5 rounded-xl hover:bg-orange-500/5 transition-all duration-300 border border-transparent hover:border-orange-500/20" title="Racha de estudio: 5 días">
                            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-sm group-hover:bg-orange-500/30 transition-all"></div>
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400/10 to-red-500/10 flex items-center justify-center border border-orange-500/20 relative z-10">
                                    <Flame size={18} className="text-orange-500 fill-orange-500 drop-shadow-[0_2px_4px_rgba(249,115,22,0.4)] animate-pulse-slow" />
                                </div>
                            </div>

                            <div className="flex flex-col items-start md:items-center">
                                <span className="text-sm md:text-xl font-black bg-gradient-to-br from-orange-400 to-red-500 bg-clip-text text-transparent leading-none filter drop-shadow-sm">5</span>
                                <span className="text-[9px] md:text-[10px] font-bold text-orange-400 uppercase tracking-wider hidden md:block">Racha</span>
                            </div>
                        </div>

                        {/* XP / Level - Improved Electric Gradient */}
                        <div className="flex items-center gap-2 md:gap-4 pl-3 md:pl-6 border-l border-white/5">
                            <div className="text-right">
                                <div className="text-[9px] md:text-xs font-bold text-cyan-400 uppercase tracking-wider mb-0.5">Nivel 8</div>
                                <div className="text-xs md:text-sm font-bold text-white/90">3.4k XP</div>
                            </div>

                            <div className="w-9 h-9 md:w-12 md:h-12 relative flex items-center justify-center shrink-0 group">
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"></div>

                                <svg className="w-full h-full transform -rotate-90 relative z-10 drop-shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                                    <circle cx="50%" cy="50%" r="42%" stroke="#0f3026" strokeWidth="4" fill="transparent" />
                                    <circle cx="50%" cy="50%" r="42%" stroke="url(#gradient-xp)" strokeWidth="4" fill="transparent" strokeDasharray="125.6" strokeDashoffset="35" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="gradient-xp" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#22d3ee" />
                                            <stop offset="100%" stopColor="#3b82f6" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Star size={14} className="text-cyan-300 fill-cyan-300 md:hidden drop-shadow-md" />
                                    <Star size={18} className="text-cyan-300 fill-cyan-300 hidden md:block drop-shadow-md group-hover:scale-110 transition-transform" />
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                <main className="flex-1 overflow-y-auto relative p-8">
                    {/* Decorative Blobs */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4a7c59]/10 opacity-40 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1b3c2e]/10 opacity-30 blur-[100px] rounded-full pointer-events-none" />

                    <div className="max-w-6xl mx-auto relative z-10">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}