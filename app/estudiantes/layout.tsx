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
    
    // Detectar tamaño de pantalla y colapsar automáticamente en móviles
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsCollapsed(true);
            } else {
                setIsCollapsed(false);
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
            {/* Sidebar colapsable */}
            <aside 
                className={`${
                    isCollapsed 
                        ? 'w-12'  // Colapsado: 48px (w-12)
                        : 'w-64'  // Expandido: 256px
                } sidebar bg-[#0a1f18] border-r border-[#1b3c2e] flex flex-col z-20 transition-all duration-300`}
            >
                <div className={`p-3 border-b border-[#1b3c2e] flex justify-between ${
                    isCollapsed ? 'flex-col gap-1' : ''
                }`}>
                    {!isCollapsed && (
                        <>
                            <Link href="/" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a7c59] to-[#1b3c2e] flex items-center justify-center border border-[#2e5c4a]">
                                    <span className="text-white font-bold text-xl">ES</span>
                                </div>
                                <span className="font-bold text-xl text-white tracking-tight items-center">Kainos Academy</span>
                            </Link>
                            <div className="mt-1 text-xs text-[#a3b18a] uppercase tracking-wider font-bold ml-5">Módulo Estudiante</div>
                        </>
                    )}
                    {isCollapsed && (
                        <Link href="/" className="flex flex-col items-center gap-1 pt-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#4a7c59] to-[#1b3c2e] flex items-center justify-center border border-[#2e5c4a]">
                                <span className="text-white font-bold text-lg">E</span>
                            </div>
                        </Link>
                    )}
                    
                    {/* Botón para expandir/colapsar */}
                    <button 
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-[#a3b18a] hover:text-[#f0f8ef] p-1 rounded-lg hover:bg-[#152e25] transition-colors self-end"
                    >
                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                    </button>
                </div>

                <nav className="flex-1 p-2 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center ${
                                    isCollapsed ? 'p-1 mb-2' : 'gap-3 px-3 py-3'
                                } rounded-xl transition-all duration-200 group nav-item relative ${
                                    isActive
                                        ? 'active bg-[#2e5c4a]/10 text-[#cbeac5] border border-[#a3b18a]/20 shadow-lg shadow-[#a3b18a]/5'
                                        : 'hover:text-[#f0f8ef] hover:bg-[#152e25]/50'
                                }`}
                            >
                                <Icon 
                                    size={22} 
                                    className={isActive ? 'text-[#cbeac5]' : 'text-[#2e5c4a] group-hover:text-[#a3b18a]'} 
                                />
                                
                                {/* Tooltip para modo colapsado */}
                                {isCollapsed && (
                                    <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                                        {item.name}
                                    </span>
                                )}
                                
                                {!isCollapsed && (
                                    <span className="font-bold text-sm tracking-wide">{item.name}</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-2 border-t border-[#1b3c2e]">
                    <button className="flex items-center justify-center w-full p-3 rounded-lg text-[#a3b18a] hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm font-medium relative">
                        <LogOut size={18} />
                        
                        {/* Tooltip para modo colapsado del logout */}
                        {isCollapsed && (
                            <span className="absolute left-full ml-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-50">
                                Cerrar Sesión
                            </span>
                        )}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#081c15]/20 via-[#05120d] to-[#0a1f18]">
                {/* Gamified Header */}
                <header className="h-20 border-b border-[#1b3c2e]/50 bg-[#0a1f18]/50 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 relative z-10 header">
                    {/* User Info */}
                    <div className="sm:flex items-center gap-1 sm:gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#4a7c59] to-[#1b3c2e] p-0.5">
                            <div className="w-full h-full rounded-full bg-[#05120d] flex items-center justify-center">
                                <span className="font-bold text-white text-sm">AS</span>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-white leading-none">Angela Silva</div>
                            <div className="text-xs text-[#a3b18a] mt-1">3er Año A</div>
                        </div>
                    </div>

                    {/* Gamification Stats */}
                    <div className="flex items-center gap-6">

                        {/* Streak */}
                        <div className="flex items-center gap-2 group cursor-help" title="Racha de estudio: 5 días">
                            <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#e9c46a]/20 text-[#e9c46a] flex items-center justify-center border border-[#e9c46a]/30 group-hover:scale-110 transition-transform streak">
                                <Flame size={18} className="fill-[#e9c46a]" />
                            </div>
                            <div className="flex flex-col items-center ">
                                <span className="text-lg font-black text-white leading-none">5</span>
                                <span className="text-[10px] font-bold text-[#e9c46a] uppercase">Racha</span>
                            </div>
                        </div>                        

                        {/* XP / Level */}
                        <div className="flex items-center gap-3 mr-4">
                            <div className="text-right">
                                <div className="text-xs font-bold text-[#4cc9f0] uppercase">Nivel 8</div>
                                <div className="text-sm font-bold text-white">3,450 XP</div>
                            </div>
                            <div className="hidden sm:flex w-12 h-12 relative flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90 xp-bar">
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-[#152e25]" />
                                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-[#4cc9f0]" strokeDasharray="125.6" strokeDashoffset="35" strokeLinecap="round" />
                                </svg>
                                <Star size={16} className="text-yellow-400 fill-yellow-400 absolute" />
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