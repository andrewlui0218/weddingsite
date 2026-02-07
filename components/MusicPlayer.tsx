import React, { useState, useRef } from 'react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Using a royalty-free classical piece suitable for weddings
  // Canon in D is a classic choice
  const songUrl = "https://ia800504.us.archive.org/11/items/PachelbelCanonInD/Pachelbel_Canon_in_D.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle potential autoplay restrictions
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback prevented by browser:", error);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-fade-in-up" style={{ animationDelay: '2s' }}>
      <audio ref={audioRef} src={songUrl} loop preload="auto" />
      
      <button 
        onClick={togglePlay}
        className={`
          group relative w-12 h-12 md:w-14 md:h-14 rounded-full 
          bg-white/80 backdrop-blur-md border border-wedding-primary/30 shadow-lg 
          flex items-center justify-center transition-all duration-300 
          hover:scale-110 hover:bg-white hover:border-wedding-primary text-wedding-dark
        `}
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {/* Animated Ripple Effect when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-wedding-primary/50 animate-ping opacity-75"></span>
        )}
        
        <div className={`relative z-10 text-lg md:text-xl transition-transform duration-700 ${isPlaying ? 'animate-spin-slow' : ''}`}>
           <i className="fa-solid fa-compact-disc"></i>
        </div>
        
        {/* Tooltip */}
        <span className="absolute left-full ml-3 px-2 py-1 bg-wedding-dark text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          {isPlaying ? 'Pause' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};

export default MusicPlayer;