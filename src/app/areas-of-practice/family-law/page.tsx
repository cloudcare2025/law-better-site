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

function HeartIcon() {
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
              <li className="font-medium text-[#1A5C6B]">Family Law</li>
            </ol>
          </nav>

          <div className="divider-accent mb-5" />
          <h1 className="font-serif text-[#F1EDE8]">
            Family Law
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#F1EDE8]/50 sm:text-xl">
            Protecting Your Family&apos;s Future
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
              Experienced Counsel for Life&apos;s Most Personal Matters
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5A6B75] md:text-lg">
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
            <h3 className="mb-8 font-serif text-[#1C2A32]">
              What We Handle
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
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Advocating for Children */}
            <div className="rounded-2xl border border-[#E8E4DF] bg-white p-8 sm:p-10">
              <div className="mb-5 flex items-start gap-3">
                <HeartIcon />
                <h3 className="font-serif text-[#1C2A32]">
                  Advocating for Children
                </h3>
              </div>
              <p className="mb-4 text-base leading-relaxed text-[#5A6B75]">
                Andrew has volunteered with Chicago Volunteer Legal Services to
                represent children as a Guardian Ad Litem and Child
                Representative. He was recently appointed to the Cook County
                Guardian Ad Litem and Child Representative List.
              </p>
              <p className="text-base leading-relaxed text-[#5A6B75]">
                His commitment to children extends beyond the courtroom. Andrew
                serves as a board member with KlaasKids Foundation and has
                volunteered in Willow Creek&apos;s Awana program, reflecting his
                deep dedication to the well-being of children in the community.
              </p>
            </div>

            {/* Community Involvement */}
            <div className="rounded-2xl border border-[#E8E4DF] bg-white p-8 sm:p-10">
              <h3 className="mb-6 font-serif text-[#1C2A32]">
                Community Involvement
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base text-[#5A6B75]">
                    Board member with KlaasKids Foundation
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base text-[#5A6B75]">
                    Volunteered in Willow Creek&apos;s Awana program
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base text-[#5A6B75]">
                    Chicago Volunteer Legal Services volunteer
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckIcon />
                  <p className="text-base text-[#5A6B75]">
                    Appointed to Cook County Guardian Ad Litem and Child
                    Representative List
                  </p>
                </div>
              </div>
            </div>
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
            Schedule Your Free Family Law Consultation
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Take the first step toward protecting your family. We&apos;ll listen
            to your situation and help you understand your options.
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
