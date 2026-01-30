'use client';

import FadeIn from '../../components/FadeIn';
import { ToggleLeft, Save, AlertTriangle, Calendar, Award } from 'lucide-react';

export default function ConfiguracionPage() {
    return (
        <div className="space-y-8 max-w-4xl">
            <FadeIn>
                <div className="flex justify-between items-center border-b border-slate-800 pb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-white">System Configuration</h1>
                        <p className="text-slate-500 mt-1">Global settings affecting all users.</p>
                    </div>
                    <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded transition-colors">
                        <Save size={18} />
                        Save Changes
                    </button>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                {/* Academic Period Settings */}
                <section className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
                    <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <Calendar size={20} className="text-blue-400" />
                        Academic Period Control
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Current Period</label>
                            <input type="text" value="2025-2026" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" disabled />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Current Lapso</label>
                            <select className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" defaultValue="2do Lapso">
                                <option>1er Lapso</option>
                                <option>2do Lapso</option>
                                <option>3er Lapso</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">Start Date</label>
                            <input type="date" defaultValue="2026-01-07" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase">End Date</label>
                            <input type="date" defaultValue="2026-04-15" className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white" />
                        </div>
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.2}>
                {/* Feature Flags */}
                <section className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                    <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                        <Award size={20} className="text-purple-400" />
                        Feature Flags
                    </h2>

                    <div className="space-y-6">
                        {[
                            { name: 'Global Gamification', desc: 'Enable XP, Levels, and Leaderboards for all students.', enabled: true },
                            { name: 'AI Diagnostic Reports', desc: 'Allow teachers to generate drafts using LLM integration.', enabled: true },
                            { name: 'Public Leaderboards', desc: 'Show top 3 ranking in classroom dashboards.', enabled: false },
                            { name: 'Maintenance Mode', desc: 'Restrict access to Admin users only.', enabled: false, danger: true },
                        ].map((flag, i) => (
                            <div key={i} className="flex items-center justify-between border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                                <div className="pr-4">
                                    <div className={`font-bold ${flag.danger ? 'text-red-400' : 'text-white'}`}>{flag.name}</div>
                                    <div className="text-sm text-slate-500 mt-1">{flag.desc}</div>
                                </div>
                                <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${flag.enabled ? (flag.danger ? 'bg-red-500' : 'bg-emerald-500') : 'bg-slate-700'}`}>
                                    <div className={`w-4 h-4 rounded-full bg-white shadow-sm transform transition-transform ${flag.enabled ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeIn>

            <FadeIn delay={0.3}>
                <div className="bg-red-900/10 border border-red-900/30 rounded-lg p-4 flex items-start gap-3">
                    <AlertTriangle className="text-red-500 shrink-0 mt-0.5" />
                    <div>
                        <h4 className="font-bold text-red-400">Danger Zone</h4>
                        <p className="text-sm text-red-300/70 mt-1">Changes made here affect the entire production environment. All actions are logged.</p>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
