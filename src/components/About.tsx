// src/app/about/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiRadio } from "react-icons/fi";

export default function AboutPage() {
  return (
    <main id="about" className="overflow-hidden bg-transparent text-[#251d18]">
      <section className="relative px-4 py-16 sm:px-6 lg:px-10">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            {/* Image - centered on mobile, left on md+ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
              className="order-2 mx-auto w-full max-w-[560px] md:order-1"
            >
              <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#251d18] bg-[#24150f] shadow-[10px_10px_0_#251d18]">
                <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(135deg,rgba(155,197,173,0.18),transparent_35%,rgba(199,57,44,0.12))]" />

                <Image
                  src="/assets/store.jpg"
                  alt="Owner of Bowen Records"
                  width={900}
                  height={900}
                  className="aspect-[1.05/1] w-full object-cover"
                  priority
                />

                <div className="absolute bottom-4 left-4 z-20 rounded-full border-2 border-[#251d18] bg-[#9bc5ad] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#251d18] shadow-[3px_3px_0_#251d18]">
                  40+ Years Collecting
                </div>
              </div>
            </motion.div>

            {/* Text - centered under md, left aligned on md+ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-1 mx-auto flex max-w-4xl flex-col items-center text-center md:order-2 md:items-start md:text-left"
            >
              <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#251d18]">
                <FiRadio className="text-[#c7392c]" />
                This one goes to 11
              </div>

              <h1 className="mx-auto whitespace-nowrap text-center text-5xl font-black uppercase leading-[0.85] tracking-[-0.01em] text-[#c7392c] drop-shadow-[2px_2px_0_#251d18] sm:text-6xl md:mx-0 md:text-left md:text-7xl">
                About
                <span className="relative ml-[0.54em] inline-block">
                  {/* Big outer headphone band */}
                  <span className="pointer-events-none absolute left-1/2 top-[-0.66em] z-0 h-[1.18em] w-[1.88em] -translate-x-1/2 rounded-t-full border-[0.11em] border-b-0 border-[#251d18]" />

                  {/* Top cushion */}
                  <span className="pointer-events-none absolute left-1/2 top-[-0.72em] z-10 h-[0.16em] w-[0.78em] -translate-x-1/2 rounded-full bg-[#251d18]" />

                  {/* US text */}
                  <span className="relative z-20 text-[#251d18] drop-shadow-[2px_2px_0_#9bc5ad]">
                    US
                  </span>

                  {/* Left ear cup */}
                  <span className="pointer-events-none absolute left-[-0.35em] top-[0.05em] z-30 h-[0.78em] w-[0.28em] rounded-[0.16em] bg-[#251d18]">
                    <span className="absolute -left-[0.08em] top-[0.13em] h-[0.52em] w-[0.12em] rounded-l-full bg-[#251d18]" />
                    <span className="absolute right-[-0.08em] top-[0.1em] h-[0.58em] w-[0.06em] rounded-full bg-[#9bc5ad]" />
                  </span>

                  {/* Right ear cup */}
                  <span className="pointer-events-none absolute right-[-0.4em] top-[0.05em] z-30 h-[0.78em] w-[0.28em] rounded-[0.16em] bg-[#251d18]">
                    <span className="absolute -right-[0.08em] top-[0.13em] h-[0.52em] w-[0.12em] rounded-r-full bg-[#251d18]" />
                    <span className="absolute left-[-0.08em] top-[0.1em] h-[0.58em] w-[0.06em] rounded-full bg-[#9bc5ad]" />
                  </span>
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-2xl text-center text-lg font-semibold leading-8 text-[#4a382f] sm:text-xl md:mx-0 md:text-left">
                Mike Bowen has been collecting records for more than 40 years,
                building a deep knowledge of vinyl, classic albums, rare finds,
                and the music that keeps people digging through crates.
              </p>

              <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-8 text-[#5b463a] md:mx-0 md:text-left">
                Bowen Records is built from that lifelong passion — helping
                music fans buy records, sell collections, request specific
                albums, and connect with someone who truly understands the value
                of physical music.
              </p>

              <div className="group mt-9 flex w-fit flex-col items-center justify-center gap-3 rounded-[1.35rem] border-[3px] border-[#251d18] bg-[#9bc5ad] p-2 text-[#251d18] shadow-[0_5px_0_#251d18] transition hover:translate-y-[2px] hover:shadow-[0_3px_0_#251d18] sm:flex-row md:justify-start">
                {/* One shared mini turntable */}
                <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg border-2 border-[#251d18] bg-[#f5ead3] shadow-inner">
                  {/* Record */}
                  <span className="absolute left-2 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-[5px] border-[#1c1c1c] bg-[#050505] transition duration-500 group-hover:rotate-[130deg]">
                    <span className="absolute inset-2 rounded-full border border-[#fff4d6]/10" />
                    <span className="absolute inset-4 rounded-full border border-[#fff4d6]/10" />

                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#9bc5ad] bg-[#c7392c]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#160f0b]" />
                    </span>
                  </span>

                  {/* Control panel */}
                  <span className="absolute right-1.5 top-1.5 h-[52px] w-8 rounded-md bg-[#1b1715]">
                    <span className="absolute left-1.5 top-2 h-7 w-1 rounded-full bg-[#fff4d6]/35" />
                    <span className="absolute left-1 top-5 h-2.5 w-2 rounded-sm bg-[#c7392c]" />

                    <span className="absolute right-1.5 top-2 h-8 w-1 rounded-full bg-[#fff4d6]/35" />
                    <span className="absolute right-1 top-4 h-2.5 w-2 rounded-sm bg-[#9bc5ad]" />
                  </span>

                  {/* Tonearm */}
                  <span className="absolute right-[38px] top-[1px] z-30 h-4 w-4 rounded-full border-2 border-[#1b1715] bg-[#fff4d6]" />
                  <span className="absolute right-[43px] top-[6px] z-40 h-1.5 w-1.5 rounded-full bg-[#1b1715]" />
                  <span className="absolute right-[47px] top-[8px] z-30 h-[2px] w-10 origin-right rotate-[-90deg] rounded-full bg-[#251d18] transition duration-500 ease-out group-hover:rotate-[-40deg]">
                    <span className="absolute left-[-3px] top-[-3px] h-2 w-2 rotate-45 bg-[#1b1715]" />
                  </span>
                </div>

                {/* Button links */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="#contact"
                    className="rounded-xl border-2 border-[#251d18] bg-[#f5ead3] px-5 py-3 text-left shadow-[2px_2px_0_#251d18] transition hover:bg-[#fff4d6]"
                  >
                    <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#c7392c]">
                      Looking For Vinyl?
                    </span>
                    <span className="block text-sm font-black uppercase tracking-wide">
                      Request A Record
                    </span>
                  </Link>

                  <a
                    href="https://www.discogs.com/seller/bowenrecords/profile"
                    target="_blank"
                    className="rounded-xl border-2 border-[#251d18] bg-[#c7392c] px-5 py-3 text-left text-[#f5ead3] shadow-[2px_2px_0_#251d18] transition hover:bg-[#a92e24]"
                  >
                    <span className="block text-[9px] font-black uppercase tracking-[0.22em] text-[#9bc5ad]">
                      See The Crates
                    </span>
                    <span className="block text-sm font-black uppercase tracking-wide">
                      Browse Records
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}