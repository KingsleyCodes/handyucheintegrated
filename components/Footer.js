// components/Footer.js
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0D1F17] to-[#1A1A1A] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent">
              Integrated Services
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Elevating lifestyles through exceptional design, premium real estate, 
              gourmet dining, and luxury amenities. Your partner in sophisticated living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300 transform hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300 transform hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300 transform hover:scale-110">
                <FaTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-[#B8860B]">Quick Links</h4>
            <div className="space-y-3">
              <Link href="/interior-design" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Interior Design
              </Link>
              <Link href="/realestate" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Real Estate
              </Link>
              <Link href="/food-services" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Food Services
              </Link>
              <Link href="/laundry-services" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Laundry Services
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-2 transform">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-[#B8860B]">Our Services</h4>
            <div className="space-y-3">
              <span className="block text-gray-300">Bespoke Interior Design</span>
              <span className="block text-gray-300">Luxury Real Estate</span>
              <span className="block text-gray-300">Gourmet Food Services</span>
              <span className="block text-gray-300">Premium Garment Care</span>
              <span className="block text-gray-300">Home Consultation</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold mb-6 text-[#B8860B]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                <span className="text-gray-300">09062166841</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                <span className="text-gray-300">hello@handyuche.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 text-[#B8860B] flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Rich Royal Estate, FHA<br />
                  Behind Living Faith Church<br />
                  Lugbe 900107, FCT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Integrated Services. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#B8860B] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}