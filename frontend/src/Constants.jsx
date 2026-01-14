import React from "react";
import {
  FileText,
  Wallet,
  Home,
  PieChart,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  Users,
  Clock,
  Lock,
  Zap,
  CreditCard,
  Truck,
  Smartphone,
  TrendingUp,
  Landmark,
  Monitor,
  Heart,
  Store,
} from "lucide-react";

import axis from "./assets/partner_logos/axis2.png";
import hdfc from "./assets/partner_logos/hdfc1.png";
import icici from "./assets/partner_logos/icici2.png";
import sbi from "./assets/partner_logos/sbi.png";
import paytm from "./assets/partner_logos/paytm2.png";
import phonepe from "./assets/partner_logos/kotak2.png";
import razorpay from "./assets/partner_logos/razorpay.png";

import gst from "./assets/services_image/gst.png";
import income_tax from "./assets/services_image/income-tax.png";
import insurance from "./assets/services_image/insurance.png";
import home_loan from "./assets/services_image/home-loan.png";
import personal_loan from "./assets/services_image/personal-loan.png";
import mediclaim from "./assets/services_image/mediclaim.png";
import mutual_fund from "./assets/services_image/mutual-fund.png";

import img_1 from "./assets/gst/img-1.png";
import subgst1 from "./assets/gst/subgst1.png";
import subgst2 from "./assets/gst/subgst2.png";
import subgst3 from "./assets/gst/subgst3.png";
import subgst5 from "./assets/gst/subgst5.png";
import subgst6 from "./assets/gst/subgst6.png";
import subgst7 from "./assets/gst/subgst7.png";
import subgst8 from "./assets/gst/subgst8.png";
import subgst9 from "./assets/gst/subgst9.png";

import it1 from "./assets/incometax/it1.jpg";
import it2 from "./assets/incometax/it2.jpg";
import it3 from "./assets/incometax/it3.jpg";
import it5 from "./assets/incometax/it5.png";
import it6 from "./assets/incometax/it6.png";
import it7 from "./assets/incometax/it7.jpg";
import it8 from "./assets/incometax/it8.jpg";
import it9 from "./assets/incometax/it9.jpg";
import it10 from "./assets/incometax/it10.jpg";
import it11 from "./assets/incometax/it11.jpg";
import it12 from "./assets/incometax/it12.png";
import it13 from "./assets/incometax/it13.png";
import it14 from "./assets/incometax/it14.png";
import it15 from "./assets/incometax/it15.jpg";
import it16 from "./assets/incometax/it16.jpg";
import it17 from "./assets/incometax/it17.jpg";
import it18 from "./assets/incometax/it18.jpg";
import it20 from "./assets/incometax/it20.jpg";
import it21 from "./assets/incometax/it21.jpg";
import it22 from "./assets/incometax/it22.jpg";
import it23 from "./assets/incometax/it23.jpg";
import it24 from "./assets/incometax/it24.jpg";
import it25 from "./assets/incometax/it25.jpg";
import it26 from "./assets/incometax/it26.jpg";
import it27 from "./assets/incometax/it27.jpg";
import it28 from "./assets/incometax/it28.jpg";
import it29 from "./assets/incometax/it29.jpg";
import it30 from "./assets/incometax/it30.jpg";
import it31 from "./assets/incometax/it31.jpg";
import it32 from "./assets/incometax/it32.jpg";

export const SERVICES = [
  {
    id: "income-tax",
    name: "Income Tax",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: income_tax,
    description: "Professional ITR filing for individuals and businesses.",
    fullDescription:
      "Complete income tax solutions including filing, planning, and compliance services for salaried individuals, businesses, and professionals.",
    benefits: ["Maximize Deductions", "Timely Filing", "Expert Guidance"],
    features: [
      "ITR Filing 1-9",
      "Tax Planning",
      "TDS Returns",
      "Notice Handling",
    ],
  },
  {
    id: "loan",
    name: "Loan",
    icon: <Wallet className="w-8 h-8" />,
    imageUrl: personal_loan,
    description: "Quick personal loans with minimal documentation.",
    fullDescription:
      "Get instant personal loans for all your needs - medical emergencies, education, travel, or debt consolidation with competitive interest rates.",
    benefits: ["Fast Approval", "Low Interest", "Flexible Tenure"],
    features: [
      "Instant Approval",
      "No Collateral",
      "Online Process",
      "Flexible EMI",
    ],
  },
  {
    id: "mutual-fund",
    name: "Mutual Fund",
    icon: <TrendingUp className="w-8 h-8" />,
    imageUrl: mutual_fund,
    description: "Wealth creation through smart mutual fund investments.",
    fullDescription:
      "Professional mutual fund advisory services helping you build wealth through systematic investment plans and portfolio management.",
    benefits: [
      "Expert Advisory",
      "Diversified Portfolio",
      "Regular Monitoring",
    ],
    features: [
      "SIP Planning",
      "Portfolio Review",
      "Goal Planning",
      "Tax Saving",
    ],
  },
  {
    id: "mediclaim",
    name: "Mediclaim",
    icon: <HeartPulse className="w-8 h-8" />,
    imageUrl: mediclaim,
    description: "Comprehensive health insurance for you and family.",
    fullDescription:
      "Protect your family's health with our wide range of mediclaim policies offering cashless hospitalization and comprehensive coverage.",
    benefits: ["Cashless Treatment", "Family Coverage", "Pre-existing Cover"],
    features: [
      "Individual Plan",
      "Family Floater",
      "Critical Illness",
      "OPD Coverage",
    ],
  },
  {
    id: "insurance",
    name: "Insurance",
    icon: <ShieldCheck className="w-8 h-8" />,
    imageUrl: insurance,
    description: "Life and general insurance for complete protection.",
    fullDescription:
      "Complete insurance solutions including life insurance, vehicle insurance, property insurance, and business insurance for comprehensive protection.",
    benefits: ["Life Cover", "Savings Plan", "Risk Management", "Tax Benefits"],
    features: [
      "Life Insurance",
      "Vehicle Insurance",
      "Property Insurance",
      "Business Insurance",
    ],
  },
  {
    id: "gst-registration",
    name: "GST Registration",
    icon: <Store className="w-8 h-8" />,
    imageUrl: gst,
    description: "Complete GST registration and compliance services.",
    fullDescription:
      "Professional GST services including registration, monthly/quarterly filing, returns, and compliance management for businesses of all sizes.",
    benefits: ["Easy Registration", "Timely Filing", "Input Credit"],
    features: [
      "New Registration",
      "GST Filing",
      "Annual Returns",
      "Compliance Audit",
    ],
  },
];
export const GST_SERVICES = [
  {
    id: "gst",
    name: "GST Registration",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: img_1,
  },
  {
    id: "gstin-modification",
    name: "GSTIN Modification",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst1,
  },
  {
    id: "gst-return-filing",
    name: "GST Return Filing",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst2,
  },
  {
    id: "lut",
    name: "LUT (Letter Of Undertaking)",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst3,
  },
  {
    id: "gst-refund-application",
    name: "GST Refund Aplication",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst5,
  },
  {
    id: "gst-consultency",
    name: " GST Consultancy / Reply to GST Notices",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst6,
  },
  {
    id: "e-invoicing",
    name: "E-Invoicing",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst7,
  },
  {
    id: "gst-reconciliation",
    name: "GST Reconciliation",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst8,
  },
  {
    id: "gst-audit",
    name: "GST Audit Consultancy",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst8,
  },
  {
    id: "gst-cancellation",
    name: "GSTIN Cancellation / Surrender / Revocation of Cancellation of Registration",
    icon: <FileText className="w-8 h-8" />,
    imageUrl: subgst9,
  },
];
export const INCOME_TAX_SERVICES = [
  {
    id: "itr-1",
    name: "Salaried Individual Tax Filing (ITR 1)",
    imageUrl: it1,
  },
  {
    id: "itr-2",
    name: "Capital Gains Income Tax Filing (ITR 2)",
    imageUrl: it2,
  },
  { id: "itr-3", name: "Business Tax Return (ITR 3)", imageUrl: it3 },

  { id: "itr-4", name: "Presumptive Income Tax Filing (ITR 4)", imageUrl: it5 },
  {
    id: "itr-5",
    name: "Partnership Firm / LLP Tax Filing (ITR 5)",
    imageUrl: it6,
  },
  {
    id: "itr-6",
    name: "Corporate Assessee / Company Tax Filing (ITR 6)",
    imageUrl: it7,
  },

  { id: "itr-7", name: "Trust Tax Filing (ITR 7)", imageUrl: it8 },
  {
    id: "securities-trader",
    name: "Income Tax Filing For Securities Traders",
    imageUrl: it9,
  },
  {
    id: "professionals",
    name: "Income Tax Filing for Professionals",
    imageUrl: it10,
  },

  { id: "nri-filing", name: "Income Tax Filing For NRI", imageUrl: it11 },
  { id: "computation-income", name: "Computation of Income", imageUrl: it12 },
  { id: "balance-sheet", name: "Balance Sheet", imageUrl: it13 },

  { id: "pl-account", name: "Profit and Loss Account", imageUrl: it14 },
  { id: "projected-bs", name: "Projected Balance Sheet", imageUrl: it15 },
  { id: "provisional-bs", name: "Provisional Balance Sheet", imageUrl: it16 },

  {
    id: "ca-certification",
    name: "CA Certification of Books of Accounts and Returns",
    imageUrl: it17,
  },
  {
    id: "itr-consultancy",
    name: "Income Tax Return Consultancy",
    imageUrl: it18,
  },
  {
    id: "revised-belated",
    name: "Revised / Belated Income Tax Return",
    imageUrl: it20,
  },

  { id: "income-tax-notice", name: "Income Tax Notice", imageUrl: it21 },
  { id: "income-tax-refund", name: "Income Tax Refund", imageUrl: it22 },
  {
    id: "income-tax-assessment",
    name: "Income Tax Assessment",
    imageUrl: it23,
  },

  { id: "advance-tax", name: "Advance Tax Payment", imageUrl: it24 },
  { id: "scrutiny", name: "Tax Assessment and Scrutiny", imageUrl: it25 },
  { id: "tds-filing", name: "TDS Filing", imageUrl: it26 },

  { id: "itr-verification", name: "Income Tax Verification", imageUrl: it27 },
  { id: "form-10e", name: "Form 10E", imageUrl: it28 },
  { id: "form-10ie", name: "Form 10IE", imageUrl: it29 },

  { id: "form-10ba", name: "Form 10BA", imageUrl: it30 },
  { id: "income-tax-audit", name: "Income Tax Audit", imageUrl: it31 },
  { id: "statutory-audit", name: "Statutory Company Audit", imageUrl: it32 },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    feedback:
      "MB Financial handled my GST registration and monthly filings perfectly. Their team is extremely professional and knowledgeable.",
    rating: 5,
    image: "https://picsum.photos/seed/user1/100/100",
  },
  {
    id: 2,
    name: "Anita Sharma",
    role: "Freelance Designer",
    feedback:
      "Getting an Income Tax refund was never this easy. The step-by-step guidance provided by the experts was truly helpful.",
    rating: 5,
    image: "https://picsum.photos/seed/user2/100/100",
  },
  {
    id: 3,
    name: "Vikram Singh",
    role: "Software Engineer",
    feedback:
      "The Mutual Fund SIP planning they suggested has grown significantly. I appreciate the data-driven approach they take.",
    rating: 4,
    image: "https://picsum.photos/seed/user3/100/100",
  },
];

export const BENEFITS = [
  {
    title: "Trusted Professionals",
    icon: <Users className="w-12 h-12 text-[#3B82F6]" />,
    description:
      "Our team consists of CA, CS, and certified financial planners with years of experience.",
  },
  {
    title: "Fast Processing",
    icon: <Zap className="w-12 h-12 text-[#3B82F6]" />,
    description:
      "We leverage technology to ensure rapid turnaround times for all financial services.",
  },
  {
    title: "Secure & Reliable",
    icon: <Lock className="w-12 h-12 text-[#3B82F6]" />,
    description:
      "Your financial data is protected with enterprise-grade encryption and security protocols.",
  },
  {
    title: "End-to-End Support",
    icon: <Clock className="w-12 h-12 text-[#3B82F6]" />,
    description:
      "From application to approval, we guide you through every step of the process.",
  },
];

export const PARTNERS = [
  { name: "Axis Bank", logo: axis },
  { name: "HDFC Bank", logo: hdfc },
  { name: "ICICI Bank", logo: icici },
  { name: "State Bank of India", logo: sbi },
  { name: "Paytm Payments Bank", logo: paytm },
  { name: "PhonePe", logo: phonepe },
  { name: "Razorpay", logo: razorpay },
];

// Additional constants for About and Contact pages
export const CONTACT_ENTITIES = [
  {
    title: "MB Suvidha Kendra Franchise",
    icon: <Store className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "MB Share Broking",
    icon: <TrendingUp className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "NSDL Payment Bank BC",
    icon: <Landmark className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "MB CSC",
    icon: <Monitor className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "Ayushman Bharat Agency",
    icon: <Heart className="w-10 h-10" />,
    link: "#",
  },
  {
    title: "MB ATM",
    icon: <CreditCard className="w-10 h-10" />,
    link: "#",
  },
];

export const AWARDS = [
  { id: 1, title: "Best Fintech Startup 2023", icon: <ShieldCheck /> },
  { id: 2, title: "ISO 9001:2015 Certified", icon: <ShieldCheck /> },
  { id: 3, title: "Top GST Service Provider", icon: <ShieldCheck /> },
];

// Core Team members
export const CORE_TEAM = [
  {
    name: "Suchit Saraf",
    role: "Director",
    description:
      "Director of MB Financial Private Limited with expertise in valuation, financial modeling, corporate finance, and capital markets.",
    image: "d1.png",
  },
  {
    name: "Pooja Jhunjhunwala",
    role: "Director",
    description:
      "Director at MB Financial Private Limited with LLB degree and expertise in marketing, advertising and legal compliance.",
    image: "d2.png",
  },
];

// Company statistics
export const STATS = [
  { value: "7000+", label: "Suvidha Kendras" },
  { value: "200+", label: "Services Offered" },
  { value: "50+", label: "Cities" },
  { value: "1M+", label: "Happy Customers" },
];
