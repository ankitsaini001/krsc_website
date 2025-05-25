import React from 'react';
import { FaBookOpen } from 'react-icons/fa';

const OurStory: React.FC = () => {
  return (
    <section className="relative bg-gray-50 py-3 overflow-hidden">
      {/* Background image layer */}
      <div className="absolute inset-0">
        <img
          src="https://media.istockphoto.com/id/467745366/photo/writing-a-diary.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/70 to-blue-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 flex items-center justify-center gap-3">
            <FaBookOpen className="text-blue-700 text-4xl" />
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            From a small dream to a big impact — the journey that shaped KRCS.
          </p>
        </div>

        {/* Story Card */}
        <div className="grid md:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
          <img
            src="https://media.istockphoto.com/id/467745366/photo/writing-a-diary.webp?a=1&b=1&s=612x612&w=0&k=20&c=U3ilJrqgGZ7ZNyYYIkvrzkz3JkbG_NOFw_Tl2hiA_rs="
            alt="Our Story Visual"
            className="rounded-2xl w-full h-80 object-cover shadow-lg"
          />
          <div className="space-y-6 text-gray-700">
            <p className="text-lg leading-relaxed">
              In 2024, a group of software engineers—friends and colleagues—came together with a
              shared mission: to educate and support individuals who are often overlooked or hard to
              reach. We are committed to fulfilling our customers’ requirements through trust,
              transparency, and innovation while ensuring efficiency in our services.
            </p>
            <p className="text-lg leading-relaxed">
              We specialize in tailored solutions across AI, IoT, software development, and
              technology training. Our team of industry experts brings decades of experience. From
              humble beginnings, KRCS has grown into a full-service IT provider, empowering
              businesses across sectors to embrace digital transformation with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
