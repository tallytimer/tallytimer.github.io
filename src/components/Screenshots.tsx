"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";

const screenshots = [
    { title: "Home", image: "/images/screenshots/1.PNG" },
    { title: "Event Details", image: "/images/screenshots/2.PNG" },
    { title: "Create Event", image: "/images/screenshots/3.PNG" },
    { title: "Settings", image: "/images/screenshots/4.PNG" },
    { title: "Widgets", image: "/images/screenshots/5.PNG" },
    { title: "Calendar Import", image: "/images/screenshots/6.PNG" },
    { title: "Backup", image: "/images/screenshots/7.PNG" },
    { title: "Canvas", image: "/images/screenshots/8.PNG" }
];

export default function Screenshots() {
    const { t } = useLocale();

    return (
        <section className="py-28 md:py-40 overflow-hidden bg-[var(--background)] relative flex flex-col items-center">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-orange-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="badge-premium mb-6 inline-block">Interface</span>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-[var(--foreground)] mb-8 tracking-tighter">
                        {t.screenshots.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium">
                        {t.screenshots.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Redesigned Marquee with proper alignment and spacing */}
            <div className="relative w-full flex flex-col items-center">
                <div className="flex w-full overflow-hidden py-10">
                    <motion.div
                        className="flex gap-10 md:gap-16 px-10 items-center"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 60,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "fit-content" }}
                    >
                        {[...screenshots, ...screenshots].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (index % screenshots.length) * 0.1 }}
                                className="shrink-0 w-[260px] md:w-[320px] aspect-[9/19.5] relative rounded-[2.5rem] overflow-hidden shadow-premium border border-white/10 group bg-slate-900"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority={index < 4}
                                />
                                {/* Glass Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <span className="text-white font-display text-xl tracking-tight">{item.title}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
