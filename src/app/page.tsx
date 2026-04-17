"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! Our team will get back to you shortly.");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Ready to Innovate?</h2>
            <p className="text-xl text-gray-600 mb-10">
              Get in touch with our experts today and start your journey towards digital excellence.
            </p>
            <form className="grid grid-cols-1 gap-y-6 text-left" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="full-name" id="full-name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary-blue focus:border-primary-blue text-black" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary-blue focus:border-primary-blue text-black" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-primary-blue focus:border-primary-blue text-black" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary-blue text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
