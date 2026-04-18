import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10">
          <Image 
            src="/burros.png" 
            alt="Burros.AI Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        <span className="text-2xl font-extrabold tracking-tight text-primary">
          Burros<span className="text-gray-900 font-medium">.AI</span>
        </span>
      </div>
      <nav className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
        <a href="/" className="hover:text-primary transition">Home</a>
        <a href="#features" className="hover:text-primary transition">Platform</a>
        <a href="#process" className="hover:text-primary transition">Process</a>
        <a href="#contact" className="hover:text-primary transition">Contact</a>
      </nav>
      <div className="md:hidden text-primary">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </header>
  );
}
