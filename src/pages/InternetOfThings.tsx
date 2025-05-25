import React, { useState } from 'react';

export const InternetOfThings: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const features = [
    {
      id: 'apps',
      title: 'IoT Applications and Products',
      description:
        'We design IoT applications that enhance operational performance and user experience by connecting physical devices and sensors.',
      more:
        'These applications facilitate remote control, monitoring, and data analysis. From smart homes to wearable health tech, we build user-centric, scalable solutions that work across multiple platforms and environments.',
      image:
        'https://media.istockphoto.com/id/1323983873/photo/distrubution-warehouse-with-plexus-remote-control-with-mobile-app-and-technology-devices.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_KzW6TKL7p5j_cfReI-fYGk1PmfPSpH1Uswb7AGXJc=',
    },
    {
      id: 'industrial',
      title: 'Industrial IoT Solutions',
      description:
        'Robust solutions tailored for manufacturing, logistics, and supply chain monitoring—ensuring automation and analytics.',
      more:
        'We integrate sensors and control systems to monitor real-time metrics, predict maintenance needs, and optimize operations across industrial environments, including smart factories and warehouses.',
      image:
        'https://images.unsplash.com/photo-1720036236694-d0a231c52563?w=600&auto=format&fit=crop&q=60',
    },
    {
      id: 'security',
      title: 'IoT Security',
      description:
        'End-to-end encryption and secure data communication for IoT devices and networks to ensure maximum safety.',
      more:
        'We implement robust security layers including TLS/SSL, firmware validation, anomaly detection, and secure firmware updates to ensure device integrity and compliance with global standards.',
      image:
        'https://media.istockphoto.com/id/1289956604/photo/digital-security-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=zNeSQ3IrO7uuLLiVyD1hVHYWmC2FoBkBB3WyOPws2yA=',
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Section: IoT Development Features */}
      <section className="py-2 text-center">
        <h2 className="text-4xl font-bold mb-3 text-black">End-to-End IoT Software Development</h2>
        <p className="text-gray-700 mb-5 text-center max-w-3xl mx-auto">
          Our IoT software development services cover everything from device integration to data analytics.
          We build connected ecosystems that collect, process, and visualize data from smart devices to enhance automation,
          improve decision-making, and create seamless user experiences across industries like manufacturing,
          healthcare, smart homes, and logistics.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {features.map((feature) => (
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

      {/* Section: IoT Use Cases */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Home Automation */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://media.istockphoto.com/id/1329913473/photo/smart-home-mobile-phone-control.webp?a=1&b=1&s=612x612&w=0&k=20&c=BJUaLG5Kt8BGdv6vyLM46moRPpiryvHDbcBlh3eoE7I="
              alt="Home Automation"
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Home Automation</h3>
              <p className="text-gray-700 text-lg">
                Home automation systems powered by IoT allow users to control lighting, climate, appliances,
                and security systems remotely. Integrate with smart assistants and mobile apps to customize
                routines, monitor energy usage, and improve daily living comfort and safety.
              </p>
            </div>
          </div>

          {/* Healthcare */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="https://media.istockphoto.com/id/1171902434/photo/smart-industry-control-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=cpvGEK2EhmFar7c7mRBKbs2N_Yfrc1VPiYF1jiavp38="
              alt="Healthcare IoT"
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Healthcare IoT</h3>
              <p className="text-gray-700 text-lg">
                IoT in healthcare enables real-time monitoring of vital signs, chronic disease management,
                and improved patient engagement. Devices such as wearable ECG monitors or smart pill dispensers
                integrate with cloud platforms, providing timely alerts to caregivers and facilitating remote diagnostics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
