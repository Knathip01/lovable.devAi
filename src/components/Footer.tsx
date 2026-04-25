export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 lg:px-12 py-16 bg-card/40">
      <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-gold text-2xl font-display">M</span>
            <span className="font-display tracking-[0.3em] uppercase">Midnight Distillery</span>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
            A house of rare spirits. Bottled in silence, shared in good company.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Visit</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Sukhumvit Soi 11</li>
            <li>Bangkok, 10110</li>
            <li>+66 2 000 0000</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Follow</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="hover:text-gold cursor-pointer transition-colors">Instagram</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Newsletter</li>
            <li className="hover:text-gold cursor-pointer transition-colors">Press</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-border/40 flex flex-wrap justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span>© 2026 Midnight Distillery</span>
        <span>Please drink responsibly · 20+</span>
      </div>
    </footer>
  );
}
