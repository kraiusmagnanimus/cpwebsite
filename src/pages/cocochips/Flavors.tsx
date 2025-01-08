import React from 'react';

const Flavors = () => {
  const flavors = [
    {
      name: 'Original',
      description: 'Pure coconut goodness with a hint of sea salt',
      highlights: [
        'Lightly salted',
        'No added sugar',
        'Pure coconut taste'
      ],
      image: '/api/placeholder/cocochips/flavor-original'
    },
    {
      name: 'Caramel Sea Salt',
      description: 'Sweet and salty perfection in every bite',
      highlights: [
        'Natural caramel flavor',
        'Sprinkled with sea salt',
        'Perfect sweet-savory balance'
      ],
      image: '/api/placeholder/cocochips/flavor-caramel'
    },
    {
      name: 'Spicy BBQ',
      description: 'Bold and zesty with a perfect kick of heat',
      highlights: [
        'Smoky BBQ flavor',
        'Mild spicy kick',
        'Savory blend of spices'
      ],
      image: '/api/placeholder/cocochips/flavor-bbq'
    }
  ];

  return (
    <div>
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Our Flavors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flavors.map((flavor, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={flavor.image}
                alt={`${flavor.name} Coco Chips`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{flavor.name}</h3>
                <p className="text-gray-600 mb-4">{flavor.description}</p>
                <ul className="space-y-2">
                  {flavor.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Serving Suggestions */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Serving Suggestions</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Snack Time</h3>
              <p className="text-gray-600">Perfect straight out of the bag for a healthy snack</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Topping</h3>
              <p className="text-gray-600">Sprinkle on yogurt, smoothie bowls, or ice cream</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Trail Mix</h3>
              <p className="text-gray-600">Mix with nuts and dried fruits for a healthy trail mix</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flavors;