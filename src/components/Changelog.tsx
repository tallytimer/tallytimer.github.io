"use client";

import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Changelog() {
    const { t } = useLocale();

    const versions = [
        {
            version: "2.0.0",
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
        },
        {
            version: "1.0.0",
            date: "Nov 15, 2025",
            changes: [
                "Initial Public Release",
                "Core Countdown Engine",
                "Custom Event Creation",
            ]
        }
    ];

    return (
        <section id="changelog" className="bg-[var(--background)] py-16 pb-32 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-12 md:mb-16"
                >
                    <div className="p-2.5 rounded-xl bg-[var(--surface-highlight)] border border-[var(--border-color)]">
                        <RotateCcw className="w-5 h-5 text-orange-500" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display text-[var(--foreground)] tracking-tight">
                        {t.changelog.title}
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-dashed border-[var(--border-color)] ml-3 md:ml-8 space-y-12 pl-8 md:pl-12">

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
                            <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-3 h-3 rounded-full border-2 box-content bg-[var(--background)] ${i === 0 ? "border-orange-500 ring-2 ring-orange-500/20" : "border-slate-700"}`} />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-1.5 md:gap-3 mb-4">
                                <h3 className={`text-2xl font-display ${i === 0 ? "text-[var(--foreground)]" : "text-slate-500"}`}>
                                    v{ver.version}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {ver.label && (
                                        <span className="px-1.5 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest bg-orange-500 text-white leading-none">
                                            {ver.label}
                                        </span>
                                    )}
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none">{ver.date}</span>
                                </div>
                            </div>

                            <ul className="space-y-2">
                                {ver.changes.map((change, j) => (
                                    <li key={j} className="flex items-start gap-2 text-sm md:text-base text-slate-400">
                                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${i === 0 ? "text-emerald-500" : "text-slate-600"}`} />
                                        <span className={i === 0 ? "text-slate-300" : ""}>{change}</span>
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
