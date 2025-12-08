import { experience } from "./assets/data.json";
import { useState } from "react";
import { Skill } from "./components/Skill";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdArrowBackIos } from "react-icons/md";

interface Experience {
  name: string;
  key: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  photoUrl: string;
  alt: string;
  highlights: string[];
  technologies: string[];
}

export default function App() {
  const [selectedExperience, setSelectedExperience] = useState<
    Experience | undefined
  >(undefined);

  const handleSelectedExperience = (e: Experience | undefined) => {
    setSelectedExperience(e);
  };

  if (selectedExperience) {
    return (
      <main className="px-10 py-10 animate-fade-in-up w-full max-w-4xl mx-auto space-y-10">
        <button
          className="inline-flex items-center gap-2 text-base-content/50 underline mb-10"
          onClick={() => handleSelectedExperience(undefined)}
        >
          <MdArrowBackIos />
          Go Back
        </button>

        {selectedExperience.photoUrl && (
          <img
            src={`/${selectedExperience.photoUrl}`}
            alt={selectedExperience.alt}
            width={1216}
            height={721}
            loading="lazy"
            decoding="async"
            className="rounded-xl shadow-xl shadow-base-content/10"
          />
        )}
        {/* Title */}
        <div className="flex items-start gap-4 my-3">
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold w-fit">
            {selectedExperience.name}
          </h2>
          <a href={`https://${selectedExperience.url}`} target="_blank">
            <FaArrowUpRightFromSquare
              size={18}
              className="text-base-content/50 mt-2"
            />
          </a>
        </div>
        {/* Description */}
        <p className="text-lg lg:text-xl leading-[1.7] text-base-content mb-10">
          {selectedExperience.description}
        </p>
        {/* Responsibilities */}
        <ul className="space-y-5">
          {selectedExperience.highlights.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-base lg:text-lg text-base-content/70 transition-all duration-300
                         hover:text-base-content hover:translate-x-1.5"
            >
              <span className="text-primary text-4xl leading-[0.7] mr-3 drop-shadow-[0_0_8px_rgba(179,222,142,0.5)]">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {/* Technologies */}
        <div className="flex flex-wrap justify-start gap-10">
          {selectedExperience.technologies.map((skill, index) => (
            <Skill key={index} title={skill} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <div>
      <main className="px-10 py-20 animate-fade-in-up w-full relative h-screen max-w-4xl mx-auto space-y-20 sm:space-y-20">
        <div className="relative ">
          <h1 className="text-4xl md:text-6xl lg:text-9xl transition-all ease-linear duration-300">
            ETHAN
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-9xl transition-all ease-linear duration-300">
            OKAMURA
          </h1>
          <h2 className="text-lg md:text-2xl lg:text-4xl font-bold transition-all ease-linear duration-300">
            I build software to make my life easier.
          </h2>
        </div>
        <div className="flex flex-col items-start w-full text-zalando text-xl md:text-3xl lg:text-4xl font-light space-y-4 transition-all ease-linear duration-300">
          {experience.map((e) => (
            <button
              onClick={() => handleSelectedExperience(e)}
              key={e.key}
              // href={e.href}
              aria-current={e === selectedExperience}
              className={
                e === selectedExperience
                  ? "text-base-content"
                  : "hover:text-base-content/70 text-base-content/50"
              }
            >
              {e.key}
            </button>
          ))}
        </div>
        <footer className="w-full flex text-xs sm:text-sm absolute bottom-0 left-0 pb-10 sm:px-0 px-10 justify-start sm:justify-end gap-2 sm:gap-10 text-base-content/70">
          <a href="https://www.linkedin.com/in/ethan-okamura/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/ethanokamura" target="_blank">
            GitHub
          </a>
          <a href="mailto:ethanokamura3@gmail.com" target="_blank">
            Email
          </a>
        </footer>
      </main>
    </div>
  );
}
