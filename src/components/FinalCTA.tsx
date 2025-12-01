import { BiLogoGithub, BiMailSend } from "react-icons/bi";

interface CallToAction {
  title: string;
  subtitle: string;
  email: string;
  github: string;
}

export default function FinalCTA({
  title,
  subtitle,
  email,
  github,
}: CallToAction) {
  return (
    <section
      className="py-48 px-[5%] text-center bg-base-200 border-y border-base-300 
                      relative opacity-0 animate-fade-in-scroll"
      id="signup"
    >
      {/* Radial gradient background */}
      <div
        className="absolute -top-[300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px]
                    bg-[radial-gradient(circle,rgba(112,212,224,0.15)_0%,transparent_70%)]
                    pointer-events-none"
      />

      <div className="max-w-[700px] mx-auto relative z-10">
        {/* Title */}
        <h2
          className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.2] 
                     tracking-[-0.04em] mb-6 bg-linear-to-br from-base-content via-primary to-cyan 
                     bg-size-[200%_200%] bg-clip-text text-transparent animate-gradient-text"
        >
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-[1.35rem] text-base-content/70 mb-14">{subtitle}</p>

        {/* CTA Form */}
        <div className="flex gap-4 justify-center">
          <div className="text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-2">
            <a href={`https://${github}`} target="_blank">
              <BiLogoGithub size={64} />
            </a>
          </div>
          <div className="text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2">
            <a href={`mailto:${email}`}>
              <BiMailSend size={64} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
