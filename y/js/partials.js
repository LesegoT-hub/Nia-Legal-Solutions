// ============================================================
// PARTIALS — shared header + footer injected into every page
// Each page sets <body data-base="..." data-page="..."> so links
// resolve correctly from any folder depth and the active nav
// item is highlighted.
// ============================================================

(function () {
  const body = document.body;
  const base = body.getAttribute('data-base') || '';
  const page = body.getAttribute('data-page') || 'home';

  const LOGO_MARK = `
    <svg class="mark" viewBox="0 0 40 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="5.5" r="2.8" fill="#16294c"/>
      <path d="M20 8.3V40" stroke="#16294c" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 13.5H32" stroke="#16294c" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 13.5L3.5 25H12.5L8 13.5Z" stroke="#16294c" stroke-width="2" stroke-linejoin="round" fill="rgba(191,139,51,.14)"/>
      <path d="M32 13.5L27.5 25H36.5L32 13.5Z" stroke="#16294c" stroke-width="2" stroke-linejoin="round" fill="rgba(191,139,51,.14)"/>
      <path d="M14 40H26" stroke="#16294c" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M16.5 40C16.5 37.2 18 36 20 36C22 36 23.5 37.2 23.5 40" stroke="#16294c" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`;

  const LOGO_MARK_LIGHT = `
    <svg class="mark" viewBox="0 0 40 48" fill="none" aria-hidden="true">
      <circle cx="20" cy="6" r="3" fill="#fff"/>
      <path d="M20 9V42" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 14H32" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M8 14L3 26H13L8 14Z" stroke="#fff" stroke-width="2" stroke-linejoin="round" fill="rgba(191,139,51,.18)"/>
      <path d="M32 14L27 26H37L32 14Z" stroke="#fff" stroke-width="2" stroke-linejoin="round" fill="rgba(191,139,51,.18)"/>
      <path d="M13 42H27" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M16 42C16 39 17.5 38 20 38C22.5 38 24 39 24 42" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    </svg>`;

  const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const NAV = [
    { id: 'home',         label: 'Home',           href: base + 'index.html' },
    { id: 'about',        label: 'About Us',       href: base + 'about/index.html' },
    { id: 'practice',     label: 'Practice Areas', href: base + 'practice-areas/index.html' },
    { id: 'contact',      label: 'Contact',        href: base + 'contact/index.html' },
  ];

  const consultHref = base + 'consultation/index.html';

  // ---------- HEADER ----------
  const navItems = NAV.map(
    (n) => `<a href="${n.href}"${n.id === page ? ' class="active"' : ''}>${n.label}</a>`
  ).join('\n      ');

  const header = `
  <div class="wrap nav">
  <a class="logo" href="${base}index.html" aria-label="NIA Legal Solutions home">
  ${LOGO_MARK}
  <span class="word"><b>NIA</b><span>LEGAL SOLUTIONS</span></span>
</a>
    <nav class="nav-links" id="navLinks">
      ${navItems}
      <a class="btn btn-gold${page === 'consultation' ? ' active' : ''}" href="${consultHref}">Schedule a Consultation</a>
    </nav>
    <button class="menu-btn" id="menuBtn" aria-label="Toggle menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18" stroke-linecap="round"/></svg>
    </button>
  </div>`;

  const headerEl = document.querySelector('header');
  if (headerEl) headerEl.innerHTML = header;

  // ---------- FOOTER ----------
  const footer = `
  <div class="wrap foot-grid">
    <div class="foot-col foot-brand">
      <span class="logo on-dark">
        ${LOGO_MARK_LIGHT}
        <span class="word"><b>NIA</b><span>LEGAL SOLUTIONS</span></span>
      </span>
      <p>Where Law, Strategy and Technology Align</p>
      <div class="socials">
        <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9V9Z"/></svg></a>
        <a href="mailto:nia@nialegalsolutions.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg></a>
      </div>
    </div>

    <div class="foot-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="${base}index.html">Home</a></li>
        <li><a href="${base}about/index.html">About Us</a></li>
        <li><a href="${base}practice-areas/index.html">Practice Areas</a></li>
        <li><a href="${base}contact/index.html">Contact</a></li>
        <li><a href="${consultHref}">Schedule a Consultation</a></li>
      </ul>
    </div>

    <div class="foot-col">
      <h4>Practice Areas</h4>
      <ul>
        <li><a href="${base}practice-areas/index.html#business-law">Business Law</a></li>
        <li><a href="${base}practice-areas/index.html#contracts">Contracts &amp; Agreements</a></li>
        <li><a href="${base}practice-areas/index.html#risk">Risk &amp; Compliance</a></li>
        <li><a href="${base}practice-areas/index.html#technology">Technology Law</a></li>
        <li><a href="${base}practice-areas/index.html#disputes">Dispute Resolution</a></li>
      </ul>
    </div>

    <div class="foot-col contact-col">
      <h4>Contact Us</h4>
      <ul class="contact-list">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z"/></svg><a href="tel:073 926 2717">073 926 2717</a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg><a href="mailto:consultant@nialegalsolutions.co.za">consultant@nialegalsolutions.co.za</a></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg><span>www.nialegalsolutions.co.za</span></li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.3 7-11a7 7 0 0 0-14 0c0 4.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg><span>Blue Hills<br/>Midrand, Johannesburg 1685</span></li>
      </ul>
    </div>
  </div>

  <div class="wrap foot-bottom">
    <span>© 2026 NIA Legal Solutions. All rights reserved.</span>
    <div class="legal">
      <a href="#">Privacy Policy</a>
      <span>|</span>
      <a href="#">Terms of Use</a>
    </div>
  </div>`;

  const footerEl = document.querySelector('footer');
  if (footerEl) footerEl.innerHTML = footer;

  // ---------- MOBILE NAV TOGGLE ----------
  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }
})();
