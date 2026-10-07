import React from 'react';
import { SolaraLogoMark, SunburstIcon } from './BotanicalMotif';
import { PROPERTY_INFO } from '../data/propertyData';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact & Book', href: '#contact' },
  ];

  return (
    <footer className="bg-[#2E3B2B] text-[#FDFBF7] relative overflow-hidden border-t border-white/10 pt-20 pb-12">
      {/* Subtle background sunburst pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none">
        <SunburstIcon className="w-full h-full text-[#D4A359]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Brand & Catchphrase */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-16 border-b border-white/10 gap-8 text-center md:text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <SolaraLogoMark className="w-7 h-7 text-[#D4A359]" />
              <span className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-white">
                Solara de Alfonso
              </span>
            </div>
            <p className="text-sm text-white/70 font-light max-w-md">
              Modern Tropical Retreat in Alfonso, Cavite. Where comfort meets nature.
            </p>
          </div>

          <div className="text-center md:text-right">
            <span className="font-script text-3xl sm:text-4xl text-[#D4A359] block mb-1">
              Stay Solara.
            </span>
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-mono">
              Slow down. Make memories.
            </span>
          </div>
        </div>

        {/* Middle Segment: Navigation Mirror & Location Highlights */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Col 1: Direct Address */}
          <div>
            <h5 className="font-serif text-lg text-white mb-3">Sanctuary Address</h5>
            <p className="text-white/70 leading-relaxed font-light">
              Luksuhin–Kaytitinga Road<br />
              Alfonso, Cavite 4126<br />
              Philippines (Near Tagaytay Ridge)
            </p>
            <div className="mt-3 text-xs text-[#D4A359] font-mono">
              Coordinates: 14.1350° N, 120.8520° E
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 className="font-serif text-lg text-white mb-3">Explore Solara</h5>
            <div className="grid grid-cols-2 gap-2 text-white/70 font-light">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#D4A359] transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div>
            <h5 className="font-serif text-lg text-white mb-3">Host Concierge</h5>
            <p className="text-white/70 font-light mb-2">
              For direct bookings, dates, and event inquiries:
            </p>
            <p className="text-[#D4A359] font-medium font-mono text-xs mb-1">
              {PROPERTY_INFO.contacts.phone}
            </p>
            <p className="text-white/70 text-xs">
              {PROPERTY_INFO.contacts.email}
            </p>
          </div>
        </div>

        {/* Bottom Segment: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Solara de Alfonso. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Alfonso, Cavite · Private Vacation Rental</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white/80 hover:text-[#D4A359] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
