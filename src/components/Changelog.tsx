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
        <section id="changelog" className="bg-[var(--background)] py-24 md:py-32 relative flex flex-col items-center overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 w-full">

                {/* Section Header */}
                <div className="text-center mb-20 md:mb-28">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="badge-premium mb-6"
                    >
                        <TrendingUp className="w-3.5 h-3.5" />
                        Our Evolution
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] tracking-tight mb-6"
                    >
                        Growth in <span className="text-gradient-primary">Motion</span>
                    </motion.h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed opacity-80">
                        Every update is a step toward perfection. Explore the journey of TallyTimer.
                    </p>
                </div>

                {/* Timeline Design - Balanced for all screen sizes */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/20 via-white/5 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-16 md:space-y-24">
                        {versions.map((ver, idx) => (
                            <motion.div
                                key={ver.version}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Node */}
                                <div className="absolute left-[18px] md:left-1/2 top-0 md:top-1/2 w-9 h-9 -translate-x-1/2 md:-translate-y-1/2 z-30 flex items-center justify-center">
                                    <div className={`w-full h-full rounded-full ${ver.highlight ? 'bg-orange-500' : 'bg-slate-900 border border-white/10'} flex items-center justify-center shadow-lg`}>
                                        <ver.icon className={`w-4 h-4 ${ver.highlight ? 'text-white' : 'text-slate-400'}`} />
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                                    <div className="p-6 md:p-8 rounded-[2rem] glass-card border-white/5 relative group bg-white/[0.01]">
                                        {ver.highlight && (
                                            <div className="absolute -top-3 left-6 md:left-auto md:right-6 px-3 py-1 rounded-full bg-orange-500 text-white text-[9px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1.5">
                                                <Sparkles className="w-2.5 h-2.5" />
                                                {ver.label}
                                            </div>
                                        )}

                                        <div className="mb-4">
                                            <span className="text-[10px] font-bold text-orange-500/60 uppercase tracking-widest mb-1 block">{ver.date}</span>
                                            <h3 className="text-xl md:text-2xl font-display text-[var(--foreground)] tracking-tight">Version {ver.version}</h3>
                                        </div>

                                        <ul className={`space-y-3 ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                                            {ver.changes.map((change, j) => (
                                                <li key={j} className={`flex items-start gap-3 text-slate-400 text-sm md:text-base leading-relaxed ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                                    <div className={`w-1 h-1 rounded-full mt-2.5 shrink-0 ${ver.highlight ? 'bg-orange-500' : 'bg-slate-700'}`} />
                                                    <span>{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Spacer for desktop zig-zag */}
                                <div className="hidden md:block w-[45%]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 md:mt-32 flex flex-col items-center gap-4 text-slate-500"
                >
                    <History className="w-6 h-6 opacity-20" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-40">More to come</span>
                </motion.div>
            </div>
        </section>
    );
}
