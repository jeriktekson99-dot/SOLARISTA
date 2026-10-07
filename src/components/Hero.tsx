import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { ArrowDown, MapPin, Users, Waves, Trees } from 'lucide-react';

interface HeroProps {
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onReserveClick }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#2E3B2B]">
      {/* Background Photography with Twilight Glow */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_solara_dusk_1791385759031.jpg"
          alt="Solara de Alfonso villa and private pool at dusk"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Measured High-Contrast Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2E3B2B] via-black/45 to-black/60" />
        <div className="absolute inset-0 bg-[#2E3B2B]/25 mix-blend-multiply" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white pt-24 pb-16">
        {/* Tagline / Catchphrase in Script Accent */}
        <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
          <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#D4A359] drop-shadow-md tracking-wide">
            Stay Solara.
          </span>
          <span className="hidden sm:inline-block w-8 h-[1px] bg-[#D4A359]/70" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/80 font-medium">
            Alfonso, Cavite
          </span>
        </div>

        {/* Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6 text-balance max-w-4xl mx-auto drop-shadow-lg">
          Where Comfort Meets Nature.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10 leading-relaxed text-balance drop-shadow-sm">
          A modern tropical retreat in Alfonso, Cavite designed for slowing down and creating unforgettable memories.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4A359] text-[#2E3B2B] font-semibold text-sm tracking-wider uppercase shadow-lg hover:bg-white hover:text-[#2E3B2B] transition-all duration-300 transform active:scale-95 cursor-pointer"
          >
            Reserve Now
          </button>
          <a
            href="#highlights"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#highlights')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/25 font-medium text-sm tracking-wider transition-all duration-300 cursor-pointer text-center"
          >
            Explore the Villa
          </a>
        </div>

        {/* Key Feature Badges (Icon Bar Overlay) */}
        <div className="pt-6 border-t border-white/15 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/10 text-white/90">
              <Trees className="w-4 h-4 text-[#D4A359] shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-tight">Private Garden 🍃</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/10 text-white/90">
              <Waves className="w-4 h-4 text-[#D4A359] shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-tight">Private Pool 🏊‍♂️</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/10 text-white/90">
              <Users className="w-4 h-4 text-[#D4A359] shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-tight">Family & Friends 👥</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl bg-black/25 backdrop-blur-md border border-white/10 text-white/90">
              <MapPin className="w-4 h-4 text-[#D4A359] shrink-0" />
              <span className="text-xs sm:text-sm font-medium tracking-tight">Alfonso, Cavite 📍</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center opacity-75 hover:opacity-100 transition-opacity">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white text-xs tracking-widest uppercase flex flex-col items-center gap-1.5 cursor-pointer"
        >
          <span>Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D4A359]" />
        </a>
      </div>
    </section>
  );
};
