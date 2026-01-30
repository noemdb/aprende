export default function Footer() {
    return (
        <footer className="py-12 border-t border-slate-800/50 bg-slate-950 text-slate-400 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-emerald-500/20">
                            A
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-200">
                            SAEFL
                        </span>
                    </div>

                    <div className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} SAEFL. Todos los derechos reservados.
                    </div>

                    <div className="flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Soporte</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Estado</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
