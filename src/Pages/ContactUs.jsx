import React from "react";
import {
  ArrowRight,
  Phone,
  Mail,
  Store,
  TrendingUp,
  Landmark,
  Monitor,
  Heart,
  CreditCard,
} from "lucide-react";

const CONTACT_ENTITIES = [
  {
    title: "Popcorn Suvidha Kendra Franchise",
    icon: <Store className="w-10 h-10 " />,
    link: "#",
  },
  {
    title: "Popcorn Share Broking",
    icon: <TrendingUp className="w-10 h-10 " />,
    link: "#",
  },
  {
    title: "NSDL Payment Bank BC",
    icon: <Landmark className="w-10 h-10 " />,
    link: "#",
  },
  {
    title: "Popcorn CSC",
    icon: <Monitor className="w-10 h-10 " />,
    link: "#",
  },
  {
    title: "Ayushman Bharat Agency",
    icon: <Heart className="w-10 h-10 " />,
    link: "#",
  },
  {
    title: "Popcorn ATM",
    icon: <CreditCard className="w-10 h-10 " />,
    link: "#",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col bg-gray-50 min-h-screen pb-20">
      {/* Page Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-purple-900 tracking-tight uppercase">
            Connect <span className="text-purple-600">With Us</span>
          </h1>
          <div className="w-32 h-2 bg-yellow-400 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {CONTACT_ENTITIES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-yellow-500 transition-colors">
                      <span>Get In Touch</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-6 border-b-4 border-yellow-400 inline-block pb-2">
                  Head Office Address
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Popcorn Infotech Private Limited,
                  <br />
                  809, 8th Floor, The Summit Business Bay, Andheri Kurla Road,
                  Andheri East,
                  <br />
                  Mumbai, Maharashtra - 400093
                </p>
              </div>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={30} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">
                      24/7 Phone Support
                    </p>
                    <p className="text-2xl font-black text-purple-900">
                      8767 003366
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-purple-900 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={30} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">
                      Email Queries
                    </p>
                    <p className="text-2xl font-black text-purple-900">
                      support@popcorninfotech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div>
              <h2 className="text-3xl font-bold text-purple-900 mb-6 border-b-4 border-yellow-400 inline-block pb-2">
                Head Office Location
              </h2>

              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-white h-[450px] relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.012551528643!2d72.8596643!3d19.1114569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8397637841f%3A0x296e38b321a4f028!2sThe%20Summit%20Business%20Bay!5e0!3m2!1sen!2sin!4v1715600000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                  className="transition-all duration-700"
                ></iframe>

                <div className="absolute top-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100 group-hover:translate-y-0 transition-transform">
                  <p className="font-bold text-purple-900">
                    Popcorn Infotech Pvt. Ltd.
                  </p>
                  <button className="text-xs text-blue-600 font-bold hover:underline">
                    View larger map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-16 container mx-auto px-4 max-w-5xl">
        <div className="bg-purple-900 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Have specific questions?
            </h2>
            <p className="text-purple-100 mb-10 max-w-xl mx-auto">
              Our team of financial experts is ready to help you with franchise
              opportunities, compliance, or any other service inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-purple-900 px-10 py-4 rounded-full font-black hover:bg-yellow-500 transition-all shadow-lg">
                Fill Inquiry Form
              </button>
              <button className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
