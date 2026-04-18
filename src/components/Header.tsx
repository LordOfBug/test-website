import { NavItem } from "@/types";

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-extrabold tracking-tight text-primary-blue">
        ACME<span className="text-gray-900 text-lg font-medium ml-2 uppercase">Solutions</span>
      </div>
      <nav className="hidden md:flex space-x-10 text-sm font-semibold uppercase tracking-widest text-gray-600">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-primary-blue transition">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="md:hidden text-primary-blue">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </header>
  );
}
