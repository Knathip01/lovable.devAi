import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden grain">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBottle}
          alt="Premium whiskey bottle"
          width={1536}
          height={1536}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="absolute inset-0 ember-glow" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 pt-40 pb-24 min-h-screen flex flex-col justify-between">
        <div className="flex items-start justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
          <span>Est. 1897</span>
          <span className="hidden md:block">Distilled in Oak · Aged in Silence</span>
          <span>N° 014</span>
        </div>

        <div className="max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8 animate-shimmer">
            — A Spirit Of The Hour
          </p>
          <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.9] tracking-tighter">
            Midnight
            <br />
            <span className="italic text-gold-gradient">Distillery</span>
          </h1>
          <p className="mt-10 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Rare spirits, hand-selected from the world's quietest cellars.
            Bottled for the few who pour with intention.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="group relative inline-flex items-center gap-3 bg-gold-gradient text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium shadow-gold hover:shadow-glow transition-all duration-700"
            >
              Explore Collection
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a href="#story" className="text-xs uppercase tracking-[0.25em] text-foreground/80 hover:text-gold transition-colors border-b border-gold/40 pb-1">
              Our Story
            </a>
          </div>
        </div>

        <div className="flex items-end justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <div className="hidden md:block">
            <div className="text-gold text-3xl font-display mb-1">∞</div>
            <span>Scroll</span>
          </div>
          <div className="text-right max-w-xs">
            <span className="block text-gold/80 mb-2 text-[10px]">Featured Bottle</span>
            <span className="font-display text-base normal-case tracking-normal text-foreground">
              The Black Reserve · 21 Years
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
