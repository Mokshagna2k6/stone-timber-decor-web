import { Package, Truck, RotateCcw, Shield, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shipping & Returns
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to getting your beautiful timber and stone pieces to you safely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Shipping Information */}
          <Card className="border-0 product-card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Shipping Options</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-primary" />
                      <span className="font-medium">Standard Shipping</span>
                    </div>
                    <span className="text-muted-foreground">5-7 business days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="font-medium">Express Shipping</span>
                    </div>
                    <span className="text-muted-foreground">2-3 business days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="font-medium">Local Delivery</span>
                    </div>
                    <span className="text-muted-foreground">1-2 business days</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-foreground mb-3">Shipping Costs</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Orders under $200:</span>
                    <span className="text-foreground">$25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Orders $200-$499:</span>
                    <span className="text-foreground">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-medium">Orders $500+:</span>
                    <span className="text-primary font-medium">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Express shipping:</span>
                    <span className="text-foreground">+$20</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-foreground mb-3">Special Handling</h3>
                <p className="text-sm text-muted-foreground">
                  Large or fragile items may require special handling. Additional shipping costs 
                  and delivery timeframes will be communicated before order confirmation.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Returns Information */}
          <Card className="border-0 product-card-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="h-5 w-5 text-primary" />
                Returns & Exchanges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Return Policy</h3>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      30-day return window for most items
                    </p>
                  </div>
                  <p className="text-muted-foreground">
                    Items must be in original condition, unused, and in original packaging. 
                    Custom or personalized items cannot be returned unless defective.
                  </p>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-foreground mb-3">Return Process</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">1.</span>
                    Contact our customer service team
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">2.</span>
                    Receive return authorization and shipping label
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">3.</span>
                    Package item securely and ship
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium text-primary">4.</span>
                    Refund processed within 5-7 business days
                  </li>
                </ol>
              </div>

              <Separator />

              <div>
                <h3 className="font-semibold text-foreground mb-3">Return Costs</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Defective items:</span>
                    <span className="text-primary">FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Change of mind:</span>
                    <span className="text-foreground">Customer pays</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Wrong item sent:</span>
                    <span className="text-primary">FREE</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 bg-muted/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Quality Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Every piece is carefully inspected before shipping. If you receive a damaged 
                or defective item, we'll replace it at no cost or provide a full refund.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 bg-muted/30">
            <CardHeader>
              <CardTitle>Order Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                You'll receive tracking information via email once your order ships. 
                Track your package in real-time and get delivery notifications.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-12 border-0 bg-primary/5">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Questions About Your Order?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our customer service team is here to help with any shipping or return questions. 
              Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@timbernstone.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Email Support
              </a>
              <a 
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
              >
                Call Us
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Shipping;