import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { STATS } from "@/data/content";

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export function Stats() {
  return (
    <section className="bg-gradient-to-r from-electric to-cyan py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-5 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center text-white">
            <div className="text-5xl font-extrabold sm:text-6xl"><Counter to={s.value} suffix={s.suffix} /></div>
            <div className="mt-2 font-medium text-white/90">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
