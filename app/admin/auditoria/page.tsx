'use client';

import FadeIn from '../../components/FadeIn';
import { FileText, Download, Filter, Search } from 'lucide-react';

export default function AuditoriaPage() {
    const logs = [
        { id: 'LOG-001', action: 'GRADE_UPDATE', user: 'Juan Pérez', detail: 'Changed Grade ID #442 to 18', ip: '192.168.1.42', time: '2026-01-29 14:22:10' },
        { id: 'LOG-002', action: 'LOGIN_FAIL', user: 'Carlos Ruiz', detail: '3 Failed attempts', ip: '10.0.0.5', time: '2026-01-29 14:20:05' },
        { id: 'LOG-003', action: 'CONFIG_CHANGE', user: 'Admin Root', detail: 'Updated Lapso End Date', ip: '127.0.0.1', time: '2026-01-29 13:15:00' },
        { id: 'LOG-004', action: 'XP_AWARD', user: 'System', detail: 'Awarded 50XP to Ana Silva', ip: 'Internal', time: '2026-01-29 12:45:33' },
        { id: 'LOG-005', action: 'REPORT_GEN', user: 'Juan Pérez', detail: 'Generated Diagnostic Report PDF', ip: '192.168.1.42', time: '2026-01-29 11:30:22' },
    ];

    return (
        <div className="space-y-6">
            <FadeIn>
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-white">Audit Logs</h1>
                        <p className="text-slate-500 text-sm font-mono mt-1">Immutable System Record • Retention: 90 Days</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-sm text-slate-300 border border-slate-700">
                        <Download size={16} />
                        Export CSV
                    </button>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                {/* Filters */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg flex flex-wrap gap-4 mb-6">
                    <div className="flex-1 min-w-[200px] relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        <input type="text" placeholder="Search by Action, User or ID..." className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 pl-9 text-sm text-white focus:outline-none focus:border-blue-500" />
                    </div>
                    <select className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-slate-400 focus:outline-none focus:border-blue-500">
                        <option>All Actions</option>
                        <option>GRADE_UPDATE</option>
                        <option>LOGIN</option>
                        <option>SYSTEM</option>
                    </select>
                    <input type="date" className="bg-slate-950 border border-slate-700 rounded px-3 py-2 text-sm text-slate-400" />
                </div>

                {/* Log Table */}
                <div className="border border-slate-800 rounded-lg overflow-hidden font-mono text-sm">
                    <table className="w-full text-left">
                        <thead className="bg-slate-900 text-slate-500 text-xs uppercase">
                            <tr>
                                <th className="px-4 py-3 w-32">Log ID</th>
                                <th className="px-4 py-3 w-40">Timestamp</th>
                                <th className="px-4 py-3 w-40">Action</th>
                                <th className="px-4 py-3 w-40">Actor</th>
                                <th className="px-4 py-3">Details</th>
                                <th className="px-4 py-3 w-32 text-right">IP Addr</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-950">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-900 transition-colors group">
                                    <td className="px-4 py-2.5 text-slate-500">{log.id}</td>
                                    <td className="px-4 py-2.5 text-blue-400">{log.time}</td>
                                    <td className="px-4 py-2.5">
                                        <span className={`text-[10px] px-1.5 py-0.5 border rounded ${log.action.includes('FAIL') ? 'border-red-500/40 text-red-500 bg-red-500/10' :
                                                log.action.includes('UPDATE') || log.action.includes('CHANGE') ? 'border-yellow-500/40 text-yellow-500 bg-yellow-500/10' :
                                                    'border-slate-700 text-slate-400'
                                            }`}>{log.action}</span>
                                    </td>
                                    <td className="px-4 py-2.5 text-slate-300">{log.user}</td>
                                    <td className="px-4 py-2.5 text-slate-400 truncate max-w-xs" title={log.detail}>{log.detail}</td>
                                    <td className="px-4 py-2.5 text-right text-slate-600 group-hover:text-slate-400">{log.ip}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </FadeIn>
        </div>
    );
}
