'use client';

import FadeIn from '../../components/FadeIn';
import { FileText, Download, Calendar, Filter, FileBarChart, ExternalLink } from 'lucide-react';

export default function ReportesPage() {
    const reports = [
        { id: 1, title: 'Informe de Diagnóstico Inicial', type: 'PDF', date: '25 Ene, 2026', size: '2.4 MB', status: 'Ready' },
        { id: 2, title: 'Consolidado de Notas - 1er Lapso', type: 'XLSX', date: '15 Dic, 2025', size: '1.8 MB', status: 'Ready' },
        { id: 3, title: 'Auditoría de XP y Logros', type: 'PDF', date: '28 Ene, 2026', size: '4.2 MB', status: 'Processing' },
        { id: 4, title: 'Listado de Estudiantes en Riesgo', type: 'CSV', date: '29 Ene, 2026', size: '560 KB', status: 'Ready' },
    ];

    return (
        <div className="space-y-8">
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Reportes Académicos</h1>
                        <p className="text-slate-400">Genera y descarga informes detallados de rendimiento.</p>
                    </div>
                </div>
            </FadeIn>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
                {[
                    { title: 'Generar Cierre de Lapso', icon: FileBarChart, desc: 'Procesar notas y XP finales', color: 'emerald' },
                    { title: 'Exportar Lista de Asistencia', icon: Calendar, desc: 'Basado en actividad de app', color: 'indigo' },
                    { title: 'Analíticas Avanzadas', icon: ExternalLink, desc: 'Ver dashboard en Mixpanel', color: 'purple' },
                ].map((action, i) => (
                    <FadeIn key={i} delay={0.1 + i * 0.1}>
                        <button className="w-full bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 text-left hover:bg-slate-800/50 hover:border-emerald-500/30 transition-all group">
                            <div className={`w-12 h-12 rounded-xl bg-${action.color}-500/10 flex items-center justify-center text-${action.color}-400 mb-4 border border-${action.color}-500/20 group-hover:scale-110 transition-transform`}>
                                <action.icon size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{action.title}</h3>
                            <p className="text-sm text-slate-400">{action.desc}</p>
                        </button>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.3}>
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold text-white">Historial de Descargas</h3>
                        <button className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
                            <Filter size={16} />
                            Filtrar
                        </button>
                    </div>

                    <div className="space-y-4">
                        {reports.map((report) => (
                            <div key={report.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-slate-300">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{report.title}</div>
                                        <div className="flex items-center gap-3 text-xs text-slate-500 mt-0.5">
                                            <span className="px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 font-mono">{report.type}</span>
                                            <span>{report.size}</span>
                                            <span>•</span>
                                            <span>{report.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {report.status === 'Ready' ? (
                                    <button className="p-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-colors" title="Descargar">
                                        <Download size={20} />
                                    </button>
                                ) : (
                                    <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20 animate-pulse">
                                        Procesando...
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
