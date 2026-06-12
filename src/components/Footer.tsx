// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiDisc,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { scrollToSection } from "@/lib/scrollToSection";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t-[5px] border-[#251d18] bg-[#f5ead3]/70 px-4 py-10 text-[#251d18] sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_1fr] md:items-start">
        {/* Brand */}
        <div>
          <Link
            href="/"
            scroll={false}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("/");
            }}
            className="inline-flex items-center gap-3"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] shadow-[3px_3px_0_#251d18]">
              <Image
                src="/assets/logo.jpg"
                alt="Bowen Records logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-3xl font-black uppercase leading-none tracking-[-0.03em] text-[#c7392c] drop-shadow-[1px_1px_0_#251d18]">
                Bowen
              </p>
              <p className="mt-1 w-fit rounded-sm bg-[#251d18] px-2 py-1 text-[10px] font-black uppercase tracking-[0.28em] text-[#f5ead3]">
                Records
              </p>
            </div>
          </Link>

          <p className="mt-5 max-w-sm text-sm font-semibold leading-7 text-[#5b463a]">
            Vintage vinyl, classic albums, rare finds, and record collecting
            help for music lovers.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#c7392c]">
            <FiDisc />
            Explore
          </h3>

          <div className="grid gap-3">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="group inline-flex w-fit items-center gap-2 text-sm font-black uppercase tracking-[0.13em] text-[#251d18] transition hover:text-[#c7392c]"
              >
                {link.label}
                <FiArrowUpRight className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#c7392c]">
            Contact
          </h3>

          <div className="grid gap-3 text-sm font-bold text-[#5b463a]">
            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#251d18] bg-[#c7392c] text-[#f5ead3] shadow-[2px_2px_0_#251d18]">
                <FiMail />
              </span>
              bowenrecords@email.com
            </p>

            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#251d18] bg-[#9bc5ad] text-[#251d18] shadow-[2px_2px_0_#251d18]">
                <FiPhone />
              </span>
              (000) 000-0000
            </p>

            <p className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#251d18] bg-[#f5ead3] text-[#c7392c] shadow-[2px_2px_0_#251d18]">
                <FiMapPin />
              </span>
              Los Angeles, CA
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center justify-between gap-4 border-t-2 border-[#251d18]/20 pt-5 text-center sm:flex-row">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#5b463a]">
          © {new Date().getFullYear()} Bowen Records. All rights reserved.
        </p>
      </div>
    </footer>
  );
}