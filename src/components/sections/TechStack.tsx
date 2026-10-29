'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { gsap, useGSAP } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiPython,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiGithub,
  SiAmazonwebservices,
  SiCodemagic,
  SiSentry,
  SiPostman,
  SiVercel,
} from 'react-icons/si';
import {
  Network,
  KeyRound,
  Workflow,
  Database,
  AudioLines,
  PhoneCall,
  BrainCircuit,
  Cpu,
  AudioWaveform,
  Bot,
  Layers,
} from 'lucide-react';

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
  icon?: string;
  level?: string;
  description?: string;
}

export interface StackCategory {
  id: string;
  title: string;
  label?: string;
  description?: string;
  technologies: TechItem[];
}

export const STACK_SECTIONS: StackCategory[] = [
  {
    id: 'frontend',
    title: 'FRONTEND & MOBILE',
    technologies: [
      { name: 'TypeScript', category: 'frontend', icon: '/Services/typescript.svg' },
      { name: 'JavaScript', category: 'frontend', icon: '/Services/js.png' },
      { name: 'React', category: 'frontend', icon: '/Services/react.png' },
      { name: 'Next.js', category: 'frontend', icon: '/Services/next.webp' },
      { name: 'Redux', category: 'frontend', icon: '/Services/reduxtoolkit.svg' },
      { name: 'Tailwind CSS', category: 'frontend', icon: '/Services/tailwind.png' },
      { name: 'Flutter', category: 'frontend' },
      { name: 'Dart', category: 'frontend' },
    ],
  },
  {
    id: 'backend',
    title: 'BACKEND & REAL-TIME',
    technologies: [
      { name: 'Python', category: 'backend' },
      { name: 'Node.js', category: 'backend', icon: '/Services/node.png' },
      { name: 'Express', category: 'backend', icon: '/Services/express.png' },
      { name: 'FastAPI', category: 'backend' },
      { name: 'Flask', category: 'backend' },
      { name: 'WebSockets', category: 'backend' },
      { name: 'OAuth', category: 'backend' },
      { name: 'BullMQ', category: 'backend' },
    ],
  },
  {
    id: 'database',
    title: 'DATABASES & SEARCH',
    technologies: [
      { name: 'PostgreSQL', category: 'database' },
      { name: 'MongoDB', category: 'database', icon: '/Services/mongodb.svg' },
      { name: 'MySQL', category: 'database', icon: '/Services/mysql.svg' },
      { name: 'Redis', category: 'database' },
      { name: 'Vector Search', category: 'database' },
    ],
  },
  {
    id: 'tools',
    title: 'VOICE & AI SYSTEMS',
    technologies: [
      { name: 'LiveKit', category: 'tools' },
      { name: 'SIP Telephony', category: 'tools' },
      { name: 'LangGraph', category: 'tools' },
      { name: 'LangChain', category: 'tools' },
      { name: 'RAG', category: 'tools' },
      { name: 'STT / TTS', category: 'tools' },
      { name: 'LLMs', category: 'tools' },
      { name: 'ChromaDB', category: 'tools' },
    ],
  },
  {
    id: 'devops',
    title: 'TOOLS & DELIVERY',
    technologies: [
      { name: 'Docker', category: 'devops', icon: '/Services/docker.svg' },
      { name: 'Git', category: 'devops', icon: '/Services/git.png' },
      { name: 'GitHub', category: 'devops' },
      { name: 'AWS', category: 'devops', icon: '/Services/aws.webp' },
      { name: 'Codemagic', category: 'devops' },
      { name: 'Sentry', category: 'devops' },
      { name: 'Postman', category: 'devops', icon: '/Services/postman-icon.svg' },
      { name: 'Vercel', category: 'devops' },
    ],
  },
];

const renderTechIcon = (name: string, fallbackImg?: string) => {
  switch (name) {
    case 'TypeScript':
      return <SiTypescript className="w-5 h-5 text-[#3178C6]" />;
    case 'JavaScript':
      return <SiJavascript className="w-5 h-5 text-[#F7DF1E]" />;
    case 'React':
      return <SiReact className="w-5 h-5 text-[#61DAFB]" />;
    case 'Next.js':
      return <SiNextdotjs className="w-5 h-5 text-white" />;
    case 'Redux':
      return <SiRedux className="w-5 h-5 text-[#764ABC]" />;
    case 'Tailwind CSS':
      return <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />;
    case 'Flutter':
      return <SiFlutter className="w-5 h-5 text-[#02569B]" />;
    case 'Dart':
      return <SiDart className="w-5 h-5 text-[#0175C2]" />;
    case 'Python':
      return <SiPython className="w-5 h-5 text-[#3776AB]" />;
    case 'Node.js':
      return <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />;
    case 'Express':
      return <SiExpress className="w-5 h-5 text-white" />;
    case 'FastAPI':
      return <SiFastapi className="w-5 h-5 text-[#009688]" />;
    case 'Flask':
      return <SiFlask className="w-5 h-5 text-white" />;
    case 'WebSockets':
      return <Network className="w-5 h-5 text-accent-light" />;
    case 'OAuth':
      return <KeyRound className="w-5 h-5 text-[#F59E0B]" />;
    case 'BullMQ':
      return <Workflow className="w-5 h-5 text-[#EC4899]" />;
    case 'PostgreSQL':
      return <SiPostgresql className="w-5 h-5 text-[#4169E1]" />;
    case 'MongoDB':
      return <SiMongodb className="w-5 h-5 text-[#47A248]" />;
    case 'MySQL':
      return <SiMysql className="w-5 h-5 text-[#4479A1]" />;
    case 'Redis':
      return <SiRedis className="w-5 h-5 text-[#DC382D]" />;
    case 'Vector Search':
      return <Database className="w-5 h-5 text-accent-light" />;
    case 'LiveKit':
      return <AudioLines className="w-5 h-5 text-accent-light" />;
    case 'SIP Telephony':
      return <PhoneCall className="w-5 h-5 text-accent" />;
    case 'LangGraph':
      return <Workflow className="w-5 h-5 text-[#A78BFA]" />;
    case 'LangChain':
      return <BrainCircuit className="w-5 h-5 text-[#34D399]" />;
    case 'RAG':
      return <Cpu className="w-5 h-5 text-accent-light" />;
    case 'STT / TTS':
      return <AudioWaveform className="w-5 h-5 text-[#6EE7B7]" />;
    case 'LLMs':
      return <Bot className="w-5 h-5 text-[#38BDF8]" />;
    case 'ChromaDB':
      return <Database className="w-5 h-5 text-[#FB7185]" />;
    case 'Docker':
      return <SiDocker className="w-5 h-5 text-[#2496ED]" />;
    case 'Git':
      return <SiGit className="w-5 h-5 text-[#F05032]" />;
    case 'GitHub':
      return <SiGithub className="w-5 h-5 text-white" />;
    case 'AWS':
      return <SiAmazonwebservices className="w-5 h-5 text-[#FF9900]" />;
    case 'Codemagic':
      return <SiCodemagic className="w-5 h-5 text-[#F87171]" />;
    case 'Sentry':
      return <SiSentry className="w-5 h-5 text-[#9333EA]" />;
    case 'Postman':
      return <SiPostman className="w-5 h-5 text-[#FF6C37]" />;
    case 'Vercel':
      return <SiVercel className="w-5 h-5 text-white" />;
    default:
      if (fallbackImg) {
        return (
          <Image
            src={fallbackImg}
            alt={name}
            width={24}
            height={24}
            className="w-5 h-5 object-contain"
          />
        );
      }
      return <Layers className="w-5 h-5 text-accent" />;
  }
};

const TechStack = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const headingWords = [
    { t: 'MY' },
    { t: 'TECH' },
    { t: 'stack', serif: true },
  ];
  const descriptionText =
    'A curated selection of technologies and protocols I build with across voice, AI agents, full-stack, and mobile.';

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'tools', label: 'Voice & AI Systems' },
    { id: 'frontend', label: 'Frontend & Mobile' },
    { id: 'backend', label: 'Backend & Real-Time' },
    { id: 'database', label: 'Databases & Search' },
    { id: 'devops', label: 'DevOps & Cloud' },
  ];

  const visibleSections =
    activeFilter === 'all'
      ? STACK_SECTIONS
      : STACK_SECTIONS.filter((sec) => sec.id === activeFilter);

  useGSAP(
    () => {
      sectionRefs.current.forEach((section, index) => {
        if (!section) return;
        const items = section.querySelectorAll('.tech-item');
        const title = titleRefs.current[index];

        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }

        if (items.length > 0) {
          gsap.fromTo(
            items,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.04,
              duration: 0.55,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 90%',
                end: 'top 70%',
                scrub: 0.5,
              },
            },
          );
        }
      });
    },
    { scope: containerRef, dependencies: [activeFilter] },
  );

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        !window.matchMedia('(hover: hover)').matches)
    ) {
      return;
    }
    const icon = e.currentTarget.querySelector('.tech-icon-wrap');
    if (!icon) return;
    gsap.to(icon, { y: -3, scale: 1.15, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches ||
        !window.matchMedia('(hover: hover)').matches)
    ) {
      return;
    }
    const icon = e.currentTarget.querySelector('.tech-icon-wrap');
    if (!icon) return;
    gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
  };

  return (
    <section
      ref={containerRef}
      id="tech-stack"
      className="bg-ink text-light pt-24 pb-16 md:pt-32 md:pb-24 rounded-b-4xl overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="mb-10 md:mb-14 hidden md:block">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />
          <ScrollWordReveal
            text={descriptionText}
            offset={['start 0.95', 'end 0.7']}
            className="text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
          />
        </div>

        <div className="mb-8 md:hidden">
          <AnimatedHeading
            words={[{ t: 'MY' }, { t: 'stack', serif: true }]}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />
        </div>

        <div className="mb-12 flex flex-wrap gap-2 sm:gap-3 items-center">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setActiveFilter(option.id)}
                className={`text-xs sm:text-sm font-mono tracking-wider px-4 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cream text-ink border-cream font-bold shadow-md scale-105'
                    : 'bg-elevated-dark/70 text-gray-soft border-white/10 hover:border-accent/40 hover:text-cream'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-16 md:space-y-24">
          {visibleSections.map((stack, index) => (
            <div
              key={stack.id}
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
            >
              <div className="md:w-1/3">
                <h3
                  ref={(el) => {
                    titleRefs.current[index] = el;
                  }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent-light tracking-tight font-display uppercase"
                >
                  {stack.title}
                </h3>
                <span className="font-mono text-xs text-warm-light tracking-widest uppercase block mt-2">
                  {stack.technologies.length} Technologies
                </span>
              </div>

              <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {stack.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-item group flex items-center gap-3.5 p-3 rounded-xl cursor-pointer transition-all duration-300 bg-[#0F1613] border border-white/[0.06] hover:border-accent/40 hover:bg-[#141D19] hover:shadow-[0_4px_24px_rgba(52,211,153,0.12)]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="tech-icon-wrap w-10 h-10 rounded-lg bg-[#070A09] flex items-center justify-center relative flex-shrink-0 border border-white/[0.06] group-hover:border-accent/30 transition-colors">
                      {renderTechIcon(tech.name, tech.icon)}
                    </div>
                    <p className="text-xs sm:text-sm font-mono font-semibold text-cream group-hover:text-accent-light transition-colors duration-200 break-words">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;