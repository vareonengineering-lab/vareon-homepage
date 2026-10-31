import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/data/content";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Services() {
  return (
    <section id="services" className="bg-mist py-24 dark:bg-[#091a31]">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="Our Services" text="Integrated MEPF engineering from concept design to construction support." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, items }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <Card className="group flex h-full flex-col p-8 transition duration-300 hover:-translate-y-2 hover:border-electric hover:shadow-2xl">
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-electric to-cyan text-white transition group-hover:rotate-6 group-hover:scale-110"><Icon size={26} /></span>
                <h3 className="text-xl">{title}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm">
                  {items.map((it) => (<li key={it} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan" />{it}</li>))}
                </ul>
                <Button asChild variant="ghost" className="mt-6 w-fit px-0 hover:bg-transparent">
                  <a href="#contact">Read More <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
