import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WhyUseTallyTimer from "@/components/WhyUseTallyTimer";
import HowToUse from "@/components/HowToUse";
import Showcase from "@/components/Screenshots";
import UserReviews from "@/components/UserReviews";
import Changelog from "@/components/Changelog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] selection:bg-orange-500/30 text-[var(--foreground)] overflow-x-hidden">
      <div className="noise-overlay" />
      <Navbar />
      <Hero />
      <Features />
      <WhyUseTallyTimer />
      <div id="showcase">
        <Showcase />
      </div>
      <HowToUse />
      <UserReviews />
      <Changelog />
      <Footer />
    </main>
  );
}
