"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Locale, Translation } from "@/locales/translations";

interface LocaleContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translation;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const saved = localStorage.getItem("tallytimer-locale") as Locale;
        if (saved && translations[saved]) {
            setLocaleState(saved);
        } else {
            const browserLang = navigator.language.split("-")[0];
            const langMap: Record<string, Locale> = {
                en: "en", fr: "fr", de: "de", es: "es", ms: "ms", id: "id"
            };
            if (langMap[browserLang]) {
                setLocaleState(langMap[browserLang]);
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("tallytimer-locale", newLocale);
    };

    return (
        <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
            {children}
        </LocaleContext.Provider>
    );
}

export function useLocale() {
    const context = useContext(LocaleContext);
    if (!context) {
        throw new Error("useLocale must be used within a LocaleProvider");
    }
    return context;
}
