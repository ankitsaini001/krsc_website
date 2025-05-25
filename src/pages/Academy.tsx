import React, { useState } from 'react';
import { GraduationCap, Code, MonitorCheck, Users, Cpu, Database, Server, Layers } from "lucide-react";
import { TbCloudComputing } from 'react-icons/tb';

interface Course {
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  longDescription: string;
}

const coursesData: Course[] = [
  {
    title: "Full Stack Development",
    icon: <GraduationCap className="text-blue-600 mb-3" size={40} />,
    shortDescription: "Master frontend & backend with real-world projects.",
    longDescription: "This course covers HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. You’ll build full-fledged web apps with hands-on assignments and capstone projects."
  },
  {
    title: "SAP Development",
    icon: <Layers className="text-cyan-600 mb-3" size={40} />,
    shortDescription: "relevant SAP skills with expert-led courses across FICO, MM, SD, HCM, ABAP, and more.",
    longDescription: "Unlock your potential with industry-recognized SAP training designed for both beginners and professionals. Our courses comprehensively cover key SAP modules such as FICO, MM, SD, HCM, and ABAP, helping you gain hands-on experience and certification readiness."
  },
  {
    title: "cloud computing",
    icon: <TbCloudComputing className="text-cyan-600 mb-3" size={40} />,
    shortDescription: "Master Cloud platforms like AWS, Azure, and Google Cloud with real-world Scenarios.",
    longDescription: "This course to provides a deep dive into cloud architecture, Service, and deployment models.Learn to manage infrastructure, Scale application and ensure security using top platforms like AWS, Microsoft Azure, and Google Cloud Platform"
  },
  {
    title: "AI & Machine Learning",
    icon: <MonitorCheck className="text-violet-600 mb-3" size={40} />,
    shortDescription: "Build intelligent systems and analyze real data.",
    longDescription: "Learn supervised/unsupervised learning, deep learning, and tools like Python, TensorFlow, and scikit-learn through real-world datasets and projects."
  },
  {
    title: "IoT (Internet of Things)",
    icon: <Cpu className="text-orange-500 mb-3" size={40} />,
    shortDescription: "Connect devices, collect data, and automate systems.",
    longDescription: "Explore embedded systems, sensor integration, communication protocols (MQTT, BLE), and cloud platforms to design your own IoT solutions."
  },
  {
    title: "Database Management",
    icon: <Database className="text-indigo-600 mb-3" size={40} />,
    shortDescription: "Design, manage, and optimize data systems.",
    longDescription: "Gain expertise in SQL, NoSQL, relational modeling, indexing, query optimization, and database security with PostgreSQL and MongoDB."
  }
];

const KrcsAcademy = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-12 px-6 text-center bg-white">
        <h1 className="text-5xl font-bold mb-3">KRCS Academy</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          <span className="text-orange-500 font-medium">Learn.</span>{' '}
          <span className="text-pink-500 font-medium">Build.</span>{' '}
          <span className="text-green-500 font-medium">Innovate.</span> Your journey to technical excellence starts here.
        </p>
      </section>

      {/* Popular Courses Section */}
      <section className="container mx-auto py-10 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Popular Courses</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              {course.icon}
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.shortDescription}</p>
              {expandedIndex === index && (
                <p className="text-gray-600 mt-2 text-sm">{course.longDescription}</p>
              )}
              <button
                onClick={() => toggleExpand(index)}
                className="mt-4 inline-block text-blue-600 text-sm font-medium hover:underline focus:outline-none"
              >
                {expandedIndex === index ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose KRCS Section */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Why Choose KRCS Academy?</h2>
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <Users size={36} className="mx-auto mb-3 text-red-500" />
            <h4 className="text-xl font-semibold mb-2 text-gray-700">Industry Experts</h4>
            <p className="text-gray-600">Learn from professionals with real-world experience.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <MonitorCheck size={36} className="mx-auto mb-3 text-green-600" />
            <h4 className="text-xl font-semibold mb-2 text-gray-700">Hands-on Projects</h4>
            <p className="text-gray-600">Work on live projects to strengthen your portfolio.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KrcsAcademy;
