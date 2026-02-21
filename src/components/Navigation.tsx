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
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] border-b border-white/20"
            : "bg-transparent"
        }`}
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
                className={`text-xl font-bold tracking-tight transition-colors duration-300 md:text-2xl ${
                  scrolled ? "text-[#0a1628]" : "text-white"
                }`}
              >
                Law Better
              </span>
              <span
                className={`text-xl font-light tracking-tight transition-colors duration-300 md:text-2xl ${
                  scrolled ? "text-[#0a1628]/70" : "text-white/70"
                }`}
              >
                , LLC
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 md:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 no-underline hover:bg-black/5 ${
                    scrolled
                      ? "text-[#0a1628]/80 hover:text-[#0a1628]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
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
                className={`text-sm font-medium transition-colors duration-300 no-underline ${
                  scrolled
                    ? "text-[#0a1628]/70 hover:text-[#0a1628]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {PHONE_NUMBER}
              </a>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-lg bg-[#1a3a5c] px-5 text-sm font-semibold text-white shadow-sm transition-all duration-200 no-underline hover:bg-[#244d75] hover:shadow-md active:scale-[0.98]"
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
                  ? "text-white"
                  : scrolled
                    ? "text-[#0a1628] hover:bg-black/5"
                    : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "translate-y-[7px] rotate-45 bg-white"
                      : scrolled
                        ? "bg-[#0a1628]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "opacity-0"
                      : scrolled
                        ? "bg-[#0a1628]"
                        : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[2px] w-5 rounded-full transition-all duration-300 ${
                    mobileOpen
                      ? "-translate-y-[7px] -rotate-45 bg-white"
                      : scrolled
                        ? "bg-[#0a1628]"
                        : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a1628] transition-all duration-500 ease-out md:hidden ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div
          className={`flex h-full flex-col items-center justify-center gap-2 transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobile}
              className="rounded-xl px-6 py-3 text-2xl font-medium text-white/90 no-underline transition-colors duration-200 hover:bg-white/5 hover:text-white"
              style={{ transitionDelay: mobileOpen ? `${80 + i * 50}ms` : "0ms" }}
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href={PHONE_HREF}
              className="text-base font-medium text-white/60 no-underline transition-colors duration-200 hover:text-white"
              onClick={closeMobile}
            >
              {PHONE_NUMBER}
            </a>
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center rounded-lg bg-white px-8 text-base font-semibold text-[#0a1628] no-underline shadow-lg transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
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
