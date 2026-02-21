import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title: "Contact Us | Law Better, LLC",
  description:
    "Get in touch with Law Better, LLC. Schedule a free consultation or reach out directly. We respond to all inquiries within one business day.",
};

/* ==========================================================================
   Constants
   ========================================================================== */

const CONSULTATION_LINK = "https://calendar.app.google/fZNiHyLmmCJHbtga8";
const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-klaas-esq/";

/* ==========================================================================
   Icons (inline SVG for zero network requests)
   ========================================================================== */

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

function MapPinIcon() {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkedInIcon() {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ClockIcon() {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ScaleIcon() {
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
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

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

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function ContactPage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          Navy gradient. Breadcrumb context. Interior page pattern.
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#0a1628]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />

        {/* Subtle gold orb */}
        <div
          className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
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

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm animate-fade-in-up"
          >
            <Link
              href="/"
              className="text-white/40 no-underline transition-colors duration-200 hover:text-white/70"
            >
              Home
            </Link>
            <ChevronRightIcon />
            <span className="text-[#c9a84c]">Contact</span>
          </nav>

          <h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl animate-fade-in-up delay-200 text-base leading-relaxed text-white/50 sm:text-lg">
            We&apos;re here to help. Reach out today.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#fafaf8] to-transparent" />
      </section>

      {/* ================================================================
          MAIN CONTENT -- Two Column Layout
          Left: Form. Right: Info cards.
          ================================================================ */}
      <section className="section-padding bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* ---- Left Column: Form (3/5 width) ---- */}
            <div className="lg:col-span-3">
              <div className="divider-gold mb-5" />
              <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#64748b] md:text-lg">
                Ready to discuss your legal needs? Schedule a free consultation
                or reach out directly. We respond to all inquiries within one
                business day.
              </p>

              <ContactForm />
            </div>

            {/* ---- Right Column: Info Cards (2/5 width) ---- */}
            <div className="space-y-6 lg:col-span-2">
              {/* Office Information Card */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="mb-5 text-lg font-bold text-[#0a1628]">
                  Office Information
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 text-[#c9a84c]">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#334155]">
                        1600 McConnor Parkway, 11th Floor
                      </p>
                      <p className="text-sm text-[#64748b]">
                        Schaumburg, Illinois 60173
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#c9a84c]">
                      <PhoneIcon />
                    </div>
                    <a
                      href={PHONE_HREF}
                      className="text-sm font-medium text-[#334155] no-underline transition-colors duration-200 hover:text-[#c9a84c]"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#c9a84c]">
                      <LinkedInIcon />
                    </div>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#334155] no-underline transition-colors duration-200 hover:text-[#c9a84c]"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  {/* Licensed */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#c9a84c]">
                      <ScaleIcon />
                    </div>
                    <p className="text-sm font-medium text-[#334155]">
                      Licensed in Illinois &amp; Indiana
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Consultation Card */}
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:p-8">
                <h3 className="mb-3 text-lg font-bold text-[#0a1628]">
                  Schedule a Consultation
                </h3>
                <p className="text-sm leading-relaxed text-[#64748b]">
                  Prefer to book directly? Schedule your free consultation
                  online.
                </p>
                <a
                  href={CONSULTATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#c9a84c] px-6 py-3.5 text-sm font-semibold text-[#0a1628] no-underline shadow-lg shadow-[#c9a84c]/20 transition-all duration-200 hover:bg-[#d4b96a] hover:shadow-xl hover:shadow-[#c9a84c]/30 active:scale-[0.98]"
                >
                  <CalendarIcon />
                  Schedule Free Consultation
                </a>
              </div>

              {/* Office Hours Card */}
              <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-[#c9a84c]">
                    <ClockIcon />
                  </div>
                  <h3 className="text-lg font-bold text-[#0a1628]">
                    Office Hours
                  </h3>
                </div>
                <div className="mt-4 rounded-xl bg-[#0a1628]/[0.03] px-5 py-4">
                  <p className="text-sm font-semibold uppercase tracking-wider text-[#0a1628]">
                    By Appointment
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                    We provide personalized service on your schedule. Contact us
                    to arrange a convenient time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          BOTTOM CTA SECTION
          Navy background. Final conversion push.
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#0a1628] py-24 sm:py-32">
        {/* Background accent */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Don&apos;t Wait. Take the First Step Today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Your legal matter deserves immediate attention. Reach out now and
            let us start working for you.
          </p>

          {/* CTA */}
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

          {/* Phone */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
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
