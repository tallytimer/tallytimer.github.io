"use client";

import { motion } from "framer-motion";
import { Plus, Bell, Calendar, Layout } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function HowToUse() {
    const { t } = useLocale();

    const steps = [
        {
            icon: Plus,
            title: t.howTo.step1.title,
            description: t.howTo.step1.description,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            num: "01"
        },
        {
            icon: Bell,
            title: t.howTo.step2.title,
            description: t.howTo.step2.description,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            num: "02"
        },
        {
            icon: Calendar,
            title: t.howTo.step3.title,
            description: t.howTo.step3.description,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            num: "03"
        },
        {
            icon: Layout,
            title: t.howTo.step4.title,
            description: t.howTo.step4.description,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            num: "04"
        }
    ];

    return (
        <section id="how-it-works" className="py-32 md:py-48 bg-[var(--background)]">
            {/* Background Accent */}
            <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-gradient-radial from-blue-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="badge-premium mb-6 inline-block">Simple Steps</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight">
                        {t.howTo.title} <span className="text-gradient-primary">{t.howTo.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t.howTo.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col items-center text-center group relative shadow-premium"
                        >
                            {/* Step Number */}
                            <span className="absolute top-4 right-4 text-5xl font-display font-bold text-white/5">{step.num}</span>

                            <div className={`p-4 ${step.bg} rounded-2xl ${step.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-display text-[var(--foreground)] mb-4 tracking-tight">
                                {step.title}
                            </h3>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
