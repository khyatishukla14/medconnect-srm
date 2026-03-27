// ═══════════════════════════════════════════════════
// DEPARTMENTS — Dept grid, doctor cards, slot selection
// ═══════════════════════════════════════════════════

function buildDeptGrid() {
  const grid = document.getElementById('dept-grid');
  grid.innerHTML = DEPARTMENTS.map(d => {
    const avail = d.available
      ? `<span class="dept-badge badge-green"><span class="dot dot-green"></span> Available</span>`
      : `<span class="dept-badge badge-red"><span class="dot dot-red"></span> Fully Booked</span>`;
    return `
      <div class="dept-card" onclick="openDept('${d.id}')">
        <div class="dept-icon">${d.icon}</div>
        <div class="dept-name">${d.name}</div>
        <div class="dept-info">${d.desc}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:6px;">${d.doctors} doctor${d.doctors > 1 ? 's' : ''} on duty</div>
        ${avail}
      </div>
    `;
  }).join('');
}

function openDept(id) {
  selectedDept = id;
  const dept = DEPARTMENTS.find(d => d.id === id);
  document.getElementById('dept-title').textContent = dept.icon + ' ' + dept.name;
  document.getElementById('dept-subtitle').textContent = dept.desc;
  buildDoctorGrid(id);
  showPage('doctors');
}

function buildDoctorGrid(deptId, filter = '') {
  const docs = (DOCTORS[deptId] || []).filter(d =>
    !filter || d.name.toLowerCase().includes(filter.toLowerCase())
  );
  const grid = document.getElementById('doctor-grid');

  if (!docs.length) {
    grid.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>No doctors found</p></div>';
    return;
  }

  grid.innerHTML = docs.map(d => {
    const freeSlots = d.slots.filter(s => !d.booked.includes(s));
    const availBadge = freeSlots.length > 3
      ? `<span class="dept-badge badge-green">🟢 ${freeSlots.length} slots available</span>`
      : freeSlots.length > 0
        ? `<span class="dept-badge badge-amber">🟡 ${freeSlots.length} slot${freeSlots.length > 1 ? 's' : ''} left</span>`
        : `<span class="dept-badge badge-red">🔴 Fully booked</span>`;

    const slotsHtml = d.slots.map(s =>
      `<div class="slot ${d.booked.includes(s) ? 'booked' : ''}" onclick="selectSlot(this,'${d.id}','${s}')">${s}</div>`
    ).join('');

    return `
      <div class="doctor-card" id="dc-${d.id}">
        <div class="doctor-header">
          <div class="doctor-avatar">${d.name.split(' ').map(w => w[0]).join('').slice(0, 2)}</div>
          <div class="doctor-info">
            <h4>${d.name}</h4>
            <div class="spec">${d.spec}</div>
            <div style="font-size:12px;color:var(--text2);">⭐ ${d.rating} · ${d.exp} experience</div>
          </div>
        </div>
        ${availBadge}
        <div class="available-slots" style="margin-top:12px;">
          <div style="font-size:12px;font-weight:600;color:var(--text2);margin-bottom:6px;">Select Time Slot</div>
          <div class="slots">${slotsHtml}</div>
        </div>
        <button class="btn-book" id="btn-book-${d.id}" disabled onclick="openBookingModal('${d.id}')">
          Select a slot to book
        </button>
      </div>
    `;
  }).join('');
}

function selectSlot(el, docId, slot) {
  if (el.classList.contains('booked')) return;
  // Deselect all slots in this card
  el.closest('.doctor-card').querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  selectedDoctor = docId;
  selectedSlot = slot;
  // Enable this card's book button
  const btn = document.getElementById('btn-book-' + docId);
  btn.disabled = false;
  btn.textContent = `Book ${slot} →`;
  // Disable other cards' book buttons
  document.querySelectorAll('.btn-book').forEach(b => {
    if (b.id !== 'btn-book-' + docId) {
      b.disabled = true;
      b.textContent = 'Select a slot to book';
    }
  });
}

function filterDoctors(val) {
  buildDoctorGrid(selectedDept, val);
}

function filterByAvailability(val) {
  buildDoctorGrid(selectedDept);
}