import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Home, Volume2, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getFeaturedProducts, getTrendingProducts } from '@/data/products';

const Index = () => {
  const featuredProducts = getFeaturedProducts();
  const trendingProducts = getTrendingProducts();

  const categories = [
    {
      name: 'Electronics',
      description: 'Latest consumer electronics and gadgets',
      icon: Smartphone,
      href: '/products?category=Electronics'
    },
    {
      name: 'Home Appliances',
      description: 'Smart appliances for modern living',
      icon: Home,
      href: '/products?category=Home Appliances'
    },
    {
      name: 'Audio',
      description: 'Premium audio equipment and speakers',
      icon: Volume2,
      href: '/products?category=Audio'
    },
    {
      name: 'Smart Home',
      description: 'Connected devices for intelligent homes',
      icon: Wifi,
      href: '/products?category=Smart Home'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Smart Living for Modern Homes
            </h1>
            <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
              Discover our curated collection of premium electronics and smart home gadgets. 
              Each product is carefully selected to enhance your modern lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-primary hover:bg-background/90">
                <Link to="/products">
                  Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From cutting-edge electronics to smart home devices, find the perfect technology to enhance your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.name} className="hover-lift cursor-pointer border-0 product-card-shadow">
                <Link to={category.href}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                      <category.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked selections from our premium collection
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trending Now
              </h2>
              <p className="text-lg text-muted-foreground">
                Popular items our customers love
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
