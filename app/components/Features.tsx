'use client';

import FadeIn from './FadeIn';
import { Gamepad2, BrainCircuit, WifiOff, School, Award, Activity } from 'lucide-react';

const features = [
    {
        title: "Integridad Pedagógica",
        description: "Contenido alineado 100% con tu pensum. La gamificación refuerza el aprendizaje real, no lo reemplaza.",
        icon: School,
        color: "text-emerald-400"
    },
    {
        title: "Progresión Determinística",
        description: "Sistema de XP transparente y justo. Sin cajas de botín ni azar. Tu esfuerzo se traduce directamente en progreso.",
        icon: Activity,
        color: "text-green-400"
    },
    {
        title: "Sincronización SAEFL",
        description: "Tus áreas de formación, notas y profesores sincronizados en tiempo real con la base de datos institucional.",
        icon: BrainCircuit,
        color: "text-teal-400"
    },
    {
        title: "Modo Offline First",
        description: "Descarga tus prácticas y estudia sin conexión. El progreso se sincroniza automáticamente cuando vuelves a estar online.",
        icon: WifiOff,
        color: "text-orange-400"
    },
    {
        title: "Insignias Reales",
        description: "Colecciona insignias por dominio académico, constancia y velocidad. Conviértete en un 'Maestro de Matemáticas'.",
        icon: Award,
        color: "text-yellow-400"
    },
    {
        title: "Aprendizaje Adaptativo",
        description: "Algoritmos que detectan tus brechas de conocimiento y ajustan la dificultad de los ejercicios en tiempo real.",
        icon: Gamepad2,
        color: "text-lime-400"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[#0f172a] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-5xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                            Más que un Juego, <br />
                            <span className="text-3xl text-emerald-500">Una Herramienta para la motivación y el aprendizaje</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-md text-slate-400 max-w-2xl mx-auto">
                            Una plataforma diseñada bajo principios de integridad pedagógica y progresión justa.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1">
                                <div className={`w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${feature.color}`}>
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
