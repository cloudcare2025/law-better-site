"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Areas of Practice", href: "/areas-of-practice" },
  { label: "Our Team", href: "/our-team" },
  { label: "Contact", href: "/contact" },
];

const PHONE_NUMBER = "(224) 241-2196";
const PHONE_HREF = "tel:+12242412196";
const CONSULTATION_URL = "https://calendar.app.google/fZNiHyLmmCJHbtga8";
const SCROLL_THRESHOLD = 32;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "border-b border-[#E8E4DF] bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        style={
          scrolled
            ? {
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
              }
            : undefined
        }
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-baseline gap-0 no-underline"
              onClick={closeMobile}
            >
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 md:text-[22px]`}
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                <span
                  className={
                    scrolled ? "text-[#1C2A32]" : "text-[#F1EDE8]"
                  }
                >
                  Law Better
                </span>
              </span>
              <span
                className={`text-xl font-light tracking-tight transition-colors duration-300 md:text-[22px] ${
                  scrolled ? "text-[#1C2A32]/60" : "text-[#F1EDE8]/60"
                }`}
              >
                , LLC
              </span>
            </Link>

            {/* Desktop Navigation -- centered */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-[14px] font-medium transition-all duration-200 no-underline ${
                    scrolled
                      ? "text-[#5A6B75] hover:bg-[#1C2A32]/[0.04] hover:text-[#1C2A32]"
                      : "text-[#F1EDE8]/80 hover:bg-white/[0.08] hover:text-[#F1EDE8]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Right Side: Phone + CTA */}
            <div className="hidden items-center gap-5 md:flex">
              <a
                href={PHONE_HREF}
                className={`text-[14px] font-medium transition-colors duration-300 no-underline ${
                  scrolled
                    ? "text-[#5A6B75] hover:text-[#1C2A32]"
                    : "text-[#F1EDE8]/70 hover:text-[#F1EDE8]"
                }`}
              >
                {PHONE_NUMBER}
              </a>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-[10px] bg-[#1A5C6B] px-5 text-[14px] font-semibold text-white no-underline transition-all duration-200 hover:bg-[#237A8C] hover:shadow-md active:scale-[0.98]"
              >
                Free Consultation
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-200 md:hidden ${
                mobileOpen
                  ? "text-[#F1EDE8]"
                  : scrolled
                    ? "text-[#1C2A32] hover:bg-[#1C2A32]/[0.04]"
                    : "text-[#F1EDE8] hover:bg-white/[0.08]"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "translate-y-[7px] rotate-45 bg-[#F1EDE8]"
                      : scrolled
                        ? "bg-[#1C2A32]"
                        : "bg-[#F1EDE8]"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-0"
                      : scrolled
                        ? "bg-[#1C2A32]"
                        : "bg-[#F1EDE8]"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "-translate-y-[7px] -rotate-45 bg-[#F1EDE8]"
                      : scrolled
                        ? "bg-[#1C2A32]"
                        : "bg-[#F1EDE8]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F1D2A] transition-all duration-500 ease-out md:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col items-center justify-center transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          {/* Nav Links */}
          <div className="flex flex-col items-center gap-2">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className="rounded-xl px-6 py-3 text-[28px] font-medium text-[#F1EDE8]/90 no-underline transition-all duration-200 hover:bg-white/[0.04] hover:text-[#F1EDE8]"
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone + CTA at bottom of links cluster */}
          <div className="mt-10 flex flex-col items-center gap-5">
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-[#F1EDE8]/50 no-underline transition-colors duration-200 hover:text-[#F1EDE8]"
              onClick={closeMobile}
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-[10px] bg-[#1A5C6B] px-8 text-base font-semibold text-white no-underline transition-all duration-200 hover:bg-[#237A8C] active:scale-[0.98]"
              onClick={closeMobile}
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
