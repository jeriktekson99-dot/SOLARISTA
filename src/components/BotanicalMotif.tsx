import React from 'react';

export const SunburstIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#D4A359]" }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" />
    <path d="M24 6V11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M24 37V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M6 24H11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M37 24H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M11.27 11.27L14.81 14.81" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M33.19 33.19L36.73 36.73" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M11.27 36.73L14.81 33.19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M33.19 14.81L36.73 11.27" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const TropicalLeafIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6 text-[#2E3B2B]" }) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    <path
      d="M18 34C18 34 18 20 18 4C18 4 30 7 30 20C30 28 24 32 18 34Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18 34C18 34 18 20 18 4C18 4 6 7 6 20C6 28 12 32 18 34Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18 10L25 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 17L26 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 10L11 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M18 17L10 23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const SolaraLogoMark: React.FC<{ className?: string; inverted?: boolean }> = ({ 
  className = "w-7 h-7", 
  inverted = false 
}) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <SunburstIcon className={`w-full h-full ${inverted ? 'text-[#D4A359]' : 'text-[#D4A359]'}`} />
  </div>
);
