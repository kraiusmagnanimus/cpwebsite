import React from 'react';
import { Droplet, Heart, Leaf, Award, Battery, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Benefits = () => {
  const benefits = [
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Natural Hydration',
      description: 'Cocopure is made from real coconut water, packed with essential electrolytes like potassium, magnesium, and calcium, ensuring optimal hydration for your body.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Healthier Alternative',
      description: 'Unlike sugary soft drinks, Cocopure is low in calories and free from artificial additives, making it a guilt-free beverage option that supports a healthier lifestyle.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-50',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Flavorful Variety',
      description: 'Enjoy the natural goodness of coconut water with exciting flavors like Mango, Pineapple, Blue Lemonade, Four Seasons, and Apple Green Tea, catering to diverse taste preferences.',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Sustainably Sourced',
      description: 'Cocopure is crafted with a commitment to sustainability, using eco-friendly practices that support local communities and promote environmental consciousness.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Daily Energy Boost',
      description: 'With its natural sugars and electrolytes, Cocopure is an excellent choice to replenish energy levels and refresh your body after workouts or daily activities.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Immune Support',
      description: 'Rich in antioxidants, Cocopure helps combat free radicals and supports a stronger immune system, contributing to overall well-being.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    }
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

      {/* Comparison Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Why Choose Cocopure?</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-green-600">Cocopure</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Leaf className="w-5 h-5 text-green-500 mr-2" />
                  Natural electrolytes
                </li>
                <li className="flex items-center text-gray-700">
                  <Leaf className="w-5 h-5 text-green-500 mr-2" />
                  No artificial sweeteners
                </li>
                <li className="flex items-center text-gray-700">
                  <Leaf className="w-5 h-5 text-green-500 mr-2" />
                  Real coconut water
                </li>
                <li className="flex items-center text-gray-700">
                  <Leaf className="w-5 h-5 text-green-500 mr-2" />
                  Sustainably sourced
                </li>
              </ul>
            </div>
            <div className="p-8 bg-gray-50">
              <h3 className="text-xl font-bold mb-4 text-red-600">Regular Soft Drinks</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  Artificial ingredients
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  High sugar content
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  Artificial flavors
                </li>
                <li className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 text-red-500 mr-2" />
                  Environmental impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section>
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ready to Experience the Cocopure Difference?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have made the switch to a healthier, more refreshing beverage choice.
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors">
            Find a Store Near You
          </button>
        </div>
      </section>
    </div>
  );
};

export default Benefits;