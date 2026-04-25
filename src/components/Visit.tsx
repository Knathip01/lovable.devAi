export function Visit() {
  return (
    <section id="visit" className="relative py-32 md:py-44 px-6 lg:px-12 overflow-hidden">
      <div className="absolute inset-0 ember-glow opacity-50" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">— Visit Us</p>
        <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-[0.95]">
          The doors open
          <br />
          <span className="italic text-gold-gradient">at dusk.</span>
        </h2>
        <p className="mt-10 text-lg text-muted-foreground max-w-xl mx-auto">
          A members' tasting room hidden behind an unmarked door on Sukhumvit Soi 11. Reservations only.
        </p>
        <div className="mt-14 inline-flex flex-col items-center gap-2">
          <button className="bg-gold-gradient text-primary-foreground px-12 py-5 text-xs uppercase tracking-[0.3em] font-medium shadow-gold hover:shadow-glow transition-all duration-700">
            Reserve a Table
          </button>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-4">
            Tue – Sat · 19:00 – 02:00
          </span>
        </div>
      </div>
    </section>
  );
}
