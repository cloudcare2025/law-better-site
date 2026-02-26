import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const PRACTICE_AREAS: FooterLink[] = [
  { label: "Family Law", href: "/areas-of-practice/family-law" },
  { label: "Estate Planning", href: "/areas-of-practice/estate-planning" },
  { label: "Business Law", href: "/areas-of-practice/business-law" },
  { label: "Personal Injury", href: "/areas-of-practice/personal-injury" },
];

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Areas of Practice", href: "/areas-of-practice" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";
const CONSULTATION_URL = "https://calendar.app.google/fZNiHyLmmCJHbtga8";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-klaas-esq/";
const ADDRESS_LINE_1 = "1600 McConnor Parkway, 11th Floor";
const ADDRESS_LINE_2 = "Schaumburg, IL 60173";
const DISCLAIMER =
  "Law Better, LLC was created to connect real people with legal resources and attorneys who can help them with their legal needs. Nothing contained on this website creates an attorney-client relationship. None of the information contained on this website constitutes legal advice.";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0F1D2A]">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-5 inline-block no-underline">
              <span
                className="text-xl font-bold tracking-tight text-[#F1EDE8]"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                Law Better
              </span>
              <span className="text-xl font-light tracking-tight text-[#F1EDE8]/60">
                , LLC
              </span>
            </Link>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-[#F1EDE8]/50">
              Connecting real people with legal resources and attorneys who
              understand their needs. Straightforward counsel for life&apos;s
              most important legal matters.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-[#F1EDE8]/40 transition-all duration-200 no-underline hover:bg-white/[0.05] hover:text-[#F1EDE8]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F1EDE8]/30">
              Practice Areas
            </h3>
            <ul className="space-y-3">
              {PRACTICE_AREAS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#1A5C6B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F1EDE8]/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#1A5C6B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#F1EDE8]/30">
              Contact
            </h3>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-[#F1EDE8]/50">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </p>
              <a
                href={PHONE_HREF}
                className="block text-sm font-medium text-[#F1EDE8]/70 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-sm text-[#F1EDE8]/40">
                Licensed in Illinois &amp; Indiana
              </p>
              <p className="text-sm text-[#F1EDE8]/40">
                By Appointment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-white/[0.08]" />
      </div>

      {/* Disclaimer + Copyright */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <p className="mb-4 max-w-4xl text-xs leading-relaxed text-[#F1EDE8]/25">
          {DISCLAIMER}
        </p>
        <p className="text-xs text-[#F1EDE8]/20">
          &copy; 2026 Law Better, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
