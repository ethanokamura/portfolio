import { projects, skills } from "@/assets/projects.json";
import { ExternalLink, Folder } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  image?: string;
}

export function ProjectGrid() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-12 lg:px-20 relative">
      {/* Dot background - desktop only */}
      <div className="absolute inset-0 dot-bg opacity-30 hide-mobile" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs md:text-sm text-primary tracking-wider">
              02
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            More Projects
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-mono">
            Other things I've built or am currently working on.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 md:mb-16">
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Skills section */}
        <div className="border-t border-border pt-8 md:pt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 border border-primary rotate-45" />
            <h3 className="font-mono text-sm md:text-base text-muted-foreground uppercase tracking-wider">
              Stack
            </h3>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 border border-border bg-card/50 font-mono text-xs md:text-sm text-muted-foreground"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const CardWrapper = project.link ? "a" : "div";
  const cardProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group bg-card border border-border hover:border-primary transition-colors p-5 md:p-6 flex flex-col"
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-3">
        <Folder className="w-6 h-6 md:w-7 md:h-7 text-primary/60 group-hover:text-primary transition-colors" />
        {project.link && (
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
        )}
      </div>

      {/* Content */}
      <h3 className="text-base md:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm flex-1 mb-3">
        {project.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        {project.technologies.slice(0, 3).map((tech, index) => (
          <span key={tech} className="font-mono text-xs text-muted-foreground">
            {tech}
            {index < project.technologies.length - 1 && ","}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="font-mono text-xs text-muted-foreground">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
