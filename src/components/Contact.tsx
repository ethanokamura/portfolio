import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import data from "@/assets/data.json";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 md:px-12 lg:px-24 relative"
    >
      {/* Subtle blob */}
      <div className="blob blob-2 opacity-10" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get in Touch
          </h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-xl">
          Interested in working together? I'm open to contract work, consulting,
          and interesting projects. Let's build something great.
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Email CTA */}
            <a
              href={`mailto:${data.about.email}`}
              className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl card-hover"
            >
              <div className="p-2.5 sm:p-3 rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors shrink-0">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">
                  Email me
                </p>
                <p className="text-sm sm:text-base text-foreground font-medium group-hover:text-primary transition-colors truncate">
                  {data.about.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl">
              <div className="p-2.5 sm:p-3 rounded-full bg-muted/50 border border-border/50 shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              </div>
              <div>
                <p className="font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">
                  Location
                </p>
                <p className="text-sm sm:text-base text-foreground">
                  {data.about.location}
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/ethanokamura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/5 active:bg-primary/10 transition-all"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-mono text-xs sm:text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-okamura/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/5 active:bg-primary/10 transition-all"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-mono text-xs sm:text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick info card */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-5 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Quick Info
            </h3>

            <div className="space-y-0">
              <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground">
                  Availability
                </span>
                <span className="font-mono text-xs sm:text-sm text-primary">
                  Limited
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground">Education</span>
                <span className="font-mono text-xs sm:text-sm">
                  {data.about.education}
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-border/30">
                <span className="text-sm text-muted-foreground">Focus</span>
                <span className="font-mono text-xs sm:text-sm">
                  Fullstack / Mobile
                </span>
              </div>
              <div className="flex justify-between items-center py-2.5 sm:py-3">
                <span className="text-sm text-muted-foreground">
                  Response time
                </span>
                <span className="font-mono text-xs sm:text-sm">~24 hours</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="text-primary font-medium">Looking for:</span>{" "}
                Contract work, consulting, and interesting projects in web and
                mobile development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
