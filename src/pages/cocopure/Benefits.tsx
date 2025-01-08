import React from 'react';
import { Heart, Award, Star, Shield } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: 'Heart Healthy',
      description: 'Rich in healthy fats that support cardiovascular health'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Pure Quality',
      description: '100% pure coconut, no additives or preservatives'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Versatile Use',
      description: 'Perfect for cooking, skincare, and hair care'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Natural Defense',
      description: 'Packed with antioxidants and immune-boosting properties'
    }
  ];

  const features = [
    {
      title: 'Cold-Pressed',
      description: 'Extracted using traditional cold-pressing method to preserve nutrients'
    },
    {
      title: 'Organic',
      description: 'Made from certified organic coconuts'
    },
    {
      title: 'Sustainable',
      description: 'Environmentally conscious production process'
    }
  ];

  return (
    <div>
      {/* Benefits Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-lg">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benefits;