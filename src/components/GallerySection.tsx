import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/propertyData';
import { SunburstIcon } from './BotanicalMotif';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Maximize2,
  Sparkles
} from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Views' },
    { id: 'pool', label: 'Pool & Outdoors' },
    { id: 'villa', label: 'Villa & Architecture' },
    { id: 'interior', label: 'Living & Interiors' },
    { id: 'garden', label: 'Garden & Twilight' },
  ];

  const filteredPhotos = activeFilter === 'all' 
    ? GALLERY_PHOTOS 
    : GALLERY_PHOTOS.filter(photo => photo.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  }, [lightboxIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <SunburstIcon className="w-5 h-5 text-[#D4A359]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#2E3B2B]/75">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#2E3B2B] tracking-tight mb-4">
            A Glimpse Into Solara
          </h2>
          <p className="text-base sm:text-lg text-[#222222]/80 font-light">
            Explore day and twilight views across our private pool, tropical garden, and airy villa living spaces.
          </p>

          {/* Interactive Filter Controls (Compliant with frontend-design: buttons with click handlers) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#2E3B2B] text-[#FDFBF7] shadow-sm'
                    : 'bg-[#2E3B2B]/5 text-[#2E3B2B]/80 hover:bg-[#2E3B2B]/10 hover:text-[#2E3B2B]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-slate-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 aspect-4/3"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />

              {/* Scrim Overlay & Information */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Hover Maximize Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Unboxed clean metadata (Zero-pill compliant) */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs text-[#D4A359] mb-1 font-mono tracking-wider">
                  <span>{photo.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Alfonso Retreat</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-white mb-1">
                  {photo.title}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-1 font-light">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between text-white/90 z-20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg tracking-wide text-white">Solara de Alfonso</span>
              <span className="text-white/40">/</span>
              <span className="text-xs font-mono text-[#D4A359]">
                {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image with Prev / Next */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#D4A359] hover:text-[#2E3B2B] text-white transition-all cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={filteredPhotos[lightboxIndex].src}
              alt={filteredPhotos[lightboxIndex].alt}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none"
              referrerPolicy="no-referrer"
            />

            <button
              onClick={showNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-[#D4A359] hover:text-[#2E3B2B] text-white transition-all cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="text-center max-w-2xl mx-auto text-white z-20">
            <h4 className="font-serif text-xl sm:text-2xl text-[#D4A359] mb-1">
              {filteredPhotos[lightboxIndex].title}
            </h4>
            <p className="text-sm text-white/80 font-light">
              {filteredPhotos[lightboxIndex].caption}
            </p>
          </div>

        </div>
      )}
    </section>
  );
};
