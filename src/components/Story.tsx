import atmosphere from "@/assets/atmosphere.jpg";

export function Story() {
  return (
    <section id="story" className="relative py-32 md:py-44 px-6 lg:px-12 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
          <img src={atmosphere} alt="Whiskey served on the rocks" loading="lazy" width={1536} height={1024} className="w-full h-full object-cover" />
          <div className="absolute inset-0 ember-glow" />
          <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-gold font-mono">— Pour № 47</div>
        </div>

        <div className="order-1 lg:order-2 max-w-xl">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— Heritage</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-tighter leading-[1.05]">
            One hundred years
            <br />
            of <span className="italic text-gold-gradient">patience</span>.
          </h2>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Founded in a forgotten coastal town, Midnight Distillery has spent
            generations refining the art of slow spirits — each cask resting in
            silence until its character demands to be heard.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We do not chase trends. We chase the perfect pour.
          </p>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-border/60">
            <div>
              <div className="font-display text-4xl text-gold-gradient">127</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Years</div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold-gradient">48</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Casks</div>
            </div>
            <div>
              <div className="font-display text-4xl text-gold-gradient">∞</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">Rituals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
