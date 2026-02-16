import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of architectural work exploring affordable housing, community design, adaptive reuse, and urban development.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
