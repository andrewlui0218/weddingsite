import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hk' | 'japan'>('hk');
  const { ref, isVisible } = useScrollAnimation(0.1);

  // Generate placeholder images - Landscape orientation (3:2 aspect ratio)
  const hkPhotos = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/seed/hk${i}/1000/667`);
  const jpPhotos = Array.from({ length: 6 }).map((_, i) => `https://picsum.photos/seed/jp${i}/1000/667`);

  const currentPhotos = activeTab === 'hk' ? hkPhotos : jpPhotos;

  return (
    <section id="pre-wedding" className="py-24 bg-wedding-bg" ref={ref}>
      <div className={`max-w-6xl mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        <div className="text-center mb-12">
          <h3 className="font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-8">Pre-Wedding</h3>
          
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('hk')}
              className={`px-8 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300
                ${activeTab === 'hk' 
                  ? 'bg-wedding-dark text-white border-wedding-dark shadow-lg scale-105' 
                  : 'bg-white text-wedding-dark border-wedding-dark hover:bg-wedding-dark/10'}
              `}
            >
              Hong Kong
            </button>
            <button
              onClick={() => setActiveTab('japan')}
              className={`px-8 py-2 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300
                ${activeTab === 'japan' 
                  ? 'bg-wedding-dark text-white border-wedding-dark shadow-lg scale-105' 
                  : 'bg-white text-wedding-dark border-wedding-dark hover:bg-wedding-dark/10'}
              `}
            >
              Hokkaido
            </button>
          </div>
        </div>

        {/* 
          Key ensures the container re-renders when tab changes, triggering the animations again.
        */}
        <div key={activeTab} className="columns-2 md:columns-3 gap-4 space-y-4">
          {currentPhotos.map((src, index) => (
            <div 
              key={`${activeTab}-${index}`} 
              className="break-inside-avoid overflow-hidden rounded-xl shadow-md group opacity-0 animate-fade-in-up"
              style={{ 
                animationDelay: `${index * 200}ms`, 
                animationDuration: '0.8s',
                animationFillMode: 'forwards' 
              }}
            >
              <img 
                src={src} 
                alt={`Gallery ${activeTab} ${index}`} 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;