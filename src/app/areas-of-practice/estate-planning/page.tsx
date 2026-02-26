import Link from "next/link";
import type { Metadata } from "next";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title: "Estate Planning | Law Better, LLC",
  description:
    "Wills, trusts, powers of attorney, guardianships, and estate administration. Protect your assets and loved ones with comprehensive estate planning.",
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
    title: "Wills",
    description:
      "Legally binding documents that ensure your wishes are honored and your assets are distributed according to your plan.",
  },
  {
    title: "Trusts",
    description:
      "Flexible estate planning tools that help protect assets, minimize taxes, and provide for your beneficiaries.",
  },
  {
    title: "Powers of Attorney",
    description:
      "Designate a trusted individual to make financial or healthcare decisions on your behalf if you become unable to do so.",
  },
  {
    title: "Guardianships",
    description:
      "Legal arrangements to protect and care for minor children or adults who cannot care for themselves.",
  },
  {
    title: "Estate Administration",
    description:
      "Guiding executors and administrators through the probate process with efficiency and care.",
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

function ShieldIcon() {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function EstatePlanningPage() {
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
              <li className="font-medium text-[#1A5C6B]">Estate Planning</li>
            </ol>
          </nav>

          <div className="divider-accent mb-5" />
          <h1 className="font-serif text-[#F1EDE8]">
            Estate Planning
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#F1EDE8]/50 sm:text-xl">
            Protect What Matters Most
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
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
              Comprehensive Estate Planning for Your Peace of Mind
            </h2>
            <p className="mt-5 mb-4 text-base leading-relaxed text-[#5A6B75] md:text-lg">
              Your estate plan is more than a set of legal documents -- it is a
              reflection of your values, your priorities, and your commitment to
              the people you care about most. Whether you are just starting a
              family or preparing for retirement, having a well-crafted estate
              plan ensures your assets are protected and your loved ones are
              provided for.
            </p>
            <p className="text-base leading-relaxed text-[#5A6B75] md:text-lg">
              At Law Better, we take the time to understand your unique
              situation and build a tailored plan that addresses your specific
              needs. From simple wills to complex trust structures, we provide
              the guidance and clarity you need to make confident decisions about
              your future.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h3 className="mb-8 font-serif text-[#1C2A32]">
              Our Estate Planning Services
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
              <ShieldIcon />
              <h3 className="font-serif text-[#1C2A32]">
                Why Estate Planning Matters
              </h3>
            </div>
            <p className="mb-4 text-base leading-relaxed text-[#5A6B75]">
              Without a proper estate plan, the state decides how your assets
              are distributed, who cares for your children, and who makes
              critical medical and financial decisions on your behalf. Estate
              planning puts you in control.
            </p>
            <p className="text-base leading-relaxed text-[#5A6B75]">
              A well-structured plan minimizes family disputes, reduces tax
              burdens, and provides clarity during difficult times. It is one of
              the most meaningful steps you can take to protect the people and
              things you value most.
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
            Start Protecting Your Legacy Today
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Schedule a free consultation and take the first step toward securing
            your family&apos;s future.
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
