"use client";

import { useState } from "react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.2em] text-neutral-600 uppercase">Contact</p>
            <h1 className="mt-3 text-4xl font-extralight tracking-tight text-white md:text-6xl">Get in Touch</h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-neutral-500">
              Interested in collaborating on affordable housing, community design, or public architecture projects? I&apos;d love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-16 lg:grid-cols-3">
          <AnimatedSection className="lg:col-span-2">
            {isSubmitted ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white/[0.03] p-12">
                <div className="text-center">
                  <p className="text-lg font-light text-white">Thank you for reaching out.</p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Your email client should have opened. If not, email me directly at{" "}
                    <a href={`mailto:${siteConfig.email}`} className="text-accent underline">{siteConfig.email}</a>.
                  </p>
                  <button
                    onClick={() => { setIsSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 text-sm text-neutral-500 transition-colors hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Name <span className="text-accent">*</span></label>
                    <input type="text" id="name" required value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-accent"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Email <span className="text-accent">*</span></label>
                    <input type="email" id="email" required value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-accent"
                      placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Subject <span className="text-accent">*</span></label>
                  <input type="text" id="subject" required value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-accent"
                    placeholder="Project inquiry, collaboration, etc." />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Message <span className="text-accent">*</span></label>
                  <textarea id="message" required rows={6} value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-3 w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-neutral-700 focus:border-accent"
                    placeholder="Tell me about your project or idea..." />
                </div>
                <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-all hover:bg-accent hover:text-white">
                  Send Message <Send size={14} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <div className="space-y-8">
              <div className="rounded-xl bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-neutral-600" />
                  <p className="text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Email</p>
                </div>
                <a href={`mailto:${siteConfig.email}`} className="mt-3 block text-sm text-neutral-300 transition-colors hover:text-accent">{siteConfig.email}</a>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-6">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-neutral-600" />
                  <p className="text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Based In</p>
                </div>
                <p className="mt-3 text-sm text-neutral-300">{siteConfig.location}</p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-6">
                <p className="text-[10px] tracking-[0.15em] text-neutral-600 uppercase">Social</p>
                <div className="mt-4 space-y-3">
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-neutral-400 transition-colors hover:text-white">
                    LinkedIn <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                  <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between text-sm text-neutral-400 transition-colors hover:text-white">
                    Instagram <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-neutral-600">
                I&apos;m always interested in projects that prioritize community impact and social equity. Whether it&apos;s a competition, research, or a design challenge &mdash; let&apos;s talk.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
