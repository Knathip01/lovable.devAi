const steps = [
  { n: "I", title: "Select", body: "Choose a bottle that mirrors your mood — smoky, sweet, or sharp." },
  { n: "II", title: "Pour", body: "Two fingers, neat. A single ice sphere if the night calls for it." },
  { n: "III", title: "Wait", body: "Let the spirit breathe. Let the day fade. Let the room go quiet." },
  { n: "IV", title: "Sip", body: "Slowly. Without urgency. The spirit has waited — so should you." },
];

export function Ritual() {
  return (
    <section id="ritual" className="relative py-32 md:py-44 px-6 lg:px-12 border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-gold mb-4">— The Ritual</p>
          <h2 className="font-display text-5xl md:text-7xl tracking-tighter">
            Four <span className="italic text-gold-gradient">moments</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-10 group hover:bg-card transition-colors duration-700">
              <div className="font-display text-7xl text-gold-gradient mb-8 group-hover:scale-110 origin-left transition-transform duration-700">{s.n}</div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
