import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transfer a Prescription",
  description: "Transfer your prescriptions to Kalama Pharmacy easily. We handle the entire process for you.",
};

const steps = [
  {
    step: "01",
    title: "Provide Your Information",
    desc: "Give us your name, date of birth, and the prescription(s) you want transferred.",
  },
  {
    step: "02",
    title: "Tell Us Your Current Pharmacy",
    desc: "Let us know where your prescription is currently filled so we can contact them.",
  },
  {
    step: "03",
    title: "We Handle the Rest",
    desc: "Our team contacts your current pharmacy and coordinates the complete transfer.",
  },
  {
    step: "04",
    title: "Pick Up Your Medication",
    desc: "We'll notify you when your prescription is ready for pickup at Kalama Pharmacy.",
  },
];

export default function TransferPage() {
  return (
    <>
      <section className="bg-hero-green py-20 md:py-28">
        <div className="container-xl text-center">
          <p className="section-label mb-3">Simple Process</p>
          <h1 className="text-display-lg font-bold font-serif text-white mb-5">
            Transfer a Prescription
          </h1>
          <p className="text-lg text-white/75 max-w-xl mx-auto">
            Switching to Kalama Pharmacy is easy. We coordinate everything so there&apos;s
            no interruption to your medication routine.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl">
          <div className="text-center mb-12">
            <p className="section-label">How It Works</p>
            <h2 className="section-title">Four Simple Steps</h2>
            <div className="gold-divider mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {steps.map((s) => (
              <div key={s.step} className="card-base p-7 flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-kp-green flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-bold font-serif text-kp-text mb-1">{s.title}</h3>
                  <p className="text-sm text-kp-text-muted">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-kp-green rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold font-serif text-white mb-3">
              Ready to transfer? Give us a call or stop by.
            </h2>
            <p className="text-white/75 mb-6">
              Our team will take care of the transfer process from start to finish — no hassle, no gap in your medications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:#" className="btn-primary">Call Us: [INSERT PHONE]</a>
              <Link href="/contact" className="btn-secondary">Send a Message</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
