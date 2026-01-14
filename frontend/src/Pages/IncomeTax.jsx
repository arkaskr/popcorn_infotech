import React, { useState } from "react";
import { INCOME_TAX_SERVICES } from "../Constants";
import { ArrowRight } from "lucide-react";

import income_tax from "../assets/incometax/income_tax.png";
import employee_img from "../assets/incometax/document-1.jpg"; // Add employee image
import business_img from "../assets/incometax/document-2.jpg"; // Add business image

const IncomeTax = () => {
  const [activeTab, setActiveTab] = useState("employee");

  const employeeDocuments = [
    "PAN",
    "Aadhar",
    "Bank Account Details",
    "Form 16 (if issued by employer)",
    "Income Tax log-in password (if available)",
    "Details of investments if any (inc. those eligible for tax benefits)",
  ];

  const businessDocuments = [
    "PAN",
    "Aadhar",
    "Bank Account Details",
    "Income Tax log-in password (if available)",
    "Details of investments if any (inc. those eligible for tax benefits)",
    "Income details (our representative will get in touch with you)",
    "Complete books of accounts (if required, our representative will get in touch with you)",
  ];

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}

      <section className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <div className="inline-block px-3 py-1 bg-blue-400/30 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-4"></div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              File ITR confidently for any
              <br /> type of income
            </h1>
            <p className="mt-4 text-lg max-w-xl">
              We can help you in filing your Income Tax Return through
              professionals while you are sitting at home.
            </p>

            <div className="flex flex-wrap gap-4 pt-3">
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
                src={income_tax}
                alt="GST Time"
                className="max-w-md transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY FILE ITR ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Why should you file{" "}
          <span className="text-blue-600">Income Tax Returns?</span>
        </h2>

        <div className="space-y-4">
          {[
            "Tax compliance. If your income is above taxable income then it is mandatory to file Income Tax returns and pay taxes.",
            "Claim TDS deducted. TDS is deducted on services and employment, which can be claimed back on filing Income Tax returns.",
            "Create a strong financial profile, which will assist in loan applications or credit card applications.",
            "Claim TCS collected. In transactions such as vehicle purchase, TCS is collected by the seller which can be claimed on filing of Income Tax returns.",
            "Claim losses on your past years' returns by filing Income Tax returns.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-blue-50 px-6 py-4 rounded-md border-l-4 border-blue-500"
            >
              <span className="font-semibold mr-2">{index + 1}.</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= INCOME TAX SERVICES ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            Income <span className="text-blue-600">Tax Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {INCOME_TAX_SERVICES.map((service) => (
              <div
                key={service.id}
                className="rounded-xl shadow-sm hover:shadow-lg transition bg-white"
              >
                <div className="p-6 flex justify-center">
                  <img
                    src={service.imageUrl}
                    alt={service.name}
                    className="h-40 object-contain"
                  />
                </div>

                <div className="px-6 pb-6 text-center">
                  <h3 className="font-semibold text-base mb-4">
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

      {/* ================= ITR FORMS TABLE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">
          Different Types of <span className="text-blue-600">ITR Forms</span>
        </h2>

        <div className="overflow-x-auto rounded-xl border shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Form
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-blue-700 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 1
                </td>
                <td className="px-6 py-4">
                  For Individuals being a Resident (other than Not Ordinarily
                  Resident) having Total Income upto Rs.50 lakhs, having Income
                  from Salaries, One House Property, Other Sources (Interest
                  etc.), and Agricultural Income upto Rs.5 thousand(Not for an
                  Individual who is either Director in a company or has invested
                  in Unlisted Equity Shares)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 2
                </td>
                <td className="px-6 py-4">
                  For Individuals and HUFs not having income from profits and
                  gains of business or profession
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 3
                </td>
                <td className="px-6 py-4">
                  For individuals and HUFs having income from profits and gains
                  of business or profession
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 4
                </td>
                <td className="px-6 py-4">
                  For Individuals, HUFs and Firms (other than LLP) being a
                  Resident having Total Income upto Rs.50 lakhs and having
                  income from Business and Profession which is computed under
                  sections 44AD, 44ADA or 44AE (Not for an Individual who is
                  either Director in a company or has invested in Unlisted
                  Equity Shares)
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 5
                </td>
                <td className="px-6 py-4">
                  For persons other than :- (i) Individual (ii) HUF (iii)
                  Company and (iv) Person filing Form ITR-7
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 6
                </td>
                <td className="px-6 py-4">
                  For Companies other than companies claiming exemption under
                  section 11
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  ITR 7
                </td>
                <td className="px-6 py-4">
                  For persons including companies required to furnish return
                  under sections 139(4A) or 139(4B) or 139(4C) or 139(4D)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= DOCUMENTS REQUIRED SECTION ================= */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Documents Required to File{" "}
            <span className="text-blue-600">Income Tax Returns</span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-xl bg-white shadow-sm p-1">
              <button
                onClick={() => setActiveTab("employee")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "employee"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                Employee
              </button>
              <button
                onClick={() => setActiveTab("business")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "business"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                Professionals / Businesses
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src={activeTab === "employee" ? employee_img : business_img}
                  alt={
                    activeTab === "employee"
                      ? "Employee Documents"
                      : "Business Documents"
                  }
                  className="max-w-md transform hover:scale-105 transition-transform duration-500 rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/20 blur-3xl rounded-full"></div>
              </div>
            </div>

            {/* Right - Documents List */}
            <div>
              <h3 className="text-2xl font-bold mb-6">
                For{" "}
                {activeTab === "employee"
                  ? "an Employee"
                  : "Professionals / Businesses"}
              </h3>

              <div className="space-y-4">
                {(activeTab === "employee"
                  ? employeeDocuments
                  : businessDocuments
                ).map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IncomeTax;
