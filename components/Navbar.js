// components/Navbar.js
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth custom spring variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -12,
      scale: 0.96,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
        mass: 0.8,
      },
    },
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center group">
            {/* Replace with your actual logo image */}
            <Image 
              src="/logo.png" // Update this path to your logo
              alt="Integrated Services Logo"
              width={160} // Slightly larger for luxury feel
              height={70}
              className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            <a 
              href="/" 
              className="text-gray-700 hover:text-[#0D5C3E] transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/interior-design" 
              className="text-gray-700 hover:text-[#0D5C3E] transition-all duration-300 font-medium relative group"
            >
              Interior Design
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/realestate" 
              className="text-gray-700 hover:text-[#0D5C3E] transition-all duration-300 font-medium relative group"
            >
              Real Estate
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/food-services" 
              className="text-gray-700 hover:text-[#0D5C3E] transition-all duration-300 font-medium relative group"
            >
              Food Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/laundry-services" 
              className="text-gray-700 hover:text-[#0D5C3E] transition-all duration-300 font-medium relative group"
            >
              Laundry Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B8860B] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-[#0D5C3E] to-[#1A3C2E] text-white px-6 py-2.5 rounded-lg hover:from-[#0A4A32] hover:to-[#152A21] transition-all duration-300 transform hover:scale-105 shadow-lg font-medium"
            >
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="md:hidden mt-4 pb-4 space-y-3 bg-white/95 backdrop-blur-md rounded-lg p-4 shadow-lg border border-gray-100 origin-top overflow-hidden"
            >
              <a 
                href="/" 
                className="block text-gray-700 hover:text-[#0D5C3E] transition-colors duration-300 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="/interior-design" 
                className="block text-gray-700 hover:text-[#0D5C3E] transition-colors duration-300 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Interior Design
              </a>
              <a 
                href="/realestate" 
                className="block text-gray-700 hover:text-[#0D5C3E] transition-colors duration-300 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Real Estate
              </a>
              <a 
                href="/food-services" 
                className="block text-gray-700 hover:text-[#0D5C3E] transition-colors duration-300 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Food Services
              </a>
              <a 
                href="/laundry-services" 
                className="block text-gray-700 hover:text-[#0D5C3E] transition-colors duration-300 font-medium py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Laundry Services
              </a>
              <a 
                href="/contact" 
                className="block bg-gradient-to-r from-[#0D5C3E] to-[#1A3C2E] text-white px-4 py-3 rounded-lg hover:from-[#0A4A32] hover:to-[#152A21] transition-all duration-300 text-center font-medium mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}