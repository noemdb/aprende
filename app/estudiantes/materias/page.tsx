'use client';

import FadeIn from '../../components/FadeIn';
import { BookOpen, Star, MoreHorizontal, ArrowRight } from 'lucide-react';

export default function MateriasPage() {
    const subjects = [
        { id: 1, name: 'Matemáticas', progress: 65, level: 4, badges: 3, color: 'emerald', totalBadges: 12 },
        { id: 2, name: 'Física', progress: 30, level: 2, badges: 1, color: 'cyan', totalBadges: 12 },
        { id: 3, name: 'Química', progress: 12, level: 1, badges: 0, color: 'purple', totalBadges: 12 },
        { id: 4, name: 'Biología', progress: 45, level: 3, badges: 2, color: 'rose', totalBadges: 12 },
        { id: 5, name: 'Inglés', progress: 80, level: 5, badges: 5, color: 'blue', totalBadges: 12 },
    ];

    return (
        <div className="space-y-8">
            <FadeIn>
                <h1 className="text-3xl font-bold text-white mb-2">Mis Cursos</h1>
                <p className="text-slate-400">Progreso y logros por asignatura.</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject, i) => (
                    <FadeIn key={subject.id} delay={i * 0.1}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/40 transition-all group flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-2xl bg-${subject.color}-500/20 flex items-center justify-center text-${subject.color}-400 border border-${subject.color}-500/20`}>
                                    <BookOpen size={24} />
                                </div>
                                <button className="text-slate-500 hover:text-white transition-colors">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1">{subject.name}</h3>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-6">
                                <Star size={12} className="text-yellow-500 fill-yellow-500" />
                                Nivel {subject.level}
                            </div>

                            <div className="space-y-4 mb-6 flex-1">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs text-slate-400 font-bold">
                                        <span>Dominio del Curso</span>
                                        <span className="text-white">{subject.progress}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full bg-${subject.color}-500 shadow-[0_0_10px_rgba(var(--${subject.color}-500),0.5)]`}
                                            style={{ width: `${subject.progress}%` }}
                                        />
                                    </div>
                                </div>

                                <div className="bg-slate-800/50 rounded-xl p-3 flex items-center justify-between">
                                    <span className="text-xs text-slate-400 font-medium">Insignias</span>
                                    <div className="flex items-center gap-1.5">
                                        <span className={`text-sm font-bold text-${subject.color}-400`}>{subject.badges}</span>
                                        <span className="text-xs text-slate-600">/ {subject.totalBadges}</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white text-sm font-bold transition-all flex items-center justify-center gap-2">
                                Ir al Curso
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
