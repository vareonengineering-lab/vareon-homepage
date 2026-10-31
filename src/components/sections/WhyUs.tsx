import { Check } from "lucide-react";
import { WHY } from "@/data/content";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function WhyUs() {
  return (
    <section className="bg-white py-24 dark:bg-navy">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="Why Choose Us" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w, i) => (
            <Reveal key={w} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-cyan hover:shadow-soft dark:border-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan"><Check size={20} /></span>
                <span className="font-semibold text-navy dark:text-white">{w}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
