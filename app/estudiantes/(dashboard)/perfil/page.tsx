'use client';

import FadeIn from '../../../components/FadeIn';
import { User, Medal, Flame, Target, Calendar, Edit2, Share2 } from 'lucide-react';

export default function ProfilePage() {
    const badges = [
        { id: 1, name: 'Primer Paso', desc: 'Completaste tu primera práctica', icon: '🚀', earned: true },
        { id: 2, name: 'Matemático', desc: 'Nivel 5 en Matemáticas', icon: '📐', earned: true },
        { id: 3, name: 'Racha de Fuero', desc: '7 días seguidos', icon: '🔥', earned: false },
        { id: 4, name: 'Velocista', desc: 'Práctica en < 2 min', icon: '⚡', earned: true },
        { id: 5, name: 'Erudito', desc: 'Todas las materias Nivel 3+', icon: '🎓', earned: false },
        { id: 6, name: 'Social', desc: 'Invita a un amigo', icon: '🤝', earned: false },
    ];

    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <FadeIn>
                <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-md border border-indigo-500/20 rounded-3xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

                    <div className="relative">
                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-500">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-black text-white">
                                AS
                            </div>
                        </div>
                        <button className="absolute bottom-0 right-0 bg-slate-800 p-2 rounded-full border border-slate-700 text-slate-300 hover:text-white transition-colors">
                            <Edit2 size={16} />
                        </button>
                    </div>

                    <div className="text-center md:text-left flex-1">
                        <h1 className="text-3xl font-black text-white mb-2">Ana Silva</h1>
                        <p className="text-indigo-300 font-medium mb-4">Estudiante • 3er Año A</p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-3">
                                <div className="text-yellow-400"><Medal size={20} /></div>
                                <div className="text-left">
                                    <div className="text-xs text-slate-400 font-bold uppercase">Nivel Global</div>
                                    <div className="text-sm font-bold text-white">8</div>
                                </div>
                            </div>
                            <div className="bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-3">
                                <div className="text-emerald-400"><Target size={20} /></div>
                                <div className="text-left">
                                    <div className="text-xs text-slate-400 font-bold uppercase">Precisión</div>
                                    <div className="text-sm font-bold text-white">87%</div>
                                </div>
                            </div>
                            <div className="bg-slate-900/50 px-4 py-2 rounded-xl border border-slate-700/50 flex items-center gap-3">
                                <div className="text-orange-400"><Flame size={20} /></div>
                                <div className="text-left">
                                    <div className="text-xs text-slate-400 font-bold uppercase">Mejor Racha</div>
                                    <div className="text-sm font-bold text-white">12 Días</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <button className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors flex items-center gap-2 border border-white/10">
                            <Share2 size={18} />
                            Compartir Perfil
                        </button>
                    </div>
                </div>
            </FadeIn>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Badges */}
                <div className="lg:col-span-2">
                    <FadeIn delay={0.2} className="h-full">
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 h-full">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Medal size={20} className="text-yellow-500" />
                                Colección de Insignias
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {badges.map((badge) => (
                                    <div key={badge.id} className={`p-4 rounded-2xl border flex flex-col items-center text-center gap-3 transition-all ${badge.earned ? 'bg-indigo-900/20 border-indigo-500/30' : 'bg-slate-800/20 border-slate-800 opacity-50 grayscale'}`}>
                                        <div className="text-4xl filter drop-shadow-lg">{badge.icon}</div>
                                        <div>
                                            <div className={`font-bold text-sm ${badge.earned ? 'text-white' : 'text-slate-500'}`}>{badge.name}</div>
                                            <div className="text-[10px] text-slate-400 mt-1">{badge.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Activity Calendar Placeholder */}
                <div className="lg:col-span-1">
                    <FadeIn delay={0.3} className="h-full">
                        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-8 h-full flex flex-col">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <Calendar size={20} className="text-emerald-400" />
                                Actividad Reciente
                            </h2>

                            <div className="space-y-6 flex-1">
                                {[
                                    { day: 'Hoy', activity: 'Práctica de Matemáticas', time: '14:30', xp: '+45' },
                                    { day: 'Ayer', activity: 'Lectura de Física', time: '16:00', xp: '+20' },
                                    { day: 'Lun', activity: 'Práctica de Química', time: '15:15', xp: '+35' },
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 relative">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 rounded-full bg-indigo-500 border border-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                            {i !== 2 && <div className="w-0.5 flex-1 bg-slate-800 my-1" />}
                                        </div>
                                        <div className="pb-6">
                                            <div className="text-xs font-bold text-slate-500 uppercase mb-0.5">{item.day} • {item.time}</div>
                                            <div className="text-sm font-bold text-white mb-1">{item.activity}</div>
                                            <div className="inline-block px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                                                {item.xp} XP
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
