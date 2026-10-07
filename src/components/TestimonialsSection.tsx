import React, { useState } from 'react';
import { SunburstIcon, TropicalLeafIcon } from './BotanicalMotif';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Heart } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  groupType: string;
  stayDate: string;
  location: string;
  rating: number;
  headline: string;
  content: string;
  highlight: string;
  guestCount: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Camille & Marco Villar',
    groupType: 'Family Reunion Gathering',
    stayDate: 'January 2026',
    location: 'Quezon City',
    rating: 5,
    headline: '“The kids swam all afternoon while the elders enjoyed breezy coffee on the lanai.”',
    content:
      'Solara gave our multigenerational family the most peaceful weekend we’ve had in years. The kids spent entire days in the crystal-clear pool, while the grandparents relaxed on the covered timber terrace enjoying the cool mountain air. At night, roasting marshmallows by the stone fire pit under a canopy of stars was pure magic.',
    highlight: 'Private pool & stone fire pit',
    guestCount: '16 Family Members',
  },
  {
    id: 'test-2',
    name: 'David & Patricia Tan',
    groupType: 'Intimate Birthday Weekend',
    stayDate: 'February 2026',
    location: 'Makati City',
    rating: 5,
    headline: '“Breathtaking architecture, warm lighting, and a kitchen with every conceivable tool.”',
    content:
      'We celebrated a milestone 30th birthday here and couldn’t have picked a more breathtaking venue. The natural wood ceilings and double-height living room open right into the garden. We cooked a feast at the harvest dining table and the ambiance felt like a 5-star private boutique resort.',
    highlight: 'Harvest dining table & gourmet kitchen',
    guestCount: '12 Guests',
  },
  {
    id: 'test-3',
    name: 'Atty. Ramon & Elena Santos',
    groupType: 'Weekend Barkada Retreat',
    stayDate: 'November 2025',
    location: 'Alabang, Muntinlupa',
    rating: 5,
    headline: '“Escaping the Metro Manila heat to cool Alfonso was the best decision.”',
    content:
      'Just an hour and twenty minutes from Alabang via CALAX, and you arrive at this peaceful oasis. The temperature drops noticeably into refreshing cool breezes. The entire villa was spotless, beds were hotel-grade comfortable, and the caretakers were always courteous yet respected our full privacy.',
    highlight: 'Cool Cavite highland climate',
    guestCount: '14 Guests',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#F3EFE6] relative overflow-hidden">
      {/* Decorative botanical accents */}
      <div className="absolute top-8 right-[-20px] opacity-10 pointer-events-none rotate-45">
        <TropicalLeafIcon className="w-72 h-72 text-[#2E3B2B]" />
      </div>
      <div className="absolute bottom-6 left-[-20px] opacity-10 pointer-events-none -rotate-12">
        <TropicalLeafIcon className="w-80 h-80 text-[#D4A359]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2E3B2B]/75">
              Guest Experiences
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2E3B2B] tracking-tight mb-4">
            Memories Made at Solara
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Real stories from families, friends, and travelers who slowed down, reconnected, and found sanctuary in Alfonso.
          </p>

          {/* Social Proof Stats (Zero-pill compliant metadata) */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-[#2E3B2B]/85 font-medium">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#D4A359]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-serif text-base font-bold ml-1 text-[#2E3B2B]">4.98 Rating</span>
            </div>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Over 85+ Happy Stays</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="flex items-center gap-1 text-[#2E3B2B]">
              <CheckCircle2 className="w-4 h-4 text-[#D4A359]" />
              <span>100% Private Exclusive Use</span>
            </span>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="max-w-4xl mx-auto bg-[#FDFBF7] rounded-3xl p-8 sm:p-12 shadow-xl border border-[#2E3B2B]/10 relative">
          <Quote className="w-14 h-14 text-[#D4A359]/25 absolute top-6 right-8 pointer-events-none" />

          {/* Stars */}
          <div className="flex items-center gap-1 text-[#D4A359] mb-6">
            {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>

          {/* Review Headline */}
          <h3 className="font-serif italic text-2xl sm:text-3xl text-[#2E3B2B] leading-snug mb-5">
            {TESTIMONIALS[activeIndex].headline}
          </h3>

          {/* Review Body */}
          <p className="text-[#222222]/80 text-base sm:text-lg leading-relaxed font-light mb-8">
            "{TESTIMONIALS[activeIndex].content}"
          </p>

          {/* Reviewer Details (Zero-pill compliant) */}
          <div className="pt-6 border-t border-[#2E3B2B]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="font-serif text-lg font-medium text-[#2E3B2B]">
                {TESTIMONIALS[activeIndex].name}
              </div>
              <div className="flex items-center gap-2 text-xs text-[#222222]/65 font-mono mt-0.5">
                <span>{TESTIMONIALS[activeIndex].groupType}</span>
                <span aria-hidden="true">·</span>
                <span>{TESTIMONIALS[activeIndex].location}</span>
                <span aria-hidden="true">·</span>
                <span>{TESTIMONIALS[activeIndex].stayDate}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-[#2E3B2B]/20 hover:border-[#2E3B2B] hover:bg-[#2E3B2B] hover:text-white text-[#2E3B2B] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-[#2E3B2B]/20 hover:border-[#2E3B2B] hover:bg-[#2E3B2B] hover:text-white text-[#2E3B2B] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Grid Mini Cards of More Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={review.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                activeIndex === idx
                  ? 'bg-[#2E3B2B] text-white border-[#2E3B2B] shadow-lg scale-102'
                  : 'bg-[#FDFBF7] text-[#222222] border-[#2E3B2B]/10 hover:border-[#D4A359]/50 shadow-xs hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`flex ${activeIndex === idx ? 'text-[#D4A359]' : 'text-[#D4A359]'}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className={`text-[11px] font-mono ${activeIndex === idx ? 'text-white/60' : 'text-neutral-400'}`}>
                  {review.stayDate}
                </span>
              </div>

              <h4 className={`font-serif text-base font-medium mb-2 line-clamp-1 ${activeIndex === idx ? 'text-white' : 'text-[#2E3B2B]'}`}>
                {review.headline.replace(/["“”]/g, '')}
              </h4>

              <p className={`text-xs leading-relaxed line-clamp-3 mb-4 font-light ${activeIndex === idx ? 'text-white/80' : 'text-neutral-600'}`}>
                {review.content}
              </p>

              <div className={`pt-3 border-t text-[11px] font-medium flex items-center justify-between ${
                activeIndex === idx ? 'border-white/10 text-[#D4A359]' : 'border-neutral-100 text-[#2E3B2B]'
              }`}>
                <span>{review.name}</span>
                <span className={`text-[10px] font-mono ${activeIndex === idx ? 'text-white/60' : 'text-neutral-400'}`}>
                  {review.guestCount}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
