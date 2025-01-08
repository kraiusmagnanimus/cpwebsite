// src/components/home/ProductComparison.tsx
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface ComparisonPoint {
  feature: string;
  cocopure: boolean;
  regular: boolean;
  description: string;
}

const comparisonPoints: ComparisonPoint[] = [
  {
    feature: "Cold-Pressed",
    cocopure: true,
    regular: false,
    description: "Preserves natural nutrients and enzymes"
  },
  {
    feature: "Organic Certified",
    cocopure: true,
    regular: false,
    description: "100% certified organic farming practices"
  },
  {
    feature: "Sustainable Sourcing",
    cocopure: true,
    regular: false,
    description: "Environmentally conscious production"
  },
  {
    feature: "Premium Quality",
    cocopure: true,
    regular: true,
    description: "High-grade coconut oil"
  }
];

const ProductComparison: React.FC = () => {
  const [position, setPosition] = useState(50);
  const [selectedPoint, setSelectedPoint] = useState<ComparisonPoint | null>(null);
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

  return (
    <div className="max-w-4xl mx-auto">
      {/* Image Comparison Slider */}
      <div 
        ref={containerRef}
        className="relative h-[400px] overflow-hidden rounded-lg shadow-lg mb-8 select-none"
      >
        {/* Regular Oil Image */}
        <img
          src="https://placehold.co/800x400"
          alt="Regular Coconut Oil"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        
        {/* Cocopure Image */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="https://placehold.co/800x400"
            alt="Cocopure Oil"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </div>

        {/* Slider Handle */}
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

        {/* Product Labels */}
        <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
          Regular Oil
        </div>
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded">
          Cocopure
        </div>
      </div>

      {/* Comparison Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {comparisonPoints.map((point, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedPoint(selectedPoint?.feature === point.feature ? null : point)}
          >
            <h3 className="text-lg font-semibold mb-2">{point.feature}</h3>
            <p className="text-gray-600 mb-4">{point.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Regular:</span>
                {point.regular ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Cocopure:</span>
                {point.cocopure ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
              </div>
            </div>

            {/* Expanded Details */}
            {selectedPoint?.feature === point.feature && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="text-sm text-gray-600">
                  <p className="font-medium mb-2">Why it matters:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Better nutrient retention</li>
                    <li>Enhanced flavor profile</li>
                    <li>Longer shelf life</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductComparison;