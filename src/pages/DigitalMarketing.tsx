import React, { useState } from 'react';
import { Mail, Search, Target, PenTool, Share2 } from 'lucide-react';

export const DigitalMarketing: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const services = [
    {
      id: 'seo',
      title: 'Search Engine Optimization (SEO)',
      icon: Search,
      description: 'With over 87% of buyers searching for products and services online, your business stands to gain a wealth of qualified leads and a boost in conversions by ranking highly in search (SERPs).',
      more: 'Our SEO services include on-page optimization, link building, keyword strategy, and performance tracking. We also offer technical SEO audits and local SEO to increase your visibility across all regions you operate in. With data-driven strategies and consistent monitoring, we help you achieve sustained ranking improvements and measurable ROI.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'ppc',
      title: 'Pay-Per-Click (PPC)',
      icon: Target,
      description: 'A paid ad that appears at the very top of search results receives almost 4 times the clicks of those featured at lower positions.',
      more: 'We handle everything from Google Ads to social media paid campaigns. Our team ensures cost-effective ad spend, targeting high-converting audiences using A/B testing and real-time data insights. Through continuous optimization, we help you maximize your ad budget and drive quality traffic to your landing pages.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'content',
      title: 'Content Marketing',
      icon: PenTool,
      description: 'Over 70% of marketers are actively investing in content marketing. We create engaging content for every stage of the customer journey.',
      more: 'From blog articles and white papers to video scripts and infographics, we tailor content that aligns with your brand voice, SEO goals, and conversion paths. Our team ensures each piece of content resonates with your target audience, builds trust, and supports long-term growth.',
      image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'social',
      title: 'Social Media',
      icon: Share2,
      description: 'We help clients build their social media presence strategically, optimizing each channel to feed into their marketing funnel.',
      more: 'Our services include content calendars, influencer partnerships, social ad management, and detailed reporting to improve engagement and ROI. We develop platform-specific strategies that reflect your brand’s identity while encouraging community growth and user interaction.',
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'email',
      title: 'Email Marketing',
      icon: Mail,
      description: 'Email marketing can generate as much as $42 ROI for every $1 spent. We help clients build successful email strategies.',
      more: 'We create personalized workflows, craft compelling subject lines, and use analytics to continually refine and improve email campaign performance. Our approach focuses on segmentation, automation, and user behavior to nurture leads effectively and turn them into loyal customers.',
      image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className=" bg-gray-100 min-h-screen flex flex-col mb-10 text-gray-900 font-sans">
      {/* Main Content */}
      <section className="py-2 flex-grow">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold mt-0 mb-3">Digital Marketing & Branding</h2>
            <p className="max-w-4xl mx-auto text-gray-600">
              Digital marketing services provide businesses of all sizes with an opportunity to market their brand 24/7
              at a low cost. From startups to medium-sized enterprises to multiple-location companies, we help you
              expand your market reach to offer goods and services to your target customers.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{service.description}</p>
                  {expandedCard === service.id && (
                    <p className="text-gray-700 text-sm mt-2">{service.more}</p>
                  )}
                  <button
                    onClick={() =>
                      setExpandedCard(expandedCard === service.id ? null : service.id)
                    }
                    className="mt-2 text-sm font-medium text-blue-600 hover:underline focus:outline-none"
                  >
                    {expandedCard === service.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
