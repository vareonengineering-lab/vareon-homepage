import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* ignore */ }
  };

  const solid = scrolled || open;
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "bg-navy/90 py-3 shadow-soft backdrop-blur-lg" : "bg-transparent py-5")}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5" aria-label="Main">
        <Link to="/" className="text-xl font-extrabold tracking-tight text-white">
          VAREON<span className="text-cyan"> Engineering</span>
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.label}><a href={n.href} className="text-sm font-medium text-white/80 transition hover:text-cyan">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10" onClick={toggleTheme} aria-label="Toggle dark mode">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex"><a href="/#contact">Get a Quote</a></Button>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </nav>
      {open && (
        <ul className="mx-auto mt-3 max-w-7xl space-y-1 px-5 pb-4 md:hidden">
          {NAV.map((n) => (
            <li key={n.label}><a href={n.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">{n.label}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
