import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import logo from "../dist/assets/logo.png";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const [showWhatWeDoDropdown, setShowWhatWeDoDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const [showWhoWeAreDropdown, setShowWhoWeAreDropdown] = useState(false);
  const [activeWhoTab, setActiveWhoTab] = useState("about");

  const location = useLocation();
  const whatDropdownRef = useRef(null);
  const whoDropdownRef = useRef(null);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setShowWhatWeDoDropdown(false);
    setShowWhoWeAreDropdown(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        whatDropdownRef.current &&
        !whatDropdownRef.current.contains(event.target as Node)
      ) {
        setShowWhatWeDoDropdown(false);
      }
      if (
        whoDropdownRef.current &&
        !whoDropdownRef.current.contains(event.target as Node)
      ) {
        setShowWhoWeAreDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="main-header">
      <div
        className={`header-lower  bg-white  z-50 transition-all duration-300 ${isSticky ? "fixed top-0 left-0 right-0" : ""
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="KRCS" className="h-10" />
            </Link>

            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex space-x-6 items-center">
                {/* What We Do */}
                <div className="relative group text-left">
                  <button
                    onClick={() =>
                      setShowWhatWeDoDropdown(!showWhatWeDoDropdown)
                    }
                    className="flex items-center"
                  >
                    What We Do
                    <span
                      className={`ml-2 transition-transform duration-300 transform ${showWhatWeDoDropdown ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  {showWhatWeDoDropdown && (
                    <div
                      ref={whatDropdownRef}
                      className="fixed top-[60px] left-0 w-screen bg-gray-900 text-white z-50 opacity-100 visible transition-all duration-300 transform translate-y-2"
                    >
                      <div className="max-w-6xl mx-auto flex">
                        {/* Left Column */}
                        <div className="w-1/4 border-r border-gray-700 py-8 px-6 space-y-4">
                          <div
                            onMouseEnter={() => setActiveTab("overview")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 border-b border-gray-700 flex items-center justify-between"
                          >
                            <Link to="/" className="flex-1">
                              Overview
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>

                          <div
                            onMouseEnter={() => setActiveTab("services")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 flex items-center justify-between"
                          >
                            <Link to="/services" className="flex-1">
                              Services
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>
                        </div>

                        {/* Right Content Area */}
                        <div className="w-3/4 p-8 flex flex-col items-start text-left">
                          {activeTab === "overview" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">
                                KRCS is here to make a difference through
                                technology.
                              </h3>
                              <p className="text-gray-300 text-sm max-w-xl mb-6">
                                Transform your existing business or initiate a
                                new one with our services that enhance the
                                efficiency and effectiveness of your business.{" "}
                                <strong>KRCS</strong> offers the best
                                development and marketing services and uses
                                extensive knowledge and experience to create
                                complex, large-scale, and practical solutions to
                                meet your industry and business demands.
                              </p>
                            </>
                          )}
                         

                          {activeTab === "services" && (
                            <div className="grid grid-cols-2 gap-4 text-left text-lg">
                              
                              <div className="space-y-2">
                                <Link
                                  to="/services/artificial-intelligence"
                                  className="block hover:text-blue-400"
                                >
                                  Artificial Intelligence
                                </Link>
                                <Link
                                  to="/services/internet-of-things"
                                  className="block hover:text-blue-400"
                                >
                                  Internet of Things
                                </Link>
                                <Link
                                  to="/services/custom-software"
                                  className="block hover:text-blue-400"
                                >
                                  Custom Software
                                </Link>
                                <Link
                                  to="/services/staff-augmentation"
                                  className="block hover:text-blue-400"
                                >
                                  Staff Augmentation
                                </Link>
                              </div>
                              <div className="space-y-2">
                                <Link
                                  to="/services/digital-marketing"
                                  className="block hover:text-blue-400"
                                >
                                  Digital Marketing
                                </Link>
                                <Link
                                  to="/services/complete-networking"
                                  className="block hover:text-blue-400"
                                >
                                  Complete Networking Solutions
                                </Link>
                                <Link
                                  to="/services/grc-automation"
                                  className="block hover:text-blue-400"
                                >
                                  GRC Automation
                                </Link>
                                
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Who We Are */}
                <div className="relative group text-left">
                  <span
                    className={`cursor-pointer font-normal flex items-center gap-1 ${location.pathname === "/about-us"
                        ? "text-blue-600"
                        : "hover:text-blue-600"
                      }`}
                    onClick={() =>
                      setShowWhoWeAreDropdown(!showWhoWeAreDropdown)
                    }
                  >
                    Who We Are
                    <span
                      className={`ml-1 transition-transform duration-300 transform ${showWhoWeAreDropdown ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </span>

                  {showWhoWeAreDropdown && (
                    <div
                      ref={whoDropdownRef}
                      className="fixed top-[60px] left-0 w-screen bg-gray-900 text-white z-50 opacity-100 visible transition-all duration-300 transform translate-y-2"
                    >
                      <div className="max-w-6xl mx-auto flex">
                        {/* Left Column */}
                        <div className="w-1/4 border-r border-gray-700 py-8 px-6 space-y-4">
                          <div
                            onMouseEnter={() => setActiveWhoTab("about")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 border-b border-gray-700 flex items-center justify-between"
                          >
                            <Link
                              to="/about-us"
                              onClick={() => setShowWhoWeAreDropdown(false)}
                              className="flex-1 text-white"
                            >
                              About Us
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>

                          <div
                            onMouseEnter={() => setActiveWhoTab("krcs")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 border-b border-gray-700 flex items-center justify-between"
                          >
                            <Link
                              to="/coe"
                              onClick={() => setShowWhoWeAreDropdown(false)}
                              className="flex-1 text-white"
                            >
                              KRCS CoE
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>

                          <div
                            onMouseEnter={() => setActiveWhoTab("academy")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 border-b border-gray-700 flex items-center justify-between"
                          >
                            <Link
                              to="/academy"
                              onClick={() => setShowWhoWeAreDropdown(false)}
                              className="flex-1 text-white"
                            >
                              KRCS Academy
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>

                          <div
                            onMouseEnter={() => setActiveWhoTab("case")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300 border-b border-gray-700 flex items-center justify-between"
                          >
                            <Link
                              to="/case-studies"
                              onClick={() => setShowWhoWeAreDropdown(false)}
                              className="flex-1 text-white"
                            >
                              Case Study
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>

                          <div
                            onMouseEnter={() => setActiveWhoTab("leadership")}
                            className="hover:bg-gray-800 px-4 py-2 rounded cursor-pointer transition-colors duration-300  flex items-center justify-between"
                          >
                            <Link
                              to="/leadership"
                              onClick={() => setShowWhoWeAreDropdown(false)}
                              className="flex-1 text-white"
                            >
                              Leadership Team
                            </Link>
                            <span className="text-white">&gt;</span>
                          </div>
                        </div>

                        {/* Right Panel */}
                        <div className="w-3/4 p-8 flex flex-col items-start text-left">
                          {activeWhoTab === "about" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">About KRCS</h3>
                              <ul className="space-y-2 text-left text-sm text-white">
                                <li>
                                  <Link
                                    to="/about-us/our-story"
                                    onClick={() => setShowWhoWeAreDropdown(false)}
                                    className="hover:text-blue-400 block"
                                  >
                                    Our Story
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/about-us/vision"
                                    onClick={() => setShowWhoWeAreDropdown(false)}
                                    className="hover:text-blue-400 block"
                                  >
                                    Our Vision
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/about-us/mission"
                                    onClick={() => setShowWhoWeAreDropdown(false)}
                                    className="hover:text-blue-400 block"
                                  >
                                    Our Mission
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/about-us/core-values"
                                    onClick={() => setShowWhoWeAreDropdown(false)}
                                    className="hover:text-blue-400 block"
                                  >
                                    Core Values
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="/about-us/why-choose-krc"
                                    onClick={() => setShowWhoWeAreDropdown(false)}
                                    className="hover:text-blue-400 block"
                                  >
                                    Why Choose KRC?
                                  </Link>
                                </li>
                              </ul>
                            </>
                          )}

                          {activeWhoTab === "krcs" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">
                                KRCS CoE
                              </h3>
                              <p className="text-gray-300 text-sm max-w-xl mb-6">
                                Discover how our Centers of Excellence (CoEs) serve as the driving force behind KRCS’s commitment to cutting-edge research, breakthrough innovation, and transformative technology development. These specialized hubs foster collaboration, cultivate emerging talent, and accelerate the creation of intelligent solutions—empowering organizations to stay ahead in an ever-evolving digital landscape.
                    
                              </p>
                            </>
                          )}
                          {activeWhoTab === "academy" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">
                                KRCS Academy
                              </h3>
                              <p className="text-gray-300 text-sm max-w-xl mb-6">
                                 Explore KRCS Academy—our dedicated platform for learning, upskilling, and professional development. Through hands-on training, real-world mentorship, and industry-aligned curricula, we nurture future-ready professionals equipped to thrive in today's fast-paced digital world. From foundational tech skills to advanced specializations in Cloud computing,SAP, IOT, and more, KRCS Academy empowers individuals to lead with confidence and contribute meaningfully to innovation and transformation.
                              </p>
                            </>
                          )}
                          {activeWhoTab === "case" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">
                                Case Studies
                              </h3>
                              <p className="text-gray-300 text-sm max-w-xl mb-6">
                                 Explore how KRCS has consistently delivered measurable results across diverse industries — driving efficiency, innovation, and growth through solutions like seamless SAP integration,intelligent production workflows,data-driven production and beyond.
                              
                              </p>
                            </>
                          )}
                          {activeWhoTab === "leadership" && (
                            <>
                              <h3 className="text-2xl font-semibold mb-4">
                                KRCS Leadership
                              </h3>
                              <p className="text-gray-300 text-sm max-w-xl mb-6">
                                  Discover our Leaders and how they contribute to
                                research, innovation, and technology
                                development.
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Static Links */}
                <Link
                  to="/career"
                  className={`hover:text-blue-600 ${isActive("/career") ? "text-blue-600" : ""
                    }`}
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  className={`hover:text-blue-600 ${isActive("/contact") ? "text-blue-600" : ""
                    }`}
                >
                  Contact Us
                </Link>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 py-4 space-y-3 bg-white shadow">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              Overview
            </Link>
            <Link to="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Our Services
            </Link>
            <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>
              Who We Are
            </Link>
            <Link to="/career" onClick={() => setIsMobileMenuOpen(false)}>
              Career
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
