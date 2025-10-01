// src/app/components/card.js
"use client";
import React from "react";
import { Users, MapPin, Layers } from "lucide-react";
import Image from "next/image";

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
    <div style={{ boxShadow: '0px 0px 14px 0px #D3D3D326' }} className="bg-white flex flex-col justify-between rounded-2xl shadow-md p-4 mt-2 border border-gray-100">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div   style={{
  boxShadow: '0px 0px 10.25px 0px #94949440',
  border: '1px solid #FFFFFF',
  width: '83px',
  height: '82px',
  padding: '9px',
  borderRadius: '13.18px',
  background: 'linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)',
}} className=" flex items-center justify-center rounded-lg p-1 border shadow-sm bg-gradient-to-r overflow-hidden">
            <img
              src={companyLogo}
              alt={jobTitle}
          
              className="w-full h-full object-contain  rounded-full"
            />
           
          </div>
          <span style={{fontSize: '14px', fontWeight: '500'}} className="bg-[#B0D9FF] text-black text-xs px-3 py-2 rounded-lg font-medium">
            {timePosted}
          </span> 
        </div>

        {/* job Title */}
        <h3 style={{fontSize: '20px', fontWeight: '700'}} className="text-lg font-semibold text-gray-900 mb-4">{jobTitle}</h3>

        {/* job Info */}
        <div style={{color:'#5A5A5A'}} className="flex items-center gap-4 text-gray-600 text-sm mb-4">
          <div className="flex items-center gap-1">
            <img src="usercard.svg" className="w-4 h-5 text-gray-500" />
            <span style={{fontSize: '16px', fontWeight: '500'}} >{experience}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="locationcard.svg" className="w-4 h-5 text-gray-500" />
            <span style={{fontSize: '16px', fontWeight: '500'}}>{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="salarycard.svg" className="w-4 h-5 text-gray-500" />
            <span style={{fontSize: '16px', fontWeight: '500'}}>{formatSalaryLPA(salary)}</span>
          </div>
        </div>

        {/* description */}
        <ul style={{color:'#555555', fontWeight: '500'}} className="text-sm text-gray-700 space-y-1 mb-6">
          {description?.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* button */}
      <button className="w-full bg-[#00AAFF] hover:bg-[#008CDB] text-white font-medium py-2.5 rounded-lg transition-colors">
        Apply Now
      </button>
    </div>
  );
};





const Cards = ({ jobs }) => {
  const jobsToShow = jobs ;
  return (
    <div className="py-10 px-14 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {jobsToShow.map((job, idx) => (
          <JobCard key={idx} {...job} />
        ))}
      </div>
    </div>
  );
};

export default Cards;