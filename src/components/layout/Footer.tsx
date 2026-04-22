import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(51,51,51,0.1)] bg-surface py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/images/burros.png" 
                alt="Burros.AI Logo" 
                width={120} 
                height={40} 
                className="h-6 w-auto object-contain grayscale brightness-50"
              />
            </Link>
            <p className="text-sm text-foreground/60">
              Orchestrating agentic flows with precision.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><Link href="#how-it-works" className="hover:text-accent">How it Works</Link></li>
              <li><Link href="#capabilities" className="hover:text-accent">Capabilities</Link></li>
              <li><Link href="#use-cases" className="hover:text-accent">Use Cases</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Burros</li>
              <li>Corrals</li>
              <li>Playbooks</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-[rgba(51,51,51,0.1)] pt-8 text-center text-sm text-foreground/40">
          <p>© {new Date().getFullYear()} Burros.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
