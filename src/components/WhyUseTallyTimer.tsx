"use client";

import { motion } from "framer-motion";
import { Zap, Timer, Shield, LayoutGrid } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function WhyUseTallyTimer() {
    const { t } = useLocale();

    const benefits = [
        {
            icon: Zap,
            title: t.whyTally.productivity.title,
            description: t.whyTally.productivity.description,
            color: "orange",
            gradient: "from-orange-500/10"
        },
        {
            icon: Timer,
            title: t.whyTally.countdowns.title,
            description: t.whyTally.countdowns.description,
            color: "blue",
            gradient: "from-blue-500/10"
        },
        {
            icon: Shield,
            title: t.whyTally.security.title,
            description: t.whyTally.security.description,
            color: "emerald",
            gradient: "from-emerald-500/10"
        },
        {
            icon: LayoutGrid,
            title: t.whyTally.widgets.title,
            description: t.whyTally.widgets.description,
            color: "purple",
            gradient: "from-purple-500/10"
        }
    ];

    const colorMap: Record<string, { bg: string; text: string }> = {
        orange: { bg: "bg-orange-500/10", text: "text-orange-500" },
        blue: { bg: "bg-blue-500/10", text: "text-blue-500" },
        emerald: { bg: "bg-emerald-500/10", text: "text-emerald-500" },
        purple: { bg: "bg-purple-500/10", text: "text-purple-500" }
    };

    return (
        <section id="why-tallytimer" className="py-16 md:py-20 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display text-[var(--foreground)] mb-3 tracking-tight">
                        {t.whyTally.title} <span className="text-gradient-primary">{t.whyTally.titleHighlight}</span>?
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                        {t.whyTally.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card p-5 group"
                        >
                            <div className={`w-9 h-9 rounded-xl ${colorMap[benefit.color].bg} flex items-center justify-center mb-3`}>
                                <benefit.icon className={`w-4 h-4 ${colorMap[benefit.color].text}`} />
                            </div>

                            <h3 className="text-base md:text-lg font-display text-[var(--foreground)] mb-1.5 tracking-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
