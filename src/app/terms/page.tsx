"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-bold text-primary-500 uppercase tracking-widest hover:text-primary-600 transition-colors mb-8"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-5xl md:text-7xl font-display text-[#0F172A] tracking-tight mb-4">
                            Terms of <span className="text-primary-500">Use.</span>
                        </h1>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Effective: July 11, 2024</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-10 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed"
                    >
                        <p><strong>Terms &amp; Conditions</strong></p>
                        <p>
                            By downloading or using the app, these terms will automatically
                            apply to you – you should make sure therefore that you read them
                            carefully before using the app. You’re not allowed to copy or modify
                            the app, any part of the app, or our trademarks in any way.
                        </p>
                        <p>
                            Faysal Hossain is committed to ensuring that the app is as useful
                            and efficient as possible. For that reason, we reserve the right to
                            make changes to the app or to charge for its services, at any time
                            and for any reason.
                        </p>
                        <p>
                            The TallyTimer app stores and processes personal data that you have
                            provided to us, to provide my Service. It’s your responsibility to
                            keep your phone and access to the app secure.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Service Usage (Calendar Import)</h2>
                        <p>
                            TallyTimer includes a feature to import events from your device&apos;s calendar. By using this
                            feature, you grant the app permission to access your calendar data for the sole purpose of
                            creating countdown events. You retain full ownership and responsibility for any content
                            imported from your calendar.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Backup & Data Loss</h2>
                        <p>
                            While we provide tools for backing up and restoring your data, you are solely responsible
                            for maintaining your backups. We are not liable for any data loss resulting from failure to
                            create backups, loss of backup files, or failures of third-party cloud storage services where
                            you choose to store your backups.
                        </p>

                        <h2 className="text-2xl font-display text-[#0F172A] mt-12 mb-6">Third-Party Services</h2>
                        <p>
                            The app does use third-party services that declare their Terms and
                            Conditions.
                        </p>
                        <ul className="space-y-4 list-none p-0">
                            {[
                                { name: "Google Play Services", href: "https://policies.google.com/terms" },
                                { name: "Google Analytics for Firebase", href: "https://www.google.com/analytics/terms/" },
                                { name: "Firebase Crashlytics", href: "https://firebase.google.com/terms/crashlytics" },
                            ].map((item) => (
                                <li key={item.name} className="flex gap-4 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    <a href={item.href} target="_blank" className="text-primary-500 hover:text-primary-600 transition-colors underline decoration-primary-500/20 underline-offset-4">{item.name}</a>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Responsibility</h2>
                        <p>
                            Certain functions of the app will require the app to have an active internet connection.
                            Faysal Hossain will not take responsibility for data charges incurred while using the app outside of Wi-Fi.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Changes</h2>
                        <p>
                            I may update our Terms and Conditions from time to time. Thus, you
                            are advised to review this page periodically for any changes.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Contact Us</h2>
                        <p>
                            If you have any questions or suggestions about my Terms and
                            Conditions, do not hesitate to contact me at <span className="text-[#0F172A] font-bold">fsfaysalcse.me@gmail.com</span>.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
