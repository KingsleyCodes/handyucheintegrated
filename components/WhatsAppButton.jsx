import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '2347036131127';
  const message = encodeURIComponent('Hello! I am contacting you from your Website. I would like to make an enquiry.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  // Control extra attention pulses based on scroll/time triggers
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    // Trigger an extra attention animation after 60 seconds (1 minute) of activity
    const scrollTimer = setTimeout(() => {
      setPulseKey((prev) => prev + 1);
    }, 60000);

    // Trigger a gentle pulse if the user scrolls down a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setPulseKey((prev) => (prev === 0 ? 1 : prev));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        key={pulseKey}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        // Subtle entrance/nudge animation sequence on load or scroll/time
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
        whileHover={{ scale: 1.15, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg focus:outline-none"
      >
        <FaWhatsapp className="w-8 h-8 text-white" />
      </motion.a>
    </motion.div>
  );
}