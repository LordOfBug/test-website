import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/burros.png" 
            alt="Burros.AI Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto object-contain invert"
            priority
          />
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#how-it-works" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#capabilities" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            Capabilities
          </Link>
          <Link href="#use-cases" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            Use Cases
          </Link>
          <Link href="/dashboard" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#contact" className="btn-primary py-2 px-6">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
