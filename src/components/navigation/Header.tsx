// src/components/navigation/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

interface SubMenuItem {
  title: string;
  description: string;
  path: string;
}

interface MenuItem {
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}

const navigation: MenuItem[] = [
  {
    title: 'Cocopure',
    path: '/cocopure',
    submenu: [
      {
        title: 'Flavors',
        description: 'Explore our range of coconut oil variations',
        path: '/cocopure/flavors'
      },
      {
        title: 'Benefits & Features',
        description: 'Discover the amazing benefits of our premium coconut oil',
        path: '/cocopure/benefits'
      },
      {
        title: 'Nutritional Facts',
        description: 'Learn about the nutritional content',
        path: '/cocopure/nutrition'
      },
      {
        title: 'Reviews',
        description: 'See what our customers are saying',
        path: '/cocopure/reviews'
      }
    ]
  },
  {
    title: 'Cocobites',
    path: '/cocobites',
    submenu: [
      {
        title: 'Flavors',
        description: 'Explore our delicious range of flavors',
        path: '/cocobites/flavors'
      },
      {
        title: 'Benefits & Features',
        description: 'Discover what makes our coconut chips special',
        path: '/cocobites/benefits'
      },
      {
        title: 'Nutritional Facts',
        description: 'Check out the nutritional information',
        path: '/cocobites/nutrition'
      },
      {
        title: 'Reviews',
        description: 'Read customer reviews and testimonials',
        path: '/cocobites/reviews'
      }
    ]
  },
  {
    title: 'Contact',
    path: '/contact'
  }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className={`text-2xl font-bold transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
          >
            KG Global Bevarages and Food Inc.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.path} className="relative group">
                {item.submenu ? (
                  // Menu items with submenu
                  <button
                    className={`flex items-center space-x-1 py-2 transition-colors ${
                      isScrolled || !isHomePage ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                    }`}
                    onMouseEnter={() => setActiveMenu(item.path)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  // Regular menu items
                  <Link
                    to={item.path}
                    className={`py-2 transition-colors ${
                      isScrolled || !isHomePage ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Mega Menu */}
                {item.submenu && activeMenu === item.path && (
                  <div
                    className="absolute left-0 w-screen max-w-md pt-4 transition-all duration-300"
                    onMouseEnter={() => setActiveMenu(item.path)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="bg-white rounded-lg shadow-xl p-6">
                      <div className="grid gap-6">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="group/item flex flex-col hover:bg-gray-50 rounded-lg p-4 transition-colors"
                          >
                            <span className="font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors">
                              {subItem.title}
                            </span>
                            <span className="mt-1 text-sm text-gray-500">
                              {subItem.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled || !isHomePage ? 'text-gray-600 hover:text-gray-900' : 'text-white hover:text-gray-200'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white">
            {navigation.map((item) => (
              <div key={item.path} className="space-y-2">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setActiveMenu(activeMenu === item.path ? null : item.path)}
                      className="flex items-center justify-between w-full py-2 text-gray-600"
                    >
                      <span>{item.title}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          activeMenu === item.path ? 'rotate-180' : ''
                        }`} 
                      />
                    </button>
                    {activeMenu === item.path && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="block py-2 text-gray-500 hover:text-gray-900"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;