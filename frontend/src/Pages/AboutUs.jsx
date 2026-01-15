import React from "react";
import { Target, Users, ShieldCheck, PlayCircle } from "lucide-react";
import { PARTNERS } from "../Constants";

import d1 from "../assets/director/d1.png";
import d2 from "../assets/director/d2.png";

const About = () => {
  return (
    <div className="flex flex-col bg-white text-gray-700">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tighter">
            Move Forward <span className="text-[#3B82F6]">With Us.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
            Be an MB Financial Franchisee Owner and join the fastest growing
            fintech ecosystem in India.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p>
              With the advent of GST in 2017 Government of India focused on
              setting up GST Suvidha Kendras across India to help people in GST
              compliances. MB Financial decided to help smaller taxpayers with
              GST Suvidha Kendras.
            </p>

            <p className="font-semibold text-[#3B82F6] border-l-4 border-[#3B82F6] pl-6 bg-blue-50 py-4 rounded-r-lg">
              MB Financial Introduced the concept of GST Suvidha Kendra to make
              India Tax Compliant. In 5 years, our Suvidha Kendras have grown to
              over 7,000 across India, and are providing over 200+ services
              through our outlets.
            </p>

            <p>
              MB Financial is the oldest surviving company in this domain, and
              is growing at the fastest rate. We stand committed to our ethics
              and will provide the highest service standards at affordable rates
              for our franchisees to grow.
            </p>

            <p>
              We are setting up MB Suvidha Kendra and other Retail Touch Points
              (MB CSC) for making more successful entrepreneurs and encourage
              self-employment. To make financial & taxation compliances easy for
              every entity, organization and person.
            </p>

            <p>
              To make world class expert services available at your doorstep at
              affordable cost. It's an ISO 9001:2015 certified company.
            </p>
          </div>

          {/* Mission & Video */}
          <div className="mt-24 text-center">
            <div className="inline-block px-4 py-1.5 bg-[#3B82F6] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Our Mission
            </div>

            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-10 tracking-tight">
              "One Tax One Nation"
            </h2>

            <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl group max-w-4xl mx-auto border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1200"
                alt="Video cover"
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
                <PlayCircle
                  size={80}
                  className="text-[#3B82F6] mb-4 cursor-pointer hover:scale-110 transition-transform"
                />
                <p className="text-xl font-bold tracking-tight">
                  Watch: Our Vision for New India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tighter">
              Core <span className="text-[#3B82F6]">Team</span>
            </h2>
            <div className="w-24 h-2 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d1}
                  alt="Suchit Saraf"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-10">
                <h3 className="text-3xl font-black text-gray-900 mb-1">
                  Suchit Saraf
                </h3>
                <p className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm mb-6">
                  Director
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Director of MB Financial Private Limited. He brings in
                  expertise across valuation, financial modeling, corporate
                  finance, investment banking, capital market and data analysis.
                </p>
              </div>
            </div>

            
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={d2}
                  alt="Pooja Jhunjhunwala"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-10">
                <h3 className="text-3xl font-black text-gray-900 mb-1">
                  Pooja Jhunjhunwala
                </h3>
                <p className="text-[#3B82F6] font-bold uppercase tracking-widest text-sm mb-6">
                  Director
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Director at MB Financial Private Limited. She holds an LLB
                  degree from Pravin Gandhi College of Law, Mumbai and brings
                  skills in marketing, advertising and legal compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-16 bg-white overflow-hidden border-y border-gray-200">
        <div className="container mx-auto px-4 text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-[#3B82F6] rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Our Ecosystem
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-12">
            Powered by Industry Leaders
          </h3>

          <div className="relative mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee whitespace-nowrap gap-10 items-center">
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <div
                  key={i}
                  className="inline-flex flex-shrink-0 items-center justify-center bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:border-[#3B82F6]/30 hover:shadow-lg hover:shadow-blue-100 transition-all cursor-pointer group"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-7 lg:h-9 w-auto object-contain transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
