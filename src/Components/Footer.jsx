import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Linkedin,
  Facebook,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Company Logo" className="h-10 w-auto" />
            </Link>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-purple-500 shrink-0" size={18} />
                <p>
                  Suite 405, Financial Plaza, MG Road, Mumbai, Maharashtra
                  400001
                </p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-purple-500 shrink-0" size={18} />
                <p>+91 98765 43210</p>
              </div>
              <div className="flex gap-3">
                <Mail className="text-purple-500 shrink-0" size={18} />
                <p>contact@fintrust.com</p>
              </div>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="hover:text-purple-400 transition-colors">
                <Facebook />
              </a>
            </div>
          </div>

          {/* Registration Details */}
          <div>
            <h3 className="text-white font-bold mb-6">Legal & Registrations</h3>
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-gray-500">CIN:</span>{" "}
                U74140MH2018PTC312345
              </p>
              <p>
                <span className="text-gray-500">GSTIN:</span> 27AABCF1234Z5Z6
              </p>
              <p>
                <span className="text-gray-500">NISM:</span> Registration
                #20241101
              </p>
              <p>
                <span className="text-gray-500">IRDAI:</span> License #CB
                789/2023
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h3 className="text-white font-bold mb-6">Download Our App</h3>
            <div className="bg-white p-2 rounded w-32 mb-4">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://fintrust.com/app"
                alt="App QR"
                className="w-full"
              />
            </div>
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            © 2024 Compliance & Financial Services Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
