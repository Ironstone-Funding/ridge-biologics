import type { Metadata } from "next";
import ReviewCard from "@/components/ui/ReviewCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what patients and community members say about Kalama Pharmacy's personal service and expert care.",
};

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
      "Managing medications for my elderly mother was overwhelming until we found Kalama Pharmacy. Their medication synchronization service has been a lifesaver — one pickup date for everything. I can't recommend them enough.",
  },
  {
    name: "Robert H.",
    type: "Long-time Customer",
    rating: 5,
    review:
      "Best pharmacy in the area, hands down. They helped me find a savings program that cut my prescription costs significantly. The team here truly looks out for you. Very thankful.",
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
  {
    name: "Carol A.",
    type: "New Patient",
    rating: 5,
    review:
      "I transferred my prescriptions here after feeling lost at a big chain pharmacy. What a difference. I actually feel like they know who I am and what I need. Will never go back to a chain.",
  },
  {
    name: "David P.",
    type: "Kalama Resident",
    rating: 5,
    review:
      "They helped me navigate Medicare Part D enrollment and found me a plan that saved me over a hundred dollars a month. I had no idea what I was missing. Incredible service.",
  },
  {
    name: "Ellen R.",
    type: "Family Caregiver",
    rating: 5,
    review:
      "The medication synchronization program has completely changed how I manage my husband's prescriptions. One visit per month instead of several — it's made such a difference for our family.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Patient Voices</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">
            What Our Community Says
          </h1>

          {/* Star rating summary */}
          <div className="flex items-center justify-center gap-2 mb-4">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} className="w-7 h-7 text-kp-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-white/75 text-lg">Consistently rated 5 stars by our community</p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="section-pad bg-kp-cream">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="bg-white py-14 border-t border-kp-border-light">
        <div className="container-xl text-center">
          <div className="max-w-xl mx-auto">
            <p className="section-label mb-2">Share Your Experience</p>
            <h2 className="section-title">Leave Us a Review</h2>
            <div className="gold-divider mx-auto" />
            <p className="text-kp-text-muted mt-4 mb-8">
              We value every patient&apos;s feedback. If Kalama Pharmacy has made a positive
              impact on your health journey, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green"
              >
                Leave a Google Review
              </a>
              <Link href="/contact" className="btn-outline-green">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
