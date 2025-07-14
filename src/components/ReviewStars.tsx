import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewStarsProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const ReviewStars = ({ rating, size = 'md', interactive = false, onRatingChange }: ReviewStarsProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const handleStarClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={cn(
            sizeClasses[size],
            star <= rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-muted-foreground',
            interactive && 'cursor-pointer hover:scale-110 transition-transform'
          )}
          onClick={() => handleStarClick(star)}
        />
      ))}
    </div>
  );
};

export default ReviewStars;