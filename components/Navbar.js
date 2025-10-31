// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-800">Integrated Services</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/interior-design" className="text-gray-700 hover:text-blue-600 transition-colors">Interior Design</Link>
            <Link href="/realestate" className="text-gray-700 hover:text-blue-600 transition-colors">Realestate</Link>
            <Link href="/food-services" className="text-gray-700 hover:text-blue-600 transition-colors">Food Services</Link>
            <Link href="/laundry-services" className="text-gray-700 hover:text-blue-600 transition-colors">Laundry Services</Link>
            <Link href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Get Started</Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-2 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            <Link href="/interior-design" className="block text-gray-700 hover:text-blue-600 transition-colors">Interior Design</Link>
            <Link href="/realestate" className="block text-gray-700 hover:text-blue-600 transition-colors">realestate</Link>
            <Link href="/food-services" className="block text-gray-700 hover:text-blue-600 transition-colors">food services</Link>
            <Link href="/laundry-services" className="block text-gray-700 hover:text-blue-600 transition-colors">Laundry services</Link>
            <Link href="#" className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-max">Get Started</Link>
          </div>
        )}
      </div>
    </nav>
  );
}