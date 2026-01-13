"use client";

import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw, Sparkles, TrendingUp, History } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Evolution() {
    const { t } = useLocale();

    const versions = [
        {
            version: "2.0.1",
            date: t.changelog.v200.date,
            label: t.changelog.latest,
            highlight: true,
            changes: t.changelog.v200.changes
        },
        {
            version: "1.2.0",
            date: "Dec 31, 2024",
            changes: [
                "Complete 'Premium Minimal' Design Overhaul",
                "Bento Grid Layout for Features",
                "Unsplash API Integration (5M+ Photos)",
                "Scroll-driven Interactive Showcase",
            ]
        },
        {
            version: "1.1.0",
            date: "Dec 20, 2024",
            changes: [
                "Backup & Restore Functionality",
                "Calendar Import Feature",
                "Mobile Widgets Support",
            ]
        }
    ];

    return (
        <section id="changelog" className="bg-[var(--background)] py-28 md:py-40 relative flex flex-col items-center">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Section Header */}
                <div className="text-center mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-lg"
                    >
                        <TrendingUp className="w-3.5 h-3.5" />
                        Our Journey
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl lg:text-8xl font-display text-[var(--foreground)] tracking-tighter mb-8 break-words"
                    >
                        The <span className="text-gradient-primary">Evolution</span>
                    </motion.h2>
                    <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Constantly refining, polishing, and adding new dimensions to your countdown experience.
                    </p>
                </div>

                {/* Timeline Redesign - Left aligned on mobile, centered on desktop */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-white/10 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-32">
                        {versions.map((ver, idx) => (
                            <motion.div
                                key={ver.version}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-orange-500 ring-4 ring-orange-500/20 z-20 -translate-x-1/2 md:-translate-y-1/2" />

                                {/* Content Card */}
                                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`p-6 md:p-8 rounded-[2rem] glass-card ${ver.highlight ? 'border-orange-500/30 ring-1 ring-orange-500/10' : 'border-white/5'} shadow-premium relative group hover:scale-[1.01] transition-transform duration-500`}>

                                        {ver.highlight && (
                                            <div className="absolute -top-3 left-6 md:left-auto md:right-6 px-3 py-1 rounded-full bg-orange-500 text-white text-[9px] font-bold uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                                                <Sparkles className="w-2.5 h-2.5" />
                                                {ver.label}
                                            </div>
                                        )}

                                        <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-5`}>
                                            <span className="text-[10px] md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">{ver.date}</span>
                                            <h3 className="text-2xl md:text-3xl font-display text-[var(--foreground)] tracking-tight">Version {ver.version}</h3>
                                        </div>

                                        <ul className={`space-y-3 ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                            {ver.changes.map((change, j) => (
                                                <li key={j} className={`flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                    <CheckCircle2 className={`w-4 h-4 mt-1 shrink-0 ${ver.highlight ? 'text-orange-500' : 'text-slate-600'}`} />
                                                    <span className="text-xs md:text-base font-medium leading-normal">{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Opposite side spacing */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-32 flex flex-col items-center gap-4 text-slate-500"
                >
                    <History className="w-6 h-6 md:w-8 md:h-8 opacity-20" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40">End of Journey</span>
                </motion.div>
            </div>
        </section>
    );
}
