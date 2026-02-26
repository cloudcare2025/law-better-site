import Link from "next/link";
import Image from "next/image";
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
      className="shrink-0 text-[#1A5C6B]"
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#1A5C6B]"
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
      <section className="relative flex items-end overflow-hidden bg-[#0F1D2A] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D2A] via-[#162330] to-[#0F1D2A]" />

        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
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
              <li>
                <Link
                  href="/areas-of-practice"
                  className="text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
                >
                  Areas of Practice
                </Link>
              </li>
              <li className="text-[#F1EDE8]/30">
                <ChevronRightIcon />
              </li>
              <li className="font-medium text-[#1A5C6B]">Business Law</li>
            </ol>
          </nav>

          <div className="divider-accent mb-5" />
          <h1 className="font-serif text-[#F1EDE8]">
            Business Law
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#F1EDE8]/50 sm:text-xl">
            From Formation to Courtroom
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ================================================================
          FEATURED IMAGE
          Full-width cinematic image between hero and content.
          ================================================================ */}
      <section className="bg-[#FAFAF8] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-[0_8px_40px_rgba(15,29,42,0.10)]">
            <Image
              src="/images/generated/business-meeting.webp"
              alt="Professionals meeting to discuss business legal strategy"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ================================================================
          WHAT WE HANDLE
          ================================================================ */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          {/* Overview */}
          <div className="mb-16 max-w-3xl">
            <div className="divider-accent mb-5" />
            <h2 className="font-serif text-[#1C2A32]">
              Legal Counsel That Grows With Your Business
            </h2>
            <p className="mt-5 mb-4 text-base leading-relaxed text-[#5A6B75] md:text-lg">
              Whether you are launching a new venture, managing day-to-day
              operations, or facing a complex dispute, your business deserves
              legal counsel that understands the stakes. At Law Better, we
              provide strategic guidance at every stage of your business
              lifecycle.
            </p>
            <p className="text-base leading-relaxed text-[#5A6B75] md:text-lg">
              From choosing the right entity structure and drafting airtight
              contracts to defending your interests in litigation, we bring the
              same personalized approach to business law that defines everything
              we do. No cookie-cutter advice. Just practical, results-driven
              counsel built around your goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="mb-8 font-serif text-[#1C2A32]">
              Our Business Law Services
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-[#E8E4DF] bg-white p-6 transition-all duration-200 hover:border-[#1A5C6B]/20 hover:shadow-[0_4px_20px_rgba(15,29,42,0.05)]"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <CheckIcon />
                    <h4 className="text-base font-semibold text-[#1C2A32]" style={{ fontFamily: "var(--font-body)" }}>
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-sm leading-relaxed text-[#5A6B75]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          OUR APPROACH
          ================================================================ */}
      <section className="section-padding bg-[#F5F2EE]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="rounded-2xl border border-[#E8E4DF] bg-white p-8 sm:p-10">
            <div className="mb-5 flex items-start gap-3">
              <BriefcaseIcon />
              <h3 className="font-serif text-[#1C2A32]">
                Why Businesses Choose Law Better
              </h3>
            </div>
            <p className="mb-4 text-base leading-relaxed text-[#5A6B75]">
              Business owners need an attorney who understands that legal
              decisions are business decisions. We do not just interpret the
              law -- we help you use it as a strategic advantage. Our approach
              is proactive, cost-effective, and tailored to the realities of
              running a business.
            </p>
            <p className="text-base leading-relaxed text-[#5A6B75]">
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
            Protect Your Business Interests
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Schedule a free consultation to discuss your business legal needs
            and build a strategy for success.
          </p>

          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
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

          <div className="mt-8 flex items-center justify-center gap-2">
            <span className="text-[#F1EDE8]/40">
              <PhoneIcon />
            </span>
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-[#F1EDE8]/60 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
            >
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
