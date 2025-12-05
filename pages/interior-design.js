// pages/interior-design.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  FaHome, 
  FaBuilding, 
  FaCouch, 
  FaLightbulb, 
  FaGraduationCap, 
  FaStar,
  FaSearch,
  FaPalette,
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { 
  GiOfficeChair, 
  GiKitchenTap, 
  GiBed, 
  GiDesk,
  GiWoodenChair, // Replacement for GiDiningTable
  GiBookshelf
} from 'react-icons/gi';
import { 
  MdDesignServices,
  MdOutlineSupportAgent
} from 'react-icons/md';

export default function InteriorDesign() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/decor.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Interior Design & Furniture Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              Complete interior transformation with custom furniture, professional design services, and expert consultation.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 flex items-center justify-center mx-auto gap-2">
              <MdDesignServices className="text-xl" />
              Start Your Project
            </button>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Interior Design Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              From concept to completion, we provide comprehensive interior solutions tailored to your style and needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Home Interior */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <FaHome className="text-3xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Home Interior</h3>
                <p className="text-gray-600 mb-4">
                  Complete home transformation with personalized design solutions.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiOfficeChair className="text-blue-500" />
                    Living Room Design
                  </li>
                  <li className="flex items-center gap-2">
                    <GiBed className="text-blue-500" />
                    Bedroom Makeovers
                  </li>
                  <li className="flex items-center gap-2">
                    <GiKitchenTap className="text-blue-500" />
                    Kitchen Remodeling
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-blue-500" />
                    Bathroom Renovation
                  </li>
                </ul>
              </div>

              {/* Commercial Interior */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-green-200 transition-colors">
                  <FaBuilding className="text-3xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Commercial Interior</h3>
                <p className="text-gray-600 mb-4">
                  Professional spaces designed for productivity and brand identity.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiOfficeChair className="text-green-500" />
                    Office Spaces
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-green-500" />
                    Retail Stores
                  </li>
                  <li className="flex items-center gap-2">
                    <GiKitchenTap className="text-green-500" />
                    Restaurants & Cafes
                  </li>
                  <li className="flex items-center gap-2">
                    <FaHome className="text-green-500" />
                    Hotel Interiors
                  </li>
                </ul>
              </div>

              {/* Custom Furniture */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-purple-200 transition-colors">
                  <FaCouch className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Custom Furniture</h3>
                <p className="text-gray-600 mb-4">
                  Handcrafted furniture pieces tailored to your space and style.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <GiDesk className="text-purple-500" />
                    TV Console & Entertainment
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCouch className="text-purple-500" />
                    Sofa, Couch & Chairs
                  </li>
                  <li className="flex items-center gap-2">
                    <GiBed className="text-purple-500" />
                    Bedframes & Wardrobes
                  </li>
                  <li className="flex items-center gap-2">
                    <GiKitchenTap className="text-purple-500" />
                    Kitchen Cabinetry
                  </li>
                  <li className="flex items-center gap-2">
                    <GiDesk className="text-purple-500" />
                    Study Desks
                  </li>
                  <li className="flex items-center gap-2">
                    <GiWoodenChair className="text-purple-500" />
                    Dining Sets & Side Boards
                  </li>
                </ul>
              </div>

              {/* Design Consultation */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-yellow-200 transition-colors">
                  <FaLightbulb className="text-3xl text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Design Consultation</h3>
                <p className="text-gray-600 mb-4">
                  Expert advice for your space planning and design decisions.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaHome className="text-yellow-500" />
                    Home Consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-yellow-500" />
                    Shortlet Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <FaBuilding className="text-yellow-500" />
                    Hotel Design Planning
                  </li>
                  <li className="flex items-center gap-2">
                    <GiWoodenChair className="text-yellow-500" />
                    Garden & Bar Layouts
                  </li>
                </ul>
              </div>

              {/* Interior Design Course */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-red-200 transition-colors">
                  <FaGraduationCap className="text-3xl text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Design Education</h3>
                <p className="text-gray-600 mb-4">
                  Learn professional interior design with our comprehensive courses.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <FaGraduationCap className="text-red-500" />
                    Beginner to Advanced Levels
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTools className="text-red-500" />
                    Practical Project Training
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-red-500" />
                    Industry Expert Instructors
                  </li>
                  <li className="flex items-center gap-2">
                    <MdDesignServices className="text-red-500" />
                    Certification Program
                  </li>
                </ul>
              </div>

              {/* Full Service Package */}
              <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-indigo-200 transition-colors">
                  <FaStar className="text-3xl text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Complete Package</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end service from design to installation and maintenance.
                </p>
                <ul className="text-sm text-gray-500 text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <MdDesignServices className="text-indigo-500" />
                    Design + Furniture + Installation
                  </li>
                  <li className="flex items-center gap-2">
                    <FaTools className="text-indigo-500" />
                    Project Management
                  </li>
                  <li className="flex items-center gap-2">
                    <FaStar className="text-indigo-500" />
                    Quality Assurance
                  </li>
                  <li className="flex items-center gap-2">
                    <MdOutlineSupportAgent className="text-indigo-500" />
                    After-Service Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Design Process</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Our interior design process consists of several phases: we start with understanding your creative vision, then develop concepts and plans. Our team manages all needs, ensuring a seamless and enjoyable experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <FaSearch className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Discover &amp; Listen</h3>
                <p className="text-gray-600">
                  We begin by understanding your needs, style, and the potential of your space.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <FaPalette className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Concept &amp; Design</h3>
                <p className="text-gray-600">
                  Our team translates your vision into a detailed design plan and 3D model for approval.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-blue-200 transition-colors">
                  <FaTools className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Execution &amp; Handover</h3>
                <p className="text-gray-600">
                  We manage the project from procurement to installation, delivering your dream space efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you need custom furniture, complete interior design, or professional consultation, we're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                <MdDesignServices className="text-xl" />
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <FaLightbulb className="text-xl" />
                Book Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}