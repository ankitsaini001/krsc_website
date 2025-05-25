import React, { useState } from 'react';

export const StaffAugmentation: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const staffServices = [
    {
      title: 'On-Demand Developers',
      desc: 'Quickly scale your engineering team with pre-vetted software developers.',
      more: `We provide highly skilled developers across multiple technologies including JavaScript, Python, Java, and more. Hire on-demand to meet project deadlines or bridge short-term talent gaps with ease.`,
      img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?fit=crop&w=600&q=60',
    },
    {
      title: 'Project-Based Teams',
      desc: 'Assemble dedicated teams tailored to your project needs.',
      more: `Get access to full project-based teams including frontend/backend developers, QA engineers, DevOps, and project managers. Ideal for startups or enterprises needing flexible, turnkey solutions.`,
      img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?fit=crop&w=600&q=60',
    },
    {
      title: 'Technical Support Specialists',
      desc: 'Enhance customer satisfaction with 24/7 technical support staff.',
      more: `We provide trained support professionals for technical help desks, customer onboarding, and troubleshooting. They integrate with your existing systems and deliver seamless end-user support.`,
      img: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?fit=crop&w=600&q=60',
    },
    {
      title: 'UI/UX Designers',
      desc: 'Access creative talent for engaging and user-friendly interfaces.',
      more: `Our experienced designers craft responsive, accessible, and aesthetically pleasing interfaces for mobile and web platforms. Whether it's wireframes or full design systems, we’ve got you covered.`,
      img: 'https://plus.unsplash.com/premium_photo-1661284815496-770277cd6d0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Cloud & DevOps Engineers',
      desc: 'Optimize your infrastructure with certified DevOps professionals.',
      more: `We provide cloud-native engineers skilled in AWS, Azure, GCP, Kubernetes, CI/CD, and monitoring tools. Achieve high availability and automation across your systems with ease.`,
      img: 'https://plus.unsplash.com/premium_photo-1678566153919-86c4ba4216f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Business Analysts',
      desc: 'Bridge the gap between technical teams and business goals.',
      more: `Our analysts gather requirements, analyze data, and create strategic plans that guide project success. They ensure alignment between stakeholders and technical teams at every stage.`,
      img: 'https://images.unsplash.com/photo-1523958203904-cdcb402031fd?fit=crop&w=600&q=60',
    },
  ];

  return (
    <div className="bg-gray-100 mb-10 text-gray-900 font-sans">
      {/* Intro */}
      <div className="container mx-auto px-4 py-2 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 text-gray-900">
          Staff Augmentation Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Expand your team with top-tier professionals for any tech challenge — fast, flexible, and efficient.
        </p>
      </div>

      {/* Services */}
      <div className="container mx-auto px-4 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {staffServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>

              <button
                className="text-blue-600 text-sm mt-2 font-semibold hover:underline"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                {expanded === idx ? 'Read Less' : 'Read More'}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expanded === idx ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {service.more}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
