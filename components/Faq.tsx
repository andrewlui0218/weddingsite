import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is there a dress code?",
    answer: "Yes, our dress code is Formal / Black Tie Optional. We ask that gentlemen wear suits and ladies wear evening gowns or elegant cocktail dresses. Please avoid wearing white."
  },
  {
    question: "Is parking available at the venue?",
    answer: "Yes, WM Hotel offers complimentary parking for our wedding guests. Please validate your parking ticket at the reception desk before leaving."
  },
  {
    question: "What time should I arrive?",
    answer: "The ceremony will begin promptly at 6:30 PM. We recommend arriving 15-30 minutes early to enjoy some welcome drinks and find your seat."
  },
  {
    question: "Do you have a registry?",
    answer: "Your presence at our wedding is the greatest gift of all. However, if you wish to honour us with a gift, a red packet (Laisee) would be gratefully received."
  },
  {
    question: "I have dietary restrictions, can I make a request?",
    answer: "Absolutely! Please indicate any dietary requirements (vegetarian, allergies, etc.) in the RSVP form below, and we will ensure the catering team takes good care of you."
  }
];

const FaqItemComponent: React.FC<{ item: FaqItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button 
        className="w-full py-6 px-6 flex justify-between items-center text-left focus:outline-none group hover:bg-gray-50/50 transition-colors"
        onClick={onClick}
      >
        <span className={`font-serif text-lg md:text-xl text-wedding-dark transition-colors duration-300 ${isOpen ? 'font-semibold' : 'font-medium'}`}>
          {item.question}
        </span>
        <span className={`ml-4 text-wedding-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 text-gray-600 font-sans leading-relaxed text-sm md:text-base">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative" ref={ref}>
       <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="font-serif text-5xl font-bold text-wedding-dark tracking-wider mb-4">Q & A</h3>
          <p className="text-gray-500 italic font-serif">Everything you need to know</p>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {faqs.map((faq, index) => (
            <FaqItemComponent 
              key={index} 
              item={faq} 
              isOpen={openIndex === index} 
              onClick={() => handleToggle(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;