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
                    className={`w-4 h-4 ${i < rating ? "text-orange-500 fill-orange-500" : "text-slate-600"}`}
                />
            ))}
        </div>
    );
}

export default function UserReviews() {
    const { t } = useLocale();

    return (
        <section id="reviews" className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden flex flex-col items-center">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-radial from-emerald-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="badge-premium mb-6 inline-block">Testimonials</span>
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6 tracking-tight">
                        {t.reviews.title} <span className="text-gradient-primary">{t.reviews.titleHighlight}</span>
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed opacity-80">
                        {t.reviews.subtitle}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {t.reviews.users.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card p-6 flex flex-col min-h-[300px] group shadow-premium"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <Quote className="w-8 h-8 text-orange-500/20 group-hover:text-orange-500/40 transition-colors" />
                                <StarRating rating={5} />
                            </div>

                            <p className="text-slate-300 text-sm md:text-base leading-relaxed flex-grow mb-6 opacity-90">
                                &ldquo;{review.review}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-display text-[var(--foreground)] text-sm">{review.name}</div>
                                    <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{review.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
