import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Particles } from "@/components/Particles";
import logo from "@/assets/frostblood-logo.png";
import pouchHero from "@/assets/pouch-hero.jpg";
import sachet from "@/assets/sachet.jpg";
import sachetIce from "@/assets/sachet-ice.jpg";
import sachetBlast from "@/assets/sachet-blast.png";
import sachetPoster from "@/assets/sachet-poster.png";
import molecular from "@/assets/molecular.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Frostblood Formulation — Cold-Forged Protein" },
      { name: "description", content: "Fermented yeast protein. 30g per serving. Forged in cold. Zero prep. Absolute intensity." },
      { property: "og:title", content: "Frostblood Formulation" },
      { property: "og:description", content: "Cold-forged fermented yeast protein. The future of recovery." },
    ],
  }),
});

function Index() {
  return (
    <main id="top" className="bg-background text-foreground overflow-x-hidden">
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
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const productY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden grain">
      {/* Atmospheric backdrop */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div className="absolute inset-0 ice-overlay" />
      <motion.div style={{ opacity }} className="absolute inset-0 opacity-40">
        <img src={sachetBlast} alt="" aria-hidden className="h-full w-full object-cover mix-blend-screen" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

      <Particles density={70} />

      <motion.div style={{ y }} className="relative z-10 flex min-h-screen flex-col justify-between px-6 md:px-12 pt-28 md:pt-32 pb-12">
        <div className="flex items-start justify-between gap-8 font-mono tracking-mono text-[10px] text-foreground/60">
          <div className="max-w-[18ch]">Fermented Yeast Protein / Cold-Forged / Edition 001</div>
          <div className="hidden md:block text-right max-w-[20ch] text-gold/70">
            Veg · 30g Protein<br/>1 Serving / Sachet
          </div>
        </div>

        <div className="relative grid grid-cols-12 gap-6 items-end">
          {/* Title */}
          <div className="col-span-12 md:col-span-7 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-display text-[20vw] md:text-[11vw] leading-[0.85]">
                <span className="block text-foreground">Protein,</span>
                <span className="block gradient-blood-text -mt-2">Rewritten.</span>
              </h1>
            </motion.div>

            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1.4 }} className="divider-line mt-10 origin-left" />

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 1 }}
                className="text-sm text-foreground/70 max-w-sm leading-relaxed"
              >
                Forged from fermented yeast. Cold-processed. 30g of complete protein in every sachet.
                Zero prep. Absolute intensity.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }}
                href="#science"
                className="group inline-flex items-center justify-between gap-6 border border-gold/40 px-6 py-4 hover:bg-gold hover:text-primary-foreground transition-colors duration-500"
              >
                <span className="font-mono tracking-mono text-[11px] text-gold group-hover:text-primary-foreground">Enter the Formulation</span>
                <span className="font-mono text-xs text-gold group-hover:text-primary-foreground">→</span>
              </motion.a>
            </div>
          </div>

          {/* Product render */}
          <motion.div
            style={{ y: productY }}
            initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: -4 }}
            transition={{ delay: 0.4, duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-5 absolute md:relative right-0 md:right-auto -bottom-10 md:bottom-auto w-3/4 md:w-full md:max-w-md mx-auto pointer-events-none"
          >
            <div className="relative animate-drift">
              <div className="absolute inset-0 blur-3xl bg-blood/30 rounded-full" />
              <img src={pouchHero} alt="Frostblood Formulation 1.2kg pouch" width={1080} height={1600} className="relative w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono tracking-mono text-[10px] text-gold/60 hidden md:block">
        ↓ Scroll
      </div>
    </section>
  );
}

function Marquee() {
  const words = ["Zero Prep.", "✦", "Absolute Intensity.", "✦", "Cold-Forged.", "✦", "Fermented.", "✦", "30g Protein.", "✦"];
  return (
    <div className="relative border-y border-gold/20 py-5 overflow-hidden bg-navy-deep">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="flex whitespace-nowrap font-display text-4xl md:text-6xl gap-12"
      >
        {[...words, ...words, ...words, ...words].map((w, i) => (
          <span key={i} className={i % 4 === 0 ? "gradient-gold-text" : i % 4 === 2 ? "text-foreground" : "text-stroke"}>{w}</span>
        ))}
      </motion.div>
    </div>
  );
}

function Science() {
  const facts = [
    { n: "01", k: "Protein / Serving", v: "30g", d: "Complete amino profile in every cold-forged sachet." },
    { n: "02", k: "Bioavailability", v: "98%", d: "Near-complete assimilation. Verified across cohorts." },
    { n: "03", k: "Carbon Footprint", v: "−87%", d: "Versus whey isolate. Closed-loop fermentation." },
    { n: "04", k: "Digestion", v: "27min", d: "Engineered for rapid uptake. No sedimentary weight." },
  ];
  return (
    <section id="science" className="relative px-6 md:px-12 py-32 md:py-48">
      <div className="grid grid-cols-12 gap-6 md:gap-12">
        <div className="col-span-12 md:col-span-4">
          <div className="font-mono tracking-mono text-[11px] text-gold/70 mb-6">§ 01 — The Method</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            <span className="gradient-gold-text">Cultivated,</span><br/>
            <span className="text-stroke-white">not extracted.</span>
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-foreground/75 leading-relaxed">
          <p className="text-lg md:text-xl">
            Frostblood is grown — not slaughtered, not industrially refined. A strain of single-cell yeast,
            cultured in cold bioreactors, ferments into a protein matrix that rivals whey in performance
            and surpasses it in purity.
          </p>
          <p className="text-sm text-foreground/55">
            Each batch is harvested, vacuum-dried at sub-zero temperatures, and milled to colloidal fineness.
            Nothing added. Nothing extracted. The formulation is the discovery.
          </p>
        </div>
      </div>

      <div className="relative mt-24 md:mt-36 grid grid-cols-12 gap-6 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-6 relative aspect-square overflow-hidden border border-gold/20"
        >
          <img src={molecular} alt="Molecular structure" loading="lazy" width={1600} height={1200} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
            <div className="font-mono tracking-mono text-[10px] text-gold/80">
              Fig. I — Yeast polypeptide chain<br/>Magnification 40,000×
            </div>
            <div className="font-mono tracking-mono text-[10px] text-blood">●REC</div>
          </div>
        </motion.div>

        <div className="col-span-12 md:col-span-6 grid grid-cols-2 gap-px bg-gold/10">
          {facts.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.08 }}
              className="bg-background p-6 md:p-8 min-h-[200px] flex flex-col justify-between hover:bg-card transition-colors duration-500"
            >
              <div className="font-mono tracking-mono text-[10px] text-gold/60">{f.n} / {f.k}</div>
              <div>
                <div className="font-display text-5xl md:text-6xl gradient-gold-text">{f.v}</div>
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
    <section id="forms" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-gold/15 bg-navy-deep">
      <div className="mb-16 md:mb-24 flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="font-mono tracking-mono text-[11px] text-gold/70 mb-6">§ 02 — The Forms</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            Two vessels.<br/>
            <span className="gradient-blood-text">One formula.</span>
          </h2>
        </div>
        <div className="font-mono tracking-mono text-[11px] text-foreground/50 max-w-xs">
          Cold-forged, single-batch releases. Distributed by edition.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
        <ProductCard
          img={pouchHero}
          tag="Vessel I"
          name="Performance Pouch"
          weight="1.2 KG"
          price="₹2,499"
          spec={[
            ["Servings", "40 × 30g"],
            ["Protein", "30g / serving"],
            ["Flavour", "Café Mocha"],
            ["Profile", "Complete amino"],
          ]}
        />
        <ProductCard
          img={sachet}
          tag="Vessel II"
          name="Ration Sachets"
          weight="30 × 42G"
          price="₹1,899"
          spec={[
            ["Units", "30 sachets"],
            ["Protein", "30g / sachet"],
            ["Flavour", "Café Mocha"],
            ["Format", "Biotech ration"],
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
    <motion.div whileHover="hover" className="group relative bg-background p-6 md:p-10 cursor-pointer overflow-hidden">
      <div className="flex items-start justify-between font-mono tracking-mono text-[10px]">
        <span className="text-gold/70">{tag}</span>
        <span className="text-foreground/40">{weight}</span>
      </div>

      <motion.div
        variants={{ hover: { scale: 1.05, y: -10, rotate: 1 } }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="my-10 md:my-14 aspect-[4/5] relative overflow-hidden flex items-center justify-center"
      >
        <div className="absolute inset-0 ice-overlay" />
        <img src={img} alt={name} loading="lazy" width={1200} height={1500} className="relative h-full w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]" />
      </motion.div>

      <div className="flex items-end justify-between flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-display text-4xl md:text-5xl text-foreground">{name}</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-1.5 max-w-md">
            {spec.map(([k, v]) => (
              <div key={k} className="flex justify-between font-mono tracking-mono text-[10px] border-b border-gold/15 py-1.5">
                <span className="text-foreground/40">{k}</span>
                <span className="text-foreground/85">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="font-display text-3xl gradient-gold-text">{price}</span>
          <button className="border border-gold/40 px-5 py-3 font-mono tracking-mono text-[10px] text-gold hover:bg-gold hover:text-primary-foreground transition-colors duration-500">
            Forge →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  const items = [
    { k: "Cold Energy", d: "A current, not a spike. Sustained, ambient, undeniable." },
    { k: "No Heaviness", d: "Disappears on contact. The body forgets it consumed anything." },
    { k: "Advanced Recovery", d: "Cellular repair at the substrate level. Reset, fully." },
    { k: "Precision Nutrition", d: "Macronutrient minimalism. Every gram accounted for." },
    { k: "Zero Prep", d: "Tear, pour, forge. Designed for the field, the gym, the road." },
  ];
  return (
    <section id="experience" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-gold/15 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img src={sachetBlast} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <div className="relative">
        <div className="font-mono tracking-mono text-[11px] text-gold/70 mb-6">§ 03 — The Experience</div>
        <h2 className="font-display text-4xl md:text-7xl leading-[0.95] max-w-5xl mb-20">
          The sensation of <span className="gradient-blood-text">cold energy</span> — <span className="text-stroke-white">felt, not described.</span>
        </h2>

        <div className="space-y-px bg-gold/10">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, delay: i * 0.05 }}
              className="group bg-background grid grid-cols-12 items-center gap-4 py-7 md:py-10 px-2 hover:bg-card transition-colors duration-500"
            >
              <div className="col-span-2 md:col-span-1 font-mono tracking-mono text-[10px] text-gold/60">0{i + 1}</div>
              <div className="col-span-10 md:col-span-5 font-display text-2xl md:text-5xl text-foreground group-hover:text-gold group-hover:translate-x-2 transition-all duration-700">
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
    <section id="archive" className="relative px-6 md:px-12 py-32 md:py-48 border-t border-gold/15 bg-navy-deep">
      <div className="mb-12 flex items-end justify-between flex-wrap gap-6">
        <div>
          <div className="font-mono tracking-mono text-[11px] text-gold/70 mb-6">§ 04 — The Ritual</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.9]">
            A product <span className="gradient-gold-text">discovered,</span><br/>not marketed.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 md:gap-3">
        <div className="col-span-12 md:col-span-5 md:row-span-2 relative aspect-[4/5] overflow-hidden border border-gold/15">
          <motion.img
            initial={{ scale: 1.15 }} whileInView={{ scale: 1 }} transition={{ duration: 2.4 }} viewport={{ once: true }}
            src={sachetIce} alt="Sachet on ice" loading="lazy" className="h-full w-full object-cover"
          />
        </div>

        <div className="col-span-7 md:col-span-4 flex items-end p-4 md:p-8 aspect-square bg-card border border-gold/15">
          <h3 className="font-display text-5xl md:text-8xl leading-[0.85]">
            <span className="text-foreground">Frost</span><br/>
            <span className="gradient-blood-text">blood</span>
          </h3>
        </div>

        <div className="col-span-5 md:col-span-3 relative aspect-square overflow-hidden border border-gold/15">
          <img src={sachetPoster} alt="Zero Prep. Absolute Intensity." loading="lazy" className="h-full w-full object-cover" />
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-between p-5 md:p-8 aspect-[5/3] border border-gold/15 bg-card">
          <div className="font-mono tracking-mono text-[10px] text-gold/60">Plate IV — Specimen</div>
          <p className="font-display text-xl md:text-3xl leading-tight">
            "Cold-forged for those who <span className="gradient-blood-text">refuse</span> the ordinary."
          </p>
        </div>

        <div className="col-span-12 md:col-span-3 relative aspect-square overflow-hidden border border-gold/15">
          <img src={sachet} alt="Sachet detail" loading="lazy" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta" className="relative px-6 md:px-12 py-32 md:py-56 border-t border-gold/15 overflow-hidden">
      <Particles density={50} />
      <div className="absolute inset-0 ice-overlay opacity-60" />
      <div className="relative text-center max-w-6xl mx-auto">
        <img src={logo} alt="" aria-hidden className="h-16 md:h-20 w-auto mx-auto mb-10 opacity-90" />
        <div className="font-mono tracking-mono text-[11px] text-gold/70 mb-8">§ Final transmission</div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-8xl leading-[0.95]"
        >
          Join the next era<br/>of <span className="gradient-blood-text">supplementation.</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 1 }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <button className="group relative overflow-hidden border border-gold px-10 py-5 font-mono tracking-mono text-[11px] text-gold hover:text-primary-foreground transition-colors duration-700">
            <span className="relative z-10">Forge Edition 001 →</span>
            <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
          </button>
          <p className="font-mono tracking-mono text-[10px] text-foreground/40 max-w-sm">
            Limited cold-forged release. Distribution begins MMXXVI / Q3.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/15 px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-6 font-mono tracking-mono text-[10px] text-foreground/40 bg-navy-deep">
      <div className="flex items-center gap-3">
        <img src={logo} alt="" aria-hidden className="h-7 w-auto opacity-80" />
        <span>© MMXXVI Frostblood Formulation</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-gold transition-colors">Atelier</a>
        <a href="#" className="hover:text-gold transition-colors">Press</a>
        <a href="#" className="hover:text-gold transition-colors">Contact</a>
      </div>
      <div className="text-gold/50">Cold-forged. Intensity-bound.</div>
    </footer>
  );
}
