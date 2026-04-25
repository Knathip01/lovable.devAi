import { Link } from "@tanstack/react-router";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

const products = [
  { img: p1, name: "Black Reserve", type: "Single Malt Whiskey", age: "21 Years", price: "฿18,400", n: "01" },
  { img: p2, name: "Botanica Noir", type: "Hand-Crafted Gin", age: "Small Batch", price: "฿4,200", n: "02" },
  { img: p3, name: "Ember Cask", type: "Caribbean Dark Rum", age: "15 Years", price: "฿7,800", n: "03" },
];

export function Collection() {
  return (
    <section id="collection" className="relative py-32 md:py-44 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— The Vault</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter">
              Curated <span className="italic text-gold-gradient">Spirits</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground leading-relaxed">
            Three bottles. Three temperaments. Each chosen by our master to mark a moment worth remembering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60">
          {products.map((p) => (
            <article
              key={p.n}
              className="group relative bg-card overflow-hidden cursor-pointer"
            >
              <div className="absolute top-6 left-6 z-10 text-xs tracking-[0.3em] text-gold font-mono">N° {p.n}</div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 ember-glow opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
              <div className="p-8 border-t border-border/40 relative">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl mb-1">{p.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.type}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mt-1">{p.age}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-gold font-display text-xl">{p.price}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-px bg-gold-gradient w-0 group-hover:w-full transition-all duration-700" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-2 hover:border-gold transition-colors"
          >
            View Full Menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
