// src/app/components/card.js
"use client";
import React from "react";
import { Users, MapPin, Layers } from "lucide-react";

const JobCard = ({
  companyLogo,
  jobTitle,
  experience,
  location,
  salary,
  description,
  timePosted = "24h Ago",
}) => {

  function formatSalaryLPA(sal) {
    const match = sal.match(/([\d,]+)/g);
    if (!match) return sal;
    const max = parseInt(match[match.length - 1].replace(/,/g, ""));
    if (max) {
      return `${(max / 100000).toFixed(0)}LPA`;
    }
    return sal;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
      {/* jogo  */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-15 h-15 flex items-center justify-center rounded-lg p-1 border shadow-sm bg-linear-gradient bg-white-to-black bg-gradient-to-r bg  overflow-hidden">
          <img
            src={companyLogo}
            alt={jobTitle}
            className="w-full h-full object-contain bg-black rounded-full"
          />
        </div>
        <span className="bg-[#B0D9FF] text-gray-800 text-xs px-3 py-1 rounded-lg font-medium">
          {timePosted}
        </span>
      </div>

      {/* job Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{jobTitle}</h3>

      {/* job Info */}
      <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4 text-gray-500" />
          <span>{experience}</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Layers className="w-4 h-4 text-gray-500" />
          <span>{formatSalaryLPA(salary)}</span>
        </div>
      </div>

      {/* description */}
      <ul className="text-sm text-gray-700 space-y-1 mb-6">
        {description?.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            <span className="leading-snug">{item}</span>
          </li>
        ))}
      </ul>

      {/* button */}
      <button className="w-full bg-[#00AAFF] hover:bg-[#008CDB] text-white font-medium py-2.5 rounded-lg transition-colors">
        Apply Now
      </button>
    </div>
  );
};


const dummyJobs = [
  {
    companyLogo: "/logos/amazon.png",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/tesla.png",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/swiggy.png",
    jobTitle: "UX/UI Designer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },

  {
    companyLogo: "/logos/amazon.png",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/tesla.png",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/swiggy.png",
    jobTitle: "UX/UI Designer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/amazon.png",
    jobTitle: "Full Stack Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
  {
    companyLogo: "/logos/tesla.png",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Onsite",
    salary: "₹1,200,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
  },
];


const Cards = ({ jobs }) => {
  const jobsToShow = jobs || dummyJobs;
  return (
    <div className="p-6  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jobsToShow.map((job, idx) => (
          <JobCard key={idx} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Cards;