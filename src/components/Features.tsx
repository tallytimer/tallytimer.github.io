"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, Layout, Smartphone, MousePointer2, ShieldCheck } from "lucide-react";

const features = [
    {
        title: "CUSTOM BACKGROUNDS",
        description: "Personalize your events with stunning images from our gallery or your own photos.",
        icon: Layout,
        span: "col-span-1 md:col-span-2",
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "SMART REMINDERS",
        description: "Set reminders for 30 minutes, 2 hours, or days in advance.",
        icon: Bell,
        span: "col-span-1 md:col-span-1",
        color: "bg-indigo-50 text-indigo-600",
    },
    {
        title: "LOCKSCREEN WIDGETS",
        description: "Display beautiful countdowns directly on your lockscreen.",
        icon: Smartphone,
        span: "col-span-1 md:col-span-1",
        color: "bg-purple-50 text-purple-600",
    },
    {
        title: "UPCOMING SYNC",
        description: "Soon you can sync with Taylor's MyTimes and Google Calendar.",
        icon: Calendar,
        span: "col-span-1 md:col-span-2",
        color: "bg-emerald-50 text-emerald-600",
    },
    {
        title: "EASY TO USE",
        description: "Simple, intuitive interface designed for a seamless experience.",
        icon: MousePointer2,
        span: "col-span-1 md:col-span-1",
        color: "bg-orange-50 text-orange-600",
    },
    {
        title: "RELIABLE ALERTS",
        description: "Never miss a date or deadline with our rock-solid notifications.",
        icon: ShieldCheck,
        span: "col-span-1 md:col-span-1",
        color: "bg-rose-50 text-rose-600",
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-slate-50/30">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-16 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display text-[#0F172A] mb-8 tracking-tight"
                    >
                        Essential features <br />
                        <span className="text-blue-600">for daily focus.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                        TallyTimer is packed with features to help you stay organized without the clutter.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 ${feature.span} group`}
                        >
                            <div className={`w-12 h-12 rounded-2xl ${feature.color} mb-6 flex items-center justify-center transition-transform group-hover:scale-110`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold text-[#0F172A] mb-3">{feature.title}</h3>
                            <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
