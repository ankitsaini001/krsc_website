import React from 'react';
import { Link } from 'react-router-dom';

export const HowWeWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-3 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h1>
          <p className="text-gray-500 text-lg">
            Insights into how we deliver innovative solutions that create real impact.
          </p>
        </div>
      </section>

      {/* Case Study 1 */}
      <section className="py-3 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://media.istockphoto.com/id/479887304/photo/aerial-power-sunset-times.webp?a=1&b=1&s=612x612&w=0&k=20&c=yNsH2qOosdaMghVOOtG8kPnWfzOagng3wrMVbhSIQl0="
              alt="Sugar Plant"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Real-Time Plant Monitoring System for a Leading Industrial Group
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              We partnered with a leading industrial group in the sugar and power sector to develop a robust and secure web-based application for real-time operational monitoring.
              The system captures approximately 500 data tags per second from plant DCS servers using an OPC Gateway and Client, temporarily storing data in a SQL database with 24-hour retention.
              A Python-based backend serves secure APIs to a React.js frontend, offering intuitive dashboards that display live system statuses with color-coded alerts (Ideal, Caution, Critical).
              Historical trends and performance data are accessible for analysis, aiding informed decision-making.
              The platform features role-based access control and is hosted internally via IIS, delivering improved operational visibility, faster response times, and data-driven management for the client.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://media.istockphoto.com/id/174833904/photo/a-sugar-factory-containing-machines.webp?a=1&b=1&s=612x612&w=0&k=20&c=qCfmlf7e-QY2DZl3a6FOHUPvhq6S-O1A_YPYhTz3uM4="
              alt="SAP Integration"
              className="rounded-2xl shadow-md object-cover w-full h-80"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Seamless Integration with SAP for Smarter Production
            </h2>
            <p className="text-gray-700 text-md leading-relaxed">
              We successfully integrated our custom-built interface with SAP APIs to automate and streamline the sugar production order process for a large industrial group.
              This solution enables real-time synchronization of data from weighing machines and quality inspection labs directly into SAP, eliminating manual updates and reducing the chances of human error.
              The system now supports partial order completions through automated data input, ensuring continuous updates of inventory with minimal disruption.
              By bridging our interface with SAP, we’ve significantly enhanced operational efficiency, traceability, and accuracy across production, quality control, and inventory management—
              delivering a smarter, faster, and more reliable production planning workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Under Construction Section (optional) */}
      <section className="py-20 bg-white">
  <div className="text-center text-blue-600 text-lg font-semibold">
    More case studies coming soon — stay tuned!
  </div>
</section>
    </div>
  );
};
