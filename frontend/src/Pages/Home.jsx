import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Star,
  Award as AwardIcon,
  Menu,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Quote,
} from "lucide-react";
import Hero from "../Components/Hero";
import {
  SERVICES,
  BENEFITS,
  PARTNERS,
} from "../Constants";

import ss1 from "../assets/success_stories/ss1.jpg";
import ss2 from "../assets/success_stories/ss2.jpg";
import ss3 from "../assets/success_stories/ss3.jpg";

const Home = () => {
  return (
    <div className="flex flex-col bg-white text-gray-700">
      <Hero />

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 uppercase tracking-tight">
              Our Comprehensive Services
            </h2>
            <div className="w-24 h-1 bg-[#3B82F6] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group block outline-none"
              >
                {/* Image */}
                <div className="relative border-2 border-gray-200 rounded-2xl overflow-hidden p-3 bg-white transition-all duration-300 group-hover:border-[#3B82F6] group-hover:shadow-2xl group-hover:shadow-blue-100 mb-6">
                  <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3">
                  <Menu size={20} className="text-[#3B82F6] shrink-0" />
                  <div className="relative inline-block overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#3B82F6] transition-colors">
                      {service.name}
                    </h3>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3B82F6] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Advertisement Banner*/}
      <section className="py-4 bg-white px-4">
        <div className="container mx-auto max-w-screen-2xl">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 rounded-3xl shadow-xl px-6 py-8 lg:px-12 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-10 border border-gray-200">
            {/* Background decorative flares */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 blur-3xl rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/10 blur-2xl rounded-full -ml-32 -mb-32"></div>

            <div className="lg:w-3/5 text-gray-900 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full mb-4 text-[10px] lg:text-xs font-bold uppercase tracking-widest border border-[#3B82F6]/30">
                <Smartphone size={14} />
                <span>Experience Seamless Banking</span>
              </div>
              <h2 className="text-2xl lg:text-4xl font-black mb-3 leading-tight">
                Your Financial Future,{" "}
                <span className="text-[#3B82F6] underline decoration-[#3B82F6]/30 underline-offset-4">
                  Simplified.
                </span>
              </h2>
              <p className="text-sm lg:text-base text-gray-600 mb-6 max-w-3xl leading-relaxed opacity-90">
                Manage GST, track ITR refunds, and grow your wealth with India's
                most trusted financial app. Instant approvals and 24/7 expert
                support.
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 border-l-2 border-[#3B82F6]/30 pl-4">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#3B82F6]" />
                  <span className="text-xs font-semibold">
                    1-Click GST Filing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#3B82F6]" />
                  <span className="text-xs font-semibold">
                    Instant Loan Approval
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-[#3B82F6]" />
                  <span className="text-xs font-semibold">
                    Real-time Portfolio Tracking
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="transform hover:scale-105 transition-all active:scale-95"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="h-10"
                  />
                </a>
                <a
                  href="#"
                  className="transform hover:scale-105 transition-all active:scale-95"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="App Store"
                    className="h-10"
                  />
                </a>
                <div className="hidden lg:block h-8 w-[1px] bg-gray-300 mx-2"></div>
                <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-gray-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 overflow-hidden"
                      >
                        <img
                          src={`https://i.pravatar.cc/150?u=${i}`}
                          alt="user"
                        />
                      </div>
                    ))}
                  </div>
                  <span>100k+ Users</span>
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 z-10 flex justify-end">
              <div className="relative group">
                {/* Horizontal Dashboard Card instead of Vertical Phone */}
                <div className="relative z-20 w-full max-w-[440px] aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200 transform rotate-1 group-hover:rotate-0 transition-transform duration-500 border border-gray-200">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                    alt="App Dashboard"
                    className="w-full h-full object-cover"
                  />
                  {/* Glassmorphism Credit Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-gray-200 shadow-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">
                          Total Balance
                        </span>
                        <span className="text-lg font-black text-gray-900">
                          ₹4,85,200.00
                        </span>
                      </div>
                      <div className="bg-[#3B82F6] p-1.5 rounded-lg">
                        <ArrowRight size={16} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative floating icon */}
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#3B82F6] rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-bounce">
                  <Smartphone className="text-white" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborations (Vibrant Partner Slider) */}
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We provide reliable, swift, and secure services so you can focus
                on your core business.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {BENEFITS.map((benefit, i) => (
                  <div key={i} className="flex flex-col gap-4">
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-md border border-gray-100">
                      {React.cloneElement(benefit.icon, {
                        className: "text-[#3B82F6]",
                      })}
                    </div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72"
                alt="Team"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover border border-gray-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold lg:text-5xl font-black text-gray-900">
              Success Stories of Our{" "}
              <span className="text-[#3B82F6]">Happy Partners</span>
            </h2>
            <div className="w-32 h-2 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1500px] mx-auto">
            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row h-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white group">
              <div className="sm:w-2/5 bg-gray-50 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-full h-[240px] border-4 border-[#3B82F6] shadow-xl overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={ss1}
                    className="w-full h-full object-cover"
                    alt="Partner"
                  />
                </div>
              </div>

              <div className="sm:w-3/5 bg-white p-6 text-gray-900 relative">
                <Quote
                  className="absolute top-4 right-4 opacity-10 text-gray-300"
                  size={48}
                />
                <h3 className="text-xl font-bold leading-tight">
                  Mr. Amar Choudharey
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                  Uttar Pradesh
                </p>
                <p className="text-sm leading-relaxed font-medium text-gray-600">
                  I really appreciate all the opportunities this company has
                  provided me which helped me grow professionally as well as
                  personally. Thank you so much MB Financial Team.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row h-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white group">
              <div className="sm:w-2/5 bg-gray-50 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-full h-[240px] border-4 border-[#3B82F6] shadow-xl overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={ss2}
                    className="w-full h-full object-cover"
                    alt="Partner"
                  />
                </div>
              </div>

              <div className="sm:w-3/5 bg-white p-6 text-gray-900 relative">
                <Quote
                  className="absolute top-4 right-4 opacity-10 text-gray-300"
                  size={48}
                />
                <h3 className="text-xl font-bold leading-tight">
                  Mr. Abhishek Kumar
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                  Bihar
                </p>
                <p className="text-sm leading-relaxed font-medium text-gray-600">
                  I have taken the MB Financial franchise and it was a great
                  decision. Excellent customer support and very affordable
                  compared to others.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col sm:flex-row-reverse h-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-200 bg-white group">
              <div className="sm:w-2/5 bg-gray-50 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-full h-[240px] border-4 border-[#3B82F6] shadow-xl overflow-hidden rounded-xl group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={ss3}
                    className="w-full h-full object-cover"
                    alt="Partner"
                  />
                </div>
              </div>

              <div className="sm:w-3/5 bg-white p-6 text-gray-900 relative">
                <Quote
                  className="absolute top-4 left-4 opacity-10 text-gray-300"
                  size={48}
                />
                <h3 className="text-xl font-bold leading-tight">
                  Mr. Nilesh Singh
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#3B82F6] mb-3">
                  Maharashtra
                </p>
                <p className="text-sm leading-relaxed font-medium text-gray-600">
                  MB Financial provides a great platform for young entrepreneurs
                  to start their journey without risk. Very good business
                  opportunity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
