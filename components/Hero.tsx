import React from 'react';

const Hero: React.FC = () => {
  // Replace this URL with your local image path (e.g., '/images/wedding-cover.jpg')
  // The current layout is optimized for the cherry blossom photo provided.
  const bgImage = "https://picsum.photos/id/433/1920/1080"; 

  return (
    <section 
      id="hero-page" 
      className="relative h-screen min-h-[700px] flex items-start justify-center pt-24 md:pt-32 bg-cover bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        // Adjusted from 'center 80%' to 'center 25%'. 
        // '25%' ensures the top part of the image (trees/arch) is visible, 
        // pushing the couple (who are centrally located) lower in the viewport.
        // This creates a safe zone at the top for the text.
        backgroundPosition: 'center 25%' 
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* 
        Text Container 
        - Increased backdrop transparency for a lighter feel.
        - Adjusted padding/margins to be compact.
      */}
      <div className="relative z-10 bg-white/70 backdrop-blur-sm px-6 py-8 md:px-10 md:py-12 rounded-[30px] shadow-lg max-w-xl mx-4 text-center border border-white/40 animate-fade-in-down">
        <h2 className="font-serif italic text-gray-600 text-base md:text-lg mb-2 tracking-wide">
          Together with their families
        </h2>
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-wedding-dark mb-3 leading-tight opacity-0 animate-zoom-in" style={{ animationDelay: '0.3s' }}>
          Christy & Andrew
        </h1>
        <p className="font-serif italic text-gray-700 text-base md:text-xl tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          invite you to celebrate their marriage
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/90 animate-pulse-slow">
         <i className="fa-solid fa-chevron-down text-3xl drop-shadow-lg"></i>
      </div>
    </section>
  );
};

export default Hero;