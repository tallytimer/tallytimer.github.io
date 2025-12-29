"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
    );
    const shadow = useTransform(
        scrollY,
        [0, 80],
        ["none", "0 4px 20px -5px rgba(15, 23, 42, 0.05)"]
    );
    const border = useTransform(
        scrollY,
        [0, 80],
        ["1px solid rgba(15, 23, 42, 0)", "1px solid rgba(15, 23, 42, 0.05)"]
    );

    return (
        <motion.nav
            style={{ backgroundColor, boxShadow: shadow, borderBottom: border }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl transition-all"
        >
            <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                    <Image
                        src="/images/logo.png"
                        alt="TallyTimer Logo"
                        width={34}
                        height={34}
                        className="rounded-xl shadow-md transition-transform group-hover:scale-105"
                    />
                </div>
                <span className="text-2xl font-display tracking-tighter text-[#0F172A] hidden sm:block">
                    TallyTimer
                </span>
            </Link>

            <div className="flex items-center gap-10">
                <div className="hidden md:flex items-center gap-10">
                    <Link href="#features" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors">
                        Features
                    </Link>
                    <Link href="#screenshots" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors">
                        Sneak Peek
                    </Link>
                    <Link href="#faq" className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors">
                        FAQ
                    </Link>
                </div>
                <Link
                    href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer"
                    target="_blank"
                    className="bg-[#0F172A] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all hover:bg-slate-800 active:scale-95 shadow-lg shadow-slate-200"
                >
                    Download App
                </Link>
            </div>
        </motion.nav>
    );
}
