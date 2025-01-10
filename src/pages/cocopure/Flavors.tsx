import { Star, Droplet, Leaf } from 'lucide-react';

const Flavors = () => {
  const flavors = [
    {
      name: 'Mango',
      description: 'Experience the tropical sweetness of ripe mangoes blended with pure coconut water. A perfect balance of exotic flavors that transport you to a sunny paradise.',
      highlights: [
        'Natural mango essence',
        'No artificial sweeteners',
        'Rich in electrolytes'
      ],
      color: 'from-yellow-400 to-orange-400',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Apple Green Tea',
      description: 'A refreshing fusion of crisp apple and gentle green tea notes, creating a sophisticated and revitalizing beverage that combines fruity sweetness with subtle tea undertones.',
      highlights: [
        'Antioxidant-rich green tea',
        'Crisp apple flavor',
        'Light and refreshing'
      ],
      color: 'from-green-400 to-emerald-500',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Blue Lemonade',
      description: 'Our unique twist on classic lemonade, featuring a stunning blue hue and a perfectly balanced citrus taste that makes every sip a refreshing experience.',
      highlights: [
        'Natural citrus extract',
        'Vibrant blue color',
        'Perfectly balanced sweetness'
      ],
      color: 'from-blue-400 to-cyan-500',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Pineapple',
      description: 'Sweet and tangy pineapple flavors combine with coconut water to create a tropical blend that brings the taste of summer to every bottle.',
      highlights: [
        'Real pineapple essence',
        'Tropical taste profile',
        'Natural enzymes'
      ],
      color: 'from-yellow-300 to-yellow-400',
      image: 'https://placehold.co/800x600'
    },
    {
      name: 'Four Seasons',
      description: 'A delightful medley of tropical fruits creating a complex and satisfying flavor profile that changes with every sip, just like the seasons.',
      highlights: [
        'Mixed fruit blend',
        'Balanced sweetness',
        'Complex flavor profile'
      ],
      color: 'from-purple-400 to-pink-500',
      image: 'https://placehold.co/800x600'
    }
  ];

  return (
    <div>
      {/* Hero Section for Flavors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Our Flavors</h2>
        <p className="text-gray-600 mb-8">
          Discover our range of refreshing coconut water beverages, each carefully crafted to deliver 
          a unique and delightful taste experience while maintaining all the natural benefits of pure coconut water.
        </p>
      </section>

      {/* Flavor Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {flavors.map((flavor, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className={`h-48 relative`}>
              <div className={`absolute inset-0 bg-gradient-to-r ${flavor.color} z-0`}></div>
              <div className="relative h-full z-10">
                <img
                  src={flavor.image}
                  alt={`${flavor.name} Cocopure`}
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
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 rounded-xl p-8 mb-16">
        <h3 className="text-2xl font-bold mb-6">Every Flavor Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4">
            <Droplet className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Natural Hydration</h4>
              <p className="text-gray-600">Rich in electrolytes for natural hydration and refreshment</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Leaf className="w-6 h-6 text-green-500 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">100% Natural</h4>
              <p className="text-gray-600">No artificial flavors, colors, or preservatives</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Star className="w-6 h-6 text-yellow-500 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Premium Quality</h4>
              <p className="text-gray-600">Made from young coconuts at peak freshness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Suggestions */}
      <section>
        <h3 className="text-2xl font-bold mb-6">Best Enjoyed</h3>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Chilled</h4>
              <p className="text-gray-600">Serve cold for the most refreshing experience</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Active Lifestyle</h4>
              <p className="text-gray-600">Perfect during or after exercise</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Mixer</h4>
              <p className="text-gray-600">Great in smoothies and cocktails</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Anytime</h4>
              <p className="text-gray-600">Enjoy throughout the day for natural hydration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flavors;