'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex flex-col items-center group">
      <div className="relative">
        <span className="text-4xl font-black tracking-tight text-white group-hover:text-primary transition-colors animate-glow">
          In
          <span className="relative inline-block">
            <span className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <svg
                className="w-4 h-4 text-secondary group-hover:text-primary transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
              </svg>
            </span>
            <span className="invisible">.</span>
          </span>
          nov
          <span className="relative inline-block">
            <span className="absolute -top-1 right-0 transform translate-x-1/2">
              <span className="text-3xl text-accent">8</span>
            </span>
            <span className="invisible">8</span>
          </span>
        </span>
      </div>
      <div className="mt-1">
        <span className="text-sm tracking-[0.3em] font-grotesk text-secondary uppercase group-hover:text-primary transition-colors">
          Hair
        </span>
      </div>
    </Link>
  );
} 