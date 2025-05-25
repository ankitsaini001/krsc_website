import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { FaBook, FaBullseye, FaRegLightbulb, FaUsers, FaHandshake } from 'react-icons/fa';
import OurStory from './OurStory';
import Vision from './OurVision';
import CoreValues from './CoreValues';
import WhyChooseKRC from './WhyChooseKRC';
import OurMission from './OurMission';

const sections = [
  {
    title: 'Our Story',
    path: 'our-story',
    icon: <FaBook className="text-blue-600 text-4xl" />,
  },
  {
    title: 'Our Vision',
    path: 'vision',
    icon: <FaBullseye className="text-blue-600 text-4xl" />,
  },
  {
    title: 'Our Mission',
    path: 'mission',
    icon: <FaRegLightbulb className="text-blue-600 text-4xl" />,
  },
  {
    title: 'Core Values',
    path: 'core-values',
    icon: <FaUsers className="text-blue-600 text-4xl" />,
  },
  {
    title: 'Why Choose KRC',
    path: 'why-choose-krc',
    icon: <FaHandshake className="text-blue-600 text-4xl" />,
  },
];

const AboutUs: React.FC = () => {
  const location = useLocation();
  const isRootAboutUs = location.pathname === '/about-us';

  return (
    <div className="mb-20 ml-10 mr-10 text-black bg-gray-100">
      {/* Cards section on /about-us only */}
      {isRootAboutUs && (
        <section className="py-3 px-6 bg-white ">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">About Us</h2>
            <p className="text-center text-gray-700 mb-10 text-lg max-w-3xl mx-auto">
              Learn more about KRCS – a leading IT services and consulting firm. Explore our story, values, mission, vision,
              and the principles that guide our commitment to innovation and client success.
            </p>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {sections.map((section, idx) => (
                <Link
                  key={idx}
                  to={section.path}
                  className="bg-blue-50 hover:bg-blue-100 transition-colors rounded-2xl shadow-md p-6 flex flex-col justify-center items-center text-center border border-blue-100 hover:shadow-lg"
                >
                  <div className="mb-4">{section.icon}</div>
                  <div className="text-xl font-semibold text-blue-800">{section.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sub-routes */}
      <Routes>
        <Route path="our-story" element={<OurStory />} />
        <Route path="vision" element={<Vision />} />
        <Route path="mission" element={<OurMission />} />
        <Route path="core-values" element={<CoreValues />} />
        <Route path="why-choose-krc" element={<WhyChooseKRC />} />
      </Routes>
    </div>
  );
};

export default AboutUs;
