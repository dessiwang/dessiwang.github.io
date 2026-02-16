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
    year: "2024",
    location: "Denver, CO",
    categories: ["adaptive-reuse", "residential", "urban-design"],
    thumbnail: "/images/projects/re-alley-01.svg",
    images: [
      "/images/projects/re-alley-01.svg",
      "/images/projects/re-alley-02.svg",
      "/images/projects/re-alley-03.svg",
      "/images/projects/re-alley-04.svg",
    ],
    description:
      "Re: Alley reimagines Denver's extensive alley infrastructure as a framework for incremental affordable housing development. The project challenges conventional approaches to density by activating underutilized urban corridors, transforming them into vibrant, livable spaces that integrate housing with community amenities. By working within existing urban fabric rather than against it, the design demonstrates how affordable housing can emerge organically from a city's existing spatial resources.",
    philosophy:
      "This project embodies the belief that architecture can address affordability not through monolithic developments, but through careful, incremental interventions that respect and enhance existing urban patterns. The alley becomes both connective tissue and living space\u2014a reinterpretation of the threshold between public and private that creates opportunities for community interaction while maintaining individual privacy.",
    communityImpact:
      "Re: Alley proposes a scalable model for affordable housing that strengthens neighborhood identity rather than displacing it. The design incorporates shared community spaces, urban gardens, and flexible ground-floor uses that serve both new residents and the surrounding neighborhood, fostering social cohesion and equitable access to urban resources.",
    featured: true,
    award: "Honorable Mention \u2014 AIA Denver Affordable Housing Challenge",
  },
  {
    slug: "threshold-commons",
    title: "Threshold Commons",
    subtitle: "Mixed-Income Community Housing",
    year: "2023",
    location: "Chicago, IL",
    categories: ["residential", "community"],
    thumbnail: "/images/projects/placeholder-01.svg",
    images: [
      "/images/projects/placeholder-01.svg",
      "/images/projects/placeholder-02.svg",
    ],
    description:
      "A mixed-income housing development designed to dissolve the boundaries between affordable and market-rate units through shared communal spaces, integrated courtyards, and a gradient of public-to-private thresholds that encourage organic community formation.",
    philosophy:
      "Rather than segregating housing by income level, Threshold Commons creates a continuum of shared experiences. The architectural language remains consistent across all unit types, ensuring that affordability is embedded in the design without stigma or visual hierarchy.",
    communityImpact:
      "The project provides 120 units of mixed-income housing with ground-floor community programming, a shared rooftop garden, and flexible maker spaces that support local entrepreneurship and cultural production.",
    featured: true,
  },
  {
    slug: "civic-weave",
    title: "Civic Weave",
    subtitle: "Community Center & Public Library",
    year: "2023",
    location: "Richmond, VA",
    categories: ["public", "community"],
    thumbnail: "/images/projects/placeholder-03.svg",
    images: [
      "/images/projects/placeholder-03.svg",
      "/images/projects/placeholder-04.svg",
    ],
    description:
      "A combined community center and public library that weaves together programmatic elements through an interlocking series of public rooms, reading gardens, and flexible event spaces. The building serves as a civic anchor for an underserved neighborhood.",
    philosophy:
      "Public architecture should be generous\u2014in its spatial quality, its material warmth, and its invitation to linger. Civic Weave treats every square foot as an opportunity to provide dignity and delight to its users, regardless of their background.",
    communityImpact:
      "The facility provides free access to digital resources, after-school programming, workforce development workshops, and community gathering spaces, serving over 10,000 residents in the surrounding area.",
    featured: false,
  },
  {
    slug: "ground-plane",
    title: "Ground Plane",
    subtitle: "Affordable Housing & Urban Agriculture",
    year: "2022",
    location: "Detroit, MI",
    categories: ["residential", "urban-design"],
    thumbnail: "/images/projects/placeholder-05.svg",
    images: [
      "/images/projects/placeholder-05.svg",
      "/images/projects/placeholder-06.svg",
    ],
    description:
      "Ground Plane integrates affordable housing with productive urban landscapes, creating a symbiotic relationship between residential density and food security. The project transforms vacant lots into a network of housing clusters surrounded by community gardens and small-scale agricultural plots.",
    philosophy:
      "Housing is not just shelter\u2014it is part of a larger ecosystem that includes food, health, and economic opportunity. Ground Plane demonstrates that density and nature are not opposites but can be interwoven to create more resilient, self-sustaining communities.",
    communityImpact:
      "The development provides 80 affordable housing units alongside 2 acres of productive urban farmland, a community kitchen, and a farmers market pavilion, creating both housing and economic opportunities for residents.",
    featured: true,
  },
  {
    slug: "skybridge-terrace",
    title: "Skybridge Terrace",
    subtitle: "Senior Living & Intergenerational Community",
    year: "2022",
    location: "Portland, OR",
    categories: ["residential", "community"],
    thumbnail: "/images/projects/placeholder-07.svg",
    images: [
      "/images/projects/placeholder-07.svg",
      "/images/projects/placeholder-08.svg",
    ],
    description:
      "An intergenerational housing complex that bridges senior living with family housing through shared amenities, elevated walkways, and collaborative spaces designed to foster mutual support and social connection across age groups.",
    philosophy:
      "Isolation is a design failure. Skybridge Terrace creates architecture that naturally brings people together\u2014through sightlines that encourage acknowledgment, shared gardens that invite collaboration, and common spaces that reward presence.",
    communityImpact:
      "The project addresses senior isolation while providing affordable family housing, with a shared daycare facility, community health clinic, and intergenerational programming spaces.",
    featured: false,
  },
  {
    slug: "urban-loom",
    title: "Urban Loom",
    subtitle: "Adaptive Reuse of Industrial Textile Mill",
    year: "2021",
    location: "Lowell, MA",
    categories: ["adaptive-reuse", "community"],
    thumbnail: "/images/projects/placeholder-09.svg",
    images: [
      "/images/projects/placeholder-09.svg",
      "/images/projects/placeholder-10.svg",
    ],
    description:
      "Urban Loom transforms a decommissioned textile mill into a mixed-use community hub that honors the building's industrial heritage while introducing affordable artist live-work spaces, community workshops, and a neighborhood market.",
    philosophy:
      "Adaptive reuse is an act of remembering. By preserving the mill's structural bones and spatial character, the project creates a dialogue between past and present\u2014honoring the labor that built the space while creating new opportunities for creative and community-oriented work.",
    communityImpact:
      "The project provides 40 affordable live-work units for artists and makers, a community workshop with shared fabrication tools, and a ground-floor market hall that connects the building to the surrounding neighborhood.",
    featured: false,
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
