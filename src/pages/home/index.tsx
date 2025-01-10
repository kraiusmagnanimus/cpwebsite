
import { Link } from 'react-router-dom';
import { Leaf, Heart, Shield } from 'lucide-react';
import ProductComparison from './ProductComparison';
import FAQAccordion from './FAQAccordion';
import ProductSlider from './ProductSlider';

const HomePage = () => {
  const features = [
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: "100% Natural",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: "Health Benefits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Quality Assured",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://placehold.co/1920x1080" 
            alt="Coconut products showcase" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-left">
              Discover the Pure Essence of Coconut
            </h1>
            <p className="text-xl mb-8 animate-slide-right delay-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4 animate-fade-in delay-500">
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
            At KG Global Beverages and Food Inc., we are passionate about creating products that prioritize your health while celebrating the incredible benefits of coconuts. Founded in 2014 and proudly Filipino-owned, we have built a legacy of delivering natural, healthy, and affordable coconut-based beverages and snacks. <br /><br />
Our dedication to quality begins with the remarkable coconut—a fruit that embodies nourishment, sustainability, and versatility. With minimal processing and an emphasis on retaining natural nutrients, we craft products that support hydration, provide essential electrolytes, and promote overall well-being. <br /><br />
From our Cocopure beverages to our Cocobites snacks, every product is a testament to our commitment to delivering healthier alternatives to sugary drinks and junk food. We believe in empowering our consumers to make better choices without compromising on taste or affordability. Together, let’s embrace a healthier, more sustainable way of living with KG Global Beverages and Food Inc.
            </p>
          </div>
        </div>
      </section>
      {/* Products Preview Section */}
      <section className="py-20">
        <ProductSlider />
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Discover the Benefits</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Coconut is a versatile gift of nature, playing a vital role in our daily lives. From its refreshing water to its nutrient-packed meat, coconut supports hydration, boosts energy, and provides essential nutrients. Beyond nutrition, coconut-based products are eco-friendly and sustainable, making them a healthier choice for both you and the planet. Incorporating coconut into your lifestyle is not just a step toward wellness but a commitment to living more naturally.
          </p>
        </div>
      </section>

      {/* Product Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Why Choose Cocopure?</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Slide to compare and discover the Cocopure difference
          </p>
          <ProductComparison />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Find answers to common questions about our products
          </p>
          <FAQAccordion />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter for product updates, health tips, and exclusive offers.
            </p>
            <form className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;