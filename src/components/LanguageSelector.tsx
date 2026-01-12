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
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--surface-highlight)] border border-[var(--border-color)] hover:border-orange-500/30 transition-colors text-sm"
            >
                <Globe className="w-4 h-4 text-slate-400" />
                <span className="text-[var(--foreground)]">{currentLang.flag}</span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-[var(--surface)] border border-[var(--border-color)] rounded-xl shadow-xl overflow-hidden z-50"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLocale(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-[var(--surface-highlight)] transition-colors ${locale === lang.code ? "text-orange-500" : "text-[var(--foreground)]"
                                    }`}
                            >
                                <span className="flex items-center gap-3">
                                    <span>{lang.flag}</span>
                                    <span>{lang.name}</span>
                                </span>
                                {locale === lang.code && <Check className="w-4 h-4" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
