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
        <section className="py-28 md:py-40 overflow-hidden bg-[var(--background)] relative">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-orange-500/5 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="badge-premium mb-6 inline-block">Showcase</span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-[var(--foreground)] mb-8 tracking-tight">
                        {t.screenshots.title}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        {t.screenshots.subtitle}
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-6 px-6"
                    animate={{
                        x: ["0%", "-50%"]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 50,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...screenshots, ...screenshots].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="shrink-0 w-[240px] md:w-[300px] aspect-[9/19] relative glass-card overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority={index < 4}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
