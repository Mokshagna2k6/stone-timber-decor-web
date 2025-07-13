// Import generated images
import oakTable from '../assets/oak-dining-table.jpg';
import limestonePanel from '../assets/limestone-panels.jpg';
import reclaimedArt from '../assets/reclaimed-wood-art.jpg';
import graniteTable from '../assets/granite-coffee-table.jpg';
import cedarPlanks from '../assets/cedar-planks.jpg';
import slateMosaic from '../assets/slate-mosaic.jpg';
import floatingShelves from '../assets/floating-shelves.jpg';
import marbleConsole from '../assets/marble-console.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Timber' | 'Stone' | 'Wall Decor' | 'Tabletops';
  imageUrl: string;
  images?: string[];
  featured?: boolean;
  trending?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Rustic Oak Dining Table',
    price: 899,
    description: 'Handcrafted from solid oak wood, this dining table features a natural live edge and rustic finish. Perfect for family gatherings and entertaining guests.',
    category: 'Tabletops',
    imageUrl: oakTable,
    images: [oakTable, oakTable, oakTable],
    featured: true,
    trending: true
  },
  {
    id: '2',
    name: 'Limestone Wall Panel Set',
    price: 299,
    description: 'Natural limestone panels perfect for accent walls. Each panel is unique with beautiful natural textures and color variations.',
    category: 'Stone',
    imageUrl: limestonePanel,
    images: [limestonePanel, limestonePanel],
    featured: true
  },
  {
    id: '3',
    name: 'Reclaimed Wood Wall Art',
    price: 149,
    description: 'Artistic wall piece made from reclaimed barn wood. Each piece tells a story with its weathered patina and natural character.',
    category: 'Wall Decor',
    imageUrl: reclaimedArt,
    images: [reclaimedArt, reclaimedArt],
    trending: true
  },
  {
    id: '4',
    name: 'Granite Coffee Table',
    price: 649,
    description: 'Elegant coffee table featuring a polished granite top with natural veining. Supported by a sleek metal base for modern appeal.',
    category: 'Tabletops',
    imageUrl: graniteTable,
    images: [graniteTable, graniteTable],
    featured: true
  },
  {
    id: '5',
    name: 'Cedar Plank Collection',
    price: 89,
    description: 'Premium cedar planks perfect for DIY projects. Naturally resistant to insects and weather, ideal for outdoor applications.',
    category: 'Timber',
    imageUrl: cedarPlanks,
    images: [cedarPlanks]
  },
  {
    id: '6',
    name: 'Slate Tile Mosaic',
    price: 199,
    description: 'Handpicked slate tiles arranged in beautiful mosaic patterns. Perfect for backsplashes, feature walls, or outdoor spaces.',
    category: 'Stone',
    imageUrl: slateMosaic,
    images: [slateMosaic, slateMosaic],
    trending: true
  },
  {
    id: '7',
    name: 'Floating Timber Shelves',
    price: 129,
    description: 'Set of three floating shelves made from sustainable walnut. Clean lines and invisible mounting for a modern minimalist look.',
    category: 'Wall Decor',
    imageUrl: floatingShelves,
    images: [floatingShelves, floatingShelves]
  },
  {
    id: '8',
    name: 'Marble Console Table',
    price: 749,
    description: 'Luxurious console table featuring Carrara marble top with subtle veining. Perfect for entryways or as a statement piece.',
    category: 'Tabletops',
    imageUrl: marbleConsole,
    images: [marbleConsole, marbleConsole, marbleConsole],
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