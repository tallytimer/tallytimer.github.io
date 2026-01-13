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
            borderGlow: "hover:shadow-orange-500/20"
        },
        {
            icon: Bell,
            title: t.features.reminders.title,
            description: t.features.reminders.description,
            tag: t.features.reminders.tag,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            borderGlow: "hover:shadow-blue-500/20"
        },
        {
            icon: "12",
            title: t.features.widgets.title,
            description: t.features.widgets.description,
            tag: t.features.widgets.tag,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            borderGlow: "hover:shadow-purple-500/20"
        },
        {
            icon: CalendarCheck,
            title: t.features.calendar.title,
            description: t.features.calendar.description,
            tag: t.features.calendar.tag,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            borderGlow: "hover:shadow-emerald-500/20"
        },
        {
            icon: Save,
            title: t.features.backup.title,
            description: t.features.backup.description,
            tag: t.features.backup.tag,
            color: "text-rose-500",
            bg: "bg-rose-500/10",
            borderGlow: "hover:shadow-rose-500/20"
        },
        {
            icon: LayoutDashboard,
            title: t.features.canvas.title,
            description: t.features.canvas.description,
            tag: t.features.canvas.tag,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            borderGlow: "hover:shadow-amber-500/20"
        }
    ];

    return (
        <section id="features" className="py-24 md:py-32 relative z-10">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-20 text-center max-w-3xl mx-auto"
                >
                    <span className="badge-premium mb-6 inline-block">Features</span>
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight break-words">{t.features.title}</h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto opacity-80">
                        {t.features.subtitle}
                    </p>
                </motion.div>

                {/* Uniform 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featureCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08 }}
                            className={`glass-card p-6 md:p-8 flex flex-col justify-between min-h-[300px] group shadow-premium ${card.borderGlow}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`p-3.5 ${card.bg} rounded-2xl ${card.color} group-hover:scale-110 transition-transform duration-500`}>
                                    {typeof card.icon === "string" ? (
                                        <div className="w-6 h-6 border-2 border-current rounded-lg flex items-center justify-center">
                                            <span className="text-xs font-bold">{card.icon}</span>
                                        </div>
                                    ) : (
                                        <card.icon className="w-6 h-6" />
                                    )}
                                </div>
                                <span className="px-2.5 py-1 bg-white/5 rounded-full text-[9px] font-bold uppercase tracking-widest text-slate-500 border border-white/5">{card.tag}</span>
                            </div>
                            <div className="space-y-3 relative z-10 flex-grow flex flex-col justify-end">
                                <h3 className="text-xl md:text-2xl font-display text-[var(--foreground)] tracking-tight">{card.title}</h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed opacity-90">
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
