"use client";

import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Changelog() {
    const { t } = useLocale();

    const versions = [
        {
            version: "2.0.1",
            date: t.changelog.v200.date,
            label: t.changelog.latest,
            changes: t.changelog.v200.changes
        },
        {
            version: "1.2.0",
            date: "Dec 31, 2025",
            changes: [
                "Complete 'Premium Minimal' Design Overhaul",
                "Bento Grid Layout for Features",
                "Unsplash API Integration (5M+ Photos)",
                "Scroll-driven Interactive Showcase",
            ]
        },
        {
            version: "1.1.0",
            date: "Dec 20, 2025",
            changes: [
                "Backup & Restore Functionality",
                "Calendar Import Feature",
                "Mobile Widgets Support",
            ]
        }
    ];

    return (
        <section id="changelog" className="bg-[var(--background)] py-28 md:py-40 pb-48 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-gradient-radial from-orange-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="badge-premium mb-6 inline-block">Updates</span>
                    <div className="flex items-center justify-center gap-5 mb-8">
                        <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20">
                            <RotateCcw className="w-8 h-8 text-orange-500" />
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] tracking-tight">
                            {t.changelog.title}
                        </h2>
                    </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-dashed border-white/10 ml-6 md:ml-12 space-y-16 pl-10 md:pl-16">

                    {versions.map((ver, i) => (
                        <motion.div
                            key={ver.version}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            {/* Node */}
                            <div className={`absolute -left-[53px] md:-left-[77px] top-1.5 w-5 h-5 rounded-full border-2 box-content bg-[var(--background)] ${i === 0 ? "border-orange-500 ring-4 ring-orange-500/20" : "border-white/20"}`} />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-5 mb-8">
                                <h3 className={`text-3xl md:text-4xl font-display ${i === 0 ? "text-[var(--foreground)]" : "text-slate-500"}`}>
                                    v{ver.version}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {ver.label && (
                                        <span className="px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-orange-500 text-white leading-none flex items-center gap-1.5">
                                            <Sparkles className="w-3 h-3" />
                                            {ver.label}
                                        </span>
                                    )}
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">{ver.date}</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                {ver.changes.map((change, j) => (
                                    <li key={j} className="flex items-start gap-4 text-base md:text-lg text-slate-400">
                                        <CheckCircle2 className={`w-6 h-6 mt-0.5 shrink-0 ${i === 0 ? "text-emerald-500" : "text-slate-600"}`} />
                                        <span className={i === 0 ? "text-slate-200" : ""}>{change}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
