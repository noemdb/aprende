'use client';

import FadeIn from '../../components/FadeIn';
import { Users, BookOpen, Clock, ArrowRight, TrendingUp } from 'lucide-react';

export default function SeccionesPage() {
    const sections = [
        { id: 1, name: '3er Año A', subject: 'Matemáticas', students: 32, avgGrade: 16.5, engagement: 88, nextTopic: 'Ecuaciones Cuadráticas' },
        { id: 2, name: '4to Año B', subject: 'Física', students: 28, avgGrade: 15.2, engagement: 75, nextTopic: 'Movimiento Circular' },
        { id: 3, name: '2do Año A', subject: 'Matemáticas', students: 30, avgGrade: 14.8, engagement: 82, nextTopic: 'Polinomios' },
        { id: 4, name: '5to Año C', subject: 'Física', students: 25, avgGrade: 17.1, engagement: 92, nextTopic: 'Circuitos Eléctricos' },
        { id: 5, name: '3er Año B', subject: 'Matemáticas', students: 31, avgGrade: 13.5, engagement: 65, nextTopic: 'Factorización' },
    ];

    return (
        <div className="space-y-8">
            <FadeIn>
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Mis Secciones</h1>
                        <p className="text-slate-400">Gestina tus grupos y monitorea el progreso por aula.</p>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-emerald-900/20 text-sm flex items-center gap-2">
                        <BookOpen size={18} />
                        Nueva Asignación
                    </button>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sections.map((section, i) => (
                    <FadeIn key={section.id} delay={i * 0.1}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 hover:bg-slate-800/40 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{section.name}</h3>
                                    <div className="text-sm text-slate-400 font-medium">{section.subject}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 border border-slate-700">
                                    <Users size={18} />
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Estudiantes</span>
                                    <span className="text-white font-bold">{section.students}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-400">Promedio General</span>
                                    <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-lg border border-emerald-500/20">
                                        {section.avgGrade} pts
                                    </span>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex justify-between text-xs text-slate-500">
                                        <span>Engagement</span>
                                        <span>{section.engagement}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all duration-500 ${section.engagement > 80 ? 'bg-emerald-500' : section.engagement > 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                            style={{ width: `${section.engagement}%` }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                                    <Clock size={14} className="text-emerald-500" />
                                    <span>Próx: <strong className="text-slate-300">{section.nextTopic}</strong></span>
                                </div>
                                <button className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 group-hover:bg-emerald-600/10 group-hover:text-emerald-400 group-hover:border group-hover:border-emerald-500/20">
                                    Ver Detalle
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
