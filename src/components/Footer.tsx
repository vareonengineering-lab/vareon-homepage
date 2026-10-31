import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, NAV, SERVICES } from "@/data/content";

const social = [{ icon: Facebook, label: "Facebook" }, { icon: Linkedin, label: "LinkedIn" }, { icon: Instagram, label: "Instagram" }];

export function Footer() {
  return (
    <footer className="bg-navy pt-16 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold text-white">VAREON<span className="text-cyan"> Engineering</span></p>
          <p className="mt-4 text-sm">Engineering Better Buildings. Professional MEPF engineering solutions.</p>
          <div className="mt-5 flex gap-3">
            {social.map(({ icon: Icon, label }) => (
              <a key={label} href="#" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-electric"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base !text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">{NAV.map((n) => <li key={n.label}><a href={n.href} className="hover:text-cyan">{n.label}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 text-base !text-white">Services</h3>
          <ul className="space-y-2 text-sm">{SERVICES.map((s) => <li key={s.title}><a href="/#services" className="hover:text-cyan">{s.title}</a></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 text-base !text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 text-cyan" />{CONTACT.phone}</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 text-cyan" />{CONTACT.email}</li>
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 text-cyan" />{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">© {new Date().getFullYear()} VAREON Engineering Services. All rights reserved.</div>
    </footer>
  );
}
