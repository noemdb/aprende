'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function CallToAction() {
    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-emerald-600/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
                        ¡Tu aventura de aprendizaje comienza hoy!
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light">
                        Ingresa a la plataforma para desbloquear nuevos desafíos, ganar XP y dominar tus materias de una forma divertida.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
                        <Link href="/login" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 bg-white text-slate-900 border border-white hover:bg-slate-200 h-14 px-8 hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
                            Ingresar Ahora
                        </Link>
                    </div>

                    <p className="mt-8 text-sm text-slate-500">
                        Acceso inmediato para estudiantes registrados.
                    </p>
                </FadeIn>
            </div>
        </section>
    );
}
