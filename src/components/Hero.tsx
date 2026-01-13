import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import data from "@/assets/data.json";

export function Hero() {
  return (
    <section className="min-h-dvh flex flex-col justify-center relative px-5 sm:px-6 md:px-12 lg:px-24 overflow-hidden safe-area-top">
      {/* Gradient blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="relative z-10 max-w-3xl">
        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 opacity-0 animate-fade-up stagger-2">
          <span className="text-foreground">Ethan</span>
          <br />
          <span className="text-primary">Okamura</span>
        </h1>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-md mb-8 sm:mb-10 opacity-0 animate-fade-up stagger-3">
          {data.about.intro}
          <span className="block mt-2 text-sm sm:text-base text-muted-foreground/70">
            Fullstack engineer specializing in mobile and web applications.
          </span>
        </p>

        {/* Social links */}
        <div className="flex items-center gap-3 sm:gap-4 opacity-0 animate-fade-up stagger-4">
          <a
            href="https://github.com/ethanokamura"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 active:scale-95 transition-all link-glow"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ethan-okamura/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 active:scale-95 transition-all link-glow"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${data.about.email}`}
            className="p-3 rounded-full bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 active:scale-95 transition-all link-glow"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <div className="hidden md:block h-px flex-1 max-w-24 bg-linear-to-r from-border to-transparent ml-2" />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#experience"
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 sm:gap-2 text-muted-foreground/50 hover:text-primary active:text-primary transition-colors opacity-0 animate-fade-up stagger-5 p-2"
        aria-label="Scroll to experience"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
