"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 bg-[var(--background)] border-t border-[var(--border-color)] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">



                <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 flex items-center justify-center shadow-lg shadow-orange-500/20 rounded-lg overflow-hidden">
                        <Image
                            src="/images/logo.png"
                            alt="TallyTimer Logo"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-display font-bold text-[var(--foreground)] text-lg">TallyTimer</span>
                </div>

                <div className="flex items-center gap-6">
                    <Link href="/faq" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">FAQ</Link>
                    <Link href="/privacy" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">Privacy</Link>
                    <Link href="/terms" className="text-xs font-bold text-slate-500 hover:text-[var(--foreground)] transition-colors uppercase tracking-widest">Terms</Link>
                    <a
                        href="https://github.com/fsfaysalcse/TallyTimer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-500 hover:text-orange-500 transition-colors uppercase tracking-widest flex items-center gap-2"
                    >
                        Open Source
                        <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="text-xs font-medium text-slate-600">
                    No Copyright. Feel free to use.
                </div>
            </div>
        </footer>
    );
}
