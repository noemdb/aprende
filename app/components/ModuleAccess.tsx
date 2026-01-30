'use client';

import FadeIn from './FadeIn';
import Link from 'next/link';
import {
    School,
    GraduationCap,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';

const modules = [
    {
        title: "Profesores",
        icon: <School size={32} />,
        desc: "Administración académica y curricular.",
        role: "docente",
        color: "emerald",
        gradient: "from-emerald-500 to-green-400"
    },
    {
        title: "Estudiantes",
        icon: <GraduationCap size={32} />,
        desc: "Aula virtual y progreso académico.",
        role: "estudiante",
        color: "teal",
        gradient: "from-teal-500 to-cyan-400"
    },
    {
        title: "Administrador",
        icon: <ShieldCheck size={32} />,
        desc: "Configuración global del sistema.",
        role: "admin",
        color: "slate",
        gradient: "from-slate-500 to-gray-400"
    }
];

export default function ModuleAccess() {
    return (
        <section id="modulos" className="py-24 relative overflow-hidden bg-slate-950">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-screen"
                style={{ backgroundImage: "url('/assets/modules-bg.png')" }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0f172a] via-transparent to-[#0f172a]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Acceso Modular</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Ingresa directamente al módulo correspondiente a tu rol en la institución.
                        </p>
                    </div>
                </FadeIn>

                <div className="flex flex-wrap justify-center gap-6">
                    {modules.map((mod, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <Link
                                href={mod.role === 'director' ? '/directivos/dashboard' : mod.role === 'admin' ? '/admin/dashboard' : mod.role === 'docente' ? '/profesores/dashboard' : mod.role === 'representante' ? '/representantes/dashboard' : mod.role === 'estudiante' ? '/estudiantes/dashboard' : '/login'}
                                className="group relative w-full sm:w-64 h-80 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col items-center justify-between p-8 text-center"
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${mod.gradient} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    {mod.icon}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                                        {mod.desc}
                                    </p>
                                </div>

                                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-${mod.color}-600 transition-all duration-300`}>
                                    <ArrowRight size={18} />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
