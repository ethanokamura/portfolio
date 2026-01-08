import { caseStudies } from "@/assets/case-studies.json";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  period: string;
  context: string;
  built: string;
  decisions: string;
  outcome: string;
  image: string;
  technologies: string[];
  link: string;
}

export function CaseStudies() {
  return (
    <section
      id="work"
      className="py-16 md:py-24 px-5 md:px-12 lg:px-20 relative"
    >
      {/* Grid background - desktop only */}
      <div className="absolute inset-0 grid-bg-sparse opacity-20 hide-mobile" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs md:text-sm text-primary tracking-wider">
              01
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-mono">
            Products I've built from the ground up.
          </p>
        </div>

        {/* Case studies - divided content on mobile, cards on desktop */}
        <div className="space-y-0 md:space-y-8">
          {(caseStudies as CaseStudy[]).map((study) => (
            <CaseStudyItem key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyItem({ study }: { study: CaseStudy }) {
  return (
    <>
      {/* Mobile: Simple divided content */}
      <div className="md:hidden py-8 border-b border-border">
        <a
          href={study.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">
                {study.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                {study.role} · {study.period}
              </p>
            </div>
            <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
          </div>

          {/* Context */}
          <p className="text-sm text-muted-foreground mb-4">{study.context}</p>

          {/* Outcome */}
          <div className="border-l-2 border-primary pl-3 mb-4">
            <p className="text-sm text-foreground">{study.outcome}</p>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {study.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {study.technologies.length > 5 && (
              <span className="font-mono text-xs text-muted-foreground">
                +{study.technologies.length - 5}
              </span>
            )}
          </div>
        </a>
      </div>

      {/* Desktop: Card with image */}
      <a
        href={study.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block group bg-card border border-border hover:border-primary transition-colors"
      >
        {/* Image */}
        {study.image && (
          <div className="relative w-full aspect-video overflow-hidden">
            <img
              src={`/${study.image}`}
              alt={`${study.title} screenshot`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-card to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors mb-1">
                {study.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                {study.role} · {study.period}
              </p>
            </div>
            <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </div>

          {/* Details */}
          <div className="space-y-3 mb-6">
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                Context
              </span>
              <p className="text-muted-foreground text-sm mt-1">
                {study.context}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                What I Built
              </span>
              <p className="text-muted-foreground text-sm mt-1">
                {study.built}
              </p>
            </div>
            <div>
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                Key Decisions
              </span>
              <p className="text-muted-foreground text-sm mt-1">
                {study.decisions}
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4 py-2 bg-primary/5">
              <span className="font-mono text-xs text-primary uppercase tracking-wider">
                Outcome
              </span>
              <p className="text-foreground text-sm mt-1 font-medium">
                {study.outcome}
              </p>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-mono rounded-none border-border"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}
