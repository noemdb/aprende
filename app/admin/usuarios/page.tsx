'use client';

import FadeIn from '../../components/FadeIn';
import { Search, Filter, MoreVertical, Shield, User, GraduationCap, Edit, Lock } from 'lucide-react';

export default function UsuariosPage() {
    const users = [
        { id: 1, name: 'Juan Pérez', role: 'Teacher', email: 'juan.perez@edu.com', status: 'Active', lastLogin: '2m ago' },
        { id: 2, name: 'Ana Silva', role: 'Student', email: 'ana.silva@edu.com', status: 'Active', lastLogin: '1h ago' },
        { id: 3, name: 'Admin Root', role: 'Admin', email: 'root@sys.com', status: 'Active', lastLogin: 'Now' },
        { id: 4, name: 'Maria Garcia', role: 'Parent', email: 'maria.g@gmail.com', status: 'Inactive', lastLogin: '3d ago' },
        { id: 5, name: 'Carlos Ruiz', role: 'Student', email: 'carlos.r@edu.com', status: 'Suspended', lastLogin: '1w ago' },
    ];

    return (
        <div className="space-y-6">
            <FadeIn>
                <div className="flex justify-between items-center bg-slate-900 border border-slate-800 p-4 rounded-lg">
                    <h1 className="text-xl font-bold text-white">User Management</h1>
                    <div className="flex gap-2">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search users..."
                                className="bg-slate-950 border border-slate-700 rounded px-3 py-1.5 text-sm text-white w-64 focus:outline-none focus:border-blue-500"
                            />
                            <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500" />
                        </div>
                        <button className="px-3 py-1.5 border border-slate-700 rounded text-slate-400 hover:text-white hover:bg-slate-800">
                            <Filter size={16} />
                        </button>
                        <button className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded">Add User</button>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div className="border border-slate-800 rounded-lg overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-900 text-slate-400 font-mono text-xs uppercase">
                            <tr>
                                <th className="px-6 py-3">User</th>
                                <th className="px-6 py-3">Role</th>
                                <th className="px-6 py-3">Status</th>
                                <th className="px-6 py-3">Last Login</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400">
                                                {user.role === 'Admin' ? <Shield size={14} /> : user.role === 'Student' ? <GraduationCap size={14} /> : <User size={14} />}
                                            </div>
                                            <div>
                                                <div className="font-medium text-white">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3">
                                        <span className={`text-xs font-mono px-2 py-0.5 rounded border ${user.role === 'Admin' ? 'border-purple-500/30 text-purple-400 bg-purple-500/10' :
                                                user.role === 'Teacher' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' :
                                                    'border-slate-700 text-slate-400'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-2">
                                            <div className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Suspended' ? 'bg-red-500' : 'bg-slate-500'}`} />
                                            <span className="text-slate-300">{user.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 text-slate-400 font-mono text-xs">{user.lastLogin}</td>
                                    <td className="px-6 py-3 text-right">
                                        <div className="flex justify-end gap-1">
                                            <button className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-slate-800 rounded"><Edit size={14} /></button>
                                            <button className="p-1.5 text-slate-500 hover:text-yellow-400 hover:bg-slate-800 rounded"><Lock size={14} /></button>
                                            <button className="p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded"><MoreVertical size={14} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </FadeIn>
        </div>
    );
}
