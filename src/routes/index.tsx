import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/frostblood-logo.png";
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
      { title: "Frostblood Formulation — Cold-Forged Protein" },
      {
        name: "description",
        content: "Fermented yeast protein. Two vessels. Forged in cold.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 shrink-0">
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Frostblood Formulation" className="h-9 w-auto" />
        </a>
        <MenuPanel />
      </header>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 min-h-0 border-t border-gold/10">
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
          className="inline-flex items-center gap-2 border border-gold/40 px-4 py-2 font-mono tracking-mono text-[10px] text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-300"
        >
          <Menu className="h-3.5 w-3.5" />
          Menu
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-background border-l border-gold/15 w-full sm:max-w-md p-0 [&>button]:hidden"
      >
        <div className="flex items-center justify-between px-8 py-5 border-b border-gold/10">
          <span className="font-mono tracking-mono text-[10px] text-gold/60">
            Index
          </span>
          <SheetClose asChild>
            <button
              aria-label="Close menu"
              className="text-foreground/60 hover:text-gold transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </SheetClose>
        </div>
        <nav className="flex flex-col px-8 py-12 gap-6">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-5 font-display text-4xl md:text-5xl text-foreground hover:text-gold transition-colors duration-300"
            >
              <span className="font-mono tracking-mono text-[10px] text-gold/40 w-8">
                0{i + 1}
              </span>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 px-8 py-5 border-t border-gold/10 font-mono tracking-mono text-[10px] text-foreground/30 flex justify-between">
          <span>© MMXXVI Frostblood</span>
          <span className="text-gold/40">Cold-forged</span>
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
      className={`group relative flex flex-col justify-between p-6 md:p-10 overflow-hidden bg-background hover:bg-card transition-colors duration-500 ${border ? "md:border-r border-b md:border-b-0 border-gold/10" : ""}`}
    >
      <div className="flex items-start justify-between font-mono tracking-mono text-[10px]">
        <span className="text-gold/60">{tag}</span>
        <span className="text-foreground/35">{weight}</span>
      </div>

      <div className="flex-1 flex items-center justify-center py-4 relative min-h-0">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.55 0.22 27 / 0.3), transparent 70%)",
          }}
        />
        <img
          src={img}
          alt={name}
          className="relative h-full max-h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>

      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl md:text-3xl text-foreground leading-none">
          {name}
        </h2>
        <div className="flex items-center gap-4 shrink-0">
          <span
            className="font-display text-2xl"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.88 0.13 85), oklch(0.55 0.13 65))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {price}
          </span>
          <button className="border border-gold/40 px-4 py-2 font-mono tracking-mono text-[10px] text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-300 whitespace-nowrap">
            Forge →
          </button>
        </div>
      </div>
    </div>
  );
}
