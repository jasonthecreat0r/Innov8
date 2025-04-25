'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // You'll need to set up an API route to handle this
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'in.nov8hair@gmail.com',
          ...formData
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white">
      {/* Fixed Top Icons and Logo - Added more padding and margin */}
      <div className="flex justify-center items-center h-32 w-full bg-white pt-8 mb-8">
        <div className="flex items-center gap-40">
          {/* Hamburger Menu */}
          <motion.button 
            onClick={() => setIsMenuOpen(true)}
            className="p-2"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </motion.button>

          {/* Logo Button - Increased size slightly */}
          <Link href="/">
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
            className="p-2"
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

      {/* Contact Content - Updated text colors to black */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-light mb-4 tracking-wider text-black">CONTACT US</h1>
            <p className="text-xl max-w-2xl mx-auto font-light text-black">
              Get in touch with us for appointments, questions, or feedback
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-light mb-4 tracking-wider text-black">VISIT OUR SHOP</h2>
                <div className="space-y-4">
                  <p className="flex items-center text-black">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    285 S Roselle Rd, Schaumburg, IL 60193
                  </p>
                  <p className="flex items-center text-black">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    (224) 653-8226
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-2xl font-light mb-4 tracking-wider text-black">HOURS</h2>
                <div className="space-y-2 font-light">
                  <p className="flex justify-between text-black">
                    <span>Tuesday</span>
                    <span>10AM - 5PM</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Wednesday</span>
                    <span>10AM - 8PM</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Thursday</span>
                    <span>9AM - 8PM</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Friday</span>
                    <span>9AM - 8PM</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Saturday</span>
                    <span>8AM - 4PM</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Sunday</span>
                    <span>CLOSED</span>
                  </p>
                  <p className="flex justify-between text-black">
                    <span>Monday</span>
                    <span>CLOSED</span>
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.5777638707247!2d-88.08382772342987!3d41.99721595921366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880faf86c1b9b097%3A0x7e848bc78e9a5f3c!2s285%20S%20Roselle%20Rd%2C%20Schaumburg%2C%20IL%2060193!5e0!3m2!1sen!2sus!4v1709871234567!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form - Updated text colors */}
            <div className="bg-white p-8">
              <h2 className="text-2xl font-light mb-6 tracking-wider text-black">MESSAGE US</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-black focus:border-black text-black"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-black focus:border-black text-black"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-black focus:border-black text-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-black focus:border-black text-black"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-gray-800 transition-colors"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 