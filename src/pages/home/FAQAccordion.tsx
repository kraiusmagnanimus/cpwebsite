// src/components/home/FAQAccordion.tsx
import React, { useState, useMemo } from 'react';
import { ChevronDown, Search } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  isPopular: boolean;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "What makes Cocopure different from other coconut oils?",
    answer: "Cocopure is extracted using a proprietary cold-pressing method that preserves all natural nutrients. Our coconuts are sourced from sustainable farms and processed within 48 hours of harvesting.",
    category: "Product",
    isPopular: true
  },
  {
    id: 2,
    question: "How should I store Cocopure products?",
    answer: "Store in a cool, dry place away from direct sunlight. Our products remain fresh for up to 24 months when properly stored.",
    category: "Storage",
    isPopular: true
  },
  {
    id: 3,
    question: "Are your products organic certified?",
    answer: "Yes, all Cocopure products are certified organic by leading international certification bodies.",
    category: "Certification",
    isPopular: false
  },
  // Add more FAQs as needed
];

const categories = ["All", ...faqs.reduce<string[]>((acc, faq) => {
    if (!acc.includes(faq.category)) {
      acc.push(faq.category);
    }
    return acc;
  }, [])];

const FAQAccordion: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => (
          <div
            key={faq.id}
            className="border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium">{faq.question}</span>
                {faq.isPopular && (
                  <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  activeId === faq.id ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                activeId === faq.id ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-4 bg-gray-50 border-t">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFaqs.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No FAQs found matching your criteria.
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;