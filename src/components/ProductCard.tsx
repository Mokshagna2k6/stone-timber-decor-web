import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden product-card-shadow hover-lift border-0">
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {product.featured && (
              <Badge variant="secondary" className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            )}
            {product.trending && (
              <Badge variant="outline" className="bg-background/90">
                Trending
              </Badge>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
            <div className="flex justify-between items-center pt-2">
              <span className="text-2xl font-bold text-primary">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProductCard;