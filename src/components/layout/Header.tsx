import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-gray bg-obsidian/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/logo.png" 
            alt="Burros.AI Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto object-contain invert brightness-200"
            priority
          />
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#how-it-works" className="text-sm font-mono uppercase tracking-widest text-zinc-dimmed hover:text-electric-blue transition-colors">
            Operations
          </Link>
          <Link href="#capabilities" className="text-sm font-mono uppercase tracking-widest text-zinc-dimmed hover:text-electric-blue transition-colors">
            Corrals
          </Link>
          <Link href="#use-cases" className="text-sm font-mono uppercase tracking-widest text-zinc-dimmed hover:text-electric-blue transition-colors">
            Blueprints
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="btn-precision">
            Terminal
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
