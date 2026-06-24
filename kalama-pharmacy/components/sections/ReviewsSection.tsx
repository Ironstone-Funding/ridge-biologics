import Link from "next/link";

const reviews = [
  {
    name:   "Sarah M.",
    type:   "Local Patient",
    review: "The staff at Kalama Pharmacy genuinely care about their patients. They took the time to explain my new medications and made sure I felt confident about my treatment plan. I couldn't ask for better service.",
  },
  {
    name:   "James T.",
    type:   "Kalama Resident",
    review: "I've been coming here for years and wouldn't go anywhere else. The pharmacists know my name, know my medications, and always go above and beyond. This is what community pharmacy should look like.",
  },
  {
    name:   "Linda K.",
    type:   "Family Caregiver",
    review: "Managing medications for my elderly mother was overwhelming until we found Kalama Pharmacy. Their medication synchronization service has been a lifesaver — one pickup date for everything. Highly recommend.",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-kp-gold" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section-pad bg-white border-t border-kp-border-light">
      <div className="container-xl">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <p className="section-label">Patient Reviews</p>
            <h2 className="section-title">What Our Patients Say</h2>
          </div>
          <Link href="/reviews" className="btn-outline-green text-sm self-start sm:self-auto flex-shrink-0">
            Read All Reviews
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-kp-cream rounded-xl p-6 border border-kp-border-light flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} />)}
              </div>

              {/* Quote */}
              <p className="text-kp-text-body leading-relaxed text-[0.95rem] flex-1 mb-5">
                &ldquo;{r.review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-kp-border-light">
                <div className="w-9 h-9 bg-kp-green-pale rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-kp-green" aria-hidden="true">
                    {r.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-kp-text">{r.name}</p>
                  <p className="text-xs text-kp-text-muted">{r.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
