import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              KRCS is a leading technology consulting company providing innovative solutions
              in AI, IoT, and digital transformation.
            </p> 
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/case-studies" className="text-gray-400 hover:text-white">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/artificial-intelligence" className="text-gray-400 hover:text-white">Artificial Intelligence</Link></li>
              <li><Link to="/internet-of-things" className="text-gray-400 hover:text-white">Internet of Things</Link></li>
              <li><Link to="/custom-software" className="text-gray-400 hover:text-white">Custom Software Solutions</Link></li>
              <li><Link to="/digital-marketing" className="text-gray-400 hover:text-white">Digital Marketing</Link></li>
              <li><Link to="/complete-network" className="text-gray-400 hover:text-white">Complete Networking Solutions</Link></li>
              <li><Link to="/services/grc-automation" className="text-gray-400 hover:text-white">Grc Automation</Link></li>
               <li><Link to="/services/staff-augmentation" className="text-gray-400 hover:text-white">Staff Augmentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+919654945454" className="text-gray-400 hover:text-white">+91-9654945454</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:sales@krcs.in" className="text-gray-400 hover:text-white">sales@krcs.in</a>
              </li>
              <li className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2" />
                <a href="https://www.linkedin.com/company/krcs-in/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B29xKKgYWRHqxIHwoRHpG7Q%3D%3D" className="text-gray-400 hover:text-white">linkedin/krcs</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span className="text-gray-400">
                  Sco-13, First Floor, Sector 15 Part-2, Gurgaon
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} KRCS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};