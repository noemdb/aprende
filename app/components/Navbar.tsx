'use client';

import Link from 'next/link';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-emerald-500/20">
                        {/*<img 
                            src="/assets/icon500x500.png" 
                            alt="Kainos Academy Logo" 
                            className="object-cover w-full h-full"
                        />*/}
                        KA
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        Kainos Academy
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="#inicio" className="hover:text-white transition-colors">Inicio</Link>
                    <Link href="#modulos" className="hover:text-white transition-colors">Módulos</Link>
                    <Link href="#nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link>
                    <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 h-9 px-4 text-sm rounded-lg font-medium transition-colors"
                    >
                        Acceder
                    </Link>
                </div>
            </div>
        </nav>
    );
}
