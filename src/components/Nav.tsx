export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rotate-45 bg-frost" />
          <span className="font-mono tracking-mono text-[11px] text-foreground/90">Frostblood / Formulation</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-mono tracking-mono text-[11px] text-foreground/70">
          <a href="#science" className="hover:text-foreground transition-colors">Science</a>
          <a href="#forms" className="hover:text-foreground transition-colors">Forms</a>
          <a href="#experience" className="hover:text-foreground transition-colors">Experience</a>
          <a href="#archive" className="hover:text-foreground transition-colors">Archive</a>
        </nav>
        <div className="font-mono tracking-mono text-[11px] text-foreground/60">N° 001 — MMXXVI</div>
      </div>
    </header>
  );
}
