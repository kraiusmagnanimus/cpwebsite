// src/components/home/BenefitsExplorer.tsx
import React, { useState } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface Benefit {
  id: number;
  title: string;
  description: string;
  position: { x: number; y: number };
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Rich in MCTs',
    description: 'Medium-chain triglycerides for quick energy and metabolism boost',
    position: { x: 30, y: 30 }
  },
  {
    id: 2,
    title: 'Vitamin E',
    description: 'Natural antioxidant properties for skin health',
    position: { x: 70, y: 45 }
  },
  {
    id: 3,
    title: 'Lauric Acid',
    description: 'Supports immune system and promotes heart health',
    position: { x: 25, y: 60 }
  },
  {
    id: 4,
    title: 'Essential Minerals',
    description: 'Contains iron, magnesium, and potassium',
    position: { x: 65, y: 75 }
  }
];

const BenefitsExplorer: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [activeBenefit, setActiveBenefit] = useState<Benefit | null>(null);

  return (
    <div 
      ref={ref}
      className={`relative h-[600px] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-full">
        <img
          src="https://placehold.co/800x800"
          alt="Coconut cross-section"
          className="mx-auto h-full object-contain"
        />
        
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${benefit.position.x}%`, top: `${benefit.position.y}%` }}
          >
            <div
              className={`w-4 h-4 rounded-full bg-blue-500 hover:bg-blue-600 
                transition-all duration-300 animate-pulse
                ${activeBenefit?.id === benefit.id ? 'scale-150' : 'scale-100'}`}
              onClick={() => setActiveBenefit(benefit)}
            />
            
            {activeBenefit?.id === benefit.id && (
              <div className="absolute z-10 w-64 p-4 mt-4 bg-white rounded-lg shadow-xl 
                transform -translate-x-1/2 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsExplorer;