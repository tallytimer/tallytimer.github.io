"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPage() {
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
                            Privacy <span className="text-primary-500">Policy.</span>
                        </h1>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Effective: July 11, 2024</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-10 md:p-16 rounded-[3rem] bg-slate-50 border border-slate-100 prose prose-slate max-w-none text-slate-500 font-medium leading-relaxed"
                    >
                        <p><strong>Privacy Policy</strong></p>
                        <p>
                            Faysal Hossain built the TallyTimer app as a Free app. This SERVICE is
                            provided by Faysal Hossain at no cost and is intended for use as is.
                        </p>
                        <p>
                            This page is used to inform visitors regarding my policies with the
                            collection, use, and disclosure of Personal Information if anyone
                            decided to use my Service.
                        </p>

                        <h2 className="text-2xl font-display text-[#0F172A] mt-12 mb-6">Information Collection</h2>
                        <p>
                            For a better experience, while using our Service, I may require you
                            to provide us with certain personally identifiable information. The
                            information that I request will be retained on your device and is
                            not collected by me in any way.
                        </p>
                        <ul className="space-y-4 list-none p-0">
                            {[
                                { name: "Google Play Services", href: "https://www.google.com/policies/privacy/" },
                                { name: "Google Analytics for Firebase", href: "https://firebase.google.com/policies/analytics" },
                                { name: "Firebase Crashlytics", href: "https://firebase.google.com/support/privacy/" },
                            ].map((item) => (
                                <li key={item.name} className="flex gap-4 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                                    <a href={item.href} target="_blank" className="text-primary-500 hover:text-primary-600 transition-colors underline decoration-primary-500/20 underline-offset-4">{item.name}</a>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Calendar Permissions</h2>
                        <p>
                            To provide the event import feature, TallyTimer requests access to your device&apos;s calendar.
                            This &quot;Read Calendar&quot; permission is strictly used to allow you to select and import existing
                            events from your calendar into the app as countdowns. This processing happens locally on
                            your device. We do not collect, store, or transmit your calendar data to any external
                            servers.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Data Backup and Restore</h2>
                        <p>
                            TallyTimer offers a backup and restore feature to help you secure your event data. You can
                            choose to back up your data to your local storage or a personal cloud storage account
                            (e.g., Google Drive). These backups are encrypted and controlled entirely by you. We do
                            not have access to your backup files or their contents unless you actively choose to restore
                            them within the app. You are responsible for managing your backup files.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Log Data</h2>
                        <p>
                            I want to inform you that whenever you use my Service, in a case of
                            an error in the app I collect data and information (through
                            third-party products) on your phone called Log Data.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Cookies</h2>
                        <p>
                            Cookies are files with a small amount of data that are commonly used
                            as anonymous unique identifiers. These are sent to your browser from
                            the websites that you visit and are stored on your device&apos;s internal
                            memory.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Security</h2>
                        <p>
                            I value your trust in providing us your Personal Information, thus
                            we are striving to use commercially acceptable means of protecting
                            it. But remember that no method of transmission over the internet,
                            or method of electronic storage is 100% secure and reliable, and I
                            cannot guarantee its absolute security.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Children’s Privacy</h2>
                        <p>
                            These Services do not address anyone under the age of 13. I do not
                            knowingly collect personally identifiable information from children
                            under 13 years of age.
                        </p>

                        <h2 className="text-xl font-black text-[#0F172A] mt-12 mb-6">Contact Us</h2>
                        <p>
                            If you have any questions or suggestions about my Privacy Policy, do
                            not hesitate to contact me at <span className="text-[#0F172A] font-bold">fsfaysalcse.me@gmail.com</span>.
                        </p>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
