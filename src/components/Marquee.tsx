export function Marquee() {
  const items = ["Single Malt", "Aged Rum", "Botanical Gin", "Rare Bourbon", "Mezcal", "Cognac", "Absinthe"];
  return (
    <div className="relative border-y border-border/60 bg-card/40 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-12 font-display italic text-3xl md:text-5xl text-foreground/30 hover:text-gold transition-colors">
            {item} <span className="text-gold mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
