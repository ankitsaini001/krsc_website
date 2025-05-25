import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Rocket,
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const heroSlides = [
    {
      heading: (
        <>
          Empowering Real-Time<span className="text-blue-500">  Operational Monitoring with Secure, Data-Driven Insights for  Smarter Decision-Making </span>
        </>
      ),
      image:
        "https://media.istockphoto.com/id/522394210/photo/sugar-mill-industry.webp?a=1&b=1&s=612x612&w=0&k=20&c=ap4pZkhweBYssMq2YIIjuk-8ydI0ehlXhR7Vln2nYlY=",
    },
    {
      heading: (
        <>
          Seamlessly Integrating SAP <span className="text-blue-400"> for Smarter, Error-Free Sugar Production and </span> Streamlined
          Order Management.
        </>
      ),
      image:
        "https://media.istockphoto.com/id/1700731268/photo/sap-system-software-automation-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=7CrdUUhANR36AkLmIEkLNJn0BgVkUCZd1pVhT-Lz85A=",
    },
    {
      heading: (
        <>
          KRCS Unveils SAP Academy:  <span className="text-blue-400">Empowering the Future of Business with Expert SAP Training and Knowledge</span> 
        </>
      ),
      image:
        "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1950&q=80",
    },
    {
      heading: (
        <>
          KRCS <span className="text-blue-400"> is Revolutionizing Building Management with Smart IoT Solutions for Efficiency and Control</span>
        </>
      ),
      image:
        "https://media.istockphoto.com/id/1170644956/photo/futuristic-osaka-electromagnetic-signals.webp?a=1&b=1&s=612x612&w=0&k=20&c=OeEgQGc0ni-XHtaBA-El6pq1u0s2CF-EKBC-kEKFWno=",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // updated to 8 seconds
    return () => clearInterval(interval);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative h-[300px] flex items-center justify-center text-center bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${heroSlides[currentSlide].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white px-4">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg"
          >
            {heroSlides[currentSlide].heading}
          </motion.h1>
          <div className="mt-4 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advance Humanity */}
      <section className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl font-extrabold mb-6">
            <span className="text-blue-600">🚀 Advance Humanity</span> To The
            Next Level
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            <span className="font-semibold text-blue-700">Founded in 2024</span>{" "}
            by a passionate group of software engineers, KRCS is on a mission to{" "}
            <span className="text-blue-600 font-semibold">
              inspire, innovate, and empower
            </span>
            . Our journey began with a vision — to bridge the gap between
            technology and humanity.
          </p>
          <div className="space-y-4 text-gray-800">
            {[
              "Crafting innovative solutions for a dynamic world",
              "Delivering industry-specific strategies that work",
              "Leveraging cutting-edge software expertise",
              "Building a future-ready ecosystem",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 transition-transform hover:scale-105 duration-200"
              >
                <span className="text-blue-500 text-xl">✨</span>
                <span className="text-base md:text-lg">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <img
            src="https://imgs.search.brave.com/oqSirvMxk4MP2sdGZUVoWLzZLoO-bvARJ0vaIT5rxI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzQyLzg4Lzc3/LzM2MF9GXzI0Mjg4/NzcxNV9nRFBYckpU/eFZWdkowQ0VuYzVT/NTBQSVUwV2xDVFc3/ei5qcGc"
            alt="Technology"
            className="rounded-2xl shadow-2xl w-full max-w-[500px] hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </section>

      {/* Metrics + CTA */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { count: "7+", label: "Successful Implementations" },
              { count: "1+", label: "Years of Client Engagement" },
              { count: "17+", label: "Industry Expertise" },
              { count: "4", label: "Satisfied Customers" },
            ].map((item, index) => (
              <div key={index}>
                <Rocket className="mx-auto text-blue-500 w-8 h-8 mb-2" />
                <h3 className="text-2xl font-bold text-blue-600">
                  {item.count}
                </h3>
                <p className="text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-600 text-white rounded-lg p-6 shadow-md text-center">
              <p className="text-lg font-semibold mb-4">
                Let us open the world of emerging technology to you
              </p>
              <button
                  onClick={() => navigate("/contact")}
                  className="bg-white text-blue-600 px-6 py-2 font-bold rounded-full shadow-md 
                            hover:bg-gray-100 hover:shadow-lg hover:scale-105 transform transition 
                            duration-200 ease-in-out cursor-pointer"
                >
                  Free Consultation
                </button>
            </div>
            <div className="bg-black text-white rounded-lg p-6 shadow-md text-center">
              <p className="text-lg font-semibold mb-4">Need quick help? Call now</p>
              <div className="flex justify-center items-center gap-2 text-xl font-bold">
                <PhoneCall className="w-5 h-5" />
                +91-9654945454
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
