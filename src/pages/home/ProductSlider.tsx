import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const products = [
    {
      name: 'Cocopure',
      description: 'Healthy beverage drink made from coconuts',
      image: 'https://placehold.co/1200x600',
      link: '/cocopure',
      flavors: [
        { name: 'Mango', color: 'text-yellow-400' },
        { name: 'Apple Green Tea', color: 'text-green-500' },
        { name: 'Blue Lemonade', color: 'text-blue-400' },
        { name: 'Pineapple', color: 'text-yellow-300' },
        { name: 'Four Seasons', color: 'text-pink-700' }
      ]
    },
    {
      name: 'Cocobites',
      description: 'Healthy snack/chips made from coconuts',
      image: 'https://placehold.co/1200x600',
      link: '/cocochips',
      flavors: [
        { name: 'Cheese', color: 'text-yellow-500' },
        { name: 'BBQ', color: 'text-red-600' },
        { name: 'Sour Cream', color: 'text-amber-100' },
        { name: 'Chocolate', color: 'text-amber-800' }
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % products.length);
      }, 7000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Our Products</h2>
      <div className="text-center mb-4">
        <p className="text-gray-600 max-w-2xl mx-auto">
          At KG Global Beverages and Food Inc., we bring you nature's finest with our two signature products:
        </p>
      </div>

      {/* Slider Container */}
      <div 
        className="relative overflow-hidden rounded-xl"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative h-[400px]">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50">
                  <div className="h-full flex flex-col p-8 text-white">
                    <h3 className={`text-3xl font-bold mb-4 ${
                      index === 0 ? 'text-left' : 'text-right'
                    }`}>
                      {product.name}
                    </h3>
                    <p className={`text-lg mb-6 ${
                      index === 0 ? 'text-left' : 'text-right'
                    }`}>
                      {product.description}
                    </p>
                    
                    {/* Flavors */}
                    <div className="mt-auto">
                      <p className="text-center mb-2">Available in:</p>
                      <div className="flex flex-wrap justify-center gap-4">
                        {product.flavors.map((flavor, idx) => (
                          <span 
                            key={idx}
                            className={`${flavor.color} font-medium`}
                          >
                            {flavor.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Read More Button */}
                    <div className="text-center mt-6">
                      <Link
                        to={product.link}
                        className="inline-block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {products.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;