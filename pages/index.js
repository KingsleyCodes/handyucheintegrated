// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Enhanced Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-fixed bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg.jpg')" }}
          />
          
          {/* Emerald Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D5C3E]/90 to-[#1A1A1A]/80"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                Elevated
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B8860B] to-[#F8F8F8]">
                  Living Experience
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 font-light">
                Curate your lifestyle with our exclusive suite of premium home services. From bespoke interiors to luxury amenities, 
                we deliver unparalleled excellence in every detail.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A67C0A] transform hover:scale-105 transition-all duration-300 shadow-2xl">
                  Discover Excellence
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-[#F8F8F8] to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#0D5C3E] mb-2">500+</div>
                <div className="text-gray-600">Elite Clients</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#0D5C3E] mb-2">1K+</div>
                <div className="text-gray-600">Luxury Projects</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#0D5C3E] mb-2">24/7</div>
                <div className="text-gray-600">Concierge</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-[#0D5C3E] mb-2">98%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#0D5C3E] to-[#B8860B] bg-clip-text text-transparent">
                Curated Luxury Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our exclusive portfolio of services is designed for discerning clients who appreciate 
                the finer things in life. Each offering is crafted with meticulous attention to detail.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              {/* Interior Design */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: "url('/interior-design.jpg')" }}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0D5C3E]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0D5C3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Bespoke Interior Design</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform your space into a masterpiece of design. Our award-winning designers create 
                    environments that reflect your unique taste and elevate your daily living experience.
                  </p>
                  <Link href="/interior-design" className="inline-flex items-center text-[#0D5C3E] font-semibold group-hover:text-[#0A4A32] transition-colors duration-300">
                    Explore Portfolio
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Real Estate */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: "url('/real-estate.jpg')" }}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0D5C3E]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0D5C3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Luxury Real Estate</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover exceptional properties that define luxury living. Our curated portfolio 
                    features exclusive homes and investments for the most discerning clients.
                  </p>
                  <Link href="/realestate" className="inline-flex items-center text-[#0D5C3E] font-semibold group-hover:text-[#0A4A32] transition-colors duration-300">
                    View Properties
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Food Services */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: "url('/food-services.jpg')" }}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0D5C3E]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0D5C3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V5a2 2 0 012-2h14a2 2 0 012 2v10.546z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Gourmet Food Services</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Indulge in culinary excellence with our Michelin-inspired meal services. 
                    Each dish is crafted with premium ingredients and artistic presentation.
                  </p>
                  <Link href="/food-services" className="inline-flex items-center text-[#0D5C3E] font-semibold group-hover:text-[#0A4A32] transition-colors duration-300">
                    Explore Menus
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Laundry Services */}
              <div className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: "url('/laundry-services.jpg')" }}></div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#0D5C3E]/10 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#0D5C3E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Premium Garment Care</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Experience luxury garment care for your finest pieces. Our expert techniques 
                    preserve and enhance the quality of your most valuable clothing investments.
                  </p>
                  <Link href="/laundry-services" className="inline-flex items-center text-[#0D5C3E] font-semibold group-hover:text-[#0A4A32] transition-colors duration-300">
                    Schedule Service
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#0D5C3E] to-[#1A1A1A]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Begin Your Luxury Journey
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join our exclusive community of clients who have elevated their lifestyle with our premium services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#B8860B] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#A67C0A] transform hover:scale-105 transition-all duration-300 shadow-2xl">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Private Tour
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}