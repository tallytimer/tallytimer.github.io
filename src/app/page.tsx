import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToUse from "@/components/HowToUse";
import Screenshots from "@/components/Screenshots";
import FAQ from "@/components/FAQ";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowToUse />
      <Screenshots />
      <FAQ />
      <Changelog />
      <Footer />
    </main>
  );
}
