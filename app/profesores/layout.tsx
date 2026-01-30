'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, GraduationCap, FileBarChart, Settings, LogOut } from 'lucide-react';

export default function TeachersLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/profesores/dashboard', icon: LayoutDashboard },
        { name: 'Mis Secciones', href: '/profesores/secciones', icon: Users },
        { name: 'Alumnos', href: '/profesores/alumnos', icon: GraduationCap },
        { name: 'Reportes', href: '/profesores/reportes', icon: FileBarChart },
    ];

    return (
        <div className="flex h-screen bg-[#0f172a] text-slate-200 overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
                <div className="p-6 border-b border-slate-800">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <span className="text-emerald-500 font-bold text-xl">E</span>
                        </div>
                        <span className="font-bold text-xl text-white tracking-tight">EduQuest</span>
                    </Link>
                    <div className="mt-2 text-xs text-slate-500 uppercase tracking-wider font-semibold">Portal Docente</div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${isActive
                                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/5'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                                    }`}
                            >
                                <Icon size={20} className={isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'} />
                                <span className="font-medium text-sm">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-800/50 mb-3 border border-slate-700/50">
                        <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold border-2 border-slate-600">
                            JP
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-bold text-white truncate">Juan Pérez</div>
                            <div className="text-xs text-slate-400 truncate">Profesor</div>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-sm">
                        <LogOut size={18} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950 relative">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 opacity-50 blur-[100px] rounded-full pointer-events-none" />

                <div className="p-8 max-w-7xl mx-auto relative z-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
