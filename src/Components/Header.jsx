import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, LogIn, Menu, X, ChevronDown } from "lucide-react";
import { SERVICES } from "../Constants";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/service");

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* Close menus on route change */
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const navItemClass = (active) =>
    `
    relative text-lg font-medium transition-colors duration-300
    ${active ? "text-purple-600" : "text-gray-600 hover:text-purple-600"}
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[2px] after:w-full after:bg-yellow-400
    after:scale-x-0 after:origin-left after:transition-transform after:duration-300
    hover:after:scale-x-100
    ${active ? "after:scale-x-100" : ""}
  `;

  return (
    <header className="w-full relative z-[100]">
      {/* Top Bar */}
      <div className="bg-purple-900 text-white py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-xs lg:text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-yellow-400" />
            <span>Call us: +91 98765 43210</span>
          </div>

          {/* LOGIN + REGISTER (RESTORED) */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <LogIn size={14} />
              <span>Login</span>
            </button>
            <button className="bg-yellow-400 text-purple-900 px-3 py-1 rounded font-bold hover:bg-yellow-500 transition-colors">
              Register
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 my-[-5.5%] w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={navItemClass(isActive("/"))}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`${navItemClass(
                  isServiceActive
                )} flex items-center gap-1`}
              >
                Our Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px]
                  bg-white rounded-2xl shadow-2xl border border-gray-100 p-6
                  grid grid-cols-2 gap-4 animate-fade-in-up"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/service/${service.id}`}
                      className="group flex items-center gap-3 p-3 rounded-xl hover:bg-purple-50 transition-colors"
                    >
                      <div
                        className="text-purple-600 bg-purple-50 p-2 rounded-lg
                        group-hover:bg-purple-600 group-hover:text-white transition-colors"
                      >
                        {React.cloneElement(service.icon, { size: 18 })}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-800 group-hover:text-purple-700">
                          {service.name}
                        </span>
                        <span className="text-[10px] text-gray-400 line-clamp-1">
                          {service.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={navItemClass(isActive("/about"))}>
              About Us
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full font-bold text-sm lg:text-base 
             bg-purple-600 text-yellow-300 
             hover:bg-purple-700 hover:shadow-lg 
             transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-purple-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-[90] overflow-y-auto">
            <div className="p-6 flex flex-col gap-6">
              <Link to="/" className="text-xl font-bold border-b pb-4">
                Home
              </Link>

              <div>
                <p className="text-xs font-bold text-purple-600 uppercase mb-3">
                  Our Services
                </p>
                <div className="flex flex-col gap-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/service/${service.id}`}
                      className="flex items-center gap-4 p-3 rounded-xl bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {React.cloneElement(service.icon, { size: 20 })}
                      <span className="font-semibold">{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/about" className="text-xl font-bold border-b pb-4">
                About Us
              </Link>
              <Link to="/contact" className="text-xl font-bold border-b pb-4">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
