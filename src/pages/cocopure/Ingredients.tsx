import React from 'react';
import { CheckCircle } from 'lucide-react';

const Ingredients = () => {
  const ingredients = [
    {
      name: '100% Pure Coconut',
      description: 'Carefully selected mature coconuts from organic farms',
      benefits: [
        'Rich in medium-chain triglycerides (MCTs)',
        'Natural source of lauric acid',
        'Contains essential vitamins and minerals'
      ]
    }
  ];

  const nutritionalInfo = {
    servingSize: '1 tablespoon (15ml)',
    calories: '120',
    totalFat: '14g',
    saturatedFat: '12g',
    transFat: '0g',
    cholesterol: '0mg',
    sodium: '0mg',
    totalCarbohydrate: '0g',
    protein: '0g'
  };

  return (
    <div>
      {/* Ingredients Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Ingredients</h2>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold mb-4">{ingredient.name}</h3>
            <p className="text-gray-600 mb-6">{ingredient.description}</p>
            <div className="space-y-3">
              {ingredient.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Nutritional Information */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Nutritional Information</h2>
        <div className="bg-white rounded-xl shadow-lg p-8">
          <p className="text-gray-600 mb-6">Serving Size: {nutritionalInfo.servingSize}</p>
          <div className="border-t border-gray-200">
            {Object.entries(nutritionalInfo).map(([key, value], index) => (
              key !== 'servingSize' && (
                <div key={index} className="py-3 flex justify-between border-b border-gray-200">
                  <span className="font-medium">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span>{value}</span>
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;