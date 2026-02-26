import Image from "next/image";
import Link from "next/link";

/* ==========================================================================
   Constants
   ========================================================================== */

const CONSULTATION_LINK = "https://calendar.app.google/fZNiHyLmmCJHbtga8";
const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";

/* ==========================================================================
   Data
   ========================================================================== */

interface PracticeArea {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const practiceAreas: PracticeArea[] = [
  {
    title: "Family Law",
    description:
      "Divorce, custody, child support, orders of protection, and domestic disputes. We fight for your family\u2019s future with compassion and tenacity.",
    href: "/areas-of-practice/family-law",
    icon: <FamilyIcon />,
  },
  {
    title: "Estate Planning",
    description:
      "Wills, trusts, powers of attorney, and guardianship. Protect what matters most with a plan built for your peace of mind.",
    href: "/areas-of-practice/estate-planning",
    icon: <EstateIcon />,
  },
  {
    title: "Business Law",
    description:
      "Formation, contracts, service of process, and litigation. From startup to courtroom, we\u2019ve got you covered.",
    href: "/areas-of-practice/business-law",
    icon: <BusinessIcon />,
  },
  {
    title: "Personal Injury",
    description:
      "Car accidents, wrongful death, slip and fall, dog bites, and premises liability. Justice and compensation for the injured.",
    href: "/areas-of-practice/personal-injury",
    icon: <InjuryIcon />,
  },
];

interface TeamMember {
  name: string;
  title: string;
  image: string;
  specialty: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andrew M. Klaas",
    title: "Founder & Managing Member",
    image: "/images/team/andrew-klaas.jpg",
    specialty: "Litigation & Strategy",
  },
  {
    name: "John P. Baglia",
    title: "Of Counsel",
    image: "/images/team/john-baglia.jpg",
    specialty: "Business & Estate Law",
  },
  {
    name: "Reagan M. Petrow",
    title: "Legal Assistant",
    image: "/images/team/reagan-petrow.jpg",
    specialty: "Case Management",
  },
  {
    name: "Chase R. Peterson",
    title: "Account Specialist",
    image: "/images/team/chase-peterson.jpg",
    specialty: "Client Relations",
  },
];

const trustItems = [
  "Licensed in IL & IN",
  "Free Consultations",
  "24-Hour Response",
  "No Hidden Fees",
];

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "100s", label: "Clients Served" },
  { value: "2", label: "States Licensed" },
];

const testimonials = [
  {
    quote:
      "Law Better guided me through the most difficult divorce of my life. Andrew was honest, responsive, and fought for what was fair. I never felt like just another case number.",
    name: "Sarah M.",
    type: "Family Law Client",
  },
  {
    quote:
      "Andrew and his team handled our business formation and first contract dispute with the kind of care you don\u2019t expect from a law firm. They actually listened.",
    name: "Michael T.",
    type: "Business Law Client",
  },
  {
    quote:
      "After my accident, I didn\u2019t know where to turn. Law Better took the weight off my shoulders and got me the settlement I deserved. I can\u2019t recommend them enough.",
    name: "David R.",
    type: "Personal Injury Client",
  },
];

const steps = [
  {
    number: "1",
    title: "Schedule a Free Consultation",
    description:
      "Book a no-obligation conversation. We\u2019ll listen to your situation, answer your questions, and give you an honest assessment of your options.",
  },
  {
    number: "2",
    title: "We Build Your Strategy",
    description:
      "Every case is different. We craft a personalized legal strategy tailored to your goals, your timeline, and your budget.",
  },
  {
    number: "3",
    title: "We Fight For Your Outcome",
    description:
      "From negotiation to courtroom, we advocate aggressively on your behalf. You stay informed at every step\u2014no surprises, no runaround.",
  },
];

/* ==========================================================================
   Icons (inline SVG -- zero network requests)
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
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

function QuoteIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function CheckCircleIcon() {
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
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function HomePage() {
  return (
    <>
      {/* ================================================================
          SECTION 1: HERO
          Full viewport. Deep navy. The 3-second audition.
          Value proposition, not wordplay. Two CTAs. Earn the scroll.
          ================================================================ */}
      <section
        className="dark-section relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F1D2A]"
        aria-label="Hero"
      >
        {/* Animated mesh gradient -- 3 orbs, deep teal/blue, 5-8% opacity */}
        <div
          className="absolute left-[10%] top-[15%] h-[500px] w-[500px] rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
            animation: "float 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[5%] h-[600px] w-[600px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #237A8C 0%, transparent 70%)",
            animation: "float 25s ease-in-out 3s infinite",
          }}
        />
        <div
          className="absolute left-[55%] top-[55%] h-[350px] w-[350px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #144B57 0%, transparent 70%)",
            animation: "float 18s ease-in-out 6s infinite",
          }}
        />

        {/* Subtle grid pattern overlay at 2% opacity */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center text-center">
            {/* Licensed badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 backdrop-blur-sm animate-fade-in-up">
              <span className="h-2 w-2 rounded-full bg-[#1A5C6B]" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-[rgba(241,237,232,0.5)]">
                Licensed in Illinois &amp; Indiana
              </span>
            </div>

            {/* H1 -- DM Serif Display via global h1 styles */}
            <h1 className="animate-fade-in-up delay-100 text-[#F1EDE8]">
              Legal Counsel That
              <br />
              Fights For You.
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up delay-200 text-base leading-relaxed text-[rgba(241,237,232,0.5)] sm:text-lg md:mt-8 md:text-xl">
              Straightforward representation for families, businesses, and
              injury victims across Illinois and Indiana.
            </p>

            {/* Two CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up delay-300 sm:flex-row sm:gap-5 md:mt-12">
              <a
                href={CONSULTATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg group inline-flex items-center gap-2.5"
                aria-label="Schedule a free consultation"
              >
                <CalendarIcon />
                Schedule Free Consultation
              </a>
              <a
                href={PHONE_HREF}
                className="btn btn-light btn-lg group inline-flex items-center gap-2.5"
                aria-label={`Call us at ${PHONE_NUMBER}`}
              >
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade gradient to warm white */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
      </section>

      {/* ================================================================
          SECTION 2: TRUST BAR
          Overlapping hero bottom. Immediate credibility.
          Answers: "Can I trust these people?"
          ================================================================ */}
      <section className="relative z-10 -mt-6 pb-8" aria-label="Trust indicators">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-2xl border border-[#E8E4DF] bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:px-10 sm:py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#1A5C6B]" />
                  <span className="text-sm font-medium text-[#1C2A32]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 3: PROBLEM AGITATION
          Empathy first. Name the pain. Make them feel understood
          BEFORE we sell. This section earns the right to pitch.
          ================================================================ */}
      <section
        className="section-padding bg-[#FAFAF8]"
        aria-label="We understand your situation"
      >
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="divider-accent mx-auto mb-6" />
          <h2 className="text-[#1C2A32]">
            Legal Challenges Are Overwhelming.
            <br className="hidden sm:block" />
            {" "}You Don&rsquo;t Have to Face Them Alone.
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-5">
            <p className="text-base leading-relaxed text-[#5A6B75] md:text-lg">
              Whether you&rsquo;re going through a divorce, worried about
              protecting your family&rsquo;s future, dealing with a business
              dispute, or recovering from an injury that wasn&rsquo;t your
              fault&mdash;we know how heavy it all feels. The legal system
              can seem designed to confuse and exhaust you.
            </p>
            <p className="text-base leading-relaxed text-[#5A6B75] md:text-lg">
              You deserve an attorney who actually picks up the phone. Who
              explains your options in plain English. Who treats your case
              like it matters&mdash;because it does. That&rsquo;s what we
              built Law Better to be.
            </p>
          </div>
          {/* Brass accent divider */}
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-[#C4963C] to-transparent" />
        </div>
      </section>

      {/* ================================================================
          SECTION 4: PRACTICE AREAS
          "What We Fight For" -- Bento grid. 4 cards. Tease, don't
          over-explain. Each earns a click to its subpage.
          ================================================================ */}
      <section
        id="practice-areas"
        className="section-padding bg-[#F5F2EE]"
        aria-label="Practice areas"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-accent mx-auto mb-5" />
            <h2 className="text-[#1C2A32]">What We Fight For</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6B75] md:text-lg">
              Experienced legal counsel across the areas that matter most
              to you and your family.
            </p>
          </div>

          {/* Bento grid: 2x2 desktop, stack mobile */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
            {practiceAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group relative rounded-2xl border border-[#E8E4DF] bg-white p-8 no-underline transition-all duration-300 hover:-translate-y-1 hover:border-[#E8E4DF] hover:shadow-[0_8px_40px_rgba(15,29,42,0.08)] sm:p-10"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#1A5C6B]/[0.08] text-[#1A5C6B] transition-colors duration-300 group-hover:bg-[#1A5C6B]/[0.12]">
                  {area.icon}
                </div>

                {/* Title -- h3 gets DM Serif Display from globals */}
                <h3 className="mb-3 text-[#1C2A32]">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[#5A6B75]">
                  {area.description}
                </p>

                {/* "Learn more" link -- appears on hover */}
                <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#1A5C6B] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight />
                </div>

                {/* Teal accent line at bottom on hover */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-[#1A5C6B] to-[#237A8C] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 5: WHY LAW BETTER
          Two columns. Text left, image right. Build desire.
          Real stats. Mission quote. Personal story.
          ================================================================ */}
      <section
        className="section-padding bg-white"
        aria-label="Why Law Better"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left column: content */}
            <div>
              <div className="divider-accent mb-5" />
              <h2 className="text-[#1C2A32]">Why Law Better?</h2>
              <p className="mt-6 text-base leading-relaxed text-[#5A6B75] md:text-lg">
                At Law Better, we believe everyone deserves high-quality
                legal representation with individualized attention. Founded
                by Andrew M. Klaas, our firm is built on the principle that
                navigating the legal system should never feel overwhelming
                or impersonal.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#5A6B75] md:text-lg">
                We take the time to understand your unique situation, craft
                a strategy tailored to your goals, and stand by you every
                step of the way. No cookie-cutter solutions. No
                assembly-line service. Just straightforward, personal
                counsel for the moments that matter most.
              </p>

              {/* Real stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-semibold tracking-tight text-[#1C2A32] md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#8A959D]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: image + mission quote */}
            <div className="flex flex-col gap-6">
              {/* Professional office image placeholder */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#E8E4DF]">
                <Image
                  src="/images/generated/office-interior.webp"
                  alt="Law Better LLC office interior - professional legal environment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Mission quote blockquote */}
              <blockquote className="relative rounded-2xl border border-[#E8E4DF] bg-[#FAFAF8] p-8">
                <div className="mb-3 h-[3px] w-10 rounded-full bg-[#C4963C]" />
                <p className="text-base italic leading-relaxed text-[#1C2A32]">
                  &ldquo;We are here to help you successfully navigate the
                  legal system in a cost effective and simple manner.&rdquo;
                </p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#C4963C]">
                  Our Mission
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 6: HOW IT WORKS
          3-step process. Reduce anxiety. Show the path from
          "I'm overwhelmed" to "I have an advocate."
          ================================================================ */}
      <section
        className="section-padding bg-[#F5F2EE]"
        aria-label="How it works"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-accent mx-auto mb-5" />
            <h2 className="text-[#1C2A32]">How It Works</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6B75] md:text-lg">
              Three simple steps to getting the legal help you need.
            </p>
          </div>

          {/* 3 steps -- horizontal on desktop, stack on mobile */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-[#E8E4DF] bg-white p-8 text-center sm:p-10"
              >
                {/* Step number in brass */}
                <span
                  className="mb-4 inline-block text-5xl font-normal text-[#C4963C] md:text-6xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Step title */}
                <h3 className="mb-3 text-[#1C2A32]">{step.title}</h3>

                {/* Step description */}
                <p className="mx-auto text-sm leading-relaxed text-[#5A6B75]">
                  {step.description}
                </p>

                {/* Connector line between steps (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[#E8E4DF] md:block lg:-right-5 lg:w-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 7: TEAM PREVIEW
          People trust people. Rectangular images, not circles.
          Names in DM Serif Display. Titles in teal.
          ================================================================ */}
      <section
        id="team"
        className="section-padding bg-white"
        aria-label="Our team"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-accent mx-auto mb-5" />
            <h2 className="text-[#1C2A32]">Meet Our Team</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#5A6B75] md:text-lg">
              Dedicated professionals committed to your success.
            </p>
          </div>

          {/* Team grid -- 4 columns on lg */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-[#E8E4DF] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(15,29,42,0.08)] sm:p-8"
              >
                {/* Headshot -- rectangular, rounded-xl, NOT circular */}
                <div className="relative mx-auto mb-5 aspect-[3/4] w-full max-w-[200px] overflow-hidden rounded-xl border border-[#E8E4DF] transition-all duration-300 group-hover:border-[#1A5C6B]/30">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                  />
                </div>

                {/* Name -- DM Serif Display via h4 global style */}
                <h4 className="text-[#1C2A32]">{member.name}</h4>

                {/* Title in teal */}
                <p className="mt-1 text-sm font-medium text-[#1A5C6B]">
                  {member.title}
                </p>

                {/* Specialty muted */}
                <p className="mt-2 text-xs text-[#8A959D]">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 8: TESTIMONIALS
          Social proof on dark background. 3 cards. Glass-dark effect.
          Real-sounding quotes with first name + case type.
          ================================================================ */}
      <section
        className="dark-section section-padding bg-[#0F1D2A]"
        aria-label="Client testimonials"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-accent mx-auto mb-5" />
            <h2 className="text-[#F1EDE8]">What Our Clients Say</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[rgba(241,237,232,0.5)] md:text-lg">
              Real results for real people. Here&rsquo;s what it&rsquo;s
              like to work with Law Better.
            </p>
          </div>

          {/* Testimonial cards: 3 across desktop, stack mobile */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-dark rounded-2xl p-8 sm:p-10"
              >
                {/* Quote icon */}
                <div className="mb-4 text-[#C4963C] opacity-40">
                  <QuoteIcon />
                </div>

                {/* Quote text */}
                <p className="text-base leading-relaxed text-[rgba(241,237,232,0.7)]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-sm font-semibold text-[#F1EDE8]">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-[#1A5C6B]">
                    {t.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          SECTION 9: CTA SECTION
          They scrolled this far -- they're warm. Close it.
          Dark background. Subtle gradient orb. Single clear CTA.
          Phone number. Address. Final conversion push.
          ================================================================ */}
      <section
        id="contact"
        className="dark-section relative overflow-hidden bg-[#0F1D2A] py-24 sm:py-32"
        aria-label="Contact us"
      >
        {/* Subtle gradient orb */}
        <div
          className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-[#F1EDE8]">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[rgba(241,237,232,0.5)] md:text-lg">
            Schedule your free consultation today and let us help you
            navigate the legal system with confidence. No pressure, no
            obligation&mdash;just a straightforward conversation about your
            options.
          </p>

          {/* Primary CTA */}
          <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <a
              href={CONSULTATION_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg group inline-flex items-center gap-2.5"
              aria-label="Schedule a free consultation"
            >
              <CalendarIcon />
              Schedule Free Consultation
            </a>
          </div>

          {/* Phone */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[rgba(241,237,232,0.5)]">
            <PhoneIcon />
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-[rgba(241,237,232,0.5)] no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Address */}
          <p className="mt-4 text-sm text-[rgba(241,237,232,0.3)]">
            1600 McConnor Parkway, 11th Floor, Schaumburg, Illinois 60173
          </p>
        </div>
      </section>
    </>
  );
}
