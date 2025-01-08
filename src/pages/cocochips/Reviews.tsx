import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: '1',
      author: 'Alex M.',
      rating: 5,
      date: '2024-01-15',
      content: 'The Caramel Sea Salt flavor is incredible! Perfect balance of sweet and salty.',
      flavor: 'Caramel Sea Salt'
    },
    {
      id: '2',
      author: 'Jessica K.',
      rating: 5,
      date: '2024-01-10',
      content: 'Love the spicy BBQ! It\'s got just the right amount of kick to it.',
      flavor: 'Spicy BBQ'
    },
    {
      id: '3',
      author: 'David R.',
      rating: 4,
      date: '2024-01-05',
      content: 'The original flavor is great for snacking. My kids love them too!',
      flavor: 'Original'
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>
      
      {/* Overall Rating */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            {renderStars(4.7)}
          </div>
          <span className="text-2xl font-bold">4.7 out of 5</span>
        </div>
        <p className="text-gray-600 mt-2">Based on {reviews.length} reviews</p>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-lg">{review.author}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-gray-500 text-sm">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm mt-2">
                  {review.flavor}
                </span>
              </div>
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;