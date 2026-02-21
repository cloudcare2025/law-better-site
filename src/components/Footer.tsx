import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const QUICK_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Family Law", href: "/areas-of-practice/family-law" },
  { label: "Estate Planning", href: "/areas-of-practice/estate-planning" },
  { label: "Business Law", href: "/areas-of-practice/business-law" },
  { label: "Personal Injury", href: "/areas-of-practice/personal-injury" },
  { label: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";
const LINKEDIN_URL = "https://www.linkedin.com/in/andrew-klaas-esq/";
const ADDRESS_LINE_1 = "1600 McConnor Parkway, 11th Floor";
const ADDRESS_LINE_2 = "Schaumburg, IL 60173";
const DISCLAIMER =
  "Law Better, LLC was created to connect real people with legal resources and attorneys who can help them with their legal needs. Nothing contained on this website creates an attorney-client relationship. None of the information contained on this website constitutes legal advice.";

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
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
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-10 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="max-w-sm">
            <Link href="/" className="mb-5 inline-block no-underline">
              <span className="text-xl font-bold tracking-tight text-white">
                Law Better
              </span>
              <span className="text-xl font-light tracking-tight text-white/70">
                , LLC
              </span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/50">
              Connecting real people with legal resources and attorneys who
              understand their needs. Straightforward counsel for life&apos;s
              most important legal matters.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/40 transition-all duration-200 no-underline hover:bg-white/5 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white/30">
              Contact
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm leading-relaxed text-white/50">
                  {ADDRESS_LINE_1}
                  <br />
                  {ADDRESS_LINE_2}
                </p>
              </div>
              <a
                href={PHONE_HREF}
                className="block text-sm font-medium text-white/70 no-underline transition-colors duration-200 hover:text-white"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-sm text-white/40">
                Licensed in Illinois &amp; Indiana
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="h-px bg-white/10" />
      </div>

      {/* Disclaimer + Copyright */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <p className="mb-4 max-w-4xl text-xs leading-relaxed text-white/30">
          {DISCLAIMER}
        </p>
        <p className="text-xs text-white/25">
          &copy; 2026 Law Better, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
