import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <ProductShowcase />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
