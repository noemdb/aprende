'use client';

import FadeIn from '../../components/FadeIn';
import { AlertTriangle, TrendingUp, TrendingDown, Users, Activity, BarChart2, Star, ArrowUpRight } from 'lucide-react';

export default function TeachersDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex justify-between items-end">
                <FadeIn delay={0.1}>
                    <h1 className="text-3xl font-bold text-white mb-2">Panel de Control</h1>
                    <p className="text-slate-400">Resumen de rendimiento y engagement de tus secciones.</p>
                </FadeIn>
                <div className="text-right hidden md:block">
                    <div className="text-xs font-bold text-emerald-500 uppercase tracking-wider mb-1">Lapso Académico</div>
                    <div className="text-slate-200 font-medium">2er Lapso 2025-2026</div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Estudiantes Activos', value: '142', change: '+12%', icon: Users, color: 'emerald' },
                    { label: 'Promedio XP', value: '2,450', change: '+5%', icon: Star, color: 'yellow' },
                    { label: 'Engagement Semanal', value: '85%', change: '-2%', icon: Activity, color: 'indigo' },
                    { label: 'Prácticas Completadas', value: '1,280', change: '+18%', icon: BarChart2, color: 'teal' },
                ].map((stat, i) => (
                    <FadeIn key={i} delay={0.1 + i * 0.05}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/40 transition-colors group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-2.5 rounded-lg bg-${stat.color}-500/10 text-${stat.color}-400 border border-${stat.color}-500/20`}>
                                    <stat.icon size={20} />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'} bg-slate-800/50 px-2 py-1 rounded-full`}>
                                    {stat.change}
                                    {stat.change.startsWith('+') ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">{stat.value}</div>
                            <div className="text-xs text-slate-400 font-medium uppercase tracking-wide">{stat.label}</div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Academic Risk / Low Engagement */}
                <div className="lg:col-span-2 space-y-8">
                    <FadeIn delay={0.3}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <AlertTriangle size={20} className="text-red-400" />
                                        Riesgo Académico Detectado
                                    </h3>
                                    <p className="text-sm text-slate-400">Estudiantes con bajo engagement en los últimos 7 días (&lt; 3 sesiones).</p>
                                </div>
                                <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 px-3 py-1.5 rounded-lg transition-colors border border-emerald-500/20">
                                    Ver Todos
                                </button>
                            </div>

                            <div className="space-y-3">
                                {[
                                    { name: 'Carlos Díaz', section: '3er Año A', days: 12, activity: 15, avatar: 'CD' },
                                    { name: 'Ana Silva', section: '2do Año B', days: 8, activity: 22, avatar: 'AS' },
                                    { name: 'Luis Mendez', section: '4to Año A', days: 7, activity: 28, avatar: 'LM' },
                                ].map((student, i) => (
                                    <div key={i} className="bg-slate-800/30 rounded-xl p-4 flex items-center justify-between border border-slate-700/30 hover:border-red-500/30 transition-colors group">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold text-slate-300 border-2 border-slate-600">
                                                {student.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-white">{student.name}</div>
                                                <div className="text-xs text-slate-400">{student.section}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-8">
                                            <div className="text-right">
                                                <div className="text-xs text-slate-500 font-medium uppercase">Sin actividad</div>
                                                <div className="text-sm font-bold text-red-400">{student.days} días</div>
                                            </div>
                                            <div className="w-24">
                                                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                                    <span>Engagement</span>
                                                    <span>{student.activity}%</span>
                                                </div>
                                                <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                                                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${student.activity}%` }} />
                                                </div>
                                            </div>
                                            <button className="hidden group-hover:flex items-center justify-center w-8 h-8 rounded-lg bg-slate-700/50 text-slate-300 hover:text-white hover:bg-slate-600 transition-colors">
                                                <ArrowUpRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Activity size={20} className="text-emerald-400" />
                                Correlación: XP vs Calificaciones
                            </h3>

                            {/* Chart Placeholder / Simplification */}
                            <div className="h-64 w-full bg-slate-800/30 rounded-xl border border-slate-700/30 relative flex items-end justify-between p-6 overflow-hidden">
                                {/* Grid Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-10 pointer-events-none">
                                    <div className="border-t border-slate-400 w-full" />
                                    <div className="border-t border-slate-400 w-full" />
                                    <div className="border-t border-slate-400 w-full" />
                                    <div className="border-t border-slate-400 w-full" />
                                    <div className="border-t border-slate-400 w-full" />
                                </div>

                                {/* Bars - Visualizing Correlation */}
                                {[40, 55, 60, 45, 70, 85, 90, 75, 65, 80, 95, 88].map((h, i) => (
                                    <div key={i} className="w-4 bg-emerald-500/20 rounded-t-sm relative group hover:bg-emerald-500 transition-all duration-300" style={{ height: `${h}%` }}>
                                        <div className="absolute bottom-0 w-full bg-emerald-500/40" style={{ height: `${h * 0.7}%` }}></div>
                                        {/* Tooltip */}
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 border border-slate-700 font-bold shadow-xl">
                                            Est. #{i + 1}
                                        </div>
                                    </div>
                                ))}
                                <div className="absolute bottom-2 right-4 flex items-center gap-4 text-[10px] text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-700">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> XP Acumulado
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500/40"></div> Promedio Notas
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                                Existe una <strong className="text-white">correlación positiva fuerte</strong> (p &gt; 0.05) entre el uso de la aplicación y el rendimiento académico en evaluaciones formales.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column: Topic Analysis */}
                <div className="lg:col-span-1">
                    <FadeIn delay={0.5} className="h-full">
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 h-full flex flex-col">
                            <h3 className="text-lg font-bold text-white mb-6">Análisis de Temas</h3>
                            <p className="text-xs text-slate-400 mb-6 uppercase tracking-wider font-bold">Mayor Tasa de Error</p>

                            <div className="space-y-6 flex-1">
                                {[
                                    { topic: 'Ecuaciones 2do Grado', course: 'Matemáticas', error: 68 },
                                    { topic: 'Estequiometría', course: 'Química', error: 62 },
                                    { topic: 'Leyes de Newton', course: 'Física', error: 55 },
                                    { topic: 'Funciones Vectoriales', course: 'Matemáticas', error: 48 },
                                    { topic: 'Célula Eucariota', course: 'Biología', error: 42 },
                                ].map((item, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between items-end mb-2">
                                            <div>
                                                <div className="text-sm font-bold text-slate-200 group-hover:text-emerald-400 transition-colors">{item.topic}</div>
                                                <div className="text-xs text-slate-500">{item.course}</div>
                                            </div>
                                            <div className="text-sm font-bold text-red-400">{item.error}% err</div>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full transition-all duration-500 ${item.error > 60 ? 'bg-red-500' : item.error > 45 ? 'bg-orange-500' : 'bg-yellow-500'}`}
                                                style={{ width: `${item.error}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                <div className="text-xs font-bold text-slate-300 mb-2 flex items-center gap-2">
                                    <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                    Recomendación Pedagógica
                                </div>
                                <p className="text-xs text-slate-400 leading-relaxed">
                                    Se recomienda reforzar <strong>Factorización</strong> en 3er año antes de avanzar con funciones cuadráticas.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
