'use client';

import FadeIn from './FadeIn';
import { CreditCard, MessageCircle, Video, Mail, Smartphone, Globe } from 'lucide-react';

const integrations = [
    {
        name: "Pasarela de Pagos",
        icon: <CreditCard className="text-white" size={24} />,
        desc: "Procesamiento automático y conciliación.",
        color: "bg-blue-600"
    },
    {
        name: "WhatsApp / SMS",
        icon: <MessageCircle className="text-white" size={24} />,
        desc: "Comunicación directa e inmediata.",
        color: "bg-green-600"
    },
    {
        name: "Videoconferencias",
        icon: <Video className="text-white" size={24} />,
        desc: "Aulas virtuales y reuniones remotas.",
        color: "bg-purple-600"
    },
    {
        name: "Correo Institucional",
        icon: <Mail className="text-white" size={24} />,
        desc: "Notificaciones formales y circulares.",
        color: "bg-red-600"
    },
    {
        name: "App Móvil",
        icon: <Smartphone className="text-white" size={24} />,
        desc: "Acceso on-the-go para todos.",
        color: "bg-slate-700"
    },
    {
        name: "API Pública",
        icon: <Globe className="text-white" size={24} />,
        desc: "Interoperabilidad con otros sistemas.",
        color: "bg-orange-600"
    }
];

export default function Integrations() {
    return (
        <section className="py-20 relative bg-slate-900 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
                                Conectado con tu Mundo
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-8">
                                SAEFL no es una isla. Se integra fluidamente con las herramientas y servicios que tu institución ya utiliza, creando un ecosistema digital cohesivo y eficiente.
                            </p>
                            <button className="text-blue-400 font-medium hover:text-blue-300 transition-colors flex items-center gap-2 group">
                                Explorar todas las integraciones
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {integrations.map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 0.1}>
                                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors text-center group cursor-default">
                                    <div className={`mx-auto w-12 h-12 rounded-full ${item.color} flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h4 className="font-semibold text-white text-sm mb-1">{item.name}</h4>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
