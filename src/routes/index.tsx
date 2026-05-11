import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/frostblood-logo.png";
import pouchHero from "@/assets/pouch-hero.jpg";
import sachet from "@/assets/sachet.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frostblood Formulation — Cold-Forged Protein" },
      {
        name: "description",
        content: "Fermented yeast protein. 30g per serving. Forged in cold.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 md:px-14 py-6 border-b border-gold/15 shrink-0">
        <img src={logo} alt="Frostblood Formulation" className="h-9 w-auto" />
        <nav className="hidden md:flex items-center gap-10 font-mono tracking-mono text-[11px] text-foreground/50">
          <span>Cold-Forged Protein</span>
          <span className="text-gold/60">Edition 001</span>
        </nav>
        <a
          href="#"
          className="font-mono tracking-mono text-[10px] text-gold border border-gold/40 px-4 py-2 hover:bg-gold hover:text-primary-foreground transition-colors duration-400"
        >
          Forge Now →
        </a>
      </header>

      {/* Body */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Left — brand */}
        <div className="flex flex-col justify-between px-8 md:px-14 py-10 md:py-14 md:w-[38%] shrink-0 border-r border-gold/10">
          <div>
            <div className="font-mono tracking-mono text-[10px] text-gold/60 mb-5">
              Fermented Yeast Protein / Veg / Complete Amino
            </div>
            <h1 className="font-display text-[13vw] md:text-[5.5vw] leading-[0.88] tracking-tight">
              <span className="block text-foreground">Protein,</span>
              <span
                className="block"
                style={{
                  background: "linear-gradient(180deg, oklch(0.72 0.24 27), oklch(0.4 0.2 25))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Rewritten.
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
              Grown in cold bioreactors. Zero slaughter, zero compromise. 30g of complete protein
              per serving — forged, not extracted.
            </p>
            <div className="flex gap-6 font-mono tracking-mono text-[10px]">
              <div>
                <div className="text-gold text-xl font-display">30g</div>
                <div className="text-foreground/40 mt-0.5">Protein / serving</div>
              </div>
              <div className="w-px bg-gold/15" />
              <div>
                <div className="text-gold text-xl font-display">98%</div>
                <div className="text-foreground/40 mt-0.5">Bioavailability</div>
              </div>
              <div className="w-px bg-gold/15" />
              <div>
                <div className="text-gold text-xl font-display">−87%</div>
                <div className="text-foreground/40 mt-0.5">Carbon vs whey</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — products */}
        <div className="flex-1 grid grid-cols-2 min-h-0">
          <ProductPanel
            img={pouchHero}
            tag="Vessel I"
            name="Performance Pouch"
            weight="1.2 KG"
            price="₹2,499"
            detail="40 servings · Café Mocha"
            border
          />
          <ProductPanel
            img={sachet}
            tag="Vessel II"
            name="Ration Sachets"
            weight="30 × 42G"
            price="₹1,899"
            detail="30 sachets · Café Mocha"
          />
        </div>
      </div>

      {/* Footer strip */}
      <footer className="shrink-0 border-t border-gold/10 px-8 md:px-14 py-3 flex items-center justify-between font-mono tracking-mono text-[10px] text-foreground/30">
        <span>© MMXXVI Frostblood Formulation</span>
        <span className="text-gold/40">Cold-forged. Intensity-bound.</span>
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gold transition-colors">
            Atelier
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Press
          </a>
          <a href="#" className="hover:text-gold transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}

function ProductPanel({
  img,
  tag,
  name,
  weight,
  price,
  detail,
  border,
}: {
  img: string;
  tag: string;
  name: string;
  weight: string;
  price: string;
  detail: string;
  border?: boolean;
}) {
  return (
    <div
      className={`group relative flex flex-col justify-between p-6 md:p-10 overflow-hidden cursor-pointer bg-background hover:bg-card transition-colors duration-500 ${border ? "border-r border-gold/10" : ""}`}
    >
      {/* Tag + weight */}
      <div className="flex items-start justify-between font-mono tracking-mono text-[10px]">
        <span className="text-gold/60">{tag}</span>
        <span className="text-foreground/35">{weight}</span>
      </div>

      {/* Product image */}
      <div className="flex-1 flex items-center justify-center py-4 relative">
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
          className="relative h-full max-h-[42vh] w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.03] transition-transform duration-700"
        />
      </div>

      {/* Info */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground">{name}</h2>
          <p className="font-mono tracking-mono text-[10px] text-foreground/40 mt-1">{detail}</p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <span
            className="font-display text-2xl"
            style={{
              background: "linear-gradient(135deg, oklch(0.88 0.13 85), oklch(0.55 0.13 65))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {price}
          </span>
          <button className="border border-gold/40 px-4 py-2 font-mono tracking-mono text-[10px] text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-400 whitespace-nowrap">
            Forge →
          </button>
        </div>
      </div>
    </div>
  );
}
