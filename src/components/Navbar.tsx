import React, { useState, useEffect } from 'react';
import { SolaraLogoMark } from './BotanicalMotif';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#2E3B2B]/10 py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent text-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <SolaraLogoMark className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            <span
              className={`font-serif text-xl sm:text-2xl font-medium tracking-wide transition-colors ${
                isScrolled ? 'text-[#2E3B2B]' : 'text-white'
              }`}
            >
              Solara de Alfonso
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-colors py-1 relative hover:text-[#D4A359] ${
                  isScrolled ? 'text-[#2E3B2B]/80' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onBookClick}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs active:scale-95 whitespace-nowrap ${
                isScrolled
                  ? 'bg-[#2E3B2B] text-[#FDFBF7] hover:bg-[#D4A359] hover:text-[#2E3B2B]'
                  : 'bg-[#D4A359] text-[#2E3B2B] hover:bg-white hover:text-[#2E3B2B]'
              }`}
            >
              Book Your Stay
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors cursor-pointer ${
                isScrolled ? 'text-[#2E3B2B] hover:bg-[#2E3B2B]/5' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#2E3B2B]/10 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-serif text-[#2E3B2B] hover:text-[#D4A359] transition-colors py-1 border-b border-[#2E3B2B]/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-full bg-[#2E3B2B] text-[#FDFBF7] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4A359] hover:text-[#2E3B2B] transition-colors"
              >
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
