"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
    const { t } = useLocale();

    return (
        <footer className="py-20 bg-[var(--background)] border-t border-white/5 transition-colors duration-500 relative">
            {/* Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-orange-500/5 to-transparent blur-[80px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

                <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl overflow-hidden glow-subtle">
                        <Image
                            src="/images/logo.png"
                            alt="TallyTimer Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-display font-bold text-[var(--foreground)] text-2xl">TallyTimer</span>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                    <Link href="/faq" className="text-sm font-bold text-slate-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.faq}</Link>
                    <Link href="/privacy" className="text-sm font-bold text-slate-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.privacy}</Link>
                    <Link href="/terms" className="text-sm font-bold text-slate-400 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">{t.footer.terms}</Link>
                    <a
                        href="https://github.com/tallytimer/tallytimer.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-slate-400 hover:text-orange-500 transition-colors uppercase tracking-widest flex items-center gap-2"
                    >
                        <Github className="w-4 h-4" />
                        {t.footer.openSource}
                    </a>
                </div>

                <div className="text-sm font-medium text-slate-600">
                    {t.footer.copyright}
                </div>
            </div>
        </footer>
    );
}
