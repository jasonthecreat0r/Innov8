'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import BookingDrawer from '@/components/BookingDrawer';

interface Service {
  id: number;
  name: string;
  duration: string;
  price: number;
}

interface Barber {
  id: number;
  name: string;
  image: string;
  specialties: string[];
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const services: Service[] = [
  { id: 1, name: 'Classic Haircut', duration: '45 min', price: 35 },
  { id: 2, name: 'Fade & Style', duration: '1 hour', price: 45 },
  { id: 3, name: 'Beard Trim', duration: '30 min', price: 25 },
  { id: 4, name: 'Hot Towel Shave', duration: '45 min', price: 40 },
  { id: 5, name: 'Hair Color', duration: '1.5 hours', price: 75 },
];

const barbers: Barber[] = [
  {
    id: 1,
    name: 'John Smith',
    image: '/barbers/john.jpg',
    specialties: ['Classic Cuts', 'Beard Styling'],
  },
  {
    id: 2,
    name: 'Mike Johnson',
    image: '/barbers/mike.jpg',
    specialties: ['Modern Fades', 'Hair Design'],
  },
  {
    id: 3,
    name: 'Sarah Williams',
    image: '/barbers/sarah.jpg',
    specialties: ['Textured Cuts', 'Hair Care'],
  },
];

const timeSlots: TimeSlot[] = [
  { time: '9:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '1:00 PM', available: true },
  { time: '2:00 PM', available: true },
  { time: '3:00 PM', available: false },
  { time: '4:00 PM', available: true },
  { time: '5:00 PM', available: true },
];

export default function BookPage() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(true); // Auto-open booking drawer

  // Initialize selections from URL parameters
  useState(() => {
    const serviceParam = searchParams.get('service');
    const barberParam = searchParams.get('barber');

    if (serviceParam) {
      const service = services.find(
        (s) => s.name.toLowerCase() === serviceParam.toLowerCase()
      );
      if (service) setSelectedService(service);
    }

    if (barberParam) {
      const barber = barbers.find((b) => b.id === Number(barberParam));
      if (barber) setSelectedBarber(barber);
    }
  });

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the booking submission
    console.log('Booking submitted:', {
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

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

      {/* Booking Content */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-light mb-16 tracking-wider text-black">BOOK AN APPOINTMENT</h1>
        <button
          onClick={() => setIsBookingOpen(true)}
          className="inline-block px-16 py-5 text-2xl font-light tracking-[0.2em] text-black border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
        >
          BOOK NOW
        </button>
      </div>

      {/* Booking Drawer */}
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
} 