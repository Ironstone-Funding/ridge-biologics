import Link from "next/link";

const actions = [
  {
    label: "Refill Prescription",
    desc:  "Call, online, or in person",
    href:  "/refill",
    color: "green" as const,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: "Transfer Rx",
    desc:  "Switch to Kalama Pharmacy",
    href:  "/transfer",
    color: "green" as const,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    label: "Med Sync",
    desc:  "One monthly pickup date",
    href:  "/services#med-sync",
    color: "blue" as const,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Medicare Help",
    desc:  "Enrollment support available",
    href:  "/services#medicare",
    color: "blue" as const,
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function QuickActions() {
  return (
    <section className="bg-kp-cream border-b border-kp-border-light py-5">
      <div className="container-xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
          {actions.map((action) => {
            const isGreen = action.color === "green";
            return (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl border text-center sm:text-left transition-all duration-200 group ${
                  isGreen
                    ? "bg-white border-kp-border-light hover:border-kp-green hover:bg-kp-green-ultra"
                    : "bg-white border-kp-border-light hover:border-kp-blue hover:bg-kp-blue-pale"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors mx-auto sm:mx-0 ${
                    isGreen
                      ? "bg-kp-green-pale text-kp-green group-hover:bg-kp-green group-hover:text-white"
                      : "bg-kp-blue-light text-kp-blue group-hover:bg-kp-blue group-hover:text-white"
                  }`}
                >
                  <span className="w-5 h-5">{action.icon}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className={`text-xs sm:text-sm font-semibold leading-snug transition-colors ${
                    isGreen ? "text-kp-text group-hover:text-kp-green"
                             : "text-kp-text group-hover:text-kp-blue"
                  }`}>
                    {action.label}
                  </p>
                  <p className="hidden sm:block text-xs text-kp-text-muted mt-0.5">{action.desc}</p>
                </div>

                <svg className="w-4 h-4 text-kp-text-light group-hover:text-kp-green hidden sm:block flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
