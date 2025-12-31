"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is TallyTimer?",
        answer: "TallyTimer is an event reminder and countdown app designed to keep you organized and ahead of your schedule. It offers custom reminders, beautiful home screen widgets, and the ability to share event posters on social media."
    },
    {
        question: "How can I get TallyTimer?",
        answer: "You can download TallyTimer from the Google Play Store (direct APK download also available). The iOS version will be available later this year."
    },
    {
        question: "Will TallyTimer be available for iOS?",
        answer: "Yes, we initially launched TallyTimer for Android, but the iOS version is currently in development and will be available later this fall."
    },
    {
        question: "How can I give feedback on the app?",
        answer: "You can provide feedback by rating and reviewing the app on the Google Play Store. Additionally, you can contact us via email at support@tallytimer.com."
    },
    {
        question: "Will there be any subscription fees?",
        answer: "Yes, we will be introducing subscriptions soon. However, all beta testers and early adopters will receive a promo code for lifetime free access to premium features."
    },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="mb-4 border border-[var(--border-color)] rounded-2xl overflow-hidden bg-[var(--card-bg)] hover:border-primary-500/30 transition-all duration-300 group"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
            >
                <span className="text-xl md:text-2xl font-display text-[var(--foreground)] pr-8 tracking-tight">
                    {faq.question}
                </span>
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-[1rem] flex items-center justify-center transition-all duration-500 shrink-0 ${isOpen ? 'bg-primary-500 text-white rotate-180' : 'bg-[var(--background)] text-slate-400 group-hover:text-primary-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <p className="px-6 md:px-8 pb-8 text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default function FAQ() {
    return (
        <section id="faq" className="bg-[var(--background)] transition-colors duration-500 py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-left mb-16 md:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight"
                    >
                        Common <span className="text-primary-500">questions.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                        Everything you need to know about TallyTimer. If you have more questions, we&apos;re here to help.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
