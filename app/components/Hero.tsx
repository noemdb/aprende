'use client';

import FadeIn from './FadeIn';
import { Flame, Trophy, Star, BookOpen, Home, User, Microscope, Atom, FlaskConical } from 'lucide-react';

export default function Hero() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-slate-950">
            {/* Background Blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/20 opacity-30 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/20 opacity-20 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <FadeIn delay={0.1}>
                            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-900/10 backdrop-blur-sm">
                                <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">
                                    App de Prácticas Inteligentes
                                </span>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                                EduQuest: <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                                    Tu Compañero de Estudio Gamificado
                                </span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light mb-12">
                                Prácticas adaptativas sincronizadas con <strong className="text-emerald-500 font-bold">SAEFL</strong>. Gana XP, desbloquea insignias y domina tus áreas de formación con un sistema que se adapta a tu ritmo de aprendizaje.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                                <button className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 h-14 px-8 text-lg hover:shadow-teal-500/20 hover:scale-105 active:scale-95">
                                    Comienza aquí
                                </button>

                                <button className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md h-14 px-8 text-lg hover:scale-105 active:scale-95 space-x-2 border border-white/10">
                                    <span>Ver Demo</span>
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.5} className="relative hidden lg:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl blur-2xl transform rotate-3 scale-95" />
                        <div className="relative glass-card rounded-2xl p-6 shadow-2xl border border-slate-700/50">
                            {/* Mobile Mockup representation */}
                            <div className="bg-[#0f172a] rounded-[2rem] border-4 border-slate-800 overflow-hidden shadow-2xl relative aspect-[9/19] w-[320px] mx-auto flex flex-col">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20" />

                                {/* App Content */}
                                <div className="flex-1 w-full bg-[#0f172a] p-5 pt-12 flex flex-col relative overflow-hidden">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <div className="text-[10px] text-slate-400 uppercase tracking-wider">Bienvenido</div>
                                            <div className="text-sm font-bold text-white flex items-center gap-1">
                                                Juan Pérez <Star size={12} className="text-yellow-400 fill-yellow-400" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700">
                                            <Trophy size={12} className="text-emerald-400" />
                                            <span className="text-xs font-bold text-white">Lvl 5</span>
                                        </div>
                                    </div>

                                    {/* XP Bar */}
                                    <div className="mb-6">
                                        <div className="flex justify-between text-[10px] text-slate-400 mb-1.5">
                                            <span>Progreso de Nivel</span>
                                            <span>1,250 / 1,500 XP</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full w-[85%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                        </div>
                                    </div>

                                    {/* Stats Row */}
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 flex flex-col items-center justify-center gap-1">
                                            <Flame size={20} className="text-orange-500 fill-orange-500/20" />
                                            <div className="text-lg font-bold text-white leading-none">5</div>
                                            <div className="text-[10px] text-slate-400">Racha (Días)</div>
                                        </div>
                                        <div className="bg-slate-800/40 rounded-xl p-3 border border-slate-700/50 flex flex-col items-center justify-center gap-1">
                                            <Trophy size={20} className="text-yellow-500 fill-yellow-500/20" />
                                            <div className="text-lg font-bold text-white leading-none">12</div>
                                            <div className="text-[10px] text-slate-400">Insignias</div>
                                        </div>
                                    </div>

                                    {/* Active Courses */}
                                    <div className="mb-2">
                                        <div className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Mis Aprendizajes</div>
                                        <div className="space-y-3">
                                            {/* Course Card 1 */}
                                            <div className="bg-slate-800/30 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                                                    <BookOpen size={18} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-white mb-0.5">Matemáticas</div>
                                                    <div className="w-full bg-slate-800 h-1 rounded-full">
                                                        <div className="bg-emerald-500 h-full rounded-full w-[60%]" />
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-emerald-400 font-bold">60%</div>
                                            </div>

                                            {/* Course Card 2 */}
                                            <div className="bg-slate-800/30 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
                                                    <Microscope size={24} />  {/* Placeholder/Icon fix if atom not available, using BookOpen fallback or something generic if Lucide version issues, but BookOpen was imported. I should import something else for variety. Let's use simple shapes or reuse icons. */}
                                                    {/* <div className="font-bold text-xs">CS</div> */}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-white mb-0.5">Biología</div>
                                                    <div className="w-full bg-slate-800 h-1 rounded-full">
                                                        <div className="bg-teal-500 h-full rounded-full w-[35%]" />
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-teal-400 font-bold">35%</div>
                                            </div>

                                            {/* Course Card 3 */}
                                            <div className="bg-slate-800/30 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                                                    <Atom size={24} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-white mb-0.5">Física</div>
                                                    <div className="w-full bg-slate-800 h-1 rounded-full">
                                                        <div className="bg-cyan-500 h-full rounded-full w-[75%]" />
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-cyan-400 font-bold">75%</div>
                                            </div>

                                            {/* Course Card 4 */}
                                            <div className="bg-slate-800/30 rounded-xl p-3 border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
                                                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                                                    <FlaskConical size={24} />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-xs font-bold text-white mb-0.5">Química</div>
                                                    <div className="w-full bg-slate-800 h-1 rounded-full">
                                                        <div className="bg-indigo-500 h-full rounded-full w-[45%]" />
                                                    </div>
                                                </div>
                                                <div className="text-[10px] text-indigo-400 font-bold">45%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Nav */}
                                <div className="h-14 bg-slate-900 border-t border-slate-800 flex items-center justify-around px-2 relative z-10">
                                    <div className="flex flex-col items-center gap-0.5 text-emerald-500">
                                        <Home size={20} />
                                        <span className="text-[8px] font-medium">Inicio</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5 text-slate-500">
                                        <BookOpen size={20} />
                                        <span className="text-[8px] font-medium">Cursos</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-0.5 text-slate-500">
                                        <User size={20} />
                                        <span className="text-[8px] font-medium">Perfil</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
