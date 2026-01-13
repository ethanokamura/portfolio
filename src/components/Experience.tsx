import { Briefcase } from "lucide-react";
import data from "@/assets/data.json";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 md:px-12 lg:px-24 relative"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-10 sm:mb-12 md:mb-16">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {data.jobs.map((job) => (
              <div
                key={job.id}
                className="relative pl-6 sm:pl-8 md:pl-16 group"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1.5 sm:top-1 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

                {/* Content */}
                <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-5 md:p-8 card-hover">
                  <div className="flex flex-col gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.company}
                      </h3>
                      <span className="font-mono text-xs sm:text-sm text-muted-foreground shrink-0 order-first sm:order-last">
                        {job.period}
                      </span>
                    </div>
                    <p className="text-primary text-sm sm:text-base font-medium">{job.role}</p>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4">{job.description}</p>

                  {job.highlights && job.highlights.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {job.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5 sm:mt-1 shrink-0">→</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono bg-muted/50 text-muted-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
