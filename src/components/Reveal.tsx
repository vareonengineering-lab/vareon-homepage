import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ title, text, light }: { title: string; text?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className={`text-3xl sm:text-4xl ${light ? "!text-white" : ""}`}>{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-gradient-to-r from-electric to-cyan" />
      {text && <p className={`mt-5 text-lg ${light ? "text-slate-300" : ""}`}>{text}</p>}
    </Reveal>
  );
}
