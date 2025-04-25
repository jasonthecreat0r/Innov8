'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "Men's Haircut", price: "$35" },
    { name: "Kids Haircut (12 & under)", price: "$25" },
    { name: "Senior Cut (65+)", price: "$30" },
    { name: "Beard Trim", price: "$15" },
    { name: "Hot Towel Shave", price: "$35" },
    { name: "Hair & Beard Combo", price: "$45" },
    { name: "Line Up / Edge Up", price: "$20" },
    { name: "Facial Treatment", price: "$40" }
  ];

  return (
    <div className="bg-white">
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

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
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
                className="absolute top-6 right-6 text-black p-2 cursor-pointer hover:opacity-70"
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
                        className="text-black text-2xl font-light tracking-wider block hover:opacity-70 transition-opacity cursor-pointer"
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

      {/* Services Content */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-light mb-16 tracking-wider text-center text-black">SERVICES</h1>
        
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="flex justify-between items-center border-b border-gray-200 py-4">
              <span className="text-xl font-light text-black">{service.name}</span>
              <span className="text-xl font-light text-black">{service.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block px-16 py-5 text-2xl font-light tracking-[0.2em] text-black border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>
  );
} 