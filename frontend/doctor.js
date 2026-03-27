// ═══════════════════════════════════════════════════
// DOCTOR — Dashboard, schedule, patient list
// ═══════════════════════════════════════════════════

function buildDocDashboard() {
  const notifEl = document.getElementById('notif-list');
  notifEl.innerHTML = DOC_NOTIFS.map(n => `
    <div class="notif-item ${n.unread ? 'unread' : ''}" id="notif-${n.id}">
      <div class="notif-icon">${n.unread ? '🔔' : '📋'}</div>
      <div class="notif-content">
        <h4>${n.student}
          <span style="font-size:12px;font-weight:400;color:var(--text3);">${n.reg}</span>
        </h4>
        <p>${n.time} · <em>${n.reason}</em></p>
        <div class="notif-actions">
          <button class="btn-accept" onclick="acceptAppt('${n.id}')">✓ Accept</button>
          <button class="btn-reschedule" onclick="rescheduleAppt('${n.id}')">⟳ Reschedule</button>
          <button class="btn-decline" onclick="declineAppt('${n.id}')">✕ Decline</button>
        </div>
      </div>
    </div>
  `).join('');
  buildDocSchedule();
}

function buildDocSchedule() {
  const times = ['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00',
                 '01:00','01:30','02:00','02:30','03:00','03:30','04:00'];
  const booked = {
    '09:00': 'Arjun Menon',
    '10:30': 'Preethi Lakshmi',
    '02:00': 'Vikram Chandran'
  };
  const el = document.getElementById('doc-schedule');
  el.innerHTML = `
    <div class="schedule-grid">
      <div class="time-col">
        ${times.map(t => `<div class="time-slot-label">${t}</div>`).join('')}
      </div>
      <div class="sched-col">
        ${times.map(t => {
          if (booked[t]) {
            return `<div class="sched-slot sched-slot-filled">
              <span style="font-size:12px;font-weight:600;color:var(--accent);">${t}</span>
              <span style="font-size:13px;">${booked[t]}</span>
            </div>`;
          }
          return `<div class="sched-slot sched-slot-open"
            onclick="alert('Slot ${t} is currently open. You can mark it unavailable.')">
            <span style="font-size:12px;color:var(--text3);">${t}</span>
            <span style="font-size:11px;color:var(--green);margin-left:8px;">Open</span>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function acceptAppt(id) {
  const el = document.getElementById('notif-' + id);
  if (el) {
    el.classList.remove('unread');
    el.querySelector('.notif-actions').innerHTML =
      '<span style="color:var(--green);font-size:13px;font-weight:600;">✓ Accepted</span>';
  }
}

function declineAppt(id) {
  const el = document.getElementById('notif-' + id);
  if (el) el.remove();
}

function rescheduleAppt(id) {
  const newTime = prompt('Enter new time (e.g. 11:30 AM):');
  if (newTime) {
    const el = document.getElementById('notif-' + id);
    if (el) {
      const meta = el.querySelector('p');
      meta.textContent = 'Rescheduled to: ' + newTime + ' · ' + meta.textContent.split('·')[1];
      el.querySelector('.notif-actions').innerHTML =
        `<span style="color:var(--blue);font-size:13px;font-weight:600;">⟳ Rescheduled to ${newTime}</span>`;
    }
  }
}

function toggleAvailability() {
  const on = document.getElementById('doc-avail-toggle').checked;
  document.getElementById('avail-label').textContent = on ? 'Available' : 'Unavailable';
  document.getElementById('avail-label').style.color = on ? 'var(--green)' : 'var(--accent)';
}

function buildDocPatients() {
  const list = [
    { id:'APT001', student:'Arjun Menon', reg:'RA2211003010001', dept:'General Medicine', date:'21', month:'Mar', time:'09:00 AM', status:'confirmed', reason:'Fever & headache' },
    { id:'APT002', student:'Preethi Lakshmi', reg:'RA2211003010087', dept:'General Medicine', date:'21', month:'Mar', time:'10:30 AM', status:'confirmed', reason:'Follow-up' },
    { id:'APT003', student:'Vikram Chandran', reg:'RA2211003010042', dept:'General Medicine', date:'21', month:'Mar', time:'02:00 PM', status:'pending', reason:'Back pain' },
  ];
  const el = document.getElementById('doc-patients-list');
  el.innerHTML = list.map(a => `
    <div class="appt-item">
      <div class="appt-date-block">
        <div class="day">${a.date}</div>
        <div class="month">${a.month}</div>
      </div>
      <div class="appt-details">
        <h4>${a.student}
          <span style="font-size:12px;font-weight:400;color:var(--text3);font-family:'JetBrains Mono',monospace;">
            ${a.reg}
          </span>
        </h4>
        <div class="meta">${a.reason}</div>
      </div>
      <div class="appt-time">${a.time}</div>
      <span class="status-badge status-${a.status}">
        ${a.status.charAt(0).toUpperCase() + a.status.slice(1)}
      </span>
      <button class="btn-sm" onclick="showPage('doc-prescription')">📝 Prescribe</button>
    </div>
  `).join('');
}