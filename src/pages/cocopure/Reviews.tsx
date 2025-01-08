import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: '1',
      author: 'Sarah J.',
      rating: 5,
      date: '2024-01-15',
      content: 'I love how pure and versatile this coconut oil is. I use it for cooking and skincare!'
    },
    {
      id: '2',
      author: 'Michael R.',
      rating: 5,
      date: '2024-01-10',
      content: 'Best coconut oil I\'ve tried. The cold-pressed process really makes a difference in taste.'
    },
    {
      id: '3',
      author: 'Emma L.',
      rating: 4,
      date: '2024-01-05',
      content: 'Great quality product. I appreciate that it\'s organic and sustainably sourced.'
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