import { motion } from "framer-motion";
import { PROCESS } from "@/data/content";
import { SectionHeading } from "@/components/Reveal";

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-navy py-24">
      <div className="blueprint absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading light title="Project Process" text="A clear path from first conversation to handover." />
        <ol className="relative grid gap-10 md:grid-cols-6 md:gap-4">
          <motion.div aria-hidden className="absolute left-0 top-6 hidden h-0.5 w-full origin-left bg-gradient-to-r from-electric to-cyan md:block"
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeInOut" }} />
          {PROCESS.map((p, i) => (
            <motion.li key={p.title} className="relative md:text-center"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2, duration: 0.5 }}>
              <span className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan bg-navy font-bold text-cyan md:mx-auto">{i + 1}</span>
              <h3 className="text-lg !text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{p.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
