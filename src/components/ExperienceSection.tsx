import { Fragment } from "react";
import { Skill } from "./Skill";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";

interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
  url: string;
  alt: string;
  photoUrl: string;
  photoAlt: string;
}

interface ExperienceSectionProps {
  experience: Experience;
  reverse: boolean;
}

export default function ExperienceSection({
  experience,
  reverse,
}: ExperienceSectionProps) {
  return (
    <section className="py-20 sm:py-40 px-[5%] opacity-0 animate-fade-in-scroll">
      <div
        className={`max-w-7xl mx-auto flex flex-col-reverse gap-20 items-center ${
          reverse ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Text Content */}
        <div className="w-full">
          {/* Label */}
          <span className="inline-block mb-8 font-bold uppercase tracking-[0.15em] text-accent">
            {experience.company}
          </span>

          {/* Title */}
          <div className="flex items-start gap-4 py-4">
            <h2
              className="text-6xl py-2 font-bold bg-linear-to-br from-text to-accent 
                        bg-clip-text text-transparent"
            >
              {experience.title.split("\n").map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </Fragment>
              ))}
            </h2>
            <a href={experience.url} target="_blank">
              <FaArrowUpRightFromSquare
                size={24}
                className="text-accent mt-6"
              />
            </a>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-5">
            {experience.responsibilities.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-[1.05rem] text-subtext transition-all duration-300
                         hover:text-text hover:translate-x-1.5"
              >
                <span className="text-accent leading-[0.7] text-4xl mr-3 drop-shadow-[0_0_8px_rgba(179,222,142,0.5)]">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <br />
          {/* Technologies */}
          <div className="flex flex-wrap gap-5">
            {experience.technologies.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </div>

        {/* Visual */}
        {experience.photoUrl == "" ? (
          <div
            className="mx-auto md:mx-0 w-72 md:w-[960px] h-72 md:h-full aspect-square bg-linear-to-br from-purple to-cyan bg-size-[200%_200%]
                        animate-gradient-shift rounded-[20px] border border-borderColor
                        shadow-[0_30px_80px_rgba(0,0,0,0.5),0_0_60px_rgba(125,196,255,0.15)]
                        flex items-center justify-center relative overflow-hidden
                        transition-all duration-400 hover:-translate-y-2 hover:scale-[1.02]
                        hover:shadow-[0_40px_100px_rgba(0,0,0,0.6),0_0_100px_rgba(125,196,255,0.25)]"
          >
            {/* Radial overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,rgba(0,0,0,0.3)_100%)]" />
            <span
              className="text-2xl text-text font-semibold relative z-10 
                          drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]"
            >
              <FaUserFriends size={96} />
            </span>
          </div>
        ) : (
          <div className="max-w-72 md:max-w-full mx-auto md:mx-0">
            <img
              src={`/${experience.photoUrl}`}
              alt={experience.photoAlt}
              width={960}
              height={960}
              loading="lazy"
              decoding="async"
              className="rounded-[20px] ring-1 ring-background/50 shadow-xl hover:shadow-2xl shadow-black/50 hover:scale-[105%] ease-in duration-100"
            />
          </div>
        )}
      </div>
    </section>
  );
}
