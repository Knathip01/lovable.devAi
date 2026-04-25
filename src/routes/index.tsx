import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Collection } from "@/components/Collection";
import { Story } from "@/components/Story";
import { Ritual } from "@/components/Ritual";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Midnight Distillery — Rare Spirits, Bottled in Silence" },
      { name: "description", content: "A house of rare spirits hand-selected from the world's quietest cellars. Bottled for the few who pour with intention." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <Collection />
      <Story />
      <Ritual />
      <Visit />
      <Footer />
    </main>
  );
}
