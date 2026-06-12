// src/components/Hero.tsx
"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiMusic, FiSearch } from "react-icons/fi";

const colors = {
  bg: "#0d0b0a",
  panel: "#171312",
  cream: "#f5ead3",
  red: "#c7392c",
  redDark: "#6b1f17",
  teal: "#9bc5ad",
  border: "#251d18",
};

const themeVars = {
  "--bg": colors.bg,
  "--panel": colors.panel,
  "--cream": colors.cream,
  "--red": colors.red,
  "--red-dark": colors.redDark,
  "--teal": colors.teal,
  "--border": colors.border,
} as CSSProperties;

const genres = ["Soul", "Jazz", "Funk", "Rock", "R&B", "Hip-Hop", "Oldies"];

export default function Hero() {
  return (
    <section
      style={themeVars}
      className="relative min-h-[calc(100vh-96px)] overflow-hidden bg-transparent px-4 py-16 text-[#251d18] sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        {/* Content - centered under md, left on md+ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center md:mx-0 md:items-start md:text-left"
        >
          <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#251d18]">
            <FiMusic />
            Vintage Vinyl • Rare Finds • Classics
          </div>

          <h1 className="mx-auto text-center text-6xl font-black uppercase leading-[0.85] tracking-[-0.02em] text-[#c7392c] drop-shadow-[2px_2px_0_#251d18] md:mx-0 md:text-left md:text-7xl xl:text-8xl">
            Drop the
            <span className="block text-[#251d18] drop-shadow-[2px_2px_0_#c7392c]">
              Needle
            </span>
          </h1>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-[#251d18] bg-[#c7392c] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#f5ead3] shadow-[1px_1px_0_#251d18] transition hover:-translate-y-1 hover:bg-[#a92e24]"
            >
              Request a Record
              <FiArrowUpRight />
            </Link>

            <a
              href="https://www.discogs.com/seller/bowenrecords/profile"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-[#251d18] bg-[#9bc5ad] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#251d18] shadow-[2px_2px_0_#251d18] transition hover:-translate-y-1 hover:bg-[#add3bd]"
            >
              Shop Discogs
              <FiSearch />
            </a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-x-3 gap-y-2 font-body text-[10px] font-black uppercase tracking-[0.22em] text-[#251d18]/55 md:justify-start">
            {genres.map((genre, index) => (
              <motion.span
                key={genre}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + index * 0.06 }}
                className="inline-flex items-center gap-3 whitespace-nowrap"
              >
                {index !== 0 && <span className="text-[#c7392c]/60">•</span>}
                <span>{genre}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right Visual - Very Red Jukebox */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto flex w-full items-center justify-center"
        >
          <div className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[410px]">
            {/* outer red glow */}
            <div className="absolute inset-8 rounded-[4rem] bg-[color-mix(in_srgb,var(--red)_45%,transparent)] blur-3xl" />

            {/* Floating top sign */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-7 left-1/2 z-40 -translate-x-1/2 rounded-full border-[3px] border-[var(--cream)] bg-[var(--red)] px-5 py-1.5 shadow-[4px_4px_0_var(--border)]"
            >
              <p className="font-body text-[10px] font-black uppercase tracking-[0.24em] text-[var(--cream)]">
                Bowen Hi-Fi
              </p>
            </motion.div>

            {/* Side bulbs */}
            <div className="absolute -left-4 top-16 z-30 grid gap-3">
              {[0, 1, 2, 3, 4].map((item) => (
                <motion.span
                  key={item}
                  animate={{
                    opacity: [0.35, 1, 0.35],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    delay: item * 0.12,
                  }}
                  className="h-3.5 w-3.5 rounded-full border-2 border-[var(--cream)] bg-[var(--red)] shadow-[0_0_14px_var(--red)]"
                />
              ))}
            </div>

            <div className="absolute -right-4 top-16 z-30 grid gap-3">
              {[0, 1, 2, 3, 4].map((item) => (
                <motion.span
                  key={item}
                  animate={{
                    opacity: [1, 0.35, 1],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    delay: item * 0.12,
                  }}
                  className="h-3.5 w-3.5 rounded-full border-2 border-[var(--cream)] bg-[var(--teal)] shadow-[0_0_14px_var(--teal)]"
                />
              ))}
            </div>

            {/* Main shell */}
            <div className="relative rounded-t-[11rem] rounded-b-[2.5rem] border-[5px] border-[var(--border)] bg-[var(--red)] p-3.5 shadow-[8px_8px_0_var(--border)]">
              {/* deeper red face plate */}
              <div className="absolute inset-2.5 rounded-t-[10rem] rounded-b-[2rem] bg-[var(--red-dark)]" />

              {/* teal side rails like logo ring */}
              <div className="absolute left-3 top-16 z-20 h-[65%] w-2.5 rounded-full bg-[var(--teal)] shadow-[2px_2px_0_var(--border)]" />
              <div className="absolute right-3 top-16 z-20 h-[65%] w-2.5 rounded-full bg-[var(--teal)] shadow-[2px_2px_0_var(--border)]" />

              {/* Inner body */}
              <div className="relative overflow-hidden rounded-t-[9.5rem] rounded-b-[2rem] border-[4px] border-[var(--border)] bg-[var(--panel)] p-4">
                {/* glass shine */}
                <div className="pointer-events-none absolute left-7 top-8 z-30 h-36 w-10 rotate-[22deg] rounded-full bg-white/15 blur-sm" />
                <div className="pointer-events-none absolute right-12 top-16 z-30 h-20 w-6 rotate-[22deg] rounded-full bg-white/10 blur-sm" />

                {/* Record window */}
                <div className="relative mx-auto flex aspect-square max-w-[230px] items-center justify-center overflow-hidden rounded-full border-[5px] border-[var(--teal)] bg-[var(--bg)] shadow-[inset_0_0_0_7px_var(--border),0_0_26px_color-mix(in_srgb,var(--red)_45%,transparent)] sm:max-w-[250px]">
                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                      opacity: [0.55, 1, 0.55],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute inset-4 rounded-full border-[3px] border-[var(--red)]"
                  />

                  {/* Spinning record */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="relative h-[76%] w-[76%] rounded-full border-[14px] border-[var(--border)] bg-[#111] shadow-[0_0_26px_rgba(0,0,0,0.7)]"
                  >
                    <div className="absolute inset-4 rounded-full border border-[color-mix(in_srgb,var(--cream)_12%,transparent)]" />
                    <div className="absolute inset-8 rounded-full border border-[color-mix(in_srgb,var(--cream)_12%,transparent)]" />

                    <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border-[4px] border-[var(--teal)] bg-[var(--red)] sm:h-16 sm:w-16">
                      <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--border)]" />
                    </div>

                    <div className="absolute left-6 top-7 h-1 w-14 rounded-full bg-[var(--red)]" />
                    <div className="absolute left-8 top-12 h-1 w-10 rounded-full bg-[var(--red)]" />
                  </motion.div>

                  {/* tonearm */}
                  <motion.div
                    animate={{ rotate: [-33, -41, -33] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-9 top-14 h-2.5 w-20 origin-right rounded-full border-2 border-[var(--border)] bg-[var(--cream)] shadow-[2px_2px_0_var(--red)] sm:right-10 sm:top-16 sm:w-24"
                  >
                    <div className="absolute -left-2 -top-1 h-4 w-4 rotate-45 rounded-sm bg-[var(--border)]" />
                  </motion.div>
                </div>

                {/* Song title display */}
                <div className="relative z-10 mt-4 rounded-xl border-[3px] border-[var(--teal)] bg-[var(--border)] px-3 py-3 text-center shadow-[0_4px_0_var(--red-dark)]">
                  <motion.p
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="font-body text-[9px] font-black uppercase tracking-[0.28em] text-[var(--teal)]"
                  >
                    Now Spinning
                  </motion.p>

                  <p className="mt-1 font-display text-xl font-black uppercase tracking-[0.02em] text-[var(--cream)]">
                    Fresh Crate Finds
                  </p>
                </div>

                {/* Selector + equalizer */}
                <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                  <div className="rounded-xl border-[3px] border-[var(--teal)] bg-[var(--bg)] p-2.5 shadow-[3px_3px_0_var(--border)]">
                    <p className="text-center font-body text-[8px] font-black uppercase tracking-[0.2em] text-[var(--teal)]">
                      Select
                    </p>

                    <div className="mt-2 grid grid-cols-2 gap-1.5">
                      {["A1", "B2", "C3", "D4"].map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ y: -2 }}
                          className="rounded-md border-2 border-[var(--teal)] bg-[var(--panel)] py-1.5 text-center font-body text-[10px] font-black text-[var(--cream)] shadow-[2px_2px_0_var(--red-dark)]"
                        >
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex h-full items-end justify-center gap-1 rounded-xl border-[3px] border-[var(--teal)] bg-[var(--border)] px-2.5 py-3 shadow-[3px_3px_0_var(--border)]">
                    {[14, 24, 18, 32, 22, 34, 20, 28].map(
                      (height, index) => (
                        <motion.span
                          key={index}
                          animate={{ height: [height, height + 9, height] }}
                          transition={{
                            duration: 0.75,
                            repeat: Infinity,
                            delay: index * 0.08,
                          }}
                          className="w-2.5 rounded-t-full bg-[var(--red)] shadow-[0_0_8px_var(--red)]"
                          style={{ height }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Bottom speaker grille */}
                <div className="relative z-10 mt-4 rounded-xl border-[3px] border-[var(--teal)] bg-[var(--border)] p-2.5 shadow-[3px_3px_0_var(--red-dark)]">
                  <div className="grid grid-cols-8 gap-1.5">
                    {Array.from({ length: 24 }).map((_, index) => (
                      <motion.span
                        key={index}
                        animate={{ opacity: [0.25, 0.75, 0.25] }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          delay: index * 0.02,
                        }}
                        className="h-1.5 rounded-full bg-[color-mix(in_srgb,var(--teal)_55%,transparent)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Jukebox base */}
            <div className="mx-auto mt-3 h-6 w-[84%] rounded-b-full border-x-[5px] border-b-[5px] border-[var(--border)] bg-[var(--border)]" />

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-2 rotate-[-3deg] rounded-xl border-2 border-[var(--cream)] bg-[var(--red)] px-4 py-2.5 text-[var(--cream)] shadow-[0_5px_0_var(--border)] sm:left-6">
              <p className="font-body text-[8px] font-black uppercase tracking-[0.18em] text-[color-mix(in_srgb,var(--cream)_78%,transparent)]">
                Pre-90s
              </p>
              <p className="font-display text-lg font-black tracking-[0.02em]">
                Classics
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}