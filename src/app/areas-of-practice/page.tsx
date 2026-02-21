import Link from "next/link";

/* ==========================================================================
   Constants
   ========================================================================== */

const CONSULTATION_LINK = "https://calendar.app.google/fZNiHyLmmCJHbtga8";

/* ==========================================================================
   Data
   ========================================================================== */

interface PracticeAreaCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const practiceAreas: PracticeAreaCard[] = [
  {
    title: "Family Law",
    description:
      "Divorce, custody, child support, orders of protection, and domestic disputes. We fight for your family's future.",
    href: "/areas-of-practice/family-law",
    icon: <FamilyIcon />,
  },
  {
    title: "Estate Planning",
    description:
      "Wills, trusts, powers of attorney. Protect what matters most with a plan built for your peace of mind.",
    href: "/areas-of-practice/estate-planning",
    icon: <EstateIcon />,
  },
  {
    title: "Business Law",
    description:
      "Business formation, service, and litigation. From startup to courtroom, we've got you covered.",
    href: "/areas-of-practice/business-law",
    icon: <BusinessIcon />,
  },
  {
    title: "Personal Injury",
    description:
      "Wrongful death, car accidents, slip and fall, dog bite litigation, premises liability. Justice for the injured.",
    href: "/areas-of-practice/personal-injury",
    icon: <InjuryIcon />,
  },
];

/* ==========================================================================
   Icons (inline SVG for zero network requests)
   ========================================================================== */

function FamilyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function EstateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function InjuryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m4.93 4.93 14.14 14.14" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function AreasOfPracticePage() {
  return (
    <>
      {/* ================================================================
          INTERIOR HERO
          Navy gradient, breadcrumb context, clear heading.
          ================================================================ */}
      <section className="relative flex items-end overflow-hidden bg-[#0a1628] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />

        {/* Subtle gold orb */}
        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/40 no-underline transition-colors duration-200 hover:text-white/70"
                >
                  Home
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                /
              </li>
              <li className="text-[#c9a84c] font-medium">
                Areas of Practice
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <div className="divider-gold mb-5" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Areas of Practice
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/50 sm:text-lg">
            Experienced legal counsel across the areas that matter most to you
            and your family.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fafaf8] to-transparent" />
      </section>

      {/* ================================================================
          PRACTICE AREA CARDS
          Grid of 4, each linking to its subpage.
          ================================================================ */}
      <section className="section-padding bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group relative rounded-2xl border border-[#e2e8f0] bg-white p-8 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#c9a84c]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:p-10"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#0a1628]/[0.04] text-[#0a1628] transition-colors duration-300 group-hover:bg-[#c9a84c]/10 group-hover:text-[#c9a84c]">
                  {area.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-[#0a1628] transition-colors group-hover:text-[#0a1628]">
                  {area.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748b]">
                  {area.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#c9a84c] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight />
                </div>

                {/* Subtle gold accent line on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-[#c9a84c] to-[#d4b96a] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#0a1628] py-24 sm:py-32">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Schedule a free consultation and we&apos;ll help you understand your
            options and build a path forward.
          </p>

          <div className="mt-10">
            <a
              href={CONSULTATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg group inline-flex items-center gap-2.5 rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-semibold text-[#0a1628] shadow-lg shadow-[#c9a84c]/20 transition-all duration-200 no-underline hover:bg-[#d4b96a] hover:shadow-xl hover:shadow-[#c9a84c]/30 active:scale-[0.98]"
            >
              <CalendarIcon />
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
