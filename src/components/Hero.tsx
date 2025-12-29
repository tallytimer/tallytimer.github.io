"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Timer, Hourglass } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-32 overflow-hidden bg-white">
            {/* Abstract background blobs */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-50/50 border border-blue-100 mb-10">
                            <Star className="w-4 h-4 text-blue-600 fill-blue-600" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Time is a canvas</span>
                        </div>

                        <h1 className="text-7xl md:text-[110px] font-display leading-[0.85] mb-10 text-[#0F172A] tracking-tighter">
                            Count down <br />
                            <span className="text-blue-600 italic">to magic.</span>
                        </h1>

                        <p className="text-2xl text-slate-500 mb-12 max-w-xl leading-relaxed">
                            TallyTimer turns your most awaited moments into beautiful, interactive countdown shapes. Simple, minimal, and always in focus.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <motion.a
                                href="https://play.google.com/store/apps/details?id=com.faysal.tallytimer"
                                target="_blank"
                                whileHover={{ y: -5, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary shadow-2xl shadow-blue-100 flex items-center gap-4 text-lg py-5 group"
                            >
                                Get TallyTimer Free
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                            </motion.a>

                            <a href="#features" className="flex items-center gap-3 py-5 px-8 rounded-2xl border border-slate-100 hover:bg-slate-50 transition-all font-bold text-slate-400">
                                Explore Features
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 relative flex items-center justify-center py-12"
                    >
                        {/* Abstract Timer Visuals */}
                        <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">

                            {/* Pulsing Timer Rings */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-[1.5px] border-dashed border-blue-200 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-8 border-[1.5px] border-blue-100 rounded-full"
                            />

                            {/* Floating Countdown Shapes */}
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-blue-100 border border-slate-50 flex flex-col items-center gap-2 mb-8"
                                >
                                    <div className="text-7xl font-display text-blue-600 leading-none">05</div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Days Remaning</div>
                                </motion.div>

                                <div className="flex gap-4">
                                    <motion.div
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                                        className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 flex flex-col items-center gap-1"
                                    >
                                        <div className="text-4xl font-display text-slate-700 leading-none">12</div>
                                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Hours</div>
                                    </motion.div>

                                    <motion.div
                                        animate={{ y: [0, -8, 0] }}
                                        transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                                        className="bg-blue-600 p-6 rounded-[2.5rem] flex flex-col items-center gap-1 shadow-xl shadow-blue-200"
                                    >
                                        <div className="text-4xl font-display text-white leading-none">45</div>
                                        <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Mins</div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Orbiting Icons */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    translate: ["0px 0px", "0px 0px"]
                                }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-blue-600">
                                    <Clock className="w-6 h-6" />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{
                                    rotate: -360
                                }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full"
                            >
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-lg flex items-center justify-center text-indigo-600">
                                    <Hourglass className="w-6 h-6" />
                                </div>
                            </motion.div>

                            {/* Gradient Background Aura */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full -z-10 blur-3xl" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
