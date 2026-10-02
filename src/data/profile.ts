import type { Audience, Link, Pitch, Project, Role, Service } from '../types'

const base = import.meta.env.BASE_URL
export const asset = (path: string) => `${base}${path}`

export const profile = {
  name: 'Muhammad Talha Khan',
  title: 'Full Stack Software Engineer',
  eyebrow: 'Node.js · MERN · Real-time systems · AI integrations',
  location: 'Johar Town, Lahore, Pakistan',
  hours: 'US Eastern overlap, PKT 6 PM – 3 AM',
  email: 'Talhakhan050203@gmail.com',
  phone: '+92 304 4292975',
  whatsapp: 'https://wa.me/923044292975',
  resume: asset('images/Talha-Khan-Resume.pdf'),
  portrait: asset('images/profile-opt.jpg'),
  /** Formspree form that forwards messages to Talha's inbox. */
  formEndpoint: 'https://formspree.io/f/mjkwqrrr',
  careerStart: '2024-09',
}

export const links: Link[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-talha-khan-5849a5220/' },
  { label: 'GitHub', url: 'https://github.com/MuhammadTalhakhan2003' },
  { label: 'YouTube', url: 'https://www.youtube.com/@HumSabKaCodingChannel' },
  { label: 'Medium', url: 'https://medium.com/@talhakhan050203' },
  { label: 'X', url: 'https://x.com/Khan123455Talha' },
]

export const pitches: Record<Audience, Pitch> = {
  recruiter: {
    lede: 'Full stack engineer with 2+ years in production across four engineering teams. I build secure REST APIs, real-time WebSocket systems and well-indexed databases, and I currently ship backend features for Chatley.ai.',
    points: [
      'Available immediately, for full-time or contract roles',
      'Already works US Eastern hours, fully remote',
      'Node.js, Express, React, PostgreSQL and MongoDB in production',
    ],
    primary: { label: 'Download résumé (PDF)', href: profile.resume, external: true },
    secondary: { label: 'Check fit against your job post', href: '#fit' },
    tertiary: { label: 'Book an interview', href: '#contact' },
    defaultInquiry: 'Interview request',
  },
  ceo: {
    lede: 'I build the parts of a product that touch revenue: the API that books the appointment, the webhook that syncs the CRM, the real-time channel that keeps a customer from leaving. At Chatley.ai that means an AI receptionist that answers calls and books jobs for small businesses.',
    points: [
      'Owns a feature end to end: schema, API, auth, tests, deploy, UI',
      'Works your hours (US Eastern overlap) with written async updates',
      'Comfortable in a small team where nobody hands you a ticket',
    ],
    primary: { label: 'Start a conversation', href: '#contact' },
    secondary: { label: 'See shipped work', href: '#record' },
    tertiary: { label: 'Résumé (PDF)', href: profile.resume, external: true },
    defaultInquiry: 'Contract role',
  },
  client: {
    lede: 'Missed calls, slow follow-ups and data copied by hand between tools all cost you customers. I build the software that fixes that: AI receptionists and lead follow-up, CRM and calendar integrations, and custom web apps, quoted at a fixed price before work starts.',
    points: [
      'Fixed-price quote after a free 30-minute call',
      'Weekly demos, so you see progress instead of hearing about it',
      'Built on tools I already run in production: GoHighLevel, Cal.com, Calendly, Google Calendar',
    ],
    primary: { label: 'Get a fixed-price quote', href: '#contact' },
    secondary: { label: 'See services', href: '#services' },
    tertiary: { label: 'Past projects', href: '#work' },
    defaultInquiry: 'Freelance project',
  },
}

export const audienceLabels: Record<Audience, string> = {
  recruiter: 'Recruiter',
  ceo: 'Founder / CEO',
  client: 'Client',
}

export const metrics = [
  { value: '2+', label: 'years in production engineering' },
  { value: '4', label: 'engineering teams shipped with' },
  { value: '2', label: 'live platforms with real users' },
  { value: '30%', label: 'fewer API response errors (Internee.pk)' },
  { value: '25%', label: 'faster backend after database tuning' },
]

export const experience: Role[] = [
  {
    role: 'Full Stack Developer',
    company: 'ForthLogic',
    mode: 'Remote, US-based',
    start: '2026-04',
    end: null,
    product: { name: 'Chatley.ai', url: 'https://chatley.ai', note: 'AI voice and chat receptionist for small businesses' },
    points: [
      'Build backend services and secure REST APIs in Node.js and Express for the Chatley.ai platform.',
      'Ship real-time messaging over WebSockets for low-latency delivery between agents and customers.',
      'Work on AI agent logic, call recording and sentiment analysis, and A2P SMS compliance.',
      'Integrate calendars and CRMs: Google Calendar, Calendly, Cal.com and GoHighLevel webhooks.',
      'Own JWT authentication, developer API keys and MongoDB schema design.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB', 'WebSockets', 'JWT', 'React'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'TechClan',
    mode: 'Lahore',
    start: '2025-08',
    end: '2026-09',
    product: { name: 'upcover', url: 'https://upcover.com', note: 'B2B insurance and coverage platform' },
    points: [
      'Developed backend services and RESTful APIs in Node.js and Express.',
      'Improved PostgreSQL performance with indexing and query optimisation.',
      'Built JWT-secured endpoints with role-based access.',
      'Took part in production deployments, code reviews and Agile sprints.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'JWT'],
  },
  {
    role: 'Associate Software Engineer',
    company: 'ECOM Specialist LLC',
    mode: 'Remote',
    start: '2025-01',
    end: '2025-07',
    points: [
      'Built backend services for B2B integrations and automation workflows.',
      'Designed ERD-based data models and pipelines for order processing.',
      'Added validation, authentication and structured logging.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'ERD design'],
  },
  {
    role: 'Backend Intern',
    company: 'Internee.pk',
    mode: 'Remote',
    start: '2024-09',
    end: '2024-12',
    points: [
      'Rebuilt and debugged REST endpoints, cutting response errors by 30%.',
      'Helped optimise database access, improving backend performance by 25%.',
      'Streamlined internal tools to shorten deployment cycles.',
    ],
    stack: ['Node.js', 'REST APIs', 'PostgreSQL'],
  },
]

export const services: Service[] = [
  {
    title: 'AI receptionist & lead follow-up',
    body: 'An AI agent that answers calls and chats, qualifies the lead, books the appointment and sends the follow-up, so no inquiry waits until morning.',
    proof: 'Chatley.ai, ForthLogic',
  },
  {
    title: 'CRM & calendar integrations',
    body: 'Two-way sync between your website, CRM and calendar. Webhooks, OAuth and retries handled, so data stops being copied by hand.',
    proof: 'GoHighLevel, Cal.com, Calendly, Google Calendar',
  },
  {
    title: 'Backend & API development',
    body: 'Secure REST APIs with JWT and role-based access, indexed PostgreSQL or MongoDB, tests, and a deploy you can roll back.',
    proof: 'upcover, ECOM Specialist',
  },
  {
    title: 'Real-time features',
    body: 'Live chat, presence, notifications and live maps over WebSockets and Socket.io, built to clean up after every disconnect.',
    proof: 'Chatley.ai messaging, Sage Talk, Live Location Tracker',
  },
]

export const process = [
  { title: '30-minute call.', body: 'Free. We agree the problem, the outcome and how we will measure it.' },
  { title: 'Fixed-price quote.', body: 'Written scope, price and timeline within 48 hours. No hourly surprises.' },
  { title: 'Build with weekly demos.', body: 'A working link every week, so you can change direction early.' },
  { title: 'Launch and handover.', body: 'Deployed, documented, with the source code in your repository.' },
]

export const projects: Project[] = [
  {
    name: 'Hifazat',
    kind: 'Final year project, 2024–2025',
    summary: 'Community safety platform. Citizens report incidents in real time and the system turns reports into live crime heatmaps and geospatial analytics.',
    detail: 'Flutter app on a Django REST API with JWT, role-based access, and PostgreSQL with PostGIS for spatial queries.',
    stack: ['Flutter', 'Django REST', 'PostgreSQL', 'PostGIS', 'JWT'],
    links: [
      { label: 'Watch the demo video', url: 'https://www.youtube.com/watch?v=kRctvhmBFyc' },
      { label: 'GitHub', url: 'https://github.com/MuhammadTalhakhan2003' },
    ],
  },
  {
    name: 'Sage Talk',
    kind: 'Real-time chat',
    summary: 'WhatsApp-style messaging with online presence, private chats and group rooms on an event-driven Socket.io server.',
    stack: ['Node.js', 'Express', 'Socket.io'],
    links: [{ label: 'Source', url: 'https://github.com/MuhammadTalhakhan2003/Real_TimeChat_App' }],
    image: { src: asset('images/sage-talk-opt.jpg'), width: 1100, height: 468, alt: 'Sage Talk chat interface with a conversation list and message thread' },
  },
  {
    name: 'Live Location Tracker',
    kind: 'Real-time maps',
    summary: "GPS positions stream over Socket.io and update on every connected client's Leaflet map, with cleanup on disconnect.",
    stack: ['Node.js', 'Socket.io', 'Leaflet.js'],
    links: [{ label: 'Source', url: 'https://github.com/MuhammadTalhakhan2003/real_tracking' }],
    image: { src: asset('images/realtime-opt.jpg'), width: 1100, height: 407, alt: 'Live location tracker showing markers on a map' },
  },
  {
    name: 'Translator',
    kind: 'Web tool',
    summary: 'Responsive translator on the MyMemory API with language swap and copy to clipboard.',
    stack: ['JavaScript', 'REST API', 'HTML/CSS'],
    links: [{ label: 'Source', url: 'https://github.com/MuhammadTalhakhan2003/translator' }],
    image: { src: asset('images/translator.png'), width: 684, height: 432, alt: 'Translator tool with source and target language boxes' },
  },
  {
    name: 'Space Dodge',
    kind: 'Arcade game',
    summary: 'Python and Pygame arcade game with progressive difficulty, collision logic and live scoring.',
    stack: ['Python', 'Pygame'],
    links: [{ label: 'Source', url: 'https://github.com/MuhammadTalhakhan2003/pygame_space_dodge' }],
    image: { src: asset('images/space-dodge-opt.jpg'), width: 1100, height: 733, alt: 'Space Dodge game screen with a ship avoiding falling objects' },
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs', 'Python', 'Django REST'] },
  { group: 'Frontend & mobile', items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Flutter'] },
  { group: 'Data', items: ['MongoDB', 'PostgreSQL', 'PostGIS', 'Indexing & query tuning', 'ERD design'] },
  { group: 'Real-time & integrations', items: ['WebSockets', 'Socket.io', 'Webhooks', 'GoHighLevel', 'Cal.com', 'Calendly', 'Google Calendar'] },
  { group: 'AI', items: ['AI agents', 'LLM integration', 'Sentiment analysis'] },
  { group: 'Security', items: ['JWT', 'OAuth', 'RBAC', 'CORS', 'Input validation'] },
  { group: 'Practice', items: ['Git', 'Docker', 'CI/CD', 'Agile/Scrum', 'Code review', 'Automated testing'] },
]

export const education = [
  {
    degree: 'MS Computer Science',
    school: 'FAST National University (FAST-NUCES), Lahore',
    years: '2025 – 2027',
    note: 'Part-time alongside full-time work. Distributed Systems, AI, Software Quality Assurance.',
  },
  {
    degree: 'BS Computer Science',
    school: 'University of South Asia, Lahore',
    years: '2021 – 2025',
    note: 'CGPA 3.39 / 4.0. Capstone: Hifazat.',
  },
]
