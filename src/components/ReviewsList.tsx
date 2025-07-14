import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ReviewStars from './ReviewStars';
import { Review, ReviewSummary } from '@/types/review';
import { formatDistanceToNow } from 'date-fns';
import { CheckCircle, User } from 'lucide-react';

interface ReviewsListProps {
  reviews: Review[];
  summary: ReviewSummary;
}

const ReviewsList = ({ reviews, summary }: ReviewsListProps) => {
  const getRatingLabel = (rating: number) => {
    switch (rating) {
      case 5: return 'Excellent';
      case 4: return 'Very Good';
      case 3: return 'Good';
      case 2: return 'Fair';
      case 1: return 'Poor';
      default: return '';
    }
  };

  if (reviews.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <div className="text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-semibold mb-2">No Reviews Yet</h3>
            <p>Be the first to review this product and help others make informed decisions.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Review Summary */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {summary.averageRating.toFixed(1)}
              </div>
              <ReviewStars rating={Math.round(summary.averageRating)} size="lg" />
              <div className="text-sm text-muted-foreground mt-2">
                Based on {summary.totalReviews} review{summary.totalReviews !== 1 && 's'}
              </div>
            </div>
            
            <div className="flex-1">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm w-8">{rating} ★</span>
                    <div className="flex-1 bg-muted rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                        style={{ 
                          width: `${summary.totalReviews > 0 
                            ? (summary.ratingDistribution[rating as keyof typeof summary.ratingDistribution] / summary.totalReviews) * 100 
                            : 0}%` 
                        }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8">
                      {summary.ratingDistribution[rating as keyof typeof summary.ratingDistribution]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <Card key={review.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{review.userName}</span>
                        {review.verified && (
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <CheckCircle className="h-3 w-3" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(review.date), { addSuffix: true })}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <ReviewStars rating={review.rating} size="sm" />
                    <div className="text-xs text-muted-foreground mt-1">
                      {getRatingLabel(review.rating)}
                    </div>
                  </div>
                </div>
                
                <p className="text-foreground leading-relaxed">{review.comment}</p>
              </div>
              
              {index < reviews.length - 1 && <Separator className="mt-4" />}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewsList;