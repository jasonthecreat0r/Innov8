'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BookingDrawer from '../components/BookingDrawer';
import BookNow from '@/components/BookNow';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Define services data
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

  // Define hours data
  const hours = [
    { day: "Sunday", time: "CLOSED" },
    { day: "Monday", time: "CLOSED" },
    { day: "Tuesday", time: "10AM - 5PM" },
    { day: "Wednesday", time: "10AM - 8PM" },
    { day: "Thursday", time: "9AM - 8PM" },
    { day: "Friday", time: "9AM - 8PM" },
    { day: "Saturday", time: "8AM - 4PM" }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (containerRef.current && imageRef.current) {
      gsap.to(imageRef.current, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section with Icons and Logo */}
      <section className="relative min-h-[120vh] flex flex-col items-center bg-white pt-6">
        {/* Navigation Icons */}
        <div className="flex justify-center items-center h-20 w-full">
          <div className="flex items-center gap-32">
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

        {/* Logo and Book Button Container */}
        <div className="flex-1 flex flex-col items-center justify-center w-full px-8" style={{ marginTop: '-2rem' }}>
          {/* Logo Container */}
          <div className="relative w-full max-w-[900px] aspect-[2/1] mb-2">
            <Image
              src="/images/Untitled design.png"
              alt="Innov8 Hair Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Book Button */}
          <BookNow className="mb-24" />
        </div>
      </section>

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
              className="fixed inset-0 bg-black z-50"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 flex flex-col"
            >
              {/* Close Button */}
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

              {/* Menu Items */}
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

      {/* Parallax Image Section */}
      <section 
        ref={containerRef}
        className="relative h-screen overflow-hidden"
      >
        <div 
          ref={imageRef}
          className="absolute w-full h-[160%] top-[-30%]"
        >
          <Image
            src="/images/green.jpeg"
            alt="Barbershop Interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Services and Location Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Services Column */}
            <div>
              <h2 className="text-4xl font-light mb-12 tracking-wider text-black">SERVICES</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className="text-xl font-light text-black">{service.name}</span>
                    <span className="text-xl font-light text-black">{service.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsBookingOpen(true);
                  }}
                  className="inline-block px-16 py-5 text-2xl font-light tracking-[0.2em] text-black border border-black hover:bg-black hover:text-white transition-all duration-300 mb-24"
                >
                  BOOK NOW
                </Link>
              </div>
            </div>

            {/* Location Column */}
            <div>
              <h2 className="text-4xl font-light mb-12 tracking-wider text-black">LOCATION</h2>
              <div className="space-y-6">
                <p className="text-xl font-light text-black">
                  <a href="tel:+12246538226" className="hover:underline">(224) 653-8226</a>
                </p>
                <p className="text-xl font-light leading-relaxed text-black">
                  285 S Roselle Rd<br />
                  Schaumburg, IL 60193<br />
                  United States
                </p>
                <div className="h-[300px] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5777638707247!2d-88.08382772342987!3d41.99721595921366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf86c1b9b097%3A0x7e848bc78e9a5f3c!2s285%20S%20Roselle%20Rd%2C%20Schaumburg%2C%20IL%2060193!5e0!3m2!1sen!2sus!4v1709871234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
