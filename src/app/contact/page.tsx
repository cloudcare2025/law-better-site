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

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function ContactPage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          Dark bg. Breadcrumb context. Interior page pattern.
          ================================================================ */}
      <section className="relative overflow-hidden bg-[#0F1D2A]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D2A] via-[#162330] to-[#0F1D2A]" />

        {/* Subtle teal orb */}
        <div
          className="absolute right-[10%] top-[30%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
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

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-1.5 text-sm animate-fade-in-up"
          >
            <Link
              href="/"
              className="text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
            >
              Home
            </Link>
            <span className="text-[#F1EDE8]/30">
              <ChevronRightIcon />
            </span>
            <span className="font-medium text-[#1A5C6B]">Contact</span>
          </nav>

          <div className="divider-accent mb-5 animate-fade-in-up delay-100" />
          <h1 className="animate-fade-in-up delay-100 font-serif text-[#F1EDE8]">
            Contact Us
          </h1>
          <p className="mt-4 max-w-xl animate-fade-in-up delay-200 text-base leading-relaxed text-[#F1EDE8]/50 sm:text-lg">
            We&apos;re here to help. Reach out today.
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ================================================================
          MAIN CONTENT -- Two Column Layout
          Left: Form (3/5). Right: Info cards (2/5).
          ================================================================ */}
      <section className="section-padding bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            {/* ---- Left Column: Form (3/5 width) ---- */}
            <div className="lg:col-span-3">
              <div className="divider-accent mb-5" />
              <h2 className="font-serif text-[#1C2A32]">
                Get in Touch
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A6B75] md:text-lg">
                Ready to discuss your legal needs? Schedule a free consultation
                or reach out directly. We respond to all inquiries within one
                business day.
              </p>

              <ContactForm />
            </div>

            {/* ---- Right Column: Info Cards (2/5 width) ---- */}
            <div className="space-y-6 lg:col-span-2">
              {/* Office Information Card -- glass effect */}
              <div className="glass rounded-2xl p-6 sm:p-8">
                <h3 className="mb-5 font-serif text-[#1C2A32]">
                  Office Information
                </h3>

                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex-shrink-0 text-[#1A5C6B]">
                      <MapPinIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#1C2A32]">
                        1600 McConnor Parkway, 11th Floor
                      </p>
                      <p className="text-sm text-[#5A6B75]">
                        Schaumburg, Illinois 60173
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#1A5C6B]">
                      <PhoneIcon />
                    </div>
                    <a
                      href={PHONE_HREF}
                      className="text-sm font-medium text-[#1C2A32] no-underline transition-colors duration-200 hover:text-[#1A5C6B]"
                    >
                      {PHONE_NUMBER}
                    </a>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#1A5C6B]">
                      <LinkedInIcon />
                    </div>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#1C2A32] no-underline transition-colors duration-200 hover:text-[#1A5C6B]"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>

                  {/* Licensed */}
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 text-[#1A5C6B]">
                      <ScaleIcon />
                    </div>
                    <p className="text-sm font-medium text-[#1C2A32]">
                      Licensed in Illinois &amp; Indiana
                    </p>
                  </div>
                </div>
              </div>

              {/* Schedule Consultation Card */}
              <div className="rounded-2xl border border-[#E8E4DF] bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(15,29,42,0.06)] sm:p-8">
                <h3 className="mb-3 font-serif text-[#1C2A32]">
                  Schedule a Consultation
                </h3>
                <p className="text-sm leading-relaxed text-[#5A6B75]">
                  Prefer to book directly? Schedule your free consultation
                  online.
                </p>
                <a
                  href={CONSULTATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-5 inline-flex w-full items-center justify-center gap-2.5"
                >
                  <CalendarIcon />
                  Schedule Free Consultation
                </a>
              </div>

              {/* Office Hours Card */}
              <div className="rounded-2xl border border-[#E8E4DF] bg-white p-6 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(15,29,42,0.06)] sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 text-[#1A5C6B]">
                    <ClockIcon />
                  </div>
                  <h3 className="font-serif text-[#1C2A32]">
                    Office Hours
                  </h3>
                </div>
                <div className="mt-4 rounded-xl bg-[#F5F2EE] px-5 py-4">
                  <p
                    className="text-sm font-semibold uppercase tracking-wider text-[#1C2A32]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    By Appointment
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-[#8A959D]">
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
          Dark background. Final conversion push.
          ================================================================ */}
      <section className="dark-section relative overflow-hidden bg-[#0F1D2A] py-24 sm:py-32">
        {/* Background accent */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-serif text-[#F1EDE8]">
            Don&apos;t Wait. Take the First Step Today.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Your legal matter deserves immediate attention. Reach out now and
            let us start working for you.
          </p>

          {/* CTA */}
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

          {/* Phone */}
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
