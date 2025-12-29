"use client";

import { motion } from "framer-motion";
import { Plus, Bell, Smartphone } from "lucide-react";

const steps = [
    {
        title: "Create an Event",
        description: "Set a title, date, and pick a beautiful background.",
        icon: Plus,
        color: "bg-blue-500",
    },
    {
        title: "Set Reminders",
        description: "Choose your timing and let us handle the alerts.",
        icon: Bell,
        color: "bg-indigo-500",
    },
    {
        title: "Add Widgets",
        description: "Place beautiful countdowns on your home screen.",
        icon: Smartphone,
        color: "bg-emerald-500",
    },
];

export default function HowToUse() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-left mb-20 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight"
                    >
                        How it <span className="text-primary-500">works.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-xl md:text-2xl font-medium leading-relaxed">
                        Three simple steps to stay ahead of your schedule. Designed to be effortless.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="flex items-center gap-6 mb-8">
                                <div className={`w-16 h-16 rounded-[1.5rem] ${step.color} shadow-xl shadow-primary-500/10 flex items-center justify-center relative z-10 transition-transform group-hover:scale-110`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-7xl font-display text-[var(--foreground)] opacity-[0.03] italic select-none absolute right-0 top-0 md:relative md:opacity-[0.08] md:right-auto md:top-auto">
                                    0{index + 1}
                                </div>
                            </div>

                            <h3 className="text-2xl font-display text-[var(--foreground)] mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connector line for desktop */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-8 left-[calc(100%+2rem)] w-[calc(100%-4rem)] h-[1px] bg-slate-200/50" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Accent */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -z-10" />
        </section>
    );
}
