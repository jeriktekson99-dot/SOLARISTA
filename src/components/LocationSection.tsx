import React, { useState } from 'react';
import { PROPERTY_INFO, NEARBY_ATTRACTIONS, NearbySpot } from '../data/propertyData';
import { SunburstIcon } from './BotanicalMotif';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Car, 
  Wind, 
  Mountain, 
  ExternalLink,
  Compass,
  Check
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedSpot, setSelectedSpot] = useState<NearbySpot>(NEARBY_ATTRACTIONS[0]);

  return (
    <section id="location" className="py-24 sm:py-32 bg-[#F3EFE6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2E3B2B]/75">
              The Destination
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2E3B2B] tracking-tight mb-4">
            Escape the City to Alfonso, Cavite
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/80 font-light leading-relaxed">
            Nestled in the cool climate of Cavite, just a short scenic drive from Tagaytay. Wake up to crisp mountain air, towering pine and mahogany canopies, and serene provincial rhythm.
          </p>

          {/* Quick Stats Badges (Zero-pill compliant inline metadata) */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-[#2E3B2B]/80 font-medium">
            <div className="flex items-center gap-2">
              <Car className="w-4 h-4 text-[#D4A359]" />
              <span>75–90 mins from Metro Manila</span>
            </div>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <div className="flex items-center gap-2">
              <Wind className="w-4 h-4 text-[#D4A359]" />
              <span>20°C - 26°C Cool Breeze</span>
            </div>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <div className="flex items-center gap-2">
              <Mountain className="w-4 h-4 text-[#D4A359]" />
              <span>12 mins to Tagaytay Ridge</span>
            </div>
          </div>
        </div>

        {/* Interactive Map & Local Guide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Custom Interactive Map Visualizer */}
          <div className="lg:col-span-7 bg-[#2E3B2B] rounded-3xl p-6 sm:p-8 text-white relative shadow-xl overflow-hidden flex flex-col justify-between min-h-[480px]">
            {/* Map Canvas Background / Stylized Topographic SVG */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Top Bar of Map Card */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D4A359]" />
                <span className="font-serif text-lg tracking-wide text-white">Alfonso Valley & Tagaytay Corridor</span>
              </div>
              <a
                href="https://maps.google.com/?q=Alfonso,+Cavite"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#D4A359] hover:underline flex items-center gap-1 font-mono"
              >
                Open in Google Maps
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Interactive Map Pin Visualizer */}
            <div className="relative z-10 my-8 flex-1 flex flex-col items-center justify-center p-6 bg-black/20 rounded-2xl border border-white/10">
              
              {/* Primary Anchor: Solara de Alfonso */}
              <div className="relative flex flex-col items-center animate-pulse">
                <div className="w-14 h-14 rounded-full bg-[#D4A359] text-[#2E3B2B] flex items-center justify-center shadow-lg shadow-[#D4A359]/30 border-2 border-white">
                  <SunburstIcon className="w-8 h-8 text-[#2E3B2B]" />
                </div>
                <div className="mt-2 px-3 py-1 bg-white text-[#2E3B2B] rounded-full text-xs font-bold tracking-wide shadow-md">
                  ★ Solara de Alfonso (You are here)
                </div>
                <span className="text-[11px] text-[#D4A359] font-mono mt-1">Brgy. Kaytitinga / Luksuhin, Alfonso</span>
              </div>

              {/* Surrounding Connected Spots */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full mt-8 pt-6 border-t border-white/10 text-xs">
                {NEARBY_ATTRACTIONS.slice(0, 6).map((spot) => (
                  <button
                    key={spot.name}
                    onClick={() => setSelectedSpot(spot)}
                    className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedSpot.name === spot.name
                        ? 'bg-[#D4A359] text-[#2E3B2B] border-[#D4A359] font-medium shadow-sm'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold truncate">{spot.name}</div>
                    <div className="text-[11px] opacity-80">{spot.driveTime} drive</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Driving Instructions */}
            <div className="relative z-10 text-xs text-white/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Navigable on Waze & Google Maps as <strong>"Solara de Alfonso"</strong></span>
              </div>
              <span className="text-[#D4A359] font-mono">Paved access road & gated parking</span>
            </div>
          </div>

          {/* Right: Selected Attraction Spotlight & Guide */}
          <div className="lg:col-span-5 bg-[#FDFBF7] rounded-3xl p-6 sm:p-8 border border-[#2E3B2B]/10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#D4A359]" />
                <span className="text-xs uppercase tracking-wider text-[#2E3B2B]/70 font-semibold">
                  Nearby Destination Spotlight
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#2E3B2B] mb-2">
                {selectedSpot.name}
              </h3>

              <div className="flex items-center gap-3 text-xs text-[#2E3B2B]/75 mb-6 font-mono">
                <span className="font-semibold text-[#D4A359]">{selectedSpot.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedSpot.driveTime} from Villa</span>
                <span aria-hidden="true">·</span>
                <span>{selectedSpot.distance}</span>
              </div>

              <p className="text-sm sm:text-base text-[#222222]/80 leading-relaxed font-light mb-6">
                {selectedSpot.description}
              </p>

              <div className="p-4 rounded-2xl bg-[#F3EFE6] border border-[#2E3B2B]/5 space-y-2 mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2E3B2B]">
                  Recommended Itinerary Tip
                </div>
                <p className="text-xs text-[#222222]/75 leading-normal">
                  Drop by on your way up from Manila or take a leisurely late afternoon excursion before returning for a sunset barbecue by the pool.
                </p>
              </div>
            </div>

            {/* List of other spots */}
            <div className="pt-6 border-t border-[#2E3B2B]/10">
              <div className="text-xs uppercase tracking-wider font-semibold text-[#2E3B2B]/70 mb-3">
                More Alfonso & Tagaytay Highlights:
              </div>
              <div className="space-y-2">
                {NEARBY_ATTRACTIONS.map((spot) => (
                  <button
                    key={spot.name}
                    onClick={() => setSelectedSpot(spot)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors cursor-pointer ${
                      selectedSpot.name === spot.name
                        ? 'bg-[#2E3B2B] text-white font-medium'
                        : 'hover:bg-[#2E3B2B]/5 text-[#2E3B2B]'
                    }`}
                  >
                    <span>{spot.name}</span>
                    <span className="opacity-70 font-mono">{spot.driveTime}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
