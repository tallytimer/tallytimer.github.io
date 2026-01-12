"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-3 border border-[var(--border-color)] rounded-xl overflow-hidden bg-[var(--card-bg)] hover:border-orange-500/20 transition-all duration-300 group"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg md:text-xl font-display text-[var(--foreground)] pr-6 tracking-tight">
                    {question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-[var(--background)] text-slate-400 group-hover:text-orange-500'}`}>
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
                        <p className="px-5 md:px-6 pb-6 text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-3xl">
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
        <section id="faq" className="bg-[var(--background)] transition-colors duration-500 py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-left mb-10 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-display text-[var(--foreground)] mb-3 tracking-tight"
                    >
                        {t.faq.title} <span className="text-gradient-primary">{t.faq.titleHighlight}</span>
                    </motion.h2>
                    <p className="text-slate-500 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                        {t.faq.subtitle}
                    </p>
                </div>

                <div className="space-y-3">
                    {t.faq.questions.map((faq, index) => (
                        <FAQItem key={index} index={index} question={faq.q} answer={faq.a} />
                    ))}
                </div>
            </div>
        </section>
    );
}
