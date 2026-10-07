import React, { useState } from 'react';
import { AMENITIES_LIST, AmenityItem } from '../data/propertyData';
import { SunburstIcon } from './BotanicalMotif';
import { 
  Waves, 
  Flame, 
  Home, 
  UtensilsCrossed, 
  Coffee, 
  Wifi, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Waves,
  Flame,
  Home,
  UtensilsCrossed,
  Coffee,
  Wifi,
};

export const HighlightsAmenities: React.FC = () => {
  const [selectedAmenity, setSelectedAmenity] = useState<AmenityItem | null>(null);

  return (
    <section id="amenities" className="py-24 sm:py-32 bg-[#2E3B2B] text-[#FDFBF7] relative overflow-hidden">
      {/* Subtle organic background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="highlights" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#D4A359]">
              Curated Comforts
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white mb-6">
            Highlights & Amenities
          </h2>
          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
            Thoughtfully equipped for effortless rest, shared feasts, and joyful gatherings under open Cavite skies.
          </p>
        </div>

        {/* 6 Showcase Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AMENITIES_LIST.map((item) => {
            const Icon = iconMap[item.iconName] || Home;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedAmenity(item)}
                className="group relative bg-[#FDFBF7]/5 hover:bg-[#FDFBF7]/10 border border-white/10 hover:border-[#D4A359]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Visual Thumbnail if available */}
                {item.image && (
                  <div className="w-full h-44 rounded-xl overflow-hidden mb-5 relative bg-black/40">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#D4A359]/15 border border-[#D4A359]/30 flex items-center justify-center text-[#D4A359] group-hover:bg-[#D4A359] group-hover:text-[#2E3B2B] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#D4A359]/80 font-mono">
                      Included
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3 group-hover:text-[#D4A359] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/75 text-sm leading-relaxed mb-4 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-[#D4A359]">
                  <span>Explore details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Estate Features Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#FDFBF7]/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#D4A359]/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D4A359]" />
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Self-Contained & Private Sanctuary</h4>
              <p className="text-white/70 text-sm">Gated property with 24/7 caretaking assistance, backup generator, and CCTV security on perimeters.</p>
            </div>
          </div>
          <button
            onClick={() => setSelectedAmenity(AMENITIES_LIST[0])}
            className="px-6 py-2.5 rounded-full border border-[#D4A359] text-[#D4A359] hover:bg-[#D4A359] hover:text-[#2E3B2B] text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            View Complete Specs
          </button>
        </div>

      </div>

      {/* Amenity Detail Modal */}
      {selectedAmenity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#FDFBF7] text-[#222222] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#2E3B2B]/10 relative animate-in zoom-in-95 duration-200">
            {/* Header Image if available */}
            {selectedAmenity.image ? (
              <div className="relative h-52 w-full bg-[#2E3B2B]">
                <img
                  src={selectedAmenity.image}
                  alt={selectedAmenity.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <button
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl font-medium">{selectedAmenity.title}</h3>
                </div>
              </div>
            ) : (
              <div className="p-6 pb-2 flex items-center justify-between border-b border-[#2E3B2B]/10">
                <h3 className="font-serif text-2xl font-medium text-[#2E3B2B]">{selectedAmenity.title}</h3>
                <button
                  onClick={() => setSelectedAmenity(null)}
                  className="w-8 h-8 rounded-full bg-[#2E3B2B]/5 hover:bg-[#2E3B2B]/10 text-[#2E3B2B] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-[#222222]/80 text-sm leading-relaxed mb-5">
                {selectedAmenity.description}
              </p>

              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#2E3B2B]/80 mb-3">
                Included Features & Specifications:
              </h4>

              <ul className="space-y-2.5 mb-6">
                {selectedAmenity.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222]/85">
                    <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedAmenity(null)}
                className="w-full py-3 rounded-full bg-[#2E3B2B] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A359] hover:text-[#2E3B2B] transition-colors cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
