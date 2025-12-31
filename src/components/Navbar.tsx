"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto md:min-w-[500px]"
            >
                <div className={`
                    rounded-full px-6 py-3 flex items-center justify-between gap-8
                    bg-[var(--surface)]/80 backdrop-blur-xl border border-[var(--border-color)]
                    shadow-lg shadow-black/5 transition-all duration-300
                    ${scrolled ? "scale-100" : "scale-[1.02]"}
                    will-change-transform translate-z-0
                `}>


                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-shadow rounded-lg overflow-hidden">
                            <Image
                                src="/images/logo.png"
                                alt="TallyTimer Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-display font-bold text-[var(--foreground)] text-lg">TallyTimer</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-400 hover:text-[var(--foreground)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <a
                            href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer"
                            target="_blank"
                            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/30 transition-all"
                        >
                            Get App
                            <ArrowRight className="w-3 h-3" />
                        </a>
                        <button
                            className="md:hidden p-2 text-[var(--foreground)]"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-[var(--background)]"
                    >
                        <div className="flex flex-col h-full p-8 relative">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[var(--surface-highlight)] flex items-center justify-center"
                            >
                                <X className="w-6 h-6 text-[var(--foreground)]" />
                            </button>

                            <div className="flex flex-col gap-8 mt-20">
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-4xl font-display text-[var(--foreground)]"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
