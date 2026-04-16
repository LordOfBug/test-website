import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold text-primary-blue">
        Acme Innovative Solutions
      </div>
      <nav className="space-x-6">
        <Link href="/" className="hover:text-primary-blue">Home</Link>
        <Link href="#services" className="hover:text-primary-blue">Services</Link>
        <Link href="#contact" className="hover:text-primary-blue">Contact</Link>
      </nav>
    </header>
  );
}
