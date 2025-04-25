'use client';

import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cormorantGaramond.className}>
      <head>
        <script 
          async 
          src="https://www.squire.co/widget/bookingWidget.js" 
          data-business-id="innov8-barbers"
        ></script>
      </head>
      <body className={`${cormorantGaramond.className} m-0 p-0`}>
        <main className="m-0 p-0">
          {children}
        </main>
        <footer className="bg-white text-black py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {/* Contact Column */}
              <div>
                <h2 className="text-3xl font-light mb-6 tracking-wider">Contact Us</h2>
                <p className="text-xl font-light">
                  <a 
                    href="mailto:in.nov8hair@gmail.com"
                    className="hover:underline"
                    onClick={(e) => {
                      // This helps ensure the email client opens properly
                      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
                      if (!isMobile) {
                        window.location.href = "mailto:in.nov8hair@gmail.com";
                        e.preventDefault();
                      }
                    }}
                  >
                    in.nov8hair@gmail.com
                  </a>
                </p>
              </div>

              {/* Hours Column */}
              <div>
                <h2 className="text-3xl font-light mb-6 tracking-wider">Opening Hours</h2>
                <div className="space-y-2">
                  <p className="text-xl font-light">SUN-MON: CLOSED</p>
                  <p className="text-xl font-light">TUES: 10AM - 5PM</p>
                  <p className="text-xl font-light">WEDS: 10AM - 8PM</p>
                  <p className="text-xl font-light">THURS - FRI: 9AM - 8PM</p>
                  <p className="text-xl font-light">SAT: 8AM - 4PM</p>
                </div>
              </div>

              {/* Location Column */}
              <div>
                <h2 className="text-3xl font-light mb-6 tracking-wider">Visit Us</h2>
                <p className="text-xl font-light leading-relaxed">
                  285 S Roselle Rd<br />
                  Schaumburg, IL 60193<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </footer>
        <div id="squire-booking-widget"></div>
      </body>
    </html>
  );
}
