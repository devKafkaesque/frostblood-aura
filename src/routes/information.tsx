import { createFileRoute, Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import logo from "@/assets/frostblood-logo.png";

export const Route = createFileRoute("/information")({
  component: InformationPage,
  head: () => ({
    meta: [
      { title: "Information — Frostblood Formulation" },
      {
        name: "description",
        content:
          "Specifications, ingredients, and origin of Frostblood fermented yeast protein.",
      },
      { property: "og:title", content: "Information — Frostblood Formulation" },
      {
        property: "og:description",
        content: "Specifications, ingredients, and origin.",
      },
    ],
  }),
});

function InformationPage() {
  return (
    <PageShell label="Information">
      <h1 className="font-display text-5xl md:text-7xl leading-[0.9] mb-10">
        Information.
      </h1>
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
        <Block
          label="Origin"
          body="Forged in cold bioreactors. Fermented from a single strain of yeast — slaughter-free, soil-free, complete."
        />
        <Block
          label="Composition"
          body="30g complete protein per serving. All nine essential amino acids. 98% bioavailability. Zero added sugar."
        />
        <Block
          label="Format"
          body="Vessel I — 1.2 KG pouch, 40 servings. Vessel II — 30 sachets at 42g each. Both in Café Mocha."
        />
        <Block
          label="Footprint"
          body="−87% carbon vs whey. No grazing land, no slaughter, no methane. Cold by design."
        />
      </div>
    </PageShell>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div className="space-y-3">
      <div className="font-mono tracking-mono text-[10px] text-gold/60">
        {label}
      </div>
      <p className="text-foreground/70 leading-relaxed text-[15px]">{body}</p>
    </div>
  );
}

export function PageShell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen w-screen bg-background text-foreground flex flex-col">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-gold/10">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Frostblood" className="h-9 w-auto" />
        </Link>
        <Link
          to="/"
          aria-label="Close"
          className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 font-mono tracking-mono text-[10px] text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-300"
        >
          <X className="h-3.5 w-3.5" />
          Close
        </Link>
      </header>
      <section className="flex-1 px-6 md:px-12 py-16 md:py-24">
        <div className="font-mono tracking-mono text-[10px] text-gold/40 mb-4">
          {label}
        </div>
        {children}
      </section>
      <footer className="border-t border-gold/10 px-6 md:px-12 py-4 font-mono tracking-mono text-[10px] text-foreground/30 flex justify-between">
        <span>© MMXXVI Frostblood Formulation</span>
        <span className="text-gold/40">Cold-forged</span>
      </footer>
    </main>
  );
}
