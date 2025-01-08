import React from 'react';
import { Leaf, Heart, Shield } from 'lucide-react';

const Nutrition = () => {
  const nutritionFacts = {
    servingSize: '30g (about 1 oz)',
    servingsPerContainer: 'About 4',
    nutrients: [
      { name: 'Calories', amount: '160', dailyValue: '' },
      { name: 'Total Fat', amount: '14g', dailyValue: '18%' },
      { name: 'Saturated Fat', amount: '12g', dailyValue: '60%' },
      { name: 'Trans Fat', amount: '0g', dailyValue: '' },
      { name: 'Cholesterol', amount: '0mg', dailyValue: '0%' },
      { name: 'Sodium', amount: '140mg', dailyValue: '6%' },
      { name: 'Total Carbohydrate', amount: '9g', dailyValue: '3%' },
      { name: 'Dietary Fiber', amount: '5g', dailyValue: '18%' },
      { name: 'Total Sugars', amount: '2g', dailyValue: '' },
      { name: 'Protein', amount: '2g', dailyValue: '' },
      { name: 'Iron', amount: '1mg', dailyValue: '6%' },
      { name: 'Potassium', amount: '180mg', dailyValue: '4%' }
    ]
  };

  const healthBenefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'High in Fiber',
      description: 'Supports digestive health and helps maintain steady energy levels'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Good Fats',
      description: 'Contains healthy MCTs (Medium Chain Triglycerides)'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'No Preservatives',
      description: '100% natural, no artificial preservatives or additives'
    }
  ];

  return (
    <div>
      {/* Nutrition Facts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Nutrition Facts</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
          <p className="text-lg mb-4">Serving Size {nutritionFacts.servingSize}</p>
          <p className="mb-4">Servings Per Container {nutritionFacts.servingsPerContainer}</p>
          
          <div className="border-t-8 border-b-4 border-black py-2">
            <p className="text-4xl font-bold">Nutrition Facts</p>
          </div>
          
          {nutritionFacts.nutrients.map((nutrient, index) => (
            <div 
              key={index} 
              className={`py-2 flex justify-between items-center ${
                index !== nutritionFacts.nutrients.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <span className="font-medium">{nutrient.name} {nutrient.amount}</span>
              {nutrient.dailyValue && <span>{nutrient.dailyValue}</span>}
            </div>
          ))}
        </div>
      </section>

      {/* Health Benefits */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Health Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {healthBenefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Nutrition;