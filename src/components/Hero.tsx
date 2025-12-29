"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Timer, Hourglass, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-64 pb-24 md:pt-[22rem] md:pb-40 overflow-hidden bg-[var(--background)] transition-colors duration-500">
            {/* Abstract background blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[100px] font-display leading-[1.0] md:leading-[0.9] mb-12 text-[var(--foreground)] tracking-tighter whitespace-pre-line">
                            Count down <br className="hidden md:block" />
                            <span className="text-primary-500 italic">to magic.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 mb-14 max-w-xl leading-relaxed mx-auto lg:mx-0 font-medium">
                            TallyTimer turns your most awaited moments into beautiful, interactive countdown shapes. Simple, minimal, and always in focus.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer"
                                target="_blank"
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative btn-primary px-10 py-5 text-lg group overflow-visible"
                            >
                                {/* Animated Border/Background Glow */}
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-primary-500 rounded-2xl z-[-1] opacity-75 blur-sm animate-gradient-flow" />

                                <span className="relative z-10 flex items-center gap-3">
                                    Get TallyTimer Free
                                    <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                                </span>
                            </motion.a>

                            <a href="#features" className="btn-secondary px-10 py-5 text-lg flex items-center justify-center gap-3 group">
                                <Sparkles className="w-5 h-5 text-blue-500" />
                                Explore Features
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 relative flex items-center justify-center py-12 w-full max-w-[500px] lg:max-w-none"
                    >
                        {/* Abstract Timer Visuals */}
                        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

                            {/* Pulsing Timer Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1px] border-dashed border-primary-500/20 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 border-[1px] border-primary-500/10 rounded-full"
                            />

                            {/* Floating Countdown Shapes */}
                            <div className="relative z-10 flex flex-col items-center scale-90 md:scale-100">
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="bg-[var(--card-bg)] backdrop-blur-xl p-8 rounded-[3rem] shadow-2xl shadow-primary-500/10 border border-[var(--border-color)] flex flex-col items-center gap-2 mb-8"
                                >
                                    <div className="text-7xl font-display text-primary-500 leading-none">05</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Days Remaining</div>
                                </motion.div>

                                <div className="flex gap-4">
                                    <motion.div
                                        animate={{ y: [0, 12, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                                        className="bg-[var(--card-bg)] backdrop-blur-xl p-6 rounded-[2.5rem] border border-[var(--border-color)] flex flex-col items-center gap-1"
                                    >
                                        <div className="text-4xl font-display text-[var(--foreground)] leading-none opacity-80">12</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hours</div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 5.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
                                        className="bg-primary-600 p-6 rounded-[2.5rem] flex flex-col items-center gap-1 shadow-xl shadow-primary-500/30"
                                    >
                                        <div className="text-4xl font-display text-white leading-none">45</div>
                                        <div className="text-[10px] font-bold text-primary-100 uppercase tracking-widest">Mins</div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Orbiting Icons */}
                            <div className="absolute inset-0 scale-90 md:scale-100">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-full"
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] shadow-lg flex items-center justify-center text-primary-500">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-full"
                                >
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-2xl bg-[var(--card-bg)] backdrop-blur-xl border border-[var(--border-color)] shadow-lg flex items-center justify-center text-indigo-500">
                                        <Hourglass className="w-6 h-6" />
                                    </div>
                                </motion.div>
                            </div>

                            {/* Gradient Background Aura */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/5 to-transparent rounded-full -z-10 blur-3xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
