import type { IconType } from 'react-icons';
import { Card } from "./Card";
import { FaLinux, FaHtml5, FaCss3 } from 'react-icons/fa';
import { FaC, FaCloudflare, FaDartLang } from 'react-icons/fa6';
import { BiLogoAws, BiLogoCPlusPlus, BiLogoDocker, BiLogoFirebase, BiLogoFlutter, BiLogoGithub, BiLogoGoogleCloud, BiLogoJavascript, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript, BiLogoUnity } from 'react-icons/bi';
import { SiAstro, SiClaude, SiRoblox } from 'react-icons/si';
import { TbBrandNextjs, TbBrandSupabase } from 'react-icons/tb';
import { PiFileCSharp } from 'react-icons/pi';
import { BsGithub } from 'react-icons/bs';

const iconMap: Record<string, IconType> = {
  flutter: BiLogoFlutter,
  aws: BiLogoAws,
  awssuite: BiLogoAws,
  postgres: BiLogoPostgresql,
  postgresql: BiLogoPostgresql,
  dart: FaDartLang,
  cpp: BiLogoCPlusPlus,
  c: FaC,
  typescript: BiLogoTypescript,
  javascript: BiLogoJavascript,
  csharp: PiFileCSharp,
  python: BiLogoPython,
  unity: BiLogoUnity,
  astro: SiAstro,
  nextjs: TbBrandNextjs,
  supabase: TbBrandSupabase,
  firebase: BiLogoFirebase,
  firebaseauth: BiLogoFirebase,
  tailwindcss: BiLogoTailwindCss,
  react: BiLogoReact,
  git: BiLogoGithub,
  docker: BiLogoDocker,
  googlecloudplatform: BiLogoGoogleCloud,
  linux: FaLinux,
  cloudflare: FaCloudflare,
  html: FaHtml5,
  css: FaCss3,
  lua: SiRoblox,
  claude: SiClaude,
  githubactions: BsGithub,
};

interface SkillProps {
  title: string;
}

export const Skill = ({title}: SkillProps) => {
  const lower = title.toLowerCase().replaceAll(' ', '');
  const skillName = lower == 'c++' ? 'cpp' : lower == 'c#' ? 'csharp' : lower;
  const Icon = iconMap[skillName];
  return (
    <Card>
      <div className="flex gap-2 justify-center items-center">
        {/* Icon */}
        {Icon && <Icon size={32} className="text-accent" />}
        {/* Title */}
        <p className='text-xl font-medium'>{title}</p>
      </div>
    </Card>
  );
}