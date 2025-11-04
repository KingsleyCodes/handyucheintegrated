// pages/interior-design.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

        {/* Design Process Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Design Process</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Our interior design process consists of several phases: we start with understanding your creative vision, then develop concepts and plans. Our team manages all needs, ensuring a seamless and enjoyable experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Discover &amp; Listen</h3>
                <p className="text-gray-600">
                  We begin by understanding your needs, style, and the potential of your space.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Concept &amp; Design</h3>
                <p className="text-gray-600">
                  Our team translates your vision into a detailed design plan and 3D model for approval.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Execution &amp; Handover</h3>
                <p className="text-gray-600">
                  We manage the project from procurement to installation, delivering your dream space efficiently.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Portfolio</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              Explore a selection of our projects, showcasing our commitment to quality and creativity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Project 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Modern Living Room</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Modern Living Room</h3>
                  <p className="text-gray-600">
                    A tranquil living space with a minimalist design, featuring natural light and neutral tones.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Contemporary Kitchen</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Contemporary Kitchen</h3>
                  <p className="text-gray-600">
                    A sleek kitchen with clean lines and premium materials, featuring a functional layout.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Elegant Bedroom</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Elegant Bedroom</h3>
                  <p className="text-gray-600">
                    A luxurious bedroom with sophisticated finishes, creating a calm and restful atmosphere.
                  </p>
                </div>
              </div>

              {/* Project 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white text-xl font-semibold">Functional Office Space</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Functional Office Space</h3>
                  <p className="text-gray-600">
                    A productive office space with ergonomic furniture and a focus on concentration and creativity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
              We pride ourselves on our client&apos;s satisfaction. Here&apos;s what they have to say about their experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    PC
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Project Client</h3>
                    <p className="text-gray-600">Home Owner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;The team at Integrated Services exceeded our expectations, delivering exceptional results. Their attention to detail and commitment to quality transformed our space into something beyond our imagination.&quot;
                </p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    RS
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">Renovation Specialist</h3>
                    <p className="text-gray-600">Business Director</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  &quot;Their professionalism and creative solutions impressed us throughout the project. They delivered a highly functional, beautifully designed space that perfectly meets our needs and reflects our brand identity.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ready to Start Your Project?</h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-16">
              Contact us today for a consultation. Our team will understand your ideas and bring your vision to life.
            </p>

            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-gray-800">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
