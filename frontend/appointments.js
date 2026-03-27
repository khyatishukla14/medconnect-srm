// APPOINTMENTS — List, cancel, receipt

function buildAppointments() {
  const upEl = document.getElementById('upcoming-list');
  const pastEl = document.getElementById('past-list');

  upEl.innerHTML = UPCOMING_APPTS.map(a => apptItemHTML(a, true)).join('')
    || '<div class="empty-state"><div class="icon">📅</div><p>No upcoming appointments</p></div>';

  pastEl.innerHTML = PAST_APPTS.map(a => apptItemHTML(a, false)).join('')
    || '<div class="empty-state"><div class="icon">📅</div><p>No past appointments</p></div>';
}

function apptItemHTML(a, upcoming) {
  return `
    <div class="appt-item">
      <div class="appt-date-block">
        <div class="day">${a.date}</div>
        <div class="month">${a.month}</div>
      </div>
      <div class="appt-details">
        <h4>${a.doctor}</h4>
        <div class="meta">${a.dept} · ${a.reason}</div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text3);margin-top:2px;">${a.id}</div>
      </div>
      <div class="appt-time">${a.time}</div>
      <span class="status-badge status-${a.status}">
        ${a.status.charAt(0).toUpperCase() + a.status.slice(1)}
      </span>
      ${upcoming ? `<button class="btn-sm danger" onclick="cancelAppt('${a.id}')">Cancel</button>` : ''}
      ${upcoming ? `<button class="btn-sm" onclick="viewReceipt('${a.id}')">Receipt</button>` : ''}
    </div>
  `;
}

function cancelAppt(id) {
  const i = UPCOMING_APPTS.findIndex(a => a.id === id);
  if (i > -1) {
    // TODO: also remove from docData.booked when backend is integrated
    UPCOMING_APPTS.splice(i, 1);
  }
  buildAppointments();
}

function viewReceipt(id) {
  lastBookingId = id;
  buildRecords();
  showPage('records');
  setTimeout(() => switchTabDirect('rec', 'bookings'), 100);
}