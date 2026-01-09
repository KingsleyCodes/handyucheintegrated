// pages/real-estate.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid'; // Added dynamic grid
import { 
  FaHome, 
  FaBuilding, 
  FaDollarSign, 
  FaChartLine,
  FaSearch,
  FaHandshake,
  FaClipboardList,
  FaTools,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  MdRealEstateAgent,
  MdOutlineShortText,
  MdSell,
  MdManageAccounts
} from 'react-icons/md';
import { 
  GiHouse,
  GiMoneyStack,
  GiTakeMyMoney
} from 'react-icons/gi';

export default function RealEstate() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/real-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Premium Real Estate Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Your trusted partner for rentals, shortlets, property sales, and comprehensive real estate marketing services.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
              <MdRealEstateAgent className="text-xl" />
              Explore Properties
            </button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Real Estate Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Comprehensive real estate solutions tailored to meet your residential, commercial, and investment needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Rentals */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <GiHouse className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Rentals</h3>
                <p className="text-gray-600 mb-4">
                  Find your perfect rental home or list your property with professional management.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaHome className="text-blue-500" />
                    Residential Apartments
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-blue-500" />
                    Commercial Spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHouse className="text-blue-500" />
                    Duplexes & Townhouses
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-blue-500" />
                    Lease Management
                  </li>
                </ul>
              </div>

              {/* Shortlets */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                  <MdOutlineShortText className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Shortlet Services</h3>
                <p className="text-gray-600 mb-4">
                  Premium short-term accommodations for business trips, vacations, and temporary stays.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaHome className="text-green-500" />
                    Luxury Apartments
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-green-500" />
                    Serviced Apartments
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHouse className="text-green-500" />
                    Vacation Homes
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTools className="text-green-500" />
                    Fully Furnished Options
                  </li>
                </ul>
              </div>

              {/* Sales */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <MdSell className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Sales</h3>
                <p className="text-gray-600 mb-4">
                  Buy or sell properties with expert guidance and market insights.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiMoneyStack className="text-purple-500" />
                    Residential Properties
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-purple-500" />
                    Commercial Real Estate
                  </li>
                  <li className="flex items-center gap-2">
                    <GiTakeMyMoney className="text-purple-500" />
                    Investment Opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHandshake className="text-purple-500" />
                    Negotiation & Closing
                  </li>
                </ul>
              </div>

              {/* Property Marketing */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors">
                  <FaChartLine className="text-3xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Property Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive marketing solutions to maximize your **property&apos;s** visibility and value.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaDollarSign className="text-yellow-500" />
                    Property Valuation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChartLine className="text-yellow-500" />
                    Digital Marketing Campaigns
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSearch className="text-yellow-500" />
                    Market Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClipboardList className="text-yellow-500" />
                    Listing Optimization
                  </li>
                </ul>
              </div>

              {/* Asset Marketing */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors">
                  <FaDollarSign className="text-3xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Asset Marketing</h3>
                <p className="text-gray-600 mb-4">
                  Marketing services for various assets beyond real estate properties.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaDollarSign className="text-red-500" />
                    Electronics & Gadgets
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChartLine className="text-red-500" />
                    Personal Items
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSearch className="text-red-500" />
                    Value Assessment
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClipboardList className="text-red-500" />
                    Sales Strategy
                  </li>
                </ul>
              </div>

              {/* Consultation */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <MdManageAccounts className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real Estate Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Expert advice for all your real estate investment and management decisions.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaHome className="text-indigo-500" />
                    Investment Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-indigo-500" />
                    Property Management
                  </li>
                  <li className="flex items-center gap-2">
                    <FaChartLine className="text-indigo-500" />
                    Market Trends Analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHandshake className="text-indigo-500" />
                    Legal & Compliance Guidance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Listings Section - NOW DYNAMIC */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Properties</h2>
            
            {/* This component replaces your static cards. 
                It pulls real-time data from Firebase for 'real-estate' category.
            */}
            <PortfolioGrid category="real-estate" />

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect Property</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether **you&apos;re** looking to rent, buy, invest, or market your property, our expert team is here to provide personalized solutions tailored to your real estate goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <FaSearch className="text-xl" />
                Browse Properties
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <MdRealEstateAgent className="text-xl" />
                List Your Property
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}