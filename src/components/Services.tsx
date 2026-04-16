export default function Services() {
  const services = [
    {
      title: 'Cloud Architecture',
      description: 'Designing scalable and resilient cloud infrastructure for modern enterprises.',
      icon: '☁️',
    },
    {
      title: 'Digital Transformation',
      description: 'Accelerating your business growth through strategic technology adoption.',
      icon: '🚀',
    },
    {
      title: 'Software Strategy',
      description: 'Tailored roadmaps to optimize your software development lifecycle.',
      icon: '💻',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
