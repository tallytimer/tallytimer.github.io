"use client";

import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const unsub = scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
        return () => unsub();
    }, [scrollY]);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Gallery", href: "#screenshots" },
        { name: "Updates", href: "#changelog" },
    ];

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-4 md:px-6"
        >
            <motion.div
                style={{
                    backgroundColor: isScrolled ? "var(--nav-bg)" : "transparent",
                    backdropFilter: isScrolled ? "blur(20px)" : "none",
                    borderColor: isScrolled ? "var(--border-color)" : "transparent",
                }}
                className="max-w-6xl mx-auto rounded-[2rem] px-6 md:px-8 py-3.5 flex justify-between items-center border transition-all duration-300 shadow-sm"
            >
                <Link href="/" className="flex items-center gap-3.5 group">
                    <div className="relative w-9 h-9 md:w-10 md:h-10 overflow-hidden rounded-xl shadow-md transition-transform group-hover:rotate-6">
                        <Image
                            src="/images/appicon.png"
                            alt="TallyTimer Icon"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl md:text-2xl font-display text-[var(--foreground)] tracking-tightest leading-none">
                        TallyTimer
                    </span>
                </Link>

                <div className="hidden md:flex items-center">
                    <nav className="flex items-center gap-10 text-sm font-bold text-slate-400 font-display">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="hover:text-primary-500 transition-colors tracking-tightest"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden w-10 h-10 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] flex items-center justify-center text-[var(--foreground)] shadow-sm active:scale-95 transition-transform"
                >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </motion.div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        className="absolute top-[5rem] left-4 right-4 p-8 rounded-[2.5rem] bg-[var(--nav-bg)] backdrop-blur-2xl border border-[var(--border-color)] shadow-2xl md:hidden flex flex-col gap-8 items-center"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-display text-[var(--foreground)] hover:text-primary-500 transition-colors tracking-tight"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
