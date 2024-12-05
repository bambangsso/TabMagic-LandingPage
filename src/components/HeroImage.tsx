import React from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto rounded-lg shadow-2xl"
        style={{
          objectFit: 'cover',
          objectPosition: 'top'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-lg"></div>
    </div>
  );
}
