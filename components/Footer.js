// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Integrated Services</h3>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Integrated Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}