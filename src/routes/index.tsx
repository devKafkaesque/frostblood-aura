import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import heroPouch from "@/assets/hero-pouch.jpg";
import sachets from "@/assets/sachets.jpg";
import molecular from "@/assets/molecular.jpg";
import artTexture from "@/assets/art-texture.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frostblood Formulation — Protein, Rewritten." },
      { name: "description", content: "A fermented yeast protein. Cold energy. The future of supplementation, discovered." },
      { property: "og:title", content: "Frostblood Formulation" },
      { property: "og:description", content: "Protein, rewritten. Fermented yeast performance nutrition." },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Science />
      <Forms />
      <Experience />
      <Archive />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img
          src={heroPouch}
          alt="Frostblood pouch in frost"
          width={1536}
          height={1536}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_85%)]" />
      </motion.div>

      <Particles density={90} />

      <motion.div style={{ y }} className="relative z-10 flex min-h-screen flex-col justify-between px-6 md:px-12 pt-32 pb-12">
        <div className="flex items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }}
            className="font-mono tracking-mono text-[11px] text-foreground/60 max-w-[14ch]"
          >
            Fermented Yeast Protein / Cold-processed / Edition 001
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="hidden md:block font-mono tracking-mono text-[11px] text-foreground/40 text-right max-w-[20ch]"
          >
            48°51′N 02°21′E<br/>Cryogenic Atelier
          </motion.div>
        </div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[18vw] md:text-[14vw] leading-[0.85] tracking-[-0.05em]"
          >
            <span className="block">Protein,</span>
            <span className="block gradient-frost-text">Rewritten.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 1.4 }}
            className="divider-line mt-10 origin-left"
          />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
              className="text-sm text-foreground/70 max-w-sm leading-relaxed"
            >
              A next-generation protein cultivated from fermented yeast.
              Cold-processed. Precision-formulated. Engineered to disappear into the body.
            </motion.p>
            <div />
            <motion.a
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 1 }}
              href="#science"
              className="group inline-flex items-center justify-between gap-6 glass px-6 py-4 rounded-sm hover:bg-foreground hover:text-background transition-colors duration-500"
            >
              <span className="font-mono tracking-mono text-[11px]">Enter the Formulation</span>
              <span className="font-mono text-xs">→</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const words = ["Fermented", "•", "Cold-Processed", "•", "Bioavailable", "•", "Sustainable", "•", "Elite", "•", "Discovered", "•"];
  return (
    <div className="relative border-y border-border py-6 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap font-display text-5xl md:text-7xl gap-12"
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className={i % 2 === 0 ? "text-foreground" : "text-stroke"}>{w}</span>
        ))}
      </motion.div>
    </div>
  );
}

function Science() {
  const facts = [
    { n: "01", k: "Bioavailability", v: "98.4%", d: "Near-complete amino assimilation. Verified across independent cohorts." },
    { n: "02", k: "Carbon Footprint", v: "−87%", d: "Versus whey isolate. Closed-loop fermentation. No livestock." },
    { n: "03", k: "Digestion Time", v: "27 min", d: "Engineered for rapid uptake without sedimentary weight." },
    { n: "04", k: "Amino Profile", v: "Complete", d: "All nine essentials. Naturally balanced. No reconstitution." },
  ];
  return (
    <section id="science" className="relative px-6 md:px-12 py-32 md:py-48">
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono tracking-mono text-[11px] text-foreground/50 mb-6">§ 01 — The Method</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Cultivated, <br/><span className="text-stroke">not extracted.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-foreground/70 leading-relaxed">
          <p className="text-lg md:text-xl">
            Frostblood is grown — not slaughtered, not industrially refined. A strain of single-cell yeast,
            cultured in cold bioreactors, ferments into a protein matrix indistinguishable in performance from
            animal-derived isolates. The result is a substance closer to nutrition than to product.
          </p>
          <p className="text-sm text-foreground/50">
            Each batch is harvested, vacuum-dried at sub-zero temperatures, and milled to a colloidal fineness.
            Nothing added. Nothing extracted. The formulation is the discovery.
          </p>
        </div>
      </div>

      <div className="relative mt-24 md:mt-40 grid grid-cols-12 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-6 relative aspect-square overflow-hidden rounded-sm"
        >
          <img src={molecular} alt="Molecular structures" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 font-mono tracking-mono text-[11px] text-foreground/80">
            Fig. I — Yeast-derived polypeptide chain<br/>Magnification 40,000×
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-px bg-border">
          {facts.map((f) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-background p-6 md:p-8 min-h-[200px] flex flex-col justify-between"
            >
              <div className="font-mono tracking-mono text-[10px] text-foreground/40">{f.n} / {f.k}</div>
              <div>
                <div className="font-display text-4xl md:text-5xl gradient-frost-text">{f.v}</div>
                <p className="mt-3 text-xs text-foreground/55 leading-relaxed">{f.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Forms() {
  return (
    <section id="forms" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border">
      <div className="mb-20 flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="font-mono tracking-mono text-[11px] text-foreground/50 mb-6">§ 02 — Forms</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">Two vessels.<br/>One formula.</h2>
        </div>
        <div className="font-mono tracking-mono text-[11px] text-foreground/50 max-w-xs">
          Available exclusively through atelier distribution. Limited cryogenic batches.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        <ProductCard
          img={heroPouch}
          tag="Vessel I"
          name="Performance Pouch"
          weight="1.2 KG"
          price="€84"
          spec={[
            ["Servings", "40 × 30g"],
            ["Protein", "24g / serving"],
            ["Profile", "Complete amino"],
            ["Origin", "Cryogenic Atelier"],
          ]}
        />
        <ProductCard
          img={sachets}
          tag="Vessel II"
          name="Ration Sachets"
          weight="30 × 30G"
          price="€72"
          spec={[
            ["Units", "30 sachets"],
            ["Protein", "24g / sachet"],
            ["Format", "Sealed biotech ration"],
            ["Use", "Field / travel"],
          ]}
        />
      </div>
    </section>
  );
}

function ProductCard({ img, tag, name, weight, price, spec }: {
  img: string; tag: string; name: string; weight: string; price: string; spec: [string, string][];
}) {
  return (
    <motion.div
      whileHover="hover"
      className="group relative bg-background p-8 md:p-12 cursor-pointer overflow-hidden"
    >
      <div className="flex items-start justify-between font-mono tracking-mono text-[10px] text-foreground/50">
        <span>{tag}</span>
        <span>{weight}</span>
      </div>

      <motion.div
        variants={{ hover: { scale: 1.04, y: -8 } }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="my-12 aspect-[4/5] relative overflow-hidden rounded-sm"
      >
        <img src={img} alt={name} loading="lazy" width={1200} height={1500} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        <motion.div
          variants={{ hover: { opacity: 1 } }}
          initial={{ opacity: 0 }}
          className="absolute inset-0 shimmer pointer-events-none"
        />
      </motion.div>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <div>
          <h3 className="font-display text-4xl md:text-5xl">{name}</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 max-w-md">
            {spec.map(([k, v]) => (
              <div key={k} className="flex justify-between font-mono tracking-mono text-[10px] border-b border-border/60 py-1.5">
                <span className="text-foreground/40">{k}</span>
                <span className="text-foreground/80">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-display text-3xl gradient-frost-text">{price}</span>
          <button className="glass rounded-sm px-5 py-3 font-mono tracking-mono text-[10px] hover:bg-foreground hover:text-background transition-colors duration-500">
            Acquire →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const items = [
    { k: "Clean Energy", d: "A current, not a spike. Sustained, ambient, undeniable." },
    { k: "No Heaviness", d: "Disappears on contact. The body forgets it consumed anything." },
    { k: "Advanced Recovery", d: "Cellular repair architecture. Reset at the substrate level." },
    { k: "Precision Nutrition", d: "Macronutrient minimalism. Every gram accounted for." },
    { k: "Futuristic Formulation", d: "A protein from the next decade, delivered today." },
  ];
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img src={artTexture} alt="" aria-hidden width={1920} height={1200} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="relative">
        <div className="font-mono tracking-mono text-[11px] text-foreground/50 mb-6">§ 03 — Experience</div>
        <h2 className="font-display text-5xl md:text-8xl leading-[0.9] max-w-5xl mb-24">
          The sensation of <span className="gradient-frost-text">cold energy</span> — felt, not described.
        </h2>

        <div className="space-y-px bg-border">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group bg-background grid grid-cols-12 items-center gap-6 py-8 md:py-12 px-2 hover:bg-card transition-colors duration-500"
            >
              <div className="col-span-2 md:col-span-1 font-mono tracking-mono text-[10px] text-foreground/40">0{i + 1}</div>
              <div className="col-span-10 md:col-span-5 font-display text-3xl md:text-5xl group-hover:translate-x-2 transition-transform duration-700">
                {it.k}
              </div>
              <div className="col-span-12 md:col-span-6 text-sm md:text-base text-foreground/60 max-w-lg">{it.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Archive() {
  return (
    <section id="archive" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-border">
      <div className="grid grid-cols-12 gap-2 md:gap-4">
        <div className="col-span-12 md:col-span-5 md:row-span-2 relative aspect-[4/5] overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} transition={{ duration: 2 }} viewport={{ once: true }}
            src={artTexture} alt="" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-7 md:col-span-4 flex items-end p-4 md:p-8 aspect-square">
          <h2 className="font-display text-6xl md:text-9xl leading-[0.85]">Frost<br/>blood</h2>
        </div>

        <div className="col-span-5 md:col-span-3 relative aspect-square overflow-hidden">
          <img src={molecular} alt="" loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-between p-4 md:p-8 aspect-[5/3] border border-border">
          <div className="font-mono tracking-mono text-[10px] text-foreground/50">Plate IV — Specimen detail</div>
          <p className="font-display text-2xl md:text-3xl leading-tight">
            "A product <span className="text-stroke">discovered,</span><br/>not marketed."
          </p>
        </div>

        <div className="col-span-12 md:col-span-3 relative aspect-square overflow-hidden">
          <img src={sachets} alt="" loading="lazy" width={800} height={800} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative px-6 md:px-12 py-40 md:py-64 border-t border-border overflow-hidden">
      <Particles density={50} />
      <div className="relative text-center max-w-6xl mx-auto">
        <div className="font-mono tracking-mono text-[11px] text-foreground/50 mb-10">§ Final transmission</div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl leading-[0.95]"
        >
          Join the next era<br/>of <span className="gradient-frost-text">supplementation.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <button className="group relative overflow-hidden glass rounded-sm px-10 py-5 font-mono tracking-mono text-[11px] hover:text-background transition-colors duration-700">
            <span className="relative z-10">Reserve Edition 001 →</span>
            <span className="absolute inset-0 bg-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          </button>
          <p className="font-mono tracking-mono text-[10px] text-foreground/40 max-w-sm">
            Limited release. Distribution begins MMXXVI / Q3. By invitation and acquisition.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12 flex flex-wrap items-center justify-between gap-6 font-mono tracking-mono text-[10px] text-foreground/40">
      <div>© MMXXVI Frostblood Formulation</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-foreground transition-colors">Atelier</a>
        <a href="#" className="hover:text-foreground transition-colors">Press</a>
        <a href="#" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <div>Made in cryogenic silence.</div>
    </footer>
  );
}
