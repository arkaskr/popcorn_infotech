import React from "react";
import { Phone } from "lucide-react";

const STATES_OF_INDIA = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",

  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* ================= HEADING ================= */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Contact <span className="text-blue-600">MB Financial</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* ================= LEFT : FORM ================= */}
        <div>
          <p className="text-gray-700 mb-6 max-w-lg">
            Our team is happy to solve your query. Fill the form and we will get
            in touch with you.
          </p>

          <form className="space-y-4">
            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="* Full Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <input
                type="email"
                placeholder="* Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            {/* Phone + State */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="* WhatsApp Number"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />

              <select
                className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select State / UT
                </option>
                {STATES_OF_INDIA.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* Comments */}
            <textarea
              placeholder="Comments"
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
            >
              Apply →
            </button>
          </form>
        </div>

        {/* ================= RIGHT : ADDRESS + MAP ================= */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Head Office Address</h3>
            <p className="text-gray-700 leading-relaxed">
              MB Financial,
              <br />
              Kaliganj Arrah Durgapur,
              <br />
              Paschim Bardhaman
            </p>

            <div className="flex items-center gap-2 mt-4 text-gray-800 font-medium">
              <Phone className="text-orange-500" size={18} />
              <span>90831 83514</span>
            </div>
          </div>

          <div className="w-full h-[280px] rounded-xl overflow-hidden shadow">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
