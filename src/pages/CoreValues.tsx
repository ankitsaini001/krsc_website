import React from 'react';
import {
    FaBullseye,
    FaGem,
    FaHandshake,
    FaMedal,
    FaRegLightbulb,
    FaUsers,
} from 'react-icons/fa';

const CoreValues: React.FC = () => {
    return (
        <section className="relative max-w-5xl mx-auto px-6 py-0  space-y-12">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white/70 to-blue-50 opacity-50"></div>

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-8  justify-center">
                    <FaGem className="text-blue-600 text-3xl" />
                    <h2 className="text-5xl font-semibold text-black ">Core Values</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: <FaHandshake />, title: 'Integrity', text: 'We act with honesty and uphold the highest standards of moral and ethical values. Integrity is the cornerstone of our decision-making, business conduct, and client relationships.' },
                        { icon: <FaRegLightbulb />, title: 'Innovation', text: 'We are continuously evolving, embracing emerging technologies, and challenging conventional thinking to deliver cutting-edge solutions.' },
                        { icon: <FaBullseye />, title: 'Customer Success', text: 'Our clients’ success is our top priority. We take time to understand their unique needs to deliver solutions that generate real business value.' },
                        { icon: <FaUsers />, title: 'Collaboration', text: 'We believe meaningful progress is achieved through collaboration—both within our team and with our clients.' },
                        { icon: <FaMedal />, title: 'Excellence', text: 'Excellence is more than a goal—it’s our standard. We are dedicated to delivering superior quality in every aspect of our work.' },
                        { icon: <FaHandshake />, title: 'Trust', text: 'Trust is earned through consistency, dependability, and integrity. We aim to build long-lasting relationships by being transparent and honoring our commitments.' },
                    ].map((value, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
                        >
                            <div className="text-blue-600 text-3xl mb-3">{value.icon}</div>
                            <h4 className="font-bold text-lg mb-1 text-black">{value.title}</h4>
                            <p className="text-black text-sm whitespace-pre-line">{value.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoreValues;
