import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, LogIn, Menu, X, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../Constants";
import logo from "../assets/logo.jpeg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const isServiceActive = location.pathname.startsWith("/service");

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navClass = (active) =>
    `relative font-semibold transition-all
     ${active ? "text-[#3B82F6]" : "text-gray-700 hover:text-[#3B82F6]"}
     after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
     after:bg-[#3B82F6] after:scale-x-0 hover:after:scale-x-100
     after:transition-transform after:duration-300
     ${active ? "after:scale-x-100" : ""}`;

  return (
    <header className="relative z-50 bg-white shadow-md">
      {/* TOP BAR */}
      <div className="hidden md:block bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-2 flex justify-between text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-[#3B82F6]" />
            <span>+91 90831 83514</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-1 hover:text-[#3B82F6]"
            >
              <LogIn size={14} />
              Login
            </button>
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-4 py-1 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="MB Financial"
              className="h-14 w-auto rounded-md"
            />
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-gray-800">MB Financial</h1>
              <p className="text-xs text-gray-600">
                Invest Today, Earn Tomorrow
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <Link to="/" className={navClass(isActive("/"))}>
              Home
            </Link>

            {/* SERVICES */}
            <div className="relative" ref={dropdownRef}>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`${navClass(
                  isServiceActive
                )} flex items-center gap-1`}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`${
                    servicesOpen ? "rotate-180" : ""
                  } transition-transform`}
                />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-4 w-[460px]
                  bg-white border border-gray-200 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/service/${service.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl
                      hover:bg-blue-50 transition border border-transparent hover:border-blue-100"
                    >
                      <div className="text-[#3B82F6]">
                        {React.cloneElement(service.icon, { size: 18 })}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {service.name}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-1">
                          {service.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className={navClass(isActive("/about"))}>
              About
            </Link>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#3B82F6] to-[#6366F1] text-white px-6 py-2 rounded-full
              hover:opacity-90 transition-opacity font-bold shadow-md"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="p-6 flex flex-col gap-6 text-gray-700">
              <Link to="/" className="hover:text-[#3B82F6]">
                Home
              </Link>
              <Link to="/about" className="hover:text-[#3B82F6]">
                About
              </Link>

              <div>
                <p className="text-xs uppercase text-gray-500 mb-2">Services</p>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={`/service/${s.id}`}
                    className="block py-2 hover:text-[#3B82F6]"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>

              <Link to="/contact" className="text-[#3B82F6] font-bold">
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
