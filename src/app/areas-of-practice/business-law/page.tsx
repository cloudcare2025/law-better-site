import Link from "next/link";
import type { Metadata } from "next";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title: "Business Law | Law Better, LLC",
  description:
    "Business formation, litigation, contract disputes, civil disputes, and compliance. From startup to courtroom, Law Better has you covered.",
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
    title: "Business Formation (LLC, Corp, Partnership)",
    description:
      "Choose the right entity structure and get your business started on a solid legal foundation.",
  },
  {
    title: "Business Litigation",
    description:
      "Aggressive representation when disputes escalate and your business interests are on the line.",
  },
  {
    title: "Contract Disputes",
    description:
      "Resolving breaches and enforcing agreements to protect your commercial relationships.",
  },
  {
    title: "Civil Disputes",
    description:
      "Navigating complex civil matters with strategic litigation and practical solutions.",
  },
  {
    title: "Business Service & Compliance",
    description:
      "Ongoing legal support to keep your business compliant and operating smoothly.",
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

function BriefcaseIcon() {
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
      className="text-[#c9a84c]"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function BusinessLawPage() {
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
              <li className="font-medium text-[#c9a84c]">Business Law</li>
            </ol>
          </nav>

          <div className="divider-gold mb-5" />
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Business Law
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/50 sm:text-xl">
            From Formation to Courtroom
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
              Legal Counsel That Grows With Your Business
            </h2>
            <p className="mb-4 text-base leading-relaxed text-[#64748b] md:text-lg">
              Whether you are launching a new venture, managing day-to-day
              operations, or facing a complex dispute, your business deserves
              legal counsel that understands the stakes. At Law Better, we
              provide strategic guidance at every stage of your business
              lifecycle.
            </p>
            <p className="text-base leading-relaxed text-[#64748b] md:text-lg">
              From choosing the right entity structure and drafting airtight
              contracts to defending your interests in litigation, we bring the
              same personalized approach to business law that defines everything
              we do. No cookie-cutter advice. Just practical, results-driven
              counsel built around your goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-[#0a1628] sm:text-3xl">
              Our Business Law Services
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

          {/* Why Law Better for Business */}
          <div className="mb-16 rounded-2xl border border-[#e2e8f0] bg-white p-8 sm:p-10">
            <div className="mb-4 flex items-start gap-3">
              <BriefcaseIcon />
              <h2 className="text-xl font-bold tracking-tight text-[#0a1628] sm:text-2xl">
                Why Businesses Choose Law Better
              </h2>
            </div>
            <p className="mb-4 text-base leading-relaxed text-[#64748b]">
              Business owners need an attorney who understands that legal
              decisions are business decisions. We do not just interpret the
              law -- we help you use it as a strategic advantage. Our approach
              is proactive, cost-effective, and tailored to the realities of
              running a business.
            </p>
            <p className="text-base leading-relaxed text-[#64748b]">
              From LLC formation to high-stakes litigation, we stand beside you
              every step of the way. When disputes arise, we are prepared to
              fight aggressively for your interests in and out of the courtroom.
            </p>
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
            Protect Your Business Interests
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Schedule a free consultation to discuss your business legal needs
            and build a strategy for success.
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
