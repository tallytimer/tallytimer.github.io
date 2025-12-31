import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            <div className="pt-32 pb-20">
                <FAQ />
            </div>
            <Footer />
        </main>
    );
}
