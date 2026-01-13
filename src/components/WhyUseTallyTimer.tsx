"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Layout, Target } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function WhyUseTallyTimer() {
    const { t } = useLocale();

    const benefits = [
        {
            icon: Zap,
            title: t.whyTally.productivity.title,
            description: t.whyTally.productivity.description,
            color: "text-orange-500",
            bg: "bg-orange-500/10"
        },
        {
            icon: Target,
            title: t.whyTally.countdowns.title,
            description: t.whyTally.countdowns.description,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: Shield,
            title: t.whyTally.security.title,
            description: t.whyTally.security.description,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            icon: Layout,
            title: t.whyTally.widgets.title,
            description: t.whyTally.widgets.description,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight">
                        {t.whyTally.title} <span className="text-gradient-primary">{t.whyTally.titleHighlight}</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t.whyTally.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card p-8 md:p-10 flex items-start gap-6"
                        >
                            <div className={`p-4 ${benefit.bg} rounded-2xl ${benefit.color} shrink-0`}>
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-display text-[var(--foreground)] mb-3 tracking-tight">
                                    {benefit.title}
                                </h3>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
