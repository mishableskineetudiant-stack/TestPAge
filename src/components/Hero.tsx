import { useState, useEffect } from "react";
import { ArrowDown, Gamepad2, Sparkles, ExternalLink } from "lucide-react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-neon-violet/20 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 -right-40 w-[400px] h-[400px] bg-neon-blue/15 rounded-full blur-[130px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-neon-pink/10 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "5s" }}
      />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-neon-violet/20 bg-neon-violet/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-xs text-white/50 font-mono">
            Disponible pour des projets
          </span>
        </div>

        {/* Greeting */}
        <p className="text-lg sm:text-xl text-white/30 font-light mb-3 tracking-wide">
          Salut, moi c'est
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-2 leading-none">
          <span className="text-gradient animate-neon-pulse">Misha</span>
          <span className="text-white/90"> BLESKINE</span>
        </h1>

        {/* Pseudo */}
        <p className="text-sm text-white/30 font-mono mb-6">
          aka <span className="text-neon-violet font-medium">Zenith__</span>
          <span className="text-white/15 mx-2">·</span>
          <span className="text-white/15">ex voxxar20</span>
        </p>

        {/* Tagline */}
        <p className="text-base sm:text-lg text-white/40 mb-3 max-w-lg mx-auto">
          Développeur de{" "}
          <span className="text-neon-blue font-medium">14 ans</span>, passionné
          par le scripting{" "}
          <span className="text-neon-violet font-medium">Roblox</span> et la
          création de projets qui ont du style.
        </p>

        <p className="text-sm text-white/20 max-w-md mx-auto mb-10">
          +70 000 vues sur mes scripts Luau — autodidacte et toujours en train de builder.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-5 mb-10">
          <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover-neon cursor-default">
            <div className="w-9 h-9 rounded-lg bg-neon-violet/10 flex items-center justify-center">
              <Sparkles size={16} className="text-neon-violet" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gradient font-mono">70k+</p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider">
                vues
              </p>
            </div>
          </div>
          <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover-neon cursor-default">
            <div className="w-9 h-9 rounded-lg bg-neon-blue/10 flex items-center justify-center">
              <Gamepad2 size={16} className="text-neon-blue" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gradient font-mono">Luau</p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider">
                Roblox scripting
              </p>
            </div>
          </div>
          <div className="glass-card rounded-xl px-5 py-3.5 flex items-center gap-3 hover-neon cursor-default">
            <div className="w-9 h-9 rounded-lg bg-neon-green/10 flex items-center justify-center">
              <ExternalLink size={16} className="text-neon-green" />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold text-gradient font-mono">2</p>
              <p className="text-[10px] text-white/30 uppercase tracking-wider">
                scripts publiés
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="group flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-neon text-white font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(176,38,255,0.5)] transition-all duration-300"
          >
            Voir mes projets
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          <a
            href="#about"
            className="px-7 py-3 rounded-full border border-white/10 text-white/50 font-medium text-sm hover:border-neon-violet/50 hover:text-white transition-all duration-300"
          >
            En savoir plus
          </a>
        </div>

        {/* Social */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://rscripts.net/script/last-letter-mega-search-word-23-keyless-pOl0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/8 flex items-center justify-center text-white/30 hover:text-neon-blue hover:border-neon-blue/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
            aria-label="RScripts"
          >
            <Gamepad2 size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/15 hover:text-neon-violet transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[4px]">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
