import React from 'react';
import { Apple, Flame, Heart, Battery, Briefcase, Leaf } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: 'Wholesome Snacking',
      description: 'Cocobites are made from real coconuts, delivering a nutritious and satisfying snack that supports a balanced lifestyle.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Bursting with Flavor',
      description: 'Available in Cheese, BBQ, Sour Cream, and Chocolate, Cocobites offer a variety of bold and delicious flavors to suit every craving.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health-Conscious Alternative',
      description: 'Say goodbye to traditional junk food—Cocobites are a better-for-you option, crafted with natural ingredients and free from unnecessary additives.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Energy and Nutrient Boost',
      description: 'Packed with healthy fats and antioxidants, Cocobites provide a natural energy source while promoting overall wellness.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Perfect On-the-Go Snack',
      description: 'Lightweight, convenient, and irresistibly tasty, Cocobites are the ideal companion for your busy lifestyle.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly Choice',
      description: 'Made from sustainably sourced coconuts, Cocobites align with your values, supporting both personal health and the planet.',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-50',
    }
  ];

  const comparisonPoints = [
    "High in fiber and nutrients",
    "Natural ingredients",
    "No artificial preservatives",
    "Satisfying crunch",
    "Sustainable sourcing",
    "Convenient packaging"
  ];

  return (
    <div>
      {/* Benefits Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`${benefit.bgColor} p-6`}>
              <div className={`${benefit.color} mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Comparison with Traditional Snacks */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Cocobites vs Traditional Snacks</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 text-green-600">The Cocobites Difference</h3>
              <ul className="space-y-4">
                {comparisonPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3">
                      <Leaf className="h-4 w-4 text-green-500" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold mb-6 text-red-600">Traditional Snacks</h3>
              <ul className="space-y-4">
                {[
                  "High in empty calories",
                  "Artificial ingredients",
                  "Added preservatives",
                  "Less nutrient value",
                  "Resource-intensive production",
                  "Excessive packaging"
                ].map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-3">
                      <div className="h-1 w-1 rounded-full bg-red-500"></div>
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready for a Better Snacking Experience?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join the growing community of health-conscious snackers who've discovered the delicious crunch of Cocobites.
          </p>
          <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors">
            Find Cocobites Near You
          </button>
        </div>
      </section>
    </div>
  );
};

export default Benefits;