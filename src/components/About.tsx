import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Calendar, Clock } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-5 md:px-12 lg:px-20 relative"
    >
      {/* Grid background - desktop only */}
      <div className="absolute inset-0 grid-bg opacity-10 hide-mobile" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs md:text-sm text-primary tracking-wider">
              03
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About Me
          </h2>
        </div>

        {/* Photo and info */}
        <div className="flex flex-col sm:flex-row gap-5 mb-10">
          {/* Image */}
          <div className="relative shrink-0 w-24 h-24 md:w-32 md:h-32">
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-primary hide-mobile" />
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-primary hide-mobile" />
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-primary hide-mobile" />
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-primary hide-mobile" />
            <img
              src="/ethan.webp"
              alt="Ethan Okamura"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info tags */}
          <div className="flex flex-col justify-center gap-2 items-start">
            <div className="flex items-center gap-2 px-2.5 py-1.5 border border-border bg-card/50">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                Santa Cruz, CA
              </span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 border border-border bg-card/50">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                UC Santa Cruz
              </span>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 border border-border bg-card/50">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="font-mono text-xs text-muted-foreground">
                Contact for availability
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 mb-10">
          <div className="pl-4 border-l-2 border-border">
            <p className="text-sm md:text-base text-muted-foreground">
              I've been programming since I was 9 — started with game
              development, fell in love with building things, and never stopped.
              These days I focus on shipping products that actually matter.
            </p>
          </div>
          <div className="pl-4 border-l-2 border-border">
            <p className="text-sm md:text-base text-muted-foreground">
              Currently studying at{" "}
              <span className="text-primary font-medium">UC Santa Cruz</span>,
              where I balance academics with real-world product development.
              I've founded companies, joined early-stage startups, and taken on
              contract work — all before graduating.
            </p>
          </div>
          <div className="pl-4 border-l-2 border-border">
            <p className="text-sm md:text-base text-muted-foreground">
              My design philosophy:{" "}
              <span className="text-primary font-medium">
                simple over clever
              </span>
              . Ship fast, iterate based on real feedback, and never build
              features nobody asked for.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { label: "Years Coding", value: "15+" },
            { label: "Products Shipped", value: "7" },
            { label: "Startups Joined", value: "3" },
            { label: "Happy Clients", value: "20+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-3 md:p-4 border border-border bg-card/50 text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-0.5">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border border-border p-5 md:p-6 bg-card/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-1">
                Interested in working together?
              </h3>
              <p className="text-muted-foreground font-mono text-xs md:text-sm">
                Reach out to check my availability.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                asChild
                size="sm"
                className="font-mono text-xs md:text-sm"
              >
                <a href="mailto:ethanokamura3@gmail.com">
                  <Mail className="w-4 h-4 mr-1.5" />
                  Get in touch
                </a>
              </Button>
              <a
                href="https://github.com/ethanokamura"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-muted-foreground" />
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-okamura/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
