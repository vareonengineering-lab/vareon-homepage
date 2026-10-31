import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
import { CONTACT, SERVICES } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Reveal, SectionHeading } from "@/components/Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  // TODO: connect to a backend (Cloudflare Pages Function, Formspree, Resend, etc.).
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.info("Quote request", Object.fromEntries(new FormData(e.currentTarget)));
    setSent(true);
  };

  const info = [
    { icon: Building2, label: "Company", value: "VAREON Engineering Services" },
    { icon: Phone, label: "Phone", value: CONTACT.phone },
    { icon: Mail, label: "Email", value: CONTACT.email },
    { icon: MapPin, label: "Office", value: CONTACT.address },
  ];

  return (
    <section id="contact" className="bg-mist py-24 dark:bg-[#091a31]">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading title="Request a Quote" text="Tell us about your project and an engineer will respond within one business day." />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-6">
            <ul className="space-y-5">
              {info.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-electric/10 text-electric"><Icon size={20} /></span>
                  <div><p className="text-sm">{label}</p><p className="font-semibold text-navy dark:text-white">{value}</p></div>
                </li>
              ))}
            </ul>
            <iframe title="VAREON office location" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Cebu+City,+Philippines&output=embed"
              className="h-72 w-full rounded-2xl border-0 shadow-soft" />
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-soft dark:border-white/10 dark:bg-white/5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label><Input id="name" name="name" required autoComplete="name" /></div>
                <div><label htmlFor="company" className="mb-1.5 block text-sm font-medium">Company</label><Input id="company" name="company" autoComplete="organization" /></div>
                <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label><Input id="email" name="email" type="email" required autoComplete="email" /></div>
                <div><label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Phone</label><Input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium">Service Needed</label>
                <select id="service" name="service" className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-navy dark:border-white/15 dark:bg-navy dark:text-white">
                  {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label><Textarea id="message" name="message" required /></div>
              <Button type="submit" size="lg" className="w-full">Send Request</Button>
              {sent && <p role="status" className="text-center text-sm font-medium text-cyan">Thank you. Your request has been recorded.</p>}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
