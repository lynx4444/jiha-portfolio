import React from 'react';

// Cute 4-point sparkle doodle
export const SparkleDoodle = ({ className = "w-5 h-5 text-accent-primary" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

// Little 5-point playful star
export const StarDoodle = ({ className = "w-4 h-4 text-accent-secondary" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    <path d="M12 2L14.7 8.5L21.7 9.1L16.4 13.8L18 20.7L12 17.1L6 20.7L7.6 13.8L2.3 9.1L9.3 8.5L12 2Z" />
  </svg>
);

// Hand-drawn wavy underline
export const SquiggleUnderline = ({ className = "text-accent-primary w-28 h-3" }) => (
  <svg 
    viewBox="0 0 120 12" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    <path d="M3 6C15 1.5 25 10.5 40 6C55 1.5 65 10.5 80 6C95 1.5 105 10.5 117 6" />
  </svg>
);

// Cute leafy plant doodle
export const LeafDoodle = ({ className = "w-6 h-6 text-accent-secondary" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);

// Hand-drawn highlight loop
export const LoopDoodle = ({ className = "text-accent-primary w-12 h-6" }) => (
  <svg 
    viewBox="0 0 60 30" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={`inline-block select-none ${className}`}
    aria-hidden="true"
  >
    <path d="M5 15 C15 5, 45 5, 55 15 C55 25, 25 28, 15 22 C10 18, 15 8, 30 10 C45 12, 52 20, 52 20" />
  </svg>
);
