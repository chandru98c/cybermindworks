// src/app/components/Navbar.jsx

'use client';
import React, { useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { createPortal } from 'react-dom';

const AddJobModal = dynamic(() => import('./AddJobModal'), { ssr: false });


const Navbar = () => {
  return (
  <nav className="flex items-center justify-evenly px-7 py-5 bg-white rounded-full w-4xl mx-auto my-5 navbar-satoshi custom-navbar-shadow">
      <style jsx>{`
        @font-face {
          font-family: 'Satoshi Variable';
          src: url('/fonts/Satoshi-Variable.woff2') format('woff2'),
               url('/fonts/Satoshi-Variable.woff') format('woff');
          font-weight: 100 900;
          font-display: swap;
          font-style: normal;
        }
        .navbar-satoshi * {
          color: #303030 !important;
          font-family: 'Satoshi Variable', Arial, Helvetica, sans-serif !important;
          font-weight: 600 !important;
          font-style: bold !important;
          font-size: 16px !important;
          line-height: 1 !important;
          letter-spacing: 0 !important;
        }
        .custom-navbar-shadow {
          box-shadow: 0px 0px 20px 0px #7F7F7F26 !important;
        }
      `}</style>
  <div className="flex items-center w-full justify-evenly">
        <img
          src="/cmwlogo.svg"
          alt="Cmw Logo"
          width={40}
          height={40}
        />
  <ul className="hidden h-max md:flex items-center w-full justify-evenly">
          <li className='transition-transform duration-200 hover:translate-x-1 hover:translate-y-0.5'><a href="#" className="px-4 py-3 rounded-xl  transition-shadow duration-200 hover:shadow-neutral-200 hover:shadow-md">Home</a></li>
          <li className='transition-transform duration-200 hover:translate-x-1 hover:translate-y-0.5'><a href="#" className="px-4 py-3 rounded-xl  transition-shadow duration-200 hover:shadow-neutral-200 hover:shadow-md">Find Jobs</a></li>
          <li className='transition-transform duration-200 hover:translate-x-1 hover:translate-y-0.5'><a href="#" className="px-4 py-3 rounded-xl  transition-shadow duration-200 hover:shadow-neutral-200 hover:shadow-md">Find Talents</a></li>
          <li className='transition-transform duration-200 hover:translate-x-1 hover:translate-y-0.5'><a href="#" className="px-4 py-3 rounded-xl  transition-shadow duration-200 hover:shadow-neutral-200 hover:shadow-md">About us</a></li>
          <li className='transition-transform duration-200 hover:translate-x-1 hover:translate-y-0.5'>
            <a href="#" className="px-4 py-3 rounded-xl  transition-shadow duration-200 hover:shadow-neutral-200 hover:shadow-md">Testimonials</a>
          </li>
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
    <div className="flex items-center space-x-4">

      <button className="md:hidden text-gray-600 hover:text-purple-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <button
        className="relative group duration-200 hover:translate-x-1 hover:translate-y-0.5 px-5 py-2 whitespace-nowrap text-white font-semibold bg-gradient-to-t from-[#6100AD] to-[#A128FF] rounded-full shadow-md hover:from-purple-600 hover:to-purple-900 transition-all transform hover:scale-105 overflow-hidden"
        onClick={() => setShowModal(true)}
        style={{ height: '40px', minWidth: '126px' }}
      >
 
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:-translate-y-12 group-hover:opacity-0">Create Jobs</span>
 
  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 transition-all duration-300 translate-y-8 opacity-0 group-hover:-translate-y-1/2 group-hover:opacity-100">Login</span>
      </button>
      {showModal && modalRootRef.current && createPortal(
        <AddJobModal isOpen={showModal} onClose={() => setShowModal(false)} />,
        modalRootRef.current
      )}
    </div>
  );
}

export default Navbar;
