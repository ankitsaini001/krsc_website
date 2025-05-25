import React, { useState } from 'react';

interface CardContent {
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  key: string;
}

export const CustomSoftware: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const cards: CardContent[] = [
    {
      key: 'enterprise',
      title: 'Enterprise App Development',
      image: 'https://media.istockphoto.com/id/1257617279/photo/smart-office-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=8hxuFtlkmuTf0V556QFZ01Z8nXWPeAp9CRCXEoVBJN8=',
      shortDescription: 'Build scalable enterprise-grade solutions to unify business operations and workflows.',
      description: `We design and develop robust enterprise applications that align with your business architecture, improving productivity, integration, and automation across departments.`,
    },
    {
      key: 'sap',
      title: 'SAP Implementation',
      image: 'https://media.istockphoto.com/id/2162910855/photo/sap-system-concept-businessman-touches-icons-related-to-sap-system-application-products-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=3nqZjv5BTy38TeS4eg-mtgaUl8cWDDD8EArZzITqcps=',
      shortDescription: 'Streamline your business processes with expert SAP implementation and integration.',
      description: `Our SAP specialists deliver full-cycle SAP implementation, including customization, data migration, user training, and post-go-live support to ensure maximum value and adoption.`,
    },
    {
      key: 'industry-product',
      title: 'Industry Product Development',
      image: 'https://media.istockphoto.com/id/525883066/photo/ordering-on-line-from-modern-warehouse.webp?a=1&b=1&s=612x612&w=0&k=20&c=W6FjdWT-7CnzqxW0wF6HrKnqKCreUtXEwwz4kru4Zi0=',
      shortDescription: 'Develop niche products tailored to specific industry requirements and compliance.',
      description: `We specialize in building industry-focused software products (agri-tech, sugar,power, manufacturing) that comply with regulations and offer domain-specific features.`,
    },
    {
      key: 'crm',
      title: 'Customized CRM Implementation',
      image: 'https://media.istockphoto.com/id/2155920896/photo/crm-businessman-holding-global-structure-networking-and-crm-connectivity-customer-engagement.webp?a=1&b=1&s=612x612&w=0&k=20&c=CyNJS4S1cvrcYetVRxsSMgnQObAKcZQ1ggq6LmiKkhE=',
      shortDescription: 'Empower your sales and service teams with a custom-built CRM platform.',
      description: `We implement and customize CRM systems (like Salesforce, Zoho, and custom-built) that support your lead pipeline, automate communication, and improve customer relationships.`,
    },
    {
      key: 'erp',
      title: 'ERP Implementation',
      image: 'https://media.istockphoto.com/id/1737085508/photo/enterprise-resource-planning-erp-on-virtual-screen.webp?a=1&b=1&s=612x612&w=0&k=20&c=UBqSkfTu1zTpRexw64NJnua-aHkMjwN5ABybTGDcXZg=',
      shortDescription: 'Integrate and automate core business processes through ERP implementation.',
      description: `We help you select, configure, and deploy ERP systems like SAP, Odoo, Oracle, or custom ERP solutions that centralize data, streamline workflows, and improve reporting.`,
    },
    {
      key: 'maintenance',
      title: 'Application Maintenance',
      image: 'https://images.unsplash.com/photo-1621036579842-9080c7119f67?w=600&auto=format&fit=crop&q=60',
      shortDescription: 'Keep your software optimized, secure, and up-to-date with our ongoing support and maintenance.',
      description: `We offer version upgrades, performance tuning, bug fixing, and 24/7 monitoring for enterprise and cloud-based applications. Our maintenance services ensure your software is secure and performs optimally.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Section */}
      <section className="py-4 flex-grow ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mt-0 mb-4">Software Solutions Tailored to Your Business</h2>
            <p className="max-w-4xl mx-auto text-gray-600">
              Our software development services are designed to streamline your operations, improve user experience, and help you scale efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card) => (
              <div key={card.key} className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500">
                <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.shortDescription}</p>

                  <button
                    className="text-blue-600 mt-4 text-sm font-semibold hover:underline"
                    onClick={() => setExpanded(expanded === card.key ? null : card.key)}
                  >
                    {expanded === card.key ? 'Read Less' : 'Read More'}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      expanded === card.key ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-sm text-gray-600 whitespace-pre-line">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
