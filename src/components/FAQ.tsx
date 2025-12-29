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
        answer: "Yes, we will be introducing subscriptions soon. However, all test users will receive a promo code for lifetime free access."
    },
    {
        question: "How can I use the promo code for lifetime free access?",
        answer: "All test users will receive an email with the promo code. Follow the instructions in the email to redeem your lifetime free access."
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
            className="mb-2 border border-slate-100 rounded-2xl overflow-hidden bg-white hover:border-slate-200 transition-colors"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex items-center justify-between text-left group"
            >
                <span className="text-xl font-display text-[#0F172A]">
                    {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}>
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
                        <p className="px-6 pb-6 text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
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
        <section id="faq" className="bg-slate-50/50">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-left mb-16 max-w-2xl">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-5xl md:text-7xl font-display text-[#0F172A] mb-8 tracking-tight"
                    >
                        Common <span className="text-blue-600">questions.</span>
                    </motion.h2>
                    <p className="text-slate-500 text-2xl font-medium">Everything you need to know about TallyTimer.</p>
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
