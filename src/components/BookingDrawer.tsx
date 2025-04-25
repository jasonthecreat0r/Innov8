'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingDrawer: React.FC<BookingDrawerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedBarber, setSelectedBarber] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  interface Service {
    name: string;
    price: string;
    duration: string;
  }

  interface Barber {
    name: string;
    image: string;
    services: Service[];
  }

  const barbers: Barber[] = [
    {
      name: "Alex Thompson",
      image: "/images/download (1).jpeg",
      services: [
        { name: "Haircut", price: "$35", duration: "45 min" },
        { name: "Haircut & Beard", price: "$45", duration: "1 hour" }
      ]
    },
    {
      name: "Jordan Rivera",
      image: "/images/download.jpeg",
      services: [
        { name: "Haircut", price: "$35", duration: "45 min" },
        { name: "Haircut & Beard", price: "$45", duration: "1 hour" }
      ]
    }
  ];

  const location = {
    name: "In.Nov8 Hair",
    address: "285 S Roselle Rd",
    city: "Schaumburg, IL 60193"
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - added cursor-pointer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40 cursor-pointer"
          />

          {/* Drawer - Updated text colors to black */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full md:w-[450px] bg-white z-50 overflow-y-auto text-black"
          >
            {/* Header - added cursor-pointer to close button */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
              <h2 className="text-xl font-light tracking-wider text-black">BOOK APPOINTMENT</h2>
              <button onClick={onClose} className="p-2 text-black cursor-pointer hover:opacity-70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light mb-4 text-black">Select Location</h3>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full p-4 text-left border border-gray-200 hover:border-black transition-colors text-black cursor-pointer hover:bg-gray-50"
                  >
                    <p className="font-medium text-black">{location.name}</p>
                    <p className="text-sm text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-600">{location.city}</p>
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light mb-4 text-black">Select Barber</h3>
                  <div className="grid gap-4">
                    {barbers.map((barber) => (
                      <button
                        key={barber.name}
                        onClick={() => {
                          setSelectedBarber(barber.name);
                          setStep(3);
                        }}
                        className="w-full p-4 text-left border border-gray-200 hover:border-black transition-colors flex items-center gap-4 cursor-pointer hover:bg-gray-50"
                      >
                        <div className="relative w-16 h-16 overflow-hidden">
                          <Image
                            src={barber.image}
                            alt={barber.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <span className="font-light text-black">{barber.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && selectedBarber && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light mb-4 text-black">Select Service</h3>
                  <div className="grid gap-4">
                    {barbers.find(b => b.name === selectedBarber)?.services.map((service) => (
                      <button
                        key={service.name}
                        onClick={() => {
                          setSelectedService(service);
                          setStep(4);
                        }}
                        className="w-full p-4 text-left border border-gray-200 hover:border-black transition-colors cursor-pointer hover:bg-gray-50"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-light text-black">{service.name}</span>
                          <span className="font-light text-black">{service.price}</span>
                        </div>
                        <p className="text-sm text-gray-600">{service.duration}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && selectedService && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light mb-4 text-black">Review & Select Time</h3>
                  <div className="border border-gray-200 p-4 mb-6">
                    <p className="font-light mb-2 text-black">{selectedBarber}</p>
                    <p className="text-sm text-gray-600">{selectedService.name}</p>
                    <p className="text-sm text-gray-600">{selectedService.price} · {selectedService.duration}</p>
                  </div>
                  <button
                    onClick={() => setStep(5)}
                    className="w-full bg-black text-white py-3 font-light tracking-wider hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    CHOOSE TIME
                  </button>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-light mb-4 text-black">Select Date & Time</h3>
                  <div className="text-center p-8">
                    <p className="text-gray-600 mb-4">This is a prototype version.</p>
                    <p className="text-gray-600">Actual booking functionality will be integrated with Squire later.</p>
                  </div>
                </div>
              )}
            </div>

            {/* Back button - added cursor-pointer */}
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="absolute top-4 left-4 p-2 text-black cursor-pointer hover:opacity-70"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingDrawer;
