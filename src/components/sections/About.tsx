import { PILLARS } from "@/data/content";
import { Card } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-navy">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="About VAREON Engineering Services"
          text="VAREON Engineering Services provides professional Mechanical, Electrical, Plumbing, and Fire Protection engineering solutions. Our mission is to deliver efficient, innovative, and sustainable building systems that exceed client expectations." />
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <Card className="h-full p-8 transition duration-300 hover:-translate-y-1.5 hover:border-cyan">
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-electric/10 text-electric"><Icon size={24} /></span>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-3">{text}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
