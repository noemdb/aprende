'use client';

import FadeIn from '../../../components/FadeIn';
import { Zap, Brain, Crosshair, Sparkles, Clock, Lock } from 'lucide-react';

export default function PracticePage() {
    return (
        <div className="space-y-10">
            <FadeIn>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-black text-white mb-2 tracking-tight">Zona de Práctica</h1>
                    <p className="text-slate-400 text-lg">Elige un modo de entrenamiento para ganar XP y subir de nivel.</p>
                </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6">
                {[
                    {
                        title: 'Refuerzo Rápido',
                        desc: '3 ejercicios de temas que necesitas mejorar.',
                        time: '5 min',
                        xp: '+20 XP',
                        icon: Zap,
                        color: 'yellow',
                        bg: 'from-orange-500/20 to-yellow-500/20'
                    },
                    {
                        title: 'Dominio Profundo',
                        desc: '10 ejercicios con explicaciones detalladas.',
                        time: '15 min',
                        xp: '+100 XP',
                        icon: Brain,
                        color: 'indigo',
                        bg: 'from-blue-600/20 to-indigo-600/20'
                    },
                    {
                        title: 'Repaso de Lapso',
                        desc: 'Mezcla de todos los temas vistos.',
                        time: '20 min',
                        xp: 'XP Doble',
                        icon: Crosshair,
                        color: 'emerald',
                        bg: 'from-emerald-600/20 to-teal-600/20'
                    }
                ].map((mode, i) => (
                    <FadeIn key={i} delay={0.2 + i * 0.1}>
                        <button className={`w-full text-left relative overflow-hidden rounded-3xl p-8 border border-white/5 hover:scale-105 hover:border-white/10 transition-all duration-300 group h-full flex flex-col bg-gradient-to-br ${mode.bg}`}>
                            <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm -z-10" />

                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-14 h-14 rounded-2xl bg-${mode.color}-500/20 flex items-center justify-center text-${mode.color}-400 border border-${mode.color}-500/30 shadow-lg shadow-${mode.color}-900/20`}>
                                    <mode.icon size={28} />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white flex items-center gap-1.5">
                                    <Sparkles size={12} className="text-yellow-400" />
                                    {mode.xp}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2">{mode.title}</h3>
                            <p className="text-sm text-slate-400 mb-6 flex-1 leading-relaxed">{mode.desc}</p>

                            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
                                <Clock size={14} />
                                {mode.time}
                            </div>
                        </button>
                    </FadeIn>
                ))}
            </div>

            <div className="pt-8 border-t border-slate-800">
                <FadeIn delay={0.5}>
                    <h3 className="text-xl font-bold text-white mb-6">Desafíos Especiales</h3>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6">
                    <FadeIn delay={0.6}>
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-not-allowed">
                            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                                <Lock size={24} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white mb-1">Desafío Semanal</h4>
                                <p className="text-sm text-slate-400">Disponible el Viernes. ¡Compite por el Top 3!</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
