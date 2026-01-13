"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";

const floatingLanguages = [
    { text: "Counts.", lang: "English", x: "15%", y: "20%", size: "text-lg md:text-xl", delay: 0 },
    { text: "Compte.", lang: "Français", x: "75%", y: "15%", size: "text-base md:text-lg", delay: 2 },
    { text: "Zählt.", lang: "Deutsch", x: "10%", y: "60%", size: "text-xl md:text-2xl", delay: 4 },
    { text: "Cuenta.", lang: "Español", x: "80%", y: "55%", size: "text-lg md:text-xl", delay: 1 },
    { text: "Penting.", lang: "Bahasa Melayu", x: "25%", y: "80%", size: "text-base md:text-lg", delay: 3 },
    { text: "Berharga.", lang: "Bahasa Indonesia", x: "65%", y: "85%", size: "text-xl md:text-2xl", delay: 5 },
];

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { t } = useLocale();

    return (
        <section ref={containerRef} className="relative min-h-[90vh] pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden flex items-center justify-center flex-col">

            {/* Background Language Fragments Animation */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {floatingLanguages.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8, x: item.x, y: item.y }}
                        animate={{
                            opacity: [0, 0.4, 0.4, 0],
                            y: ["-10px", "10px", "-10px"],
                            scale: [0.9, 1, 0.9]
                        }}
                        transition={{
                            opacity: { duration: 10, repeat: Infinity, delay: item.delay, ease: "easeInOut" },
                            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className={`absolute ${item.size} font-display font-bold text-orange-500/20 whitespace-nowrap blur-[1px] select-none`}
                        style={{ left: item.x, top: item.y }}
                    >
                        {item.text}
                    </motion.div>
                ))}
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 translate-z-0" />

            <div className="max-w-6xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--surface-highlight)] border border-[var(--border-color)] mb-8"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                    </span>
                    <span className="text-xs md:text-sm font-semibold text-[var(--foreground)] tracking-wide">{t.hero.badge}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display text-display text-[var(--foreground)] tracking-tighter mb-6 max-w-5xl mx-auto leading-[0.9]"
                >
                    {t.hero.headline} <br className="hidden md:block" />
                    <span className="text-gradient-primary">{t.hero.headlineHighlight}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 font-medium leading-relaxed"
                >
                    {t.hero.subtext}
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-5 mb-16"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium group py-4 px-8 text-base shadow-2xl shadow-orange-500/20">
                        <span className="relative z-10 flex items-center gap-2.5">
                            {t.hero.downloadBtn}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <button className="px-8 py-4 rounded-full font-bold text-[var(--foreground)] bg-[var(--surface-highlight)] hover:bg-[var(--surface)] transition-all flex items-center gap-2.5 text-base border border-[var(--border-color)]">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        {t.hero.exploreBtn}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
