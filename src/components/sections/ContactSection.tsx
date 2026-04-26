"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-card border border-border overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-muted p-12 text-white flex flex-col justify-center border-r border-border">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tighter">Ready to optimize?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us to learn how Burros.AI can transform your operational efficiency through agentic orchestration.
            </p>
            <div className="space-y-4 font-mono text-xs uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <span className="text-primary">LOC:</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-primary">EML:</span>
                <span>hello@burros.ai</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4">✅</div>
<<<<<<< Updated upstream
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received</h3>
                <p className="text-gray-600">We'll get back to you shortly about your corral.</p>
=======
                <h3 className="text-2xl font-bold text-white mb-2 uppercase">Message Received</h3>
                <p className="text-muted-foreground text-sm">We&apos;ll get back to you shortly about your mission.</p>
>>>>>>> Stashed changes
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-background border border-border text-white focus:border-primary outline-none text-sm" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-background border border-border text-white focus:border-primary outline-none text-sm" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-muted-foreground mb-2 uppercase tracking-widest">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-background border border-border text-white focus:border-primary outline-none text-sm" placeholder="Tell us about your use case..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
