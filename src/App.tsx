import Header from './components/Header';
import Hero from './components/Hero';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { personalInfo,  experience, projects, skills, finalCta } from './assets/data.json'; // education,
import ProjectSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import Skills from './components/Skills';

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-background">
      {/* Animated background gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none animate-gradient-shift">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%)] 
                      md:bg-[radial-gradient(ellipse_at_50%_0%,rgba(136,117,224,0.15)_0%,transparent_50%),radial-gradient(ellipse_at_80%_50%,rgba(112,212,224,0.1)_0%,transparent_50%),radial-gradient(ellipse_at_20%_80%,rgba(216,150,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(125,196,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(125,196,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero {...personalInfo} />
        {/* Experience */}
        {experience.map((item, index) => (
          <ExperienceSection
            key={item.company}
            experience={item}
            reverse={index % 2 === 0}
          />
        ))}
        {/* Projects */}
        {projects.map((project, index) => (
          <ProjectSection
            key={project.name}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
        {/* Technical Skills */}
        <Skills
          languages={skills.languages}
          frameworks={skills.frameworks}
          developerTools={skills.developerTools}
        />
        {/* Education */}
        {/* Call To Action */}
        <FinalCTA {...finalCta} />
        <Footer />
      </div>
    </div>
  );
}
