import React from "react";
import { GST_SERVICES } from "../Constants";
import { ArrowRight } from "lucide-react";

import gst from "../assets/gst/gst.png";
import ContactForm from "../Components/ContactForm";

const GstRegistration = () => {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-block px-3 py-1 bg-blue-400/30 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Complete GST Solution
            </div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">
              A Complete Solution for{" "}
              <span className="text-yellow-300">GST Compliance</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              One Tax | One Nation | One Solution
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white/50 hover:border-white text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all duration-300">
                Track Application
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:flex justify-end">
            <div className="relative">
              <img
                src={gst}
                alt="GST Time"
                className="max-w-md transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INFO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">
          GST <span className="text-blue-600">One tax nationally</span>
        </h2>

        <p className="text-red-600 mb-4">
          A consumer in Kanyakumari now pays the same tax on an item as one in
          Jammu & Kashmir. GST has allowed businesses to streamline production,
          supply chain, and storage systems efficiently.
        </p>

        <p className="text-gray-700 leading-relaxed">
          GST has three tax components — CGST, SGST, and IGST. Intra-state
          transactions attract CGST and SGST, while inter-state transactions
          attract IGST, levied by the central government.
        </p>
      </section>

      {/* ================= GST SERVICES ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            GST <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {GST_SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="p-6 flex justify-center">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="h-40 object-contain"
                  />
                </div>

                <div className="px-6 pb-6 text-center">
                  <h3 className="font-semibold text-lg mb-4">
                    ⭐ {service.name}
                  </h3>

                  <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium">
                    Apply Now
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactForm />
    </div>
  );
};

export default GstRegistration;
