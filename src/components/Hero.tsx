import { Fragment } from "react";
import { BiLogoGithub, BiMailSend } from "react-icons/bi";

interface HeroProps {
  name: string;
  title: string;
  email: string;
  github: string;
}

export default function Hero({ name, title, email, github }: HeroProps) {
  return (
    <section className="h-screen flex flex-col gap-9 items-center justify-center pt-48 pb-24 px-[5%] text-center max-w-[1400px] mx-auto">
      <div className="w-48 h-48">
        <img
          src="ethan.webp"
          alt="Ethan Okamura"
          loading="lazy"
          decoding="async"
          className="rounded-[20px] ring-1 ring-base-300 shadow-xl hover:shadow-2xl shadow-black/50 hover:scale-[105%] ease-in duration-100"
        />
      </div>
      {/* Hero Title */}
      <div className="flex flex-wrap items-center gap-4 justify-center w-fit mx-auto">
        <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-[-0.05em] text-base-content">
          Hi, I'm
        </h1>
        <h1
          className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-[-0.05em] 
                      bg-linear-to-br from-base-content via-primary to-accent bg-size-[200%_200%]
                      bg-clip-text text-transparent animate-gradient-text"
        >
          {name.split("\n").map((line, i) => (
            <Fragment key={i}>
              {line}
              {i === 0 && <br />}
            </Fragment>
          ))}
        </h1>
      </div>

      {/* Subtitle */}
      <p
        className="text-[clamp(1.15rem,2.5vw,1.5rem)] text-base-content/70 leading-relaxed 
                    max-w-[700px] mx-auto opacity-0 animate-fade-in-up animation-delay-200"
      >
        {title.split("\n").map((line, i) => (
          <Fragment key={i}>
            {line}
            {i === 0 && <br />}
          </Fragment>
        ))}
      </p>

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
    </section>
  );
}
