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
        <section className="py-32 md:py-48 bg-[var(--background)] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-radial from-purple-500/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="badge-premium mb-6 inline-block">Why Choose Us</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight">
                        {t.whyTally.title} <span className="text-gradient-primary">{t.whyTally.titleHighlight}</span>?
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t.whyTally.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 lg:p-10 flex items-start gap-6 group shadow-premium"
                        >
                            <div className={`p-4 ${benefit.bg} rounded-2xl ${benefit.color} shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                                <benefit.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-display text-[var(--foreground)] mb-4 tracking-tight">
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
