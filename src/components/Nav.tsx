import logo from "@/assets/frostblood-logo.png";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Frostblood Formulation" className="h-10 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-10 font-mono tracking-mono text-[11px] text-foreground/70">
          <a href="#science" className="hover:text-gold transition-colors">Science</a>
          <a href="#forms" className="hover:text-gold transition-colors">Product</a>
          <a href="#experience" className="hover:text-gold transition-colors">Experience</a>
          <a href="#archive" className="hover:text-gold transition-colors">Ritual</a>
        </nav>
        <a href="#cta" className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-gold/40 text-gold font-mono tracking-mono text-[10px] hover:bg-gold hover:text-primary-foreground transition-colors">
          Forge Now →
        </a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </header>
  );
}
