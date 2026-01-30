'use client';

import FadeIn from './FadeIn';

const specs = [
    { label: "Frontend Móvil", value: "React Native + Expo" },
    { label: "Frontend Web", value: "Next.js + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express" },
    { label: "Base de Datos", value: "MariaDB + SQLite (Offline)" },
    { label: "Sync", value: "Incremental Timestamp Protocol" },
    { label: "Analytics", value: "Mixpanel / Amplitude" }
];

export default function TechSpecs() {
    return (
        <section className="py-24 relative bg-[#0B1121]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ingeniería Educativa <br />
                            <span className="text-emerald-500">Innovadora</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Construido sobre un stack tecnológico robusto diseñado para escalar y funcionar en cualquier condición. Privacidad y seguridad desde el primer día.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {specs.map((spec, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/20 transition-colors">
                                    <span className="text-sm font-medium text-slate-400">{spec.label}</span>
                                    <span className="text-sm font-bold text-emerald-400">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} className="relative">
                        <div className="aspect-square relative rounded-full border border-slate-800 bg-slate-900/20 flex items-center justify-center p-12">
                            {/* Central Hub */}
                            <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-3xl" />
                            <div className="w-32 h-32 rounded-full bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center z-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                                <span className="font-bold text-white text-xl">SAEFL</span>
                            </div>

                            {/* Orbiting nodes */}
                            <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-xs text-emerald-300 font-mono shadow-xl">
                                Sync Bidireccional
                            </div>
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-lg border border-slate-700 text-xs text-teal-300 font-mono shadow-xl">
                                Data Encriptada
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
