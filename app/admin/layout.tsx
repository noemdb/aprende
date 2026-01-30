'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, Settings, Shield, LogOut, Terminal } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Usuarios', href: '/admin/usuarios', icon: Users },
        { name: 'Auditoría', href: '/admin/auditoria', icon: FileText },
        { name: 'Configuración', href: '/admin/configuracion', icon: Settings },
    ];

    return (
        <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col z-20 shadow-2xl shadow-black/50">
                <div className="p-6 border-b border-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/50">
                        <Terminal size={18} />
                    </div>
                    <div>
                        <Link href="/" className="flex items-center gap-2">
                        <div className="font-bold text-lg text-white tracking-tight leading-none">Kainos Academy</div>
                        </Link>
                        <div className="text-[10px] text-blue-400 font-mono mt-1 tracking-widest uppercase">Admin Console</div>
                    </div>
                </div>

                <div className="p-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                        <span className="text-xs font-mono text-emerald-400">System Healthy</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1">
                    <div className="px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider">Módulos</div>
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-3 px-3 py-2 rounded border transition-all duration-200 group ${isActive
                                        ? 'bg-blue-600/10 text-blue-400 border-blue-500/30'
                                        : 'text-slate-400 hover:text-white hover:bg-slate-800 border-transparent'
                                    }`}
                            >
                                <Icon size={18} className={isActive ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'} />
                                <span className="font-medium text-sm">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-3 py-3 rounded bg-slate-800/30 mb-3 border border-slate-700/30">
                        <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center text-white">
                            <Shield size={16} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-white truncate">Admin User</div>
                            <div className="text-[10px] text-slate-500 truncate">Root Access</div>
                        </div>
                    </div>

                    <button className="flex items-center gap-3 w-full px-3 py-2 rounded text-slate-400 hover:text-red-400 hover:bg-red-900/10 transition-colors text-xs font-bold uppercase tracking-wide">
                        <LogOut size={16} />
                        <span>Salir</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto bg-slate-950 relative">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                <div className="p-8 max-w-[1600px] mx-auto relative z-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
