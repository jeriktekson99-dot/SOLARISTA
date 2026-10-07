/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HighlightsAmenities } from './components/HighlightsAmenities';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Give focus to the name input after scrolling
      setTimeout(() => {
        const firstInput = contactSection.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#222222] font-sans selection:bg-[#D4A359]/20 selection:text-[#2E3B2B]">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Single Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onReserveClick={scrollToBooking} />

        {/* 2. About Us / Our Philosophy */}
        <AboutSection />

        {/* 3. Highlights & Amenities */}
        <HighlightsAmenities />

        {/* 4. Interactive Gallery & Lightbox */}
        <GallerySection />

        {/* 5. Guest Stories & Testimonials */}
        <TestimonialsSection />

        {/* 6. Call to Action & Booking / Inquiry Form */}
        <BookingSection />
      </main>

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
