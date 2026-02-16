"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

const timeline = [
  { year: "2024", title: "Honorable Mention", description: "AIA Denver Affordable Housing Challenge for \"Re: Alley\" — adaptive reuse of Denver alleyways." },
  { year: "2023", title: "Architectural Designer", description: "Professional practice in large-scale public architecture, including airports and healthcare facilities." },
  { year: "2022", title: "Master of Architecture", description: "University of Virginia School of Architecture with a focus on community-centered design." },
  { year: "2020", title: "Design Internships", description: "Early career experience in residential projects, developing foundational skills in human-scaled design." },
];

const values = [
  { title: "Community Integration", description: "Architecture should strengthen neighborhoods, not displace them. Every design decision considers its impact on existing social fabric." },
  { title: "Social Equity", description: "Affordable housing deserves the same spatial quality and material thoughtfulness as any other building type." },
  { title: "Density & Livability", description: "Through careful observation and iteration, we create living environments that are both compact and generous." },
  { title: "Sustainable Practice", description: "Sustainability begins with respecting what exists — adapting, reusing, and building incrementally." },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <AnimatedSection>
          <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">About</p>
        </AnimatedSection>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-5">
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900">
              <Image src="/images/about/portrait.svg" alt={`Portrait of ${siteConfig.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" priority />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div>
              <h1 className="text-4xl font-extralight tracking-tight text-white md:text-6xl">{siteConfig.name}</h1>
              <p className="mt-3 text-lg text-neutral-500">{siteConfig.title} &mdash; {siteConfig.location}</p>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-400">
                <p>
                  Yingzhuo Wang is an architectural designer based in Chicago, specializing in affordable housing and community-focused design. With a Master of Architecture from the University of Virginia, her work explores how architecture can address housing affordability through careful observation, analysis, and incremental intervention.
                </p>
                <p>
                  Her professional experience spans large-scale public architecture, including airports and healthcare facilities, where she developed expertise in coordinating across multiple teams and disciplines.
                </p>
                <p>
                  Wang&apos;s competition work, including the award-winning &ldquo;Re: Alley&rdquo; project for the AIA Denver Affordable Housing Challenge, demonstrates her ability to balance intellectual exploration with practical problem-solving. She views competitions as spaces for &ldquo;intellectual freedom&rdquo; while remaining grounded in real constraints.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-accent hover:text-white">
                  View Work <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="rounded-full border border-white/20 px-6 py-3 text-sm text-neutral-300 transition-all hover:border-white/50 hover:text-white">
                  Get in Touch
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Philosophy */}
        <section className="mt-28">
          <AnimatedSection>
            <div className="mx-auto max-w-3xl">
              <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Design Philosophy</p>
              <h2 className="mt-4 text-3xl font-extralight tracking-tight text-white md:text-4xl">
                Transforming constraints into opportunities
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-neutral-400">
                <p>Architecture functions as both expression and systematic problem-solving. Most challenges can be addressed through careful observation, analysis, and iteration. Rather than seeking perfect solutions, the goal is to make informed decisions within real limits.</p>
                <p>This means approaching affordability not as a constraint that diminishes design quality, but as a generative force. The most impactful architecture often emerges from the most demanding conditions.</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Values */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Core Values</p>
          </AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="rounded-xl bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.05]">
                  <h3 className="text-sm font-medium text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Timeline</p>
          </AnimatedSection>
          <div className="mt-8">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="grid grid-cols-[80px_1fr] gap-6 border-b border-white/5 py-6 md:grid-cols-[120px_1fr]">
                  <span className="text-sm font-light text-neutral-600">{item.year}</span>
                  <div>
                    <h3 className="text-sm font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Education</p>
            <div className="mt-6 rounded-xl bg-white/[0.03] p-6">
              <p className="text-sm font-medium text-white">Master of Architecture</p>
              <p className="mt-1 text-sm text-neutral-500">University of Virginia</p>
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-12 text-center md:p-16">
              <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Let&apos;s Connect</p>
              <h2 className="mt-4 text-2xl font-extralight text-white md:text-3xl">Interested in working together?</h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-neutral-500">
                I&apos;m always open to discussing new projects, community-focused design challenges, and opportunities to create meaningful impact through architecture.
              </p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-all hover:bg-accent hover:text-white">
                Get in Touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
