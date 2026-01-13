"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, TrendingUp, History, Rocket } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Evolution() {
    const { t } = useLocale();

    const versions = [
        {
            version: "2.0.1",
            date: t.changelog.v200.date,
            label: t.changelog.latest,
            highlight: true,
            changes: t.changelog.v200.changes,
            icon: Rocket
        },
        {
            version: "1.2.0",
            date: "Dec 31, 2024",
            changes: [
                "Complete 'Premium Minimal' Design Overhaul",
                "Bento Grid Layout for Features",
                "Unsplash API Integration (5M+ Photos)",
                "Scroll-driven Interactive Showcase",
            ],
            icon: Sparkles
        },
        {
            version: "1.1.0",
            date: "Dec 20, 2024",
            changes: [
                "Backup & Restore Functionality",
                "Calendar Import Feature",
                "Mobile Widgets Support",
            ],
            icon: CheckCircle2
        }
    ];

    return (
        <section id="changelog" className="bg-[var(--background)] py-32 md:py-48 relative flex flex-col items-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-orange-500/[0.02] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Section Header */}
                <div className="text-center mb-24 md:mb-40">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 shadow-sm"
                    >
                        <TrendingUp className="w-3.5 h-3.5" />
                        Our Evolution
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl lg:text-9xl font-display text-[var(--foreground)] tracking-tighter mb-10 leading-[0.9]"
                    >
                        Growth in <span className="text-gradient-primary italic">Motion</span>
                    </motion.h2>
                    <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed opacity-80">
                        Every update is a step toward perfection. Explore the journey of TallyTimer.
                    </p>
                </div>

                {/* Timeline Design - Refined for perfect alignment */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/40 via-white/5 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-24 md:space-y-48">
                        {versions.map((ver, idx) => (
                            <motion.div
                                key={ver.version}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node with Icon */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 md:top-1/2 w-10 h-10 -translate-x-1/2 md:-translate-y-1/2 z-30 flex items-center justify-center">
                                    <div className={`w-full h-full rounded-full ${ver.highlight ? 'bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.5)]' : 'bg-slate-900 border border-white/20'} flex items-center justify-center`}>
                                        <ver.icon className={`w-5 h-5 ${ver.highlight ? 'text-white' : 'text-slate-400'}`} />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-[42%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                    <div className={`relative group`}>
                                        <div className="mb-4">
                                            <span className="text-xs font-bold text-orange-500/60 uppercase tracking-[0.3em] mb-3 block">{ver.date}</span>
                                            <h3 className="text-3xl md:text-5xl font-display text-[var(--foreground)] tracking-tighter mb-6 group-hover:text-orange-400 transition-colors duration-500">
                                                v{ver.version}
                                            </h3>
                                        </div>

                                        <div className={`p-8 md:p-10 rounded-[2.5rem] glass-card ${ver.highlight ? 'border-orange-500/20' : 'border-white/5'} shadow-premium relative bg-white/[0.02] backdrop-blur-3xl overflow-visible`}>
                                            {ver.highlight && (
                                                <div className="absolute -top-4 left-8 md:left-auto md:right-8 px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                                    {ver.label}
                                                </div>
                                            )}

                                            <ul className={`space-y-5 ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                                {ver.changes.map((change, j) => (
                                                    <li key={j} className={`flex items-start gap-4 text-slate-300 group-hover:text-white transition-colors duration-300 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                        <div className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${ver.highlight ? 'bg-orange-500' : 'bg-slate-700'}`} />
                                                        <span className="text-base md:text-lg font-medium leading-snug">{change}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Date/Visual Side (Optional for more balance) */}
                                <div className="hidden md:flex md:w-[42%] items-center justify-center">
                                    <div className="opacity-10 font-display text-8xl pointer-events-none select-none">
                                        {ver.version.split('.')[0]}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-32 md:mt-48 flex flex-col items-center gap-6"
                >
                    <div className="w-px h-24 bg-gradient-to-b from-orange-500/20 to-transparent" />
                    <History className="w-10 h-10 text-orange-500/20" />
                    <span className="text-xs font-bold uppercase tracking-[0.5em] text-slate-500 opacity-40">More to come</span>
                </motion.div>
            </div>
        </section>
    );
}
