// pages/food-services.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid'; 
import { 
  FaUtensils, 
  FaMotorcycle, 
  FaUsers, 
  FaStar,
  FaClock,
  FaCheckCircle,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaShoppingCart
} from 'react-icons/fa';
import { 
  MdOutlineRestaurantMenu,
  MdDeliveryDining,
  MdOutlineOutdoorGrill, // Replaced MdOutlineCatering with a valid icon
  MdOutlineFastfood
} from 'react-icons/md';
import { 
  GiHotMeal,
  GiBowlOfRice,
  GiCookingPot,
  GiChefToque,
  GiNoodles,
  GiPizzaSlice
} from 'react-icons/gi'; // Fixed typo from 'git-icons' to 'react-icons'

export default function FoodServices() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/food-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Delicious Meals & Catering Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Experience the finest culinary delights with our home delivery and professional catering solutions tailored to your taste.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
              <MdOutlineRestaurantMenu className="text-xl" />
              Order Now
            </button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Culinary Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              From daily home-cooked meals to large event catering, we bring taste and quality to your table.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Home Delivery */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-orange-200 transition-colors">
                  <MdDeliveryDining className="text-3xl text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Home Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Freshly prepared meals delivered straight to your doorstep for your convenience.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaMotorcycle className="text-orange-500" />
                    Fast & Reliable Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHotMeal className="text-orange-500" />
                    Piping Hot Meals
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-orange-500" />
                    Lunch & Dinner Options
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineFastfood className="text-orange-500" />
                    Diverse Menu Selection
                  </li>
                </ul>
              </div>

              {/* Event Catering */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors">
                  <MdOutlineOutdoorGrill className="text-3xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Event Catering</h3>
                <p className="text-gray-600 mb-4">
                  Professional catering services for weddings, parties, and corporate events of all sizes.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaUsers className="text-red-500" />
                    Large Group Handling
                  </li>
                  <li className="flex items-center gap-2">
                    <GiCookingPot className="text-red-500" />
                    Custom Menu Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-red-500" />
                    Professional Service Staff
                  </li>
                  <li className="flex items-center gap-2">
                    <GiChefToque className="text-red-500" />
                    Expert Culinary Team
                  </li>
                </ul>
              </div>

              {/* Corporate Meals */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <FaUtensils className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Corporate Meals</h3>
                <p className="text-gray-600 mb-4">
                  Tailored meal plans and delivery services for offices and business organizations.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-blue-500" />
                    Daily Office Lunch Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <FaLeaf className="text-blue-500" />
                    Healthy & Nutritious Options
                  </li>
                  <li className="flex items-center gap-2">
                    <GiBowlOfRice className="text-blue-500" />
                    Consistent Taste & Quality
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-blue-500" />
                    Hygienic Food Preparation
                  </li>
                </ul>
              </div>

              {/* Specialized Cuisines */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors">
                  <GiNoodles className="text-3xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Specialized Cuisines</h3>
                <p className="text-gray-600 mb-4">
                  Experience a wide variety of local and international dishes prepared by experts.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiBowlOfRice className="text-yellow-500" />
                    Traditional Local Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <GiPizzaSlice className="text-yellow-500" />
                    Continental Cuisines
                  </li>
                  <li className="flex items-center gap-2">
                    <GiNoodles className="text-yellow-500" />
                    Asian Fusion Options
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineRestaurantMenu className="text-yellow-500" />
                    Seasonal Specialties
                  </li>
                </ul>
              </div>

              {/* Meal Subscription */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <FaShoppingCart className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Meal Subscriptions</h3>
                <p className="text-gray-600 mb-4">
                  Convenient and affordable weekly or monthly meal plans for busy individuals.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaClock className="text-purple-500" />
                    Weekly Meal Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-purple-500" />
                    Customizable Packages
                  </li>
                  <li className="flex items-center gap-2">
                    <GiHotMeal className="text-purple-500" />
                    Fresh Daily Deliveries
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-purple-500" />
                    Quality Guaranteed
                  </li>
                </ul>
              </div>

              {/* Culinary Consultation */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <GiChefToque className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Culinary Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Expert advice for menu development, event planning, and culinary management.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdOutlineRestaurantMenu className="text-indigo-500" />
                    Menu Design & Development
                  </li>
                  <li className="flex items-center gap-2">
                    <FaUsers className="text-indigo-500" />
                    Event Food Management
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-indigo-500" />
                    Safety & Quality Standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- DYNAMIC PORTFOLIO SECTION --- */}
        <section className="py-16 md:py-24 bg-white border-t">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Menu & Food Gallery</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Explore our latest culinary creations and catering setups.
            </p>
            
            <PortfolioGrid category="food-services" />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Our Kitchen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
                <h4 className="font-bold">Premium Quality</h4>
                <p className="text-sm text-gray-500">Only the freshest ingredients.</p>
              </div>
              <div>
                <FaLeaf className="text-4xl text-green-500 mx-auto mb-4" />
                <h4 className="font-bold">Healthy & Hygiene</h4>
                <p className="text-sm text-gray-500">Strict safety standards.</p>
              </div>
              <div>
                <FaClock className="text-4xl text-blue-500 mx-auto mb-4" />
                <h4 className="font-bold">On-Time Delivery</h4>
                <p className="text-sm text-gray-500">Always prompt service.</p>
              </div>
              <div>
                <FaUtensils className="text-4xl text-orange-500 mx-auto mb-4" />
                <h4 className="font-bold">Diverse Menu</h4>
                <p className="text-sm text-gray-500">Wide range of cuisines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-500 to-red-600 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hungry for Quality Food?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether it&apos;s a single meal or an event for 500 people, we are ready to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-md font-bold text-lg hover:bg-gray-100 flex items-center justify-center gap-2">
                <MdDeliveryDining className="text-2xl" /> Place Order
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-orange-600 flex items-center justify-center gap-2 transition-all">
                <MdOutlineOutdoorGrill className="text-2xl" /> Get Catering Quote
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}