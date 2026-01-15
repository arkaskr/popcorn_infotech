import React, { useEffect, useState } from "react";
import { INSURANCE_SERVICES } from "../Constants";
import { ArrowRight, ChevronRight } from "lucide-react";

// banner images
import banner1 from "../assets/insurance/h-1.jpg";
import banner2 from "../assets/insurance/h-2.jpg";
import ContactForm from "../Components/ContactForm";

const banners = [banner1, banner2];

const Insurance = () => {
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
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">Insurance</h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Our agents get exclusive access to Insurance portal through which you
          can compare over 15 insurance policies and book hassle free.
        </p>

        <p className="text-gray-600 leading-relaxed">
          We offer all kinds of insurance facilities - vehicle, shop, health,
          life and travel.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Insurance is a means of protection from financial loss. It is a form
          of risk management, primarily used to hedge against the risk of a
          contingent or uncertain loss. An entity which provides insurance is
          known as an insurer, insurance company, insurance carrier or
          underwriter. A person or entity who buys insurance is known as an
          insured or as a policyholder. The insurance transaction involves the
          insured assuming a guaranteed and known relatively small loss in the
          form of payment to the insurer in exchange for the insurer's promise
          to compensate the insured in the event of a covered loss. The loss may
          or may not be financial, but it must be reducible to financial terms,
          and usually involves something in which the insured has an insurable
          interest established by ownership, possession, or pre-existing
          relationship.
        </p>
      </div>

      {/* ================= INSURANCE SERVICES ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="border-b border-blue-400" />
          {INSURANCE_SERVICES.map((service, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div key={service.id}>
                {/* row */}
                <div
                  className={`flex flex-col md:flex-row ${
                    isReverse ? "md:flex-row-reverse" : ""
                  } items-center gap-10`}
                >
                  {/* image */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={service.imageUrl}
                      alt={service.name}
                      className="max-h-60 object-contain"
                    />
                  </div>

                  {/* content */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-4">
                      {service.name.split(" ")[0]}{" "}
                      <span className="text-blue-600">
                        {service.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                      Enquire Now
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* divider */}
                {index !== INSURANCE_SERVICES.length - 1 && (
                  <div className="border-b border-blue-400 mt-16" />
                )}
              </div>
            );
          })}
          <div className="border-b border-blue-400 mt-16" />
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Insurance;
