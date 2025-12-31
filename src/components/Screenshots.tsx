"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const screenshots = [
    {
        title: "Home",
        description: "Your events at a glance.",
        image: "/images/screenshots/1.png"
    },
    {
        title: "Event Details",
        description: "Deep dive into your moments.",
        image: "/images/screenshots/2.png"
    },
    {
        title: "Create Event",
        description: "Plan it your way.",
        image: "/images/screenshots/3.png"
    },
    {
        title: "Settings",
        description: "Customize your experience.",
        image: "/images/screenshots/1.png"
    },
    {
        title: "Widgets",
        description: "Track from your home screen.",
        image: "/images/screenshots/2.png"
    },
    {
        title: "Calendar Import",
        description: "Sync your life instantly.",
        image: "/images/screenshots/3.png"
    },
    {
        title: "Backup",
        description: "Keep your memories safe.",
        image: "/images/screenshots/1.png"
    },
    {
        title: "Edit Event",
        description: "Make changes anytime.",
        image: "/images/screenshots/2.png"
    }
];

export default function Screenshots() {

    return (
        <section className="py-20 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-display text-[var(--foreground)] mb-6">
                        App Interface
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        A closer look at the refined user experience. Designed to be both beautiful and highly functional.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full overflow-hidden mask-gradient-x">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {/* Render list twice for seamless loop */}
                    {[...screenshots, ...screenshots].map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[280px] md:w-[320px] aspect-[9/19] relative rounded-[2.5rem] overflow-hidden border-[6px] border-[#1a1b21] bg-[#0F1014] shadow-2xl group"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Hover Overlay Details - Bottom Fade */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-8 px-6 text-center">
                                <span className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-2xl font-display text-white mb-2 shadow-black/50 text-shadow-sm">
                                    {item.title}
                                </span>
                                <p className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 text-sm text-slate-300 font-medium mb-3">
                                    {item.description}
                                </p>
                                <div className="w-8 h-1 bg-orange-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-150" />
                            </div>

                            {/* Gloss Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-20 pointer-events-none" />
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
}
