import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CATEGORIES, PRICE_RANGES, PRODUCTS, type Category, type PriceRangeId } from "@/data/products";

const SORTS = ["featured", "price-asc", "price-desc"] as const;

const menuSchema = z.object({
  category: fallback(z.enum(["all", "whiskey", "gin", "rum", "tequila", "cognac", "vodka"]), "all").default("all"),
  price: fallback(z.enum(["all", "under-5k", "5k-10k", "10k-20k", "over-20k"]), "all").default("all"),
  sort: fallback(z.enum(SORTS), "featured").default("featured"),
});

export const Route = createFileRoute("/menu")({
  validateSearch: zodValidator(menuSchema),
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "The Menu — Midnight Distillery" },
      { name: "description", content: "Browse our full vault of rare spirits — filter by category, price, and intent." },
      { property: "og:title", content: "The Menu — Midnight Distillery" },
      { property: "og:description", content: "Browse our full vault of rare spirits — filter by category, price, and intent." },
    ],
  }),
});

function MenuPage() {
  const { category, price, sort } = Route.useSearch();

  const filtered = useMemo(() => {
    const range = PRICE_RANGES.find((r) => r.id === price)!;
    let list = PRODUCTS.filter((p) => {
      const catOk = category === "all" || p.category === category;
      const priceOk = p.price >= range.min && p.price <= range.max;
      return catOk && priceOk;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [category, price, sort]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-16 px-6 lg:px-12 border-b border-border/60 grain">
        <div className="absolute inset-0 ember-glow opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span className="text-gold">Menu</span>
          </div>
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— The Vault</p>
          <h1 className="font-display text-6xl md:text-8xl tracking-tighter leading-[0.9]">
            The <span className="italic text-gold-gradient">Menu</span>
          </h1>
          <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
            Every bottle on our shelves, organized for the discerning eye.
            Filter by spirit, price, or intuition.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-40 backdrop-blur-md bg-background/85 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 space-y-5">
          <FilterRow label="Spirit">
            <FilterChip active={category === "all"} to="/menu" search={(p) => ({ ...p, category: "all" as const })}>
              All
            </FilterChip>
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c.id}
                active={category === c.id}
                to="/menu"
                search={(p) => ({ ...p, category: c.id })}
              >
                {c.label}
              </FilterChip>
            ))}
          </FilterRow>

          <FilterRow label="Price">
            {PRICE_RANGES.map((r) => (
              <FilterChip
                key={r.id}
                active={price === r.id}
                to="/menu"
                search={(p) => ({ ...p, price: r.id })}
              >
                {r.label}
              </FilterChip>
            ))}
          </FilterRow>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-2 border-t border-border/40">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {filtered.length} {filtered.length === 1 ? "bottle" : "bottles"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground hidden sm:inline">Sort</span>
              {SORTS.map((s) => (
                <FilterChip
                  key={s}
                  active={sort === s}
                  to="/menu"
                  search={(p) => ({ ...p, sort: s })}
                >
                  {s === "featured" ? "Featured" : s === "price-asc" ? "Price ↑" : "Price ↓"}
                </FilterChip>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-12 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          {filtered.length === 0 ? (
            <div className="text-center py-32">
              <p className="font-display text-3xl text-muted-foreground italic">
                No bottles match your taste.
              </p>
              <Link
                to="/menu"
                search={{ category: "all", price: "all", sort: "featured" }}
                className="inline-block mt-6 text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/40 pb-1 hover:text-foreground"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/60">
              {filtered.map((p) => (
                <article key={p.id} className="group relative bg-card overflow-hidden cursor-pointer">
                  <div className="absolute top-5 left-5 z-10 text-[10px] tracking-[0.3em] text-gold font-mono">
                    N° {p.n}
                  </div>
                  <div className="absolute top-5 right-5 z-10 text-[10px] tracking-[0.3em] uppercase text-muted-foreground bg-background/60 backdrop-blur px-2 py-1">
                    {p.category}
                  </div>
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
                  <div className="p-7 border-t border-border/40 relative">
                    <h3 className="font-display text-2xl mb-1">{p.name}</h3>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.type}</p>
                    <div className="flex items-end justify-between mt-5 pt-4 border-t border-border/40">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gold/70 leading-relaxed">
                        <div>{p.age}</div>
                        <div className="text-muted-foreground/80">{p.origin} · {p.abv}</div>
                      </div>
                      <span className="text-gold font-display text-xl whitespace-nowrap">
                        ฿{p.price.toLocaleString()}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-px bg-gold-gradient w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground w-16 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

type SearchUpdater = (prev: { category: Category | "all"; price: PriceRangeId; sort: (typeof SORTS)[number] }) => { category: Category | "all"; price: PriceRangeId; sort: (typeof SORTS)[number] };

function FilterChip({
  active,
  children,
  to,
  search,
}: {
  active: boolean;
  children: React.ReactNode;
  to: "/menu";
  search: SearchUpdater;
}) {
  return (
    <Link
      to={to}
      search={search}
      className={[
        "text-[11px] uppercase tracking-[0.2em] px-4 py-2 border transition-all duration-300",
        active
          ? "bg-gold-gradient border-transparent text-primary-foreground shadow-gold"
          : "border-border/60 text-muted-foreground hover:border-gold/60 hover:text-gold",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}
