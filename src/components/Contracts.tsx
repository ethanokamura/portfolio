import { Users, ExternalLink } from "lucide-react";
import data from "@/assets/data.json";

export function Contracts() {
  return (
    <section className="py-16 sm:py-20 md:py-32 px-5 sm:px-6 md:px-12 lg:px-24 relative">
      {/* Subtle blob */}
      <div className="blob blob-3 opacity-10" />
      
      <div className="max-w-4xl mx-auto relative">
        {/* Section header */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Contract Work</h2>
        </div>
        
        <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-xl">
          Web development projects built for clients, from local businesses to educational platforms.
        </p>

        {/* Contracts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {data.contracts.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Contract {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

function ContractCard({ contract }: { contract: Contract }) {
  const Wrapper = contract.link ? "a" : "div";
  const wrapperProps = contract.link
    ? {
        href: contract.link,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group bg-card/30 backdrop-blur-sm border border-border/50 rounded-xl overflow-hidden card-hover flex flex-col"
    >
      {/* Image placeholder */}
      {contract.image ? (
        <div className="aspect-video bg-muted/30 overflow-hidden">
          <img
            src={`/${contract.image}`}
            alt={contract.name}
            loading="lazy"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      ) : (
        <div className="aspect-video bg-linear-to-br from-muted/50 to-muted/20 flex items-center justify-center">
          <span className="font-mono text-[10px] sm:text-xs text-muted-foreground/50">
            Coming soon
          </span>
        </div>
      )}

      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base sm:text-lg font-bold group-hover:text-primary transition-colors">
            {contract.name}
          </h3>
          {contract.link && (
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-50 sm:opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
          )}
        </div>
        
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 flex-1">
          {contract.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {contract.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono text-muted-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
