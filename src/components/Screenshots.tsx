"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { X, Maximize2, Info, Star } from "lucide-react";

const screenshots = [
    {
        src: "/images/screenshots/1.png",
        title: "Event Dashboard",
        description: "Get a clear bird's-eye view of all your upcoming events."
    },
    {
        src: "/images/screenshots/2.png",
        title: "Beautiful Backgrounds",
        description: "Personalize your countdowns with curated imagery."
    },
    {
        src: "/images/screenshots/3.png",
        title: "Precision Timing",
        description: "Count down to the exact second for those high-stakes moments."
    },
    {
        src: "/images/screenshots/4.png",
        title: "Home Screen Widgets",
        description: "Keep your favorite events front and center on your Android home screen."
    },
    {
        src: "/images/screenshots/5.png",
        title: "Smart Notifications",
        description: "Custom reminders that adapt to your schedule."
    },
    {
        src: "/images/screenshots/6.png",
        title: "Social Sharing",
        description: "Create stunning posters of your events to share with friends."
    },
];

export default function Screenshots() {
    const [selectedScreenshot, setSelectedScreenshot] = useState<number | null>(null);

    return (
        <section id="screenshots" className="bg-[var(--background)] overflow-hidden transition-colors duration-500 py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6 mb-16 md:mb-24 text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight"
                >
                    Sneak peek into <br />
                    <span className="text-primary-500">the interface.</span>
                </motion.h2>
                <p className="text-slate-500 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                    Simple, clean, and distraction-free design. A meticulous interface crafted for your most important moments.
                </p>
            </div>

            <div className="relative flex overflow-hidden group/carousel py-8">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="flex gap-10 whitespace-nowrap px-4"
                >
                    {[...screenshots, ...screenshots].map((shot, i) => (
                        <div
                            key={i}
                            onClick={() => setSelectedScreenshot(i % screenshots.length)}
                            className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] rounded-[2rem] bg-[var(--card-bg)] border border-[var(--border-color)] overflow-hidden shadow-lg hover:shadow-primary-500/10 transition-all duration-500 shrink-0 cursor-pointer group"
                        >
                            <Image
                                src={shot.src}
                                alt={shot.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 280px, 320px"
                            />

                            {/* Hover Information Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex flex-col justify-end">
                                <div className="flex items-center gap-2 mb-3">
                                    <Info className="w-4 h-4 text-blue-400" />
                                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Feature Detail</span>
                                </div>
                                <h3 className="text-xl font-display text-white mb-2">{shot.title}</h3>
                                <p className="text-sm text-slate-300 font-medium whitespace-normal leading-relaxed">
                                    {shot.description}
                                </p>
                            </div>

                            {/* Expand Icon Tooltip */}
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Maximize2 className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedScreenshot !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]/90 backdrop-blur-2xl p-4 md:p-12"
                    >
                        <button
                            onClick={() => setSelectedScreenshot(null)}
                            className="absolute top-6 right-6 w-14 h-14 rounded-2xl glass flex items-center justify-center z-[110]"
                        >
                            <X className="w-6 h-6 text-[var(--foreground)]" />
                        </button>

                        <div className="relative w-full h-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative w-full h-[60vh] lg:h-[80vh] rounded-[2rem] overflow-hidden shadow-xl border border-[var(--border-color)]"
                            >
                                <Image
                                    src={screenshots[selectedScreenshot].src}
                                    alt={screenshots[selectedScreenshot].title}
                                    fill
                                    className="object-contain p-4"
                                />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center lg:text-left"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary-500/10 border border-primary-500/20 mb-8 mx-auto lg:mx-0">
                                    <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary-500">Feature Highlight</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-8 leading-tight">
                                    {screenshots[selectedScreenshot].title}
                                </h2>
                                <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed mb-12">
                                    {screenshots[selectedScreenshot].description}
                                </p>
                                <div className="w-20 h-1 bg-primary-500 rounded-full mx-auto lg:mx-0" />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
