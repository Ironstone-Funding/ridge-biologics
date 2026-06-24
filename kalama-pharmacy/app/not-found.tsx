import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad bg-white flex items-center justify-center min-h-[60vh]">
      <div className="container-xl text-center">
        <div className="w-24 h-24 rounded-full bg-kp-green-pale flex items-center justify-center mx-auto mb-6">
          <svg className="w-12 h-12 text-kp-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="section-label mb-2">404 Error</p>
        <h1 className="section-title mb-4">Page Not Found</h1>
        <p className="text-kp-text-muted mb-8 max-w-sm mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-green">Return Home</Link>
          <Link href="/contact" className="btn-outline-green">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
