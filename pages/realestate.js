// pages/real-estate.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Your All-in-One Solution for Home and Lifestyle</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
              We offer a comprehensive suite of services, from interior design and real estate to food and laundry, tailored to enhance your living experience.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100">
              Explore Services
            </button>
          </div>
        </section>

        {/* Featured Listings Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Listings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Listing 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold text-center px-4">Contemporary Family Home</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Contemporary Family Home</h3>
                  <p className="text-gray-600">
                    Spacious 4-bedroom home with a large backyard, modern amenities, and open-concept living areas.
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Listing 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold text-center px-4">Upscale City Apartment</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Upscale City Apartment</h3>
                  <p className="text-gray-600">
                    Stylish 2-bedroom apartment in the heart of downtown with stunning views and premium finishes.
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </div>

              {/* Listing 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-56 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold text-center px-4">Prime Commercial Space</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Prime Commercial Space</h3>
                  <p className="text-gray-600">
                    High-traffic commercial property with ample parking, modern facilities, and excellent visibility.
                  </p>
                  <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Buying */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Buying</h3>
                <p className="text-gray-600">
                  Find your dream home with our expert guidance through the entire buying process.
                </p>
              </div>

              {/* Selling */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Selling</h3>
                <p className="text-gray-600">
                  Maximize your property's value and sell quickly with our strategic marketing approach.
                </p>
              </div>

              {/* Renting */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Renting</h3>
                <p className="text-gray-600">
                  Find the perfect rental property or list your unit with our professional management services.
                </p>
              </div>

              {/* Property Management */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Property Management</h3>
                <p className="text-gray-600">
                  Comprehensive management services to maintain and maximize your investment property's value.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Whether you're looking to buy your dream home, sell your current property, find a rental, or need assistance managing your real estate assets, our team of experienced professionals is here to guide you every step of the way.
            </p>
            <p className="text-xl mb-10 max-w-3xl mx-auto">
              We offer personalized service tailored to your specific needs and goals.
            </p>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}