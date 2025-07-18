import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ReviewsList from '@/components/ReviewsList';
import AddReview from '@/components/AddReview';
import ReviewStars from '@/components/ReviewStars';
import { getProductById } from '@/data/products';
import { Review, ReviewSummary } from '@/types/review';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewSummary, setReviewSummary] = useState<ReviewSummary>({
    averageRating: 0,
    totalReviews: 0,
    ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  });

  useEffect(() => {
    if (product) {
      loadReviews();
    }
  }, [product]);

  const loadReviews = () => {
    try {
      const allReviews = JSON.parse(localStorage.getItem('productReviews') || '[]');
      const productReviews = allReviews.filter((review: Review) => review.productId === id);
      
      setReviews(productReviews);
      calculateReviewSummary(productReviews);
    } catch (error) {
      console.error('Error loading reviews:', error);
      setReviews([]);
    }
  };

  const calculateReviewSummary = (reviewList: Review[]) => {
    if (reviewList.length === 0) {
      setReviewSummary({
        averageRating: 0,
        totalReviews: 0,
        ratingDistribution: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
      });
      return;
    }

    const totalRating = reviewList.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = totalRating / reviewList.length;
    
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviewList.forEach(review => {
      distribution[review.rating as keyof typeof distribution]++;
    });

    setReviewSummary({
      averageRating,
      totalReviews: reviewList.length,
      ratingDistribution: distribution
    });
  };

  const handleReviewAdded = (newReview: Review) => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    calculateReviewSummary(updatedReviews);
  };

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
    // In a real implementation, this would redirect to checkout
    window.alert('Redirecting to checkout...');
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
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl font-bold text-primary">
                  ₹{product.price.toLocaleString('en-IN')}
                </div>
                {reviewSummary.totalReviews > 0 && (
                  <div className="flex items-center gap-2">
                    <ReviewStars rating={Math.round(reviewSummary.averageRating)} size="sm" />
                    <span className="text-sm text-muted-foreground">
                      ({reviewSummary.averageRating.toFixed(1)}) {reviewSummary.totalReviews} review{reviewSummary.totalReviews !== 1 && 's'}
                    </span>
                  </div>
                )}
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
                Buy Now
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
                    <span className="text-muted-foreground">Type:</span>
                    <span className="text-foreground">
                      {product.category === 'Electronics' ? 'Consumer Electronics' : 
                       product.category === 'Home Appliances' ? 'Smart Appliances' : 
                       product.category === 'Audio' ? 'Audio Equipment' :
                       product.category === 'Daily Needs' ? 'Daily Essential Gadgets' :
                       'Smart Home Device'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Warranty:</span>
                    <span className="text-foreground">1 Year Manufacturer Warranty</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Support:</span>
                    <span className="text-foreground">24/7 Customer Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shipping Info */}
            <Card className="border-0 bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Shipping & Returns</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Free shipping on orders over ₹25,000</p>
                  <p>• Standard delivery: 3-5 business days</p>
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

        {/* Reviews Section */}
        <div className="mt-16">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="reviews">
                Reviews ({reviewSummary.totalReviews})
              </TabsTrigger>
              <TabsTrigger value="write-review">Write a Review</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reviews" className="mt-6">
              <ReviewsList reviews={reviews} summary={reviewSummary} />
            </TabsContent>
            
            <TabsContent value="write-review" className="mt-6">
              <AddReview 
                productId={product.id} 
                onReviewAdded={handleReviewAdded}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;