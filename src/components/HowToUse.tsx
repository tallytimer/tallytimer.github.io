"use client";

import { motion } from "framer-motion";
import { Plus, Bell, Smartphone } from "lucide-react";

const steps = [
    {
        title: "Create an Event",
        description: "Set a title, date, and pick a beautiful background.",
        icon: Plus,
        color: "bg-blue-600",
    },
    {
        title: "Set Reminders",
        description: "Choose your timing and let us handle the alerts.",
        icon: Bell,
        color: "bg-indigo-600",
    },
    {
        title: "Add Widgets",
        description: "Place beautiful countdowns on your screen.",
        icon: Smartphone,
        color: "bg-emerald-600",
    },
];

export default function HowToUse() {
    return (
        <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-left mb-16 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-display text-[#0F172A] mb-8 tracking-tight"
                    >
                        How it <span className="text-blue-600">works.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-2xl font-medium leading-relaxed">Three simple steps to stay ahead of your schedule.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group"
                        >
                            <div className="relative mb-8 flex items-center gap-6">
                                <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-lg shadow-blue-100 flex items-center justify-center relative z-10 transition-transform group-hover:scale-105`}>
                                    <step.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-6xl font-display text-slate-100 italic select-none">0{index + 1}</div>
                            </div>

                            <h3 className="text-2xl font-display text-[#0F172A] mb-4">{step.title}</h3>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
