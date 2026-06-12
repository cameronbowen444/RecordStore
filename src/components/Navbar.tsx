// src/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Sell or Find", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="sticky top-0 z-[999] border-b-[4px] border-[#251d18] bg-[#efe1c6]/95 px-4 py-3 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260, damping: 16 }}
            className="relative h-14 w-14 overflow-hidden rounded-full border-[3px] border-[#251d18] bg-[#f5ead3] shadow-[3px_3px_0_#251d18]"
          >
            <Image
              src="/assets/logo.jpg"
              alt="Bowen Records logo"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="leading-none">
            <motion.p
              whileHover={{ x: 2 }}
              className="text-3xl font-black uppercase tracking-[-0.05em] text-[#c7392c] drop-shadow-[1px_1px_0_#251d18] sm:text-4xl"
            >
              Bowen
            </motion.p>

            <motion.p
              whileHover={{ scale: 1.03 }}
              className="mt-1 w-fit rounded-sm bg-[#251d18] px-2 py-1 text-xs font-black uppercase tracking-[0.3em] text-[#f5ead3]"
            >
              Records
            </motion.p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.12 + index * 0.07,
                duration: 0.35,
                ease: "easeOut",
              }}
            >
              <Link
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#251d18] transition hover:bg-[#9bc5ad] hover:text-[#251d18]"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          className="hidden lg:block"
        >
          <a
            href="https://www.discogs.com/seller/bowenrecords/profile"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border-[3px] border-[#251d18] bg-[#c7392c] px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-[#f5ead3] shadow-[3px_3px_0_#251d18] transition hover:bg-[#a92e24]"
          >
            Buy Our Records
            <FiArrowUpRight />
          </a>
        </motion.div>

        {/* Mobile Button */}
        <motion.button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          whileTap={{ scale: 0.9 }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#251d18] bg-[#c7392c] text-[#f5ead3] shadow-[3px_3px_0_#251d18] lg:hidden"
          aria-label="Toggle navigation"
        >
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiX size={24} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiMenu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -12 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden lg:hidden"
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="mx-auto mt-5 max-w-7xl rounded-[1.5rem] border-[4px] border-[#251d18] bg-[#f5ead3] p-4 shadow-[5px_5px_0_#251d18]"
            >
              <div className="grid gap-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl border-[3px] border-[#251d18] bg-[#efe1c6] px-5 py-4 text-base font-black uppercase tracking-[0.12em] text-[#251d18] shadow-[3px_3px_0_#251d18] transition hover:bg-[#9bc5ad]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 14, opacity: 0 }}
                  transition={{ delay: 0.25, duration: 0.25 }}
                >
                  <Link
                    href="https://www.discogs.com/seller/bowenrecords/profile"
                    target="_blank"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl border-[3px] border-[#251d18] bg-[#c7392c] px-5 py-4 text-base font-black uppercase tracking-[0.12em] text-[#f5ead3] shadow-[3px_3px_0_#251d18]"
                  >
                    Buy Records
                    <FiArrowUpRight />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}