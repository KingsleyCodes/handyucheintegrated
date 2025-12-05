// pages/food-services.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaUtensils,
  FaTruck,
  FaHome,
  FaStar,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheck
} from 'react-icons/fa';
import { 
  MdRestaurant,
  MdLocalDining,
  MdDeliveryDining,
  MdEventAvailable
} from 'react-icons/md';
import { 
  GiHotMeal,
  GiForkKnifeSpoon,
  GiAfrica,
  GiCookingPot
} from 'react-icons/gi';
import { useState } from 'react';

export default function FoodServices() {
  const [selectedPackage, setSelectedPackage] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/food-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Authentic Local Cuisine & Delivery</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Experience the rich flavors of traditional dishes with our premium food services, featuring local specialties and convenient delivery options.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
              <MdRestaurant className="text-xl" />
              Order Now
            </button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Food Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              From traditional local dishes to convenient delivery services, we bring authentic flavors right to your doorstep.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Local Dishes */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <GiAfrica className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Local Dishes</h3>
                <p className="text-gray-600 mb-4">
                  Authentic traditional meals prepared with fresh ingredients and traditional recipes.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiHotMeal className="text-blue-500" />
                    Traditional Soups & Stews
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCookingPot className="text-blue-500" />
                    Local Rice Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <GiForkKnifeSpoon className="text-blue-500" />
                    Authentic Swallows
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-blue-500" />
                    Family Recipes
                  </li>
                </ul>
              </div>

              {/* Delivery Service */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                  <FaTruck className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Delivery Service</h3>
                <p className="text-gray-600 mb-4">
                  Fast and reliable food delivery to your home, office, or event location.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdDeliveryDining className="text-green-500" />
                    Quick Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHome className="text-green-500" />
                    Home & Office Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-green-500" />
                    Timely Service
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-green-500" />
                    Quality Guarantee
                  </li>
                </ul>
              </div>

              {/* Catering Services */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <MdEventAvailable className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Catering Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional catering for events, parties, and corporate functions.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdEventAvailable className="text-purple-500" />
                    Event Catering
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUtensils className="text-purple-500" />
                    Corporate Events
                  </li>
                  <li className="flex items-center gap-2">
                    <GiForkKnifeSpoon className="text-purple-500" />
                    Private Parties
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-purple-500" />
                    Custom Menus
                  </li>
                </ul>
              </div>

              {/* Traditional Specialties */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors">
                  <GiHotMeal className="text-3xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Traditional Specialties</h3>
                <p className="text-gray-600 mb-4">
                  Signature local dishes that showcase our culinary heritage and expertise.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiCookingPot className="text-yellow-500" />
                    Signature Soups
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHotMeal className="text-yellow-500" />
                    Local Delicacies
                  </li>
                  <li className="flex items-center gap-2">
                    <GiForkKnifeSpoon className="text-yellow-500" />
                    Traditional Sides
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    Chef&apos;s Specials
                  </li>
                </ul>
              </div>

              {/* Meal Plans */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors">
                  <MdLocalDining className="text-3xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Meal Plans</h3>
                <p className="text-gray-600 mb-4">
                  Customized meal plans for individuals, families, and special dietary needs.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdLocalDining className="text-red-500" />
                    Daily Meal Plans
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUtensils className="text-red-500" />
                    Weekly Subscriptions
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHotMeal className="text-red-500" />
                    Family Packages
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheck className="text-red-500" />
                    Dietary Accommodations
                  </li>
                </ul>
              </div>

              {/* Consultation */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <FaUtensils className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Menu Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Expert guidance for event planning and custom menu creation.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaUtensils className="text-indigo-500" />
                    Event Menu Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <GiForkKnifeSpoon className="text-indigo-500" />
                    Custom Recipe Development
                  </li>
                  <li className="flex items-center gap-2">
                    <MdEventAvailable className="text-indigo-500" />
                    Catering Coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-indigo-500" />
                    Professional Advice
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Dishes Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Popular Local Dishes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Traditional Soups */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-56 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center group-hover:from-blue-500 group-hover:to-blue-700 transition-colors">
                  <GiCookingPot className="text-4xl text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GiCookingPot className="text-blue-500" />
                    <span className="text-sm font-semibold text-blue-600">TRADITIONAL</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Signature Soups</h3>
                  <p className="text-gray-600 mb-4">
                    Rich, flavorful traditional soups served with your choice of swallow - a true taste of home.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                    View Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Rice Dishes */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-56 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center group-hover:from-green-500 group-hover:to-green-700 transition-colors">
                  <GiHotMeal className="text-4xl text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GiHotMeal className="text-green-500" />
                    <span className="text-sm font-semibold text-green-600">POPULAR</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Local Rice Dishes</h3>
                  <p className="text-gray-600 mb-4">
                    Authentic rice preparations with traditional spices and ingredients, perfect for any occasion.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                    View Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Special Delicacies */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="h-56 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center group-hover:from-purple-500 group-hover:to-purple-700 transition-colors">
                  <GiForkKnifeSpoon className="text-4xl text-white" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <GiForkKnifeSpoon className="text-purple-500" />
                    <span className="text-sm font-semibold text-purple-600">SPECIALTY</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Local Delicacies</h3>
                  <p className="text-gray-600 mb-4">
                    Unique traditional dishes and snacks that showcase our rich culinary heritage and flavors.
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center gap-2 transition-colors">
                    View Menu <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Taste Authentic Local Flavors</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Experience the true taste of traditional cuisine with our authentic local dishes and convenient delivery service. Perfect for family meals, events, or everyday dining.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <MdRestaurant className="text-xl" />
                Order Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <MdEventAvailable className="text-xl" />
                Book Catering
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}