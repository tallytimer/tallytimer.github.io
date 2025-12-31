"use client";

import { motion } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";

const versions = [
    {
        version: "2.0.0",
        date: "January 1, 2026",
        label: "Latest",
        changes: [
            "Stunning Visual Redesign",
            "Refined typography",
            "Optimized asset loading for a smoother experience",
            "Import events from calendar",
            "Export events backup"
        ]
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

export default function Changelog() {
    return (
        <section id="changelog" className="bg-[var(--background)] py-20 pb-40 overflow-hidden relative">
            <div className="max-w-4xl mx-auto px-6">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-16 md:mb-24"
                >
                    <div className="p-3 rounded-2xl bg-[var(--surface-highlight)] border border-[var(--border-color)]">
                        <RotateCcw className="w-6 h-6 text-orange-500" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-[var(--foreground)] tracking-tight">
                        Evolution
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative border-l-2 border-dashed border-[var(--border-color)] ml-4 md:ml-10 space-y-16 pl-10 md:pl-16">

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
                            <div className={`absolute -left-[49px] md:-left-[73px] top-1.5 w-4 h-4 rounded-full border-[3px] box-content bg-[var(--background)] ${i === 0 ? "border-orange-500 ring-4 ring-orange-500/20" : "border-slate-700"}`} />

                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-6">
                                <h3 className={`text-3xl font-display ${i === 0 ? "text-[var(--foreground)]" : "text-slate-500"}`}>
                                    v{ver.version}
                                </h3>
                                <div className="flex items-center gap-3">
                                    {ver.label && (
                                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest bg-orange-500 text-white">
                                            {ver.label}
                                        </span>
                                    )}
                                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{ver.date}</span>
                                </div>
                            </div>

                            <ul className="space-y-3">
                                {ver.changes.map((change, j) => (
                                    <li key={j} className="flex items-start gap-3 text-lg text-slate-400">
                                        <CheckCircle2 className={`w-5 h-5 mt-1 shrink-0 ${i === 0 ? "text-emerald-500" : "text-slate-600"}`} />
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
