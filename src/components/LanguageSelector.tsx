"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { Locale } from "@/locales/translations";

const languages: { code: Locale; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
    { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩" }
];

export default function LanguageSelector() {
    const { locale, setLocale } = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[var(--surface-highlight)] border border-[var(--border-color)] hover:border-orange-500/30 transition-colors text-sm md:text-base"
            >
                <Globe className="w-5 h-5 text-slate-400" />
                <span className="text-[var(--foreground)] font-medium">{currentLang.flag}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 top-full mt-3 w-56 bg-[var(--surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden z-50 p-2"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLocale(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm md:text-base rounded-xl hover:bg-[var(--surface-highlight)] transition-colors ${locale === lang.code ? "text-orange-500 bg-orange-500/5 font-bold" : "text-[var(--foreground)]"
                                    }`}
                            >
                                <span className="flex items-center gap-4">
                                    <span className="text-lg">{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </span>
                                {locale === lang.code && <Check className="w-5 h-5" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
