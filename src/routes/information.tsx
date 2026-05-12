import { createFileRoute, Link } from "@tanstack/react-router";

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
      <h1 className="font-display text-5xl md:text-8xl leading-[0.85] mb-12">
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
      <div className="font-mono tracking-mono text-[10px] text-foreground/50">
        {label}
      </div>
      <p className="text-foreground/80 leading-relaxed text-[15px]">{body}</p>
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
      <header className="flex items-center justify-between px-6 md:px-10 py-5">
        <Link to="/" className="font-display text-base md:text-lg tracking-[-0.04em]">
          FROSTBLOOD
        </Link>
        <Link
          to="/"
          aria-label="Close"
          className="font-mono tracking-mono text-[11px] text-foreground hover:text-signal transition-colors"
        >
          [ Close ]
        </Link>
      </header>
      <div className="h-px hairline mx-6 md:mx-10" />
      <section className="flex-1 px-6 md:px-10 py-16 md:py-24">
        <div className="font-mono tracking-mono text-[10px] text-foreground/50 mb-6">
          {label}
        </div>
        {children}
      </section>
      <div className="h-px hairline mx-6 md:mx-10" />
      <footer className="px-6 md:px-10 py-4 font-mono tracking-mono text-[10px] text-foreground/50 flex justify-between">
        <span>© MMXXVI Frostblood Formulation</span>
        <span>Cold-forged</span>
      </footer>
    </main>
  );
}
