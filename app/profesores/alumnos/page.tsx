'use client';

import FadeIn from '../../components/FadeIn';
import { Search, Filter, MoreHorizontal, User, Mail, Award } from 'lucide-react';

export default function AlumnosPage() {
    const students = [
        { id: 1, name: 'Ana Silva', email: 'ana.silva@colegiolara.edu', section: '3er Año A', xp: 3450, level: 8, status: 'Active' },
        { id: 2, name: 'Carlos Díaz', email: 'carlos.diaz@colegiolara.edu', section: '3er Año A', xp: 1200, level: 3, status: 'Risk' },
        { id: 3, name: 'Elena Rodriguez', email: 'elena.rodriguez@colegiolara.edu', section: '4to Año B', xp: 4100, level: 9, status: 'Active' },
        { id: 4, name: 'Fernando Ruiz', email: 'fernando.ruiz@colegiolara.edu', section: '2do Año A', xp: 2800, level: 6, status: 'Active' },
        { id: 5, name: 'Gabriela Paz', email: 'gabriela.paz@colegiolara.edu', section: '3er Año B', xp: 950, level: 2, status: 'Inactive' },
        { id: 6, name: 'Hector Gomez', email: 'hector.gomez@colegiolara.edu', section: '5to Año C', xp: 5200, level: 12, status: 'Active' },
    ];

    return (
        <div className="space-y-8">
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Alumnos</h1>
                        <p className="text-slate-400">Directorio de estudiantes y estados de cuenta.</p>
                    </div>

                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative group flex-1 md:w-64">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-emerald-400 transition-colors">
                                <Search size={18} />
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar alumno..."
                                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:bg-slate-900/70"
                            />
                        </div>
                        <button className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-xl border border-slate-700 transition-colors">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-900/50 text-slate-400 uppercase tracking-wider text-xs font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Estudiante</th>
                                    <th className="px-6 py-4">Sección</th>
                                    <th className="px-6 py-4 text-center">Nivel</th>
                                    <th className="px-6 py-4 text-right">XP Total</th>
                                    <th className="px-6 py-4 text-center">Estado</th>
                                    <th className="px-6 py-4 text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {students.map((student) => (
                                    <tr key={student.id} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 font-bold border border-slate-700 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-colors">
                                                    {student.name.charAt(0)}{student.name.split(' ')[1].charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-white max-w-[150px] truncate">{student.name}</div>
                                                    <div className="text-xs text-slate-500 flex items-center gap-1">
                                                        <Mail size={10} />
                                                        <span className="truncate max-w-[150px]">{student.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-300">
                                            <span className="bg-slate-800 px-2 py-1 rounded-md text-xs font-bold border border-slate-700 whitespace-nowrap">
                                                {student.section}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-400 px-2.5 py-1 rounded-full text-xs font-bold border border-yellow-500/20">
                                                <Award size={12} />
                                                Lvl {student.level}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right font-mono text-emerald-400 font-bold">
                                            {student.xp.toLocaleString()}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {student.status === 'Active' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                                    Activo
                                                </span>
                                            )}
                                            {student.status === 'Risk' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                                    Riesgo
                                                </span>
                                            )}
                                            {student.status === 'Inactive' && (
                                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-500/10 text-slate-400 border border-slate-500/20">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                    Inactivo
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors">
                                                <MoreHorizontal size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                        <span>Mostrando 6 de 142 alumnos</span>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors disabled:opacity-50">Anterior</button>
                            <button className="px-3 py-1.5 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors text-white">Siguiente</button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
