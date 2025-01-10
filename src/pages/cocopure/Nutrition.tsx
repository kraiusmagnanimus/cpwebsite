import React from 'react';
import { Leaf, Heart, Shield } from 'lucide-react';

const Nutrition = () => {
  const nutritionalInfo = {
    servingSize: '1 tablespoon (15ml)',
    servingsPerContainer: 'About 30',
    nutrients: [
      { name: 'Calories', amount: '120', dailyValue: '' },
      { name: 'Total Fat', amount: '14g', dailyValue: '18%' },
      { name: 'Saturated Fat', amount: '12g', dailyValue: '60%' },
      { name: 'Trans Fat', amount: '0g', dailyValue: '' },
      { name: 'Cholesterol', amount: '0mg', dailyValue: '0%' },
      { name: 'Sodium', amount: '0mg', dailyValue: '0%' },
      { name: 'Total Carbohydrate', amount: '0g', dailyValue: '0%' },
      { name: 'Dietary Fiber', amount: '0g', dailyValue: '0%' },
      { name: 'Total Sugars', amount: '0g', dailyValue: '' },
      { name: 'Protein', amount: '0g', dailyValue: '' },
      { name: 'Vitamin D', amount: '0mcg', dailyValue: '0%' },
      { name: 'Iron', amount: '0mg', dailyValue: '0%' },
      { name: 'Potassium', amount: '0mg', dailyValue: '0%' }
    ]
  };

  const healthBenefits = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: 'MCT Content',
      description: 'Rich in Medium Chain Triglycerides for quick energy'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Heart Health',
      description: 'Supports healthy cholesterol levels'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-500" />,
      title: 'Immune Support',
      description: 'Contains lauric acid for immune system support'
    }
  ];

  return (
    <div>
      {/* Nutrition Facts */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Nutrition Facts</h2>
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl">
          <p className="text-lg mb-4">Serving Size {nutritionalInfo.servingSize}</p>
          <p className="mb-4">Servings Per Container {nutritionalInfo.servingsPerContainer}</p>
          
          <div className="border-t-8 border-b-4 border-black py-2">
            <p className="text-4xl font-bold">Nutrition Facts</p>
          </div>
          
          {nutritionalInfo.nutrients.map((nutrient, index) => (
            <div 
              key={index} 
              className={`py-2 flex justify-between items-center ${
                index !== nutritionalInfo.nutrients.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <span className="font-medium">{nutrient.name} {nutrient.amount}</span>
              {nutrient.dailyValue && <span>{nutrient.dailyValue}</span>}
            </div>
          ))}
          
          <p className="mt-4 text-sm text-gray-600">
            * Percent Daily Values are based on a 2,000 calorie diet.
          </p>
        </div>
      </section>

      {/* Health Benefits */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Nutritional Benefits</h2>
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