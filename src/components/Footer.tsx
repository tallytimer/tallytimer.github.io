"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
    const { t } = useLocale();

    return (
        <footer className="py-10 bg-[var(--background)] border-t border-[var(--border-color)] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-2">
                    <div className="relative w-7 h-7 flex items-center justify-center shadow-lg shadow-orange-500/20 rounded-lg overflow-hidden">
                        <Image
                            src="/images/logo.png"
                            alt="TallyTimer Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-display font-bold text-[var(--foreground)] text-base">TallyTimer</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    <Link href="/faq" className="text-[10px] font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.faq}</Link>
                    <Link href="/privacy" className="text-[10px] font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.privacy}</Link>
                    <Link href="/terms" className="text-[10px] font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.terms}</Link>
                    <a
                        href="https://github.com/tallytimer/tallytimer.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-bold text-slate-500 hover:text-orange-500 transition-colors uppercase tracking-widest flex items-center gap-1.5"
                    >
                        {t.footer.openSource}
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="text-[10px] font-medium text-slate-600">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
