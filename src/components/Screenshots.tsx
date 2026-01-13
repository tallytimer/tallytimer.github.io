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
        <section className="py-16 md:py-20 overflow-hidden bg-[var(--background)]">
            <div className="max-w-6xl mx-auto px-6 mb-12 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-display text-[var(--foreground)] mb-4 tracking-tight">
                        {t.screenshots.title}
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 leading-relaxed">
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
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    style={{ width: "fit-content" }}
                >
                    {[...screenshots, ...screenshots].map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0 w-[220px] md:w-[280px] aspect-[9/19] relative rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-xl shadow-black/10 transition-transform duration-500"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                                priority={index < 4}
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
