import { MapPin, Calendar } from "lucide-react";
import { PROJECTS } from "@/data/content";
import { Card } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="bg-mist py-24 dark:bg-[#091a31]">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <Card className="group overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="blueprint relative h-40 bg-navy" aria-hidden>
                  <span className="absolute bottom-3 left-4 rounded-full bg-cyan/20 px-3 py-1 text-xs font-semibold text-cyan">{p.type}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-electric/30 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{p.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-electric">{p.discipline}</p>
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5"><MapPin size={14} />{p.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={14} />{p.year}</span>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
