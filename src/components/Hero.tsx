"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { t } = useLocale();

    return (
        <section ref={containerRef} className="relative min-h-[85vh] pt-32 md:pt-40 pb-20 md:pb-24 overflow-visible flex items-center justify-center flex-col">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[100px] rounded-full pointer-events-none -z-10 translate-z-0" />

            <div className="max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface-highlight)] border border-[var(--border-color)] mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="text-xs font-medium text-[var(--foreground)] tracking-wide">{t.hero.badge}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-display text-display text-[var(--foreground)] tracking-tighter mb-4 max-w-4xl mx-auto"
                >
                    {t.hero.headline} <br className="hidden md:block" />
                    <span className="text-gradient-primary">{t.hero.headlineHighlight}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-lg text-slate-500 max-w-lg mx-auto mb-8 font-medium leading-relaxed"
                >
                    {t.hero.subtext}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-16"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium group py-3 px-6 text-sm">
                        <span className="relative z-10 flex items-center gap-2">
                            {t.hero.downloadBtn}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <button className="px-6 py-3 rounded-full font-bold text-[var(--foreground)] bg-[var(--surface-highlight)] hover:bg-[var(--surface)] transition-all flex items-center gap-2 text-sm border border-[var(--border-color)]">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        {t.hero.exploreBtn}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
