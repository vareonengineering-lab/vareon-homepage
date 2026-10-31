import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/Reveal";

export function Testimonials() {
  const [i, setI] = useState(0);
  const n = TESTIMONIALS.length;
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [n, i]);
  const t = TESTIMONIALS[i];
  return (
    <section className="bg-white py-24 dark:bg-navy">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading title="What Our Clients Say" />
        <Card className="relative min-h-[260px] overflow-hidden p-8 sm:p-12" aria-live="polite">
          <Quote className="absolute right-8 top-8 text-cyan/30" size={56} />
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
              <p className="text-xl leading-relaxed text-navy dark:text-white">“{t.quote}”</p>
              <p className="mt-6 font-bold text-navy dark:text-white">{t.name}</p>
              <p className="text-sm text-electric">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </Card>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setI((i - 1 + n) % n)} aria-label="Previous testimonial"><ChevronLeft /></Button>
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} className={`h-2.5 rounded-full transition-all ${k === i ? "w-8 bg-electric" : "w-2.5 bg-slate-300 dark:bg-white/20"}`} />
          ))}
          <Button variant="ghost" size="icon" onClick={() => setI((i + 1) % n)} aria-label="Next testimonial"><ChevronRight /></Button>
        </div>
      </div>
    </section>
  );
}
