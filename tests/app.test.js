const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const APP_PATH = path.resolve(__dirname, '..', 'assets', 'app.js');

function createElementStub() {
  return {
    dataset: {},
    classList: { toggle() {}, add() {}, remove() {} },
    style: {},
    addEventListener() {},
    replaceChildren() {},
    append() {},
    appendChild() {},
    setAttribute() {},
    focus() {},
    querySelectorAll() {
      return [];
    },
    closest() {
      return null;
    },
    matches() {
      return false;
    },
    textContent: '',
    className: '',
    tabIndex: 0,
    parentElement: { style: {} }
  };
}

function loadApp(fetchImpl) {
  const source = `${fs.readFileSync(APP_PATH, 'utf8')}\nmodule.exports = { buildPublishedCsvUrl, parseCsv, normalizeRequirementsData, normalizeTimelinePhases, normalizeRoadmapTasks, normalizeCoreResponsibilities, parseExpertiseLevel, loadRequirementsData, loadNextStepsData, state, LOCAL_REQUIREMENTS_DATA, LOCAL_TIMELINE_TASKS, TIMELINE_PHASES, CORE_RESPONSIBILITIES, REQUIREMENTS_SHEET_CSV_URL, ROLE_ROADMAP_SHEET_CSV_URL, CORE_RESPONSIBILITIES_SHEET_CSV_URL, PHASES_SHEET_CSV_URL };`;
  const elements = new Map();
  const documentStub = {
    querySelectorAll() {
      return [];
    },
    getElementById(id) {
      if (!elements.has(id)) {
        elements.set(id, createElementStub());
      }
      return elements.get(id);
    },
    createElement() {
      return createElementStub();
    },
    activeElement: null
  };

  const sandbox = {
    module: { exports: {} },
    exports: {},
    console: { warn() {}, error() {}, log() {} },
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    requestAnimationFrame(callback) {
      callback();
    },
    IntersectionObserver: function () {
      return { observe() {}, unobserve() {} };
    },
    Chart: function ChartStub() {
      return { resize() {}, update() {} };
    },
    fetch: fetchImpl,
    window: {
      addEventListener() {},
      lucide: { createIcons() {} }
    },
    document: documentStub
  };

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox);
  return sandbox.module.exports;
}

test('buildPublishedCsvUrl encodes multi-word sheet names', () => {
  const { buildPublishedCsvUrl } = loadApp(async () => ({ ok: true, text: async () => '' }));
  const url = buildPublishedCsvUrl('Role personal Roadmap 1st DRAFT');

  assert.match(url, /gviz\/tq\?tqx=out:csv/);
  assert.match(url, /Role%20personal%20Roadmap%201st%20DRAFT/);
});

test('normalizes forgiving requirement headers and quoted CSV fields', () => {
  const { parseCsv, normalizeRequirementsData, parseExpertiseLevel } = loadApp(async () => ({
    ok: true,
    text: async () => ''
  }));
  const csv = [
    'Requirement,Match,Description,Context,Expertise Level,Next Step',
    '"LiveOps Backends & Remote Config",FALSE,"Line 1\nLine 2, still same field","Scopely Partner","Level 2","Build more dashboards"'
  ].join('\n');

  const normalized = normalizeRequirementsData(parseCsv(csv));

  assert.equal(normalized.length, 1);
  assert.equal(normalized[0].requirement, 'LiveOps Backends & Remote Config');
  assert.equal(normalized[0].match, false);
  assert.match(normalized[0].relatedExperience, /Line 2, still same field/);
  assert.equal(normalized[0].company, 'Scopely Partner');
  assert.equal(normalized[0].expertiseLevel, 2);
  assert.equal(normalized[0].nextStep, 'Build more dashboards');
  assert.equal(parseExpertiseLevel('10/10'), 0);
  assert.equal(parseExpertiseLevel('Level 4'), 4);
});

test('loadRequirementsData uses live data on success', async () => {
  const { loadRequirementsData, state } = loadApp(async () => ({
    ok: true,
    text: async () => [
      'WhatScopelyIsLookingFor,Match,Description or Related Experience,Company,Level of Expertise 1/5',
      '"Master Communicator",TRUE,"Executive-ready updates","2K Valencia","5 Master Experience"'
    ].join('\n')
  }));

  await loadRequirementsData();

  assert.equal(state.dataSource, 'live');
  assert.equal(state.requirements.length, 1);
  assert.equal(state.requirements[0].requirement, 'Master Communicator');
  assert.equal(state.requirements[0].improvement, '');
  assert.equal(state.requirements[0].nextStep, '');
});

test('loadRequirementsData falls back when no requirement column exists', async () => {
  const { loadRequirementsData, state, LOCAL_REQUIREMENTS_DATA } = loadApp(async () => ({
    ok: true,
    text: async () => [
      'Description or Related Experience,Company,Aspect To be Improved,Next step to improve',
      '"Executive-ready updates","2K Valencia",,"Keep scaling"'
    ].join('\n')
  }));

  await loadRequirementsData();

  assert.equal(state.dataSource, 'fallback');
  assert.equal(state.requirements.length, LOCAL_REQUIREMENTS_DATA.length);
  assert.equal(state.requirements[0].requirement, LOCAL_REQUIREMENTS_DATA[0].requirement);
});

test('normalizeRoadmapTasks keeps inherited phase values and splits responsibilities', () => {
  const { parseCsv, normalizeRoadmapTasks } = loadApp(async () => ({ ok: true, text: async () => '' }));
  const csv = [
    'Phase,Tasks,Description,Category,CoreResponsability Related,Subtasks',
    'Phase 0,Meet the team,Intro,LiveOpsTeam,"Drive Strategic Alignment, Architect the Release OS","1:1 Marion, Tool walkthrough"',
    ',Meet stakeholders,Coordination,Management,Optimize External Partnerships,Executive introductions'
  ].join('\n');

  const tasks = normalizeRoadmapTasks(parseCsv(csv));

  assert.equal(tasks.length, 2);
  assert.equal(tasks[1].phaseKey, 'Phase 0');
  assert.equal(tasks[0].responsibilities.join(' | '), 'Drive Strategic Alignment | Architect the Release OS');
  assert.equal(tasks[0].subtasks.join(' | '), '1:1 Marion | Tool walkthrough');
});

test('loadNextStepsData falls back per section instead of failing everything', async () => {
  const {
    loadNextStepsData,
    state,
    LOCAL_TIMELINE_TASKS,
    PHASES_SHEET_CSV_URL,
    CORE_RESPONSIBILITIES_SHEET_CSV_URL,
    ROLE_ROADMAP_SHEET_CSV_URL
  } = loadApp(async (url) => {
    if (url === PHASES_SHEET_CSV_URL) {
      return {
        ok: true,
        text: async () => [
          'Phase,Phase Name,Main Goal,Expected Duration,When,Expected Starting Date',
          'Phase 0,Phase 0: Onboarding,Meet the team,2 weeks,Weeks 1-2,2026-10-19'
        ].join('\n')
      };
    }

    if (url === CORE_RESPONSIBILITIES_SHEET_CSV_URL) {
      return {
        ok: true,
        text: async () => [
          'CoreResponsibilities',
          'Drive Strategic Alignment',
          'Optimize External Partnerships'
        ].join('\n')
      };
    }

    if (url === ROLE_ROADMAP_SHEET_CSV_URL) {
      return {
        ok: false,
        status: 404,
        text: async () => ''
      };
    }

    throw new Error(`Unexpected URL: ${url}`);
  });

  const result = await loadNextStepsData();

  assert.equal(result.phases.source, 'live');
  assert.equal(result.tasks.source, 'fallback');
  assert.equal(result.responsibilities.source, 'live');
  assert.equal(state.roadmapSource, 'mixed');
  assert.equal(state.timelinePhases[0].phaseKey, 'Phase 0');
  assert.equal(state.timelineTasks.length, LOCAL_TIMELINE_TASKS.length);
  const responsibilityNames = state.coreResponsibilities.map((item) => item.name);
  assert.equal(responsibilityNames[0], 'Drive Strategic Alignment');
  assert.equal(responsibilityNames[1], 'Optimize External Partnerships');
  assert.ok(responsibilityNames.includes('End-to-End LiveOps Quality & Performance'));
  assert.equal(state.kpiItems[0].title, 'Drive Strategic Alignment');
});
