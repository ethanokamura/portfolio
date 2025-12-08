import {
  Cloud,
  Database,
  Code2,
  Package,
  Flame,
  Palette,
  Component,
  GitCompareArrows,
  Container,
  CloudCog,
  GitBranch,
  Server,
  Box,
  Layers,
  Gem,
  Boxes,
  Shield,
  HardDrive,
} from "lucide-react";

const iconMap: Record<string, any> = {
  flutter: Package,
  aws: Cloud,
  awssuite: Cloud,
  postgres: Database,
  postgresql: Database,
  cpp: Code2,
  python: Code2,
  typescript: Code2,
  unity: Box,
  nextjs: Layers,
  firebase: Flame,
  firebaseauth: Flame,
  tailwindcss: Palette,
  react: Component,
  git: GitCompareArrows,
  docker: Container,
  googlecloudplatform: CloudCog,
  githubactions: GitBranch,
  node: Server,
  tauri: Box,
  express: Server,
  gemini: Gem,
  deno: Boxes,
  hono: Server,
  auth0: Shield,
  neondb: HardDrive,
  bash: Code2,
  terraform: Layers,
};

interface SkillProps {
  title: string;
}

export const Skill = ({ title }: SkillProps) => {
  const lower = title.toLowerCase().replaceAll(" ", "");
  const skillName = lower === "c++" ? "cpp" : lower === "c#" ? "csharp" : lower;
  const Icon = iconMap[skillName];

  return (
    <div className="flex gap-2 justify-center items-center">
      {Icon && <Icon size={20} className="text-primary" />}
      <p className="text-sm sm:text-lg font-medium text-base-content/70">
        {title}
      </p>
    </div>
  );
};
