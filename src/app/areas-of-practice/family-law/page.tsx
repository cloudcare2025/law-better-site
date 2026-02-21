import Link from "next/link";
import type { Metadata } from "next";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title: "Family Law | Law Better, LLC",
  description:
    "Divorce, child custody, child support, orders of protection, domestic disputes, and Guardian Ad Litem representation. Schedule a free family law consultation.",
};

/* ==========================================================================
   Constants
   ========================================================================== */

const CONSULTATION_LINK = "https://calendar.app.google/fZNiHyLmmCJHbtga8";
const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";

/* ==========================================================================
   Data
   ========================================================================== */

interface Service {
  title: string;
  description: string;
}

const services: Service[] = [
  {
    title: "Divorce",
    description:
      "Guiding you through every stage of dissolution with clarity and care.",
  },
  {
    title: "Child Custody",
    description:
      "Advocating for custody arrangements that prioritize your children's well-being.",
  },
  {
    title: "Child Support",
    description:
      "Ensuring fair support obligations that protect your family's financial stability.",
  },
  {
    title: "Orders of Protection",
    description:
      "Swift legal action to protect you and your loved ones from harm.",
  },
  {
    title: "Domestic Disputes",
    description:
      "Resolving sensitive family conflicts with discretion and experienced counsel.",
  },
  {
    title: "Guardian Ad Litem",
    description:
      "Dedicated representation ensuring children's voices are heard in legal proceedings.",
  },
];

/* ==========================================================================
   Icons
   ========================================================================== */

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#c9a84c]"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
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

function PhoneIcon() {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#c9a84c]"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function FamilyLawPage() {
  return (
    <>
      {/* ================================================================
          INTERIOR HERO
          ================================================================ */}
      <section className="relative flex items-end overflow-hidden bg-[#0a1628] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />

        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />

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
              <li>
                <Link
                  href="/areas-of-practice"
                  className="text-white/40 no-underline transition-colors duration-200 hover:text-white/70"
                >
                  Areas of Practice
                </Link>
              </li>
              <li className="text-white/20" aria-hidden="true">
                /
              </li>
              <li className="font-medium text-[#c9a84c]">Family Law</li>
            </ol>
          </nav>

          <div className="divider-gold mb-5" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Family Law
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50 sm:text-xl">
            Protecting Your Family&apos;s Future
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fafaf8] to-transparent" />
      </section>

      {/* ================================================================
          CONTENT
          ================================================================ */}
      <section className="section-padding bg-[#fafaf8]">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#0a1628] sm:text-3xl">
              Experienced Counsel for Life&apos;s Most Personal Matters
            </h2>
            <p className="text-base leading-relaxed text-[#64748b] md:text-lg">
              At Law Better, we understand that family legal matters are deeply
              personal. Andrew M. Klaas spends a considerable portion of his
              time focusing on family law disputes. After his time with
              Barrington Police Department and practicing law for the Domestic
              Violence Clinic under Illinois Supreme Court Rule 711, he
              possesses a unique understanding of his client&apos;s personal and
              psychological needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-[#0a1628] sm:text-3xl">
              How We Help
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-[#e2e8f0] bg-white p-6 transition-all duration-200 hover:border-[#c9a84c]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <CheckIcon />
                    <h3 className="text-base font-bold text-[#0a1628]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#64748b]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Guardian Ad Litem */}
          <div className="mb-16 rounded-2xl border border-[#e2e8f0] bg-white p-8 sm:p-10">
            <div className="mb-4 flex items-start gap-3">
              <HeartIcon />
              <h2 className="text-xl font-bold tracking-tight text-[#0a1628] sm:text-2xl">
                Advocating for Children
              </h2>
            </div>
            <p className="mb-4 text-base leading-relaxed text-[#64748b]">
              Andrew has volunteered with Chicago Volunteer Legal Services to
              represent children as a Guardian Ad Litem and Child
              Representative. He was recently appointed to the Cook County
              Guardian Ad Litem and Child Representative List.
            </p>
            <p className="text-base leading-relaxed text-[#64748b]">
              His commitment to children extends beyond the courtroom. Andrew
              serves as a board member with KlaasKids Foundation and has
              volunteered in Willow Creek&apos;s Awana program, reflecting his
              deep dedication to the well-being of children in the community.
            </p>
          </div>

          {/* Community Involvement */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#0a1628] sm:text-3xl">
              Community Involvement
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-base text-[#64748b]">
                  Board member with KlaasKids Foundation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-base text-[#64748b]">
                  Volunteered in Willow Creek&apos;s Awana program
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-base text-[#64748b]">
                  Chicago Volunteer Legal Services volunteer
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckIcon />
                <p className="text-base text-[#64748b]">
                  Appointed to Cook County Guardian Ad Litem and Child
                  Representative List
                </p>
              </div>
            </div>
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
            Schedule Your Free Family Law Consultation
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Take the first step toward protecting your family. We&apos;ll listen
            to your situation and help you understand your options.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
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

          <div className="mt-8 flex items-center justify-center gap-2">
            <PhoneIcon />
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-white/60 no-underline transition-colors duration-200 hover:text-white"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
