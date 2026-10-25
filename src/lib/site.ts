export const site = {
  name: 'Syed Owais',
  firstName: 'Syed',
  lastName: 'Owais',
  handle: 'owais1724',
  brand: 'owais.dev',
  email: 'syedowaismohi@gmail.com',
  location: 'India',
  timeZone: 'Asia/Kolkata',
  timeZoneLabel: 'IST',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://owais2424.netlify.app',
  tagline: 'Software engineer building full-stack products, voice systems, and AI agents.',
  roles: [
    'Software Engineer',
    'Voice & AI Agent Systems',
    'Full Stack & Mobile',
    'Currently at The Double',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'email';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/owais1724' },
  linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/syed-owais-/' },
  email: { label: 'Email', href: 'mailto:syedowaismohi@gmail.com' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.email,
  socials.github,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Expertise', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
