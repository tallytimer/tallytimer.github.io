"use client";

import { motion } from "framer-motion";
import { Bell, CalendarCheck, Palette, Save } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Features() {
    const { t } = useLocale();

    const featureCards = [
        {
            icon: Palette,
            title: t.features.customBg.title,
            description: t.features.customBg.description,
            tag: t.features.customBg.tag,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            delay: 0
        },
        {
            icon: Bell,
            title: t.features.reminders.title,
            description: t.features.reminders.description,
            tag: t.features.reminders.tag,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            delay: 0.1
        },
        {
            icon: "12",
            title: t.features.widgets.title,
            description: t.features.widgets.description,
            tag: t.features.widgets.tag,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            delay: 0.2
        },
        {
            icon: CalendarCheck,
            title: t.features.calendar.title,
            description: t.features.calendar.description,
            tag: t.features.calendar.tag,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            delay: 0.3
        },
        {
            icon: Save,
            title: t.features.backup.title,
            description: t.features.backup.description,
            tag: t.features.backup.tag,
            color: "text-rose-500",
            bg: "bg-rose-500/10",
            delay: 0.4,
            wide: true
        }
    ];

    return (
        <section id="features" className="py-20 relative z-10">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 md:mb-16 text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-display text-[var(--foreground)] mb-4">{t.features.title}</h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
                        {t.features.subtitle}
                    </p>
                </motion.div>

                {/* Uniform Grid - 3 cols on desktop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featureCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay }}
                            className={`bento-card p-6 flex flex-col justify-between group ${card.wide ? "md:col-span-2 lg:col-span-2 min-h-[240px]" : "min-h-[280px]"}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className={`p-2.5 ${card.bg} rounded-xl ${card.color}`}>
                                    {typeof card.icon === "string" ? (
                                        <div className="w-6 h-6 border-2 border-current rounded-md flex items-center justify-center">
                                            <span className="text-[10px] font-bold">{card.icon}</span>
                                        </div>
                                    ) : (
                                        <card.icon className="w-6 h-6" />
                                    )}
                                </div>
                                <span className="px-2.5 py-0.5 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-white/5">{card.tag}</span>
                            </div>
                            <div className="space-y-2 relative z-10 pt-4">
                                <h3 className="text-xl font-display text-[var(--foreground)]">{card.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                    {card.description}
                                </p>
                            </div>
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
