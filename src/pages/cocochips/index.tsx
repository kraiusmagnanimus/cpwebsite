import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import subpages
const Flavors = React.lazy(() => import('./Flavors'));
const Nutrition = React.lazy(() => import('./Nutrition'));
const Reviews = React.lazy(() => import('./Reviews'));

const CocochipsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="relative h-[500px] rounded-xl overflow-hidden">
          <img
            src="https://placehold.co/1920x1080"
            alt="Coco Chips Product"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
            <div className="text-white p-8 max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Coco Chips</h1>
              <p className="text-xl">Crispy, delicious, and naturally sweet coconut chips</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nested Routes */}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Flavors />} />
          <Route path="/flavors" element={<Flavors />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};

export default CocochipsPage;