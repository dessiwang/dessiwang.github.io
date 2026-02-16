"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { categoryLabels } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-neutral-900">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 flex items-end p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
            <div className="flex w-full items-end justify-between">
              <span className="text-xs tracking-[0.1em] text-white/80">View Project</span>
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
          {project.award && (
            <div className="absolute top-3 left-3">
              <span className="rounded-full bg-accent/90 px-3 py-1 text-[10px] font-medium tracking-[0.1em] text-white uppercase backdrop-blur-sm">Award</span>
            </div>
          )}
        </div>
        <div className="mt-4">
          <div className="flex items-center gap-2">
            {project.categories.slice(0, 2).map((cat, i) => (
              <span key={cat} className="flex items-center gap-2 text-[11px] tracking-[0.05em] text-neutral-500">
                {i > 0 && <span className="h-0.5 w-0.5 rounded-full bg-neutral-600" />}
                {categoryLabels[cat]}
              </span>
            ))}
          </div>
          <h3 className="mt-2 text-lg font-normal tracking-tight text-white transition-colors group-hover:text-accent">{project.title}</h3>
          <p className="mt-0.5 text-sm text-neutral-500">{project.subtitle}</p>
          <p className="mt-2 text-xs text-neutral-600">{project.location} &mdash; {project.year}</p>
        </div>
      </Link>
    </motion.div>
  );
}
