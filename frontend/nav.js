// ═══════════════════════════════════════════════════
// NAV — Sidebar navigation & page routing
// ═══════════════════════════════════════════════════

function buildNav() {
  document.getElementById('nav-avatar').textContent = currentUser.initials;
  document.getElementById('nav-name').textContent = currentUser.name;

  const links = currentRole === 'student' ? [
    { id: 'home', label: '🏥 Find Doctor' },
    { id: 'appointments', label: '📅 Appointments', badge: true },
    { id: 'records', label: '📋 My Records' },
    { id: 'chat', label: '💬 Messages', badge: true },
  ] : [
    { id: 'doc-dashboard', label: '📊 Dashboard', badge: true },
    { id: 'doc-patients', label: '👥 My Patients' },
    { id: 'doc-prescription', label: '📝 Prescriptions' },
    { id: 'chat', label: '💬 Messages', badge: true },
  ];

  const nav = document.getElementById('nav-links');
  nav.innerHTML = links.map(l => `
    <button class="nav-link" onclick="showPage('${l.id}')" id="nav-${l.id}">
      ${l.label}
      ${l.badge ? '<span class="badge"></span>' : ''}
    </button>
  `).join('');
}

function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
  const pageEl = document.getElementById('page-' + id);
  if (pageEl) pageEl.classList.add('active');
  const navEl = document.getElementById('nav-' + id);
  if (navEl) navEl.classList.add('active');
}

// ─── Tab Helpers ────────────────────────────────────
function switchTab(group, panel, btn) {
  const prefix = group + '-tab-';
  document.querySelectorAll('[id^="' + prefix + '"]').forEach(p => p.classList.remove('active'));
  document.getElementById(prefix + panel)?.classList.add('active');
  if (btn) {
    btn.closest('.tab-bar').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

function switchTabDirect(group, panel) {
  const prefix = group + '-tab-';
  document.querySelectorAll('[id^="' + prefix + '"]').forEach(p => p.classList.remove('active'));
  document.getElementById(prefix + panel)?.classList.add('active');
}