'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-white text-black">
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
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />
            {/* Menu Panel - Changed to white background */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 flex flex-col"
            >
              {/* Close Button - Changed to black */}
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

      {/* About Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-light mb-16 tracking-wider text-center">ABOUT US</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative h-[600px] w-full">
              <Image
                src="/images/team.jpg"
                alt="In.Nov8 Hair Team"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Mission Statement Section */}
            <div className="space-y-8">
              <p className="text-xl font-light leading-relaxed">
                In.Nov8 Hair is about creating unique hairstyles that are suitable to our client.
              </p>
              
              <p className="text-xl font-light leading-relaxed">
                With in depth consultation, from length, to style, products, and wearability. 
                We take pride in our craft, always staying innovative and delivering quality 
                haircuts with precision while serving an experience with the utmost professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-16 tracking-wider text-center">MEET OUR TEAM</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* First Barber */}
            <div className="bg-white p-6 space-y-4">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="/images/download (1).jpeg"
                  alt="First Barber"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-medium tracking-wider">Alex Thompson</h3>
                <p className="text-gray-600 mb-2">Master Barber</p>
                <p className="text-sm font-light leading-relaxed">
                  With over 8 years of experience, Alex specializes in classic cuts and modern fades. 
                  Known for attention to detail and creating personalized styles.
                </p>
              </div>
            </div>

            {/* Second Barber */}
            <div className="bg-white p-6 space-y-4">
              <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                  src="/images/download.jpeg"
                  alt="Second Barber"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-medium tracking-wider">Jordan Rivera</h3>
                <p className="text-gray-600 mb-2">Style Specialist</p>
                <p className="text-sm font-light leading-relaxed">
                  Creative and innovative, Jordan brings 5 years of expertise in contemporary styles. 
                  Passionate about helping clients express their unique personality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 