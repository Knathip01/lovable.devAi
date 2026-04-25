import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/40 border-b border-border/40">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 lg:px-12 h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-gold text-2xl font-display tracking-tight">M</span>
          <span className="font-display text-lg tracking-[0.3em] uppercase">Midnight</span>
        </Link>
        <ul className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <li>
            <Link to="/menu" className="hover:text-gold transition-colors" activeProps={{ className: "text-gold" }}>
              Menu
            </Link>
          </li>
          <li><a href="/#collection" className="hover:text-gold transition-colors">Collection</a></li>
          <li><a href="/#story" className="hover:text-gold transition-colors">Story</a></li>
          <li><a href="/#ritual" className="hover:text-gold transition-colors">Ritual</a></li>
          <li><a href="/#visit" className="hover:text-gold transition-colors">Visit</a></li>
        </ul>
        <button className="text-xs uppercase tracking-[0.2em] border border-gold/40 text-gold px-5 py-2.5 hover:bg-gold hover:text-primary-foreground transition-all duration-500">
          Reserve
        </button>
      </nav>
    </header>
  );
}
