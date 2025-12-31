"use client";

import { motion } from "framer-motion";
import { Bell, CalendarCheck, Palette, Save, Download } from "lucide-react";

export default function Features() {
    return (
        <section id="features" className="py-32 relative z-10">
            <div className="max-w-7xl mx-auto px-6">



                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24 text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-[var(--foreground)] mb-6">Powerful Features</h2>
                    <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
                        Everything you need to create beautiful countdowns and stay organized, wrapped in a minimal design.
                    </p>
                </motion.div>

                {/* Uniform Grid - 3 cols on desktop, 1 on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Custom Backgrounds (Unsplash) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bento-card p-8 flex flex-col justify-between group h-[340px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                                <Palette className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-white/5">Visuals</span>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl font-display text-[var(--foreground)]">Custom Backgrounds</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Choose from our curated gallery, upload your own, or access <span className="text-orange-500 font-bold">5M+ photos</span> via Unsplash.
                            </p>
                        </div>
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>

                    {/* Card 2: Personalized Reminders */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bento-card p-8 flex flex-col justify-between group h-[340px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500">
                                <Bell className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-white/5">Alerts</span>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl font-display text-[var(--foreground)]">Smart Reminders</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Never miss a moment. Get notified 30 minutes, 2 hours, or days in advance with reliable alerts.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Live Widgets */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bento-card p-8 flex flex-col justify-between group h-[340px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500">
                                <div className="w-8 h-8 border-2 border-current rounded-md flex items-center justify-center">
                                    <span className="text-xs font-bold">12</span>
                                </div>
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-white/5">Widgets</span>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl font-display text-[var(--foreground)]">Home Widgets</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                See your events counting down right on your home screen. Beautiful, flexible, and always visible.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Calendar Import */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bento-card p-8 flex flex-col justify-between group h-[340px]"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-500">
                                <CalendarCheck className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-white/5">Sync</span>
                        </div>
                        <div className="space-y-3 relative z-10">
                            <h3 className="text-2xl font-display text-[var(--foreground)]">Calendar Import</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Instant sync. Import events directly from your default calendar apps, including Google Calendar.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 5: Backup & Export */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bento-card p-8 flex flex-col justify-between group h-[340px] md:col-span-2 lg:col-span-2"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-rose-500/10 rounded-xl text-rose-500 flex gap-2">
                                <Save className="w-8 h-8" />
                            </div>
                            <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-bold uppercase tracking-widest text-slate-400 border border-white/5">Data</span>
                        </div>
                        <div className="space-y-3 relative z-10 max-w-lg">
                            <h3 className="text-2xl font-display text-[var(--foreground)]">Backup & Export</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Your data, your control. Save your events as a file and restore them anytime to keep your memories safe.
                            </p>
                        </div>
                        {/* Data Viz Graphic */}
                        <div className="absolute right-8 bottom-8 flex gap-2 opacity-20">
                            <div className="w-2 h-12 bg-rose-500 rounded-full animate-pulse" />
                            <div className="w-2 h-8 bg-rose-500 rounded-full" />
                            <div className="w-2 h-16 bg-rose-500 rounded-full animate-pulse delay-75" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
