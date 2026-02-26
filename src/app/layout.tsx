import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif-display",
});

export const metadata: Metadata = {
  title: "Law Better, LLC | Do Better.",
  description:
    "We are here to help you successfully navigate the legal system in a cost effective and simple manner. Licensed in Illinois & Indiana. Family Law, Estate Planning, Business Law, and Personal Injury.",
  keywords: [
    "law firm",
    "attorney",
    "lawyer",
    "Illinois",
    "Indiana",
    "family law",
    "estate planning",
    "business law",
    "personal injury",
    "Schaumburg",
  ],
  openGraph: {
    title: "Law Better, LLC | Do Better.",
    description:
      "Navigating the legal system shouldn't be complicated. We make it simple, cost-effective, and personal.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
