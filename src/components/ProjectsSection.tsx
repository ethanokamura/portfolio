import { Fragment } from 'react';
import { Skill } from './Skill';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface Project {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  technologies: string[];
  url: string;
  alt: string;
  photoUrl: string;
  photoAlt: string;
};

interface ProjectSectionProps {
  project: Project;
  reverse: boolean;
}

export default function ProjectSection({ project, reverse }: ProjectSectionProps) {
  return (
    <section className="py-20 sm:py-40 px-[5%] opacity-0 animate-fade-in-scroll">
      <div className={`max-w-[1200px] mx-auto flex flex-col-reverse gap-20 items-center ${
        reverse ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}>
        {/* Text Content */}
        <div className="w-full">
          {/* Label */}
          <span className="inline-block mb-8 font-bold uppercase tracking-[0.15em] text-accent">
            Project
          </span>

          {/* Title */}
          <div className='flex items-center gap-4'>
            <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold
                        tracking-[-0.04em] bg-linear-to-br from-text to-accent 
                        bg-clip-text text-transparent">
              {project.name.split('\n').map((line, i) => (
                <Fragment key={i}>
                  {line}
                  {i === 0 && <br />}
                </Fragment>
              ))}
            </h2>
            <a href={`https://${project.url}`} target='_blank'>
              <FaArrowUpRightFromSquare size={24} className='text-accent'/>
            </a>
          </div>

          {/* Description */}
          <p className="text-xl leading-[1.7] text-subtext mb-10">
            {project.description}
          </p>

          {/* Responsibilities */}
          <ul className="space-y-5">
            {project.highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-[1.05rem] text-subtext transition-all duration-300
                         hover:text-text hover:translate-x-1.5"
              >
                <span className="text-accent text-4xl leading-[0.7] mr-3 drop-shadow-[0_0_8px_rgba(179,222,142,0.5)]">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <br/>
          {/* Technologies */}
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((skill, index) => (
              <Skill key={index} title={skill} />
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="max-w-72 md:max-w-full mx-auto md:mx-0">
          <img src={`/${project.photoUrl}`} alt={project.photoAlt} className='rounded-[20px] ring-1 ring-background/50 shadow-xl hover:shadow-2xl shadow-black/50 hover:scale-[105%] ease-in duration-100'/>
        </div>
      </div>
    </section>
  );
}