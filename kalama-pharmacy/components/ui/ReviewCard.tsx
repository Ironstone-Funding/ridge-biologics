interface ReviewCardProps {
  name: string;
  type: string;
  rating?: number;
  review: string;
}

export default function ReviewCard({ name, type, rating = 5, review }: ReviewCardProps) {
  return (
    <div className="card-base p-7 flex flex-col">
      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-kp-gold" : "text-kp-border"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-kp-text-muted italic leading-relaxed flex-1 mb-6">
        &ldquo;{review}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center gap-3 pt-4 border-t border-kp-border-light">
        <div className="w-10 h-10 rounded-full bg-kp-green-pale flex items-center justify-center flex-shrink-0">
          <span className="text-kp-green font-bold text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-kp-text text-sm">{name}</p>
          <p className="text-xs text-kp-text-light">{type}</p>
        </div>
      </div>
    </div>
  );
}
