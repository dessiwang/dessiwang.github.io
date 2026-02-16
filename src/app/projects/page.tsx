"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, categoryLabels } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

const allCategories = Object.keys(categoryLabels) as ProjectCategory[];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | "all">("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Portfolio</p>
            <h1 className="mt-3 text-4xl font-extralight tracking-tight text-neutral-900 md:text-6xl">Projects</h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
              A selection of work exploring affordable housing, community design, and the intersection of density with livability.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
            <button
              onClick={() => setActiveFilter("all")}
              role="tab"
              aria-selected={activeFilter === "all"}
              className={`rounded-full px-4 py-2 text-xs tracking-[0.05em] transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-accent text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                role="tab"
                aria-selected={activeFilter === cat}
                className={`rounded-full px-4 py-2 text-xs tracking-[0.05em] transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-accent text-white"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-900"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              role="tabpanel"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <p className="py-20 text-center text-neutral-600">No projects found in this category.</p>
          )}
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-6">
          <p className="text-xs text-neutral-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </p>
        </div>
      </div>
    </div>
  );
}
