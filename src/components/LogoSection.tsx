import LogoLoop from './LogoLoop';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiDocker,
  SiAmazon,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiJavascript,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiGithub,
  SiGitlab,
  SiKubernetes,
  SiTerraform
} from 'react-icons/si';

const techLogos = [
  { 
    node: <SiReact className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "React", 
    href: "https://react.dev" 
  },
  { 
    node: <SiNextdotjs className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Next.js", 
    href: "https://nextjs.org" 
  },
  { 
    node: <SiTypescript className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "TypeScript", 
    href: "https://www.typescriptlang.org" 
  },
  { 
    node: <SiJavascript className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "JavaScript", 
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
  },
  { 
    node: <SiTailwindcss className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Tailwind CSS", 
    href: "https://tailwindcss.com" 
  },
  { 
    node: <SiPython className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Python", 
    href: "https://www.python.org" 
  },
  { 
    node: <SiDjango className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Django", 
    href: "https://www.djangoproject.com" 
  },
  { 
    node: <SiFlask className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Flask", 
    href: "https://flask.palletsprojects.com" 
  },
  { 
    node: <SiFastapi className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "FastAPI", 
    href: "https://fastapi.tiangolo.com" 
  },
  { 
    node: <SiNodedotjs className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Node.js", 
    href: "https://nodejs.org" 
  },
  { 
    node: <SiExpress className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Express", 
    href: "https://expressjs.com" 
  },
  { 
    node: <SiVuedotjs className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Vue.js", 
    href: "https://vuejs.org" 
  },
  { 
    node: <SiAngular className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Angular", 
    href: "https://angular.io" 
  },
  { 
    node: <SiPostgresql className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "PostgreSQL", 
    href: "https://www.postgresql.org" 
  },
  { 
    node: <SiMongodb className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "MongoDB", 
    href: "https://www.mongodb.com" 
  },
  { 
    node: <SiRedis className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Redis", 
    href: "https://redis.io" 
  },
  { 
    node: <SiGraphql className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "GraphQL", 
    href: "https://graphql.org" 
  },
  { 
    node: <SiDocker className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Docker", 
    href: "https://www.docker.com" 
  },
  { 
    node: <SiKubernetes className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Kubernetes", 
    href: "https://kubernetes.io" 
  },
  { 
    node: <SiAmazon className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "AWS", 
    href: "https://aws.amazon.com" 
  },
  { 
    node: <SiTerraform className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Terraform", 
    href: "https://www.terraform.io" 
  },
  { 
    node: <SiGit className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "Git", 
    href: "https://git-scm.com" 
  },
  { 
    node: <SiGithub className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "GitHub", 
    href: "https://github.com" 
  },
  { 
    node: <SiGitlab className="text-white opacity-80 hover:opacity-100 transition-opacity" style={{ fontSize: '48px' }} />, 
    title: "GitLab", 
    href: "https://gitlab.com" 
  },
];

function LogoSection() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }} className="w-full flex items-center">
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default LogoSection;

