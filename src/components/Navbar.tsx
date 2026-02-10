import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-neon-violet/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-neon flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(176,38,255,0.4)] transition-shadow duration-300">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-white/90">
            Zenith<span className="text-neon-violet">__</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/50 hover:text-neon-violet transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-xl border-t border-white/5 animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/50 hover:text-neon-violet transition-colors py-3 px-3 rounded-lg hover:bg-white/[0.03]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
