import {Fragment} from 'react';
import { BiLogoGithub, BiMailSend } from 'react-icons/bi';

interface HeroProps {
  name: string;
  title: string;
  email: string;
  github: string;
}

export default function Hero({ name, title, email, github }: HeroProps) {
  return (
    <section className="h-screen flex flex-col justify-center pt-48 pb-24 px-[5%] text-center max-w-[1400px] mx-auto">
      <div className="space-y-8">
        {/* Hero Title */}
        <div className='flex flex-wrap items-center gap-4 justify-center w-fit mx-auto'>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-[-0.05em] text-text">
            Hi, I'm
          </h1>
          <h1 className="text-[clamp(3.5rem,10vw,7.5rem)] font-bold leading-none tracking-[-0.05em] 
                      bg-linear-to-br from-text via-accent to-cyan bg-size-[200%_200%]
                      bg-clip-text text-transparent animate-gradient-text">
            {name.split('\n').map((line, i) => (
              <Fragment key={i}>
                {line}
                {i === 0 && <br />}
              </Fragment>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[clamp(1.15rem,2.5vw,1.5rem)] text-subtext leading-relaxed 
                    max-w-[700px] mx-auto opacity-0 animate-fade-in-up animation-delay-200">
          {title.split('\n').map((line, i) => (
            <Fragment key={i}>
              {line}
              {i === 0 && <br />}
            </Fragment>
          ))}
        </p>

        {/* CTA Form */}
        <div className='flex gap-4 justify-center'>
          <div
            className="text-center transition-all duration-400 relative overflow-hidden hover:-translate-y-2">
            <a href={`https://${github}`} target='_blank'>
              <BiLogoGithub size={64}/>
            </a>
          </div>  
          <div className="text-center transition-all duration-300 relative overflow-hidden hover:-translate-y-2">
            <a href={`mailto:${email}`}>
              <BiMailSend size={64}/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}