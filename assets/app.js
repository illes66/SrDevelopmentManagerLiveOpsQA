const GOOGLE_SHEET_PUBLISHED_BASE_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5ON09VkHUkQNaQeIJe2vBUzHg1iU_Cy6KeC9rlKXuuxsegXyzJ9x-ENyFVM5b2XAeLRBVFyLwulNH';

function buildPublishedCsvUrl(sheetName) {
  return `${GOOGLE_SHEET_PUBLISHED_BASE_URL}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetName)}`;
}

const REQUIREMENTS_SHEET_CSV_URL = buildPublishedCsvUrl('Experience&SkillsRequirements');
const CORE_RESPONSIBILITIES_SHEET_CSV_URL = buildPublishedCsvUrl('MasterPerformanceOwnership');
const ROLE_ROADMAP_SHEET_CSV_URL = buildPublishedCsvUrl('Role personal Roadmap 1st DRAFT');
const PHASES_SHEET_CSV_URL = buildPublishedCsvUrl('Phases&Goals');

// TODO: If Google stops resolving the sheet-name CSV endpoints above, replace each URL with the
// published tab-specific CSV URL (same spreadsheet, explicit `gid=` for the matching tab).

const LOCAL_REQUIREMENTS_DATA = [
  {
    requirement:
      'LiveOps & Games Experience: Proven track record of managing live-service games on mobile. Strong hands-on experience leading campaigns and events through the entire lifecycle, from initial concept and implementation to testing, release, and live performance monitoring.',
    match: false,
    relatedExperience:
      'Over 6 years Experience Leading Game port Production full cycle for more than 50 titles. Experience Leading Development Production from Pitch to Release, and post launch patches and hotfixes for Ryan Rescue Squad. Development Production from Beta in Steam to console release for Police Simulator: Patrol.',
    company: 'Stage Clear Studios, astragon',
    expertiseLevel: 2,
    expertiseLabel: '2 NoExperience/CertainKnoledge',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'The Power of Influence: A proven track record of driving massive process changes and operational improvements across matrixed organizations without direct line-management authority.',
    match: true,
    relatedExperience:
      'At Stage Clear I was the first producer in the studio. I developed, improved, and grew the internal production process from scratch from a 10 person studio to over 60 persons. At 2K Valencia I led initiatives to improve central documentation, tech research, pipeline documentation, and data analysis on team growth and skills during the transition from a local 3D studio into an international company.',
    company: 'Stage Clear Studios, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Production & Operations Acumen: Strong background in Technical Program Management, Release Engineering, or Technical Production. You understand CI/CD pipelines, build distribution, and deployment risks.',
    match: true,
    relatedExperience:
      'As lead port producer, handling the internal development at Stage Clear Studios and acting as the key publisher-facing counterpart for game submission processes, certification management, and build package submissions.',
    company: 'Stage Clear Studios',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Vendor & Partner Management: Extensive experience collaborating with, evaluating, and maximizing the value of large-scale external partners and vendors.',
    match: true,
    relatedExperience:
      'Extensive experience collaborating with external vendors, managing SLA definitions and alignments, milestone reports, and KPI roadmaps.',
    company: 'astragon, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Systems Thinking: The ability to look at a highly complex, multi-studio ecosystem, identify systemic inefficiencies, and engineer elegant, scalable solutions.',
    match: true,
    relatedExperience:
      'Experience working on highly complex, multi-studio ecosystems, identifying common leverage points, and communicating specific technical risks to non-technical stakeholders.',
    company: 'astragon, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Master Communicator: Exceptional interpersonal skills with the ability to translate technical risks into clear, business-focused narratives for executive leadership.',
    match: true,
    relatedExperience:
      'Wide experience in project ownership from early online communications work through senior producer roles across indie, AA, and AAA studios, handling communication with internal teams, external vendors, first-party partners, and executive stakeholders.',
    company: 'Earlier career, Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'LiveOps Backends & Remote Config: Hands-on experience with systems like Azure PlayFab, Unity Gaming Services, Firebase, or proprietary internal LiveOps dashboards desirable.',
    match: false,
    relatedExperience:
      'Currently updating skills in this area while creating a Unity project designed to run with a LiveOps agenda and Unity plus Firebase backend services.',
    company: 'Independent upskilling project',
    expertiseLevel: 2,
    expertiseLabel: '2 NoExperience/CertainKnoledge',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Analytics & BI Tools: Proficiency with product analytics platforms (Amplitude, Mixpanel, or GameAnalytics) and BI visualization tools (Tableau, Looker, or Excel/Google Sheets) desirable.',
    match: true,
    relatedExperience:
      'Experience in production analytics and BI visualization with Tableau, Looker, and Excel/Google Sheets, including data-analysis and centralization initiatives for General Development Services.',
    company: '2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Production & Operations: Experience managing workflows in JIRA and using build distribution tools (TestFlight, Google Play Console, Firebase App Distribution) desirable.',
    match: true,
    relatedExperience: 'Over 9 years managing different project management methodologies and production workflows.',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Degree level education or equivalent experience.',
    match: true,
    relatedExperience:
      'Bachelor Degree in Advertisement & Public Relations, postgraduate studies in Corporate Identity, and a Master Degree in Video Game Development with Unity, C#, and 3Ds Max.',
    company: 'Universidad Pontificia de Salamanca, CICE Madrid',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Passion for mobile and console/PC games, with proven experience working on games as a live service.',
    match: false,
    relatedExperience:
      'Experience in game development, feature delivery, and legal coordination for Project Ethos (31st Union / 2K), plus release and post-launch support across multiple platforms.',
    company: '2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Experience with LiveOps QA',
    match: false,
    relatedExperience: '',
    company: '',
    expertiseLevel: 2,
    expertiseLabel: '2 NoExperience/CertainKnoledge',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Ability to generate impact and make progress through influence',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Experience managing a portfolio of projects or in a central capacity',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Proven ability to oversee and manage projects with complex setups',
    match: true,
    relatedExperience: '',
    company: '2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Strong accountability in observing deadlines and engagements',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Minimum 5 years of experience in a game development environment with proven experience in management.',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Very strong interpersonal and communication skills (both written and verbally) and ability to collaborate with senior management',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Ability to identify risks and changes needed and to execute solutions, with appropriate sense of urgency.',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Demonstrable decision making capabilities. ',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 1-3 years Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Highly self-motivated with a strong sense of ownership',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Solid understanding of game development pipelines and workflows',
    match: true,
    relatedExperience: '',
    company: 'Stage Clear Studios, astragon, 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 Master Experience',
    improvement: '',
    nextStep: ''
  }
];

const TIMELINE_PHASES = [
  {
    phaseKey: 'Phase 0',
    title: 'Phase 0: Onboarding',
    goal: 'Meet the team and intro to Company tools.',
    duration: '2 weeks',
    dateRange: 'Weeks 1-2',
    startDate: '2026-10-19'
  },
  {
    phaseKey: 'Phase 01',
    title: 'Phase 01: Tech Ramp up',
    goal: 'Autonomy in internal tools.',
    duration: '2 weeks',
    dateRange: 'Weeks 3-4',
    startDate: '2026-11-02'
  },
  {
    phaseKey: 'Phase 02',
    title: 'Phase 02: Operational Autonomy & First Full Cycle',
    goal: 'LiveOps QA delivery.',
    duration: '1 month',
    dateRange: 'Months 2-3',
    startDate: '2026-11-16'
  },
  {
    phaseKey: 'Phase 03',
    title: 'Phase 03: Workflow Optimization & Efficiency',
    goal: 'Full autonomy and efficiency on LiveOps cycles and tools.',
    duration: '3 months',
    dateRange: 'Months 3-6',
    startDate: '2027-01-11'
  },
  {
    phaseKey: 'Phase 04',
    title: 'Phase 04: Strategic Impact, Scalability & Continuous Improvement',
    goal: 'Excellence in LiveOps management, research, improvement, and stakeholder alignment.',
    duration: '6 months',
    dateRange: 'Months 6-12',
    startDate: '2027-03-15'
  }
];

const CORE_RESPONSIBILITIES = [
  { name: 'Drive Strategic Alignment', levels: [1, 1, 2, 2, 3], color: '#2B4C6F' },
  { name: 'End-to-End LiveOps Quality & Performance', levels: [0, 1, 2, 3, 3], color: '#D97757' },
  { name: 'Architect the Release OS', levels: [0, 1, 2, 2, 3], color: '#7A9A8B' },
  { name: 'Influence Without Authority', levels: [1, 1, 2, 2, 3], color: '#4C6F94' },
  { name: 'Optimize External Partnerships', levels: [0, 1, 2, 2, 3], color: '#B5654D' },
  { name: 'Lead Modernization & AI Initiatives', levels: [0, 1, 2, 2, 3], color: '#5E7F70' },
  { name: 'Risk & Root Cause Analysis', levels: [0, 1, 1, 2, 3], color: '#7B91AB' },
  { name: 'Advocate for Operational Excellence', levels: [0, 1, 2, 3, 3], color: '#C67C64' }
];

const LOCAL_TIMELINE_TASKS = [
  {
    phaseKey: 'Phase 0',
    task: 'Meet the team',
    description: 'Meet the team, get to know roles, ownership, tools, and communication procedures.',
    category: 'LiveOpsTeam',
    responsibilities: [
      'End-to-End LiveOps Quality & Performance',
      'Influence Without Authority',
      'Drive Strategic Alignment'
    ],
    subtasks: ['1:1 Marion, Live Ops team: QA, GameEconomyDesign']
  },
  {
    phaseKey: 'Phase 0',
    task: 'Meet stakeholders',
    description: 'Get to know ownership, communication rhythms, and the main internal and external counterparts.',
    category: 'InternalStakeholders, ExternalStakeholders',
    responsibilities: ['Optimize External Partnerships', 'Influence Without Authority'],
    subtasks: ['Intro meetings with team leads, executive producers, and other stakeholders']
  },
  {
    phaseKey: 'Phase 0',
    task: 'Intro to company tools (Jira, Confluence, etc)',
    description: 'Understand internal tools used for communication and documentation.',
    category: 'InternalCommunicationcsChannels',
    responsibilities: ['Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 0',
    task: 'Intro to Playgami',
    description: 'Technical ramp-up on the Playgami ecosystem.',
    category: 'PlaygamiCentralOperations',
    responsibilities: ['Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 0',
    task: 'LiveOps process, tools, and full-cycle intro',
    description:
      'Review the integrated LiveOps workflow, catalogue calendars, design-to-release pipeline, low-code config panels, and CI/CD automation foundations.',
    category: 'LiveOpsMangement',
    responsibilities: ['End-to-End LiveOps Quality & Performance', 'Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 01',
    task: 'Master current workflows and baseline existing quality standards',
    description: '',
    category: '',
    responsibilities: [
      'End-to-End LiveOps Quality & Performance',
      'Lead Modernization & AI Initiatives',
      'Risk & Root Cause Analysis'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 01',
    task: 'Personal onboarding KPIs draft list to present end of month',
    description: '',
    category: 'Management',
    responsibilities: ['Drive Strategic Alignment', 'Advocate for Operational Excellence'],
    subtasks: ['1:1 Marion to work on goals and roadmap']
  },
  {
    phaseKey: 'Phase 01',
    task: 'Playgami full immersion',
    description: '',
    category: 'PlaygamiCentralOperations',
    responsibilities: ['Architect the Release OS', 'Advocate for Operational Excellence'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 01',
    task: 'LiveOps full catalogue calendar, config panels, telemetry, segmentation',
    description:
      'Understand the full catalogue, event calendars, full LiveOps cycle, remote config tools, low-code panels, and CI/CD touchpoints.',
    category: 'LiveOpsMangement',
    responsibilities: ['End-to-End LiveOps Quality & Performance', 'Lead Modernization & AI Initiatives'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 01',
    task: 'Define agenda for meetings, roadmaps, SLAs, and pipeline status review',
    description: '',
    category: 'InternalStakeholders, ExternalStakeholders, Management',
    responsibilities: [
      'Drive Strategic Alignment',
      'Optimize External Partnerships',
      'Influence Without Authority',
      'Risk & Root Cause Analysis'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Take full ownership of daily and weekly LiveOps QA sign-offs',
    description: '',
    category: 'LiveOpsMangement, ProductionOptimization',
    responsibilities: ['End-to-End LiveOps Quality & Performance', 'Lead Modernization & AI Initiatives'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Improve vendor communication, SLAs, timelines, and external-team workflows',
    description: '',
    category: 'InternalStakeholders, ExternalStakeholders, ProductionOptimization',
    responsibilities: ['Optimize External Partnerships', 'Advocate for Operational Excellence'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Direct vendor management for capacity planning and surge coverage',
    description: '',
    category: 'ProductionOptimization',
    responsibilities: ['End-to-End LiveOps Quality & Performance', 'Optimize External Partnerships'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Coordinate with Release Engineering for friction-free deployments',
    description: '',
    category: 'LiveOpsMangement',
    responsibilities: [
      'End-to-End LiveOps Quality & Performance',
      'Architect the Release OS',
      'Advocate for Operational Excellence'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Broaden stakeholder map across Flamed, partner studios, and user acquisition',
    description: '',
    category: 'PlaygamiCentralOperations, InternalCommunicationcsChannels',
    responsibilities: [
      'Lead Modernization & AI Initiatives',
      'Advocate for Operational Excellence',
      'Drive Strategic Alignment'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 02',
    task: 'Review KPIs and OKRs achieved and reschedule as needed',
    description: '',
    category: 'Management',
    responsibilities: ['Drive Strategic Alignment'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Own LiveOps cycles end to end and remove regression bottlenecks',
    description: '',
    category: 'LiveOpsMangement',
    responsibilities: ['End-to-End LiveOps Quality & Performance', 'Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Present new ideas to improve automation and cross-team collaboration',
    description: '',
    category: 'LiveOps Quality & Performance, LiveOpsTeam',
    responsibilities: [
      'Lead Modernization & AI Initiatives',
      'Influence Without Authority',
      'Advocate for Operational Excellence'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Present ideas for new automation tools in current pipelines',
    description: '',
    category: 'LiveOps Quality & Performance',
    responsibilities: ['Advocate for Operational Excellence', 'Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Onboard new studios to LiveOps pipelines and the Playgami environment',
    description: '',
    category: 'Management, LiveOpsMangement',
    responsibilities: ['Optimize External Partnerships'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Refine stakeholder communication, vendor SLAs, KPIs, and escaped defect control',
    description: '',
    category: 'Management, ProductionOptimization, InternalCommunicationcsChannels, InternalStakeholders, ExternalStakeholders',
    responsibilities: ['Optimize External Partnerships'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Run documentation, tech research, and learning-path initiatives',
    description: '',
    category: 'LiveOps Quality & Performance, ProductionOptimization',
    responsibilities: ['Advocate for Operational Excellence', 'Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Review personal growth, KPI achievements, and improvement areas',
    description: '',
    category: 'Management',
    responsibilities: [],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Act as owner of LiveOps development for stakeholders and executive producers',
    description: '',
    category: 'Management, LiveOpsMangement',
    responsibilities: [
      'End-to-End LiveOps Quality & Performance',
      'Advocate for Operational Excellence',
      'Optimize External Partnerships'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 03',
    task: 'Fine-tune Playgami and Flamed alignment so live events and marketing assets stay in sync',
    description: '',
    category: 'InternalCommunicationcsChannels, PlaygamiCentralOperations',
    responsibilities: ['Architect the Release OS', 'Advocate for Operational Excellence'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Standardize scalable QA best practices across studios or product lines',
    description: '',
    category: 'LiveOps Quality & Performance, Management, ExternalStakeholders',
    responsibilities: ['Advocate for Operational Excellence', 'Architect the Release OS'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Onboard new teams',
    description: '',
    category: 'Management',
    responsibilities: ['Influence Without Authority', 'End-to-End LiveOps Quality & Performance'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Team management',
    description: '',
    category: 'LiveOpsTeam, Management',
    responsibilities: ['Influence Without Authority', 'Advocate for Operational Excellence'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Contribute to QA quality strategy and studio-wide vision',
    description: '',
    category: 'LiveOps Quality & Performance, ProductionOptimization',
    responsibilities: [
      'End-to-End LiveOps Quality & Performance',
      'Advocate for Operational Excellence',
      'Architect the Release OS'
    ],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Optimize vendor cost efficiency and global staffing balance',
    description: '',
    category: 'ProductionOptimization, LiveOps Quality & Performance',
    responsibilities: ['Optimize External Partnerships', 'Advocate for Operational Excellence'],
    subtasks: []
  },
  {
    phaseKey: 'Phase 04',
    task: 'Keep researching technology, collaboration, and learning paths for teams',
    description: '',
    category: 'LiveOps Quality & Performance',
    responsibilities: ['Advocate for Operational Excellence', 'Architect the Release OS'],
    subtasks: []
  }
];

const LOCAL_KPI_ITEMS = [
  {
    title: 'Technical Autonomy and Playgami Integration',
    detail: '100% toolchain mapping completed by Month 3.'
  },
  {
    title: 'LiveOps QA Excellence and Escaped Defect Control',
    detail: 'Reduce live incidents by 15% by Month 9.'
  },
  {
    title: 'Cross-Functional Leadership and Vendor Efficiency',
    detail: 'Achieve 100% optimized vendor SLAs by Month 6.'
  }
];

const tabTriggers = Array.from(document.querySelectorAll('[data-tab-trigger]'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
const requirementsAccordion = document.getElementById('requirements-accordion');
const timelineAccordion = document.getElementById('timeline-accordion');
const kpiList = document.getElementById('kpi-list');
const dataStatus = document.getElementById('data-status');
const dataSourceBadge = document.getElementById('data-source-badge');
const expertiseChartNote = document.getElementById('expertise-chart-note');
const timelineStatus = document.getElementById('timeline-status');
const kpiStatus = document.getElementById('kpi-status');

const state = {
  requirements: LOCAL_REQUIREMENTS_DATA,
  dataSource: 'loading',
  timelinePhases: TIMELINE_PHASES,
  timelineTasks: LOCAL_TIMELINE_TASKS,
  coreResponsibilities: CORE_RESPONSIBILITIES,
  kpiItems: LOCAL_KPI_ITEMS,
  roadmapSource: 'loading',
  kpiSource: 'loading',
  activeTimelinePhase: 0
};

let autonomyChart;
let expertiseChart;
let experienceRotatorInterval;

function normalizeHeaderKey(value) {
  return String(value || '')
    .replace(/\uFEFF/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim();
}

function normalizeNameKey(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function parseExpertiseLevel(value) {
  const match = String(value || '')
    .trim()
    .match(/(?:^|[^0-9])([1-5])(?:\s*\/\s*5|\b)/);
  return match ? Number(match[1]) : 0;
}

function parseBoolean(value) {
  if (typeof value === 'boolean') return value;

  const normalized = String(value || '').trim().toLowerCase();
  if (['true', 'yes', 'y', '1', 'match'].includes(normalized)) return true;
  if (['false', 'no', 'n', '0', 'rampup', 'ramp-up'].includes(normalized)) return false;
  return null;
}

function parseCsv(csvText) {
  const rows = [];
  const normalizedText = String(csvText || '').replace(/^\uFEFF/, '');
  let row = [];
  let value = '';
  let inQuotes = false;

  for (let index = 0; index < normalizedText.length; index += 1) {
    const character = normalizedText[index];
    const nextCharacter = normalizedText[index + 1];

    if (inQuotes) {
      if (character === '"') {
        if (nextCharacter === '"') {
          value += '"';
          index += 1;
        } else {
          inQuotes = false;
        }
      } else {
        value += character;
      }
      continue;
    }

    if (character === '"') {
      inQuotes = true;
      continue;
    }

    if (character === ',') {
      row.push(value);
      value = '';
      continue;
    }

    if (character === '\n' || character === '\r') {
      if (character === '\r' && nextCharacter === '\n') {
        index += 1;
      }
      row.push(value);
      rows.push(row);
      row = [];
      value = '';
      continue;
    }

    value += character;
  }

  row.push(value);
  if (row.some((cell) => String(cell || '').trim() !== '')) {
    rows.push(row);
  }

  return rows.filter((currentRow) => currentRow.some((cell) => String(cell || '').trim() !== ''));
}

function getHeaderIndex(headerMap, aliases) {
  for (const alias of aliases) {
    const index = headerMap.get(normalizeHeaderKey(alias));
    if (typeof index === 'number') {
      return index;
    }
  }

  return -1;
}

function findMatchColumnIndex(headers, rows, headerMap) {
  const explicitMatchIndex = getHeaderIndex(headerMap, ['Match', 'Matched', 'Is Match', 'Requirement Match']);
  if (explicitMatchIndex >= 0) return explicitMatchIndex;

  const blankHeaderIndexes = headers
    .map((header, index) => ({ header, index }))
    .filter(({ header }) => normalizeHeaderKey(header) === '')
    .map(({ index }) => index);

  const blankMatchIndex = blankHeaderIndexes.find((index) =>
    rows.some((row) => parseBoolean(row[index]) !== null && String(row[index]).trim() !== '')
  );
  if (typeof blankMatchIndex === 'number') return blankMatchIndex;

  return headers.findIndex((_, index) =>
    rows.some((row) => parseBoolean(row[index]) !== null && String(row[index]).trim() !== '')
  );
}

function normalizeRequirementsData(rows) {
  if (!Array.isArray(rows) || rows.length < 2) {
    return [];
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.reduce((map, header, index) => {
    map.set(normalizeHeaderKey(header), index);
    return map;
  }, new Map());

  const matchIndex = findMatchColumnIndex(headers, dataRows, headerMap);
  const requirementIndex = getHeaderIndex(headerMap, [
    'WhatScopelyIsLookingFor',
    'What Scopely Is Looking For',
    'Requirement',
    'Requirements',
    'Scopely Requirement'
  ]);
  const relatedExperienceIndex = getHeaderIndex(headerMap, [
    'Description or Related Experience',
    'Description / Related Experience',
    'Description',
    'Related Experience',
    'Experience'
  ]);
  const companyIndex = getHeaderIndex(headerMap, ['Company', 'Company / Context', 'Context']);
  const expertiseIndex = getHeaderIndex(headerMap, [
    'Level of Expertise 1/5',
    'Level of Expertise (1/5)',
    'Level of Expertise',
    'Expertise Level',
    'Level'
  ]);
  const improvementIndex = getHeaderIndex(headerMap, [
    'Aspect To be Improved',
    'Aspect to be Improved',
    'Area for Improvement',
    'Improvement'
  ]);
  const nextStepIndex = getHeaderIndex(headerMap, [
    'Next step to improve',
    'Next Step to Improve',
    'Next Step',
    'Next Action'
  ]);

  if (requirementIndex < 0) {
    return [];
  }

  return dataRows
    .map((row) => {
      const requirement = String(row[requirementIndex] || '').trim();
      if (!requirement) return null;

      const expertiseLabel = expertiseIndex >= 0 ? String(row[expertiseIndex] || '').trim() : '';
      const parsedMatch = matchIndex >= 0 ? parseBoolean(row[matchIndex]) : null;

      return {
        requirement,
        match: parsedMatch === null ? false : parsedMatch,
        relatedExperience: relatedExperienceIndex >= 0 ? String(row[relatedExperienceIndex] || '').trim() : '',
        company: companyIndex >= 0 ? String(row[companyIndex] || '').trim() : '',
        expertiseLevel: parseExpertiseLevel(expertiseLabel),
        expertiseLabel: expertiseLabel || `${parseExpertiseLevel(expertiseLabel)} / 5`,
        improvement: improvementIndex >= 0 ? String(row[improvementIndex] || '').trim() : '',
        nextStep: nextStepIndex >= 0 ? String(row[nextStepIndex] || '').trim() : ''
      };
    })
    .filter(Boolean);
}

function normalizeTimelinePhases(rows) {
  if (!Array.isArray(rows) || rows.length < 2) {
    return [];
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.reduce((map, header, index) => {
    map.set(normalizeHeaderKey(header), index);
    return map;
  }, new Map());

  const phaseKeyIndex = getHeaderIndex(headerMap, ['Phase', 'Phase Code']);
  const titleIndex = getHeaderIndex(headerMap, ['Phase Name', 'Title']);
  const goalIndex = getHeaderIndex(headerMap, ['Main Goal', 'Goal']);
  const durationIndex = getHeaderIndex(headerMap, ['Expected Duration', 'Expecetd Duration', 'Duration']);
  const whenIndex = getHeaderIndex(headerMap, ['When', 'Date Range', 'Months']);
  const startDateIndex = getHeaderIndex(headerMap, ['Expected Starting Date', 'Start Date']);

  if (phaseKeyIndex < 0) {
    return [];
  }

  return dataRows
    .map((row) => {
      const phaseKey = String(row[phaseKeyIndex] || '').trim();
      if (!phaseKey) return null;

      return {
        phaseKey,
        title: String(row[titleIndex] || phaseKey).trim(),
        goal: String(row[goalIndex] || '').replace(/^Main Goals?:\s*/i, '').trim(),
        duration: String(row[durationIndex] || '').trim(),
        dateRange: String(row[whenIndex] || '').trim(),
        startDate: String(row[startDateIndex] || '').trim()
      };
    })
    .filter(Boolean);
}

function normalizeResponsibilityList(value) {
  return String(value || '')
    .split(',')
    .map((entry) => entry.replace(/:+$/g, '').trim())
    .filter(Boolean);
}

function normalizeRoadmapTasks(rows) {
  if (!Array.isArray(rows) || rows.length < 2) {
    return [];
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.reduce((map, header, index) => {
    map.set(normalizeHeaderKey(header), index);
    return map;
  }, new Map());

  const phaseIndex = getHeaderIndex(headerMap, ['Phase']);
  const taskIndex = getHeaderIndex(headerMap, ['Task', 'Tasks']);
  const descriptionIndex = getHeaderIndex(headerMap, ['Description']);
  const categoryIndex = getHeaderIndex(headerMap, ['Category']);
  const responsibilityIndex = getHeaderIndex(headerMap, ['CoreResponsability Related', 'Core Responsibility Related']);
  const subtasksIndex = getHeaderIndex(headerMap, ['Subtasks']);

  if (phaseIndex < 0 || taskIndex < 0) {
    return [];
  }

  let currentPhase = '';

  return dataRows
    .map((row) => {
      const explicitPhase = String(row[phaseIndex] || '').trim();
      if (explicitPhase) currentPhase = explicitPhase;

      const task = String(row[taskIndex] || '').trim();
      if (!task || !currentPhase) return null;

      return {
        phaseKey: currentPhase,
        task,
        description: descriptionIndex >= 0 ? String(row[descriptionIndex] || '').trim() : '',
        category: categoryIndex >= 0 ? String(row[categoryIndex] || '').trim() : '',
        responsibilities:
          responsibilityIndex >= 0 ? normalizeResponsibilityList(row[responsibilityIndex]) : [],
        subtasks: subtasksIndex >= 0 ? normalizeResponsibilityList(row[subtasksIndex]) : []
      };
    })
    .filter(Boolean);
}

function mergeCoreResponsibilities(items) {
  const fallbackMap = CORE_RESPONSIBILITIES.reduce((map, item, index) => {
    map.set(normalizeNameKey(item.name), { ...item, fallbackIndex: index });
    return map;
  }, new Map());

  const merged = items
    .map((item, index) => {
      const fallback = fallbackMap.get(normalizeNameKey(item.name));
      return {
        name: item.name,
        levels: fallback?.levels || [0, 1, 2, 2, 3],
        color: fallback?.color || CORE_RESPONSIBILITIES[index % CORE_RESPONSIBILITIES.length].color
      };
    })
    .filter((item) => item.name);

  return merged.length ? merged : CORE_RESPONSIBILITIES;
}

function normalizeCoreResponsibilities(rows) {
  if (!Array.isArray(rows) || rows.length < 2) {
    return [];
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.reduce((map, header, index) => {
    map.set(normalizeHeaderKey(header), index);
    return map;
  }, new Map());

  const responsibilityIndex = getHeaderIndex(headerMap, [
    'CoreResponsabilities',
    'CoreResponsibilities',
    'Core Responsibilities',
    'Core Responsibility'
  ]);

  if (responsibilityIndex < 0) {
    return [];
  }

  return mergeCoreResponsibilities(
    dataRows
      .map((row) => ({ name: String(row[responsibilityIndex] || '').trim() }))
      .filter((item) => item.name)
  );
}

function createElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  if (typeof text === 'string') element.textContent = text;
  return element;
}

function createFieldBlock(label, value) {
  const wrapper = createElement('div', 'space-y-1');
  const labelElement = createElement(
    'p',
    'text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-secondary',
    label
  );
  const valueElement = createElement('p', 'text-sm leading-6 text-brand-text', value);
  wrapper.append(labelElement, valueElement);
  return wrapper;
}

function createStatusPill(text, match) {
  return createElement(
    'span',
    `inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
      match ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
    }`,
    text
  );
}

function updateSectionText(element, source, messages) {
  if (!element) return;

  element.textContent = messages[source] || messages.fallback;
  element.className =
    source === 'live'
      ? 'mt-2 text-sm text-brand-text'
      : source === 'mixed'
        ? 'mt-2 text-sm text-amber-700'
        : source === 'fallback'
          ? 'mt-2 text-sm text-amber-700'
          : 'mt-2 text-sm text-brand-text';
}

function updateDataState(source, message) {
  state.dataSource = source;

  if (dataStatus) {
    dataStatus.textContent = message;
    dataStatus.className =
      source === 'fallback' ? 'mt-2 text-sm text-amber-700' : 'mt-2 text-sm text-brand-text';
  }

  if (dataSourceBadge) {
    dataSourceBadge.textContent =
      source === 'live' ? 'Live sheet data' : source === 'fallback' ? 'Local fallback data' : 'Loading data';
    dataSourceBadge.className =
      source === 'fallback'
        ? 'inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700'
        : source === 'live'
          ? 'inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700'
          : 'inline-flex items-center rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-primary';
  }

  if (expertiseChartNote) {
    expertiseChartNote.textContent =
      source === 'live'
        ? 'This chart is powered by the live requirements sheet.'
        : source === 'fallback'
          ? 'This chart is using the local fallback mirror of the requirements sheet.'
          : 'Loading the live requirements sheet.';
  }
}

function updateRoadmapState(source) {
  state.roadmapSource = source;
  updateSectionText(timelineStatus, source, {
    loading: 'Loading roadmap phases and tasks from the live Google Sheet…',
    live: 'Roadmap phases and tasks loaded from the live Google Sheet.',
    mixed: 'Roadmap is using live phase data with local fallback tasks where needed.',
    fallback: 'Roadmap is using the local fallback data because the live roadmap tabs could not be fully loaded.'
  });
}

function updateKpiState(source) {
  state.kpiSource = source;
  updateSectionText(kpiStatus, source, {
    loading: 'Loading KPI/OKR focus areas from the live Google Sheet…',
    live: 'KPI/OKR focus areas loaded from the live Google Sheet.',
    fallback: 'KPI/OKR cards are using the local fallback set because the live core responsibilities tab could not be loaded.'
  });
}

function renderRequirementsAccordion(items) {
  if (!requirementsAccordion) return;

  requirementsAccordion.replaceChildren();

  items.forEach((item, index) => {
    const details = createElement('details', 'rounded-xl border border-brand-primary/15 bg-brand-bg p-4');
    if (index === 0) details.open = true;

    const summary = createElement(
      'summary',
      'focusable cursor-pointer list-none text-sm font-semibold text-brand-primary'
    );
    summary.setAttribute('aria-label', `Toggle requirement details for ${item.requirement}`);

    const summaryContent = createElement('span', 'inline-flex items-center gap-2');
    const summaryIcon = createElement('i', 'h-4 w-4 text-brand-secondary');
    summaryIcon.setAttribute('data-lucide', 'chevron-right');
    const summaryText = createElement('span', '', item.requirement);
    summaryContent.append(summaryIcon, summaryText);
    summary.append(summaryContent);

    const content = createElement('div', 'mt-4 space-y-4');
    const metaRow = createElement('div', 'flex flex-wrap gap-2');
    metaRow.append(
      createStatusPill(item.match ? 'Match' : 'Ramp-up', item.match),
      createStatusPill(`Expertise ${item.expertiseLevel || 0} / 5`, true)
    );

    const fieldsGrid = createElement('div', 'grid gap-4 sm:grid-cols-2');
    fieldsGrid.append(
      createFieldBlock('Related Experience', item.relatedExperience || 'No related experience was provided.'),
      createFieldBlock('Company / Context', item.company || 'Not specified in the source data.')
    );

    content.append(metaRow, fieldsGrid);

    if (item.improvement) {
      content.append(createFieldBlock('Area for Improvement', item.improvement));
    }

    if (item.nextStep) {
      content.append(createFieldBlock('Next Step', item.nextStep));
    }

    details.append(summary, content);
    requirementsAccordion.append(details);
  });

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function getResponsibilityLevelLabel(responsibility, phaseIndex) {
  const level = responsibility.levels[phaseIndex] ?? 0;
  return `Level ${level} / 3`;
}

function groupTasksByResponsibility(tasks) {
  const grouped = new Map();

  tasks.forEach((task) => {
    const names = task.responsibilities.length ? task.responsibilities : ['General roadmap tasks'];
    names.forEach((name) => {
      if (!grouped.has(name)) grouped.set(name, []);
      grouped.get(name).push(task);
    });
  });

  return grouped;
}

function getTimelineButtonClasses(active) {
  return `focusable flex h-full flex-col items-start rounded-2xl border px-4 py-4 text-left transition ${
    active
      ? 'border-brand-primary bg-brand-primary text-white shadow-sm'
      : 'border-brand-primary/15 bg-brand-bg text-brand-primary hover:bg-brand-primary/10'
  }`;
}

function renderTimelineAccordion(phases, tasks, responsibilities) {
  if (!timelineAccordion) return;

  timelineAccordion.replaceChildren();

  const safePhaseIndex = Math.min(state.activeTimelinePhase, Math.max(phases.length - 1, 0));
  state.activeTimelinePhase = safePhaseIndex;

  const tablist = createElement('div', 'grid gap-3 xl:grid-cols-5');
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', 'Interactive roadmap timeline phases');

  phases.forEach((phase, index) => {
    const button = createElement('button', getTimelineButtonClasses(index === safePhaseIndex));
    button.type = 'button';
    button.id = `timeline-tab-${index}`;
    button.dataset.timelineIndex = String(index);
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', String(index === safePhaseIndex));
    button.setAttribute('aria-controls', `timeline-panel-${index}`);
    button.tabIndex = index === safePhaseIndex ? 0 : -1;

    const eyebrow = createElement(
      'span',
      `text-xs font-semibold uppercase tracking-[0.18em] ${index === safePhaseIndex ? 'text-white/80' : 'text-brand-secondary'}`,
      phase.phaseKey
    );
    const title = createElement('span', 'mt-2 text-sm font-semibold', phase.title);
    const date = createElement(
      'span',
      `mt-2 text-xs ${index === safePhaseIndex ? 'text-white/80' : 'text-brand-text'}`,
      `${phase.dateRange || 'Date range TBD'} • ${phase.duration || 'Duration TBD'}`
    );
    button.append(eyebrow, title, date);
    tablist.append(button);
  });

  const activePhase = phases[safePhaseIndex];
  const activeTasks = tasks.filter((task) => task.phaseKey === activePhase.phaseKey);
  const tasksByResponsibility = groupTasksByResponsibility(activeTasks);

  const panel = createElement('section', 'mt-6 rounded-3xl border border-brand-primary/15 bg-brand-bg p-5');
  panel.id = `timeline-panel-${safePhaseIndex}`;
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', `timeline-tab-${safePhaseIndex}`);

  const topGrid = createElement('div', 'grid gap-4 lg:grid-cols-[0.9fr_1.1fr]');

  const overview = createElement('div', 'rounded-2xl border border-brand-primary/15 bg-white p-4');
  overview.append(
    createElement(
      'p',
      'text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-secondary',
      'Phase goal'
    ),
    createElement('p', 'mt-2 text-sm leading-6 text-brand-text', activePhase.goal || 'Goal to be confirmed.'),
    createElement(
      'p',
      'mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brand-secondary',
      'Timing'
    ),
    createElement(
      'p',
      'mt-2 text-sm leading-6 text-brand-text',
      `${activePhase.dateRange || 'Date range TBD'} • starts ${activePhase.startDate || 'TBD'} • ${activePhase.duration || 'Duration TBD'}`
    )
  );

  const autonomyGrid = createElement('div', 'grid gap-3 sm:grid-cols-2');
  responsibilities.forEach((responsibility) => {
    const card = createElement('article', 'rounded-2xl border border-brand-primary/15 bg-white p-4');
    card.append(
      createElement('p', 'text-sm font-semibold text-brand-primary', responsibility.name),
      createElement('p', 'mt-2 text-sm text-brand-text', getResponsibilityLevelLabel(responsibility, safePhaseIndex))
    );
    autonomyGrid.append(card);
  });

  topGrid.append(overview, autonomyGrid);
  panel.append(topGrid);

  const tasksSection = createElement('div', 'mt-6 space-y-4');
  tasksSection.append(
    createElement(
      'h3',
      'text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary',
      'Tasks by core responsibility'
    )
  );

  if (!tasksByResponsibility.size) {
    tasksSection.append(
      createElement(
        'p',
        'rounded-2xl border border-dashed border-brand-primary/20 bg-white p-4 text-sm leading-6 text-brand-text',
        'No roadmap tasks are currently mapped to this phase in the source sheet.'
      )
    );
  } else {
    Array.from(tasksByResponsibility.entries()).forEach(([name, groupedTasks]) => {
      const responsibilityCard = createElement('article', 'rounded-2xl border border-brand-primary/15 bg-white p-4');
      const responsibilityMeta = responsibilities.find(
        (responsibility) => normalizeNameKey(responsibility.name) === normalizeNameKey(name)
      );
      responsibilityCard.append(
        createElement('p', 'text-sm font-semibold text-brand-primary', name),
        createElement(
          'p',
          'mt-1 text-xs font-medium uppercase tracking-[0.18em] text-brand-secondary',
          responsibilityMeta ? getResponsibilityLevelLabel(responsibilityMeta, safePhaseIndex) : 'Roadmap focus area'
        )
      );

      const list = createElement('ul', 'mt-3 space-y-3');
      groupedTasks.forEach((task) => {
        const item = createElement('li', 'rounded-xl border border-brand-primary/10 bg-brand-bg p-3');
        item.append(createElement('p', 'text-sm font-semibold text-brand-primary', task.task));
        if (task.description) {
          item.append(createElement('p', 'mt-2 text-sm leading-6 text-brand-text', task.description));
        }
        if (task.subtasks.length) {
          item.append(
            createElement('p', 'mt-2 text-xs font-medium uppercase tracking-[0.18em] text-brand-secondary', 'Subtasks')
          );
          const subtasks = createElement('ul', 'mt-2 list-disc space-y-1 pl-5 text-sm text-brand-text');
          task.subtasks.forEach((subtask) => {
            subtasks.append(createElement('li', '', subtask));
          });
          item.append(subtasks);
        }
        list.append(item);
      });

      responsibilityCard.append(list);
      tasksSection.append(responsibilityCard);
    });
  }

  panel.append(tasksSection);
  timelineAccordion.append(tablist, panel);

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function getKpiDetail(responsibility) {
  const firstLevelThreeIndex = responsibility.levels.findIndex((level) => level === 3);
  const firstLevelThreePhase =
    firstLevelThreeIndex >= 0
      ? state.timelinePhases[firstLevelThreeIndex]?.phaseKey || `Phase ${firstLevelThreeIndex}`
      : 'the roadmap horizon';
  return `Target this responsibility to reach ${getResponsibilityLevelLabel(
    responsibility,
    Math.max(firstLevelThreeIndex, 0)
  )} by ${firstLevelThreePhase}.`;
}

function renderKpiCards(items, source) {
  if (!kpiList) return;

  kpiList.replaceChildren();

  items.forEach((item) => {
    const card = createElement('article', 'rounded-2xl border border-[var(--card-border)] bg-brand-bg p-4');
    const title = createElement('h3', 'font-semibold text-brand-primary', item.title || item.name);
    const detail = createElement(
      'p',
      'mt-2 text-sm text-brand-text',
      item.detail || getKpiDetail(item)
    );
    card.append(title, detail);
    kpiList.append(card);
  });

  updateKpiState(source);
}

function wrapLabel(text, maxLineLength = 40) {
  const words = String(text || '').split(' ');
  const lines = [];
  let currentLine = '';

  words.forEach((word) => {
    const nextLine = currentLine ? `${currentLine} ${word}` : word;
    if (nextLine.length > maxLineLength && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = nextLine;
    }
  });

  if (currentLine) lines.push(currentLine);
  return lines.length ? lines : [''];
}

function getAutonomyChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'nearest',
      intersect: false
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          color: '#2D3748'
        }
      },
      tooltip: {
        callbacks: {
          label(context) {
            return `${context.dataset.label}: Autonomy Level ${context.parsed.y}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(43, 76, 111, 0.08)' },
        ticks: { color: '#2D3748' }
      },
      y: {
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
          color: '#2D3748',
          callback(value) {
            return `Level ${value}`;
          }
        },
        grid: { color: 'rgba(43, 76, 111, 0.08)' }
      }
    }
  };
}

function getExpertiseChartOptions(items) {
  return {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          color: '#2D3748'
        }
      },
      tooltip: {
        callbacks: {
          title(context) {
            return items[context[0].dataIndex]?.requirement || '';
          },
          label(context) {
            return `Expertise Level: ${context.parsed.x} / 5`;
          },
          afterLabel(context) {
            const item = items[context.dataIndex];
            return `Status: ${item?.match ? 'Match' : 'Ramp-up'}`;
          }
        }
      }
    },
    scales: {
      x: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
          color: '#2D3748'
        },
        title: {
          display: true,
          text: 'Expertise Level (1–5)',
          color: '#2D3748'
        },
        grid: { color: 'rgba(43, 76, 111, 0.08)' }
      },
      y: {
        ticks: { color: '#2D3748' },
        grid: { display: false }
      }
    }
  };
}

function renderAutonomyChart() {
  const canvas = document.getElementById('autonomy-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  const data = {
    labels: state.timelinePhases.map((phase) => phase.phaseKey),
    datasets: state.coreResponsibilities.map((item) => ({
      label: item.name,
      data: item.levels,
      borderColor: item.color,
      backgroundColor: item.color,
      tension: 0.3,
      pointRadius: 3,
      pointHoverRadius: 5,
      borderWidth: 2
    }))
  };

  if (!autonomyChart) {
    autonomyChart = new Chart(canvas, {
      type: 'line',
      data,
      options: getAutonomyChartOptions()
    });
    return;
  }

  autonomyChart.data = data;
  autonomyChart.options = getAutonomyChartOptions();
  autonomyChart.update('none');
}

function renderExpertiseChart(items) {
  const canvas = document.getElementById('expertise-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  if (canvas.parentElement?.style) {
    canvas.parentElement.style.height = `${Math.max(items.length * 42, 448)}px`;
  }

  const data = {
    labels: items.map((item) => wrapLabel(item.requirement)),
    datasets: [
      {
        label: state.dataSource === 'live' ? 'Live requirements data' : 'Local fallback data',
        data: items.map((item) => item.expertiseLevel || 0),
        borderRadius: 999,
        borderSkipped: false,
        backgroundColor: items.map((item) =>
          item.match ? 'rgba(122, 154, 139, 0.85)' : 'rgba(217, 119, 87, 0.85)'
        ),
        hoverBackgroundColor: items.map((item) => (item.match ? '#7A9A8B' : '#D97757'))
      }
    ]
  };

  if (!expertiseChart) {
    expertiseChart = new Chart(canvas, {
      type: 'bar',
      data,
      options: getExpertiseChartOptions(items)
    });
    return;
  }

  expertiseChart.data = data;
  expertiseChart.options = getExpertiseChartOptions(items);
  expertiseChart.update('none');
}

function warnSheetFallback(sectionName, error) {
  const message = error instanceof Error ? error.message : String(error || 'Unknown error');
  console.warn(`[live-sheet] ${sectionName}: ${message}`);
}

async function fetchCsvRows(url) {
  const response = await fetch(url, { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const csvText = await response.text();
  const rows = parseCsv(csvText);
  if (!rows.length) {
    throw new Error('The sheet returned an empty CSV response.');
  }

  return rows;
}

async function loadSheetData({ sectionName, url, normalize, fallbackData }) {
  try {
    const rows = await fetchCsvRows(url);
    const data = normalize(rows);
    if (!data.length) {
      throw new Error('The sheet structure did not contain any usable rows.');
    }

    return { data, source: 'live' };
  } catch (error) {
    warnSheetFallback(sectionName, error);
    return { data: fallbackData, source: 'fallback' };
  }
}

async function loadRequirementsData() {
  updateDataState('loading', 'Loading live requirements data from Google Sheets…');

  const result = await loadSheetData({
    sectionName: 'requirements',
    url: REQUIREMENTS_SHEET_CSV_URL,
    normalize: normalizeRequirementsData,
    fallbackData: LOCAL_REQUIREMENTS_DATA
  });

  state.requirements = result.data;
  updateDataState(
    result.source,
    result.source === 'live'
      ? 'Requirements loaded from the live Google Sheet.'
      : 'Using the local fallback mirror because the live requirements sheet could not be parsed.'
  );

  renderRequirementsAccordion(state.requirements);
  renderVisibleCharts();
  return result;
}

function getCombinedRoadmapSource(phaseSource, taskSource) {
  if (phaseSource === 'live' && taskSource === 'live') return 'live';
  if (phaseSource === 'fallback' && taskSource === 'fallback') return 'fallback';
  return 'mixed';
}

async function loadNextStepsData() {
  updateRoadmapState('loading');
  updateKpiState('loading');

  const [phaseResult, taskResult, responsibilityResult] = await Promise.all([
    loadSheetData({
      sectionName: 'phases',
      url: PHASES_SHEET_CSV_URL,
      normalize: normalizeTimelinePhases,
      fallbackData: TIMELINE_PHASES
    }),
    loadSheetData({
      sectionName: 'roadmap tasks',
      url: ROLE_ROADMAP_SHEET_CSV_URL,
      normalize: normalizeRoadmapTasks,
      fallbackData: LOCAL_TIMELINE_TASKS
    }),
    loadSheetData({
      sectionName: 'core responsibilities',
      url: CORE_RESPONSIBILITIES_SHEET_CSV_URL,
      normalize: normalizeCoreResponsibilities,
      fallbackData: CORE_RESPONSIBILITIES
    })
  ]);

  state.timelinePhases = phaseResult.data;
  state.timelineTasks = taskResult.data;
  state.coreResponsibilities = responsibilityResult.data;
  state.kpiItems =
    responsibilityResult.source === 'live'
      ? state.coreResponsibilities.map((responsibility) => ({
          title: responsibility.name,
          detail: getKpiDetail(responsibility)
        }))
      : LOCAL_KPI_ITEMS;

  updateRoadmapState(getCombinedRoadmapSource(phaseResult.source, taskResult.source));
  renderTimelineAccordion(state.timelinePhases, state.timelineTasks, state.coreResponsibilities);
  renderKpiCards(state.kpiItems, responsibilityResult.source);
  renderVisibleCharts();

  return {
    phases: phaseResult,
    tasks: taskResult,
    responsibilities: responsibilityResult
  };
}

function styleTab(trigger, active) {
  trigger.setAttribute('aria-selected', String(active));
  trigger.tabIndex = active ? 0 : -1;
  trigger.classList.toggle('bg-brand-primary', active);
  trigger.classList.toggle('text-white', active);
  trigger.classList.toggle('bg-white', !active);
  trigger.classList.toggle('text-brand-primary', !active);
}

function renderVisibleCharts() {
  const homePanel = document.getElementById('panel-home');
  const nextStepsPanel = document.getElementById('panel-next-steps');

  if (homePanel?.dataset.active === 'true') {
    requestAnimationFrame(() => {
      renderExpertiseChart(state.requirements);
      setTimeout(() => expertiseChart && expertiseChart.resize(), 60);
    });
  }

  if (nextStepsPanel?.dataset.active === 'true') {
    requestAnimationFrame(() => {
      renderAutonomyChart();
      setTimeout(() => autonomyChart && autonomyChart.resize(), 60);
    });
  }
}

function activateTab(tabId) {
  tabPanels.forEach((panel) => {
    panel.dataset.active = String(panel.id === `panel-${tabId}`);
  });

  tabTriggers.forEach((trigger) => {
    const active = trigger.dataset.tabTrigger === tabId;
    styleTab(trigger, active);
  });

  renderVisibleCharts();
}

function activateTimelinePhase(index) {
  state.activeTimelinePhase = index;
  renderTimelineAccordion(state.timelinePhases, state.timelineTasks, state.coreResponsibilities);
}

function registerTabEvents() {
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => activateTab(trigger.dataset.tabTrigger));
  });

  document.getElementById('main-tablist')?.addEventListener('keydown', (event) => {
    const current = document.activeElement;
    if (!current?.matches('[data-tab-trigger]')) return;

    const index = tabTriggers.indexOf(current);
    if (index === -1) return;

    let targetIndex = index;
    if (event.key === 'ArrowRight') targetIndex = (index + 1) % tabTriggers.length;
    if (event.key === 'ArrowLeft') targetIndex = (index - 1 + tabTriggers.length) % tabTriggers.length;
    if (event.key === 'Home') targetIndex = 0;
    if (event.key === 'End') targetIndex = tabTriggers.length - 1;

    if (targetIndex !== index) {
      event.preventDefault();
      tabTriggers[targetIndex].focus();
      activateTab(tabTriggers[targetIndex].dataset.tabTrigger);
    }
  });
}

function registerTimelineEvents() {
  timelineAccordion?.addEventListener('click', (event) => {
    const target =
      event.target && typeof event.target.closest === 'function'
        ? event.target
        : event.target?.parentElement && typeof event.target.parentElement.closest === 'function'
          ? event.target.parentElement
          : null;
    const trigger = target?.closest('[data-timeline-index]');
    if (!trigger) return;

    activateTimelinePhase(Number(trigger.dataset.timelineIndex));
  });

  timelineAccordion?.addEventListener('keydown', (event) => {
    const tabs = Array.from(timelineAccordion.querySelectorAll('[data-timeline-index]'));
    const current = document.activeElement;
    const index = tabs.indexOf(current);
    if (index === -1) return;

    let targetIndex = index;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') targetIndex = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') targetIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') targetIndex = 0;
    if (event.key === 'End') targetIndex = tabs.length - 1;

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateTimelinePhase(index);
      return;
    }

    if (targetIndex !== index) {
      event.preventDefault();
      tabs[targetIndex].focus();
      activateTimelinePhase(targetIndex);
    }
  });
}

function registerPlaceholderLinks() {
  document.querySelectorAll('[data-placeholder-link="true"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });
}

function initFadeIn() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.fade-in').forEach((item) => observer.observe(item));
}

function initSelectedExperienceRotator() {
  const cards = Array.from(document.querySelectorAll('[data-rotating-experience]'));
  if (!cards.length) return;

  const container = document.getElementById('selected-experience-rotator');
  const toggleButton = document.getElementById('experience-rotation-toggle');

  if (container) {
    cards.forEach((card) => {
      card.style.position = 'static';
      card.style.inset = 'auto';
      card.style.visibility = 'hidden';
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
    });

    const maxHeight = cards.reduce((height, card) => Math.max(height, card.offsetHeight || card.scrollHeight || 0), 0);

    cards.forEach((card) => {
      card.style.position = '';
      card.style.inset = '';
      card.style.visibility = '';
      card.style.opacity = '';
      card.style.pointerEvents = '';
    });

    if (maxHeight) container.style.minHeight = `${maxHeight}px`;
  }

  let activeIndex = 0;
  let paused = false;

  function renderActiveCard() {
    cards.forEach((card, index) => {
      const active = index === activeIndex;
      card.classList.toggle('is-visible', active);
      card.setAttribute('aria-hidden', String(!active));
    });
  }

  function stopRotation() {
    if (experienceRotatorInterval) {
      clearInterval(experienceRotatorInterval);
      experienceRotatorInterval = undefined;
    }
  }

  function startRotation() {
    stopRotation();
    if (paused || cards.length < 2) return;

    experienceRotatorInterval = setInterval(() => {
      activeIndex = (activeIndex + 1) % cards.length;
      renderActiveCard();
    }, 5000);
  }

  renderActiveCard();
  startRotation();

  toggleButton?.addEventListener('click', () => {
    paused = !paused;
    toggleButton.textContent = paused ? 'Resume rotation' : 'Pause rotation';
    toggleButton.setAttribute('aria-pressed', String(paused));

    if (paused) {
      stopRotation();
      return;
    }

    startRotation();
  });
}

function init() {
  renderRequirementsAccordion(state.requirements);
  renderTimelineAccordion(state.timelinePhases, state.timelineTasks, state.coreResponsibilities);
  renderKpiCards(state.kpiItems, 'loading');
  registerTabEvents();
  registerTimelineEvents();
  registerPlaceholderLinks();
  initFadeIn();
  initSelectedExperienceRotator();
  activateTab('home');
  loadRequirementsData();
  loadNextStepsData();

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

window.addEventListener('DOMContentLoaded', init);
