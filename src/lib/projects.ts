export interface ProjectStat { value: string; label: string }
export interface Project {
  id: number; slug: string; title: string; type: string; role: string; tech: string[];
  description: string; overview: string; architecture: string; implementation: string;
  stats: ProjectStat[]; accent: string; myRole: string[]; images: string[];
  hoverImage: string; github: string; liveUrl: string;
}

const projects: Project[] = [
  {
    id: 5, slug: 'launchfolio', title: 'LaunchFolio', type: 'Resume-to-Portfolio Builder', role: 'Personal project',
    tech: ['React', 'TypeScript', 'Vite', 'PDF.js', 'IndexedDB', 'JSZip'],
    description: 'A browser-based builder that turns resume details into an editable portfolio with live previews and downloadable websites.',
    overview: 'LaunchFolio helps students and developers turn a resume into a portfolio without an account or paid AI service. Users import a text-based PDF, review the extracted details, add project images, and choose from three designs.',
    architecture: 'React and TypeScript power the editor. PDF.js extracts text locally, IndexedDB saves drafts in the browser, and a shared HTML renderer keeps the preview and exported website consistent. JSZip packages a standalone site with embedded images and license notices.',
    implementation: 'I built the resume-import and review flow, editable profile and project sections, template and accent controls, desktop and mobile previews, image uploads, JSON backups, and website ZIP export. PDF parsing supports common headings, entry bullets and date ranges; users can review and correct the result.',
    stats: [{ value: '3 designs', label: 'Editable portfolio templates' }, { value: 'Local-first', label: 'Resume processing in the browser' }, { value: 'Standalone', label: 'Downloadable HTML website' }],
    accent: '#8B7DE8',
    myRole: ['Built local PDF extraction with a review step and manual editing.', 'Created a responsive editor with three portfolio designs and live previews.', 'Added portrait and project-image uploads, browser-saved drafts, and JSON backup/restore.', 'Implemented standalone website ZIP downloads with embedded images and license notices.'],
    images: ['/work/launchfolio.png'], hoverImage: '/work/launchfolio.png', github: 'https://github.com/syedowais2724/LaunchFolio', liveUrl: '',
  },
  {
    id: 1, slug: 'the-double', title: 'The Double', type: 'Voice, AI Agents & Product Engineering',
    role: 'Software Engineer · Team contribution', tech: ['Next.js', 'Python', 'LiveKit', 'Flutter', 'OAuth', 'SIP'],
    description: 'Engineering across AI messaging channels, real-time voice calls, and a Flutter iOS app at The Double.',
    overview: 'At The Double, I work across the interfaces and systems that let AI agents communicate through text, voice, and mobile. This is a selection of my contributions as part of the team, not a claim of sole ownership of the product.',
    architecture: 'The work spans Slack, Google Chat, and WhatsApp Business channels with a unified inbox and AI drafts; Python and LiveKit voice calling with SIP telephony; and a Flutter iOS app. Salesforce and Gmail actions connect through multi-account OAuth.',
    implementation: 'My contributions include channel integrations, caller identification and outbound AI calls, iOS Google sign-in and call takeover, call rules, Codemagic builds, and a knowledge graph in Next.js.',
    stats: [{ value: 'Voice', label: 'Python · LiveKit · SIP' }, { value: 'Agents', label: 'Messaging & connected actions' }, { value: 'iOS', label: 'Flutter · Codemagic' }],
    accent: '#34D399',
    myRole: ['Built Slack, Google Chat, and WhatsApp Business channels with a unified inbox and AI drafts.', 'Developed Python and LiveKit calling with caller identification and outbound AI calls.', 'Shipped Flutter iOS features including Google sign-in, call takeover, and call rules.', 'Added Salesforce and Gmail agent actions with multi-account OAuth, plus a Next.js knowledge graph.'],
    images: ['/work/double.svg'], hoverImage: '/work/double.svg', github: '', liveUrl: '',
  },
  {
    id: 2, slug: 'clinicvoice', title: 'ClinicVoice', type: 'Voice AI Clinic Receptionist', role: 'Personal project',
    tech: ['LiveKit Agents', 'Python', 'Next.js', 'OpenAI'],
    description: 'A voice AI receptionist that verifies patients and helps book, reschedule, and cancel doctor appointments.',
    overview: 'ClinicVoice brings appointment workflows into a real-time voice conversation. Patients can speak to an AI receptionist in the browser rather than navigate a series of forms.',
    architecture: 'A Python agent backend built with LiveKit Agents connects to a Next.js frontend for real-time browser voice calls. OpenAI powers the conversational layer.',
    implementation: 'I built the voice receptionist and browser calling experience around patient verification and appointment actions: booking, rescheduling, and cancellation.',
    stats: [{ value: 'Voice-first', label: 'Browser-based conversations' }, { value: 'Appointments', label: 'Book · reschedule · cancel' }, { value: 'LiveKit', label: 'Real-time voice connection' }],
    accent: '#6EE7B7',
    myRole: ['Built the Python agent backend using LiveKit Agents.', 'Created the Next.js frontend for real-time voice calls.', 'Implemented patient verification and appointment workflows.'],
    images: ['/work/clinicvoice.svg'], hoverImage: '/work/clinicvoice.svg', github: '', liveUrl: '',
  },
  {
    id: 3, slug: 'murshid-ai', title: 'Murshid AI', type: 'RAG-based Voice Assistant', role: 'Personal project',
    tech: ['FastAPI', 'ChromaDB', 'STT / TTS', 'Vector Search', 'Netlify'],
    description: 'A voice-enabled assistant that uses document retrieval to answer questions with relevant context.',
    overview: 'Murshid AI combines speech input, document retrieval, and spoken responses. The assistant retrieves relevant information from ingested documents to ground its answers.',
    architecture: 'The pipeline combines FastAPI, ChromaDB, embeddings, and vector search with speech-to-text and text-to-speech. The frontend is deployed on Netlify.',
    implementation: 'I built the document-ingestion and semantic-search pipeline and connected it to voice input and spoken responses for contextual question answering.',
    stats: [{ value: 'RAG', label: 'Document-grounded answers' }, { value: 'Speech', label: 'Voice in · voice out' }, { value: 'ChromaDB', label: 'Semantic retrieval' }],
    accent: '#A7B8F5',
    myRole: ['Built document ingestion and an embeddings-based retrieval pipeline.', 'Connected STT and TTS for voice-enabled interaction.', 'Deployed the assistant frontend on Netlify.'],
    images: ['/work/murshid.svg'], hoverImage: '/work/murshid.svg', github: 'https://github.com/owais1724/murshidai', liveUrl: '',
  },
  {
    id: 4, slug: 'security-agency', title: 'Security Agency Platform', type: 'Multi-client Operations Platform', role: 'Personal project',
    tech: ['Node.js', 'PostgreSQL', 'REST APIs', 'RBAC', 'Render'],
    description: 'A role-based platform for security agencies to manage client accounts, guard attendance, and leave requests.',
    overview: 'This platform brings attendance, leave requests, and client operations into one role-based system for security agencies managing multiple clients.',
    architecture: 'Node.js REST APIs and PostgreSQL support the platform, with role-based access for different responsibilities. The backend is deployed on Render.',
    implementation: 'I created APIs for guard attendance, leave requests, and client operations, and built role-based access to support multiple client accounts.',
    stats: [{ value: 'RBAC', label: 'Role-based access' }, { value: 'Operations', label: 'Attendance & leave workflows' }, { value: 'PostgreSQL', label: 'Relational data layer' }],
    accent: '#D9BB82',
    myRole: ['Built a platform to manage multiple client accounts.', 'Created REST APIs for attendance, leave requests, and client operations.', 'Implemented role-based access and deployed the backend on Render.'],
    images: ['/work/security.svg'], hoverImage: '/work/security.svg', github: 'https://github.com/owais1724/security-agency-management-system-1.2', liveUrl: '',
  },
];

export function getAllProjects(): Project[] { return projects; }
export function getProjectBySlug(slug: string): Project | undefined { return projects.find(p => p.slug === slug); }
export function getAdjacentProjects(slug: string): { prev?: Project; next?: Project } {
  const index = projects.findIndex(p => p.slug === slug);
  return index < 0 ? {} : { prev: projects[(index - 1 + projects.length) % projects.length], next: projects[(index + 1) % projects.length] };
}
