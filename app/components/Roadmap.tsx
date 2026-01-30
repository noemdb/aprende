'use client';

import FadeIn from './FadeIn';

const phases = [
    { id: "01", title: "Fundación Técnica", desc: "Infraestructura móvil robusta y conexión segura con SAEFL." },
    { id: "02", title: "Dominio Pedagógico", desc: "Modelo de datos académico-gamificado unificado." },
    { id: "03", title: "Repositorios de Datos", desc: "Abstracción de sincronización y persistencia." },
    { id: "04", title: "Motor Académico", desc: "Algoritmos adaptativos para contenido personalizado." },
    { id: "05", title: "Gamificación Core", desc: "Sistema de motivación: XP, rachas y feedback inmediato." },
    { id: "06", title: "Servicios Pedagógicos", desc: "Orquestación lógica de prácticas, diagnósticos y estudios." },
    { id: "07", title: "MVP: Núcleo", desc: "Ciclo completo: práctica, feedback y recompensas." },
    { id: "08", title: "Sesiones Guiadas", desc: "Refuerzo rápido, dominio profundo y desafíos semanales." },
    { id: "09", title: "Diagnósticos con IA", desc: "Generación asistida de reportes para intervención docente." },
    { id: "10", title: "Insignias Avanzadas", desc: "Jerarquías de logros (Bronce a Diamante) y modo social." },
    { id: "11", title: "Ciclo Académico", desc: "Sincronización con hitos evaluativos y cierre de lapsos." },
    { id: "12", title: "Escalabilidad", desc: "Optimización offline-first, auditoría y soporte masivo." },
];

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 bg-[#0f172a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <FadeIn>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Hoja de Ruta <span className="text-emerald-500">Evolutiva</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Un plan estructurado en 12 fases para garantizar impacto pedagógico y estabilidad técnica.
                        </p>
                    </FadeIn>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800" />

                    <div className="space-y-12 md:space-y-0">
                        {phases.map((phase, i) => (
                            <FadeIn key={phase.id} delay={i * 0.1} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 relative">
                                {/* Left Side (for Even items on Desktop) */}
                                <div className={`w-full md:w-1/2 md:pr-12 md:text-right ${i % 2 !== 0 ? 'hidden md:block md:invisible' : ''} order-2 md:order-1 pl-12 md:pl-0`}>
                                    {i % 2 === 0 && (
                                        <>
                                            <div className="text-4xl md:text-5xl font-black text-slate-800 md:text-slate-800/50 mb-2">{phase.id}</div>
                                            <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                                        </>
                                    )}
                                </div>

                                {/* Center Circle */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-12 h-12 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shrink-0 shadow-xl z-10 order-1 md:order-2">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                                </div>

                                {/* Right Side (for Odd items on Desktop) */}
                                <div className={`w-full md:w-1/2 md:pl-12 ${i % 2 === 0 ? 'hidden md:block md:invisible' : ''} order-2 md:order-3 pl-12 md:pl-0`}>



                                    {i % 2 !== 0 && (
                                        <>
                                            <div className="text-4xl md:text-5xl font-black text-slate-800 md:text-slate-800/50 mb-2">{phase.id}</div>
                                            <h3 className="text-xl font-bold text-white mb-1">{phase.title}</h3>
                                            <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
                                        </>
                                    )}
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
