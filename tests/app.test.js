const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const APP_PATH = path.resolve(__dirname, '..', 'assets', 'app.js');

function createElementStub() {
  return {
    dataset: {},
    classList: { toggle() {} },
    addEventListener() {},
    replaceChildren() {},
    append() {},
    appendChild() {},
    setAttribute() {},
    focus() {},
    matches() {
      return false;
    },
    textContent: '',
    className: '',
    tabIndex: 0
  };
}

function loadApp(fetchImpl) {
  const source = `${fs.readFileSync(APP_PATH, 'utf8')}\nmodule.exports = { parseCsv, normalizeRequirementsData, loadRequirementsData, state, LOCAL_REQUIREMENTS_DATA };`;
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
    console,
    setTimeout,
    clearTimeout,
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

test('normalizes aliased headers and quoted CSV fields', () => {
  const { parseCsv, normalizeRequirementsData } = loadApp(async () => ({ ok: true, text: async () => '' }));
  const csv = [
    'What Scopely Is Looking For,,Description / Related Experience,Company / Context,Level of Expertise (1/5),Aspect to be Improved,Next Step to Improve',
    '"LiveOps Backends & Remote Config",FALSE,"Line 1\nLine 2, still same field","Scopely Partner",2,"Needs more backend depth","Build more dashboards"'
  ].join('\n');

  const normalized = normalizeRequirementsData(parseCsv(csv));

  assert.equal(normalized.length, 1);
  assert.equal(normalized[0].requirement, 'LiveOps Backends & Remote Config');
  assert.equal(normalized[0].match, false);
  assert.match(normalized[0].relatedExperience, /Line 2, still same field/);
  assert.equal(normalized[0].company, 'Scopely Partner');
  assert.equal(normalized[0].expertiseLevel, 2);
});

test('loadRequirementsData uses live data on success', async () => {
  const { loadRequirementsData, state } = loadApp(async () => ({
    ok: true,
    text: async () => [
      'WhatScopelyIsLookingFor,,Description or Related Experience,Company,Level of Expertise 1/5,Aspect To be Improved,Next step to improve',
      '"Master Communicator",TRUE,"Executive-ready updates","2K Valencia","5 Master Experience",,"Keep scaling"'
    ].join('\n')
  }));

  await loadRequirementsData();

  assert.equal(state.dataSource, 'live');
  assert.equal(state.requirements.length, 1);
  assert.equal(state.requirements[0].requirement, 'Master Communicator');
});

test('loadRequirementsData falls back when required headers are missing', async () => {
  const { loadRequirementsData, state, LOCAL_REQUIREMENTS_DATA } = loadApp(async () => ({
    ok: true,
    text: async () => [
      'WhatScopelyIsLookingFor,,Description or Related Experience,Company,Aspect To be Improved,Next step to improve',
      '"Master Communicator",TRUE,"Executive-ready updates","2K Valencia",,"Keep scaling"'
    ].join('\n')
  }));

  await loadRequirementsData();

  assert.equal(state.dataSource, 'fallback');
  assert.equal(state.requirements.length, LOCAL_REQUIREMENTS_DATA.length);
  assert.equal(state.requirements[0].requirement, LOCAL_REQUIREMENTS_DATA[0].requirement);
});
