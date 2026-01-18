"use client";

import { Project } from "@/Data/Projects";
import { motion } from "framer-motion";

type Props = {
  project: Project;
  index: number; // لو عايزة Fade-in متسلسل
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 0 20px #a78bfa, 0 0 40px #8b5cf6",
      }}
      className="bg-white/5 border border-white/10 rounded-lg p-6 cursor-pointer"
      style={{
        perspective: 1000,
      }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-white/70 text-sm mb-4">{project.description}</p>

      <div className="flex gap-2 flex-wrap">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-400"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
