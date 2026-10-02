/**
 * Job-description matcher. Recognises technologies in a job post and checks each one
 * against Talha's real experience. Terms he has not used are reported as gaps.
 * Runs entirely in the browser; nothing the visitor pastes is sent anywhere.
 */
export interface SkillEntry {
  name: string
  aliases: string[]
  has: boolean
  /** Where the skill was used, shown to the reader as evidence. */
  where?: string
}

export interface MatchResult {
  score: number
  recognised: number
  matched: { name: string; where: string }[]
  missing: { name: string }[]
  yearsNote: string | null
  verdict: string
}

export const PROFILE_YEARS = 2

export const SKILLS: SkillEntry[] = [
  { name: 'Node.js', aliases: ['node.js', 'nodejs', 'node js', 'node'], has: true, where: 'ForthLogic, TechClan, ECOM Specialist' },
  { name: 'Express', aliases: ['express.js', 'expressjs', 'express'], has: true, where: 'ForthLogic, TechClan' },
  { name: 'JavaScript', aliases: ['javascript', 'es6', 'ecmascript'], has: true, where: 'All roles' },
  { name: 'React', aliases: ['react.js', 'reactjs', 'react'], has: true, where: 'TechClan, ForthLogic' },
  { name: 'MongoDB', aliases: ['mongodb', 'mongo', 'mongoose'], has: true, where: 'Chatley.ai schemas' },
  { name: 'PostgreSQL', aliases: ['postgresql', 'postgres', 'psql'], has: true, where: 'upcover, ECOM Specialist' },
  { name: 'SQL', aliases: ['sql', 'relational database', 'rdbms'], has: true, where: 'PostgreSQL tuning at TechClan' },
  { name: 'PostGIS', aliases: ['postgis', 'geospatial'], has: true, where: 'Hifazat' },
  { name: 'REST APIs', aliases: ['rest api', 'rest apis', 'restful', 'api design', 'apis'], has: true, where: 'Every role' },
  { name: 'WebSockets', aliases: ['websocket', 'websockets', 'real-time', 'realtime', 'real time'], has: true, where: 'Chatley.ai messaging' },
  { name: 'Socket.io', aliases: ['socket.io', 'socketio'], has: true, where: 'Sage Talk, Live Location Tracker' },
  { name: 'JWT / Auth', aliases: ['jwt', 'authentication', 'authorization', 'auth'], has: true, where: 'Chatley.ai, upcover' },
  { name: 'OAuth', aliases: ['oauth', 'oauth2', 'sso'], has: true, where: 'Calendar integrations' },
  { name: 'RBAC', aliases: ['rbac', 'role-based', 'role based access'], has: true, where: 'upcover, Hifazat' },
  { name: 'Webhooks', aliases: ['webhook', 'webhooks'], has: true, where: 'GoHighLevel at ForthLogic' },
  { name: 'CRM integrations', aliases: ['crm', 'gohighlevel', 'hubspot', 'salesforce'], has: true, where: 'GoHighLevel at ForthLogic' },
  { name: 'Third-party APIs', aliases: ['third-party', 'third party', 'integrations', 'integration'], has: true, where: 'Cal.com, Calendly, Google Calendar' },
  { name: 'AI / LLM', aliases: ['llm', 'openai', 'gpt', 'ai agent', 'ai agents', 'generative ai', 'artificial intelligence', 'machine learning', 'ai'], has: true, where: 'Chatley.ai agents' },
  { name: 'Python', aliases: ['python'], has: true, where: 'Hifazat, Space Dodge' },
  { name: 'Django', aliases: ['django', 'drf', 'django rest'], has: true, where: 'Hifazat API' },
  { name: 'Flutter', aliases: ['flutter', 'dart'], has: true, where: 'Hifazat app' },
  { name: 'HTML/CSS', aliases: ['html', 'css', 'html5', 'css3', 'responsive'], has: true, where: 'Frontend work' },
  { name: 'Git', aliases: ['git', 'github', 'gitlab', 'version control'], has: true, where: 'All roles' },
  { name: 'Docker', aliases: ['docker', 'container', 'containers'], has: true, where: 'Tooling' },
  { name: 'CI/CD', aliases: ['ci/cd', 'ci cd', 'continuous integration', 'pipelines', 'github actions'], has: true, where: 'Production deploys' },
  { name: 'Agile / Scrum', aliases: ['agile', 'scrum', 'sprint', 'sprints', 'kanban'], has: true, where: 'TechClan, ForthLogic' },
  { name: 'Testing', aliases: ['unit test', 'unit tests', 'testing', 'jest', 'vitest', 'mocha', 'test suite', 'tdd'], has: true, where: 'Chatley.ai test suite' },
  { name: 'Query optimisation', aliases: ['indexing', 'query optimization', 'query optimisation', 'performance tuning'], has: true, where: 'upcover' },
  { name: 'Microservices', aliases: ['microservice', 'microservices'], has: false },
  { name: 'TypeScript', aliases: ['typescript', 'ts'], has: false },
  { name: 'Next.js', aliases: ['next.js', 'nextjs'], has: false },
  { name: 'NestJS', aliases: ['nestjs', 'nest.js'], has: false },
  { name: 'GraphQL', aliases: ['graphql', 'apollo'], has: false },
  { name: 'Redis', aliases: ['redis'], has: false },
  { name: 'AWS', aliases: ['aws', 'amazon web services', 'lambda', 'ec2', 's3'], has: false },
  { name: 'Azure', aliases: ['azure'], has: false },
  { name: 'GCP', aliases: ['gcp', 'google cloud'], has: false },
  { name: 'Kubernetes', aliases: ['kubernetes', 'k8s'], has: false },
  { name: 'Kafka / queues', aliases: ['kafka', 'rabbitmq', 'message queue', 'sqs'], has: false },
  { name: 'Vue', aliases: ['vue', 'vue.js', 'vuejs'], has: false },
  { name: 'Angular', aliases: ['angular'], has: false },
  { name: 'PHP / Laravel', aliases: ['php', 'laravel'], has: false },
  { name: 'Java / Spring', aliases: ['java', 'spring boot'], has: false },
  { name: '.NET / C#', aliases: ['.net', 'c#', 'asp.net', 'dotnet'], has: false },
  { name: 'Go', aliases: ['golang'], has: false },
  { name: 'MySQL', aliases: ['mysql', 'mariadb'], has: false },
]

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** Word-boundary match that also works for terms like "c#", ".net" and "ci/cd". */
export function contains(text: string, alias: string): boolean {
  return new RegExp(`(^|[^a-z0-9])${escapeRe(alias)}(?=$|[^a-z0-9])`, 'i').test(text)
}

/** First "N years" figure in the text, e.g. "3+ years" -> 3. */
export function yearsAsked(text: string): number | null {
  const m = /(\d{1,2})\s*\+?\s*(?:-|to)?\s*(?:\d{1,2}\s*)?(?:years?|yrs?)/i.exec(text)
  return m ? Number(m[1]) : null
}

export function matchJob(jobDescription: string): MatchResult {
  const text = jobDescription.toLowerCase().slice(0, 20000)
  const matched: MatchResult['matched'] = []
  const missing: MatchResult['missing'] = []
  for (const s of SKILLS) {
    if (!s.aliases.some((a) => contains(text, a))) continue
    if (s.has) matched.push({ name: s.name, where: s.where ?? '' })
    else missing.push({ name: s.name })
  }
  const recognised = matched.length + missing.length
  const score = recognised ? Math.round((matched.length / recognised) * 100) : 0

  const years = yearsAsked(text)
  let yearsNote: string | null = null
  if (years !== null) {
    yearsNote =
      years <= PROFILE_YEARS
        ? `Asks for ${years}+ years. Talha has 2+ years in production.`
        : `Asks for ${years}+ years. Talha has 2+ years, so this is a stretch on experience.`
  }

  let verdict: string
  if (!recognised) verdict = 'No recognised technologies found. Paste the requirements section of the job post.'
  else if (score >= 75) verdict = 'Strong fit on the technical requirements.'
  else if (score >= 50) verdict = 'Good fit on the core stack, with some gaps to discuss.'
  else verdict = 'Partial fit. Several required tools are outside his current experience.'

  return { score, recognised, matched, missing, yearsNote, verdict }
}

export const SAMPLE_JOB_POST = [
  'EXAMPLE JOB POST',
  'Backend / Full Stack Engineer (Node.js), Remote',
  '',
  'Requirements:',
  '- 2+ years building production REST APIs with Node.js and Express',
  '- Strong PostgreSQL or MongoDB experience, including indexing',
  '- Real-time features with WebSockets or Socket.io',
  '- JWT / OAuth authentication and role-based access',
  '- React for internal dashboards',
  '- Comfortable with Git, Docker and CI/CD in an Agile team',
  '',
  'Nice to have: TypeScript, Redis, AWS, experience integrating CRMs and AI/LLM features.',
].join('\n')
