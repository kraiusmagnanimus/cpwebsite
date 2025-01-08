// Navigation Types
export interface MenuItem {
    title: string;
    path: string;
    submenu?: SubMenuItem[];
  }
  
  export interface SubMenuItem {
    title: string;
    path: string;
    description?: string;
  }
  
  // Product Types
  export interface Product {
    id: string;
    name: string;
    description: string;
    benefits: string[];
    features: string[];
    ingredients?: string[];
    flavors?: string[];
    nutritionalInfo?: {
      [key: string]: string | number;
    };
  }
  
  // Review Types
  export interface Review {
    id: string;
    author: string;
    rating: number;
    content: string;
    date: string;
    product: string;
  }
  
  // Contact Form Types
  export interface ContactForm {
    name: string;
    email: string;
    subject: string;
    message: string;
  }