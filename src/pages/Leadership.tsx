import React from 'react';

const leaders = [
  {
    name: "Divya Madaan",
    title: "Manager Projects",
    bio: "Divya brings nearly a decade of experience in the Information Technology industry, with a strong focus on Quality Assurance and Project Management across various domains. She also plays a key role in client engagement, fostering long-term partnerships through strategic collaboration."
  },
  {
    name: "Satyavan Yadav",
    title: "Founder and CTO",
    bio: "Satyavan is a tech-driven leader with 17+ years of experience building scalable products and managing high-performing engineering teams. With deep expertise in cloud, DevOps, and backend systems, he blends hands-on tech skills with a sharp business mindset. Now stepping into the role of CTO, he’s focused on turning bold ideas into real-world impact through smart technology and strong execution."
  },
  {
    name: "Piyush Yadav",
    title: "Head of Operations",
    bio: "Piyush ensures seamless execution and operational efficiency, delivering customer satisfaction at every touchpoint."
  }
];

const KrcsLeadershipTeam = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <section className="py-3 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Leadership Team</h1>
          <p className="text-gray-500 text-lg">
            The driving force behind KRCS — a team of visionary leaders shaping the future of technology.
          </p>
        </div>
      </section>

      {/* Leadership Cards in a single row on large screens */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow hover:shadow-xl transition p-6 text-center"
              >
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-slate-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5a8.25 8.25 0 0115 0v.75H4.5v-.75z"
                    />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-slate-800">{leader.name}</h2>
                <p className="text-sm text-slate-500 mb-2">{leader.title}</p>
                <p className="text-sm text-gray-600">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Below Leadership Team */}
      <section className="py-8 bg-white">
        <div className="text-center text-blue-600 text-lg font-semibold">
          Empowering innovation and excellence — leading the way toward a brighter future at KRCS.
        </div>
      </section>
    </div>
  );
};

export default KrcsLeadershipTeam;
