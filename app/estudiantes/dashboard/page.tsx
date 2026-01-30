'use client';

import FadeIn from '../../components/FadeIn';
import { Target, ArrowRight, Play, Trophy, BookOpen, Brain, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
    return (
        <div className="space-y-10">
            {/* Welcome & Daily Goal */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <FadeIn delay={0.1}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl font-black text-white tracking-tight">¡Hola, Angela!</h1>
                            <p className="text-[#a3b18a] text-lg">¿Lista para aprender algo nuevo hoy?</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="bg-gradient-to-r from-[#4a7c59] to-[#1b3c2e] rounded-3xl p-8 relative overflow-hidden shadow-2xl shadow-[#081c15]/50 group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white mb-4 border border-white/20">
                                        <Target size={14} />
                                        Objetivo Diario
                                    </div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Resuelve 5 problemas de Biología</h2>
                                    <p className="text-[#cbeac5] text-sm mb-6 max-w-md">Gana +50 XP y mantén tu racha de aprendizaje activa.</p>

                                    <div className="w-full bg-[#0a1f18] h-3 rounded-full overflow-hidden mb-2">
                                        <div className="h-full bg-white rounded-full w-2/5 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                                    </div>
                                    <div className="text-xs font-bold text-[#a3b18a]">2/5 Completados</div>
                                </div>

                                <button className="bg-white text-[#081c15] font-bold py-3 px-8 rounded-xl shadow-xl hover:scale-105 transition-transform flex items-center gap-2 whitespace-nowrap">
                                    <Play size={20} className="fill-[#081c15]" />
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Quick Stats / Leaderboard Preview */}
                <div className="lg:col-span-1">
                    <FadeIn delay={0.3} className="h-full">
                        <div className="bg-[#0a1f18]/40 backdrop-blur-md border border-[#1b3c2e]/50 rounded-3xl p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-white flex items-center gap-2">
                                    <Trophy size={18} className="text-yellow-400" />
                                    Top 3 - 3er Año A
                                </h3>
                                <Link href="/estudiantes/practica" className="text-xs font-bold text-[#a3b18a] hover:text-[#cbeac5]">Ver Todo</Link>
                            </div>

                            <div className="space-y-4 flex-1">
                                {[
                                    { name: 'Miguel R.', xp: '4,200', rank: 1, avatar: 'MR' },
                                    { name: 'Ana Silva', xp: '3,450', rank: 2, avatar: 'AS', isMe: true },
                                    { name: 'Sofia T.', xp: '3,100', rank: 3, avatar: 'ST' },
                                ].map((student, i) => (
                                    <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${student.isMe ? 'bg-[#4a7c59]/20 border-[#4a7c59]/50' : 'bg-[#152e25]/30 border-[#1b3c2e]/30'}`}>
                                        <div className={`w-8 h-8 flex items-center justify-center font-black rounded-lg ${i === 0 ? 'bg-yellow-500 text-yellow-900' : i === 1 ? 'bg-[#a3b18a] text-[#081c15]' : 'bg-orange-700 text-orange-200'}`}>
                                            {student.rank}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-[#152e25] flex items-center justify-center text-xs font-bold text-[#a3b18a] border border-[#1b3c2e]">
                                            {student.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className={`font-bold text-sm ${student.isMe ? 'text-[#cbeac5]' : 'text-[#a3b18a]'}`}>
                                                {student.name} {student.isMe && '(Tú)'}
                                            </div>
                                            <div className="text-xs font-mono text-emerald-400">{student.xp} XP</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Resume Learning */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="md:col-span-full">
                    <FadeIn delay={0.4}>
                        <div className="flex items-center gap-2 mb-4">
                            <Clock size={20} className="text-[#a3b18a]" />
                            <h3 className="text-xl font-bold text-white">Continuar Aprendiendo</h3>
                        </div>
                    </FadeIn>
                </div>

                {[
                    { title: 'Ecuaciones 2do Grado', course: 'Matemáticas', progress: 65, color: 'emerald', icon: Brain },
                    { title: 'Leyes de Newton', course: 'Física', progress: 30, color: 'cyan', icon: Zap },
                    { title: 'Tabla Periódica', course: 'Química', progress: 12, color: 'purple', icon: BookOpen },
                ].map((item, i) => (
                    <FadeIn key={i} delay={0.5 + i * 0.1}>
                        <button className="w-full text-left bg-[#0a1f18]/40 backdrop-blur-md border border-[#1b3c2e]/50 p-6 rounded-3xl hover:bg-[#152e25]/60 hover:-translate-y-1 transition-all group h-full flex flex-col">
                            <div className={`w-12 h-12 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 mb-4 border border-${item.color}-500/20 group-hover:scale-110 transition-transform`}>
                                <item.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-bold text-white mb-1 group-hover:text-[#cbeac5] transition-colors">{item.title}</h4>
                                <p className="text-xs text-[#a3b18a] font-bold uppercase tracking-wide mb-4">{item.course}</p>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                                    <span>Progreso</span>
                                    <span>{item.progress}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-[#152e25] rounded-full overflow-hidden">
                                    <div className={`h-full bg-${item.color}-500 rounded-full`} style={{ width: `${item.progress}%` }} />
                                </div>
                            </div>
                        </button>
                    </FadeIn>
                ))}

                <FadeIn delay={0.8}>
                    <button className="w-full h-full bg-[#0a1f18]/20 border-2 border-dashed border-[#1b3c2e] rounded-3xl flex flex-col items-center justify-center gap-3 text-[#a3b18a] hover:text-[#a3b18a] hover:border-[#a3b18a]/30 hover:bg-[#4a7c59]/5 transition-all p-6">
                        <div className="w-12 h-12 rounded-full bg-[#152e25] flex items-center justify-center">
                            <ArrowRight size={24} />
                        </div>
                        <span className="font-bold text-sm">Ver todos los cursos</span>
                    </button>
                </FadeIn>
            </div>
        </div>
    );
}