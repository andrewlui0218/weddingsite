import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Rsvp: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="rsvp-section" 
      className="py-24 bg-wedding-bg relative overflow-hidden" 
      ref={ref}
    >
      {/* Decorative background pattern similar to EventDetails */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      {/* Soft gradient orbs for visual depth with float animation */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-wedding-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-wedding-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none animate-float-delayed"></div>

      <div className={`max-w-4xl mx-auto px-4 relative z-10 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-10">
          <h3 className="font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-4">
            RSVP
          </h3>
          <p className="font-sans text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Please kindly respond by March 25th, 2026. We look forward to celebrating with you!
          </p>
        </div>
        
        <div className="bg-white rounded-[20px] md:rounded-[40px] shadow-xl overflow-hidden border border-wedding-primary/10 relative ring-4 ring-white/50">
          {/* Decorative accent top bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-wedding-primary/30 via-wedding-dark/30 to-wedding-primary/30"></div>
          
          <div className="relative w-full">
            {/* 
              Taller height on mobile because Google Forms stack vertically.
              Shorter height on desktop where fields often sit side-by-side or occupy less vertical space.
            */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSfaH24owLvRyQwfxxAPKVw_gSAdb72lLFm3TTF1JN0Gi2XzOA/viewform?embedded=true" 
              className="w-full h-[1750px] md:h-[1050px] border-0 bg-transparent block"
              title="RSVP Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
        
        <div className="text-center mt-6">
           <p className="text-xs text-gray-400 italic">
             Having trouble viewing the form? <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaH24owLvRyQwfxxAPKVw_gSAdb72lLFm3TTF1JN0Gi2XzOA/viewform" target="_blank" rel="noopener noreferrer" className="text-wedding-dark underline hover:text-wedding-primary transition-colors">Open in a new window</a>
           </p>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;