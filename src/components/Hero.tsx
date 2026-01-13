"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Bell, CheckSquare, Link2, StickyNote } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { useLocale } from "@/context/LocaleContext";

const languages = [
    { flag: "🇺🇸", name: "English" },
    { flag: "🇫🇷", name: "Français" },
    { flag: "🇩🇪", name: "Deutsch" },
    { flag: "🇪🇸", name: "Español" },
    { flag: "🇲🇾", name: "Melayu" },
    { flag: "🇮🇩", name: "Indonesia" },
];

const features = [
    { icon: Calendar, label: "Events" },
    { icon: Bell, label: "Reminders" },
    { icon: CheckSquare, label: "To-dos" },
    { icon: Link2, label: "Links" },
    { icon: StickyNote, label: "Notes" },
];

function AnimatedCountdown() {
    const [days, setDays] = useState(42);
    const [hours, setHours] = useState(8);
    const [mins, setMins] = useState(32);
    const [secs, setSecs] = useState(15);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecs(prev => {
                if (prev === 0) {
                    setMins(m => {
                        if (m === 0) {
                            setHours(h => {
                                if (h === 0) {
                                    setDays(d => (d > 0 ? d - 1 : 99));
                                    return 23;
                                }
                                return h - 1;
                            });
                            return 59;
                        }
                        return m - 1;
                    });
                    return 59;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center gap-3 md:gap-6">
            {[
                { value: days, label: "Days" },
                { value: hours, label: "Hours" },
                { value: mins, label: "Mins" },
                { value: secs, label: "Secs" },
            ].map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-16 h-16 md:w-24 md:h-24 glass-card flex items-center justify-center">
                        <span className="countdown-digit text-3xl md:text-5xl">
                            {String(item.value).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="countdown-label mt-2">{item.label}</span>
                </motion.div>
            ))}
        </div>
    );
}

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const { t } = useLocale();
    const [currentLangIndex, setCurrentLangIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLangIndex((prev) => (prev + 1) % languages.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden flex items-center justify-center flex-col">

            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                {/* Main Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/20 via-orange-500/5 to-transparent blur-[100px] rounded-full" />
                {/* Secondary Glow */}
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-500/10 to-transparent blur-[80px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-gradient-radial from-blue-500/10 to-transparent blur-[60px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Language Badge Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <div className="badge-premium">
                        <motion.span
                            key={currentLangIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-lg"
                        >
                            {languages[currentLangIndex].flag}
                        </motion.span>
                        <span>Available in {languages.length} Languages</span>
                    </div>
                </motion.div>

                {/* Version Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--surface-highlight)] border border-[var(--border-color)] mb-8"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                    </span>
                    <span className="text-sm font-semibold text-[var(--foreground)] tracking-wide">{t.hero.badge}</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-display text-display text-[var(--foreground)] tracking-tighter mb-6 max-w-5xl mx-auto leading-[0.9]"
                >
                    {t.hero.headline} <br className="hidden md:block" />
                    <span className="text-gradient-primary">{t.hero.headlineHighlight}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed"
                >
                    {t.hero.subtext}
                </motion.p>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="feature-pill"
                        >
                            <feature.icon className="w-4 h-4 text-orange-500" />
                            <span className="text-slate-300">{feature.label}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Countdown Showcase */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mb-14"
                >
                    <AnimatedCountdown />
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium group py-4 px-10 text-base">
                        <span className="relative z-10 flex items-center gap-2.5">
                            {t.hero.downloadBtn}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <button className="px-8 py-4 rounded-full font-bold text-[var(--foreground)] bg-[var(--surface-highlight)] hover:bg-[var(--surface)] transition-all flex items-center gap-2.5 text-base border border-[var(--border-color)] hover:border-orange-500/30">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        {t.hero.exploreBtn}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
