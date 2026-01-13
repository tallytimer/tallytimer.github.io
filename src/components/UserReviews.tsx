"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < rating ? "text-orange-500 fill-orange-500" : "text-slate-600"}`}
                />
            ))}
        </div>
    );
}

export default function UserReviews() {
    const { t } = useLocale();

    return (
        <section id="reviews" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight">
                        {t.reviews.title} <span className="text-gradient-primary">{t.reviews.titleHighlight}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        {t.reviews.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {t.reviews.users.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bento-card p-6 md:p-8 flex flex-col min-h-[300px]"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <Quote className="w-6 h-6 text-orange-500/30" />
                                <StarRating rating={5} />
                            </div>

                            <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow mb-6">
                                &ldquo;{review.review}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xs">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-display text-[var(--foreground)] text-xs md:text-sm">{review.name}</div>
                                    <div className="text-slate-500 text-[10px] uppercase tracking-widest">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
