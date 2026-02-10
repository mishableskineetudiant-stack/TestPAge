import { Eye, ExternalLink, TrendingUp, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Last Letter — Mega Search Word 23",
    desc: "Script Luau keyless pour le jeu Last Letter sur Roblox. Version avancée avec recherche de mots optimisée. Mon script le plus populaire.",
    tags: ["Luau", "Keyless", "Roblox", "Last Letter"],
    views: "40k+",
    gradient: "from-neon-violet/30 to-neon-blue/10",
    featured: true,
    link: "https://rscripts.net/script/last-letter-mega-search-word-23-keyless-pOl0",
  },
  {
    title: "Last Letter — Script V1",
    desc: "La première version de mon script pour Last Letter. Keyless, simple et efficace — c'est celui qui a lancé le tout.",
    tags: ["Luau", "Keyless", "Roblox", "V1"],
    views: "30k+",
    gradient: "from-neon-blue/25 to-neon-violet/10",
    featured: true,
    link: "https://rscripts.net/script/last-letter-script-keyless-v1-m8pH",
  },
  {
    title: "Ce portfolio",
    desc: "Le site que tu regardes en ce moment. Construit avec React, TypeScript et Tailwind CSS. Design néon, responsive et vibe codé.",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    views: "—",
    gradient: "from-neon-green/15 to-neon-blue/10",
    featured: false,
    link: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-neon-violet/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[6px] text-neon-blue/70 font-mono mb-3">
            Projets
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
            Mes <span className="text-gradient">créations</span>
          </h2>
          <p className="text-sm text-white/25 max-w-md mx-auto">
            Mes scripts Roblox publiés sur RScripts et mes autres projets.
          </p>
          <div className="neon-line w-24 mx-auto mt-6" />
        </div>

        {/* Total views banner */}
        <div className="glass-card rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <div className="flex items-center gap-3">
            <TrendingUp size={20} className="text-neon-green" />
            <span className="text-white/50 text-sm">Total des vues sur RScripts :</span>
            <span className="text-2xl font-black text-gradient font-mono">
              70,000+
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-2">
            <Sparkles size={14} className="text-neon-violet" />
            <span className="text-white/40 text-sm">
              Et ça continue de grandir
            </span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="group glass-card rounded-2xl overflow-hidden hover-neon relative flex flex-col"
            >
              {/* Featured badge */}
              {p.featured && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-neon-violet/15 border border-neon-violet/25">
                  <Sparkles size={10} className="text-neon-violet" />
                  <span className="text-[9px] font-semibold text-neon-violet uppercase tracking-wider">
                    populaire
                  </span>
                </div>
              )}

              {/* Top visual */}
              <div
                className={`h-36 bg-gradient-to-br ${p.gradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,38,255,0.08),transparent_70%)]" />

                {/* Views counter */}
                <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10">
                  <Eye size={14} className="text-neon-blue" />
                  <span className="text-sm font-mono font-bold text-white/70">
                    {p.views} vues
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-white font-bold text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t, j) => (
                    <span
                      key={j}
                      className="text-[10px] px-3 py-1.5 rounded-full bg-neon-violet/10 text-neon-violet/60 border border-neon-violet/15 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-white/30 hover:text-neon-violet transition-colors group/link"
                  >
                    <ExternalLink size={12} />
                    <span>Voir sur RScripts</span>
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-xs text-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                    Tu es dessus
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
