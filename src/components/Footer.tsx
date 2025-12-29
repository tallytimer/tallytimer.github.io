"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="pt-20 pb-10 bg-white border-t border-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div>
                        <span className="text-3xl font-display text-[#0F172A] tracking-tighter">
                            TallyTimer
                        </span>
                        <p className="text-lg text-slate-400 font-medium mt-2">Beautiful countdowns for meaningful moments.</p>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="/privacy" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">Privacy</Link>
                        <Link href="/terms" className="text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors">Terms</Link>
                        <a
                            href="https://fsfaysalcse.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-bold text-blue-600 px-5 py-2.5 bg-blue-50 rounded-xl hover:bg-blue-100 transition-all group"
                        >
                            Contact Author
                            <ExternalLink className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-50 gap-4">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                        © 2024 Faysal Hossain. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Design from Dhaka with</span>
                        <span className="text-blue-600">❤</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
