"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Milestone } from "lucide-react";

const versions = [
    {
        version: "1.0.1",
        date: "Dec 2024",
        changes: [
            "Added most recent event widget for instant tracking.",
            "Optimized system performance and overall user experience.",
            "Addressed minor bugs and resolved reported crash issues.",
        ],
    },
    {
        version: "1.0.0",
        date: "Nov 2024",
        changes: [
            "Major UI redesign for the Create and Update event screens.",
            "Refined reminder logic for improved reliability.",
            "Significant reduction in app size for faster installation.",
            "Comprehensive performance tuning and UI polish.",
            "Resolved stability issues and addressed user feedback.",
        ],
    },
    {
        version: "0.0.3",
        date: "Jul 2024",
        changes: [
            "Initial beta release featuring core countdown functionality.",
            "Support for custom backgrounds and basic reminders.",
        ],
    },
];

export default function Changelog() {
    return (
        <section id="changelog" className="bg-[var(--background)] py-24 md:py-32 transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-20 text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight"
                    >
                        Evolution of <span className="text-primary-500">TallyTimer.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                        A history of progress. Every update brings us closer to the perfect time management companion.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-primary-500/10 md:-translate-x-1/2" />

                    <div className="space-y-16 md:space-y-24">
                        {versions.map((ver, i) => (
                            <motion.div
                                key={ver.version}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center`}
                            >
                                {/* Connector Dot */}
                                <div className="absolute left-[-1px] md:left-1/2 w-10 h-10 rounded-full bg-[var(--background)] border-4 border-primary-500/20 flex items-center justify-center md:-translate-x-1/2 z-10">
                                    <div className="w-3 h-3 rounded-full bg-primary-500" />
                                </div>

                                <div className={`w-full md:w-[45%] pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"}`}>
                                    <div className="inline-flex items-center gap-2 mb-4">
                                        <Milestone className={`w-6 h-6 ${i % 2 === 0 ? "md:order-last" : ""} text-primary-500`} />
                                        <span className="text-2xl md:text-4xl font-display text-[var(--foreground)] tracking-tight">v{ver.version}</span>
                                    </div>
                                    {ver.date && (
                                        <p className="text-primary-500 font-bold tracking-widest uppercase text-xs mb-4">{ver.date}</p>
                                    )}
                                </div>

                                <div className="hidden md:block w-[10%]" />

                                <div className={`w-full md:w-[45%] pl-14 md:pl-0 mt-4 md:mt-0`}>
                                    <div className="p-8 md:p-10 rounded-[2.5rem] bg-[var(--card-bg)] border border-[var(--border-color)] hover:shadow-2xl hover:shadow-primary-500/5 transition-all duration-500">
                                        <ul className="space-y-6">
                                            {ver.changes.map((change, j) => (
                                                <li key={j} className="flex gap-4 text-slate-500 font-medium leading-relaxed text-[15px] md:text-base">
                                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-1" />
                                                    <span>{change}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
