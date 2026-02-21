import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas of Practice | Law Better, LLC",
  description:
    "Explore our practice areas: Family Law, Estate Planning, Business Law, and Personal Injury. Experienced legal counsel in Illinois and Indiana.",
};

export default function AreasOfPracticeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
