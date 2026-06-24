import ReviewCard from "@/components/ui/ReviewCard";
import Link from "next/link";

const reviews = [
  {
    name: "Sarah M.",
    type: "Local Patient",
    rating: 5,
    review:
      "The staff at Kalama Pharmacy genuinely care about their patients. They took the time to explain my new medications and made sure I felt confident about my treatment plan. I couldn't ask for better service.",
  },
  {
    name: "James T.",
    type: "Kalama Resident",
    rating: 5,
    review:
      "I've been coming here for years and wouldn't go anywhere else. The pharmacists know my name, know my medications, and always go above and beyond to make sure I'm taken care of. This is what community pharmacy should look like.",
  },
  {
    name: "Linda K.",
    type: "Family Caregiver",
    rating: 5,
    review:
      "Managing medications for my elderly mother was overwhelming until we found Kalama Pharmacy. Their medication synchronization service has been a lifesaver — one pickup date for everything. Highly recommend.",
  },
  {
    name: "Robert H.",
    type: "Long-time Customer",
    rating: 5,
    review:
      "Best pharmacy in the area, hands down. They helped me find a savings program that cut my prescription costs significantly. The team here truly looks out for you.",
  },
  {
    name: "Maria S.",
    type: "Local Patient",
    rating: 5,
    review:
      "What sets Kalama Pharmacy apart is the personal attention. They take the time to answer every question and never make you feel rushed. That kind of care is rare and I'm grateful for it.",
  },
  {
    name: "Tom W.",
    type: "Kalama Resident",
    rating: 5,
    review:
      "Professional, caring, and always available to help. When I had a question about a drug interaction late in the day, they took the time to explain everything thoroughly. True community pharmacy at its best.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center mb-14">
          <p className="section-label">Patient Stories</p>
          <h2 className="section-title">What Our Community Says</h2>
          <div className="w-12 h-1 bg-kp-gold rounded-full mx-auto mt-5" />

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-6 h-6 text-kp-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="text-kp-text-muted text-sm">
              <span className="font-semibold text-kp-text">5.0</span> — Based on community reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/reviews" className="btn-outline-green">
            Read More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}
