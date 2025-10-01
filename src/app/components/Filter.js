// src/app/components/Filter.js
'use client';

import React, { useState } from 'react';
import { Search, MapPin, User, ChevronDown } from 'lucide-react';

const locations = ["Onsite", "Remote", "Hybrid"];
const types = ["Full Time", "Part Time", "Internship"];

const Filter = ({
  search, setSearch,
  location, setLocation,
  type, setType,
  minSalary, setMinSalary,
  maxSalary, setMaxSalary
}) => {
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxSalary - 1);
    setMinSalary(value);
  };
  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minSalary + 1);
    setMaxSalary(value);
  };
 
  const formatSalary = (value) => {
   
    const monthly = value / 12;
   
    const kValue = Math.round(monthly / 1000);
    return `₹${kValue}K`;
  };
  return (
  <div
    className="flex flex-col md:flex-row items-center justify-between py-5 px-10 bg-white w-full mx-auto my- space-y-4 md:space-y-0 "
    style={{ boxShadow: '0px 0px 14px 0px #C6BFBF40' }}
  >
      {/* search bar */}
      <div className="flex items-center w-full md:w-1/4 flex-grow px-4 py-3">
        <img src='/searchfilter.svg' className="h-6 w-6 mr-5 text-[#686868]" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          className="bg-transparent outline-none w-full placeholder-[#686868] text-[#686868] font-[Satoshi Variable] font-medium" 
          style={{ fontFamily: 'Satoshi Variable, Arial, Helvetica, sans-serif', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0' }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="hidden md:block h-12 w-[2.5px] bg-gray-200 mx-6"></div>

      {/* preferred location */}
      <div className="flex items-center w-full md:w-1/4 flex-grow px-4 py-3 relative">
        <img src='/locationfilter.svg' className="h-6 w-6 mr-5 text-[#686868]" />
        <select
          className="bg-white outline-none w-full text-[#686868] font-[Satoshi Variable] font-medium cursor-pointer appearance-none pr-8"
          style={{ fontFamily: 'Satoshi Variable, Arial, Helvetica, sans-serif', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0' }}
          value={location}
          onChange={e => setLocation(e.target.value)}
        >
          <option value="">Preferred Location</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 w-6 h-6 text-gray-400 pointer-events-none" />
      </div>

      <div className="hidden md:block h-12 w-[2.5px] bg-gray-200 mx-6"></div>

      {/* job type */}
      <div className="flex items-center w-full md:w-1/4 flex-grow px-4 py-3 relative">
        <img src='/jobtypefilter.svg' className="h-6 w-6 mr-5 text-[#686868]" />
        <select
          className="bg-white outline-none w-full text-[#686868] font-[Satoshi Variable] font-medium cursor-pointer appearance-none pr-8"
          style={{ fontFamily: 'Satoshi Variable, Arial, Helvetica, sans-serif', fontWeight: 500, fontStyle: 'normal', fontSize: '16px', lineHeight: '1', letterSpacing: '0' }}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="">Job type</option>
          {types.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 w-6 h-6 text-gray-400 pointer-events-none" />
      </div>

      <div className="hidden md:block h-12 w-[2.5px] bg-gray-200 mx-6"></div>
      {/* salary range */}
      <div className="flex flex-col w-full md:w-1/4 items-start px-4 ">
        <div className="flex justify-between w-full mb-3">
          <span
            style={{
              fontFamily: 'Satoshi Variable, Arial, Helvetica, sans-serif',
              fontWeight: 600,
              fontStyle: 'bold',
              fontSize: '16px',
              lineHeight: '1',
              letterSpacing: '0',
              color: '#222222',
            }}
          >
            Salary Per Month
          </span>
          <span
            style={{
              fontFamily: 'Satoshi Variable, Arial, Helvetica, sans-serif',
              fontWeight: 600,
              fontStyle: 'bold',
              fontSize: '16px',
              lineHeight: '1',
              letterSpacing: '0',
              color: '#222222',
            }}
          >
            {formatSalary(minSalary)} - {formatSalary(maxSalary)}
          </span>
        </div>
   
          <div className="relative w-full h-6 ml-2 flex items-center">
            <div className="absolute w-full h-1 rounded-full bg-gray-200"></div>
            <div
              className="absolute h-1 rounded-full bg-black"
              style={{
                left: `${((minSalary-0)/5000000)*100}%`,
                width: `${((maxSalary-minSalary)/5000000)*100}%`
              }}
            />
            <input
              type="range"
              min="0"
              max="5000000"
              step="100000"
              value={minSalary}
              onChange={handleMinChange}
              className="absolute w-full h-6 bg-transparent appearance-none cursor-pointer z-10 range-slider"
            />
            <input
              type="range"
              min="0"
              max="5000000"
              step="100000"
              value={maxSalary}
              onChange={handleMaxChange}
              className="absolute w-full h-6 bg-transparent appearance-none cursor-pointer z-20 range-slider"
            />
          </div>
          <style jsx>{`
            .custom-filter-shadow {
              box-shadow: 0px 0px 14px 0px black !important;
            }
            .range-slider {
              pointer-events: none;
            }
            .range-slider::-webkit-slider-thumb {
              -webkit-appearance: none;
              height: 16px;
              width: 16px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: 5px solid black;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              pointer-events: all;
              position: relative;
            }
            .range-slider::-moz-range-thumb {
              width: 16px;
              height: 16px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
              border: 3px solid black;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
              pointer-events: all;
              position: relative;
            }
          `}</style>
        </div>
    </div>
  );

};

export default Filter;