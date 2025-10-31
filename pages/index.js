// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link'; // Import the Link component

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section 
          className="relative py-16 md:py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
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

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Explore our range of integrated services designed to simplify and elevate your lifestyle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Interior Design */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 极l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-极v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 极 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Interior Design</h3>
                <p className="text-gray-600 mb-4">
                  Transform your living space with our expert interior design services, creating a home that reflects your style and meets your needs.
                </p>
                <Link 
  href="/interior-design" 
  className="text-blue-600 font-semibold flex items-center"
>
  Learn More
  <svg 
    className="w-4 h-4 ml-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5l7 7-7 7" 
    />
  </svg>
</Link>

              </div>

              {/* Real Estate */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-极 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semib极 mb-3">Real Estate</h3>
                <p className="text-gray-600 mb-4">
                  Find your dream home or investment property with our experienced real estate team, guiding you through every step of the process.
                </p>
                <a href="/real-estate" className="text-blue-600 font-semibold flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Food Services */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 极 2.704 2.704 0 01-3 0A1.5 1.5 0 013 15.546V5a2 2 0 012-2h14a2 2 0 012 2v10.546z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Food Services</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy delicious, chef-prepared meals delivered to your door, catering to your dietary preferences and saving you time.
                </p>
                <Link 
  href="/food-services" 
  className="text-blue-600 font-semibold flex items-center"
>
  Learn More
  <svg 
    className="w-4 h-4 ml-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5l7 7-7 7" 
    />
  </svg>
</Link>

              </div>

              {/* Laundry Services */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4极5h.582m15.356 2A8.001 8.001 0 004.582 9m极 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Laundry Services</h3>
                <p className="text-gray-600 mb-4">
                  Experience the convenience of our professional laundry services, ensuring your clothes are cleaned, pressed, and delivered with care.
                </p>
               <Link 
  href="/laundry-services" 
  className="text-blue-600 font-semibold flex items-center"
>
  Learn More
  <svg 
    className="w-4 h-4 ml-1" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M9 5l7 7-7 7" 
    />
  </svg>
</Link>

              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}