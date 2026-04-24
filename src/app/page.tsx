import Hero from '@/components/sections/Hero'
import HowItWorks from '@/components/sections/HowItWorks'
import FeatureGrid from '@/components/sections/FeatureGrid'
import ProcessFlow from '@/components/sections/ProcessFlow'
import Capabilities from '@/components/sections/Capabilities'
import UseCases from '@/components/sections/UseCases'
import GettingStarted from '@/components/sections/GettingStarted'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <FeatureGrid />
      <ProcessFlow />
      <Capabilities />
      <UseCases />
      <GettingStarted />
      <ContactSection />
    </div>
  )
}
