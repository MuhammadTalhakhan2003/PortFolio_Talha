import type { Education, Featured, IntroVideo, Launch, Link, Project, RecommendationGroup, Role, Service } from '../types'

const base = import.meta.env.BASE_URL
export const asset = (path: string) => `${base}${path}`

const GH = 'https://github.com/MuhammadTalhakhan2003'

export const profile = {
  name: 'Muhammad Talha Khan',
  title: 'Full Stack Software Engineer',
  eyebrow: 'Full stack engineer · Product builder · Lahore',
  location: 'Johar Town, Lahore, Pakistan',
  hours: 'US Eastern overlap, PKT 6 PM – 3 AM',
  email: 'Talhakhan050203@gmail.com',
  phone: '+92 304 4292975',
  whatsapp: 'https://wa.me/923044292975',
  tel: 'tel:+923044292975',
  whatsappHire: `https://wa.me/923044292975?text=${encodeURIComponent("Hi Talha, I saw your portfolio and I'd love to talk.")}`,
  mailHire: `mailto:Talhakhan050203@gmail.com?subject=${encodeURIComponent('Hello from your portfolio')}`,
  resume: asset('images/Talha-Khan-Resume.pdf'),
  portrait: asset('images/profile-opt.jpg'),
  github: GH,
  /** Formspree form that forwards messages to Talha's inbox. */
  formEndpoint: 'https://formspree.io/f/mjkwqrrr',
  careerStart: '2024-09',
}

/** Words the hero headline cycles through: "I build …". */
export const builds = [
  'free tools anyone can use.',
  'AI that sells on WhatsApp while you sleep.',
  'design editors that run in the browser.',
  'job applications that cite your real experience.',
  'trip apps that settle the bill fairly.',
  'AI receptionists that book jobs.',
  'AI notebooks that cite their sources.',
  'AI that cuts long videos into shorts.',
  'AI that finds the jobs you fit.',
  'real-time apps that feel instant.',
  'maps that help keep cities safe.',
  'products people love to use.',
]

export const lede =
  'I take ideas from a blank page to a live product: the API, the database, the real-time layer and the interface people touch. By day I build AI agents for Chatley.ai. By night I ship my own products, the newest being Qasid, an AI salesperson that answers WhatsApp customers in Urdu, Roman Urdu and English, alongside Bretlify, a browser-based design editor with AI layouts and live collaboration, CareerPilot, an AI job-application copilot that writes from your own CV with citations, Pocketsplit, a live trip-expense splitter with a shareable polaroid recap, Mesmer, an AI video clipper, Hirova, an AI job finder, and FileFlip, a free toolkit of 61 PDF and image tools with no sign-up.'

export const links: Link[] = [
  { label: 'GitHub', url: GH },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-talha-khan-5849a5220/' },
  { label: 'YouTube', url: 'https://www.youtube.com/@HumSabKaCodingChannel' },
  { label: 'Medium', url: 'https://medium.com/@talhakhan050203' },
  { label: 'X', url: 'https://x.com/Khan123455Talha' },
]

export const launch: Launch = {
  name: 'FileFlip',
  tagline: 'Flip any file. Free.',
  summary:
    'Every tool you need for PDFs and images in one place. Merge, split, compress, convert, edit, sign and redact without an account, a watermark or a daily limit. Files are deleted automatically after an hour. Designed, built and shipped end to end by me.',
  url: 'https://fileflip-gules.vercel.app/',
  code: `${GH}/fileflip`,
  host: 'fileflip-gules.vercel.app',
  stats: [
    { value: '61', label: 'PDF & image tools' },
    { value: '0', label: 'sign-ups or watermarks' },
    { value: '1 hr', label: 'until files auto-delete' },
    { value: '47', label: 'backend tests (pytest)' },
  ],
  features: [
    { group: 'Organize', items: 'Merge, split, reorder, extract and remove pages. Scan to PDF.' },
    { group: 'Convert', items: 'Word, Excel, PowerPoint, HTML and images to PDF and back, plus PDF/A.' },
    { group: 'Edit', items: 'Full editor for text, shapes, highlights and images. Crop, watermark, number.' },
    { group: 'Secure', items: 'AES-256 protect, unlock, sign, redact and compare documents.' },
    { group: 'AI', items: 'Summarize, translate with layout kept, and PDF to Markdown, on Claude.' },
    { group: 'Images', items: '26 image tools: JPG, PNG, WEBP, HEIC, SVG, TIFF and more.' },
  ],
  stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind 4', 'FastAPI', 'PyMuPDF', 'Docker', 'Vercel'],
  underTheHood: [
    '“Continue with…” chains a result straight into the next tool with no re-upload',
    'OCR in English, Urdu, Arabic and Hindi with Tesseract',
    'Per-IP rate limiting and magic-byte file checks on every upload',
    'Installable PWA with a WebGL particle hero and dark and light modes',
  ],
  shots: {
    light: { src: asset('images/fileflip-light.webp'), width: 1200, height: 717, alt: 'FileFlip home page in light mode with the headline “Every tool you need for PDFs & images” and a tool search box' },
    dark: { src: asset('images/fileflip-dark.webp'), width: 1200, height: 717, alt: 'FileFlip home page in dark mode with the headline “Every tool you need for PDFs & images” and a particle animation' },
    extra: [
      { src: asset('images/fileflip-split.webp'), width: 1200, height: 750, alt: 'FileFlip visual split editor showing page thumbnails grouped into ranges', caption: 'Visual split editor' },
      { src: asset('images/fileflip-sign.webp'), width: 1200, height: 750, alt: 'FileFlip sign PDF editor with a signature placed on a page', caption: 'Sign PDF editor' },
    ],
  },
}

/** Hero "Just launched" pill: points at the newest product's row in Selected work. */
export const newest = {
  name: 'Qasid',
  blurb: 'an AI salesperson that runs your WhatsApp',
  anchor: '#qasid',
}

export const featured: Featured[] = [
  {
    name: 'Chatley.ai',
    kind: 'AI receptionist · In production',
    credit: 'Team build · ForthLogic',
    summary: 'An AI voice and chat receptionist for small businesses. It answers calls and chats, qualifies the lead and books the appointment straight into the calendar. I build its backend at ForthLogic.',
    highlights: ['AI agent logic, call recording and sentiment analysis', 'Real-time WebSocket messaging between agents and customers', 'Google Calendar, Calendly, Cal.com and GoHighLevel integrations'],
    stack: ['Node.js', 'Express', 'MongoDB', 'WebSockets', 'LLMs'],
    links: [{ label: 'Visit chatley.ai', url: 'https://chatley.ai' }],
    poster: { title: 'Chatley.ai', lines: ['“Hi, thanks for calling. How can I help?”', 'Lead qualified · Appointment booked · CRM synced'] },
  },
  {
    name: 'Qasid',
    kind: 'AI WhatsApp salesperson · New',
    credit: 'Solo build',
    summary: 'An AI agent that runs a small business’s WhatsApp. It answers every customer in Urdu, Roman Urdu or English, takes orders, books appointments and shares payment options, then hands the chat to the owner when a person is needed.',
    highlights: [
      'WhatsApp Cloud API webhook with signature verification, auto-replies and a handover pause so the owner can take over a conversation',
      'Agent studio: train it on your catalog, prices, tone and handover rules, then test it in a live playground. Runs on Groq, with the Vercel AI Gateway as fallback',
      'Owner dashboard with KPIs, a weekly chart, handovers, orders and an inbox to switch any chat between AI and human',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind 4', 'Motion', 'AI SDK', 'Groq', 'WhatsApp Cloud API', 'Netlify'],
    links: [{ label: 'Open Qasid', url: 'https://qasid-ai.netlify.app' }],
    image: { src: asset('images/qasid.webp'), width: 1200, height: 750, alt: 'Qasid landing page in dark mode with the headline “Your best salesperson never sleeps.” next to a phone showing a WhatsApp chat for Sweet Bakes Lahore' },
  },
  {
    name: 'Bretlify',
    kind: 'Browser design editor · New',
    credit: 'Solo build',
    summary: 'A Canva-style graphic design editor that runs in the browser. Pick a template or describe a design and get an editable layout, then edit it with shapes, text, photos, filters and a brush. Share a link and edit together in real time with live cursors.',
    highlights: [
      'Canvas editor on Konva with layers, crop, filters, brush and eraser, PNG/JPG export at full resolution, and undo/redo that merges slider drags into a single step',
      'Magic Design: Groq structured output turns a prompt into a validated, fully editable layout, plus an AI copywriter. Background removal runs on-device in WASM',
      'Live collaboration on Liveblocks with per-layer sync, live cursors and shared selections. Clerk accounts, autosave to Neon Postgres and image uploads to Vercel Blob',
    ],
    stack: ['Next.js', 'TypeScript', 'Konva', 'Zustand', 'Liveblocks', 'Groq', 'Postgres', 'Vercel'],
    links: [
      { label: 'Open Bretlify', url: 'https://bretlify.vercel.app' },
      { label: 'Code', url: `${GH}/bretlify` },
    ],
    image: { src: asset('images/bretlify.webp'), width: 1200, height: 750, alt: 'Bretlify editor with a pink Summer Sale template on the canvas, the headline selected, a layers panel on the left and text properties on the right' },
  },
  {
    name: 'CareerPilot',
    kind: 'AI job-application copilot',
    credit: 'Solo build',
    summary: 'Upload your CV once, paste any job post, and CareerPilot scores the match and writes a cover letter, tailored CV bullets, outreach drafts and interview prep. Every line is cited from your own documents, so the AI never invents experience.',
    highlights: [
      'RAG over your CV and projects: the job description pulls the most relevant passages and Groq writes only from them, with [n] citations back to the source',
      'Match score, skill gaps, an ATS keyword check, LinkedIn and cold-email drafts, and a Word export of the cover letter',
      'Ask-my-CV chat, a mock interview that grades your answers and a job tracker. Private per-browser sessions and rate limiting keep it safe to run in public',
    ],
    stack: ['FastAPI', 'Python', 'Groq', 'RAG', 'ChromaDB', 'BM25', 'JavaScript', 'Vercel'],
    links: [{ label: 'Open CareerPilot', url: 'https://careerpilot-rag.vercel.app' }],
    image: { src: asset('images/careerpilot.webp'), width: 1200, height: 750, alt: 'CareerPilot results page in dark mode with a lime match-score ring reading 85 out of 100, a verdict, and matched skills with cited evidence' },
  },
  {
    name: 'Pocketsplit',
    kind: 'Trip expense splitter',
    credit: 'Solo build',
    summary: 'Split trip costs with friends and see the fewest payments that settle everyone up. Anyone with the trip code can join, no account needed, and the trip ends as a polaroid recap you can download or share.',
    highlights: [
      'Magic Add turns “jeep 9000 bilal ne diya” into an expense, parsing English and Roman Urdu into amount, payer, split and category with a live preview',
      'Fewest-payments settle-up with undo, unequal splits, trip budgets, 8 currencies and WhatsApp reminders carrying JazzCash or Easypaisa details',
      'Live sync between friends’ phones, a weighted “Who pays next?” wheel, and a recap exported as a PNG. Responsive from 320px phones to 4K screens',
    ],
    stack: ['Django REST', 'PostgreSQL', 'React', 'Vite', 'Tailwind 4', 'Motion', 'Clerk', 'Vercel'],
    links: [{ label: 'Open Pocketsplit', url: 'https://pocketsplit-chi.vercel.app' }],
    image: { src: asset('images/pocketsplit.webp'), width: 1200, height: 750, alt: 'Pocketsplit on a laptop and a phone: a trip page with a PKR 60,000 budget and live feed, next to a polaroid trip recap showing PKR 45,200 spent' },
  },
  {
    name: 'Mesmer',
    kind: 'AI video clipper · Live',
    credit: 'Solo build',
    summary: 'Paste a YouTube, Facebook or Instagram link and Mesmer finds the strongest moments in a long video, scores each one out of 10, and cuts them into vertical 9:16 shorts with captions burned in. Best clip first, ready to download and post.',
    highlights: [
      'Groq reads the transcript, picks the hooks and returns a virality score and best-fit platform (TikTok, Reels or Shorts) for every clip',
      'No captions on the video? Whisper on Groq transcribes the audio so AI picking still works',
      'yt-dlp downloads from most sites and FFmpeg frames each clip at 1080×1920 with blur-fit or fill-crop and bold subtitles, packaged in a Dockerfile',
    ],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind 4', 'Groq', 'Whisper', 'yt-dlp', 'FFmpeg', 'Docker'],
    links: [{ label: 'Open Mesmer', url: 'https://mesmer-kappa.vercel.app' }],
    image: { src: asset('images/mesmer.webp'), width: 1200, height: 700, alt: 'Mesmer home page with the headline “Make them watch twice.” and a list of clips scored 9.6, 9.1, 8.8 and 8.4 for TikTok, Reels and Shorts' },
  },
  {
    name: 'Hirova',
    kind: 'AI job finder · Live',
    credit: 'Solo build',
    summary: 'Upload a resume and Hirova reads it, pulls live listings from trusted job boards, ranks every job by how well it fits you and explains why. Select your matches, tap Go, and each application is prepared with its own cover letter and tracked.',
    highlights: [
      'Groq reads the resume into skills, seniority and target roles, then re-ranks the top matches with a plain-English reason for each',
      'Live jobs from Remotive, Jobicy, Arbeitnow, The Muse and JSearch (LinkedIn, Indeed, Glassdoor), de-duplicated and scam-filtered',
      'Free and Pro plans, an application tracker and an installable PWA that works on phone, tablet and desktop',
    ],
    stack: ['React', 'Vite', 'Netlify Functions', 'Groq', 'RapidAPI', 'PWA'],
    links: [{ label: 'Open Hirova', url: 'https://gohired.netlify.app' }],
    image: { src: asset('images/hirova.webp'), width: 1200, height: 750, alt: 'Hirova home page in dark mode with the headline “Upload once. Hit Go. Get hired.” and a resume upload box' },
  },
  {
    name: 'Notara',
    kind: 'AI research notebook · Live',
    credit: 'Solo build',
    summary: 'A NotebookLM-style workspace. Upload PDFs, websites, YouTube videos and photos, ask questions and get answers with clickable citations, then turn your sources into podcasts, mind maps, quizzes, flashcards and slide decks you can download.',
    highlights: [
      'Cited answers streamed live: each claim links to the exact passage in your sources',
      'Studio: audio overviews, mind maps, quizzes, flashcards and slides, exported to PDF, Word, PowerPoint, CSV and PNG',
      'Runs on Groq or Claude, with passage retrieval to fit Groq’s free token limits',
    ],
    stack: ['Next.js 15', 'TypeScript', 'Tailwind 4', 'Groq', 'Claude API', 'IndexedDB', 'Vercel'],
    links: [
      { label: 'Live app', url: 'https://notara-rose.vercel.app' },
      { label: 'Code', url: `${GH}/notara` },
    ],
    image: { src: asset('images/notara.webp'), width: 1200, height: 750, alt: 'Notara home page in dark mode with the headline “Understand anything you read, with sources you can check.”' },
  },
  {
    name: 'Paperly',
    kind: 'Collaborative docs',
    credit: 'Solo build',
    summary: 'A lightweight Google Docs. Write rich text with autosave, import .docx and Markdown, share with teammates as editor or viewer, and export to PDF.',
    highlights: ['TipTap rich-text editor with autosave, star, duplicate and search', 'Per-document sharing with Editor and Viewer roles, checked on every endpoint', 'JWT session cookies, bcrypt, Zod validation and server-side HTML sanitizing'],
    stack: ['Next.js 16', 'TypeScript', 'TipTap', 'Prisma', 'Turso', 'Tailwind'],
    links: [
      { label: 'Live demo', url: 'https://paperly-ashen.vercel.app' },
      { label: 'Code', url: `${GH}/Paperly` },
    ],
    image: { src: asset('images/paperly.webp'), width: 1200, height: 750, alt: 'Paperly sign-in page with the headline “Write, organize, and share documents, together.”' },
  },
  {
    name: 'Hifazat حفاظت',
    kind: 'Community safety app',
    credit: 'Final year project',
    summary: 'Citizens across Pakistan report incidents, the community verifies them, and the app turns 100,498 historical incidents across 109 cities into live heatmaps and predicted hotspots.',
    highlights: ['Kernel density estimation predicts crime hotspots on the map', 'Votes, comments and a reputation system from Newcomer to Champion', 'JWT with rotating refresh tokens and citizen and admin roles'],
    stack: ['Flutter', 'Django REST', 'PostGIS', 'Redis', 'scikit-learn'],
    links: [
      { label: 'Open Hifazat', url: 'https://hifazat-eosin.vercel.app' },
      { label: 'Code', url: `${GH}/Hifazat-FYP` },
      { label: 'Watch demo', url: 'https://www.youtube.com/watch?v=kRctvhmBFyc' },
    ],
    image: { src: asset('images/hifazat.webp'), width: 1200, height: 675, alt: 'Hifazat banner showing the app’s incident analytics screen with 100,498 incidents across 109 cities' },
  },
]

/** Recorded walkthrough. CapCut blocks embedding, so it opens in a new tab; set `embed` to a YouTube embed URL to play it inline instead. */
export const introVideo: IntroVideo = {
  url: 'https://www.capcut.com/sv2/ZS9Uv9xabsgK5-wP3nL/',
  title: 'See my AI apps in action',
  blurb: 'A short recorded walkthrough: who I am, the AI products I build, and live demos of Hifazat and Chatley.ai, narrated end to end.',
  chapters: [
    { label: 'Introduction', note: 'Who I am and how I work' },
    { label: 'My AI apps', note: 'A quick tour of what I have shipped' },
    { label: 'Hifazat walkthrough', note: 'Incident reporting to live crime heatmaps' },
    { label: 'Chatley.ai walkthrough', note: 'AI receptionist that answers, qualifies and books' },
  ],
}

/**
 * Real recommendations only. Copy them from LinkedIn (Profile → Recommendations → Received), word for word,
 * with the recommender's permission to reuse them. The "What people say" section stays hidden while this list is empty.
 *
 * Example shape (do not publish placeholders):
 * { org: 'ForthLogic', kind: 'Professional · Software Engineering', items: [
 *   { name: 'Full Name', headline: 'Their LinkedIn headline', relation: 'Direct manager', text: 'The recommendation, verbatim.', url: 'https://www.linkedin.com/in/…' },
 * ] }
 */
export const recommendations: RecommendationGroup[] = []

export const employers = ['ForthLogic', 'Chatley.ai', 'TechClan', 'upcover', 'ECOM Specialist', 'Internee.pk']

export const metrics = [
  { value: '2+', label: 'years shipping production code' },
  { value: '6', label: 'products live, from AI agents to job matching' },
  { value: '61', label: 'free tools in FileFlip' },
  { value: '100K+', label: 'incidents mapped by Hifazat' },
  { value: '30%', label: 'fewer API errors at Internee.pk' },
]

/** Scrolling ticker under the hero. */
export const ticker = ['Node.js', 'TypeScript', 'React', 'Next.js', 'Express', 'FastAPI', 'Django', 'MongoDB', 'PostgreSQL', 'PostGIS', 'Redis', 'WebSockets', 'Socket.io', 'Flutter', 'Docker', 'AI agents', 'LLMs', 'Tailwind', 'Prisma', 'Vercel']

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
    title: 'Products, from zero to live',
    body: 'Idea, schema, API, interface, tests and deploy. FileFlip, Hirova, Paperly and Notara were built this way, solo, and shipped to real users.',
    proof: 'FileFlip, Hirova, Paperly, Notara',
  },
  {
    title: 'AI agents & automation',
    body: 'Agents that answer, qualify, summarize, match and book, wired into the tools a business already runs on.',
    proof: 'Chatley.ai, Hirova, FileFlip AI tools',
  },
  {
    title: 'APIs & integrations',
    body: 'Secure REST APIs with JWT and role-based access, indexed PostgreSQL or MongoDB, and webhooks to CRMs and calendars that never drop data.',
    proof: 'upcover, GoHighLevel, Cal.com',
  },
  {
    title: 'Real-time experiences',
    body: 'Live chat, presence, notifications and live maps over WebSockets and Socket.io, built to clean up after every disconnect.',
    proof: 'Chatley.ai, Hifazat, Sage Talk',
  },
]

export const process = [
  { title: 'Talk.', body: 'A free 30-minute call to agree the problem, the outcome and how we will measure it.' },
  { title: 'Plan.', body: 'A written scope, timeline and price within 48 hours. No surprises.' },
  { title: 'Build in the open.', body: 'A working link every week, so you can steer early.' },
  { title: 'Ship & hand over.', body: 'Deployed, documented, with the source in your repository.' },
]

export const projects: Project[] = [
  {
    name: 'Sage Talk',
    kind: 'Real-time chat',
    summary: 'WhatsApp-style messaging with online presence, private chats and group rooms on an event-driven Socket.io server.',
    stack: ['Node.js', 'Express', 'Socket.io'],
    links: [{ label: 'Code', url: `${GH}/Real_TimeChat_App` }],
    image: { src: asset('images/sage-talk-opt.jpg'), width: 1100, height: 468, alt: 'Sage Talk chat interface with a conversation list and message thread' },
  },
  {
    name: 'Live Location Tracker',
    kind: 'Real-time maps',
    summary: "GPS positions stream over Socket.io and update on every connected client's Leaflet map, with cleanup on disconnect.",
    stack: ['Node.js', 'Socket.io', 'Leaflet.js'],
    links: [{ label: 'Code', url: `${GH}/real_tracking` }],
    image: { src: asset('images/realtime-opt.jpg'), width: 1100, height: 407, alt: 'Live location tracker showing markers on a map' },
  },
  {
    name: 'Translator',
    kind: 'Web tool',
    summary: 'Responsive translator on the MyMemory API with language swap and copy to clipboard.',
    stack: ['JavaScript', 'REST API', 'HTML/CSS'],
    links: [{ label: 'Code', url: `${GH}/translator` }],
    image: { src: asset('images/translator.png'), width: 684, height: 432, alt: 'Translator tool with source and target language boxes' },
  },
  {
    name: 'Space Dodge',
    kind: 'Arcade game',
    summary: 'Python and Pygame arcade game with progressive difficulty, collision logic and live scoring.',
    stack: ['Python', 'Pygame'],
    links: [{ label: 'Code', url: `${GH}/pygame_space_dodge` }],
    image: { src: asset('images/space-dodge-opt.jpg'), width: 1100, height: 733, alt: 'Space Dodge game screen with a ship avoiding falling objects' },
  },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'FastAPI', 'Django REST', 'REST APIs'] },
  { group: 'Frontend & mobile', items: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'HTML & CSS'] },
  { group: 'Data', items: ['MongoDB', 'PostgreSQL', 'PostGIS', 'Redis', 'Prisma', 'SQLite / Turso'] },
  { group: 'Real-time & integrations', items: ['WebSockets', 'Socket.io', 'Webhooks', 'GoHighLevel', 'Cal.com', 'Calendly', 'Google Calendar'] },
  { group: 'AI', items: ['AI agents', 'LLM integration', 'Claude API', 'Sentiment analysis', 'OCR'] },
  { group: 'Security', items: ['JWT', 'OAuth', 'RBAC', 'Rate limiting', 'Input validation'] },
  { group: 'Practice', items: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Agile', 'Automated testing'] },
]

export const education: Education[] = [
  {
    degree: 'MS Computer Science',
    school: 'FAST National University (FAST-NUCES)',
    place: 'Lahore',
    years: '2025 – 2027',
    status: 'In progress',
    note: 'Studying part-time alongside full-time engineering work.',
    focus: ['Distributed Systems', 'Artificial Intelligence', 'Software Quality Assurance'],
  },
  {
    degree: 'BS Computer Science',
    school: 'University of South Asia',
    place: 'Lahore',
    years: '2021 – 2025',
    status: 'Graduated',
    note: 'CGPA 3.39 / 4.0.',
    capstone: { label: 'Capstone: Hifazat, community safety app', url: `${GH}/Hifazat-FYP` },
  },
]
