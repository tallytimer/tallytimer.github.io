import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToUse from "@/components/HowToUse";
import Showcase from "@/components/Screenshots"; // Importing the new Showcase component (overwritten in Screenshots.tsx)
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-orange-500/30 text-[var(--foreground)] overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Features />
      <div id="showcase">
        <Showcase />
      </div>
      <HowToUse />
      <Changelog />
      <Footer />
    </main>
  );
}
