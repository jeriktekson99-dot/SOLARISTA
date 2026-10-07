import React from 'react';
import { SunburstIcon, TropicalLeafIcon } from './BotanicalMotif';
import { Sparkles, Heart, SunMedium, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative Botanical Leaf Accents */}
      <div className="absolute top-12 left-[-20px] opacity-10 pointer-events-none rotate-12">
        <TropicalLeafIcon className="w-64 h-64 text-[#2E3B2B]" />
      </div>
      <div className="absolute bottom-10 right-[-30px] opacity-10 pointer-events-none -rotate-45">
        <TropicalLeafIcon className="w-80 h-80 text-[#D4A359]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Architectural Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border-4 border-white">
                <img
                  src="/src/assets/images/villa_architecture_day_1791385776469.jpg"
                  alt="Modern tropical architecture of Solara de Alfonso"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-5 text-white">
                  <span className="font-serif italic text-lg text-[#FDFBF7]">Alfonso, Cavite Highlands</span>
                </div>
              </div>

              {/* Overlapping Floating Quote Badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#2E3B2B] text-[#FDFBF7] p-5 sm:p-6 rounded-2xl shadow-xl max-w-xs border border-[#D4A359]/30">
                <div className="flex items-center gap-2 mb-2">
                  <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
                  <span className="text-xs uppercase tracking-widest text-[#D4A359] font-semibold">Slow Living</span>
                </div>
                <p className="font-serif italic text-sm text-[#FDFBF7]/90 leading-snug">
                  "Stay Solara. Slow down. Make memories."
                </p>
              </div>

              {/* Decorative Corner Motif */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#D4A359]/15 flex items-center justify-center -z-10">
                <SunburstIcon className="w-8 h-8 text-[#D4A359]" />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6">
            {/* Section Tagline */}
            <div className="flex items-center gap-2.5 mb-3">
              <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2E3B2B]/75">
                Our Philosophy
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2E3B2B] tracking-tight leading-tight mb-6">
              Welcome to Solara de Alfonso
            </h2>

            {/* Headline / Quote */}
            <blockquote className="font-serif italic text-xl sm:text-2xl text-[#D4A359] leading-snug mb-8 border-l-2 border-[#D4A359] pl-5">
              “Some places are built to impress. Some places are built to make you feel at home.”
            </blockquote>

            {/* Content Body */}
            <div className="space-y-5 text-[#222222]/85 text-base sm:text-lg leading-relaxed font-light">
              <p>
                At Solara, we believe luxury isn’t marble floors or expensive furniture—it's waking up to fresh air, sharing breakfast on the terrace, spending the afternoon by the pool, and ending the day under a sky full of stars.
              </p>
              <p>
                Whether you’re celebrating with family, reconnecting with friends, or simply escaping the city, we hope every stay becomes a memory you’ll want to relive.
              </p>
            </div>

            {/* Signature Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-8 mt-8 border-t border-[#2E3B2B]/10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2E3B2B]/5 flex items-center justify-center text-[#2E3B2B] shrink-0">
                  <SunMedium className="w-5 h-5 text-[#D4A359]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2E3B2B]">Exclusively Yours</h4>
                  <p className="text-xs text-[#222222]/70 mt-0.5">Single private booking per day for complete privacy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#2E3B2B]/5 flex items-center justify-center text-[#2E3B2B] shrink-0">
                  <Heart className="w-5 h-5 text-[#D4A359]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#2E3B2B]">Designed for Gathering</h4>
                  <p className="text-xs text-[#222222]/70 mt-0.5">Spacious open layouts suited for 16-20 cherished guests.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
