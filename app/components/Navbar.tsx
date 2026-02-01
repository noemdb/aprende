'use client';

import Link from 'next/link';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { href: "#inicio", label: "Inicio" },
        { href: "#modulos", label: "Módulos" },
        { href: "#nosotros", label: "Sobre Nosotros" },
        { href: "#contacto", label: "Contacto" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen ? 'bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 z-50">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-emerald-500/20">
                        KA
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">
                        Kainos Academy
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="/login"
                        className="hidden sm:inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 h-9 px-4 text-sm rounded-lg font-medium transition-colors"
                    >
                        Acceder
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden z-50 text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 right-0 bg-[#0f172a] border-b border-white/5 md:hidden z-40 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/login"
                                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/30 h-11 px-4 text-base rounded-lg font-medium transition-colors w-full"
                                onClick={() => setIsOpen(false)}
                            >
                                Acceder
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
