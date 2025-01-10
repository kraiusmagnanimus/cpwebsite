// src/components/home/ProductComparison.tsx
import React, { useState, useEffect, useRef } from 'react';

interface ComparisonPoint {
  id: string;
  feature: string;
  description: string;
  coconutBased: string;
  others: string;
}

const comparisonPoints: ComparisonPoint[] = [
  {
    id: "nutritional",
    feature: "Nutritional Value",
    description: "Essential nutrients and enzymes for your body",
    coconutBased: "Packed with essential nutrients and natural enzymes.",
    others: "High in sugar and artificial additives."
  },
  {
    id: "hydration",
    feature: "Hydration",
    description: "Natural hydration and electrolyte balance",
    coconutBased: "Naturally replenishes electrolytes for optimal hydration.",
    others: "Lacks natural hydration properties."
  },
  {
    id: "sustainability",
    feature: "Sustainability",
    description: "Eco-friendly and sustainable practices",
    coconutBased: "Environmentally friendly and sustainably sourced.",
    others: "Often produced with non-eco-friendly practices."
  },
  {
    id: "digestive",
    feature: "Digestive Health",
    description: "Support for healthy digestion",
    coconutBased: "Supports digestion with natural fibers and healthy fats.",
    others: "Contains processed ingredients that can disrupt gut health."
  }
];

const ProductComparison: React.FC = () => {
  const [position, setPosition] = useState(50);
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const newPosition = (x / rect.width) * 100;
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, cardId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Comparison Slider */}
      <div 
        ref={containerRef}
        className="relative h-[400px] overflow-hidden rounded-lg shadow-lg mb-8 select-none"
      >
        <img
          src="https://placehold.co/800x400"
          alt="Regular Product"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="https://placehold.co/800x400"
            alt="Cocopure Product"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            ↔
          </div>
        </div>
      </div>

      {/* Comparison Points */}
      <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
        {comparisonPoints.map((point) => (
          <div 
            key={point.id}
            className="w-full"
          >
            <div 
              className={`bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300
                         ${activeCard === point.id ? 'ring-2 ring-blue-500' : 'hover:-translate-y-1'}`}
              onClick={(e) => handleCardClick(e, point.id)}
            >
              <h3 className="text-lg font-semibold mb-2">{point.feature}</h3>
              <p className="text-gray-600">{point.description}</p>

              <div 
                className={`mt-4 pt-4 border-t border-gray-200 overflow-hidden transition-all duration-300
                           ${activeCard === point.id ? 'max-h-96' : 'max-h-0'}`}
              >
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-blue-600">Coconut-Based: </span>
                    <span className="text-gray-700">{point.coconutBased}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Others: </span>
                    <span className="text-gray-700">{point.others}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;