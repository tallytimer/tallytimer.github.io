"use client";

import Link from "next/link";
import { ExternalLink, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 bg-[var(--background)] border-t border-[var(--border-color)] transition-colors duration-500">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">
                    <div>
                        <span className="text-3xl font-display text-[var(--foreground)] tracking-tightest leading-none">
                            TallyTimer
                        </span>
                        <p className="text-lg text-slate-500 font-medium mt-4 max-w-sm leading-relaxed">
                            Beautiful countdowns meticulously crafted for your most meaningful moments.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                        <Link href="/privacy" className="text-sm font-bold text-slate-400 hover:text-primary-500 transition-colors uppercase tracking-widest">Privacy</Link>
                        <Link href="/terms" className="text-sm font-bold text-slate-400 hover:text-primary-500 transition-colors uppercase tracking-widest">Terms</Link>
                        <a
                            href="https://fsfaysalcse.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm font-bold text-primary-500 px-6 py-3 bg-primary-500/5 rounded-2xl border border-primary-500/10 hover:bg-primary-500/10 transition-all group"
                        >
                            Contact Author
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-[var(--border-color)] gap-6">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest order-2 md:order-1">
                        © 2024 Faysal Hossain. All rights reserved.
                    </p>
                    <div className="flex items-center gap-3 order-1 md:order-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Design from Dhaka with</span>
                        <Heart className="w-4 h-4 text-primary-500 fill-primary-500 animate-pulse" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
