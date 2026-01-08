import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-5 md:px-12 lg:px-20">
      {/* Grid background - desktop only */}
      <div className="absolute inset-0 grid-bg opacity-40 hide-mobile" />

      {/* Corner decorations - desktop only */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 hide-mobile" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30 hide-mobile" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30 hide-mobile" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 hide-mobile" />

      <div className="relative z-10 max-w-4xl">
        {/* Status */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="w-2 h-2 bg-muted-foreground/50" />
          <span className="font-mono text-xs md:text-sm text-muted-foreground tracking-wider uppercase">
            Building at Influur
          </span>
        </div>

        {/* Name */}
        <div className="relative mb-4 md:mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Ethan</span>
            <br />
            <span className="text-primary">Okamura</span>
          </h1>
          <div className="absolute -left-3 md:-left-4 top-1/2 -translate-y-1/2 w-1 h-16 md:h-20 bg-primary hide-mobile" />
        </div>

        {/* Description */}
        <p className="text-base md:text-xl text-muted-foreground max-w-lg mb-8 md:mb-10">
          Building products from zero to one.
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ethanokamura"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 border border-border hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-okamura/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 md:p-3 border border-border hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href="mailto:ethanokamura3@gmail.com"
            className="p-2.5 md:p-3 border border-border hover:border-primary hover:bg-primary/10 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
          </a>
          <div className="h-px flex-1 max-w-16 bg-border ml-2 hide-mobile" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
        <a
          href="#work"
          className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors"
          aria-label="Scroll to work"
        >
          <span className="font-mono text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
