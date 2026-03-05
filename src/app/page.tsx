import { Cursor } from "@/components/ui/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { Marquee } from "@/sections/Marquee";
import { Features } from "@/sections/Features";
import { Stats } from "@/sections/Stats";
import { Showcase } from "@/sections/Showcase";
import { Pricing } from "@/sections/Pricing";
import { CTA } from "@/sections/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Cursor />
      <Navbar />

      <Hero />
      <Marquee />
      <Features />
      <Stats />
      <Showcase />
      <Pricing />
      <CTA />

      <Footer />
    </main>
  );
}
