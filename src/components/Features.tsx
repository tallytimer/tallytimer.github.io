"use client";

import { motion } from "framer-motion";
import { Bell, CalendarCheck, Palette, Save, LayoutDashboard } from "lucide-react";
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
            delay: 0.4
        },
        {
            icon: LayoutDashboard,
            title: t.features.canvas.title,
            description: t.features.canvas.description,
            tag: t.features.canvas.tag,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            delay: 0.5,
            wide: true
        }
    ];

    return (
        <section id="features" className="py-24 md:py-32 relative z-10">
            <div className="max-w-6xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight">{t.features.title}</h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        {t.features.subtitle}
                    </p>
                </motion.div>

                {/* Uniform Grid - 3 cols on desktop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {featureCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: card.delay }}
                            className={`bento-card p-8 md:p-10 flex flex-col justify-between group ${card.wide ? "md:col-span-2 lg:col-span-2 min-h-[280px]" : "min-h-[340px]"}`}
                        >
                            <div className="flex justify-between items-start">
                                <div className={`p-3.5 ${card.bg} rounded-2xl ${card.color}`}>
                                    {typeof card.icon === "string" ? (
                                        <div className="w-7 h-7 border-2 border-current rounded-lg flex items-center justify-center">
                                            <span className="text-xs font-bold">{card.icon}</span>
                                        </div>
                                    ) : (
                                        <card.icon className="w-7 h-7" />
                                    )}
                                </div>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[11px] font-bold uppercase tracking-widest text-slate-400 border border-white/5">{card.tag}</span>
                            </div>
                            <div className="space-y-3 relative z-10 pt-6">
                                <h3 className="text-2xl md:text-3xl font-display text-[var(--foreground)] tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md">
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
