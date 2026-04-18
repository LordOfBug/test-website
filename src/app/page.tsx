import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import ProcessFlow from "@/components/sections/ProcessFlow";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureGrid />
      <ProcessFlow />
      <ContactSection />
      <Footer />
    </main>
  );
}
