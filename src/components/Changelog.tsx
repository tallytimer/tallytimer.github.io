"use client";

import { motion } from "framer-motion";

const releases = [
    {
        version: "v1.0.0",
        date: "July 2024",
        changes: [
            "Initial launch on Google Play Store",
            "Custom countdown widgets",
            "Smart reminders system",
            "Curated gallery backgrounds",
        ],
    },
    {
        version: "v0.9.5-beta",
        date: "June 2024",
        changes: [
            "Closed beta testing",
            "Performance optimizations",
            "UI/UX refinements",
        ],
    },
];

export default function Changelog() {
    return (
        <section id="changelog" className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-display text-[#0F172A] mb-8 tracking-tight"
                    >
                        Latest <span className="text-blue-600">updates.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-2xl font-medium">The journey of building your favorite countdown app.</p>
                </div>

                <div className="space-y-12">
                    {releases.map((release, index) => (
                        <motion.div
                            key={release.version}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-10 border-l-4 border-slate-50"
                        >
                            <div className="absolute top-0 left-[-4px] w-1 h-8 bg-blue-600 rounded-full" />

                            <div className="mb-6">
                                <span className="text-3xl font-display text-[#0F172A] mr-4">{release.version}</span>
                                <span className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">{release.date}</span>
                            </div>

                            <ul className="grid sm:grid-cols-2 gap-4">
                                {release.changes.map((change, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-500 text-lg font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600/20 flex-shrink-0" />
                                        {change}
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
