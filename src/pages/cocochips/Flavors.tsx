import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

const Flavors = () => {
  const flavors = [
    {
      name: 'Cheese',
      description: 'Savor the perfect blend of premium coconut chips dusted with rich, creamy cheese flavor. A delightful combination that brings together the natural sweetness of coconut with savory cheese notes.',
      highlights: [
        'Rich cheese coating',
        'Perfect sweet-savory balance',
        'Irresistible crunch'
      ],
      color: 'from-yellow-400 to-orange-500',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'BBQ',
      description: 'Experience the smoky, bold taste of BBQ-flavored coconut chips. Each piece is carefully seasoned with our special BBQ blend for that perfect combination of sweet, smoky, and slightly spicy notes.',
      highlights: [
        'Smoky BBQ seasoning',
        'Hint of sweetness',
        'Perfect snack crunch'
      ],
      color: 'from-red-500 to-red-600',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Sour Cream',
      description: 'Indulge in the creamy, tangy goodness of our sour cream flavored coconut chips. A perfect balance of smooth, creamy notes with just the right touch of tanginess in every bite.',
      highlights: [
        'Creamy tang',
        'Smooth finish',
        'Light and crispy'
      ],
      color: 'from-blue-400 to-blue-500',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Chocolate',
      description: 'Discover the decadent combination of premium coconut chips enrobed in rich chocolate. A heavenly match that satisfies both your sweet tooth and snack cravings.',
      highlights: [
        'Rich chocolate coating',
        'Natural coconut sweetness',
        'Dessert-like indulgence'
      ],
      color: 'from-brown-500 to-brown-600',
      image: 'https://placehold.co/800x600'
    }
  ];

  const pairings = [
    {
      category: 'Beverages',
      suggestions: ['Coffee', 'Tea', 'Milk', 'Smoothies']
    },
    {
      category: 'Desserts',
      suggestions: ['Ice Cream Topping', 'Yogurt Mix-in', 'Baked Goods', 'Trail Mix']
    }
  ];

  return (
    <div>
      {/* Hero Section for Flavors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Flavors</h2>
        <p className="text-gray-600 mb-8">
          Discover our collection of perfectly seasoned coconut chips, where each flavor is crafted 
          to deliver an exceptional snacking experience that's both delicious and satisfying.
        </p>
      </section>

      {/* Flavor Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {flavors.map((flavor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className={`h-48 relative`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${flavor.color} z-0`}></div>
              <div className="relative h-full z-10">
                <img
                  src={flavor.image}
                  alt={`${flavor.name} Cocobites`}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{flavor.name}</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{flavor.description}</p>
              <ul className="space-y-2">
                {flavor.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Perfect Pairings Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Perfect Pairings</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pairings.map((pairing, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4">{pairing.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {pairing.suggestions.map((suggestion, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 text-center">
                      <p className="text-gray-700">{suggestion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snacking Tips */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Snacking Tips</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">On-the-Go</h3>
              <p className="text-gray-600">Perfect for quick energy boosts during your busy day</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">Party Mix</h3>
              <p className="text-gray-600">Mix different flavors for an exciting snack platter</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="font-semibold mb-2">Recipe Addition</h3>
              <p className="text-gray-600">Crush and sprinkle on desserts or salads</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flavors;