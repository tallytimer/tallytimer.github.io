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
        <section ref={containerRef} className="relative min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden flex items-center justify-center flex-col">

            {/* Background Countdown - The Core Focus */}
            <AnimatedCountdownBackground />

            {/* Premium Background Effects */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent blur-[120px] rounded-full" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 to-transparent blur-[100px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center z-10">

                {/* Available in 6 Languages Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-premium">
                        <div className="flex -space-x-2">
                            {languages.slice(0, 3).map((l, i) => (
                                <span key={i} className="w-6 h-6 rounded-full border-2 border-[var(--background)] bg-slate-800 flex items-center justify-center text-xs shadow-lg z-[3-i]">
                                    {l.flag}
                                </span>
                            ))}
                            <div className="w-6 h-6 rounded-full border-2 border-[var(--background)] bg-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-lg z-0">
                                +3
                            </div>
                        </div>
                        <div className="h-4 w-px bg-white/10 mx-1" />
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Available in</span>
                            <motion.span
                                key={currentLangIndex}
                                initial={{ opacity: 0, x: 5 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-xs font-bold text-orange-400 uppercase tracking-widest min-w-[100px] text-left"
                            >
                                {languages[currentLangIndex].name}
                            </motion.span>
                        </div>
                    </div>
                </motion.div>



                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-6xl md:text-8xl lg:text-[10rem] font-display text-display text-[var(--foreground)] tracking-tight mb-10 max-w-6xl mx-auto leading-[0.8] break-words"
                >
                    {t.hero.headline} <br className="hidden md:block" />
                    <span className="text-gradient-primary italic">{t.hero.headlineHighlight}</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                >
                    {t.hero.subtext}
                </motion.p>

                {/* Feature Pills - Redesigned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-2xl flex items-center gap-3 backdrop-blur-md hover:bg-white/10 transition-colors group cursor-default shadow-lg"
                        >
                            <feature.icon className="w-4 h-4 text-orange-500 group-hover:scale-110 transition-transform" />
                            <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">{feature.label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Main Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-6"
                >
                    <a href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer" target="_blank" className="btn-premium group py-5 px-12 text-base shadow-2xl">
                        <span className="relative z-10 flex items-center gap-3">
                            {t.hero.downloadBtn}
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>

                    <button className="px-10 py-5 rounded-full font-bold text-[var(--foreground)] bg-white/5 hover:bg-white/10 transition-all flex items-center gap-3 text-base border border-white/10 hover:border-orange-500/30 backdrop-blur-md">
                        <Sparkles className="w-5 h-5 text-orange-500" />
                        {t.hero.exploreBtn}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
