import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/images/burros.png" 
                alt="Burros.AI Logo" 
                width={120} 
                height={40} 
                className="h-6 w-auto object-contain invert grayscale opacity-50"
              />
            </Link>
            <p className="text-xs text-muted-foreground uppercase tracking-tight font-mono">
              [SYSTEM] ORCHESTRATION_LAYER_ACTIVE
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Product</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <li><Link href="#how-it-works" className="hover:text-primary">How it Works</Link></li>
              <li><Link href="#capabilities" className="hover:text-primary">Capabilities</Link></li>
              <li><Link href="#use-cases" className="hover:text-primary">Use Cases</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Platform</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <li>Burros</li>
              <li>Corrals</li>
              <li>Playbooks</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Legal</h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Burros.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
