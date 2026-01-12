"use client";

import { motion } from "framer-motion";
import { Plus, Bell, Smartphone, Save } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function HowToUse() {
    const { t } = useLocale();

    const steps = [
        {
            title: t.howTo.step1.title,
            description: t.howTo.step1.description,
            icon: Plus,
        },
        {
            title: t.howTo.step2.title,
            description: t.howTo.step2.description,
            icon: Bell,
        },
        {
            title: t.howTo.step3.title,
            description: t.howTo.step3.description,
            icon: Save,
        },
        {
            title: t.howTo.step4.title,
            description: t.howTo.step4.description,
            icon: Smartphone,
        },
    ];

    return (
        <section id="how-it-works" className="py-20 md:py-24 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-left mb-12 md:mb-16 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-4 tracking-tight"
                    >
                        {t.howTo.title} <span className="text-gradient-primary">{t.howTo.titleHighlight}</span>
                    </motion.h2>
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                        {t.howTo.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--surface-highlight)] border border-white/5 shadow-xl flex items-center justify-center relative z-10 transition-transform group-hover:scale-105 group-hover:border-orange-500/30">
                                    <step.icon className="w-5 h-5 text-orange-500" />
                                </div>
                                <div className="text-5xl font-display text-[var(--foreground)] opacity-[0.05] italic select-none">
                                    0{index + 1}
                                </div>
                            </div>

                            <h3 className="text-xl font-display text-[var(--foreground)] mb-2 tracking-tight">{step.title}</h3>
                            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
