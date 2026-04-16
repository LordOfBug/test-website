const services = [
  { title: "Cloud Strategy", desc: "Scalable infrastructure for the digital age." },
  { title: "Custom Software", desc: "Tailored applications built with modern stacks." },
  { title: "Tech Audits", desc: "Optimization and security for your existing systems." }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 border border-silver rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-primary-blue">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
