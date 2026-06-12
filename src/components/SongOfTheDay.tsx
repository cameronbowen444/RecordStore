// src/components/SongOfTheDay.tsx
"use client";

import { motion } from "framer-motion";
import { FiDisc, FiHeadphones, FiMusic } from "react-icons/fi";

export default function SongOfTheDay() {
  return (
    <section className="relative overflow-hidden bg-transparent px-4 py-12 text-[#251d18] sm:px-6 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 mx-auto grid max-w-6xl gap-6 overflow-hidden rounded-[2rem] border-[5px] border-[#251d18] bg-[#f5ead3] p-5 shadow-[8px_8px_0_#251d18] md:grid-cols-[auto_1fr] md:items-center md:p-6"
      >
        {/* subtle inside glow */}
        <div className="pointer-events-none absolute -left-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#c7392c]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#9bc5ad]/35 blur-3xl" />

        {/* Mini spinning record */}
        <div className="relative z-10 mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-[5px] border-[#251d18] bg-[#24150f] shadow-[4px_4px_0_#6b1f17] md:mx-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="relative h-16 w-16 rounded-full border-[8px] border-[#050505] bg-[#111]"
          >
            <span className="absolute inset-2 rounded-full border border-[#fff4d6]/10" />
            <span className="absolute inset-4 rounded-full border border-[#fff4d6]/10" />

            <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#9bc5ad] bg-[#c7392c]">
              <span className="h-2 w-2 rounded-full bg-[#050505]" />
            </span>
          </motion.div>
        </div>

        {/* Text */}
        <div className="relative z-10 text-center md:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border-2 border-[#251d18] bg-[#9bc5ad] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-[#251d18] shadow-[3px_3px_0_#251d18]">
            <FiHeadphones />
            Song Of The Day
          </div>

          <h2 className="text-2xl font-black uppercase leading-none tracking-[0.02em] text-[#c7392c] drop-shadow-[2px_2px_0_#251d18] sm:text-3xl md:text-4xl">
            September
          </h2>

          <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-[#5b463a] md:justify-start">
            <span className="inline-flex items-center gap-1">
              <FiMusic className="text-[#c7392c]" />
              Earth, Wind & Fire
            </span>
            <span className="hidden text-[#c7392c] sm:inline">•</span>
            <span>Daily vinyl pick from Bowen Records</span>
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-[#5b463a] md:mx-0">
            A feel-good classic with bright horns, smooth vocals, and the kind
            of groove that makes vinyl feel alive.
          </p>
        </div>

        {/* Small corner disc */}
        <FiDisc
          className="absolute right-5 top-5 hidden text-[#251d18]/15 md:block"
          size={42}
        />
      </motion.div>
    </section>
  );
}