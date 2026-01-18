"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import "./globals.css";
import Link from "next/link";
export default function HomePage() {
  return (
    <section className="w-full h-screen flex items-center bg-gradient-to-br from-[#0b1020] via-[#0f172a] to-black overflow-hidden">
      <div className="w-1/2 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-[300px] h-[300px]"
        >
          <div className="absolute inset-0 rounded-full border border-purple-500/40 scale-110"></div>

          <div className="absolute inset-0 rounded-full border border-white/10">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/hero.png"
                alt="Frontend Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-1/2 px-10">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hossam Mohammed
          </h1>

          <h2 className="text-xl md:text-2xl text-purple-400 mb-4">
            Frontend Developer – React & Next.js
          </h2>

          <p className="text-white/70 mb-8 max-w-md">
            “Building modern, interactive UIs with React & Next.js.”
          </p>

          <div className="flex gap-4">
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition">
                Contact Me
              </button>
            </Link>

            <Link href="/portfolio">
              <button className="px-6 py-3 rounded-full border border-purple-600 hover:bg-purple-600 hover:text-white transition">
                View Portfolio
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
