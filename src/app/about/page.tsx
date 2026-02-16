"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

const timeline = [
  { year: "2025", title: "Honorable Mention — AIA Denver", description: "AIA Denver Affordable Housing Challenge for \"Re: Alley\" — adaptive reuse of Denver alleyways into incremental affordable housing." },
  { year: "Feb 2024 –", title: "Design Professional — HOK (Full-time)", description: "Full-time design professional at HOK Chicago, working on large-scale public architecture including airports and healthcare facilities. LEED GA accredited.", highlight: true },
  { year: "May–Aug 2023", title: "Architectural Intern — HOK", description: "Participated in massing studies, 3D printing exercises, physical modeling, analytical diagrams, and renderings at HOK Chicago." },
  { year: "Jan 2023", title: "Design Assistant — BIG", description: "Created digital models, engaged with physical model making, and 3D printed models at Bjarke Ingels Group in New York." },
  { year: "Jun–Aug 2022", title: "Architectural Intern — Dietsche Dietsche Architects", description: "Participated in concept and actual projects in Wilmington, NC. Detailed construction drawings, sections, plans, and digital modeling." },
  { year: "2022", title: "Master of Architecture — UVA", description: "University of Virginia School of Architecture with a focus on community-centered design." },
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
          <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">About</p>
        </AnimatedSection>

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-5">
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
              <Image src="/images/about/portrait.jpg" alt={`Portrait of ${siteConfig.name}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" priority />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div>
              <h1 className="text-4xl font-extralight tracking-tight text-neutral-900 md:text-6xl">{siteConfig.name}</h1>
              <p className="mt-3 text-lg text-accent/70">{siteConfig.title} &mdash; {siteConfig.location}</p>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-neutral-600">
                <p>
                  Yingzhuo Wang is a full-time Design Professional at <span className="text-accent font-medium">HOK</span> in Chicago, where she works on large-scale public architecture including airports and healthcare facilities. With a Master of Architecture from the University of Virginia and LEED GA accreditation, her work explores how architecture can address housing affordability through careful observation, analysis, and incremental intervention.
                </p>
                <p>
                  Prior to her full-time role at HOK, she interned at <span className="text-accent font-medium">HOK Chicago</span>, worked as a Design Assistant at <span className="text-accent font-medium">BIG (Bjarke Ingels Group)</span> in New York, and interned at <span className="text-accent font-medium">Dietsche Dietsche Architects</span> in Wilmington, NC, gaining experience across digital and physical modeling, construction documentation, and large-scale design coordination.
                </p>
                <p>
                  Wang&apos;s competition work, including the award-winning &ldquo;Re: Alley&rdquo; project for the AIA Denver Affordable Housing Challenge, demonstrates her ability to balance intellectual exploration with practical problem-solving. She views competitions as spaces for &ldquo;intellectual freedom&rdquo; while remaining grounded in real constraints.
                </p>
              </div>

              <div className="mt-8 flex gap-4">
                <Link href="/projects" className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/85">
                  View Work <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="rounded-full border border-accent/30 px-6 py-3 text-sm text-accent transition-all hover:border-accent hover:bg-accent/5">
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
              <h2 className="mt-4 text-3xl font-extralight tracking-tight text-neutral-900 md:text-4xl">
                Transforming constraints into opportunities
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-neutral-600">
                <p>Architecture functions as both expression and systematic problem-solving. Most challenges can be addressed through careful observation, analysis, and iteration. Rather than seeking perfect solutions, the goal is to make informed decisions within real limits.</p>
                <p>This means approaching affordability not as a constraint that diminishes design quality, but as a generative force. The most impactful architecture often emerges from the most demanding conditions.</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Values */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Core Values</p>
          </AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-6 transition-colors hover:bg-neutral-100/80">
                  <h3 className="text-sm font-medium text-neutral-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Timeline</p>
          </AnimatedSection>
          <div className="mt-8">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className={`grid grid-cols-[80px_1fr] gap-6 border-b border-neutral-100 py-6 md:grid-cols-[120px_1fr] ${item.highlight ? "rounded-xl bg-accent/5 px-4 -mx-4 border-b-0 border border-accent/15" : ""}`}>
                  <span className={`text-sm font-light ${item.highlight ? "text-accent" : "text-neutral-400"}`}>{item.year}</span>
                  <div>
                    <h3 className="text-sm font-medium text-neutral-900">{item.title}</h3>
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
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Education & Credentials</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-6">
                <p className="text-sm font-medium text-neutral-900">Master of Architecture</p>
                <p className="mt-1 text-sm text-neutral-500">University of Virginia</p>
              </div>
              <div className="rounded-xl bg-neutral-50 border border-neutral-100 p-6">
                <p className="text-sm font-medium text-neutral-900">LEED Green Associate</p>
                <p className="mt-1 text-sm text-neutral-500">U.S. Green Building Council</p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Skills */}
        <section className="mt-28">
          <AnimatedSection>
            <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Skills & Tools</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Revit", "Rhinoceros", "Enscape", "Affinity", "Adobe Illustrator"].map((skill) => (
                <span key={skill} className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700">
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* CTA */}
        <section className="mt-28">
          <AnimatedSection>
            <div className="rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 p-12 text-center md:p-16">
              <p className="text-[11px] font-medium tracking-[0.2em] text-accent uppercase">Let&apos;s Connect</p>
              <h2 className="mt-4 text-2xl font-extralight text-neutral-900 md:text-3xl">Interested in working together?</h2>
              <p className="mx-auto mt-4 max-w-md text-sm text-neutral-500">
                I&apos;m always open to discussing new projects, community-focused design challenges, and opportunities to create meaningful impact through architecture.
              </p>
              <Link href="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/85">
                Get in Touch <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
