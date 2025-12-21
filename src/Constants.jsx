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
} from "lucide-react";

import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";

import axis from "./assets/partner_logos/axis2.png";
import hdfc from "./assets/partner_logos/hdfc1.png";
import icici from "./assets/partner_logos/icici2.png";
import sbi from "./assets/partner_logos/sbi.png";
import paytm from "./assets/partner_logos/paytm2.png";
import phonepe from "./assets/partner_logos/kotak2.png";
import razorpay from "./assets/partner_logos/razorpay.png";

export const SERVICES = [
  {
    id: "gst-services",
    name: "GST Services",
    icon: <Briefcase className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/tax-concept-illustration_114360-6421.jpg",
    description:
      "Complete GST registration and monthly/quarterly filing solutions.",
    fullDescription:
      "Starting a business? We handle the complex GST registration process and monthly/quarterly filings, ensuring your business remains compliant and avoids penalties.",
    benefits: ["Swift Registration", "Correct Input Credit", "Timely Filing"],
    features: [
      "New GST Reg",
      "GSTR 1/3B Filing",
      "Annual Returns",
      "GST Audits",
    ],
  },
  {
    id: "aadhar-atm",
    name: "Aadhar ATM (AEPS)",
    icon: <Smartphone className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/fingerprint-concept-illustration_114360-3162.jpg",
    description:
      "Cash withdrawal and banking services using Aadhar authentication.",
    fullDescription:
      "Empower your local community with banking services. Use Aadhar-enabled payment systems for easy withdrawals, balance inquiries, and mini-statements.",
    benefits: ["Secure Transactions", "Rural Banking", "Instant Cash"],
    features: [
      "Cash Withdrawal",
      "Balance Inquiry",
      "Mini Statement",
      "Aadhar Pay",
    ],
  },
  {
    id: "income-tax-filing",
    name: "Income Tax Return Filing",
    icon: <FileText className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/tax-return-concept-illustration_114360-5231.jpg",
    description:
      "Expert ITR filing for salaried, business, and professional clients.",
    fullDescription:
      "Our Income Tax services are designed to maximize your savings while ensuring complete compliance with the latest regulations. We handle everything from ITR filing to tax planning.",
    benefits: ["Maximized Deductions", "Accuracy Guaranteed", "Audit Support"],
    features: [
      "ITR 1-7 Filing",
      "TDS Returns",
      "Tax Planning",
      "Notice Response",
    ],
  },
  {
    id: "financial-services",
    name: "Financial Services",
    icon: <Wallet className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/investment-data-concept-illustration_114360-5159.jpg",
    description:
      "Comprehensive wealth management and personal financing solutions.",
    fullDescription:
      "Get the financial support you need with our hassle-free personal loans and wealth management. We offer competitive rates and expert advice.",
    benefits: ["Quick Disbursement", "Expert Guidance", "Tailored Plans"],
    features: [
      "Personal Loans",
      "Investment Advice",
      "Portfolio Management",
      "SIP Planning",
    ],
  },
  {
    id: "start-business",
    name: "Start New Business",
    icon: <Users className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/startup-concept-illustration_114360-5259.jpg",
    description:
      "End-to-end registration and legal compliance for new startups.",
    fullDescription:
      "Turn your idea into a legal entity. We provide registration for Private Limited, LLP, Partnership, and Sole Proprietorship firms.",
    benefits: [
      "Expert Legal Help",
      "Faster Incorporation",
      "One-stop Solution",
    ],
    features: [
      "Company Registration",
      "PAN/TAN App",
      "MSME/Udyam",
      "Compliance Audit",
    ],
  },
  {
    id: "courier-service",
    name: "Delhivery Courier Service",
    icon: <Truck className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/delivery-service-concept-illustration_114360-5232.jpg",
    description:
      "Reliable domestic and international logistics for your business.",
    fullDescription:
      "Ship products globally with our courier partnership. We provide door-to-door pickup and real-time tracking for all your shipments.",
    benefits: ["Lowest Rates", "Wide Network", "Real-time Tracking"],
    features: [
      "Domestic Shipping",
      "International Freight",
      "COD Collection",
      "B2B Logistics",
    ],
  },
  {
    id: "payswiff-solutions",
    name: "Payment Solutions",
    icon: <Smartphone className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/contactless-payment-concept-illustration_114360-3165.jpg",
    description: "Advanced mPOS and digital payment collection systems.",
    fullDescription:
      "Upgrade your shop with modern payment methods. Collect payments via Credit Card, Debit Card, UPI, and Digital Wallets seamlessly.",
    benefits: ["Instant Settlement", "Secure Hardware", "Low MDR"],
    features: [
      "mPOS Terminal",
      "UPI QR Codes",
      "Tap to Pay",
      "Merchant Dashboard",
    ],
  },
  {
    id: "credit-cards",
    name: "Premium Credit Cards",
    icon: <CreditCard className="w-8 h-8" />,
    imageUrl:
      "https://img.freepik.com/free-vector/bank-card-concept-illustration_114360-5230.jpg",
    description:
      "Access to top-tier credit cards with exclusive rewards and benefits.",
    fullDescription:
      "Enjoy a world of rewards, travel perks, and cashback. We help you choose the best credit cards tailored to your spending habits.",
    benefits: ["Exclusive Rewards", "Airport Lounge Access", "Cashback Offers"],
    features: [
      "IDFC First Cards",
      "Premium Rewards",
      "Zero Annual Fee",
      "Instant Virtual Card",
    ],
  },
];

export const AWARDS = [
  {
    id: 1,
    title: "Excellence in Finance",
    year: "2023",
    image: c1,
    description:
      "Awarded for outstanding contribution to retail financial services.",
  },
  {
    id: 2,
    title: "Best Advisory Firm",
    year: "2022",
    image: c2,
    description: "Recognized as the top tax and compliance advisory for SMEs.",
  },
  {
    id: 3,
    title: "Customer Trust Award",
    year: "2024",
    image: c3,
    description:
      "Highest customer satisfaction rating in the wealth management sector.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Business Owner",
    feedback:
      "FinTrust handled my GST registration and monthly filings perfectly. Their team is extremely professional and knowledgeable.",
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
    icon: <Users className="w-12 h-12 text-blue-600" />,
    description:
      "Our team consists of CA, CS, and certified financial planners.",
  },
  {
    title: "Fast Processing",
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    description:
      "We leverage technology to ensure rapid turnaround times for all services.",
  },
  {
    title: "Secure & Reliable",
    icon: <Lock className="w-12 h-12 text-blue-600" />,
    description:
      "Your data is protected with enterprise-grade encryption and security protocols.",
  },
  {
    title: "End-to-End Support",
    icon: <Clock className="w-12 h-12 text-blue-600" />,
    description:
      "From start to finish, we guide you through every compliance hurdle.",
  },
];

export const PARTNERS = [
  { name: "Axis Bank", logo: axis },
  { name: "HDFC Bank", logo: hdfc },
  { name: "ICICI Bank", logo: icici },
  { name: "SBI", logo: sbi },
  { name: "Paytm", logo: paytm },
  { name: "PhonePe", logo: phonepe },
  { name: "Razorpay", logo: razorpay },
];
