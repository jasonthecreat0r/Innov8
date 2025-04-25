'use client';

import { useState } from 'react';
import BookingDrawer from './BookingDrawer';

interface BookNowProps {
  className?: string;
}

export default function BookNow({ className = '' }: BookNowProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsBookingOpen(true)}
        className={`inline-block px-16 py-5 text-2xl font-light tracking-[0.2em] text-black border border-black hover:bg-black hover:text-white transition-all duration-300 cursor-pointer ${className}`}
      >
        BOOK NOW
      </button>
      <BookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
} 