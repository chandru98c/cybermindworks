"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const LOCATIONS = ["Chennai", "Mumbai", "Bangalore", "Delhi", "Hyderabad"];
const JOB_TYPES = [
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
];

const AddJobModal = ({ isOpen = true, onClose = () => {} }) => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "",
    salaryMin: "",
    salaryMax: "",
    applicationDeadline: "",
    description: "",
  });

  const modalRef = useRef(null);


  useEffect(() => {
    if (!isOpen) return;
    function handleClick(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (field, value) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-[700px] max-h-fit overflow-y-auto"
      >
        <div className="p-6">
          {/* header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Create Job Opening
            </h2>
          </div>

          <div className="space-y-3">
            {/* hob title  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Job Title
                </label>
                <input
                  type="text"
                  value={formData.jobTitle}
                  onChange={(e) =>
                    handleInputChange("jobTitle", e.target.value)
                  }
                  placeholder="e.g. Full Stack Developer"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  placeholder="e.g. Amazon, Microsoft, Swiggy"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                />
              </div>
            </div>

            {/* location  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Location
                </label>
                <select
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                >
                  <option value="">Select Location</option>
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Job Type
                </label>
                <select
                  value={formData.jobType}
                  onChange={(e) =>
                    handleInputChange("jobType", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                >
                  <option value="">Select Job Type</option>
                  {JOB_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* salary*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Salary Range (LPA)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">₹</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="Min"
                      value={formData.salaryMin}
                      onChange={(e) =>
                        handleInputChange("salaryMin", e.target.value)
                      }
                      className="w-full pl-7 pr-2 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                    />
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none">₹</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="Max"
                      value={formData.salaryMax}
                      onChange={(e) =>
                        handleInputChange("salaryMax", e.target.value)
                      }
                      className="w-full pl-7 pr-2 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm">
                  Application Deadline
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={(e) =>
                      handleInputChange("applicationDeadline", e.target.value)
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white"
                  />
                  <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* description */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">
                Job Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                rows={6}
                placeholder="Describe the job role, requirements, and perks"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-sm text-gray-900 bg-white resize-none"
              />
            </div>
          </div>

          {/* bottom buttons */}
          <div className="flex justify-between items-center mt-8 gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-sm"
            >
              Draft
            </button>
            <button
              className="px-8 py-3 bg-[#00BFFF] hover:bg-[#00A8E6] text-white rounded-lg font-medium transition-colors text-sm"
              onClick={async () => {
           
                if (!formData.jobTitle || !formData.companyName) return;
                await fetch("/api/jobs", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    jobTitle: formData.jobTitle,
                    companyName: formData.companyName,
                    location: formData.location,
                    jobType: formData.jobType,
                    salaryMin: Number(formData.salaryMin),
                    salaryMax: Number(formData.salaryMax),
                    applicationDeadline: formData.applicationDeadline,
                    description: formData.description,
                  }),
                });
                onClose();
                setFormData({
                  jobTitle: "",
                  companyName: "",
                  location: "",
                  jobType: "",
                  salaryMin: "",
                  salaryMax: "",
                  applicationDeadline: "",
                  description: "",
                });
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobModal;