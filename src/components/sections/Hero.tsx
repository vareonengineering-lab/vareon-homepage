import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const lines = [
  "M0 120 H260 V40 H520 V200 H800", "M80 400 V260 H360 V340 H640 V120 H900",
  "M0 300 H140 V220 H300", "M500 440 V320 H760 V420 H1000",
];
const nodes = [[260, 120], [520, 40], [360, 260], [640, 340], [760, 320]];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-navy">
      <div className="blueprint absolute inset-0 -z-10 opacity-70" aria-hidden />
      <svg className="absolute inset-0 -z-10 h-full w-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" aria-hidden fill="none">
        {lines.map((d, i) => (
          <motion.path key={d} d={d} stroke="#00B8D9" strokeOpacity={0.55} strokeWidth={1.5}
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, delay: i * 0.4, ease: "easeInOut" }} />
        ))}
        {nodes.map(([x, y], i) => (
          <motion.circle key={i} cx={x} cy={y} r={5} fill="#007BFF" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5] }} transition={{ delay: 2 + i * 0.2, duration: 1.5 }} />
        ))}
      </svg>
      <div className="absolute -right-24 top-1/4 -z-10 h-96 w-96 animate-float rounded-full bg-electric/25 blur-3xl" aria-hidden />
      <div className="absolute -left-24 bottom-10 -z-10 h-72 w-72 animate-float rounded-full bg-cyan/20 blur-3xl [animation-delay:-4s]" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="max-w-4xl text-5xl !text-white sm:text-6xl lg:text-8xl">
          Engineering Better Buildings.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-lg text-slate-300 sm:text-xl">
          Professional Mechanical, Electrical, Plumbing, and Fire Protection (MEPF) Engineering Solutions for Commercial, Industrial, Residential, and Institutional Projects.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="mt-10 flex flex-wrap gap-4">
          <Button asChild size="lg"><a href="#contact">Get a Quote</a></Button>
          <Button asChild size="lg" variant="outline"><a href="#services">View Our Services</a></Button>
        </motion.div>
      </div>
    </section>
  );
}
