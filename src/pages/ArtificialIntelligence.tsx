import React, { useState } from 'react';

export const ArtificialIntelligence: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const aiServices = [
    {
      title: 'AI Agents',
      desc: 'Autonomous agents that perform tasks, make decisions, and boost productivity without human input.',
      more: `AI agents are capable of operating independently within complex environments. They can interact with users, retrieve data, perform tasks, and even collaborate with other agents using advanced reasoning. Use cases range from personal assistants to workflow automation and robotic process automation.`,
      img: 'https://media.istockphoto.com/id/2102230884/photo/woman-talking-on-phone.webp?a=1&b=1&s=612x612&w=0&k=20&c=8LsnHOAZR_wvwHBRXIHYqngBGM-pk7nGw1Hr3dLmuMk=',
    },
    {
      title: 'Multimodal AI',
      desc: 'AI that understands and processes text, images, and audio together for smarter applications.',
      more: `Multimodal AI combines multiple input types — such as voice, visual, and text data — to enable richer understanding. This technology powers innovations like AI copilots, voice assistants with visual awareness, and content generation tools that understand context across formats.`,
      img: 'https://media.istockphoto.com/id/2192489875/photo/ai-and-machine-learning-generative-technology-for-business-and-data-algorithms-llms-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=cC1-8JQoKbJEC1D6emsemXC-RqVuA1JxF5fW8JU7698=',
    },
    {
      title: 'LLM Fine-Tuning',
      desc: 'Customize large language models like GPT with your own data for more accurate, business-specific output.',
      more: `Fine-tuning lets businesses train large language models on domain-specific data. This improves the relevance, accuracy, and tone of AI responses in areas like customer service, legal assistance, finance, and healthcare. It enables private, compliant, and effective AI solutions.`,
      img: 'https://media.istockphoto.com/id/2207141987/photo/llm-large-language-model-and-custom-ai-solutions-artificial-intelligence-driven-automation.webp?a=1&b=1&s=612x612&w=0&k=20&c=BVDwzj_QCNtgvvPWhQOSpAkXpEt6dZx65vlh0DEs-tw=',
    },
    {
      title: 'AI Automation',
      desc: 'Streamline operations with intelligent workflows in finance, healthcare, logistics, and more.',
      more: `AI automation improves business efficiency by reducing manual tasks and increasing speed. From document processing and invoice management to automated claims and logistics optimization, intelligent systems are reducing costs while improving accuracy and agility.`,
      img: 'https://plus.unsplash.com/premium_photo-1675793714962-a2413250c490?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBBdXRvbWF0aW9ufGVufDB8fDB8fHww',
    },
    {
      title: 'AI Customer Support',
      desc: 'Deploy AI chatbots to deliver 24/7 human-like support and resolve queries instantly.',
      more: `AI customer support solutions include intelligent chatbots, virtual agents, and voice assistants. These systems reduce response time, enhance user experience, and operate at scale. They also integrate with CRMs and support analytics to improve performance and satisfaction.`,
      img: 'https://img.freepik.com/free-vector/ai-robotic-chatbot-application-customer-support_107791-2407.jpg',
    },
    {
      title: 'Predictive Analytics',
      desc: 'Use AI to forecast trends and behaviors, enabling proactive decision-making.',
      more: `Predictive analytics uses machine learning and historical data to predict future events. It is widely used for demand forecasting, risk assessment, customer retention, and maintenance scheduling. With AI, businesses make smarter, proactive decisions based on data trends.`,
      img: 'https://media.istockphoto.com/id/2192470989/photo/abstract-representation-of-stock-market-fluctuations-for-ai-training-and-predictive-analytics.webp?a=1&b=1&s=612x612&w=0&k=20&c=wvBQjhNxCoTXL7KeozSo_8pDx-d2kJ9_c1wTUbRfDWU=',
    },
  ];

  return (
    <div className=" text-gray-900 font-sans mb-10 bg-gray-100">
      {/* Intro */}
      <div className="container mx-auto px-4 py-3 text-center bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2 text-gray-900">
          High-Demand AI Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your business with cutting-edge AI solutions that drive innovation, efficiency, and growth.
        </p>
      </div>

      {/* AI Services */}
      <div className="container mx-auto px-4 py- grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-100">
        {aiServices.map((service, idx) => (
          <div
            key={idx}
            className=" shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.desc}</p>

              <button
                className="text-blue-600 text-sm mt-2 font-semibold hover:underline"
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              >
                {expanded === idx ? 'Read Less' : 'Read More'}
              </button>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expanded === idx ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {service.more}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
