"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar, Bell, CheckSquare, Link2, StickyNote, Globe } from "lucide-react";
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

function AnimatedCountdownBackground() {
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
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden">
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 1, 0]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="flex gap-8 md:gap-16 transform scale-150 md:scale-[2.5]"
            >
                {[
                    { value: days, label: "DAYS" },
                    { value: hours, label: "HOURS" },
                    { value: mins, label: "MINS" },
                    { value: secs, label: "SECS" },
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className="font-display font-bold text-8xl md:text-[12rem] leading-none tracking-tighter">
                            {String(item.value).padStart(2, '0')}
                        </span>
                        <span className="text-sm md:text-xl font-bold tracking-[0.5em] mt-4 opacity-50">{item.label}</span>
                    </div>
                ))}
            </motion.div>
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
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center flex-col">

            {/* Background Countdown - The Core Focus */}
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 0.5, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center opacity-[0.02] select-none pointer-events-none overflow-hidden"
            >
                <div className="flex gap-4 md:gap-8 transform scale-110 md:scale-150">
                    {[
                        { label: "DAYS" },
                        { label: "HOURS" },
                        { label: "MINS" },
                        { label: "SECS" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <span className="font-display font-bold text-7xl md:text-[8rem] leading-none tracking-tighter">
                                00
                            </span>
                            <span className="text-[10px] md:text-sm font-bold tracking-[0.3em] mt-2 opacity-50">{item.label}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/5 via-orange-500/0 to-transparent blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Available in 6 Languages Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-10"
                >
                    <div className="badge-premium">
                        <Globe className="w-3.5 h-3.5" />
                        <div className="flex -space-x-1.5 mx-1">
                            {languages.slice(0, 3).map((l, i) => (
                                <span key={i} className="w-5 h-5 rounded-full border-2 border-[var(--background)] bg-slate-800 flex items-center justify-center text-[10px] shadow-sm">
                                    {l.flag}
                                </span>
                            ))}
                        </div>
                        <span className="mx-1">Available in</span>
                        <motion.span
                            key={currentLangIndex}
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-orange-400 min-w-[70px] text-left"
                        >
                            {languages[currentLangIndex].name}
                        </motion.span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-display text-[var(--foreground)] tracking-tight mb-8 max-w-5xl mx-auto leading-[1.05] break-words"
                >
                    {t.hero.headline} <br className="hidden md:block" />
                    <span className="text-gradient-primary">{t.hero.headlineHighlight}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed opacity-90"
                >
                    {t.hero.subtext}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {features.map((feature, i) => (
                        <div key={i} className="feature-pill">
                            <feature.icon className="w-3.5 h-3.5 text-orange-500" />
                            <span>{feature.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Main Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium">
                        <span className="flex items-center gap-2">
                            {t.hero.downloadBtn}
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </a>

                    <button className="px-8 py-4 rounded-full font-bold text-[var(--foreground)] bg-white/5 hover:bg-white/10 transition-all flex items-center gap-2 text-sm border border-white/5 backdrop-blur-md">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        {t.hero.exploreBtn}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
