import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Artificial Intelligence (AI)',
    description: 'Machine Learning, Predictive Analysis, AI Consulting, Generative AI',
    image: 'https://media.istockphoto.com/id/2183748780/photo/artificial-intelligence.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBHginkDrPKr1r0BtEe9PkJ2CtghLgbhoYR-Hhn2o3Q=',
    path: '/artificial-intelligence',
  },
  {
    title: 'Staff Augmentation',
    description: 'Determine desired skills, Manpower requirement, Candidate Search, Screening process, Set up interview',
    image: 'https://leveledge.in/wp-content/uploads/2023/08/Staff-Augmentation.jpg',
    path: '/services/staff-augmentation',
  },
  {
    title: 'Internet of Things (IoT)',
    description: 'Smart Devices, IoT Integration, Industrial IoT Solutions',
    image: 'https://media.istockphoto.com/id/2187889393/photo/businessman-control-and-monitoring-iot-technology-system-on-digital-screen-connectivity.webp?a=1&b=1&s=612x612&w=0&k=20&c=P-s1hppRqZpsW2GZGW6Madsmdt5BKaZBdWdsOXGn9Lk=',
    path: '/Internet-Of-Things',
  },
  {
    title: 'Custom Software Development',
    description: 'Tailored Software, ERP, SAP Implementation,Enterprise App Development',
    image: 'https://media.istockphoto.com/id/2156385097/photo/hispanic-latin-american-couple-software-engineer-developer-use-computer-work-on-program.webp?a=1&b=1&s=612x612&w=0&k=20&c=psBKOkLwPrbjDdy0aEy0I6g8AFXM7GxeVrzGCd6uTuw=',
    path: '/custom-software',
  },
  {
    title: 'GRC Automation',
    description: 'Tailored Software, Mobile apps, Web Devlopment',
    image: 'https://plus.unsplash.com/premium_photo-1714816334057-d697e55cfeb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JjJTIwYXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    path: '/services/grc-automation',
  },
  {
    title: 'Digital Marketing & Branding',
    description: 'SEO & SEM, Social Media Campaigns, Brand Strategy, Content Marketing',
    image: 'https://media.istockphoto.com/id/935427102/photo/digital-marketing-word-on-blackboard-with-supportive-icons.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ank_Ll9rLL-olgS8u81HuPChXqLBoREO1CI3f33qwsA=',
    path: '/digital-marketing',
  },
  {
    title: 'Complete Networking Solutions',
    description: 'Network Infrastructure, Server Management, Cloud Networking',
    image: 'https://media.istockphoto.com/id/488104011/photo/fibre-optic-networking.webp?a=1&b=1&s=612x612&w=0&k=20&c=Qyy-jJ5GXmsxX7EZa1lvg3wOHAj1gKbxYVFmaSfEiDQ=',
    path: '/complete-network',
  },
];

export const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-3">
        <h2 className="text-6xl font-bold text-center mb-4 text-gray-800">Core Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <button
                  onClick={() => navigate(service.path)}
                  className="text-blue-600 text-sm font-semibold hover:underline flex items-center justify-center"
                >
                  Read More
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
                    alt="arrow"
                    className="ml-2 w-4 h-4"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
