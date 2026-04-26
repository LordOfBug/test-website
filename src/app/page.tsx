import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Capabilities from '@/components/sections/Capabilities'
import UseCases from '@/components/sections/UseCases'
import ContactSection from '@/components/sections/ContactSection'
import UrlShortener from '@/components/sections/UrlShortener'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="relative z-20 -mt-24 mb-16">
        <UrlShortener />
      </div>
      <HowItWorks />
      <Capabilities />
      <UseCases />
      <ContactSection />
    </div>
  )
}
