import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen w-full items-center justify-center bg-background text-center">
      <div className="absolute inset-0 bg-white/[0.02] [mask-image:linear-gradient(to_bottom,white_5%,transparent_95%)]"></div>
      <div className="relative z-10 px-4 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Subharthi Dutta
        </h1>
        <p className="mt-4 max-w-[700px] mx-auto text-lg text-foreground/80 md:text-xl">
          A passionate software developer crafting clean, responsive, and visually engaging digital experiences.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="bg-amber-500 hover:bg-amber-600 text-primary-foreground">
            <a href="#projects">View My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <a href="#about" className="absolute bottom-10 animate-bounce" aria-label="Scroll to about section">
        <ArrowDown className="h-6 w-6 text-foreground/60" />
      </a>
    </section>
  );
};