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

dialog?.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// Reveal content as it enters the viewport.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealTargets = document.querySelectorAll(
    '.about-section, .project-card, .timeline article, .skill-grid article, .certificate-card, .milestone-row, .update-card, .contact-inner'
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