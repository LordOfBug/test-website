import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-secondary/10 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
            <Image 
              src="/images/burros.png" 
              alt="Burros.AI Logo" 
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Burros.<span className="text-primary">AI</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-secondary">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#use-cases" className="hover:text-white transition-colors">Use Cases</a>
          <a href="https://app.burros.ai" className="hover:text-white transition-colors">Sign In</a>
          <a href="https://app.burros.ai/signup" className="btn-primary py-1.5 px-4 text-xs">Get Started</a>
        </nav>
        <div className="md:hidden text-white">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </header>
  );
}
