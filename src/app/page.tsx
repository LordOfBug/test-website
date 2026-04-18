import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeatureGrid />
      <Footer />
    </main>
  );
}
