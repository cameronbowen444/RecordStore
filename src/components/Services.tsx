// src/app/services/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiDisc,
  FiDollarSign,
  FiSearch,
  FiShoppingBag,
} from "react-icons/fi";

const services = [
  {
    label: "Discogs",
    title: "Shop On Discogs",
    text: "Bowen Records sells vinyl online through Discogs with trusted listings for collectors and music fans.",
    badge: "Online",
    image: "/assets/discogs.jpg",
    icon: FiShoppingBag,
    href: "https://www.discogs.com/seller/bowenrecords/profile",
    external: true,
  },
  {
    label: "Buy Records",
    title: "Buy Vinyl",
    text: "Looking for classics, oldies, rare finds, or records to build your collection? Reach out and ask what is available.",
    badge: "Shop",
    image: "/assets/shop.jpg",
    icon: FiDisc,
    href: "https://www.discogs.com/seller/bowenrecords/profile",
    external: true,
  },
  {
    label: "Sell Records",
    title: "Sell Your Collection",
    text: "Have records sitting in storage, inherited a collection, or want to sell part of your vinyl library? Send us a message.",
    badge: "Sell",
    image: "/assets/sell.jpg",
    icon: FiDollarSign,
    href: "#contact",
  },
  {
    label: "Requests",
    title: "Need A Record?",
    text: "Looking for a specific artist, album, pressing, or gift? Bowen Records can help you track it down.",
    badge: "Find",
    image: "/assets/request.jpg",
    icon: FiSearch,
    href: "#contact",
  },
];

export default function ServicesPage() {
  return (
    <main
      id="services"
      className="overflow-hidden bg-transparent text-[#251d18]"
    >
      <section className="relative px-4 py-20 sm:px-6 lg:px-10">
        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto mb-12 flex max-w-5xl flex-col items-center text-center"
          >
            <div className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[4px_4px_0_#251d18]">
              <FiDisc className="text-[#c7392c]" />
              Buy • Sell • Request • Collect
            </div>

            <h1 className="mx-auto text-center text-5xl font-black uppercase leading-[0.85] tracking-[-0.02em] text-[#c7392c] drop-shadow-[2px_2px_0_#251d18] sm:text-6xl md:text-7xl">
              <span className="inline-block whitespace-nowrap">
                Rec
                <span className="relative mx-[0.03em] inline-flex h-[0.78em] w-[0.78em] translate-y-[-0.35em] items-center justify-center rounded-full border-[0.08em] border-[#251d18] bg-[#050505] align-baseline shadow-[2px_2px_0_#9bc5ad]">
                  <span className="absolute inset-[18%] rounded-full border border-[#fff4d6]/20" />
                  <span className="absolute inset-[31%] rounded-full border border-[#fff4d6]/20" />
                  <span className="relative flex h-[0.28em] w-[0.28em] items-center justify-center rounded-full border-[0.04em] border-[#9bc5ad] bg-[#c7392c]">
                    <span className="h-[0.07em] w-[0.07em] rounded-full bg-[#050505]" />
                  </span>
                </span>
                rd
              </span>

              <span className="ml-3 mt-3 text-[#251d18] drop-shadow-[2px_2px_0_#c7392c]">
                Serv
                <span className="relative mx-[0.04em] inline-flex h-[0.82em] w-[0.32em] translate-y-[0.09em] items-center justify-center align-baseline">
                  <span className="absolute top-0 h-[0.45em] w-[0.28em] rounded-full border-[0.045em] border-[#251d18] bg-[#9bc5ad]">
                    <span className="absolute left-1/2 top-[20%] h-[0.05em] w-[70%] -translate-x-1/2 rounded-full bg-[#251d18]/40" />
                    <span className="absolute left-1/2 top-[42%] h-[0.05em] w-[70%] -translate-x-1/2 rounded-full bg-[#251d18]/40" />
                    <span className="absolute left-1/2 top-[64%] h-[0.05em] w-[70%] -translate-x-1/2 rounded-full bg-[#251d18]/40" />
                  </span>

                  <span className="absolute bottom-[0.1em] h-[0.35em] w-[0.08em] rounded-full bg-[#251d18]" />
                  <span className="absolute bottom-0 h-[0.07em] w-[0.28em] rounded-full bg-[#251d18]" />
                </span>
                ces
              </span>
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-center text-md font-semibold leading-8 text-[#4a382f] sm:text-lg">
              Bowen Records helps people buy records, sell collections, request
              specific albums, and shop trusted vinyl listings online.
            </p>
          </motion.div>

          {/* Record Sleeve Cards */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group relative z-0 block no-underline focus:outline-none focus-visible:ring-4 focus-visible:ring-[#c7392c]/40"
                >
                  <motion.article
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                    className="relative overflow-visible rounded-2xl border-[4px] border-[#251d18] bg-[#f5ead3] text-[#251d18] shadow-[7px_7px_0_#251d18] transition duration-300 group-hover:-translate-y-1.5 group-hover:shadow-[10px_10px_0_#251d18]"
                  >
                    {/* Top badges */}
                    <div className="absolute left-3 top-3 z-50 rounded-full border-2 border-[#251d18] bg-[#c7392c] px-3 py-1 text-[#f5ead3] shadow-[3px_3px_0_#251d18]">
                      <p className="text-[8px] font-black uppercase tracking-[0.18em]">
                        {item.label}
                      </p>
                    </div>

                    <div className="absolute right-3 top-3 z-50 rounded-full border-2 border-[#251d18] bg-[#9bc5ad] px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-[#251d18] shadow-[3px_3px_0_#251d18]">
                      {item.badge}
                    </div>

                    {/* Sleeve / Vinyl */}
                    <div className="relative isolate aspect-square overflow-visible rounded-t-xl bg-[#24150f] p-3.5">
                      <div className="absolute inset-0 z-0 rounded-t-xl bg-[#24150f]" />

                      {/* Vinyl sliding out */}
                      <div className="absolute right-3 top-1/2 z-40 h-[76%] w-[76%] -translate-y-1/2 translate-x-[5%] rounded-full border-[10px] border-[#1c1c1c] bg-[#050505] opacity-80 shadow-[0_0_28px_rgba(155,197,173,0.28)] transition-all duration-500 ease-out group-hover:translate-x-[34%] group-hover:rotate-[24deg] group-hover:opacity-100">
                        <div className="absolute inset-5 rounded-full border border-[#fff4d6]/10" />
                        <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
                        <div className="absolute inset-[3.75rem] rounded-full border border-[#fff4d6]/10" />

                        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#9bc5ad] bg-[#c7392c]" />
                        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0d0907]" />
                      </div>

                      {/* Sleeve Image */}
                      <div className="relative z-50 h-full w-[84%] overflow-hidden rounded-lg border-2 border-[#f5ead3]/30 bg-[#160f0b] shadow-xl transition duration-300 group-hover:rotate-[-2deg]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0907]/90 via-[#0d0907]/20 to-transparent" />

                        <div className="absolute left-4 top-12 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-[#9bc5ad] bg-[#c7392c] text-[#f5ead3] shadow-[0_0_0_6px_#0d0907]/80">
                          <Icon size={24} />
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 rounded-md border border-[#f5ead3]/20 bg-[#0d0907]/80 px-3 py-2">
                          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-[#9bc5ad]">
                            Bowen Records
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#c7392c]">
                        {item.badge} Service
                      </p>

                      <h3 className="mt-2 text-xl font-black uppercase leading-tight text-[#251d18] transition group-hover:text-[#c7392c]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-7 text-[#5b463a]">
                        {item.text}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-[#251d18]/15 pt-4">
                        <span className="text-xs font-black uppercase tracking-[0.18em] text-[#251d18]">
                          Service
                        </span>

                        <span className="text-[9px] font-black uppercase tracking-[0.15em] text-[#251d18]/55 transition group-hover:text-[#c7392c]">
                          Click →
                        </span>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              );
            })}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex min-h-[420px] flex-col justify-between rounded-2xl border-[5px] border-[#251d18] bg-[#c7392c] p-6 text-[#f5ead3] shadow-[8px_8px_0_#251d18]"
            >
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-[#9bc5ad]">
                  Start Here
                </p>

                <h3 className="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em]">
                  Have Records Or Need Records?
                </h3>

                <p className="mt-5 text-sm font-semibold leading-7 text-[#f5ead3]/85">
                  Send a message about what you want to buy, what you want to
                  sell, or the record you are trying to find.
                </p>
              </div>

              <Link
                href="#contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#251d18] px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-[#f5ead3] shadow-[5px_5px_0_#9bc5ad] transition hover:-translate-y-1"
              >
                Contact Us
                <FiArrowUpRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
