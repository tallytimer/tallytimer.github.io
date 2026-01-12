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
    { title: "Canvas", image: "/images/screenshots/8.PNG" },
    { title: "Archive", image: "/images/screenshots/9.png" }
];

export default function Screenshots() {
    const { t } = useLocale();

    return (
        <section className="py-12 md:py-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 mb-8 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-xl"
                >
                    <h2 className="text-3xl md:text-4xl font-display text-[var(--foreground)] mb-3">
                        {t.screenshots.title}
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                        {t.screenshots.subtitle}
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-4 px-6"
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
                        <div
                            key={index}
                            className="shrink-0 w-[180px] md:w-[220px] aspect-[9/19] relative rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface)] shadow-2xl"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
