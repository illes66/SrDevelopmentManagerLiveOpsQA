const REQUIREMENTS_MAP = [
  {
    title: 'Production & Operations Acumen (5/5)',
    detail: 'Experiencia en pipelines CI/CD, build distribution y certificación de más de 50 juegos.'
  },
  {
    title: 'Master Communicator (5/5)',
    detail: 'Comunicación directa con stakeholders de 1st y 3rd parties (Sony, MS, Nintendo) y equipos directivos.'
  },
  {
    title: 'Influence Without Authority (4/5)',
    detail:
      'Gestión transversal de equipos en matriz sin autoridad jerárquica directa mediante empatía técnica y datos.'
  },
  {
    title: 'Vendor & Partner Management (4/5)',
    detail: 'Control de SLAs, benchmarking y coordinación de QA externo.'
  },
  {
    title: 'LiveOps Backends & Remote Config (2/5 — Ramp Up)',
    detail: 'Actualización proactiva en arquitecturas de Playgami, Firebase y entornos Unity LiveOps.'
  }
];

const TIMELINE_PHASES = [
  {
    title: 'Fase 0 (Semanas 1–2 | Oct 2026)',
    detail: 'Onboarding, 1-on-1s clave con Marion y Leads, inmersión en la cultura y herramientas de Scopely.'
  },
  {
    title: 'Fase 01 (Semanas 3–4 | Nov 2026)',
    detail: 'Ramp-up técnico en Playgami, Flam3D, revisión de calendarios de LiveOps y arquitectura de datos.'
  },
  {
    title: 'Fase 02 (Meses 2–3 | Nov–Dic 2026)',
    detail:
      'Autonomía operativa inicial, toma de propiedad en sign-offs de QA de LiveOps y evaluación de SLAs de vendors.'
  },
  {
    title: 'Fase 03 (Meses 3–6 | Ene–Mar 2027)',
    detail:
      'Optimización de workflows, integración de herramientas de IA/automatización de scripts y eliminación de bottlenecks.'
  },
  {
    title: 'Fase 04 (Meses 6–12 | Mar–Sep 2027)',
    detail:
      'Impacto estratégico global, escalabilidad del Quality OS y alineación continua con Executive Producers.'
  }
];

// Editable: 8 Core Responsibilities plausibles para el rol.
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

const PHASE_LABELS = ['Fase 0', 'Fase 01', 'Fase 02', 'Fase 03', 'Fase 04'];

const tabTriggers = Array.from(document.querySelectorAll('[data-tab-trigger]'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));
const requirementsAccordion = document.getElementById('requirements-accordion');
const timelineAccordion = document.getElementById('timeline-accordion');

let autonomyChart;

function renderAccordion(container, items) {
  container.innerHTML = items
    .map(
      (item, index) => `
      <details class="rounded-xl border border-brand-primary/15 bg-brand-bg p-4" ${index === 0 ? 'open' : ''}>
        <summary class="focusable cursor-pointer list-none text-sm font-semibold text-brand-primary">
          <span class="inline-flex items-center gap-2">
            <i data-lucide="chevron-right" class="h-4 w-4 text-brand-secondary"></i>
            ${item.title}
          </span>
        </summary>
        <p class="mt-3 text-sm leading-6 text-brand-text">${item.detail}</p>
      </details>
    `
    )
    .join('');
}

function getChartOptions() {
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
            return `${context.dataset.label}: Level ${context.parsed.y}`;
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

function renderAutonomyChart() {
  const canvas = document.getElementById('autonomy-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  if (autonomyChart) {
    autonomyChart.destroy();
  }

  autonomyChart = new Chart(canvas, {
    type: 'line',
    data: {
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
    },
    options: getChartOptions()
  });
}

function styleTab(trigger, active) {
  trigger.setAttribute('aria-selected', String(active));
  trigger.tabIndex = active ? 0 : -1;
  trigger.classList.toggle('bg-brand-primary', active);
  trigger.classList.toggle('text-white', active);
  trigger.classList.toggle('bg-white', !active);
  trigger.classList.toggle('text-brand-primary', !active);
}

function activateTab(tabId) {
  tabPanels.forEach((panel) => {
    panel.dataset.active = String(panel.id === `panel-${tabId}`);
  });

  tabTriggers.forEach((trigger) => {
    const active = trigger.dataset.tabTrigger === tabId;
    styleTab(trigger, active);
  });

  if (tabId === 'next-steps') {
    requestAnimationFrame(() => {
      renderAutonomyChart();
      setTimeout(() => autonomyChart && autonomyChart.resize(), 60);
    });
  }
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
  renderAccordion(requirementsAccordion, REQUIREMENTS_MAP);
  renderAccordion(timelineAccordion, TIMELINE_PHASES);
  registerTabEvents();
  registerPlaceholderLinks();
  initFadeIn();
  activateTab('home');

  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

window.addEventListener('DOMContentLoaded', init);
