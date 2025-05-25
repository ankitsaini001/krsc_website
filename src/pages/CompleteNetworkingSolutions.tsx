import React, { useState } from "react";

const CompleteNetworkingSolutions = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const services = [
    {
      id: 'setup',
      title: 'Network Setup & Design',
      description:
        'Customized network architecture for efficient, scalable, and secure communication across your organization.',
      more:
        'Our experts analyze your physical and virtual infrastructure to design a robust topology that ensures high availability and speed. We work with industry-leading hardware and tailor the setup to fit your budget, compliance requirements, and growth projections.',
      image:
        'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'security',
      title: 'Security Solutions',
      description:
        'Advanced firewall, VPN, and endpoint protection to safeguard your data and prevent cyber threats.',
      more:
        'We implement intrusion detection systems (IDS), multi-layered access control, and encryption protocols. Our team regularly audits systems to maintain compliance and ensure rapid response to vulnerabilities and breaches.',
      image:
        'https://plus.unsplash.com/premium_photo-1661644817007-ee7d73bc6922?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'support',
      title: 'Maintenance & Support',
      description:
        '24/7 monitoring, proactive troubleshooting, and technical support to keep your network running at peak performance.',
      more:
        'We offer scalable maintenance contracts that include firmware updates, health diagnostics, real-time performance dashboards, and emergency response services. Our team minimizes downtime and ensures your systems are always secure and efficient.',
      image:
        'https://media.istockphoto.com/id/1332104709/photo/shot-of-a-young-male-engineer-using-his-laptop-in-a-server-room.webp?a=1&b=1&s=612x612&w=0&k=20&c=ael67uIpvqswCmf9HT8Svj88phoAHoXtOx9SH-ohL3s=',
    },
  ];

  return (
    <div className="bg-gray-100 mb-10cfv text-gray-900 py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-2 text-center text-black">Complete Networking Solutions</h2>
        <p className="text-gray-700 mb-4 text-center max-w-3xl mx-auto">
          We specialize in providing end-to-end networking solutions tailored for your business needs.
          Whether it's setting up secure networks, optimizing existing infrastructure, or scaling your operations,
          our expert team ensures reliability, security, and seamless connectivity at every step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
                {expandedCard === service.id && (
                  <p className="text-gray-600 text-sm mt-2">{service.more}</p>
                )}
                <button
                  onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
                  className="mt-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none"
                >
                  {expandedCard === service.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompleteNetworkingSolutions;
