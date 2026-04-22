import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 opacity-80">
              <div className="relative w-6 h-6 overflow-hidden">
                <Image 
                  src="/images/burros.png" 
                  alt="Burros.AI Logo" 
                  width={24}
                  height={24}
                  className="object-contain grayscale"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Burros.<span className="text-primary">AI</span>
              </span>
            </div>
            <p className="text-secondary text-sm leading-relaxed">
              The orchestration platform for the intelligent agent workforce. Production-grade, secure, and LLM-agnostic.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a></li>
              <li><a href="#capabilities" className="hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#use-cases" className="hover:text-primary transition-colors">Use Cases</a></li>
              <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-secondary text-sm">
              <li><Link href="https://app.burros.ai" className="hover:text-primary transition-colors">Sign In</Link></li>
              <li><Link href="https://app.burros.ai/signup" className="hover:text-primary transition-colors">Sign Up</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <p className="text-secondary text-sm mb-4">Questions or feedback? Reach out to our team.</p>
            <a href="mailto:hello@burros.ai" className="text-primary font-medium hover:underline">hello@burros.ai</a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary">
          <p>&copy; {new Date().getFullYear()} Burros.AI. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Built for the Agentic Future</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
