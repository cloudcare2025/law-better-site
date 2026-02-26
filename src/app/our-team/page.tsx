import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

/* ==========================================================================
   Metadata
   ========================================================================== */

export const metadata: Metadata = {
  title: "Our Team | Law Better, LLC",
  description:
    "Meet the dedicated professionals at Law Better, LLC. Experienced attorneys and support staff committed to providing high-quality, personalized legal services in Illinois and Indiana.",
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

interface PracticeAreaTag {
  label: string;
}

interface Education {
  degree: string;
  institution: string;
  year?: string;
  note?: string;
}

interface TeamMemberData {
  name: string;
  title: string;
  image: string;
  practiceAreas?: PracticeAreaTag[];
  bio?: string[];
  education?: Education[];
  licensedIn?: string[];
  role?: string;
}

const teamMembers: TeamMemberData[] = [
  {
    name: "Andrew M. Klaas",
    title: "Founder & Managing Member",
    image: "/images/team/andrew-klaas.jpg",
    practiceAreas: [
      { label: "Family Law" },
      { label: "Divorce" },
      { label: "Custody" },
      { label: "Child Support" },
      { label: "Orders of Protection" },
      { label: "Domestic Disputes" },
      { label: "Estate Planning" },
      { label: "Wills" },
      { label: "Trusts" },
      { label: "Powers of Attorney" },
      { label: "Business Formation and Service" },
      { label: "Civil Litigation" },
    ],
    bio: [
      "Andrew M. Klaas believes in the simple premise of providing clients with high-quality legal services and individualized attention. For many years, that philosophy has driven the firm\u2019s approach to helping clients with not only their professional legal needs, but their personal ones as well.",
      "Andrew is a Trial Attorney who concentrates his practice in litigation, civil disputes, family law, estate planning, guardianships, business formation, and business litigation. His experience has taught him to represent on behalf of his clients while recognizing their needs for the present and future.",
      "Andrew spends a considerable portion of his time focusing on family law disputes. After his time with Barrington Police Department and practicing law for the Domestic Violence Clinic under Illinois Supreme Court Rule 711, he possesses a unique understanding of his client\u2019s personal and psychological needs. Andrew has volunteered with Chicago Volunteer Legal Services to represent children as a Guardian Ad Litem and Child Representative. Andrew was recently appointed to the Cook County Guardian Ad Litem and Child Representative List. Andrew has enjoyed giving back to his community by volunteering in Willow Creek\u2019s Awana program and accepting a board member position with the KlaasKids Foundation to help continue the fight against child abuse.",
    ],
    education: [
      {
        degree: "Bachelor\u2019s of Science Degree",
        institution: "Oklahoma State University",
        year: "2016",
        note: "Applied Sociology and Law Enforcement",
      },
      {
        degree: "Juris Doctor Degree",
        institution: "Southern Illinois University School of Law",
        year: "2018",
      },
    ],
    licensedIn: ["Illinois", "Indiana"],
  },
  {
    name: "John P. Baglia",
    title: "Of Counsel",
    image: "/images/team/john-baglia.jpg",
    practiceAreas: [
      { label: "Personal Injury" },
      { label: "Wrongful Death" },
      { label: "Car Accidents" },
      { label: "Slip and Fall" },
      { label: "Dog Bite Litigation" },
      { label: "Premises Liability" },
      { label: "Civil Litigation" },
    ],
    bio: [
      "Since 2018, John P. Baglia has dedicated his career to advocating for individuals and families in some of life\u2019s most difficult times. He has built his practice on exhaustive preparation, sharp litigation strategy, and an unwavering commitment to achieving results.",
      "Mr. Baglia is an experienced litigation attorney focusing on trucking accidents, automobile collisions, personal injury, and wrongful death. In just seven years, he has helped secure millions of dollars in compensation for clients, with cases ranging from catastrophic wrongful death matters to temporary injuries.",
    ],
    education: [
      {
        degree: "Undergraduate Degree",
        institution: "Florida State University",
        note: "International Affairs",
      },
      {
        degree: "Juris Doctor Degree",
        institution: "UIC John Marshall Law School",
        note: "Graduated cum laude. Law review comment selected for publication in the John Marshall Law Review.",
      },
    ],
    licensedIn: ["Illinois", "Florida"],
  },
  {
    name: "Reagan M. Petrow",
    title: "Legal Assistant",
    image: "/images/team/reagan-petrow.jpg",
    practiceAreas: [
      { label: "Family Law" },
      { label: "Divorce" },
      { label: "Custody" },
      { label: "Child Support" },
      { label: "Orders of Protection" },
      { label: "Domestic Disputes" },
      { label: "Estate Planning" },
      { label: "Wills" },
      { label: "Trusts" },
      { label: "Powers of Attorney" },
      { label: "Business Formation and Service" },
      { label: "Civil Litigation" },
    ],
    role: "Legal Assistant supporting case management across all practice areas.",
  },
  {
    name: "Chase R. Peterson",
    title: "Account Specialist",
    image: "/images/team/chase-peterson.jpg",
    role: "Client Accounting, Financial and Technology Consultant.",
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

function GraduationIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
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

/* ==========================================================================
   Sub-Components
   ========================================================================== */

function PracticeAreaPills({ areas }: { areas: PracticeAreaTag[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {areas.map((area) => (
        <span
          key={area.label}
          className="rounded-full border border-[#1A5C6B]/20 bg-[#1A5C6B]/[0.05] px-3 py-1 text-xs font-medium text-[#1A5C6B]"
        >
          {area.label}
        </span>
      ))}
    </div>
  );
}

function EducationSection({ education }: { education: Education[] }) {
  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center gap-2 text-[#1C2A32]">
        <GraduationIcon />
        <h4
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Education
        </h4>
      </div>
      <div className="space-y-3">
        {education.map((edu) => (
          <div
            key={`${edu.degree}-${edu.institution}`}
            className="rounded-lg border border-[#E8E4DF] bg-[#F5F2EE] px-4 py-3"
          >
            <p className="text-sm font-semibold text-[#1C2A32]">
              {edu.degree}
            </p>
            <p className="mt-0.5 text-sm text-[#5A6B75]">
              {edu.institution}
              {edu.year ? ` (${edu.year})` : ""}
            </p>
            {edu.note && (
              <p className="mt-1 text-xs text-[#8A959D]">{edu.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LicenseSection({ states }: { states: string[] }) {
  return (
    <div className="mt-6 flex items-center gap-2">
      <span className="text-[#1A5C6B]">
        <ScaleIcon />
      </span>
      <p className="text-sm font-medium text-[#1C2A32]">
        Licensed in {states.join(" & ")}
      </p>
    </div>
  );
}

/* ==========================================================================
   Team Member Section Component
   ========================================================================== */

function TeamMemberSection({
  member,
  index,
}: {
  member: TeamMemberData;
  index: number;
}) {
  const isReversed = index % 2 !== 0;
  const hasFullBio = member.bio && member.bio.length > 0;
  const hasEducation = member.education && member.education.length > 0;

  return (
    <section
      id={member.name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}
      className={`py-16 md:py-20 ${index % 2 === 0 ? "bg-white" : "bg-[#F5F2EE]"}`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div
          className={`grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16 ${
            isReversed ? "direction-rtl" : ""
          }`}
        >
          {/* Headshot Column */}
          <div
            className={`lg:col-span-4 ${
              isReversed ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <div className="sticky top-24">
              <div className="relative mx-auto aspect-[3/4] max-w-[280px] overflow-hidden rounded-xl border-2 border-[#E8E4DF] shadow-[0_8px_40px_rgba(15,29,42,0.08)] lg:max-w-none">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title} at Law Better, LLC`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 280px, 33vw"
                  priority={index < 2}
                />
                {/* Accent line at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1A5C6B] to-[#C4963C]" />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div
            className={`lg:col-span-8 ${
              isReversed ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {/* Name & Title */}
            <div className="mb-6">
              <h2 className="font-serif text-[#1C2A32]">
                {member.name}
              </h2>
              <p className="mt-2 text-lg font-semibold text-[#1A5C6B]">
                {member.title}
              </p>
            </div>

            {/* Practice Areas */}
            {member.practiceAreas && member.practiceAreas.length > 0 && (
              <div className="mb-8">
                <h3
                  className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#8A959D]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Primary Areas of Practice
                </h3>
                <PracticeAreaPills areas={member.practiceAreas} />
              </div>
            )}

            {/* Bio */}
            {hasFullBio && (
              <div className="space-y-4">
                {member.bio?.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-[#5A6B75]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* Role Description (for non-attorney members) */}
            {member.role && !hasFullBio && (
              <p className="text-base leading-relaxed text-[#5A6B75]">
                {member.role}
              </p>
            )}

            {/* Education */}
            {hasEducation && (
              <EducationSection education={member.education!} />
            )}

            {/* License */}
            {member.licensedIn && member.licensedIn.length > 0 && (
              <LicenseSection states={member.licensedIn} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   Page Component
   ========================================================================== */

export default function OurTeamPage() {
  return (
    <>
      {/* ================================================================
          HERO SECTION
          Interior page hero. Dark bg. Breadcrumb context.
          ================================================================ */}
      <section className="relative flex items-end overflow-hidden bg-[#0F1D2A] pb-16 pt-32 sm:pb-20 sm:pt-36 md:pb-24 md:pt-40">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D2A] via-[#162330] to-[#0F1D2A]" />

        {/* Floating gradient orb for depth */}
        <div
          className="absolute right-[10%] top-[20%] h-[400px] w-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #1A5C6B 0%, transparent 70%)",
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
                <span className="font-medium text-[#1A5C6B]">Our Team</span>
              </li>
            </ol>
          </nav>

          {/* Heading */}
          <div className="divider-accent mb-5" />
          <h1 className="animate-fade-in-up font-serif text-[#F1EDE8]">
            Our Team
          </h1>
          <p className="mt-4 max-w-xl animate-fade-in-up delay-100 text-base leading-relaxed text-[#F1EDE8]/50 sm:text-lg md:text-xl">
            Dedicated Professionals Committed to Your Success
          </p>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ================================================================
          TEAM MEMBERS
          Alternating layout sections. Full bios. Conversion architecture.
          ================================================================ */}
      {teamMembers.map((member, index) => (
        <TeamMemberSection key={member.name} member={member} index={index} />
      ))}

      {/* ================================================================
          CTA SECTION
          They've read about the team. They trust. Close it.
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
          <div className="divider-accent mx-auto mb-6" />
          <h2 className="font-serif text-[#F1EDE8]">
            Work With Our Team
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed md:text-lg">
            Schedule your free consultation today and let our experienced team
            help you navigate the legal system with confidence.
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
