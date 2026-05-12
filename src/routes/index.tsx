import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import pouchHero from "@/assets/pouch-hero.jpg";
import sachet from "@/assets/sachet.jpg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frostblood Formulation — Protein, Rewritten" },
      {
        name: "description",
        content: "Fermented yeast protein. Two vessels. Cold-forged.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="h-[100dvh] w-screen overflow-hidden bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-10 py-5 shrink-0">
        <a href="/" className="font-display text-base md:text-lg tracking-[-0.04em]">
          FROSTBLOOD
        </a>
        <MenuPanel />
      </header>

      <div className="h-px hairline mx-6 md:mx-10" />

      {/* Body grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 min-h-0">
        {/* Statement column */}
        <section className="md:col-span-4 px-6 md:px-10 pt-8 md:pt-12 pb-6 flex flex-col justify-between">
          <div>
            <div className="font-mono tracking-mono text-[10px] text-foreground/50 mb-6">
              Edition 001 / Cold
            </div>
            <h1 className="font-display leading-[0.82] text-[18vw] md:text-[7.5vw]">
              Protein.
              <br />
              Rewritten.
            </h1>
          </div>
          <div className="hidden md:flex items-end justify-between font-mono tracking-mono text-[10px] text-foreground/50 mt-8">
            <span>Cold-forged</span>
            <span>IN · CN · EU</span>
          </div>
        </section>

        {/* Products */}
        <section className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 min-h-0 border-t md:border-t-0 md:border-l border-foreground/15">
          <ProductPanel
            img={pouchHero}
            tag="Vessel I"
            name="Performance Pouch"
            weight="1.2 KG"
            price="₹2,499"
            border
          />
          <ProductPanel
            img={sachet}
            tag="Vessel II"
            name="Ration Sachets"
            weight="30 × 42G"
            price="₹1,899"
          />
        </section>
      </div>

      <div className="md:hidden px-6 py-3 flex items-center justify-between font-mono tracking-mono text-[10px] text-foreground/50 border-t border-foreground/15">
        <span>Cold-forged</span>
        <span>IN · CN · EU</span>
      </div>
    </main>
  );
}

function MenuPanel() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/information", label: "Information" },
    { to: "/contact", label: "Contact" },
    { to: "/privacy", label: "Privacy" },
  ] as const;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="font-mono tracking-mono text-[11px] text-foreground hover:text-signal transition-colors"
        >
          [ Menu ]
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-ink text-ice border-l-0 w-full sm:max-w-md p-0 [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-8 py-5">
          <span className="font-display text-sm tracking-[-0.04em] text-ice">
            FROSTBLOOD
          </span>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="font-mono tracking-mono text-[11px] text-ice/70 hover:text-ice transition-colors"
            >
              [ Close ]
            </button>
          </SheetClose>
        </div>
        <nav className="flex flex-col px-8 py-16 gap-8">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-6 font-display text-5xl md:text-6xl text-ice hover:text-signal transition-colors duration-300"
            >
              <span className="font-mono tracking-mono text-[10px] text-ice/40 w-8">
                0{i + 1}
              </span>
              {l.label.toUpperCase()}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 px-8 py-5 font-mono tracking-mono text-[10px] text-ice/40 flex justify-between">
          <span>© MMXXVI Frostblood</span>
          <span>Cold-forged</span>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function ProductPanel({
  img,
  tag,
  name,
  weight,
  price,
  border,
}: {
  img: string;
  tag: string;
  name: string;
  weight: string;
  price: string;
  border?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 md:p-8 overflow-hidden bg-background hover:bg-ice transition-colors duration-500 min-h-0 ${border ? "md:border-r border-b md:border-b-0 border-foreground/15" : ""}`}
    >
      <div className="flex items-start justify-between font-mono tracking-mono text-[10px]">
        <span className="text-foreground">{tag}</span>
        <span className="text-foreground/50">{weight}</span>
      </div>

      <div className="flex-1 flex items-center justify-center py-4 min-h-0">
        <img
          src={img}
          alt={name}
          className="relative h-full max-h-full w-auto object-contain mix-blend-multiply group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
      </div>

      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-xl md:text-2xl leading-none max-w-[60%]">
          {name}
        </h2>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="font-display text-xl md:text-2xl text-signal leading-none">
            {price}
          </span>
          <button className="font-mono tracking-mono text-[10px] text-foreground hover:text-signal transition-colors">
            Forge →
          </button>
        </div>
      </div>
    </div>
  );
}
