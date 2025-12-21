import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  {
    id: 1,
    title: "Simplify Your Financial Compliance",
    subtitle: "End-to-end Income Tax and GST solutions for your business.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=2000",
    cta: "Get Started",
  },
  {
    id: 2,
    title: "Home Loans at Best Rates",
    subtitle: "Specializing in quick approvals and doorstep service.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
    cta: "Check Eligibility",
  },
  {
    id: 3,
    title: "Secure Your Future with Mutual Funds",
    subtitle: "Customized wealth management for long-term growth.",
    image:
      "https://images.unsplash.com/photo-1611974717484-954f056e40d8?auto=format&fit=crop&q=80&w=2000",
    cta: "Start SIP",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <div className="relative w-full h-[400px] lg:h-[600px] overflow-hidden bg-purple-900">
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />

          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl animate-fade-in-up">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                {banner.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-200 mb-8">
                {banner.subtitle}
              </p>
              <button className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-yellow-500 transition-all transform hover:scale-105">
                {banner.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-yellow-400 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
