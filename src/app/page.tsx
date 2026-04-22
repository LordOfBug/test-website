import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import Capabilities from '@/components/sections/Capabilities'
import UseCases from '@/components/sections/UseCases'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <Capabilities />
      <UseCases />
      <ContactSection />
    </div>
  )
}
