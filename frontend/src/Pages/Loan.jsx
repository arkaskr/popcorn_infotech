import React, { useEffect, useState } from "react";
import { LOAN_SERVICES } from "../Constants";
import { ArrowRight, ChevronRight } from "lucide-react";

// banner images
import banner1 from "../assets/loan/h-1.jpg";
import banner2 from "../assets/loan/h-2.jpg";
import ContactForm from "../Components/ContactForm";

const banners = [banner1, banner2];

const Loan = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  // auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* ================= BANNER SLIDER ================= */}
      <div className="relative w-full h-[280px] md:h-[380px] overflow-hidden">
        {banners.map((banner, index) => (
          <img
            key={index}
            src={banner}
            alt="Loan Banner"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentBanner ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                index === currentBanner ? "bg-orange-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentBanner(index)}
            />
          ))}
        </div>
      </div>

      {/* ================= INTRO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Loans & <span className="text-blue-600">Finance</span>
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Looking for business loan? Personal loan? Home loan? Agricultutal
          loan? Contact our team of experts to help you meet all the
          requirements (CMA data, project report) and also apply for your loans
          through us.
        </p>

        <p className="text-gray-600 leading-relaxed">
          We are working with various banks, NBFCs and also offer peer to peer
          (P2P) lending in collaboration with Faircent. So, whatever be your
          requirement, be assured to get the best possible service from us.
        </p>
      </div>

      {/* ================= LOANS GRID ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Loan <span className="text-blue-600">Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {LOAN_SERVICES.map((service) => (
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

export default Loan;
