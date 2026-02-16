import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Yingzhuo Wang is an architectural designer specializing in affordable housing and community-focused design, with a Master of Architecture from the University of Virginia.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
