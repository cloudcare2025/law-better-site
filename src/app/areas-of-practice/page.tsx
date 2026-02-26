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
  services: string[];
}

const practiceAreas: PracticeAreaCard[] = [
  {
    title: "Family Law",
    description:
      "Divorce, custody, child support, orders of protection, and domestic disputes. We fight for your family's future.",
    href: "/areas-of-practice/family-law",
    icon: <FamilyIcon />,
    services: [
      "Divorce",
      "Child Custody",
      "Child Support",
      "Orders of Protection",
      "Domestic Disputes",
      "Guardian Ad Litem",
    ],
  },
  {
    title: "Estate Planning",
    description:
      "Wills, trusts, powers of attorney. Protect what matters most with a plan built for your peace of mind.",
    href: "/areas-of-practice/estate-planning",
    icon: <EstateIcon />,
    services: [
      "Wills",
      "Trusts",
      "Powers of Attorney",
      "Guardianships",
      "Estate Administration",
    ],
  },
  {
    title: "Business Law",
    description:
      "Business formation, service, and litigation. From startup to courtroom, we've got you covered.",
    href: "/areas-of-practice/business-law",
    icon: <BusinessIcon />,
    services: [
      "Business Formation",
      "Business Litigation",
      "Contract Disputes",
      "Civil Disputes",
      "Compliance",
    ],
  },
  {
    title: "Personal Injury",
    description:
      "Wrongful death, car accidents, slip and fall, dog bite litigation, premises liability. Justice for the injured.",
    href: "/areas-of-practice/personal-injury",
    icon: <InjuryIcon />,
    services: [
      "Wrongful Death",
      "Car Accidents",
      "Trucking Accidents",
      "Slip and Fall",
      "Dog Bite Litigation",
      "Premises Liability",
    ],
  },
];

/* ==========================================================================
   Icons (inline SVG for zero network requests)
   ========================================================================== */

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

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
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
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
          Dark bg, breadcrumb context, DM Serif Display heading.
          Teal gradient orb. Grid pattern overlay.
          ================================================================ */}
      <section className="relative flex items-end overflow-hidden bg-[#0F1D2A] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D2A] via-[#162330] to-[#0F1D2A]" />

        {/* Subtle teal orb */}
        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
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
            <ol className="flex items-center gap-1.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
                >
                  Home
                </Link>
              </li>
              <li className="text-[#F1EDE8]/30">
                <ChevronRightIcon />
              </li>
              <li className="font-medium text-[#1A5C6B]">
                Areas of Practice
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <div className="divider-accent mb-5" />
          <h1 className="font-serif text-[#F1EDE8]">
            Areas of Practice
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#F1EDE8]/50 sm:text-lg">
            Experienced legal counsel across the areas that matter most to you
            and your family.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ================================================================
          PRACTICE AREA CARDS
          Bento grid of 4 cards -- larger, more detailed than homepage.
          ================================================================ */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group relative overflow-hidden rounded-2xl border border-[#E8E4DF] bg-white p-8 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#1A5C6B]/30 hover:shadow-[0_8px_40px_rgba(15,29,42,0.08)] sm:p-10"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1A5C6B]/[0.08] text-[#1A5C6B] transition-colors duration-300 group-hover:bg-[#1A5C6B]/[0.14]">
                  {area.icon}
                </div>

                {/* Content */}
                <h3 className="mb-3 font-serif text-[#1C2A32]">
                  {area.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[#5A6B75]">
                  {area.description}
                </p>

                {/* Service pills */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {area.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-[#1A5C6B]/15 bg-[#1A5C6B]/[0.05] px-3 py-1 text-xs font-medium text-[#1A5C6B]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C6B] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight />
                </div>

                {/* Accent line on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-[#1A5C6B] to-[#C4963C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          ================================================================ */}
      <section className="dark-section relative overflow-hidden bg-[#0F1D2A] py-24 sm:py-32">
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-[#F1EDE8]">
            Not Sure Where to Start?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Schedule a free consultation and we&apos;ll help you understand your
            options and build a path forward.
          </p>

          <div className="mt-10">
            <a
              href={CONSULTATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg inline-flex items-center gap-2.5"
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
