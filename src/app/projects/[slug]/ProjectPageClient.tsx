"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Lightbox from "@/components/Lightbox";
import { getProjectBySlug, projects, categoryLabels } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export default function ProjectPageClient({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => { setLightboxIndex(index); setLightboxOpen(true); }, []);
  const nextImage = useCallback(() => { if (!project) return; setLightboxIndex((p) => (p + 1) % project.images.length); }, [project]);
  const prevImage = useCallback(() => { if (!project) return; setLightboxIndex((p) => (p - 1 + project.images.length) % project.images.length); }, [project]);

  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-light text-neutral-900">Project Not Found</h1>
          <p className="mt-2 text-neutral-500">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-900"><ArrowLeft size={14} /> Back to Projects</Link>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <div className="pt-28 pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatedSection>
            <Link href="/projects" className="group inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent/70">
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> All Projects
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-8">
            <div className="max-w-3xl">
              {project.award && (
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-[10px] font-medium tracking-[0.1em] text-accent uppercase">{project.award}</span>
              )}
              <h1 className="mt-4 text-4xl font-extralight tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-3 text-lg text-neutral-500">{project.subtitle}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                <span>{project.location}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                <span>{project.year}</span>
                <span className="h-1 w-1 rounded-full bg-neutral-300" />
                {project.categories.map((cat, i) => (
                  <span key={cat}>{i > 0 && ", "}{categoryLabels[cat]}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <button onClick={() => openLightbox(0)} className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl" aria-label="View full-size image">
              <div className="relative aspect-[16/9] bg-neutral-100">
                <Image src={project.images[0]} alt={`${project.title} - Main image`} fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="100vw" priority />
              </div>
            </button>
          </AnimatedSection>

          <div className="mt-16 grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">Overview</h2>
                <p className="mt-4 text-lg leading-relaxed text-neutral-600">{project.description}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.1} className="mt-12">
                <h2 className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">Design Philosophy</h2>
                <p className="mt-4 leading-relaxed text-neutral-500">{project.philosophy}</p>
              </AnimatedSection>
              <AnimatedSection delay={0.2} className="mt-12">
                <h2 className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">Community Impact</h2>
                <p className="mt-4 leading-relaxed text-neutral-500">{project.communityImpact}</p>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-1">
              <AnimatedSection delay={0.3}>
                <div className="space-y-6 rounded-xl bg-neutral-50 border border-neutral-100 p-6">
                  {[
                    { label: "Project", value: project.title },
                    { label: "Location", value: project.location },
                    { label: "Year", value: project.year },
                    { label: "Designer", value: siteConfig.name },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">{item.label}</p>
                      <p className="mt-1 text-sm text-neutral-700">{item.value}</p>
                    </div>
                  ))}
                  <div>
                    <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">Type</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.categories.map((cat) => (
                        <span key={cat} className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs text-neutral-600">{categoryLabels[cat]}</span>
                      ))}
                    </div>
                  </div>
                  {project.award && (
                    <div>
                      <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">Recognition</p>
                      <p className="mt-1 text-sm text-accent">{project.award}</p>
                    </div>
                  )}
                  {(project.interviewUrl || project.competitionUrl) && (
                    <div>
                      <p className="text-[10px] tracking-[0.15em] text-neutral-400 uppercase">Links</p>
                      <div className="mt-2 space-y-2">
                        {project.competitionUrl && (
                          <a href={project.competitionUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-neutral-600 transition-colors hover:text-accent">
                            Competition Page <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        )}
                        {project.interviewUrl && (
                          <a href={project.interviewUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-neutral-600 transition-colors hover:text-accent">
                            Read Interview <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                  <div className="border-t border-neutral-200 pt-4">
                    <button onClick={() => window.print()} className="inline-flex items-center gap-2 text-xs text-neutral-500 transition-colors hover:text-neutral-900">
                      <Download size={14} /> Print / Save PDF
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {project.images.length > 1 && (
            <AnimatedSection className="mt-20">
              <h2 className="text-[11px] font-medium tracking-[0.15em] text-accent uppercase">Gallery</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.images.slice(1).map((img, i) => (
                  <motion.button key={img} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
                    onClick={() => openLightbox(i + 1)} className="relative cursor-zoom-in overflow-hidden rounded-xl" aria-label={`View image ${i + 2}`}>
                    <div className="relative aspect-[4/3] bg-neutral-100">
                      <Image src={img} alt={`${project.title} - Image ${i + 2}`} fill className="object-cover transition-transform duration-500 hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </AnimatedSection>
          )}

          <div className="mt-20 border-t border-neutral-200 pt-8">
            <div className="flex items-center justify-between">
              {prevProject ? (
                <Link href={`/projects/${prevProject.slug}`} className="group flex items-center gap-3">
                  <ArrowLeft size={16} className="text-neutral-400 transition-transform group-hover:-translate-x-1" />
                  <div><p className="text-[10px] tracking-[0.1em] text-neutral-400 uppercase">Previous</p><p className="text-sm text-neutral-600">{prevProject.title}</p></div>
                </Link>
              ) : <div />}
              {nextProject ? (
                <Link href={`/projects/${nextProject.slug}`} className="group flex items-center gap-3 text-right">
                  <div><p className="text-[10px] tracking-[0.1em] text-neutral-400 uppercase">Next</p><p className="text-sm text-neutral-600">{nextProject.title}</p></div>
                  <ArrowRight size={16} className="text-neutral-400 transition-transform group-hover:translate-x-1" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </div>
      <Lightbox images={project.images} currentIndex={lightboxIndex} isOpen={lightboxOpen} onClose={() => setLightboxOpen(false)} onNext={nextImage} onPrev={prevImage} alt={project.title} />
    </>
  );
}
