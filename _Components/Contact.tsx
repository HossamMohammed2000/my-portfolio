"use client";

import { motion } from "framer-motion";

type ContactItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const contacts: ContactItem[] = [
  {
    label: "GitHub",
    value: "https://github.com/HossamMohammed2000",
    icon: "💻",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hossam-mohamed-15157822a",
    icon: "🔗",
  },
  { label: "Phone", value: "+20 111 821 956 3", icon: "📞" },
];

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
      >
        “I design and build modern, interactive user interfaces using React and
        Next.js.”
      </motion.h1>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-10 space-y-6 text-right"
      >
        {contacts.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.02 }}
            className="flex flex-row-reverse items-center gap-5 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-2xl">
              {item.icon}
            </div>

            <div className="flex-1">
              <p className="text-sm text-gray-400">{item.label}</p>
              <p className="text-base md:text-lg text-white font-medium">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
