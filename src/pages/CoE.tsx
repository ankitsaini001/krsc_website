import React from 'react';

const KrcsCoe = () => {
  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-50 py-3 overflow-hidden">
        {/* Background image layer */}
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/1306669539/photo/businessman-touching-virtual-dartboard-with-arrow-business-achievement-objective-target.webp?a=1&b=1&s=612x612&w=0&k=20&c=NFLzdj4b3IQoQeP2tnMsrjRkmRHlp2WXB47UzDW_ZuM="
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/70 to-blue-50"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-extrabold mb-4 text-black-900 drop-shadow-sm">
              KRCS Center of Excellence
            </h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-700">
              Empowering innovation and technology excellence through collaborative research, learning, and transformative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative bg-white py-10 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.istockphoto.com/id/1306669539/photo/businessman-touching-virtual-dartboard-with-arrow-business-achievement-objective-target.webp?a=1&b=1&s=612x612&w=0&k=20&c=NFLzdj4b3IQoQeP2tnMsrjRkmRHlp2WXB47UzDW_ZuM="
            alt="Background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-white/90"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-12 z-10">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-12 bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
            {/* Text Content */}
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                At KRCS, we have proudly served India’s leading enterprises and agile startups for over a year. With a strong India-centric focus, 
                our solutions consistently give clients a competitive advantage through efficiency and innovation.
              </p>
              <p className="text-lg leading-relaxed">
                Facing complex cost and margin pressures, our Center of Excellence (CoE) emerged as a strategic initiative to deliver consistent 
                excellence and cutting-edge results, embracing emerging technologies and agile methodologies.
              </p>
              <p className="text-lg leading-relaxed">
                Since its inception, our CoE has focused on three strategic pillars:
                <span className="block mt-2">
                  <strong>• Innovation & Research</strong> – Creating efficient, cost-effective tech solutions.
                </span>
                <span>
                  <strong>• Quality Enhancement</strong> – Elevating our service delivery standards.
                </span>
                <span>
                  <strong>• Capability Building</strong> – Enabling talent growth through the KRCS Academy.
                </span>
              </p>
            </div>

            {/* Image */}
            <img
              src="https://media.istockphoto.com/id/1306669539/photo/businessman-touching-virtual-dartboard-with-arrow-business-achievement-objective-target.webp?a=1&b=1&s=612x612&w=0&k=20&c=NFLzdj4b3IQoQeP2tnMsrjRkmRHlp2WXB47UzDW_ZuM="
              alt="Center of Excellence Visual"
              className="rounded-2xl w-full lg:h-96 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default KrcsCoe;
