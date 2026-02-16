"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <Image src="/images/projects/re-alley-01.svg" alt="Re: Alley" fill className="object-cover brightness-[0.3]" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto w-full max-w-[1400px] px-6 pt-32 pb-24 lg:px-12">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              {siteConfig.title}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mt-6 text-5xl font-extralight leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl"
            >
              Design for
              <br />
              <span className="bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
                community
              </span>
              <br />
              &amp; equity
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 max-w-md text-base leading-relaxed text-neutral-400"
            >
              Architecture that addresses affordability, strengthens neighborhoods, and transforms constraints into opportunities for meaningful impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex items-center gap-4"
            >
              <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium tracking-wide text-black transition-all hover:bg-accent hover:text-white">
                View Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="rounded-full border border-white/20 px-6 py-3 text-sm tracking-wide text-neutral-300 transition-all hover:border-white/50 hover:text-white">
                About Me
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex gap-12 border-t border-white/10 pt-8 md:mt-28"
          >
            {[
              { label: "Focus", value: "Affordable Housing" },
              { label: "Based in", value: "Chicago, IL" },
              { label: "Recognition", value: "AIA Denver HM" },
            ].map((stat) => (
              <div key={stat.label} className="hidden md:block">
                <p className="text-[10px] tracking-[0.15em] text-neutral-600 uppercase">{stat.label}</p>
                <p className="mt-1 text-sm text-neutral-400">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Project */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Featured Project</p>
          </AnimatedSection>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <Link href="/projects/re-alley" className="group relative block overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3] bg-neutral-900">
                  <Image src="/images/projects/re-alley-01.svg" alt="Re: Alley" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-[10px] font-medium tracking-[0.1em] text-accent uppercase">
                  Honorable Mention &mdash; AIA Denver
                </span>
                <h2 className="mt-5 text-4xl font-extralight tracking-tight text-white md:text-5xl">Re: Alley</h2>
                <p className="mt-2 text-neutral-500">Denver, CO &mdash; 2024</p>
                <p className="mt-5 leading-relaxed text-neutral-400">
                  Reimagining Denver&apos;s alley infrastructure as a framework for incremental affordable housing. The project challenges conventional density by activating underutilized urban corridors.
                </p>
                <Link href="/projects/re-alley" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent">
                  Explore Project
                  <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Design Philosophy</p>
              <blockquote className="mt-8 text-2xl font-extralight leading-relaxed text-neutral-300 md:text-4xl md:leading-snug">
                &ldquo;Transform constraints into opportunities for meaningful societal impact.&rdquo;
              </blockquote>
              <div className="mx-auto mt-8 h-px w-12 bg-gradient-to-r from-transparent via-accent to-transparent" />
              <p className="mt-4 text-sm text-neutral-600">{siteConfig.name}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Selected Work</p>
                <h2 className="mt-3 text-3xl font-extralight tracking-tight text-white md:text-4xl">Projects</h2>
              </div>
              <Link href="/projects" className="group hidden items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-neutral-400 transition-all hover:border-white/30 hover:text-white md:flex">
                View All <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm text-neutral-400">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bio CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
                <Image src="/images/about/portrait.svg" alt={`Portrait of ${siteConfig.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div>
                <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">About</p>
                <h2 className="mt-3 text-3xl font-extralight tracking-tight text-white md:text-4xl">{siteConfig.name}</h2>
                <p className="mt-5 leading-relaxed text-neutral-400">
                  Architectural designer based in Chicago with a Master of Architecture from the University of Virginia. Specializing in affordable housing and community-focused design, with experience in large-scale public architecture.
                </p>
                <p className="mt-4 leading-relaxed text-neutral-500">
                  Driven by the conviction that architecture can address affordability through careful, incremental interventions that respect and enhance existing communities.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-accent">
                    Read More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                  <span className="h-1 w-1 rounded-full bg-neutral-700" />
                  <Link href="/contact" className="text-sm text-neutral-500 transition-colors hover:text-white">Get in Touch</Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
