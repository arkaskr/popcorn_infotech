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
import logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 pt-16 pb-8 border-t border-gray-200 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* COMPANY */}
          <div>
            <img
              src={logo}
              alt="MB Financial"
              className="h-12 mb-4 rounded-md"
            />
            <p className="text-sm">
              Trusted financial services helping you grow wealth securely and
              confidently.
            </p>

            <div className="mt-6 flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="hover:text-[#3B82F6] text-gray-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="flex gap-2">
                <MapPin size={16} className="text-[#3B82F6]" />
                Kaliganj arrah durgapur paschim Bardhaman
              </p>
              <p className="flex gap-2">
                <Phone size={16} className="text-[#3B82F6]" />
                +91 90831 83514
              </p>
              {/* <p className="flex gap-2">
                <Mail size={16} className="text-[#3B82F6]" />
                contact@mbfinancial.com
              </p> */}
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#3B82F6]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#3B82F6]">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-[#3B82F6]">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* APP */}
          <div>
            <h3 className="text-gray-800 font-bold mb-4">Mobile App</h3>
            <p className="text-sm mb-4">Download our Android app</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              className="h-10"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2024 MB Financial Services Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
