import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ArtificialIntelligence } from './pages/ArtificialIntelligence';
import { InternetOfThings } from './pages/InternetOfThings';
import { CustomSoftware } from './pages/CustomSoftware';
import { StaffAugmentation } from './pages/StaffAugmentation';
import { GrcAutomation } from './pages/GRCAutomation';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { Contact } from './pages/Contact';
import { HowWeWork } from './pages/HowWeWork';
import Career from './pages/Career';
import AboutUs from './pages/AboutUs';
import ScrollAbove from './pages/Scroll';
import KrcsAcademy from './pages/Academy';
import KrcsCoe from './pages/CoE';
import CompleteNetworkingSolutions from './pages/CompleteNetworkingSolutions';
import Leadersip from './pages/Leadership';
import Apply from './pages/Apply';


function App() {
  return (
    <Router>
      <ScrollAbove />
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/services/Our-Services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/complete-networking" element={<CompleteNetworkingSolutions />} />
          <Route path="/complete-network" element={<CompleteNetworkingSolutions />} />
          <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/services/internet-of-things" element={<InternetOfThings />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/custom-software" element={<CustomSoftware />} />
          <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
          <Route path="/services/grc-automation" element={<GrcAutomation />} />
          <Route path="/leadership" element={<Leadersip />} />
          <Route path="/services/leadership" element={<Leadersip />} />
          <Route path="/services/contact" element={<Contact />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/custom-software" element={<CustomSoftware />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/Internet-Of-Things" element={<InternetOfThings />} />
          <Route path="/case-studies" element={<HowWeWork />} />
          <Route path="/academy" element={<KrcsAcademy />} />
          <Route path="/coe" element={<KrcsCoe />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/about-us/*" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
