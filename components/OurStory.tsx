import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StoryEvent {
  date: string;
  title: string;
  image: string;
}

const stories: StoryEvent[] = [
  { date: '12th May, 2021', title: 'Our first Date!', image: '/images/story-1.jpg' },
  { date: '25th December, 2021', title: 'Our first Christmas!', image: '/images/story-2.jpg' },
  { date: '12th October, 2024', title: 'Tottori, Japan', image: '/images/story-3.jpg' },
  { date: '23rd October, 2024', title: 'Happy Graduation!', image: '/images/story-4.jpg' },
  { date: '15th November, 2024', title: 'We are engaged!', image: '/images/story-5.jpg' },
  { date: '25th April, 2026', title: 'Our Big Day!', image: '/images/story-6.jpg' },
];

const StoryItem: React.FC<{ event: StoryEvent; index: number }> = ({ event, index }) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative w-full flex mb-8 ${isLeft ? 'justify-start md:justify-end' : 'justify-start'} md:w-1/2 ${isLeft ? 'md:pr-8 md:ml-0' : 'md:pl-8 md:ml-[50%]'} transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {/* Timeline Dot (Desktop center, Mobile left) */}
      <div className={`absolute top-6 w-4 h-4 rounded-full bg-white border-[3px] border-wedding-primary z-10 
        ${isLeft ? 'md:-right-[10px]' : 'md:-left-[10px]'} 
        left-[-9px] md:left-auto
      `}></div>

      {/* Content Card */}
      <div className={`w-full ml-6 md:ml-0 bg-white p-4 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow`}>
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-48 md:h-56 object-cover rounded-xl mb-4 hover:brightness-105 transition-all"
        />
        <span className="font-serif font-bold text-xl text-wedding-dark block mb-1">
          {event.date}
        </span>
        <div className="text-gray-600 font-medium text-sm md:text-base">
          {event.title}
        </div>
      </div>
    </div>
  );
};

const OurStory: React.FC = () => {
  return (
    <section id="our-story" className="py-20 px-4 bg-gray-50 relative">
      <div className="text-center mb-16">
        <h3 className="font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-4">Our Story</h3>
        <div className="h-1 w-20 bg-wedding-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Center Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-wedding-primary/40 transform md:-translate-x-1/2"></div>
        
        <div className="flex flex-col w-full">
          {stories.map((event, index) => (
            <StoryItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;