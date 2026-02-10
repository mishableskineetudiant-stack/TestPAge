import { Heart, Gamepad2, MessageCircle, ExternalLink, Mail } from "lucide-react";

export function ContactFooter() {
  return (
    <>
      <section id="contact" className="relative py-28 px-6">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-neon-violet/5 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-3xl text-center">
          {/* Header */}
          <p className="text-xs uppercase tracking-[6px] text-neon-violet/70 font-mono mb-3">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Me <span className="text-gradient">contacter</span>
          </h2>
          <p className="text-sm text-white/30 max-w-md mx-auto mb-12">
            Un projet en tête, une question ou juste envie de discuter ?
            N'hésite pas à me contacter.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
            <a
              href="mailto:misha.bleskine@gmail.com"
              className="glass-card rounded-xl p-6 hover-neon flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-neon-pink/10 flex items-center justify-center">
                <Mail size={20} className="text-neon-pink" />
              </div>
              <span className="text-white/70 text-sm font-medium">Email</span>
              <span className="text-white/30 text-[11px] font-mono">misha.bleskine@gmail.com</span>
            </a>

            <a
              href="#"
              className="glass-card rounded-xl p-6 hover-neon flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-neon-violet/10 flex items-center justify-center">
                <MessageCircle size={20} className="text-neon-violet" />
              </div>
              <span className="text-white/70 text-sm font-medium">Discord</span>
              <span className="text-white/30 text-xs font-mono">Zenith__</span>
            </a>

            <a
              href="https://rscripts.net/script/last-letter-mega-search-word-23-keyless-pOl0"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover-neon flex flex-col items-center gap-3 cursor-pointer transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center">
                <Gamepad2 size={20} className="text-neon-blue" />
              </div>
              <span className="text-white/70 text-sm font-medium">RScripts</span>
              <span className="text-white/30 text-xs font-mono flex items-center gap-1">
                Mes scripts <ExternalLink size={10} />
              </span>
            </a>
          </div>

          {/* Note */}
          <div className="glass-card rounded-xl p-5 inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span className="text-sm text-white/30">
              N'hésite pas à m'écrire par <span className="text-neon-pink font-medium">email</span> ou sur <span className="text-neon-violet font-medium">Discord</span>
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/5 py-8 px-6">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 font-mono">
            © {new Date().getFullYear()} Misha BLESKINE — Zenith__
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/20">
            Fait avec
            <Heart
              size={12}
              className="text-neon-pink"
              fill="currentColor"
            />
            et beaucoup de passion
          </p>
        </div>
      </footer>
    </>
  );
}
