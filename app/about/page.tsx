"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl font-bold mb-6 text-center"
        >
          About Me
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white/70 mb-4 text-lg leading-relaxed"
        >
          I am a Frontend developer specializing in React and Next.js,
          passionate about building beautiful and fast user interfaces.
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-white/70 text-lg leading-relaxed"
        >
          I focus on writing clean, maintainable code, with great attention to
          user experience and application performance.
        </motion.p>
      </motion.div>
    </section>
  );
}
