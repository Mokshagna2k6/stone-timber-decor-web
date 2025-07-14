// Import generated images
import wirelessHeadphones from '../assets/wireless-headphones.jpg';
import securityCamera from '../assets/security-camera.jpg';
import robotVacuum from '../assets/robot-vacuum.jpg';
import smartTV from '../assets/smart-tv.jpg';
import bluetoothSpeaker from '../assets/bluetooth-speaker.jpg';
import airPurifier from '../assets/air-purifier.jpg';
import electricKettle from '../assets/electric-kettle.jpg';
import fitnessTracker from '../assets/fitness-tracker.jpg';
import mosquitoKillerLamp from '../assets/mosquito-killer-lamp.jpg';
import usbElectricFan from '../assets/usb-electric-fan.jpg';
import neckFan from '../assets/neck-fan.jpg';
import waterproofSpeaker from '../assets/waterproof-speaker.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Electronics' | 'Home Appliances' | 'Audio' | 'Smart Home' | 'Daily Needs';
  imageUrl: string;
  images?: string[];
  featured?: boolean;
  trending?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 12999,
    description: 'High-quality noise-canceling wireless headphones with premium sound quality and long battery life. Perfect for music lovers and professionals.',
    category: 'Audio',
    imageUrl: wirelessHeadphones,
    images: [wirelessHeadphones, wirelessHeadphones, wirelessHeadphones],
    featured: true,
    trending: true
  },
  {
    id: '2',
    name: 'Smart Security Camera System',
    price: 8999,
    description: 'Advanced home security camera with HD recording, night vision, and smartphone connectivity. Monitor your home from anywhere.',
    category: 'Smart Home',
    imageUrl: securityCamera,
    images: [securityCamera, securityCamera]
  },
  {
    id: '3',
    name: 'Robot Vacuum Cleaner',
    price: 24999,
    description: 'Intelligent robotic vacuum with smart mapping, app control, and powerful suction. Keep your home clean effortlessly.',
    category: 'Home Appliances',
    imageUrl: robotVacuum,
    images: [robotVacuum, robotVacuum],
    trending: true
  },
  {
    id: '4',
    name: 'Smart LED TV 55"',
    price: 45999,
    description: '4K Ultra HD Smart TV with built-in streaming apps, voice control, and stunning picture quality for the ultimate viewing experience.',
    category: 'Electronics',
    imageUrl: smartTV,
    images: [smartTV, smartTV],
    featured: true
  },
  {
    id: '5',
    name: 'Portable Bluetooth Speaker',
    price: 4999,
    description: 'High-fidelity portable speaker with deep bass, waterproof design, and 12-hour battery life. Perfect for outdoor adventures.',
    category: 'Audio',
    imageUrl: bluetoothSpeaker,
    images: [bluetoothSpeaker]
  },
  {
    id: '6',
    name: 'Smart Air Purifier',
    price: 15999,
    description: 'HEPA filter air purifier with smart sensors, app control, and real-time air quality monitoring for healthier indoor air.',
    category: 'Home Appliances',
    imageUrl: airPurifier,
    images: [airPurifier, airPurifier]
  },
  {
    id: '7',
    name: 'Electric Kettle Premium',
    price: 3999,
    description: 'Stainless steel electric kettle with temperature control, LED display, and rapid boiling technology for perfect beverages.',
    category: 'Home Appliances',
    imageUrl: electricKettle,
    images: [electricKettle, electricKettle]
  },
  {
    id: '8',
    name: 'Smart Fitness Tracker',
    price: 6999,
    description: 'Advanced fitness tracker with heart rate monitoring, GPS, sleep tracking, and smartphone notifications for active lifestyles.',
    category: 'Electronics',
    imageUrl: fitnessTracker,
    images: [fitnessTracker, fitnessTracker, fitnessTracker]
  },
  {
    id: '9',
    name: 'Electronic Mosquito Killer Lamp',
    price: 2499,
    description: 'UV LED mosquito killer lamp with elegant design. Safe, chemical-free pest control for your home with modern aesthetics.',
    category: 'Daily Needs',
    imageUrl: mosquitoKillerLamp,
    images: [mosquitoKillerLamp, mosquitoKillerLamp],
    featured: true
  },
  {
    id: '10',
    name: 'USB Electric Fan Air Cooler',
    price: 1999,
    description: 'Compact desktop USB fan with multiple speed settings and LED display. Perfect for office and personal cooling needs.',
    category: 'Daily Needs',
    imageUrl: usbElectricFan,
    images: [usbElectricFan, usbElectricFan]
  },
  {
    id: '11',
    name: 'Portable Bladeless Neck Fan',
    price: 3499,
    description: 'Innovative wearable neck fan with bladeless design. Rechargeable and hands-free personal cooling for active lifestyles.',
    category: 'Daily Needs',
    imageUrl: neckFan,
    images: [neckFan, neckFan, neckFan],
    featured: true,
    trending: true
  },
  {
    id: '12',
    name: 'Waterproof Bluetooth Speaker',
    price: 7999,
    description: 'Large suction cup waterproof Bluetooth speaker with powerful bass. Perfect for shower, pool, and outdoor adventures.',
    category: 'Audio',
    imageUrl: waterproofSpeaker,
    images: [waterproofSpeaker, waterproofSpeaker],
    trending: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getTrendingProducts = (): Product[] => {
  return products.filter(product => product.trending);
};