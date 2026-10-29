const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

menuToggle?.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!open));
  siteNav?.classList.toggle('is-open', !open);
});

siteNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuToggle?.setAttribute('aria-expanded', 'false');
  siteNav?.classList.remove('is-open');
}));

const data = window.PORTFOLIO_CONTENT ?? { certificates: [], updates: [] };
const projectGrid = document.querySelector('#project-grid');

function renderProjects(filter = 'all') {
  if (!projectGrid) return;
  const projects = (data.projects ?? []).filter((project) => filter === 'all' || project.filter === filter);
  projectGrid.replaceChildren();

  projects.forEach((project) => {
    const card = document.createElement('details');
    card.className = `project-card project-case${project.number === '03' ? ' project-cyber' : ''}`;
    card.dataset.filter = project.filter;

    const summary = document.createElement('summary');
    summary.className = 'project-summary';
    if (project.visual) {
      const media = document.createElement('figure');
      media.className = 'project-media';
      const image = document.createElement('img');
      image.src = project.visual;
      image.alt = project.visualAlt || `${project.title} visual`;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.width = 960;
      image.height = 540;
      const visualLabel = document.createElement('figcaption');
      visualLabel.textContent = project.visualLabel || 'Project visual';
      media.append(image, visualLabel);
      summary.append(media);
    }
    const top = document.createElement('span');
    top.className = 'project-top';
    const category = document.createElement('span');
    category.textContent = project.category;
    const number = document.createElement('span');
    number.textContent = project.number;
    top.append(category, number);

    const title = document.createElement('h3');
    title.textContent = project.title;
    const intro = document.createElement('p');
    intro.className = 'project-summary-copy';
    intro.textContent = project.summary;
    const cue = document.createElement('span');
    cue.className = 'project-expand-cue';
    cue.textContent = 'Explore case study';
    summary.append(top, title, intro, cue);

    const body = document.createElement('div');
    body.className = 'project-case-body';
    if (project.credit) {
      const credit = document.createElement('p');
      credit.className = 'project-credit';
      credit.textContent = project.credit;
      body.append(credit);
    }
    const facts = [
      ['The challenge', project.challenge],
      ['What I built', project.approach],
      ['Focus', project.focus]
    ];
    facts.forEach(([label, value]) => {
      const block = document.createElement('div');
      block.className = 'project-fact';
      const heading = document.createElement('h4');
      heading.textContent = label;
      const copy = document.createElement('p');
      copy.textContent = value;
      block.append(heading, copy);
      body.append(block);
    });

    if (project.stack?.length) {
      const tech = document.createElement('div');
      tech.className = 'project-tech';
      const label = document.createElement('span');
      label.className = 'project-tech-label';
      label.textContent = 'TECH';
      const tags = document.createElement('div');
      tags.className = 'project-tech-tags';
      project.stack.forEach((item) => {
        const tag = document.createElement('span');
        tag.textContent = item;
        tags.append(tag);
      });
      tech.append(label, tags);
      body.append(tech);
    }

    const status = document.createElement('p');
    status.className = 'project-status';
    status.textContent = project.status;
    body.append(status);
    if (project.note) {
      const note = document.createElement('p');
      note.className = 'project-caveat';
      note.textContent = project.note;
      body.append(note);
    }
    if (project.links?.length) {
      const links = document.createElement('div');
      links.className = 'project-links';
      project.links.forEach(({ label, url }) => links.append(makeLink(label, url)));
      body.append(links);
    }

    card.append(summary, body);
    projectGrid.append(card);
  });
}

renderProjects();
document.querySelectorAll('[data-project-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-project-filter]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    renderProjects(button.dataset.projectFilter);
  });
});

const certificateGrid = document.querySelector('#certificate-grid');
const updatesList = document.querySelector('#updates-list');
const dialog = document.querySelector('#certificate-dialog');
const dialogImage = dialog?.querySelector('img');
const dialogPlaceholder = dialog?.querySelector('.certificate-dialog-placeholder');
const dialogMeta = dialog?.querySelector('#certificate-dialog-meta');
const dialogTitle = dialog?.querySelector('#certificate-dialog-title');
const dialogDescription = dialog?.querySelector('#certificate-dialog-description');
const dialogCredential = dialog?.querySelector('#certificate-dialog-id');
const dialogSource = dialog?.querySelector('.certificate-dialog-source');

function makeLink(label, url, className = '') {
  const link = document.createElement('a');
  link.href = url;
  link.textContent = label;
  link.target = '_blank';
  link.rel = 'noreferrer';
  if (className) link.className = className;
  return link;
}

data.certificates.forEach((certificate) => {
  const card = document.createElement('article');
  card.className = 'certificate-card';

  const openButton = document.createElement('button');
  openButton.className = 'certificate-open';
  openButton.type = 'button';
  openButton.setAttribute('aria-label', `Open certificate details: ${certificate.title}`);

  if (certificate.image) {
    const preview = document.createElement('div');
    preview.className = 'certificate-image-button';
    const image = document.createElement('img');
    image.src = certificate.image;
    image.alt = certificate.description || certificate.title;
    image.loading = 'lazy';
    image.decoding = 'async';
    preview.append(image);
    openButton.append(preview);
  } else {
    const visual = document.createElement('div');
    visual.className = 'certificate-art';
    visual.innerHTML = '<span>CREDENTIAL RECORD</span><strong>DETAILS</strong><small>OPEN TO VIEW CONTEXT</small>';
    openButton.append(visual);
  }

  const copy = document.createElement('div');
  copy.className = 'certificate-copy';
  const meta = document.createElement('p');
  meta.className = 'eyebrow';
  meta.textContent = [certificate.issuer, certificate.date].filter(Boolean).join(' · ');
  const title = document.createElement('h3');
  title.textContent = certificate.title;
  const kind = document.createElement('p');
  kind.className = 'certificate-kind';
  kind.textContent = certificate.kind || 'Certificate';
  const action = document.createElement('span');
  action.className = 'certificate-action';
  action.textContent = 'View certificate & details ↗';
  copy.append(meta, title, kind, action);
  openButton.append(copy);

  openButton.addEventListener('click', () => {
    if (!dialog || !dialogImage) return;
    const hasImage = Boolean(certificate.image);
    dialogImage.hidden = !hasImage;
    dialogPlaceholder.hidden = hasImage;
    if (hasImage) {
      dialogImage.src = certificate.image;
      dialogImage.alt = certificate.title;
    } else {
      dialogImage.removeAttribute('src');
      dialogImage.alt = '';
    }
    dialogMeta.textContent = [certificate.issuer, certificate.date].filter(Boolean).join(' · ');
    dialogTitle.textContent = certificate.title;
    dialogDescription.textContent = certificate.description || 'Certificate details will be added here.';
    dialogCredential.textContent = certificate.credentialId ? `Credential ID: ${certificate.credentialId}` : '';
    dialogCredential.hidden = !certificate.credentialId;
    dialogSource.hidden = !certificate.sourceUrl;
    if (certificate.sourceUrl) dialogSource.href = certificate.sourceUrl;
    dialog.showModal();
  });

  card.append(openButton);
  certificateGrid?.append(card);
});
data.updates.forEach((update) => {
  const card = document.createElement('article');
  card.className = 'update-card';
  const meta = document.createElement('p');
  meta.className = 'eyebrow';
  meta.textContent = `${update.category} · ${update.date}`;
  const title = document.createElement('h3');
  title.textContent = update.title;
  const summary = document.createElement('p');
  summary.className = 'update-summary';
  summary.textContent = update.summary;
  card.append(meta, title, summary, makeLink('Read the update ↗', update.url, 'update-link'));
  updatesList?.append(card);
});

// Turn compact skill lists into readable, scannable technology chips.
document.querySelectorAll('.skill-grid article p').forEach((list) => {
  const skills = list.textContent.split(' · ').map((skill) => skill.trim()).filter(Boolean);
  if (skills.length < 2) return;
  list.classList.add('skill-tags');
  list.replaceChildren(...skills.map((skill) => {
    const tag = document.createElement('span');
    tag.className = 'skill-tag';
    tag.textContent = skill;
    return tag;
  }));
});

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Reveal content as it enters the viewport.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealTargets = document.querySelectorAll(
    '.about-section, .project-card, .timeline article, .skill-grid article, .certificate-card, .milestone-row, .update-card, .answer-grid article, .contact-inner'
  );
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  revealTargets.forEach((element) => {
    element.classList.add('reveal');
    revealObserver.observe(element);
  });
}
