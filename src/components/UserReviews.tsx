"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-2.5 h-2.5 ${i < rating ? "text-orange-500 fill-orange-500" : "text-slate-600"}`}
                />
            ))}
        </div>
    );
}

export default function UserReviews() {
    const { t } = useLocale();

    return (
        <section id="reviews" className="py-16 md:py-20 bg-[var(--background)] relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 md:mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-display text-[var(--foreground)] mb-3 tracking-tight">
                        {t.reviews.title} <span className="text-gradient-primary">{t.reviews.titleHighlight}</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                        {t.reviews.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    {t.reviews.users.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bento-card p-4 md:p-5 flex flex-col min-h-[220px]"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <Quote className="w-4 h-4 text-orange-500/30" />
                                <StarRating rating={5} />
                            </div>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed flex-grow mb-4">
                                &ldquo;{review.review}&rdquo;
                            </p>

                            <div className="flex items-center gap-2 pt-3 border-t border-[var(--border-color)]">
                                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-[10px]">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-display text-[var(--foreground)] text-[10px]">{review.name}</div>
                                    <div className="text-slate-500 text-[8px] uppercase tracking-wider">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
