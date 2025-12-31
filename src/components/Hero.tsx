"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section ref={containerRef} className="relative min-h-[110vh] pt-40 md:pt-48 pb-32 md:pb-40 overflow-visible flex items-center justify-center flex-col">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-orange-500/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 translate-z-0" />

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface-highlight)] border border-[var(--border-color)] mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="text-sm font-medium text-[var(--foreground)] tracking-wide">Version 2.0 Now Available</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[100px] font-display text-display text-[var(--foreground)] tracking-tighter mb-6 max-w-4xl mx-auto"
                >
                    Every second <br className="hidden md:block" />
                    <span className="text-gradient-primary">counts.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 font-medium leading-relaxed"
                >
                    TallyTimer transforms your deadlines, events, and memories into beautiful, interactive countdowns. Designed for those who value time.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-24"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium group">
                        <span className="relative z-10 flex items-center gap-2">
                            Download for Free
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <button className="px-8 py-4 rounded-full font-bold text-[var(--foreground)] bg-[var(--surface-highlight)] hover:bg-[var(--surface)] transition-all flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        Explore Features
                    </button>
                </motion.div>



            </div>
        </section>
    );
}
