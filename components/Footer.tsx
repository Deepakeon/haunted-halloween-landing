import React, { useState } from 'react';

export default function HalloweenFooter() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <footer className="relative bg-linear-to-b from-purple-950/5 to-black py-16 px-4 overflow-hidden">
      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-1/4 animate-pulse opacity-10 text-5xl">🎃</div>
        <div className="absolute bottom-12 right-1/4 animate-bounce opacity-10 text-4xl">👻</div>
        <div className="absolute top-1/2 left-10 animate-pulse opacity-5 text-6xl">🦇</div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Main CTA Button */}
        
      </div>
    </footer>
  );
}