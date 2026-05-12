import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "./information";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy — Frostblood Formulation" },
      { name: "description", content: "How Frostblood handles your data." },
      { property: "og:title", content: "Privacy — Frostblood Formulation" },
      {
        property: "og:description",
        content: "How Frostblood handles your data.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <PageShell label="Privacy">
      <h1 className="font-display text-5xl md:text-7xl leading-[0.9] mb-12">
        Privacy.
      </h1>
      <div className="space-y-10 max-w-2xl text-foreground/70 leading-relaxed text-[15px]">
        <Section
          label="01 — Data we hold"
          body="We retain only what is required to fulfil an order: name, shipping address, contact, and transaction reference. No tracking pixels."
        />
        <Section
          label="02 — Use"
          body="Your data is used solely to deliver Frostblood product and respond to correspondence. We do not sell or share with third parties beyond shipping and payment partners."
        />
        <Section
          label="03 — Retention"
          body="Order records are retained for the period required by tax law. You may request deletion of all other data at any time."
        />
        <Section
          label="04 — Contact"
          body="Privacy enquiries: atelier@frostblood.co"
        />
      </div>
    </PageShell>
  );
}

function Section({ label, body }: { label: string; body: string }) {
  return (
    <div className="space-y-3">
      <div className="font-mono tracking-mono text-[10px] text-gold/60">
        {label}
      </div>
      <p>{body}</p>
    </div>
  );
}
