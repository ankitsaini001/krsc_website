import React from 'react';

const WhyChooseKRC: React.FC = () => {
  return (
    <section className="relative bg-blue-50 py-3 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437f0?auto=format&fit=crop&w=1050&q=80"
          alt="Why Choose Us Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/60 to-blue-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10">
        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">Why Choose KRCS?</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover what sets us apart in delivering cutting-edge, client-focused technology solutions.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-2xl">
          <ul className="list-disc list-inside space-y-4 text-gray-700 text-base leading-relaxed">
            <li>Decades of collective experience in IT consulting and digital transformation</li>
            <li>Agile delivery with transparent communication, allowing us to adapt to changing needs</li>
            <li>Certified experts in IoT, AI/ML, Software Development, Digital Marketing, and Networking</li>
            <li>Dedicated support, post-launch optimization, and continuous improvement, ensuring long-term success</li>
            <li>Proven track record with businesses of all sizes, from startups to large enterprises</li>
            <li>End-to-end solutions: from conceptualization to post-launch monitoring and scaling</li>
            <li>Personalized approach, understanding your unique needs to provide tailored solutions</li>
          </ul>

          <img
            src="https://media.istockphoto.com/id/858309414/photo/why-choose-us.webp?a=1&b=1&s=612x612&w=0&k=20&c=I7rwNqRTDRx3XE3Q9HgYiYhdgAc5nwR2gwnznQhsze0="
            alt="Why Choose KRCS"
            className="rounded-2xl w-full h-72 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKRC;
