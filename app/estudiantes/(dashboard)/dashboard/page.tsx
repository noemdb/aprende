'use client';

import FadeIn from '../../../components/FadeIn';
import { Target, ArrowRight, Play, Trophy, BookOpen, Brain, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
    return (
        <div className="space-y-12 pb-12">
            {/* Welcome & Daily Goal */}
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-10">
                    <FadeIn delay={0.1}>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                                ¡Hola, <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent drop-shadow-sm">Angela</span>!
                            </h1>
                            <p className="text-slate-400 text-lg font-medium">¿Lista para subir de nivel hoy?</p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="relative group p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-[#1b3c2e] to-[#0a1f18] z-0" />
                            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-emerald-500/15 transition-colors duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-10">
                                <div className="flex-1">
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-black text-emerald-400 mb-6 border border-emerald-500/20 uppercase tracking-widest leading-none">
                                        <Target size={12} className="fill-emerald-500/20" />
                                        Objetivo Diario
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Resuelve 5 problemas de Biología</h2>
                                    <p className="text-slate-300 text-sm md:text-base mb-8 max-w-md leading-relaxed">
                                        Completa este desafío para ganar <span className="text-emerald-400 font-bold">+50 XP</span> y proteger tu racha.
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex justify-between items-end mb-1">
                                            <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Progreso actual</span>
                                            <span className="text-sm font-black text-white">40%</span>
                                        </div>
                                        <div className="w-full bg-black/40 h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                                            <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full w-2/5 shadow-[0_0_15px_rgba(52,211,153,0.5)] transition-all duration-1000 ease-out" />
                                        </div>
                                        <div className="text-xs font-bold text-emerald-500/60 flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            2/5 Completados
                                        </div>
                                    </div>
                                </div>

                                <button className="relative group/btn bg-white text-[#081c15] font-black py-4 px-10 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 overflow-hidden text-sm uppercase tracking-wider">
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-emerald-400/0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                                    <Play size={18} className="fill-[#081c15] relative z-10" />
                                    <span className="relative z-10">¡Empezar Ya!</span>
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Quick Stats / Leaderboard Preview */}
                <div className="lg:col-span-1">
                    <FadeIn delay={0.3} className="h-full">
                        <div className="bg-[#0a1f18]/60 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 h-full flex flex-col shadow-2xl">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-bold text-white flex items-center gap-3 text-lg">
                                    <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20 shadow-lg shadow-yellow-500/5">
                                        <Trophy size={20} className="text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                                    </div>
                                    Ranking
                                </h3>
                                <Link href="/estudiantes/practica" className="text-xs font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-400/5 px-2 py-1 rounded-md transition-colors">Ver Liga</Link>
                            </div>

                            <div className="space-y-4 flex-1">
                                {[
                                    { name: 'Miguel R.', xp: '4,200', rank: 1, avatar: 'MR', color: 'yellow' },
                                    { name: 'Angela Silva', xp: '3,450', rank: 2, avatar: 'AS', isMe: true, color: 'emerald' },
                                    { name: 'Sofia T.', xp: '3,100', rank: 3, avatar: 'ST', color: 'orange' },
                                ].map((student, i) => (
                                    <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-all border ${student.isMe ? 'bg-emerald-500/10 border-emerald-500/30 scale-105 shadow-xl shadow-emerald-500/5 relative z-10' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
                                        <div className={`w-8 h-8 flex items-center justify-center font-black rounded-lg text-xs ${i === 0 ? 'bg-yellow-500 text-yellow-950 shadow-lg shadow-yellow-500/20' : i === 1 ? 'bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/20' : 'bg-orange-600 text-orange-950 shadow-lg shadow-orange-600/20'}`}>
                                            {student.rank}
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-white border border-white/10 shrink-0">
                                            {student.avatar}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className={`font-bold text-sm truncate ${student.isMe ? 'text-white' : 'text-slate-300'}`}>
                                                {student.name} {student.isMe && '(Tú)'}
                                            </div>
                                            <div className={`text-xs font-black uppercase tracking-widest ${student.isMe ? 'text-emerald-400' : 'text-slate-500'}`}>{student.xp} XP</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Resume Learning */}
            <div className="space-y-6">
                <FadeIn delay={0.4}>
                    <div className="flex items-center gap-3">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        <h3 className="text-2xl font-black text-white tracking-tight">Continuar Aprendiendo</h3>
                    </div>
                </FadeIn>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Ecuaciones 2do Grado', course: 'Matemáticas', progress: 65, color: '#10b981', icon: Brain },
                        { title: 'Leyes de Newton', course: 'Física', progress: 30, color: '#06b6d4', icon: Zap },
                        { title: 'Tabla Periódica', course: 'Química', progress: 12, color: '#8b5cf6', icon: BookOpen },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={0.5 + i * 0.1}>
                            <button className="w-full text-left bg-white/5 border border-white/5 p-6 rounded-[2rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: item.color }} />

                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 shadow-xl transition-all group-hover:scale-110" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                                    <item.icon size={28} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50" style={{ color: item.color }}>{item.course}</p>
                                    <h4 className="font-bold text-white text-lg mb-6 group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h4>
                                </div>

                                <div className="space-y-2.5">
                                    <div className="flex justify-between items-end">
                                        <span className="text-[10px] text-slate-500 font-black uppercase tracking-tighter">Completado</span>
                                        <span className="text-xs font-black text-white">{item.progress}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px]">
                                        <div className="h-full rounded-full transition-all duration-1000 shadow-lg" style={{ width: `${item.progress}%`, backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}60` }} />
                                    </div>
                                </div>
                            </button>
                        </FadeIn>
                    ))}

                    <FadeIn delay={0.8}>
                        <button className="w-full h-full bg-emerald-500/5 border-2 border-dashed border-emerald-500/20 rounded-[2rem] flex flex-col items-center justify-center gap-4 text-emerald-500/60 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/10 transition-all p-8 group">
                            <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:scale-110 transition-transform">
                                <ArrowRight size={28} />
                            </div>
                            <span className="font-black text-sm uppercase tracking-widest">Explorar Cursos</span>
                        </button>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}