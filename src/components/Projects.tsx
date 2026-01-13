import { Rocket, ExternalLink } from "lucide-react";
import data from "@/assets/data.json";

export function Projects() {
  const featuredProjects = data.projects.filter((p) => p.featured);
  const otherProjects = data.projects.filter((p) => !p.featured);

  return (
    <section className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Projects</h2>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-xl">
          Personal projects and side ventures I've built to solve problems or explore new technologies.
        </p>

        {/* Featured projects - larger cards */}
        <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects - smaller grid */}
        {otherProjects.length > 0 && (
          <>
            <div className="section-divider mb-8 sm:mb-10 md:mb-12" />
            <h3 className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-4 sm:mb-6">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {/* Skills */}
        <div className="mt-12 sm:mt-14 md:mt-16 pt-10 sm:pt-12 md:pt-16 border-t border-border/50">
          <h3 className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider mb-4 sm:mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-muted/30 border border-border/50 font-mono text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 active:bg-primary/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
  featured?: boolean;
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden card-hover"
    >
      {/* Mobile: Stack vertically */}
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        {project.image ? (
          <div className="md:w-2/5 aspect-[16/10] md:aspect-auto overflow-hidden">
            <img
              src={`/${project.image}`}
              alt={project.name}
              loading="lazy"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ) : (
          <div className="md:w-2/5 aspect-[16/10] md:aspect-auto bg-linear-to-br from-muted/50 to-muted/20 flex items-center justify-center min-h-[160px] md:min-h-[200px]">
            <span className="font-mono text-xs text-muted-foreground/50">
              Preview
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-4 sm:p-5 md:p-8 flex flex-col justify-center">
          <div className="flex items-start justify-between gap-3 sm:gap-4 mb-2 sm:mb-3">
            <h3 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground opacity-50 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          </div>

          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 line-clamp-3 md:line-clamp-none">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono bg-muted/50 text-muted-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono text-muted-foreground">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Wrapper = project.link ? "a" : "div";
  const wrapperProps = project.link
    ? {
        href: project.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl p-4 sm:p-5 card-hover flex flex-col"
    >
      <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
        <h4 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
          {project.name}
        </h4>
        {project.link && (
          <ExternalLink className="w-4 h-4 text-muted-foreground opacity-50 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        )}
      </div>

      <p className="text-xs sm:text-sm text-muted-foreground flex-1 mb-3 sm:mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[10px] font-mono text-muted-foreground/70"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="text-[10px] font-mono text-muted-foreground/70">
            +{project.technologies.length - 3}
          </span>
        )}
      </div>
    </Wrapper>
  );
}
