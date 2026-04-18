import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="flex items-center space-x-3">
        <Image 
          src="/burros.png" 
          alt="Burros.AI Logo" 
          width={40} 
          height={40}
          className="rounded-lg"
        />
        <div className="text-2xl font-extrabold tracking-tight text-gray-900">
          Burros<span className="brand-gold ml-1">.AI</span>
        </div>
      </div>
      <nav className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
        <a href="/" className="hover:text-primary-blue transition">Home</a>
        <a href="#corrals" className="hover:text-primary-blue transition">Corrals</a>
        <a href="#burros" className="hover:text-primary-blue transition">Burros</a>
        <a href="#contact" className="hover:text-primary-blue transition">Contact</a>
      </nav>
      <div className="md:hidden text-primary-blue">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </header>
  );
}
