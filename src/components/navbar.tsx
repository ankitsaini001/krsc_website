import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faBars,
  faTimes,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-gray-900 text-white shadow-md`}
    >
      {/* Top Contact Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-2 text-sm bg-gray-800">
        <div className="flex gap-4">
          <span>
            <FontAwesomeIcon icon={faPhone} /> +91 12345 67890
          </span>
          <span>
            <FontAwesomeIcon icon={faEnvelope} /> info@example.com
          </span>
          <span>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Delhi, India
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold">YourLogo</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium relative">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">About</li>

          {/* Dropdown Trigger */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-red-400">
              Our Services <FontAwesomeIcon icon={faChevronDown} />
            </div>

            {/* Dropdown Content */}
            <div className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white text-black shadow-md rounded-md w-52 z-50">
              <span className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Web Development
              </span>
              <span className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                SEO Optimization
              </span>
              <span className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Digital Marketing
              </span>
            </div>
          </li>

          <li className="hover:text-red-400 cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden flex flex-col bg-gray-800 text-white px-6 py-4 space-y-4 text-lg font-medium">
          <li className="hover:text-red-400 cursor-pointer">Home</li>
          <li className="hover:text-red-400 cursor-pointer">About</li>

          {/* Mobile Dropdown Toggle */}
          <li
            className="cursor-pointer"
            onClick={() => setMobileDropdownOpen(!isMobileDropdownOpen)}
          >
            <div className="flex justify-between items-center hover:text-red-400">
              Our Services
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`ml-2 transition-transform duration-300 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {isMobileDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-2 text-sm text-gray-200">
                <li className="hover:text-red-400 cursor-pointer">
                  Web Development
                </li>
                <li className="hover:text-red-400 cursor-pointer">
                  SEO Optimization
                </li>
                <li className="hover:text-red-400 cursor-pointer">
                  Digital Marketing
                </li>
              </ul>
            )}
          </li>

          <li className="hover:text-red-400 cursor-pointer">Contact Us</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
