import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./information";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Frostblood Formulation" },
      { name: "description", content: "Reach the Frostblood atelier." },
      { property: "og:title", content: "Contact — Frostblood Formulation" },
      { property: "og:description", content: "Reach the Frostblood atelier." },
    ],
  }),
});

function ContactPage() {
  return (
    <PageShell label="Contact">
      <h1 className="font-display text-5xl md:text-7xl leading-[0.9] mb-12">
        Reach the atelier.
      </h1>
      <div className="grid md:grid-cols-3 gap-12 max-w-4xl">
        <Item label="Correspondence" value="atelier@frostblood.co" />
        <Item label="Press" value="press@frostblood.co" />
        <Item label="Origin" value="Bombay · Berlin" />
      </div>
    </PageShell>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-3">
      <div className="font-mono tracking-mono text-[10px] text-gold/60">
        {label}
      </div>
      <div className="font-display text-2xl text-foreground">{value}</div>
    </div>
  );
}
