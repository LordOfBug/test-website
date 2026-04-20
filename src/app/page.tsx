import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Capabilities from '@/components/sections/Capabilities';
import UseCases from '@/components/sections/UseCases';
import GettingStarted from '@/components/sections/GettingStarted';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <HowItWorks />
        <Capabilities />
        <UseCases />
        <GettingStarted />
      </main>
      <Footer />
    </div>
  );
}
