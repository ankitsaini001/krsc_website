import React, { useState } from 'react';

export const GrcAutomation: React.FC = () => {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
  

type GrcFeature = {
  id: string;
  title: string;
  description: string;
  more: string;
  image: string;
};

const grcFeatures: GrcFeature[] = [
  {
  id: 'governance',
  title: 'Governance Automation',
  description: 'Streamline policy management, compliance documentation, and organizational alignment.',
  more:
    'Our tools enable version-controlled policy updates, stakeholder tracking, and automated workflow approvals to enhance accountability and transparency.',
  image: 'https://media.istockphoto.com/id/1470555159/photo/blue-gavel-hologram-over-robotic-hands-cyber-law-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=f8yR7BnBlAC1NRfjn-1b6NvzMAZmW2z7hom_CMC8fMA=',
},

  {
    id: 'risk',
    title: 'Risk Management Automation',
    description: 'Automate risk assessments, scoring, and reporting in real-time.',
    more:
      'With integrated threat intelligence and scoring engines, teams can proactively mitigate risk using data-driven dashboards and alerts.',
    image: 'https://media.istockphoto.com/id/1654883905/photo/highly-skilled-engineers-is-depicted-diligently-at-work-using-digital-tablet-collaboratively.webp?a=1&b=1&s=612x612&w=0&k=20&c=IfxYioYp5oyjRv5sB2K70ifcuy77vRpOrrIiIy8mZb0=',
  },
  {
    id: 'compliance',
    title: 'Compliance Tracking',
    description: 'Real-time monitoring and audit readiness for industry regulations.',
    more:
      'Track compliance against frameworks like ISO 27001, HIPAA, or GDPR with automated evidence collection and reporting tools.',
    image: 'https://media.istockphoto.com/id/1223476214/photo/people-standing-against-suspended-computers.webp?a=1&b=1&s=612x612&w=0&k=20&c=r7Uuz0GVYbQTJvbE12JQHoa7eA2IyAv35eQv4tf7v4I=',
  },
];
  return (
    <div className="bg-gray-100 mb-10 text-gray-800">
      <section className="py-2 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">GRC Automation Solutions</h2>
        <p className="text-gray-700 mb-4 max-w-3xl mx-auto">
          Automate governance, risk, and compliance with intelligent workflows and real-time insights.
          Our GRC tools improve visibility, minimize risk, and ensure regulatory alignment across the enterprise.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {grcFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${feature.image}')` }}
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-black">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
                {expandedCard === feature.id && (
                  <p className="text-sm text-gray-600 mt-2">{feature.more}</p>
                )}
                <button
                  onClick={() => setExpandedCard(expandedCard === feature.id ? null : feature.id)}
                  className="mt-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none"
                >
                  {expandedCard === feature.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};








































































