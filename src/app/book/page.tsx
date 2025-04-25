'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function BookPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const services = [
    { name: "Men's Haircut", price: "$35", duration: "45 min" },
    { name: "Kids Haircut (12 & under)", price: "$25", duration: "30 min" },
    { name: "Senior Cut (65+)", price: "$30", duration: "45 min" },
    { name: "Beard Trim", price: "$15", duration: "15 min" },
    { name: "Hot Towel Shave", price: "$35", duration: "30 min" },
    { name: "Hair & Beard Combo", price: "$45", duration: "1 hour" },
    { name: "Line Up / Edge Up", price: "$20", duration: "15 min" },
    { name: "Facial Treatment", price: "$40", duration: "30 min" }
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Fixed Top Icons and Logo */}
      <div className="flex justify-center items-center h-32 w-full bg-white pt-8 mb-8">
        <div className="flex items-center gap-40">
          {/* Hamburger Menu */}
          <motion.button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2 cursor-pointer hover:opacity-70 transition-opacity"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.button>

          {/* Logo Button */}
          <Link 
            href="/"
            className="cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/Untitled design.png"
              alt="Innov8 Hair Logo"
              width={140}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Contact Icon */}
          <motion.button 
            className="p-2 cursor-pointer hover:opacity-70 transition-opacity"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => window.location.href = '/contact'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="pt-40 px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>
        
        {/* Services List */}
        <div className="grid gap-6 mb-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <p className="text-gray-600">{service.duration}</p>
                </div>
                <div className="text-xl font-bold">{service.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <button
          className="w-full bg-black text-white py-4 rounded-md hover:bg-gray-800 transition-colors text-lg font-semibold mb-12"
        >
          Book Now
        </button>
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 flex flex-col"
            >
              <motion.button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 text-black p-2"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>

              <nav className="pt-20 px-8">
                <ul className="space-y-6">
                  {[
                    { href: '/', label: 'HOME' },
                    { href: '/about', label: 'ABOUT' },
                    { href: '/services', label: 'SERVICES' },
                    { href: '/book', label: 'BOOK NOW' },
                    { href: '/contact', label: 'CONTACT' }
                  ].map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 } 
                      }}
                    >
                      <Link 
                        href={item.href}
                        className="text-black text-2xl font-light tracking-wider block hover:opacity-70 transition-opacity"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
} 