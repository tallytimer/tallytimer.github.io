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
                className="w-full p-6 md:p-8 flex items-center justify-between text-left"
            >
                <span className="text-lg md:text-xl font-display text-[var(--foreground)] pr-8 tracking-tight group-hover:text-orange-500 transition-colors opacity-90">
                    {question}
                </span>
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-white/5 text-slate-400 group-hover:text-orange-500 group-hover:bg-orange-500/10'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                        <p className="px-6 md:px-8 pb-8 text-slate-400 text-sm md:text-base font-medium leading-relaxed max-w-3xl opacity-80">
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
        <section id="faq" className="bg-[var(--background)] transition-colors duration-500 py-24 md:py-32 relative flex flex-col items-center">
            {/* Background Accent */}
            <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-gradient-radial from-purple-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16 md:mb-20">
                    <span className="badge-premium mb-6 inline-block">Support</span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight"
                    >
                        {t.faq.title} <span className="text-gradient-primary">{t.faq.titleHighlight}</span>
                    </motion.h2>
                    <p className="text-slate-400 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed opacity-80">
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
