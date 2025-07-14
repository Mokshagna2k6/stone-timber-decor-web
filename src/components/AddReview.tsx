import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ReviewStars from './ReviewStars';
import { Review } from '@/types/review';
import { useToast } from '@/hooks/use-toast';

interface AddReviewProps {
  productId: string;
  onReviewAdded: (review: Review) => void;
}

const AddReview = ({ productId, onReviewAdded }: AddReviewProps) => {
  const [userName, setUserName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userName.trim() || rating === 0 || !comment.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select a rating.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const newReview: Review = {
        id: Date.now().toString(),
        productId,
        userName: userName.trim(),
        rating,
        comment: comment.trim(),
        date: new Date().toISOString(),
        verified: false
      };

      // Get existing reviews from localStorage
      const existingReviews = JSON.parse(localStorage.getItem('productReviews') || '[]');
      const updatedReviews = [...existingReviews, newReview];
      localStorage.setItem('productReviews', JSON.stringify(updatedReviews));

      onReviewAdded(newReview);
      
      // Reset form
      setUserName('');
      setRating(0);
      setComment('');
      
      toast({
        title: "Review Added!",
        description: "Thank you for your feedback. Your review has been posted."
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Write a Review</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="userName">Your Name</Label>
            <Input
              id="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex items-center gap-2">
              <ReviewStars
                rating={rating}
                interactive
                onRatingChange={setRating}
                size="lg"
              />
              <span className="text-sm text-muted-foreground">
                ({rating > 0 ? rating : 'Select'} star{rating !== 1 && 's'})
              </span>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comment">Your Review</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your experience with this product..."
              rows={4}
              required
            />
          </div>
          
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Submitting...' : 'Submit Review'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddReview;