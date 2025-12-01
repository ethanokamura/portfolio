import Header from "./components/Header";
import Hero from "./components/Hero";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import {
  personalInfo,
  experience,
  projects,
  skills,
  finalCta,
} from "./assets/data.json"; // education,
import ProjectSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Skills from "./components/Skills";
import { useState } from "react";
import type { Experience } from "./types/Experience";
import type { Project } from "./types/Project";

export default function App() {
  const [selectedExperience, setSelectedExperience] = useState(experience[0]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const handleSelectedExperience = (e: Experience) => {
    setSelectedExperience(e);
  };

  const handleSelectedProject = (e: Project) => {
    setSelectedProject(e);
  };

  return (
    <div className="relative overflow-x-hidden bg-base-100">
      <div className="hidden opacity-25 sm:block fixed inset-0 z-0 pointer-events-none animate-gradient-shift">
        <div
          className="absolute opacity-25 inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%)]
                    md:bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(112,212,224,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(216,150,255,0.1)_0%,transparent_50%)]"
        />
      </div>
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero {...personalInfo} />
        <div className="py-40" id="experience">
          {/* Experience */}
          <div className="border-b border-base-content/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-base-content mb-6">
              Industry Experience
            </h3>
            <div className="sm:flex sm:items-baseline">
              <div className="mt-4 sm:mt-0 sm:ml-10">
                <nav className="-mb-px flex space-x-8">
                  {experience.map((e) => (
                    <button
                      onClick={() => handleSelectedExperience(e)}
                      key={e.company}
                      // href={e.href}
                      aria-current={e === selectedExperience}
                      className={`${
                        e === selectedExperience
                          ? "border-primary text-primary"
                          : "border-transparent text-base-content/70 hover:border-base-content/20 hover:text-base-content"
                      } border-b-2 px-1 pb-4 text-lg font-medium whitespace-nowrap`}
                    >
                      {e.company}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <ExperienceSection
            key={selectedExperience.company}
            experience={selectedExperience}
          />
        </div>

        <div className="py-40" id="projects">
          {/* Projects */}
          <div className="border-b border-base-content/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-semibold text-base-content mb-6">
              Projects
            </h3>
            <div className="sm:flex sm:items-baseline">
              <div className="mt-4 sm:mt-0 sm:ml-10">
                <nav className="-mb-px flex space-x-8">
                  {projects.map((e) => (
                    <button
                      onClick={() => handleSelectedProject(e)}
                      key={e.name}
                      // href={e.href}
                      aria-current={e === selectedProject}
                      className={`${
                        e === selectedProject
                          ? "border-primary text-primary"
                          : "border-transparent text-base-content/70 hover:border-base-content/20 hover:text-base-content"
                      } border-b-2 px-1 pb-4 text-lg font-medium whitespace-nowrap`}
                    >
                      {e.name}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <ProjectSection
            key={selectedProject.name}
            project={selectedProject}
          />
        </div>
        {/* Technical Skills */}
        <div id="skills">
          <Skills
            languages={skills.languages}
            frameworks={skills.frameworks}
            developerTools={skills.developerTools}
          />
        </div>
        {/* Call To Action */}
        <FinalCTA {...finalCta} />
        <Footer />
      </div>
    </div>
  );
}
