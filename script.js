// ============ Content Data ============
const PSYCHE_DATA = {
  fitrah: {
    tag: 'فطرة',
    title: 'Fitrah — Primordial Essence',
    body: `The topmost layer of the human ontology. The Qur'an (30:30) and a saying of the Prophet ﷺ both describe every child as "born upon the fitrah" — a primordially endowed faculty to recognize good and evil and distinguish truth from falsehood. Research on infant moral cognition (children as young as 6–10 months socially evaluating helpful vs. hindering behavior) echoes this idea of an innate moral compass that precedes any teaching.`
  },
  aql: {
    tag: 'عقل',
    title: "ʾAql — Cognition",
    body: `The rational faculty. When fully developed, ʾaql provides sound reasoning, knowledge attainment, appreciation of consequences, the ability to distinguish right from wrong — and even regulation of emotion. Classical theologians described it as "the mind behind the brain": the brain is the necessary instrument, but ʾaql is the executive that wills, intends, and reasons through it.`
  },
  ruh: {
    tag: 'روح',
    title: 'Rūḥ — Spirit',
    body: `Rūḥ operates through two mechanisms: <em>rūḥ ʿulwī samāwī</em>, an inherent longing for the sacred and for reconnection with the divine, and <em>rūḥ ḥayawānī</em>, the animating life force that carries survival drives. The spirit is nourished chiefly through <strong>dhikr</strong> — remembrance of God — which research links to measurable shifts in glucose metabolism, prefrontal activation, and parasympathetic calm.`
  },
  qalb: {
    tag: 'قلب',
    title: 'Qalb — The Metaphysical Heart',
    body: `The qalb is the homeostatic center of the entire model — a container of both health and pathology that every other element feeds into. Its condition rises and falls with the state of ʾaql, nafs, iḥsās, and rūḥ. The ultimate aim of TIIP is <strong>qalb salīm</strong>, a sound and balanced heart, reached through <em>ittiḥād</em> — an integrated unity of being across all parts of the psyche.`
  },
  nafs: {
    tag: 'نفس',
    title: 'Nafs — Behavioral Inclination',
    body: `Often likened to the Freudian id/ego/superego, the nafs is not inherently bad. It houses two drives — appetitive (<em>shahwah</em>) and aggressive/survival (<em>ghaḍab</em>) — that move through three stages: <strong>ammārah</strong> (commanding toward overindulgence), <strong>lawwāmah</strong> (the self that reprimands and self-regulates), and finally <strong>muṭmaʾinnah</strong> — a tranquil self no longer shackled by carnal desire.`
  },
  ihsas: {
    tag: 'إحساس',
    title: 'Iḥsās — Basic Emotions',
    body: `Not treated as a wholly independent faculty, but as the visible byproduct of the interplay between ʾaql and nafs — both a top-down cognitive response and a bottom-up biological reaction. Islam treats emotional intensity as a spectrum: too little anger leaves a person unable to protect themselves; too much becomes destructive. The goal is regulation, not suppression.`
  },
  angelic: {
    tag: '◔',
    title: 'Angelic Drive',
    body: `The pull toward the fitrah's original good — generosity, compassion, truthfulness, remembrance of God. Imām al-Ghazālī taught that the angelic and the appetitive/aggressive drives are in constant tension; spiritual practice is what tips the balance toward the angelic.`
  },
  hedonistic: {
    tag: '◔',
    title: 'Hedonistic Drive (Shahwah)',
    body: `The appetitive drive for pleasure, comfort, and consumption. Al-Ghazālī was explicit that shahwah is not inherently evil — it becomes destructive only when indulged without restraint, tipping into overconsumption, avoidance, or self-gratification at others' expense.`
  },
  satanic: {
    tag: '◔',
    title: 'Satanic Drive',
    body: `Emerges specifically when the hedonistic and aggressive drives are left unchecked — it is not a separate, independent force so much as the corrupted overflow of appetite and aggression once they escape the regulation of ʾaql and nafs lawwāmah.`
  },
  aggressive: {
    tag: '◔',
    title: 'Aggressive Drive (Ghaḍab)',
    body: `The survival drive behind anger and self-protection. Scholars such as Ashraf Ali Thanwi noted that a person entirely without anger "may not survive" a real threat — but unchecked ghaḍab tips into impulsivity and harm. Like shahwah, it is a drive to be regulated, not eliminated.`
  }
};

const PROCESS_DATA = {
  1: {
    principle: 'Compliance', principleAr: 'Inqiyād',
    mechanism: 'Alliance', mechanismAr: 'Murābaṭah',
    body: `The groundwork stage. The clinician builds a strong therapeutic bond while assessing motivation to change, religiosity, and where in the psyche dysfunction originates. Through empathic attunement, the patient becomes willing to embrace the demands of the process ahead — including the uncomfortable work still to come.`
  },
  2: {
    principle: 'Introspective Self-Awareness', principleAr: 'Inkishāf',
    mechanism: 'Uncovering', mechanismAr: 'Mukāshafah',
    body: `The clinician walks the patient through the ontological model itself, co-conceptualizing their struggles in its terms. Acting as a psychospiritual mirror, the Rafīq helps the patient notice — moment to moment — which part of the psyche is activated, since so much of human behavior runs beneath conscious awareness.`
  },
  3: {
    principle: 'Psychospiritual Equilibrium', principleAr: "Iʿtidāl",
    mechanism: 'Intervention', mechanismAr: "Muʿālajah",
    body: `The most directive stage. Treatment targets whichever element is the primary source of dysfunction first: contemplation and psychoeducation for cognition, expression and regulation for emotion, confronting avoidance for behavioral inclination, and remembrance practices to fill spiritual emptiness. Unhealthy patterns are cleared before virtuous ones are implanted.`
  },
  4: {
    principle: 'Integrative Unity', principleAr: 'Ittiḥād',
    mechanism: 'Continuity', mechanismAr: 'Muwāṣalah',
    body: `Reached only once a bond is formed, awareness is built, and balance is restored. All elements of the psyche now serve the same purpose — fragmentation gives way to a holistic, integrated experience. From here, the individual can take up higher-level spiritual practice to build lasting resilience.`
  }
};

const CASE_DATA = {
  ihsas: `Harris's primary issue began with his <strong>iḥsās</strong> — emotions of sadness rooted in unmet needs for connection. These surfaced as anxiety and depression, with anger acting as a secondary emotion that masked his underlying helplessness whenever he felt overwhelmed or lost control.`,
  nafs: `His unmet emotional needs also drove repressed <strong>nafsānī</strong> patterns: avoiding confrontation by leaving the house, verbally lashing out, over-sleeping, over-eating, seeking constant approval, and self-praise — all "childlike" behaviors rooted in the nafs al-ammārah stage.`,
  aql: `His <strong>ʾaql</strong> tended toward catastrophizing and negative thinking whenever his emotions were triggered — yet his religious education gave him real capacity for positive self-talk and reframing once he could access it outside moments of high arousal.`,
  ruh: `Engaging his <strong>rūḥ</strong> through prayer and asking God for relief measurably reduced his distress. But when he drifted from these practices, his patience and God-consciousness weakened, and his behavioral extremes returned.`,
  qalb: `All of these extremes — emotional, behavioral, cognitive, and spiritual — ultimately registered on his <strong>qalb</strong>, the heart that absorbs the condition of every other layer. Restoring balance across the other four elements was what allowed his heart to settle.`
};

// ============ Nav: scroll progress + active link + mobile toggle ============
const navProgress = document.getElementById('navProgress');
const navLinks = document.querySelectorAll('[data-nav]');
const sections = document.querySelectorAll('main section[id]');

function onScroll() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  navProgress.style.width = `${Math.min((scrollTop / docHeight) * 100, 100)}%`;

  let current = '';
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 140 && rect.bottom > 140) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const navToggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinksEl.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
navLinksEl.addEventListener('click', e => {
  if (e.target.matches('a')) navLinksEl.classList.remove('open');
});

// ============ Scroll reveal ============
const revealItems = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      if (entry.target.classList.contains('stat-card')) {
        entry.target.querySelector('.stat-fill').classList.add('animate');
      }
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealItems.forEach(item => revealObserver.observe(item));

// ============ Psyche diagram interactivity ============
const psycheNodes = document.querySelectorAll('#psycheDiagram [data-node]');
const pdTitle = document.getElementById('pdTitle');
const pdBody = document.getElementById('pdBody');
const psycheDetail = document.getElementById('psycheDetail');

psycheNodes.forEach(node => {
  node.addEventListener('click', () => {
    const key = node.getAttribute('data-node');
    const data = PSYCHE_DATA[key];
    if (!data) return;
    psycheNodes.forEach(n => n.classList.remove('active'));
    node.classList.add('active');
    psycheDetail.querySelector('.pd-eyebrow')?.remove();
    let tag = psycheDetail.querySelector('.pd-tag');
    if (!tag) {
      tag = document.createElement('span');
      tag.className = 'pd-tag';
      psycheDetail.insertBefore(tag, pdTitle);
    }
    tag.textContent = data.tag;
    pdTitle.textContent = data.title;
    pdBody.innerHTML = data.body;
  });
});

// ============ Process stepper interactivity ============
const steps = document.querySelectorAll('.step');
const stepperFill = document.getElementById('stepperFill');
const principleTitle = document.getElementById('principleTitle');
const principleAr = document.getElementById('principleAr');
const mechanismTitle = document.getElementById('mechanismTitle');
const mechanismAr = document.getElementById('mechanismAr');
const processBody = document.getElementById('processBody');

function setStage(n) {
  steps.forEach(s => s.classList.toggle('active', s.getAttribute('data-step') === String(n)));
  const pct = ((n - 1) / 3) * 100;
  stepperFill.style.width = `${pct}%`;
  const data = PROCESS_DATA[n];
  principleTitle.textContent = data.principle;
  principleAr.textContent = data.principleAr;
  mechanismTitle.textContent = data.mechanism;
  mechanismAr.textContent = data.mechanismAr;
  processBody.textContent = data.body;
}
steps.forEach(step => {
  step.addEventListener('click', () => setStage(step.getAttribute('data-step')));
});
setStage(1);

// ============ Case study tabs ============
const caseTabs = document.querySelectorAll('.case-tab');
const caseBody = document.getElementById('caseBody');
caseTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const key = tab.getAttribute('data-case');
    caseTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    caseBody.innerHTML = CASE_DATA[key];
  });
});
caseTabs[0]?.classList.add('active');
