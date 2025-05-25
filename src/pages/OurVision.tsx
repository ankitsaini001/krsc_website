import React from 'react';
import { FaBullseye } from 'react-icons/fa';

const OurVision: React.FC = () => {
  return (
    <section className="relative bg-blue-50 py-3 overflow-hidden">
      {/* Background image section */}
      <div className="absolute inset-0">
        <img
          src="https://plus.unsplash.com/premium_photo-1734688664143-dd1021975ffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Vision Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/70 to-blue-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
        {/* Title */}
        <div className="text-center  mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <FaBullseye className="text-blue-700 pt- text-4xl" />
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 mt-3  max-w-xl mx-auto">
            Empowering underserved communities through transformative digital solutions.
          </p>
        </div>

        {/* Vision card */}
        <div className="grid md:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10  shadow-2xl">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              Unlocking business potential with secure, scalable, and innovative technology
              solutions that empower driven individuals in rural and underserved communities.
            </p>
            <p className="text-lg leading-relaxed">
              Our vision is to inspire a future where businesses leverage technology to create
              sustainable growth. We aim to be the leading partner for businesses looking to
              transition into digital transformation, ensuring they remain agile, efficient, and
              competitive in a fast-evolving market.
            </p>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1734688664143-dd1021975ffa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Vision Visual"
            className="rounded-2xl w-full h-72 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
