import { Skill } from "./Skill";

interface SkillsProps {
  languages: string[];
  frameworks: string[];
  developerTools: string[];
}

export default function Skills({
  languages,
  frameworks,
  developerTools,
}: SkillsProps) {
  return (
    <section className="py-40 px-[5%] text-center opacity-0 animate-fade-in-scroll">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <span className="inline-block mb-8 font-bold uppercase tracking-[0.15em] text-accent">
          Skills I've Learned
        </span>

        {/* Title */}
        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] 
                     tracking-[-0.04em] mb-8 bg-linear-to-br from-text to-accent 
                     bg-clip-text text-transparent"
        >
          Building Real Applications
        </h2>

        {/* Use Cases Grid */}
        <div className="mb-10 max-w-3xl mx-auto">
          <h3 className="text-2xl leading-[1.7] text-subtext mb-4">
            Languages:
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {languages.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </div>
        <div className="mb-10 max-w-3xl mx-auto">
          <h3 className="text-2xl leading-[1.7] text-subtext mb-4">
            Frameworks:
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {frameworks.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </div>
        <div className="mb-10 max-w-3xl mx-auto">
          <h3 className="text-2xl leading-[1.7] text-subtext mb-4">
            Developer Tools:
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {developerTools.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
