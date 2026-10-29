'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import AnimatedHeading from '@/components/ui/AnimateHeading';
import ScrollWordReveal from '@/components/ui/ScrollWordReveal';

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const ctx = gsap.context(() => {
      const allSections = servicesRef.current.filter(Boolean);
      const pinOffset = 50;
      allSections.forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: `top ${pinOffset + index * 100}px`,
          endTrigger: allSections[allSections.length - 1],
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const headingWords = [
    { t: 'WHAT' },
    { t: 'i', serif: true },
    { t: 'DO' },
  ];
  const descriptionText =
    'I build across the product: the interface, the APIs behind it, and the voice and AI systems that connect them. These are the areas I work in.';

  const services = [
    {
      id: '01',
      title: 'Voice & AI Agents',
      description:
        'Voice-first experiences that connect speech, language models, and useful actions. From document-grounded assistants to browser calls and SIP telephony.',
      items: [
        'Python, LiveKit, STT / TTS & SIP',
        'RAG, vector search & knowledge graphs',
        'Agent actions & connected messaging channels',
      ],
    },
    {
      id: '02',
      title: 'Full Stack Engineering',
      description:
        'End-to-end web products with thoughtful interfaces, reliable APIs, and clear access controls. I work across the frontend and backend rather than stopping at the screen.',
      items: [
        'React, Next.js, TypeScript & Tailwind CSS',
        'Node.js, Express, FastAPI & REST APIs',
        'PostgreSQL, MongoDB, Redis, OAuth & RBAC',
      ],
    },
    {
      id: '03',
      title: 'Mobile & Product Delivery',
      description:
        'Taking product features beyond the browser. My work includes Flutter iOS development, authentication, call controls, and repeatable build and deployment workflows.',
      items: [
        'Flutter & Dart for iOS',
        'Google sign-in, call takeover & call rules',
        'Codemagic, Docker & AWS',
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="min-h-screen bg-ink text-light pt-24 pb-16 md:pt-32 md:pb-20 px-6 sm:px-8 md:px-12 lg:px-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-20">
          <AnimatedHeading
            words={headingWords}
            className="text-[clamp(2.5rem,7vw,6.5rem)] tracking-tight mb-4"
          />

          <div className="grid md:grid-cols-12 gap-4 md:gap-8">
            <div className="md:col-start-6 md:col-span-7 flex flex-col md:flex-row gap-3 md:gap-10">
              <span className="font-mono text-sm sm:text-base md:text-base text-accent uppercase tracking-[0.3em] font-semibold whitespace-nowrap inline-block">
                (Expertise)
              </span>

              <ScrollWordReveal
                text={descriptionText}
                offset={['start 0.95', 'end 0.65']}
                className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-soft font-sans leading-relaxed"
              />
            </div>
          </div>
        </div>

        <div className="relative pb-8 md:pb-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => {
                servicesRef.current[index] = el;
              }}
              className="pb-8 md:pb-16"
              style={{ zIndex: index + 1 }}
            >
              <div className="rounded-3xl bg-[#0F1613] border border-white/10 p-6 sm:p-8 md:p-12 shadow-[0_-12px_36px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-accent/40">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <span className="font-mono text-xs text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/25">
                      Domain 0{index + 1}
                    </span>
                    <h3 className="font-display text-light font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-none">
                      {service.title}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-gray-soft uppercase tracking-widest hidden md:inline-block">
                    [ 0{index + 1} / 0{services.length} ]
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-6 md:gap-8 pt-6 md:pt-8">
                  <div className="md:col-span-5">
                    <ScrollWordReveal
                      text={service.description}
                      offset={['start 0.95', 'end 0.7']}
                      className="text-gray-soft text-base sm:text-base md:text-lg leading-relaxed font-sans"
                    />
                  </div>

                  <div className="md:col-span-7 space-y-3">
                    <span className="font-mono text-xs text-accent uppercase tracking-wider block mb-2 font-semibold">
                      Core Specializations
                    </span>
                    <div className="divide-y divide-white/10">
                      {service.items.map((item, i) => (
                        <div key={i} className="py-3.5 flex items-center gap-3.5 group">
                          <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-mono font-bold flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-ink transition-colors duration-200">
                            0{i + 1}
                          </span>
                          <span className="text-base sm:text-base md:text-lg font-medium font-sans text-cream group-hover:text-accent-light transition-colors duration-200">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
