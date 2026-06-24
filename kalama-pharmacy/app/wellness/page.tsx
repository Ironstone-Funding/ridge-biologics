import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Classes",
  description:
    "Join Kalama Pharmacy's wellness classes for diabetes, quit smoking, weight loss, blood pressure, cholesterol, and asthma management.",
};

const classes = [
  {
    id: "diabetes",
    title: "Diabetes",
    color: "bg-kp-green-pale border-kp-green/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    description:
      "Understand and manage your diabetes with confidence. Our diabetes wellness class covers blood sugar control, nutrition, medication use, and lifestyle strategies for living well with diabetes.",
    topics: ["Blood sugar monitoring", "Healthy eating for diabetes", "Medication management", "Foot care and complication prevention", "Exercise and activity guidance"],
  },
  {
    id: "quit-smoking",
    title: "Quit Smoking",
    color: "bg-kp-gold-pale border-kp-gold/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    description:
      "Our smoking cessation class gives you the tools, support, and strategies to quit for good. Learn about NRT options, behavioral techniques, and how to stay smoke-free long term.",
    topics: ["Nicotine replacement therapy options", "Prescription cessation medications", "Coping strategies for cravings", "Building a quit plan", "Long-term success strategies"],
  },
  {
    id: "weight-loss",
    title: "Weight Loss",
    color: "bg-kp-green-pale border-kp-green/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description:
      "A pharmacy-based weight loss class focused on sustainable, healthy approaches. We discuss nutrition basics, activity, behavioral changes, and the role of medications when appropriate.",
    topics: ["Nutrition fundamentals", "Reading food labels and planning meals", "Safe and effective activity", "Medication-assisted weight loss options", "Goal setting and tracking progress"],
  },
  {
    id: "blood-pressure",
    title: "High Blood Pressure",
    color: "bg-kp-gold-pale border-kp-gold/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    description:
      "Learn to understand, monitor, and control your blood pressure. Our class covers lifestyle changes, medication use, and home monitoring techniques to keep your heart healthy.",
    topics: ["Understanding blood pressure numbers", "DASH diet and sodium reduction", "Blood pressure medications overview", "Home monitoring best practices", "Stress management and exercise"],
  },
  {
    id: "cholesterol",
    title: "High Cholesterol",
    color: "bg-kp-green-pale border-kp-green/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description:
      "Understand your cholesterol numbers and what they mean for your heart health. We cover dietary changes, exercise, and medications to help you reach your cholesterol goals.",
    topics: ["LDL, HDL, and triglycerides explained", "Heart-healthy diet strategies", "Statin and non-statin medication options", "Managing side effects", "Monitoring and follow-up"],
  },
  {
    id: "asthma",
    title: "Asthma",
    color: "bg-kp-gold-pale border-kp-gold/20",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    description:
      "Take control of your asthma with the right knowledge and tools. Our class teaches inhaler technique, trigger avoidance, action plans, and how to work with your care team for the best outcomes.",
    topics: ["Proper inhaler and spacer technique", "Identifying and avoiding triggers", "Controller vs. rescue medications", "Developing a written asthma action plan", "Emergency management"],
  },
];

export default function WellnessPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Community Education</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">Wellness Classes</h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto">
            Our pharmacist-led wellness classes are designed to help you understand your
            health conditions and take confident control of your wellbeing.
          </p>
        </div>
      </section>

      {/* Classes grid */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center mb-12">
            <p className="section-label">Available Programs</p>
            <h2 className="section-title">Classes We Offer</h2>
            <div className="gold-divider mx-auto" />
            <p className="section-subtitle mx-auto">
              All classes are led by our licensed pharmacists and tailored to our community&apos;s needs.
              Contact us to learn about upcoming schedules and registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((cls) => (
              <div key={cls.id} id={cls.id} className={`scroll-mt-24 rounded-2xl border p-8 ${cls.color}`}>
                <div className="flex items-start gap-5 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <div className="text-kp-green">{cls.icon}</div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold font-serif text-kp-text">{cls.title}</h2>
                    <p className="text-sm text-kp-text-muted mt-1">{cls.description}</p>
                  </div>
                </div>

                <h3 className="text-xs font-bold tracking-widest uppercase text-kp-text-muted mb-3">Topics Covered</h3>
                <ul className="space-y-2">
                  {cls.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-kp-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-kp-text-muted">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-kp-green rounded-2xl p-10 text-center">
            <h3 className="text-2xl font-bold font-serif text-white mb-3">Interested in Attending?</h3>
            <p className="text-white/75 mb-6 max-w-xl mx-auto">
              Contact us to learn about upcoming class schedules, registration, and any special wellness events.
            </p>
            <Link href="/contact" className="btn-primary">Register for a Class</Link>
          </div>
        </div>
      </section>
    </>
  );
}
