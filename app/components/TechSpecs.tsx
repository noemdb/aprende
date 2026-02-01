'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';


const specs = [
    { label: "Frontend Móvil", value: "React Native + Expo" },
    { label: "Frontend Web", value: "Next.js + Tailwind CSS" },
    { label: "Backend", value: "Node.js + Express" },
    { label: "Base de Datos", value: "MySQL 10.4" },
    { label: "Sync", value: "Incremental Timestamp Protocol" },
    { label: "Analytics", value: "Mixpanel / Amplitude" }
];

const nodes = [
    { label: "Mallas Curriculares", color: "text-emerald-400", angle: 0 },
    { label: "Gestión de Notas", color: "text-teal-400", angle: 72 },
    { label: "Asistencia Realtime", color: "text-blue-400", angle: 144 },
    { label: "Perfiles Docentes", color: "text-indigo-400", angle: 216 },
    { label: "Data Estudiantil", color: "text-cyan-400", angle: 288 },
];

export default function TechSpecs() {
    return (
        <section className="py-24 relative bg-[#0B1121] overflow-hidden">
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

                    <FadeIn delay={0.2} className="relative flex items-center justify-center">
                        <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center">
                            {/* Animated Background Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-slate-800/50"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[15%] rounded-full border border-slate-800/30"
                            />

                            {/* Data Particles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        rotate: 360,
                                        scale: [1, 1.2, 1],
                                        opacity: [0.2, 0.5, 0.2]
                                    }}
                                    transition={{
                                        duration: 10 + i * 5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                    className="absolute inset-0 pointer-events-none"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-500 blur-[1px]" />
                                </motion.div>
                            ))}

                            {/* Central Hub */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 20px rgba(16,185,129,0.1)",
                                        "0 0 60px rgba(16,185,129,0.3)",
                                        "0 0 20px rgba(16,185,129,0.1)"
                                    ]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="w-32 h-32 rounded-full bg-slate-900 border-2 border-emerald-500/50 flex items-center justify-center z-20 shadow-2xl relative"
                            >
                                <div className="absolute inset-0 rounded-full bg-emerald-500/5 blur-xl" />
                                <span className="font-bold text-white text-2xl tracking-wider">SAEFL</span>
                            </motion.div>

                            {/* Orbiting Nodes */}
                            {nodes.map((node, i) => (
                                <motion.div
                                    key={i}
                                    style={{
                                        rotate: node.angle,
                                    }}
                                    animate={{ rotate: node.angle + 360 }}
                                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 flex items-start justify-center pt-2"
                                >
                                    <motion.div
                                        style={{ rotate: -(node.angle) }}
                                        animate={{ rotate: -(node.angle + 360) }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-700 shadow-2xl z-30"
                                    >
                                        <div className="flex flex-col items-center gap-1">
                                            <div className={`w-2 h-2 rounded-full bg-current ${node.color} animate-pulse`} />
                                            <span className="text-[10px] font-bold text-white whitespace-nowrap uppercase tracking-tighter">
                                                {node.label}
                                            </span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Pulse background */}
                            <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-[100px] -z-10" />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
