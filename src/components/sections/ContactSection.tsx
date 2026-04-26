"use client";

import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-industrial-black">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 border border-steel-grey/20 rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-logic-blue p-12 text-white flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-6 uppercase tracking-tight">Ready to optimize your flow?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact us to learn how Burros.AI can transform your operational efficiency through agentic orchestration.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">📍</span>
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">✉️</span>
                <span>hello@burros.ai</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-12 bg-[#25282c]">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-ghost-white mb-2">Message Received</h3>
                <p className="text-steel-grey">We&apos;ll get back to you shortly about your corral.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-steel-grey mb-2 uppercase tracking-wider">Full Name</label>
                  <input required type="text" className="w-full px-4 py-3 bg-industrial-black border border-steel-grey/30 text-ghost-white rounded-sm focus:ring-2 focus:ring-logic-blue focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-steel-grey mb-2 uppercase tracking-wider">Work Email</label>
                  <input required type="email" className="w-full px-4 py-3 bg-industrial-black border border-steel-grey/30 text-ghost-white rounded-sm focus:ring-2 focus:ring-logic-blue focus:border-transparent outline-none" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-steel-grey mb-2 uppercase tracking-wider">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 bg-industrial-black border border-steel-grey/30 text-ghost-white rounded-sm focus:ring-2 focus:ring-logic-blue focus:border-transparent outline-none" placeholder="Tell us about your use case..."></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-logic-blue text-white font-bold rounded-sm shadow-lg hover:brightness-110 transition uppercase tracking-widest">
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
