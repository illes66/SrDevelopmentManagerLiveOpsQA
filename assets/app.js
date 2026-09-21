const GOOGLE_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vS5ON09VkHUkQNaQeIJe2vBUzHg1iU_Cy6KeC9rlKXuuxsegXyzJ9x-ENyFVM5b2XAeLRBVFyLwulNH/pub?output=csv';

const LOCAL_REQUIREMENTS_DATA = [
  {
    requirement:
      'Production & Operations Acumen: Strong background in Technical Program Management, Release Engineering, or Technical Production. You understand CI/CD pipelines, build distribution, and deployment risks.',
    match: true,
    relatedExperience:
      'As lead port producer, handling internal development at Stage Clear Studios and acting as the key production counterpart for publisher submission processes and certification management.',
    company: 'Stage Clear Studios / publisher submission workflows',
    expertiseLevel: 5,
    expertiseLabel: '5 / 5 — Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Master Communicator: Exceptional interpersonal skills with the ability to translate technical risks into clear, business-focused narratives for executive leadership.',
    match: true,
    relatedExperience:
      'Project ownership across indie, AA, and AAA studios, with direct communication involving internal teams, external vendors, executive stakeholders, and first- and third-party partners including Sony, Microsoft, Nintendo, Steam, and PEGI.',
    company: 'Earlier career, Stage Clear Studios, Astragon Entertainment, and 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 / 5 — Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Influence Without Authority: A proven track record of driving large process changes and operational improvements across matrixed organizations without direct line-management authority.',
    match: true,
    relatedExperience:
      'Built and scaled internal production processes from scratch at Stage Clear Studios and led documentation, research, and pipeline improvement initiatives during 2K Valencia’s transition into a larger international structure.',
    company: 'Stage Clear Studios and 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 / 5 — 1 to 3 years of focused experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Vendor & Partner Management: Extensive experience collaborating with, evaluating, and maximizing the value of large-scale external partners and vendors.',
    match: true,
    relatedExperience:
      'Extensive experience collaborating with external vendors, defining and aligning SLAs, preparing milestone reports, and managing KPI roadmaps.',
    company: 'Astragon Entertainment and 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 / 5 — 1 to 3 years of focused experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Systems Thinking: The ability to look at a highly complex, multi-studio ecosystem, identify systemic inefficiencies, and engineer elegant, scalable solutions.',
    match: true,
    relatedExperience:
      'Experience working across multi-studio ecosystems, identifying shared areas for leverage, and translating specialized technical risks for non-technical stakeholders.',
    company: 'Astragon Entertainment and 2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 / 5 — 1 to 3 years of focused experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Analytics & BI Tools: Proficiency with product analytics platforms and BI visualization tools such as Tableau, Looker, or Excel/Google Sheets is desirable.',
    match: true,
    relatedExperience:
      'Experience using Tableau, Looker, and Excel/Google Sheets for production analytics, plus internal data-analysis and centralization initiatives for General Development Services.',
    company: '2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 / 5 — 1 to 3 years of focused experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Production & Operations: Experience managing workflows in JIRA and using build distribution tools such as TestFlight, Google Play Console, and Firebase App Distribution is desirable.',
    match: true,
    relatedExperience: 'Over 9 years managing production workflows across different project management methodologies.',
    company: 'Stage Clear Studios, Astragon Entertainment, and 2K Valencia',
    expertiseLevel: 5,
    expertiseLabel: '5 / 5 — Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement: 'Degree level education or equivalent experience.',
    match: true,
    relatedExperience:
      'Bachelor’s degree in Advertising & Public Relations, postgraduate degree in Corporate Identity, and a master’s degree in Video Game Development with Unity, C#, and 3ds Max.',
    company: 'Universidad Pontificia de Salamanca and CICE Madrid',
    expertiseLevel: 5,
    expertiseLabel: '5 / 5 — Master Experience',
    improvement: '',
    nextStep: ''
  },
  {
    requirement:
      'Passion for mobile and console/PC games, with proven experience working on games as a live service.',
    match: false,
    relatedExperience:
      'Experience in game development, feature delivery, and legal coordination for Project Ethos (31st Union / 2K), together with release and post-launch support experience across multiple platforms.',
    company: '2K Valencia',
    expertiseLevel: 4,
    expertiseLabel: '4 / 5 — 1 to 3 years of focused experience',
    improvement: 'Deepen direct ownership of long-running live-service operations on mobile-first products.',
    nextStep: 'Continue mapping Scopely-style live-service cadences to prior release, patch, and hotfix experience.'
  },
  {
    requirement:
      'LiveOps Backends & Remote Config: Hands-on experience with systems like Azure PlayFab, Unity Gaming Services, Firebase, or proprietary internal LiveOps dashboards is desirable.',
    match: false,
    relatedExperience:
      'Currently updating skills in this area while building a Unity project designed around a LiveOps agenda with Unity services and a Firebase-backed workflow.',
    company: 'Independent upskilling project',
    expertiseLevel: 2,
    expertiseLabel: '2 / 5 — Early ramp-up',
    improvement: 'Hands-on experience with Playgami, Firebase, and Unity LiveOps environments.',
    nextStep: 'Continue building production-like LiveOps backend workflows and remote-configuration practice in the current Unity project.'
  }
];

const TIMELINE_PHASES = [
  {
    title: 'Phase 0 (Weeks 1–2 | Oct 2026)',
    detail: 'Onboarding, key 1:1s with Marion and team leads, and immersion in Scopely culture and tools.'
  },
  {
    title: 'Phase 01 (Weeks 3–4 | Nov 2026)',
    detail: 'Technical ramp-up in Playgami and Flam3D, plus review of LiveOps calendars and data architecture.'
  },
  {
    title: 'Phase 02 (Months 2–3 | Nov–Dec 2026)',
    detail:
      'Initial operational autonomy, ownership of LiveOps QA sign-offs, and evaluation of vendor SLAs.'
  },
  {
    title: 'Phase 03 (Months 3–6 | Jan–Mar 2027)',
    detail:
      'Workflow optimization, integration of AI and automation tooling, and removal of delivery bottlenecks.'
  },
  {
    title: 'Phase 04 (Months 6–12 | Mar–Sep 2027)',
    detail:
      'Global strategic impact, scalable Quality OS growth, and ongoing alignment with Executive Producers.'
  }
];

const CORE_RESPONSIBILITIES = [
  { name: 'LiveOps QA Sign-off Governance', levels: [0, 1, 2, 3, 3], color: '#2B4C6F' },
  { name: 'Playgami Toolchain Integration', levels: [0, 1, 2, 2, 3], color: '#D97757' },
  { name: 'Vendor SLA & KPI Management', levels: [1, 1, 2, 2, 3], color: '#7A9A8B' },
  { name: 'Cross-Discipline Release Communication', levels: [1, 2, 2, 3, 3], color: '#4C6F94' },
  { name: 'Escaped Defect Prevention Strategy', levels: [0, 1, 2, 2, 3], color: '#B5654D' },
  { name: 'Live Data Risk Monitoring', levels: [0, 1, 1, 2, 3], color: '#5E7F70' },
  { name: 'Automation & Scripted QA Workflows', levels: [0, 0, 1, 2, 3], color: '#7B91AB' },
  { name: 'Executive Reporting & Roadmap Alignment', levels: [1, 1, 2, 3, 3], color: '#C67C64' }
];

const PHASE_LABELS = ['Phase 0', 'Phase 01', 'Phase 02', 'Phase 03', 'Phase 04'];

const tabTriggers = Array.from(document.querySelectorAll('[data-tab-trigger]'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
const requirementsAccordion = document.getElementById('requirements-accordion');
const timelineAccordion = document.getElementById('timeline-accordion');
const dataStatus = document.getElementById('data-status');
const dataSourceBadge = document.getElementById('data-source-badge');
const expertiseChartNote = document.getElementById('expertise-chart-note');

const state = {
  requirements: LOCAL_REQUIREMENTS_DATA,
  dataSource: 'loading'
};

let autonomyChart;
let expertiseChart;

function normalizeHeaderKey(value) {
  return String(value || '')
    .replace(/\uFEFF/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '')
    .trim()
    ;
}

function parseExpertiseLevel(value) {
  const match = String(value || '').match(/[1-5]/);
  return match ? Number(match[0]) : 0;
}

function parseBoolean(value) {
  if (typeof value === 'boolean') return value;

  const normalized = String(value || '').trim().toLowerCase();
  if (normalized === 'true') return true;
  if (normalized === 'false') return false;
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

function findMatchColumnIndex(headers, rows) {
  const blankHeaderIndexes = headers
    .map((header, index) => ({ header, index }))
    .filter(({ header }) => normalizeHeaderKey(header) === '')
    .map(({ index }) => index);

  return blankHeaderIndexes.find((index) =>
    rows.some((row) => parseBoolean(row[index]) !== null && String(row[index]).trim() !== '')
  );
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

function normalizeRequirementsData(rows) {
  if (!Array.isArray(rows) || rows.length < 2) {
    return [];
  }

  const [headers, ...dataRows] = rows;
  const headerMap = headers.reduce((map, header, index) => {
    map.set(normalizeHeaderKey(header), index);
    return map;
  }, new Map());

  const matchIndex = findMatchColumnIndex(headers, dataRows);
  const requirementIndex = getHeaderIndex(headerMap, [
    'WhatScopelyIsLookingFor',
    'What Scopely Is Looking For'
  ]);
  const relatedExperienceIndex = getHeaderIndex(headerMap, [
    'Description or Related Experience',
    'Description / Related Experience'
  ]);
  const companyIndex = getHeaderIndex(headerMap, ['Company', 'Company / Context']);
  const expertiseIndex = getHeaderIndex(headerMap, [
    'Level of Expertise 1/5',
    'Level of Expertise (1/5)'
  ]);
  const improvementIndex = getHeaderIndex(headerMap, [
    'Aspect To be Improved',
    'Aspect to be Improved'
  ]);
  const nextStepIndex = getHeaderIndex(headerMap, ['Next step to improve', 'Next Step to Improve']);

  const requiredIndexes = [
    requirementIndex,
    relatedExperienceIndex,
    companyIndex,
    expertiseIndex,
    improvementIndex,
    nextStepIndex,
    matchIndex
  ];

  if (requiredIndexes.some((index) => typeof index !== 'number' || index < 0)) {
    return [];
  }

  return dataRows
    .map((row) => {
      const requirement = String(row[requirementIndex] || '').trim();
      if (!requirement) return null;

      const expertiseLabel = String(row[expertiseIndex] || '').trim();
      const parsedMatch = parseBoolean(row[matchIndex]);

      return {
        requirement,
        match: parsedMatch === null ? false : parsedMatch,
        relatedExperience: String(row[relatedExperienceIndex] || '').trim(),
        company: String(row[companyIndex] || '').trim(),
        expertiseLevel: parseExpertiseLevel(expertiseLabel),
        expertiseLabel: expertiseLabel || `${parseExpertiseLevel(expertiseLabel)} / 5`,
        improvement: String(row[improvementIndex] || '').trim(),
        nextStep: String(row[nextStepIndex] || '').trim()
      };
    })
    .filter(Boolean);
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

function renderRequirementsAccordion(items) {
  if (!requirementsAccordion) return;

  requirementsAccordion.replaceChildren();

  items.forEach((item, index) => {
    const details = createElement(
      'details',
      'rounded-xl border border-brand-primary/15 bg-brand-bg p-4'
    );
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

function renderTimelineAccordion(items) {
  if (!timelineAccordion) return;

  timelineAccordion.replaceChildren();

  items.forEach((item, index) => {
    const details = createElement(
      'details',
      'rounded-xl border border-brand-primary/15 bg-brand-bg p-4'
    );
    if (index === 0) details.open = true;

    const summary = createElement(
      'summary',
      'focusable cursor-pointer list-none text-sm font-semibold text-brand-primary'
    );
    summary.setAttribute('aria-label', `Toggle roadmap details for ${item.title}`);

    const summaryContent = createElement('span', 'inline-flex items-center gap-2');
    const summaryIcon = createElement('i', 'h-4 w-4 text-brand-secondary');
    summaryIcon.setAttribute('data-lucide', 'chevron-right');
    const summaryText = createElement('span', '', item.title);
    summaryContent.append(summaryIcon, summaryText);
    summary.append(summaryContent);

    const detail = createElement('p', 'mt-3 text-sm leading-6 text-brand-text', item.detail);
    details.append(summary, detail);
    timelineAccordion.append(details);
  });

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
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
    labels: PHASE_LABELS,
    datasets: CORE_RESPONSIBILITIES.map((item) => ({
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

  const data = {
    labels: items.map((item) => wrapLabel(item.requirement)),
    datasets: [
      {
        label: state.dataSource === 'live' ? 'Live CSV data' : 'Local fallback data',
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

function updateDataState(source, message) {
  state.dataSource = source;

  if (dataStatus) {
    dataStatus.textContent = message;
    dataStatus.className =
      source === 'fallback'
        ? 'mt-2 text-sm text-amber-700'
        : source === 'live'
          ? 'mt-2 text-sm text-brand-text'
          : 'mt-2 text-sm text-brand-text';
  }

  if (dataSourceBadge) {
    dataSourceBadge.textContent =
      source === 'live' ? 'Live CSV data' : source === 'fallback' ? 'Local fallback data' : 'Loading data';
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
        ? 'This chart is powered by the live public Google Sheets CSV.'
        : source === 'fallback'
          ? 'This chart is currently showing the normalized local fallback dataset because the live CSV could not be loaded.'
          : 'Loading the live public Google Sheets CSV.';
  }
}

async function loadRequirementsData() {
  updateDataState('loading', 'Loading live CSV data from Google Sheets…');

  try {
    const response = await fetch(GOOGLE_SHEET_CSV_URL, { method: 'GET', mode: 'cors', cache: 'no-store' });
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const csvText = await response.text();
    const normalizedData = normalizeRequirementsData(parseCsv(csvText));

    if (!normalizedData.length) {
      throw new Error('The CSV did not return any requirement rows.');
    }

    state.requirements = normalizedData;
    updateDataState('live', 'Live CSV data loaded from Google Sheets.');
  } catch (error) {
    console.error('Falling back to local requirements data:', error);
    state.requirements = LOCAL_REQUIREMENTS_DATA;
    updateDataState(
      'fallback',
      'Displaying local fallback data because the live Google Sheets CSV could not be loaded.'
    );
  }

  renderRequirementsAccordion(state.requirements);
  renderVisibleCharts();
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

function init() {
  renderRequirementsAccordion(state.requirements);
  renderTimelineAccordion(TIMELINE_PHASES);
  registerTabEvents();
  registerPlaceholderLinks();
  initFadeIn();
  activateTab('home');
  loadRequirementsData();

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

window.addEventListener('DOMContentLoaded', init);
