import React from 'react';
import { FaRegLightbulb } from 'react-icons/fa';

const OurMission: React.FC = () => {
  return (
    <section className="relative bg-blue-50 py-3 overflow-hidden">
      {/* Background image section */}
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/60 to-blue-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <FaRegLightbulb className="text-blue-700 text-4xl" />
            Our Mission
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-xl mx-auto">
            Driving innovation and empowering businesses with future-ready technology.
          </p>
        </div>

        {/* Mission card */}
        <div className="grid md:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              To serve humanity by equipping our team with up-to-date knowledge and cutting-edge
              technology. We deliver reliable, scalable, and sustainable IT services through
              collaboration, innovation, and excellence, helping clients unlock new opportunities
              and efficiencies.
            </p>
            <p className="text-lg leading-relaxed">
              Our mission extends beyond just providing technical services. We aim to empower
              businesses of all sizes to thrive, increase productivity, and reduce costs while
              staying ahead of technological trends.
            </p>
          </div>
          <img
            src="https://media.istockphoto.com/id/1686497935/photo/business-man-running-on-arrow-shaped-bridge-to-the-light.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZptNdZTfzPsm_wNJAZvrlaPRSP5fEqiHEBDXT1x45LY="
            alt="Mission Visual"
            className="rounded-2xl w-full h-72 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
