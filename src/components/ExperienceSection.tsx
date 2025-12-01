import { FaUsers } from "react-icons/fa";
import { Skill } from "./Skill";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Experience } from "../types/Experience";

interface ExperienceSectionProps {
  experience: Experience;
}

export default function ProjectSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="px-10 py-10 opacity-0 animate-fade-in-up w-full max-w-4xl mx-auto space-y-10">
      {/* Visual */}
      {experience.photoUrl ? (
        <img
          src={`/${experience.photoUrl}`}
          alt={experience.photoAlt}
          width={2432}
          height={1442}
          loading="lazy"
          decoding="async"
          className="rounded-xl border-2 border-base-100/50 shadow-xl"
        />
      ) : (
        <div className="aspect-video w-full bg-linear-to-br from-base-200 to-base-300 border border-base-300 rounded-xl flex justify-center items-center">
          <FaUsers size={64} />
        </div>
      )}
      {/* Label */}
      <span className="inline-block m-0 font-bold uppercase tracking-[0.15em] text-primary">
        {experience.name}
      </span>

      {/* Title */}
      <div className="flex items-center gap-4 my-3">
        <h2 className="text-4xl font-bold text-base-content">
          {experience.company}
        </h2>
        <a href={`https://${experience.url}`} target="_blank">
          <FaArrowUpRightFromSquare
            size={18}
            className="text-base-content/50"
          />
        </a>
      </div>

      {/* Description */}
      <p className="text-xl leading-[1.7] text-base-content mb-10">
        {experience.description}
      </p>

      {/* Responsibilities */}
      <ul className="space-y-5">
        {experience.highlights.map((item, index) => (
          <li
            key={index}
            className="flex items-start text-[1.05rem] text-base-content/70 transition-all duration-300
                         hover:text-base-content hover:translate-x-1.5"
          >
            <span className="text-primary text-4xl leading-[0.7] mr-3 drop-shadow-[0_0_8px_rgba(179,222,142,0.5)]">
              •
            </span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
      {/* Technologies */}
      <div className="flex flex-wrap justify-start gap-10">
        {experience.technologies.map((skill, index) => (
          <Skill key={index} title={skill} />
        ))}
      </div>
    </section>
  );
}
