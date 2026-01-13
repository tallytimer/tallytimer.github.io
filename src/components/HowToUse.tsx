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
            bg: "bg-orange-500/10"
        },
        {
            icon: Bell,
            title: t.howTo.step2.title,
            description: t.howTo.step2.description,
            color: "text-blue-500",
            bg: "bg-blue-500/10"
        },
        {
            icon: Calendar,
            title: t.howTo.step3.title,
            description: t.howTo.step3.description,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            icon: Layout,
            title: t.howTo.step4.title,
            description: t.howTo.step4.description,
            color: "text-purple-500",
            bg: "bg-purple-500/10"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight">
                        {t.howTo.title} <span className="text-gradient-primary">{t.howTo.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t.howTo.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bento-card p-8 flex flex-col items-center text-center group"
                        >
                            <div className={`p-4 ${step.bg} rounded-2xl ${step.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-display text-[var(--foreground)] mb-4 tracking-tight">
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
