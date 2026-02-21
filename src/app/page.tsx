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
  "Personalized Attention",
  "Cost-Effective Solutions",
];

const stats = [
  { value: "2", label: "States Licensed" },
  { value: "4", label: "Practice Areas" },
  { value: "100%", label: "Personalized Approach" },
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

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function HomePage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          Full viewport. Deep navy gradient. The 3-second audition.
          ================================================================ */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a1628]">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0f1d32] to-[#0a1628]" />

        {/* Floating gradient orbs for depth */}
        <div
          className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[10%] right-[5%] h-[600px] w-[600px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #4a90d9 0%, transparent 70%)",
            animation: "float 12s ease-in-out 2s infinite",
          }}
        />
        <div
          className="absolute left-[60%] top-[60%] h-[300px] w-[300px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
            animation: "float 10s ease-in-out 4s infinite",
          }}
        />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col items-center text-center">
            {/* Licensed badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-sm animate-fade-in-up">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
              <span className="text-xs font-medium tracking-wider uppercase text-white/60">
                Licensed in Illinois &amp; Indiana
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Law Better.
              <br />
              <span className="text-gradient-gold">Do Better.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-6 max-w-2xl animate-fade-in-up delay-200 text-base leading-relaxed text-white/50 sm:text-lg md:mt-8 md:text-xl">
              Navigating the legal system shouldn&apos;t be complicated. We make
              it simple, cost-effective, and personal.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 animate-fade-in-up delay-300 sm:flex-row sm:gap-5 md:mt-12">
              <a
                href={CONSULTATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg group inline-flex items-center gap-2.5 rounded-xl bg-[#c9a84c] px-8 py-4 text-base font-semibold text-[#0a1628] shadow-lg shadow-[#c9a84c]/20 transition-all duration-200 no-underline hover:bg-[#d4b96a] hover:shadow-xl hover:shadow-[#c9a84c]/30 active:scale-[0.98]"
              >
                <CalendarIcon />
                Schedule Free Consultation
              </a>
              <a
                href={PHONE_HREF}
                className="btn btn-lg group inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.04] px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 no-underline hover:border-white/25 hover:bg-white/[0.08] active:scale-[0.98]"
              >
                <PhoneIcon />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafaf8] to-transparent" />
      </section>

      {/* ================================================================
          TRUST BAR
          Immediate credibility. Answers "Can I trust these people?"
          ================================================================ */}
      <section className="relative z-10 -mt-6 pb-8">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="rounded-2xl border border-[#e2e8f0] bg-white px-6 py-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:px-10 sm:py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:justify-between">
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#c9a84c]" />
                  <span className="text-sm font-medium text-[#334155]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          PRACTICE AREAS
          "How We Help" -- 4 cards. Clear headlines. Tease, don't over-explain.
          ================================================================ */}
      <section id="practice-areas" className="section-padding bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-gold mx-auto mb-5" />
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl md:text-5xl">
              How We Help
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#64748b] md:text-lg">
              Experienced legal counsel across the areas that matter most to you
              and your family.
            </p>
          </div>

          {/* Cards grid */}
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
          WHY LAW BETTER
          Two columns. Text left, decorative right. Build desire.
          ================================================================ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left: Content */}
            <div>
              <div className="divider-gold mb-5" />
              <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl md:text-5xl">
                Why Law Better?
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#64748b] md:text-lg">
                At Law Better, we believe everyone deserves high-quality legal
                representation with individualized attention. Founded by Andrew
                M. Klaas, our firm is built on the principle that navigating the
                legal system should never feel overwhelming.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#64748b] md:text-lg">
                We take the time to understand your unique situation, craft a
                strategy tailored to your goals, and stand by you every step of
                the way. No cookie-cutter solutions. No assembly-line service.
                Just straightforward, personal counsel for the moments that
                matter most.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold tracking-tight text-[#0a1628] md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#64748b]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Decorative element */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-md">
                {/* Background shapes */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-[#0a1628] to-[#1a2940]" />
                <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-[#c9a84c]/10" />
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border-2 border-[#c9a84c]/20" />

                {/* Content inside the shape */}
                <div className="relative flex h-full flex-col items-center justify-center p-12 text-center">
                  <div className="mb-4 h-px w-12 bg-[#c9a84c]" />
                  <blockquote className="text-lg font-medium italic leading-relaxed text-white/80">
                    &ldquo;We are here to help you successfully navigate the
                    legal system in a cost effective and simple manner.&rdquo;
                  </blockquote>
                  <div className="mt-4 h-px w-12 bg-[#c9a84c]" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                    Our Mission
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile mission statement */}
            <div className="lg:hidden">
              <div className="rounded-2xl bg-[#0a1628] p-8 text-center">
                <div className="mx-auto mb-4 h-px w-12 bg-[#c9a84c]" />
                <blockquote className="text-base font-medium italic leading-relaxed text-white/80">
                  &ldquo;We are here to help you successfully navigate the legal
                  system in a cost effective and simple manner.&rdquo;
                </blockquote>
                <div className="mx-auto mt-4 h-px w-12 bg-[#c9a84c]" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                  Our Mission
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TEAM PREVIEW
          People build trust. Faces, names, titles.
          ================================================================ */}
      <section id="team" className="section-padding bg-[#fafaf8]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section header */}
          <div className="mb-14 text-center md:mb-20">
            <div className="divider-gold mx-auto mb-5" />
            <h2 className="text-3xl font-bold tracking-tight text-[#0a1628] sm:text-4xl md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#64748b] md:text-lg">
              Dedicated professionals committed to your success.
            </p>
          </div>

          {/* Team grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group rounded-2xl border border-[#e2e8f0] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] sm:p-8"
              >
                {/* Headshot */}
                <div className="relative mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-[#e2e8f0] transition-all duration-300 group-hover:border-[#c9a84c]/40 sm:h-32 sm:w-32">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="128px"
                  />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-[#0a1628]">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#c9a84c]">
                  {member.title}
                </p>
                <p className="mt-2 text-xs text-[#64748b]">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
          They scrolled this far -- they're warm. Close it.
          ================================================================ */}
      <section id="contact" className="relative overflow-hidden bg-[#0a1628] py-24 sm:py-32">
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
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
            Schedule your free consultation today and let us help you navigate
            the legal system with confidence.
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
          <div className="mt-8 flex items-center justify-center gap-2">
            <PhoneIcon />
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-white/60 no-underline transition-colors duration-200 hover:text-white"
            >
              {PHONE_NUMBER}
            </a>
          </div>

          {/* Address */}
          <p className="mt-4 text-sm text-white/30">
            1600 McConnor Parkway, 11th Floor, Schaumburg, Illinois 60173
          </p>
        </div>
      </section>
    </>
  );
}
