
"use client";
import React, { useState, useMemo, useEffect } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";


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
    type: "Full Time",
  },
  {
    companyLogo: "/logos/tesla.png",
    jobTitle: "Node Js Developer",
    experience: "1-3 yr Exp",
    location: "Remote",
    salary: "₹1,500,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
    type: "Part Time",
  },
  {
    companyLogo: "/logos/swiggy.png",
    jobTitle: "UX/UI Designer",
    experience: "1-3 yr Exp",
    location: "Hybrid",
    salary: "₹900,000",
    description: [
      "A user-friendly interface lets you browse stunning photos and videos",
      "Filter destinations based on interests and travel style, and create personalized",
    ],
    type: "Internship",
  },
  {
    companyLogo: "/logos/amazon.png",
    jobTitle: "Backend Engineer",
    experience: "2-4 yr Exp",
    location: "Remote",
    salary: "₹1,800,000",
    description: [
      "Work on scalable backend systems",
      "Collaborate with product and frontend teams",
    ],
    type: "Full Time",
  },
];

export default function Home() {
  
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [minSalary, setMinSalary] = useState(0);
  const [maxSalary, setMaxSalary] = useState(5000000);
  const [dbJobs, setDbJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then((res) => res.json())
      .then((data) => setDbJobs(data));
  }, []);

  
  const allJobs = [
    ...dummyJobs,
    ...dbJobs.map((job) => ({
      companyLogo: "/logos/amazon.png", // or pick based on companyName
      jobTitle: job.job_title,
      companyName: job.company_name,
      location: job.location,
      jobType: job.job_type,
      salary: job.salary_max ? `₹${job.salary_max}` : "",
      description: job.description ? [job.description] : [],
      experience: "-", // or add if you have
      postedAt: job.posted_at,
    })),
  ];


  const filteredJobs = useMemo(() => {
    return allJobs.filter((job) => {
      if (search && !job.jobTitle?.toLowerCase().includes(search.toLowerCase())) return false;
      if (location && job.location !== location) return false;
      if (type && job.jobType !== type) return false;
      const sal = parseInt((job.salary || "").replace(/[^\d]/g, ""));
      if (sal < minSalary || sal > maxSalary) return false;
      return true;
    });
  }, [allJobs, search, location, type, minSalary, maxSalary]);

  return (
    <div className="min-h-screen bg-[#f8f9fb] flex flex-col">
      <Navbar />
      <Filter
        search={search}
        setSearch={setSearch}
        location={location}
        setLocation={setLocation}
        type={type}
        setType={setType}
        minSalary={minSalary}
        setMinSalary={setMinSalary}
        maxSalary={maxSalary}
        setMaxSalary={setMaxSalary}
      />
      <Cards jobs={filteredJobs} />
    </div>
  );
}
