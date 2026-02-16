"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-sm font-medium tracking-[0.25em] text-neutral-900 uppercase">{siteConfig.name}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">{siteConfig.description}</p>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">Pages</p>
            <ul className="mt-4 space-y-3">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-medium tracking-[0.15em] text-neutral-400 uppercase">Connect</p>
            <ul className="mt-4 space-y-3">
              <li><a href={`mailto:${siteConfig.email}`} className="text-sm text-neutral-600 transition-colors hover:text-neutral-900">Email</a></li>
              <li>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 text-sm text-neutral-600 transition-colors hover:text-neutral-900">
                  LinkedIn <ArrowUpRight size={12} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between border-t border-neutral-200 pt-8">
          <p className="text-xs text-neutral-400">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          <p className="text-xs text-neutral-400">Design &amp; Architecture</p>
        </div>
      </div>
    </footer>
  );
}
