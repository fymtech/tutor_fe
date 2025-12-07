import { Link } from "react-router";
import { User, Star } from "lucide-react";

interface TutorCardProps {
  id: string;
  name: string;
  subject: string;
  rating: number;
  imageUrl?: string;
  price: number;
}

export function TutorCard({ id, name, subject, rating, imageUrl, price }: TutorCardProps) {
  return (
    <Link to={`/tutors/${id}`} className="block group">
      <div className="bg-white dark:bg-card border border-border shadow-sm rounded-2xl overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
        <div className="relative h-56 bg-muted">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/20 text-secondary-foreground">
              <User className="w-16 h-16" />
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold shadow-sm flex items-center gap-1">
             <Star className="w-3 h-3 text-yellow-500 fill-current" /> {rating.toFixed(1)}
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
             <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">{name}</h3>
          </div>
          <p className="text-sm text-secondary font-medium mb-3">{subject}</p>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
            <div>
                <p className="text-xs text-muted-foreground">Hourly Rate</p>
                <p className="text-lg font-bold text-primary">${price}</p>
            </div>
            <button className="px-4 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-xl hover:bg-secondary/90 transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
