"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-4 glass-card overflow-hidden group shadow-premium"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 lg:p-8 flex items-center justify-between text-left"
            >
                <span className="text-xl md:text-2xl font-display text-[var(--foreground)] pr-8 tracking-tight group-hover:text-orange-500 transition-colors">
                    {question}
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-white/5 text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-500/10'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <p className="px-6 lg:px-8 pb-8 text-slate-400 text-base md:text-lg font-medium leading-relaxed max-w-4xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    const { t } = useLocale();

    return (
        <section id="faq" className="bg-[var(--background)] transition-colors duration-500 py-28 md:py-40 relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-radial from-purple-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="badge-premium mb-6 inline-block">Support</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight"
                    >
                        {t.faq.title} <span className="text-gradient-primary">{t.faq.titleHighlight}</span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-4">
                    {t.faq.questions.map((faq, index) => (
                        <FAQItem key={index} index={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}
