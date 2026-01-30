'use client';

import { useState } from 'react';
import FadeIn from './FadeIn';
import {
    ShieldCheck,
    Briefcase,
    GraduationCap,
    Users,
    School,
    BarChart3,
    FileText,
    CreditCard,
    CheckCircle2
} from 'lucide-react';

const roles = [
    {
        id: 'director',
        label: 'Directivos',
        icon: <Briefcase size={20} />,
        title: "Gestión Estratégica Institucional",
        description: "Herramientas de alto nivel para la toma de decisiones y control total del ciclo académico.",
        features: [
            "Planificación Académica: Asignación eficiente de carga docente y horarios.",
            "Cierre de Lapso Automatizado: Procesamiento masivo de promedios y actas.",
            "Estadísticas en Tiempo Real: Métricas de rendimiento, matrícula y eficiencia.",
            "Auditoría Completa: Trazabilidad absoluta de cambios en notas e inscripciones.",
        ],
        color: "blue"
    },
    {
        id: 'professor',
        label: 'Profesores',
        icon: <School size={20} />,
        title: "Optimización de la Labor Docente",
        description: "Plataforma intuitiva que reduce la carga administrativa y potencia el enfoque pedagógico.",
        features: [
            "Carga de Notas Masiva: Interfaz optimizada para registrar evaluaciones rápidamente.",
            "Evaluación Flexible: Soporte para escalas cualitativas, cuantitativas y mixtas.",
            "Banco de Recursos: Gestión de preguntas, ejercicios y material de apoyo.",
            "Reportes Automáticos: Generación instantánea de boletines parciales por sección.",
        ],
        color: "emerald"
    },
    {
        id: 'representative',
        label: 'Representantes',
        icon: <Users size={20} />,
        title: "Participación Familiar Activa",
        description: "Transparencia total y comunicación fluida para el seguimiento del representado.",
        features: [
            "Monitoreo Académico: Visualización de calificaciones y asistencia en tiempo real.",
            "Gestión Administrativa: Pagos en línea, estados de cuenta y solvencias.",
            "Notificaciones Inteligentes: Alertas automáticas de bajo rendimiento.",
            "Autoservicio: Descarga de constancias y actualización de datos.",
        ],
        color: "purple"
    },
    {
        id: 'student',
        label: 'Estudiantes',
        icon: <GraduationCap size={20} />,
        title: "Autonomía y Empoderamiento",
        description: "Acceso centralizado a toda su información académica y recursos de aprendizaje.",
        features: [
            "Progreso Académico: Visualización clara de notas, promedios y posición.",
            "Aula Virtual: Acceso a tareas, asignaciones y material de estudio.",
            "Horario Personalizado: Calendario de clases y eventos de evaluación.",
            "Historial Completo: Récord de notas de períodos anteriores.",
        ],
        color: "cyan"
    },
    {
        id: 'admin',
        label: 'Administrador',
        icon: <ShieldCheck size={20} />,
        title: "Control y Seguridad del Sistema",
        description: "Mantenimiento de la integridad, seguridad y configuración global de la plataforma.",
        features: [
            "Inmutabilidad de Datos: Esquema de base de datos protegido y versionado.",
            "Gestión de Roles: Control granular de permisos y accesos por usuario.",
            "Seguridad Académica: Reglas de validación estrictas para impedir inconsistencias.",
            "Integridad Referencial: Garantía de coherencia en todo el modelo de datos.",
        ],
        color: "slate"
    }
];

export default function RoleBreakdown() {
    const [activeTab, setActiveTab] = useState(roles[0].id);

    const activeRole = roles.find(r => r.id === activeTab) || roles[0];

    return (
        <section className="py-24 relative z-10 bg-[#0f172a]">
            {/* Background glowing orb */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">Potencia para cada Rol</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Funcionalidades específicas diseñadas para satisfacer las necesidades únicas de cada miembro de la comunidad.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-4 space-y-2">
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                onClick={() => setActiveTab(role.id)}
                                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${activeTab === role.id
                                        ? 'bg-blue-600/10 border-blue-500/50 text-white shadow-lg shadow-blue-500/10'
                                        : 'bg-white/5 border-transparent text-slate-400 hover:bg-white/10 hover:text-slate-200'
                                    }`}
                            >
                                <div className={`${activeTab === role.id ? 'text-blue-400' : 'text-slate-500'}`}>
                                    {role.icon}
                                </div>
                                <span className="font-medium text-lg">{role.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <FadeIn key={activeRole.id} className="h-full">
                            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 border border-white/5 h-full relative overflow-hidden group">
                                {/* Decorative gradient inside card */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-${activeRole.color}-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${activeRole.color}-500/10 border border-${activeRole.color}-500/20 text-${activeRole.color}-400 text-sm font-medium mb-6`}>
                                        {activeRole.icon}
                                        <span>{activeRole.label}</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {activeRole.title}
                                    </h3>

                                    <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                                        {activeRole.description}
                                    </p>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        {activeRole.features.map((feature, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className={`mt-1 min-w-[20px] text-${activeRole.color}-500`}>
                                                    <CheckCircle2 size={20} />
                                                </div>
                                                <p className="text-slate-300 text-sm leading-relaxed">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
