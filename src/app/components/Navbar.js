// src/app/components/Navbar.jsx

'use client';
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { createPortal } from 'react-dom';

const AddJobModal = dynamic(() => import('./AddJobModal'), { ssr: false });

const Navbar = () => {
  return (
  <nav className="flex items-center justify-between p-4 bg-white rounded-full shadow-md max-w-5xl mx-auto my-5">
      <div className="flex items-center space-x-6 md:space-x-12">

        <img
          src="/cmwlogo.svg"
          alt="Cmw Logo"
          width={40}
          height={40}
        />
        <ul className="hidden md:flex items-center space-x-6 md:space-x-8 text-gray-600 font-semibold">
          <li><a href="#" className="hover:text-purple-600 transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Find Jobs</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Find Talents</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">About us</a></li>
          <li><a href="#" className="hover:text-purple-600 transition-colors">Testimonials</a></li>
        </ul>
      </div>
      <NavbarActions />
    </nav>
  );
};



function NavbarActions() {
  const [showModal, setShowModal] = useState(false);
  const modalRootRef = useRef(null);


  useEffect(() => {
    if (!modalRootRef.current) {
      let modalRoot = document.getElementById('modal-root');
      if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.id = 'modal-root';
        document.body.appendChild(modalRoot);
      }
      modalRootRef.current = modalRoot;
    }
  }, []);

  return (
    <div className="flex items-center pl-8 space-x-4">

      <button className="md:hidden text-gray-600 hover:text-purple-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <button
        className="px-6 py-3 text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-800 rounded-full shadow-md hover:from-purple-600 hover:to-purple-900 transition-all transform hover:scale-105"
        onClick={() => setShowModal(true)}
      >
        Create Jobs
      </button>
      {showModal && modalRootRef.current && createPortal(
        <AddJobModal isOpen={showModal} onClose={() => setShowModal(false)} />,
        modalRootRef.current
      )}
    </div>
  );
}

export default Navbar;
