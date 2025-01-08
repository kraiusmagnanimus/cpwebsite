// src/components/home/AnimatedCounter.tsx
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { Users, Globe, Calendar, Leaf } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [ref, isVisible] = useIntersectionObserver();

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    label: 'Happy Customers',
    value: 10000,
    suffix: '+',
    duration: 2000,
  },
  {
    icon: <Globe className="w-8 h-8" />,
    label: 'Countries',
    value: 50,
    suffix: '+',
    duration: 1500,
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    label: 'Years in Business',
    value: 15,
    suffix: '',
    duration: 1000,
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    label: 'Sustainability Score',
    value: 95,
    suffix: '%',
    duration: 1700,
  },
];

const AnimatedCounter: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="flex justify-center mb-4 text-blue-600">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold mb-2 text-gray-900">
            <Counter 
              end={stat.value} 
              duration={stat.duration} 
              suffix={stat.suffix} 
            />
          </div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCounter;