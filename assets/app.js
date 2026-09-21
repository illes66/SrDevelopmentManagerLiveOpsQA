const landingContent = {
  // Sustituye este contenido por datos exportados de Google Sheets cuando la URL pública esté disponible.
  // La estructura replica los bloques solicitados para que editar copy, colores y métricas sea rápido.
  intro:
    'A concise walkthrough of my leadership trajectory in game production, the LiveOps QA priorities Scopely needs today, and a practical roadmap for turning those expectations into measurable studio execution.',
  experience: [
    {
      studio: '2K Valencia',
      summary:
        'At 2K Valencia I coordinated milestone planning, stakeholder reporting and asset-delivery governance across international partners, building the operational rigor needed to align quality, schedules and publishing expectations.'
    },
    {
      studio: 'Stage Clear Studios',
      summary:
        'At Stage Clear Studios I moved from hands-on technical problem solving into delivery support, collaborating across design, code and publishing needs while learning how disciplined production systems protect team focus and release confidence.'
    },
    {
      studio: 'Cross-functional content & operations background',
      summary:
        'Earlier leadership work in content, communications and live execution strengthened the core skills that matter in LiveOps QA leadership: clear communication, prioritization under pressure, process design and consistent follow-through with diverse stakeholders.'
    }
  ],
  scopelyNeeds: [
    {
      title: 'Scale LiveOps QA operations with clear ownership',
      description:
        'Translate goals into rituals, dashboards and decision rights so each release train has a visible owner, a measurable risk picture and reliable escalation paths.'
    },
    {
      title: 'Connect product, QA and stakeholders around release health',
      description:
        'Create a communication layer that keeps feature teams, leadership and partners aligned on readiness, blockers, mitigations and player impact before issues become surprises.'
    },
    {
      title: 'Build sustainable quality processes for fast-moving teams',
      description:
        'Standardize workflows for triage, regression, coverage and post-release follow-up so the organization can move quickly without trading away predictability.'
    },
    {
      title: 'Develop talent, accountability and continuous improvement',
      description:
        'Coach managers and ICs through expectations, feedback loops and success metrics that improve both execution quality and long-term team resilience.'
    },
    {
      title: 'Use data to prioritize what matters most to players',
      description:
        'Anchor planning in live quality signals, release risk and recurring defects so operational attention stays focused on the issues that most affect player trust.'
    }
  ],
  roadmap: {
    phases: [
      { phase: 'Phase 1 · Discover', weeks: 3, focus: 'People, releases, KPIs and risks' },
      { phase: 'Phase 2 · Stabilize', weeks: 4, focus: 'Rituals, triage and reporting' },
      { phase: 'Phase 3 · Scale', weeks: 5, focus: 'Coverage, staffing and governance' },
      { phase: 'Phase 4 · Optimize', weeks: 4, focus: 'Automation, coaching and insights' }
    ],
    responsibilities: [
      {
        title: 'Release quality governance',
        roadmapTask: 'Establish a release-readiness review with shared scorecards.',
        expertiseTarget: 'Operating independently by Phase 2',
        phases: ['Phase 1 · Discover', 'Phase 2 · Stabilize']
      },
      {
        title: 'Live issue triage and escalation',
        roadmapTask: 'Create severity rules, ownership routes and escalation SLAs.',
        expertiseTarget: 'Trusted escalation lead by Phase 2',
        phases: ['Phase 1 · Discover', 'Phase 2 · Stabilize', 'Phase 3 · Scale']
      },
      {
        title: 'Cross-functional stakeholder reporting',
        roadmapTask: 'Launch a weekly quality narrative with risks, trends and actions.',
        expertiseTarget: 'Executive-ready communication by Phase 3',
        phases: ['Phase 2 · Stabilize', 'Phase 3 · Scale']
      },
      {
        title: 'Team health and manager enablement',
        roadmapTask: 'Define expectations, coaching cadences and growth checkpoints.',
        expertiseTarget: 'Coaching system embedded by Phase 4',
        phases: ['Phase 3 · Scale', 'Phase 4 · Optimize']
      },
      {
        title: 'Process improvement and data loops',
        roadmapTask: 'Prioritize recurring quality gaps and convert them into experiments.',
        expertiseTarget: 'Continuous improvement cadence by Phase 4',
        phases: ['Phase 2 · Stabilize', 'Phase 3 · Scale', 'Phase 4 · Optimize']
      }
    ]
  },
  resources: [
    {
      label: 'Role brief',
      value: 'Senior Development Manager, LiveOps QA description',
      href: '#',
      status: 'Add the public job-description URL here when available.'
    },
    {
      label: 'CV',
      value: 'Candidate CV / résumé',
      href: '#',
      status: 'Replace with the final CV link or downloadable PDF.'
    },
    {
      label: 'Portfolio GitHub Page',
      value: 'Raquel SI Senior Producer portfolio',
      href: 'https://illes66.github.io/RaquelSISeniorProducer/',
      status: 'Active external portfolio reference.'
    },
    {
      label: 'Google Sheet source',
      value: 'Sr. Development Manager, LiveOps QA at Scopely',
      href: '#',
      status: 'Connect the public Sheet URL or a JSON/CSV export.'
    }
  ],
  improvements: [
    'Connect the landing to a published Google Sheet export so role priorities and roadmap phases update automatically.',
    'Add micro-interactions tied to scroll position so each studio story and Scopely requirement reveals at interview pace.',
    'Embed downloadable CV and a printable one-page interview brief for recruiters and hiring managers.',
    'Introduce KPI callouts sourced from real portfolio outcomes to strengthen credibility with quantified evidence.',
    'Add bilingual copy toggles (ES / EN) to support both local and international interview loops.'
  ]
};

const tabTriggers = document.querySelectorAll('[data-tab-trigger]');
const tabPanels = document.querySelectorAll('.tab-panel');
const introCopy = document.getElementById('intro-copy');
const experienceStack = document.getElementById('experience-stack');
const opportunityTitle = document.getElementById('opportunity-title');
const opportunityDescription = document.getElementById('opportunity-description');
const opportunityBullets = document.getElementById('opportunity-bullets');
const resourcesList = document.getElementById('resources-list');
const improvementsList = document.getElementById('improvements-list');
const expertiseMatrix = document.getElementById('expertise-matrix');

let activeNeedIndex = 0;
let needsLoopStarted = false;
let timelineChart;

function renderSummary() {
  document.getElementById('summary-studios').textContent = landingContent.experience.length;
  document.getElementById('summary-priorities').textContent = landingContent.scopelyNeeds.length;
  document.getElementById('summary-phases').textContent = landingContent.roadmap.phases.length;
}

function renderIntro() {
  introCopy.textContent = landingContent.intro;
  requestAnimationFrame(() => introCopy.classList.add('is-visible'));
}

function renderExperience() {
  const cards = landingContent.experience
    .map(
      (item) => `
        <article class="experience-card rounded-[1.5rem] border border-autumn-clay/10 bg-autumn-cream p-5 shadow-sm">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-autumn-clay">${item.studio}</p>
          <p class="mt-3 text-lg leading-7 text-autumn-ink">${item.summary}</p>
        </article>
      `
    )
    .join('');

  experienceStack.innerHTML = cards;
  const experienceCards = Array.from(experienceStack.querySelectorAll('.experience-card'));

  experienceCards.forEach((card, index) => {
    setTimeout(() => card.classList.add('is-visible'), 400 + index * 350);
  });

  setTimeout(() => {
    experienceStack.classList.add('is-pinned');
    startNeedsLoop();
  }, 2000);
}

function renderResources() {
  resourcesList.innerHTML = landingContent.resources
    .map(
      (resource) => `
        <a
          class="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 transition hover:bg-white/15"
          href="${resource.href}"
          ${resource.href === '#' ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}
        >
          <p class="text-xs uppercase tracking-[0.3em] text-autumn-gold">${resource.label}</p>
          <p class="mt-2 text-lg font-semibold text-white">${resource.value}</p>
          <p class="mt-2 text-sm leading-6 text-autumn-sand">${resource.status}</p>
        </a>
      `
    )
    .join('');
}

function renderImprovements() {
  improvementsList.innerHTML = landingContent.improvements
    .map(
      (item) => `
        <li class="rounded-[1.5rem] border border-autumn-clay/10 bg-autumn-cream p-5 text-base leading-7 text-autumn-ink">
          ${item}
        </li>
      `
    )
    .join('');
}

function renderExpertiseMatrix() {
  const phaseLabels = landingContent.roadmap.phases.map((phase) => phase.phase);

  expertiseMatrix.innerHTML = landingContent.roadmap.responsibilities
    .map((item) => {
      const chips = phaseLabels
        .map((phase) => {
          const isActive = item.phases.includes(phase);
          return `
            <span class="phase-chip rounded-full px-3 py-2 text-xs font-medium ${
              isActive ? 'bg-autumn-ink text-white' : 'bg-white text-autumn-clay'
            }">
              ${phase}
            </span>
          `;
        })
        .join('');

      return `
        <article class="rounded-[1.5rem] border border-autumn-clay/10 bg-white p-5">
          <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div class="max-w-2xl">
              <p class="text-xs font-semibold uppercase tracking-[0.3em] text-autumn-clay">Core responsibility</p>
              <h3 class="mt-2 text-xl font-semibold text-autumn-ink">${item.title}</h3>
              <p class="mt-3 text-sm leading-6 text-autumn-clay"><span class="font-semibold text-autumn-ink">Related roadmap task:</span> ${item.roadmapTask}</p>
            </div>
            <div class="rounded-3xl bg-autumn-sand px-4 py-3 text-sm font-medium text-autumn-ink">
              ${item.expertiseTarget}
            </div>
          </div>
          <div class="mt-5 flex flex-wrap gap-2">${chips}</div>
        </article>
      `;
    })
    .join('');
}

function startNeedsLoop() {
  if (needsLoopStarted) return;
  needsLoopStarted = true;

  const showNeed = () => {
    const need = landingContent.scopelyNeeds[activeNeedIndex];
    opportunityTitle.classList.remove('is-visible');
    opportunityDescription.classList.remove('is-visible');

    setTimeout(() => {
      opportunityTitle.textContent = need.title;
      opportunityDescription.textContent = need.description;
      opportunityTitle.classList.add('is-visible');
      opportunityDescription.classList.add('is-visible');

      const bullet = document.createElement('li');
      bullet.className = 'opportunity-bullet rounded-full border border-autumn-clay/10 bg-white px-4 py-3 text-sm font-medium text-autumn-ink';
      bullet.textContent = need.title;
      opportunityBullets.appendChild(bullet);
      requestAnimationFrame(() => bullet.classList.add('is-visible'));

      activeNeedIndex = (activeNeedIndex + 1) % landingContent.scopelyNeeds.length;
      if (activeNeedIndex !== 0) {
        setTimeout(showNeed, 2600);
      }
    }, 200);
  };

  showNeed();
}

function renderTimelineChart() {
  const ctx = document.getElementById('timeline-chart');

  timelineChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: landingContent.roadmap.phases.map((item) => item.phase),
      datasets: [
        {
          label: 'Weeks',
          data: landingContent.roadmap.phases.map((item) => item.weeks),
          backgroundColor: ['#8f5f52', '#d39b8f', '#a7b69a', '#d8b98d'],
          borderRadius: 999,
          borderSkipped: false
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label(context) {
              const focus = landingContent.roadmap.phases[context.dataIndex].focus;
              return `${context.raw} weeks · ${focus}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(143, 95, 82, 0.12)' },
          ticks: { color: '#6b4b42' }
        },
        y: {
          grid: { display: false },
          ticks: { color: '#422f2a', font: { size: 12, weight: '600' } }
        }
      }
    }
  });
}

function ensureTimelineChart() {
  if (!timelineChart) {
    renderTimelineChart();
    return;
  }

  setTimeout(() => timelineChart.resize(), 50);
}

function activateTab(tabId) {
  tabPanels.forEach((panel) => {
    panel.dataset.active = String(panel.id === tabId);
  });

  tabTriggers.forEach((trigger) => {
    const isActive = trigger.dataset.tabTrigger === tabId;
    trigger.classList.toggle('bg-autumn-ink', isActive);
    trigger.classList.toggle('text-white', isActive);
    trigger.classList.toggle('bg-white', !isActive);
    trigger.classList.toggle('text-autumn-ink', !isActive);
  });

  if (tabId === 'next-steps') {
    ensureTimelineChart();
  }
}

function registerTabs() {
  tabTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => activateTab(trigger.dataset.tabTrigger));
  });
}

function init() {
  renderSummary();
  renderIntro();
  renderExperience();
  renderResources();
  renderImprovements();
  renderExpertiseMatrix();
  registerTabs();
}

init();
