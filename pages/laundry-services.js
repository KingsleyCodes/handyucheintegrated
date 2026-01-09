// pages/laundry-services.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioGrid from '../components/PortfolioGrid'; // Added the dynamic grid import
import { 
  FaTshirt,
  FaTruck,
  FaHome,
  FaStar,
  FaShieldAlt,
  FaClock,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRecycle
} from 'react-icons/fa';
import { 
  MdLocalLaundryService,
  MdDryCleaning,
  MdOutlineBed,
  MdOutlineCleaningServices
} from 'react-icons/md';
import { 
  GiWashingMachine,
  GiSoap,
  GiWaterDrop,
  GiClothes
} from 'react-icons/gi';

export default function LaundryServices() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/laundry-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Premium Cleaning & Laundry Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Professional cleaning solutions with convenient drop-off and home service options for your complete comfort.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
              <MdLocalLaundryService className="text-xl" />
              Schedule Service
            </button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Cleaning & Laundry Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Comprehensive cleaning solutions designed to keep your clothes and home fresh, clean, and well-maintained.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Drop-off Service */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <GiWashingMachine className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Drop-off Service</h3>
                <p className="text-gray-600 mb-4">
                  Convenient self-service laundry with professional-grade equipment and supplies.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiWashingMachine className="text-blue-500" />
                    Self-Service Laundry
                  </li>
                  <li className="flex items-center gap-2">
                    <GiSoap className="text-blue-500" />
                    Premium Detergents
                  </li>
                  <li className="flex items-center gap-2">
                    <FaClock className="text-blue-500" />
                    Flexible Hours
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-blue-500" />
                    Secure Facility
                  </li>
                </ul>
              </div>

              {/* Home Service */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                  <FaHome className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Home Service</h3>
                <p className="text-gray-600 mb-4">
                  Professional cleaning teams come to your location for ultimate convenience.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaTruck className="text-green-500" />
                    Pickup & Delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <GiClothes className="text-green-500" />
                    Full Service Laundry
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineCleaningServices className="text-green-500" />
                    Home Cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-green-500" />
                    Premium Treatment
                  </li>
                </ul>
              </div>

              {/* Wash & Fold */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <FaTshirt className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Wash & Fold</h3>
                <p className="text-gray-600 mb-4">
                  Freshly laundered and neatly folded clothes, ready to wear or store.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiWaterDrop className="text-purple-500" />
                    Professional Washing
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTshirt className="text-purple-500" />
                    Precision Folding
                  </li>
                  <li className="flex items-center gap-2">
                    <GiSoap className="text-purple-500" />
                    Eco-Friendly Detergents
                  </li>
                  <li className="flex items-center gap-2">
                    <FaRecycle className="text-purple-500" />
                    Same-Day Service Available
                  </li>
                </ul>
              </div>

              {/* Dry Cleaning */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors">
                  <MdDryCleaning className="text-3xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Dry Cleaning</h3>
                <p className="text-gray-600 mb-4">
                  Expert care for delicate fabrics, formal wear, and special garments.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdDryCleaning className="text-yellow-500" />
                    Delicate Fabrics
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTshirt className="text-yellow-500" />
                    Formal Wear
                  </li>
                  <li className="flex items-center gap-2">
                    <GiClothes className="text-yellow-500" />
                    Specialty Items
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-yellow-500" />
                    Stain Protection
                  </li>
                </ul>
              </div>

              {/* Bedding & Linens */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors">
                  <MdOutlineBed className="text-3xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Bedding & Linens</h3>
                <p className="text-gray-600 mb-4">
                  Deep cleaning for bedding, towels, and household linens.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdOutlineBed className="text-red-500" />
                    Bed Sheets & Comforters
                  </li>
                  <li className="flex items-center gap-2">
                    <GiClothes className="text-red-500" />
                    Towels & Bath Mats
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTshirt className="text-red-500" />
                    Table Linens
                  </li>
                  <li className="flex items-center gap-2">
                    <GiWaterDrop className="text-red-500" />
                    Hypoallergenic Cleaning
                  </li>
                </ul>
              </div>

              {/* Specialty Services */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <FaStar className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Specialty Services</h3>
                <p className="text-gray-600 mb-4">
                  Specialized cleaning for unique items and premium garments.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiClothes className="text-indigo-500" />
                    Leather & Suede
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTshirt className="text-indigo-500" />
                    Wedding Gowns
                  </li>
                  <li className="flex items-center gap-2">
                    <MdDryCleaning className="text-indigo-500" />
                    Curtains & Drapes
                  </li>
                  <li className="flex items-center gap-2">
                    <FaShieldAlt className="text-indigo-500" />
                    Preservation Services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW DYNAMIC PORTFOLIO SECTION --- */}
        <section className="py-16 md:py-24 bg-white border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Our Work & Packages</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Browse through our premium cleaning results and special laundry bundles.
            </p>
            
            {/* The component that connects to your Admin CMS under 'laundry-services' */}
            <PortfolioGrid category="laundry-services" />
            
          </div>
        </section>
        {/* --- END DYNAMIC SECTION --- */}

        {/* Service Options Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Our Service Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Drop-off Process */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <GiWashingMachine className="text-4xl text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Drop-off Service</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <p className="text-gray-600">Bring your laundry to our facility during operating hours</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <p className="text-gray-600">Choose your preferred service and detergent options</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <p className="text-gray-600">Relax while we handle the cleaning with care</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 font-semibold text-sm">4</span>
                    </div>
                    <p className="text-gray-600">Pick up your fresh, clean laundry when ready</p>
                  </div>
                </div>
              </div>

              {/* Home Service Process */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <FaHome className="text-4xl text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Home Service</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-semibold text-sm">1</span>
                    </div>
                    <p className="text-gray-600">Schedule pickup online or by phone at your convenience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-semibold text-sm">2</span>
                    </div>
                    <p className="text-gray-600">Our team collects your laundry from your doorstep</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <p className="text-gray-600">Professional cleaning with premium care</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-semibold text-sm">4</span>
                    </div>
                    <p className="text-gray-600">Fresh laundry delivered back to your home</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Premium Cleaning</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Choose between convenient drop-off service or premium home pickup and delivery. Fresh, clean laundry delivered with care and professionalism.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <GiWashingMachine className="text-xl" />
                Drop-off Service
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <FaHome className="text-xl" />
                Schedule Home Service
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}