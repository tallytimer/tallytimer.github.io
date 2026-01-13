"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
    const { t } = useLocale();

    return (
        <footer className="py-16 bg-[var(--background)] border-t border-[var(--border-color)] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex items-center justify-center shadow-lg shadow-orange-500/20 rounded-xl overflow-hidden">
                        <Image
                            src="/images/logo.png"
                            alt="TallyTimer Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-display font-bold text-[var(--foreground)] text-xl">TallyTimer</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    <Link href="/faq" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.faq}</Link>
                    <Link href="/privacy" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.privacy}</Link>
                    <Link href="/terms" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.terms}</Link>
                    <a
                        href="https://github.com/tallytimer/tallytimer.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-500 hover:text-orange-500 transition-colors uppercase tracking-widest flex items-center gap-2"
                    >
                        {t.footer.openSource}
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="text-xs font-medium text-slate-600">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
