'use client';

import FadeIn from '../../components/FadeIn';
import { Activity, Users, ShieldAlert, Database, Server, Cpu, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <FadeIn>
                <div className="flex justify-between items-end mb-2">
                    <h1 className="text-2xl font-bold text-white tracking-tight">System Overview</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-emerald-400 font-mono">All Systems Operational</span>
                    </div>
                </div>
            </FadeIn>

            {/* Infrastructure Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: 'Active Sessions', value: '482', icon: Users, color: 'blue' },
                    { label: 'Server Load', value: '24%', icon: Server, color: 'emerald' },
                    { label: 'DB Query Time', value: '42ms', icon: Database, color: 'purple' },
                    { label: 'System Alerts', value: '0', icon: ShieldAlert, color: 'slate' },
                ].map((stat, i) => (
                    <FadeIn key={i} delay={i * 0.05}>
                        <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-slate-700 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <div className={`text-${stat.color}-400`}>
                                    <stat.icon size={20} />
                                </div>
                                <div className="text-2xl font-mono font-bold text-white">{stat.value}</div>
                            </div>
                            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{stat.label}</div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Metrics */}
                <div className="lg:col-span-2 space-y-8">
                    <FadeIn delay={0.2}>
                        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <Activity size={16} />
                                Traffic & Load Real-time
                            </h3>

                            <div className="h-64 flex items-end justify-between gap-1 relative overflow-hidden">
                                {/* Mock Chart */}
                                {Array.from({ length: 40 }).map((_, i) => {
                                    const height = 30 + Math.random() * 50;
                                    return (
                                        <div
                                            key={i}
                                            className="bg-blue-600/20 w-full hover:bg-blue-500 transition-colors"
                                            style={{ height: `${height}%` }}
                                        />
                                    );
                                })}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-4">
                        <FadeIn delay={0.3}>
                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
                                <h3 className="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                                    <Cpu size={14} /> Node Performance
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'API Response', val: '120ms', status: 'good' },
                                        { label: 'SSR Render', val: '85ms', status: 'good' },
                                        { label: 'Static Gen', val: '320ms', status: 'ok' }
                                    ].map((m, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0">
                                            <span className="text-slate-300">{m.label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full ${m.status === 'good' ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
                                                <span className="font-mono text-white">{m.val}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="bg-slate-900 border border-slate-800 rounded-lg p-5">
                                <h3 className="text-xs font-bold text-slate-500 uppercase mb-4 flex items-center gap-2">
                                    <Database size={14} /> Database Health
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Connections', val: '45/100', status: 'good' },
                                        { label: 'Cache Hit Rate', val: '94%', status: 'good' },
                                        { label: 'Storage', val: '12GB', status: 'good' }
                                    ].map((m, i) => (
                                        <div key={i} className="flex justify-between items-center text-sm border-b border-slate-800 pb-2 last:border-0">
                                            <span className="text-slate-300">{m.label}</span>
                                            <div className="flex items-center gap-2">
                                                <span className={`w-1.5 h-1.5 rounded-full ${m.status === 'good' ? 'bg-emerald-500' : 'bg-yellow-500'}`} />
                                                <span className="font-mono text-white">{m.val}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Right Column: Events & Logs */}
                <div className="lg:col-span-1">
                    <FadeIn delay={0.5} className="h-full">
                        <div className="bg-slate-900 border border-slate-800 rounded-lg p-5 h-full flex flex-col">
                            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <AlertCircle size={16} />
                                Recent System Events
                            </h3>

                            <div className="space-y-6 flex-1 text-sm">
                                {[
                                    { msg: 'Scheduled Backup Completed', time: '2m ago', type: 'success' },
                                    { msg: 'High Traffic Detected (API)', time: '15m ago', type: 'warning' },
                                    { msg: 'New Deployment Successful', time: '1h ago', type: 'success' },
                                    { msg: 'Rate Limit Warning (IP 192...)', time: '2h ago', type: 'error' },
                                    { msg: 'Cron Job "DailyReport" finished', time: '4h ago', type: 'neutral' },
                                ].map((event, i) => (
                                    <div key={i} className="flex gap-3">
                                        <div className="mt-1">
                                            {event.type === 'success' && <CheckCircle2 size={16} className="text-emerald-500" />}
                                            {event.type === 'warning' && <AlertCircle size={16} className="text-yellow-500" />}
                                            {event.type === 'error' && <ShieldAlert size={16} className="text-red-500" />}
                                            {event.type === 'neutral' && <Activity size={16} className="text-slate-500" />}
                                        </div>
                                        <div>
                                            <div className="text-slate-200 font-medium leading-none mb-1">{event.msg}</div>
                                            <div className="text-xs text-slate-600 font-mono">{event.time}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
}
