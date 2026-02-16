export type ProjectCategory =
  | "residential"
  | "community"
  | "urban-design"
  | "adaptive-reuse"
  | "public";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  location: string;
  categories: ProjectCategory[];
  thumbnail: string;
  images: string[];
  description: string;
  philosophy: string;
  communityImpact: string;
  featured: boolean;
  award?: string;
  interviewUrl?: string;
  competitionUrl?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  residential: "Residential",
  community: "Community",
  "urban-design": "Urban Design",
  "adaptive-reuse": "Adaptive Reuse",
  public: "Public",
};

export const projects: Project[] = [
  {
    slug: "re-alley",
    title: "Re: Alley",
    subtitle: "Adaptive Reuse of Denver Alleyways for Affordable Housing",
    year: "2025",
    location: "Denver, CO",
    categories: ["adaptive-reuse", "residential", "urban-design"],
    thumbnail: "/images/projects/re-alley-01.jpg",
    images: [
      "/images/projects/re-alley-01.jpg",
      "/images/projects/re-alley-02.jpg",
      "/images/projects/re-alley-03.jpg",
      "/images/projects/re-alley-04.jpg",
    ],
    description:
      "Re: Alley reimagines Denver's extensive alley infrastructure as a framework for incremental affordable housing development. The project challenges conventional approaches to density by activating underutilized urban corridors, transforming them into vibrant, livable spaces that integrate housing with community amenities. By working within existing urban fabric rather than against it, the design demonstrates how affordable housing can emerge organically from a city's existing spatial resources.",
    philosophy:
      "This project embodies the belief that architecture can address affordability not through monolithic developments, but through careful, incremental interventions that respect and enhance existing urban patterns. The alley becomes both connective tissue and living space\u2014a reinterpretation of the threshold between public and private that creates opportunities for community interaction while maintaining individual privacy.",
    communityImpact:
      "Re: Alley proposes a scalable model for affordable housing that strengthens neighborhood identity rather than displacing it. The design incorporates shared community spaces, urban gardens, and flexible ground-floor uses that serve both new residents and the surrounding neighborhood, fostering social cohesion and equitable access to urban resources.",
    featured: true,
    award: "Honorable Mention \u2014 AIA Denver Affordable Housing Challenge",
    interviewUrl: "https://architecturecompetitions.com/denver-affordable-housing-challenge-competition-participants-yingzhuo-wang-8795",
    competitionUrl: "https://architecturecompetitions.com/denverhousing/",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.categories.includes(category));
}
