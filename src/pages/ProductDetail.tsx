import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProductById } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.images || [product.imageUrl];

  const handleBuyOnShopify = () => {
    // In a real implementation, this would redirect to Shopify
    window.alert('Redirecting to Shopify checkout...');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="outline" asChild className="mb-8">
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <Card className="overflow-hidden border-0 product-card-shadow">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </Card>
            
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 border-2 rounded overflow-hidden ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Badge variant="outline">{product.category}</Badge>
                {product.featured && (
                  <Badge variant="secondary" className="bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                )}
                {product.trending && (
                  <Badge variant="outline">Trending</Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t border-b border-border py-6">
              <div className="text-4xl font-bold text-primary mb-2">
                ${product.price}
              </div>
              <p className="text-sm text-muted-foreground">
                Price includes all taxes and fees
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full" 
                onClick={handleBuyOnShopify}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Buy on Shopify
              </Button>
              
              <div className="flex gap-2">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="mr-2 h-4 w-4" />
                  Add to Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Product Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Category:</span>
                    <span className="text-foreground">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="text-foreground">
                      {product.category === 'Timber' ? 'Premium Wood' : 
                       product.category === 'Stone' ? 'Natural Stone' : 
                       'Mixed Materials'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Finish:</span>
                    <span className="text-foreground">Hand-finished</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Care:</span>
                    <span className="text-foreground">See care instructions</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Shipping & Returns</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Free shipping on orders over $500</p>
                  <p>• Standard delivery: 5-7 business days</p>
                  <p>• Express delivery available</p>
                  <p>• 30-day return policy</p>
                  <Link to="/shipping" className="text-primary hover:underline text-sm">
                    View full shipping & return policy →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;