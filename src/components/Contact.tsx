// src/components/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiDisc } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-transparent px-4 py-24 text-[#251d18] sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#251d18]">
            <FiDisc className="text-[#c7392c]" />
            Contact Bowen Records
          </div>

          <h2 className="whitespace-nowrap text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] text-[#c7392c] drop-shadow-[2px_2px_0_#251d18] sm:text-6xl md:text-7xl">
            Reach
            <span className="ml-5 text-[#251d18] drop-shadow-[2px_2px_0_#c7392c]">
              {/* O as record */}
              <span className="relative mx-[0.03em] inline-flex h-[0.78em] w-[0.78em] translate-y-[-0.35em] items-center justify-center rounded-full border-[0.08em] border-[#251d18] bg-[#050505] align-baseline shadow-[2px_2px_0_#9bc5ad]">
                <span className="absolute inset-[18%] rounded-full border border-[#fff4d6]/20" />
                <span className="absolute inset-[31%] rounded-full border border-[#fff4d6]/20" />
                <span className="relative flex h-[0.28em] w-[0.28em] items-center justify-center rounded-full border-[0.04em] border-[#9bc5ad] bg-[#c7392c]">
                  <span className="h-[0.07em] w-[0.07em] rounded-full bg-[#050505]" />
                </span>
              </span>
              ut
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base font-semibold leading-8 text-[#5b463a] sm:text-lg">
            Looking for a specific album, trying to sell a collection, or have a
            question about Bowen Records? Send a message and we’ll get back to
            you.
          </p>

          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border-[4px] border-[#251d18] bg-[#f5ead3] p-4 shadow-[5px_5px_0_#251d18]">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#251d18] bg-[#c7392c] text-[#f5ead3] shadow-[3px_3px_0_#251d18]">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c7392c]">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-black">
                    bowenrecords@email.com
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-[4px] border-[#251d18] bg-[#9bc5ad] p-4 shadow-[5px_5px_0_#251d18]">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#251d18] bg-[#251d18] text-[#f5ead3] shadow-[3px_3px_0_#c7392c]">
                  <FiPhone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#251d18]">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-black">(000) 000-0000</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border-[4px] border-[#251d18] bg-[#f5ead3] p-4 shadow-[5px_5px_0_#251d18]">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#251d18] bg-[#9bc5ad] text-[#251d18] shadow-[3px_3px_0_#251d18]">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#c7392c]">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-black">Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Aux cords from title to form */}
        <div className="pointer-events-none relative z-0 mx-auto hidden h-20 max-w-[760px] sm:block">
          <div className="absolute left-[18%] top-0 h-24 w-[34%] rounded-bl-[4rem] border-b-[6px] border-l-[6px] border-[#251d18]" />
          <div className="absolute left-[17.2%] top-[5.2rem] h-5 w-10 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] shadow-[3px_3px_0_#c7392c]" />

          <div className="absolute right-[18%] top-0 h-24 w-[34%] rounded-br-[4rem] border-b-[6px] border-r-[6px] border-[#251d18]" />
          <div className="absolute right-[17.2%] top-[5.2rem] h-5 w-10 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] shadow-[3px_3px_0_#c7392c]" />
        </div>

        {/* Form With Speakers */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative mx-auto mt-8 w-full max-w-[760px] md:px-10 lg:px-14 xl:px-0"
        >
          {/* Top circular speakers */}
          <div className="absolute -top-14 left-1/2 z-30 flex -translate-x-1/2 gap-6">
            {[0, 1, 2].map((speaker) => (
              <motion.div
                key={speaker}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: speaker * 0.2,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-[#251d18] bg-[#9bc5ad] shadow-[5px_5px_0_#6b1f17]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-[5px] border-[#251d18] bg-[#0d0907]">
                  <div className="h-4 w-4 rounded-full bg-[#c7392c]" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left long speaker */}
          <div className="absolute top-10 z-10 hidden h-[82%] w-16 rounded-[2rem] border-[5px] border-[#251d18] bg-[#24150f] p-2 shadow-[5px_5px_0_#6b1f17] md:block md:left-[-58px] lg:left-[-82px] xl:left-[-120px] lg:w-20 xl:w-24">
            <div className="flex h-full flex-col items-center justify-between rounded-[1.5rem] border border-[#fff4d6]/15 bg-[#0d0907] px-2 py-5 xl:rounded-[1.8rem] xl:px-3 xl:py-6">
              <div className="h-24 w-9 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] xl:h-28 xl:w-12 xl:border-[5px]" />

              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-[#9bc5ad] bg-[#050505] xl:h-16 xl:w-16 xl:border-[5px]"
              >
                <div className="h-4 w-4 rounded-full bg-[#c7392c] xl:h-5 xl:w-5" />
              </motion.div>

              <div className="h-24 w-9 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] xl:h-28 xl:w-12 xl:border-[5px]" />
            </div>
          </div>

          {/* Right long speaker */}
          <div className="absolute top-10 z-10 hidden h-[82%] w-16 rounded-[2rem] border-[5px] border-[#251d18] bg-[#24150f] p-2 shadow-[5px_5px_0_#6b1f17] md:block md:right-[-58px] lg:right-[-82px] xl:right-[-120px] lg:w-20 xl:w-24">
            <div className="flex h-full flex-col items-center justify-between rounded-[1.5rem] border border-[#fff4d6]/15 bg-[#0d0907] px-2 py-5 xl:rounded-[1.8rem] xl:px-3 xl:py-6">
              <div className="h-24 w-9 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] xl:h-28 xl:w-12 xl:border-[5px]" />

              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="flex h-12 w-12 items-center justify-center rounded-full border-[4px] border-[#9bc5ad] bg-[#050505] xl:h-16 xl:w-16 xl:border-[5px]"
              >
                <div className="h-4 w-4 rounded-full bg-[#c7392c] xl:h-5 xl:w-5" />
              </motion.div>

              <div className="h-24 w-9 rounded-full border-[4px] border-[#251d18] bg-[#9bc5ad] xl:h-28 xl:w-12 xl:border-[5px]" />
            </div>
          </div>

          {/* Main form body */}
          <div className="relative z-20 rounded-[2rem] border-[6px] border-[#251d18] bg-[#24150f] p-5 text-[#fff4d6] shadow-[12px_12px_0_#251d18]">
            <div className="rounded-[1.5rem] border border-[#fff4d6]/15 bg-[#0d0907] p-5 sm:p-7">
              <div className="mb-6 rounded-2xl border border-[#fff4d6]/15 bg-[#160f0b] p-5">
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9bc5ad]">
                  Send A Message
                </p>
                <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.05em] text-[#fff4d6]">
                  What Are You Looking For?
                </h3>
              </div>

              <form className="grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Name"
                    className="rounded-xl border-2 border-[#fff4d6]/15 bg-[#160f0b] px-4 py-4 text-sm font-bold outline-none placeholder:text-[#fff4d6]/40 focus:border-[#9bc5ad]"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border-2 border-[#fff4d6]/15 bg-[#160f0b] px-4 py-4 text-sm font-bold outline-none placeholder:text-[#fff4d6]/40 focus:border-[#9bc5ad]"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone"
                  className="rounded-xl border-2 border-[#fff4d6]/15 bg-[#160f0b] px-4 py-4 text-sm font-bold outline-none placeholder:text-[#fff4d6]/40 focus:border-[#9bc5ad]"
                />

                <select
                  defaultValue=""
                  className="rounded-xl border-2 border-[#fff4d6]/15 bg-[#160f0b] px-4 py-4 text-sm font-bold text-[#fff4d6]/80 outline-none focus:border-[#9bc5ad]"
                >
                  <option value="" disabled>
                    What can we help with?
                  </option>
                  <option>Looking for a specific record</option>
                  <option>I want to sell records</option>
                  <option>I have a collection</option>
                  <option>Question about Discogs</option>
                  <option>General question</option>
                </select>

                <textarea
                  placeholder="Tell us what record you need, what you want to sell, or what questions you have..."
                  rows={6}
                  className="resize-none rounded-xl border-2 border-[#fff4d6]/15 bg-[#160f0b] px-4 py-4 text-sm font-bold outline-none placeholder:text-[#fff4d6]/40 focus:border-[#9bc5ad]"
                />

                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-[#fff4d6] bg-[#c7392c] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#6b1f17] transition hover:-translate-y-1 hover:bg-[#a92e24]"
                >
                  Send Message
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}