import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(51,51,51,0.1)] bg-[rgba(255,255,255,0.7)] backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/burros.png" 
            alt="Burros.AI Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#how-it-works" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            How It Works
          </Link>
          <Link href="#capabilities" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Capabilities
          </Link>
          <Link href="#use-cases" className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors">
            Use Cases
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#contact" className="btn-primary py-2 px-4">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
