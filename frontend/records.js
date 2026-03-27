// ═══════════════════════════════════════════════════
// RECORDS — Prescriptions & booking receipt cards
// ═══════════════════════════════════════════════════

function buildRecords() {
  buildRxList();
  buildBookingCards();
}

function buildRxList() {
  const el = document.getElementById('rx-list');
  el.innerHTML = PRESCRIPTIONS.map(rx => rxCardHTML(rx)).join('');
}

function rxCardHTML(rx) {
  return `
    <div class="rx-card" style="margin-bottom:20px;">
      <div class="rx-header">
        <div>
          <h3>Prescription</h3>
          <div class="rx-date">${rx.date} · ${rx.dept}</div>
          <div style="margin-top:6px;font-size:13px;opacity:0.8;">${rx.doctor.replace('Dr. ', 'Dr. ')}</div>
        </div>
        <div class="rx-symbol">℞</div>
      </div>
      <div class="rx-body">
        <div class="rx-patient">
          <div class="field"><label>Patient</label><span>${rx.patient}</span></div>
          <div class="field"><label>Reg. No.</label><span>${rx.reg}</span></div>
          <div class="field"><label>Diagnosis</label><span>${rx.diagnosis}</span></div>
          <div class="field"><label>Rx ID</label>
            <span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--accent);">${rx.id}</span>
          </div>
        </div>
        <div class="rx-meds">
          <h4>Medications</h4>
          ${rx.meds.map((m, i) => `
            <div class="med-row">
              <div class="med-num">${i + 1}</div>
              <div>
                <div class="med-name">${m.name}</div>
                <div class="med-dose">${m.dose} · ${m.dur}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="rx-notes">⚠️ ${rx.notes}</div>
      </div>
      <div class="rx-footer">
        <div>
          <div style="font-size:12px;color:var(--text3);">Prescribed by</div>
          <div class="doc-sig">${rx.doctor}</div>
        </div>
        <button class="btn-sm" onclick="window.print()">🖨️ Print</button>
      </div>
    </div>
  `;
}

function buildBookingCards() {
  const el = document.getElementById('booking-cards-list');
  const allAppts = [...UPCOMING_APPTS, ...PAST_APPTS];
  el.innerHTML = allAppts.map(a => bookingCardHTML(a)).join('');
}

function bookingCardHTML(a) {
  const qr = a.id.replace('APT', '');
  return `
    <div class="booking-card">
      <div class="booking-card-header">
        <div class="logo">SRM <span>MedConnect</span></div>
        <div style="font-size:12px;opacity:0.6;margin-top:2px;">Student Health Services</div>
        <div style="font-size:12px;margin-top:10px;opacity:0.8;">APPOINTMENT CARD</div>
      </div>
      <div class="booking-card-body">
        <div class="bk-row"><div><div class="bk-label">Patient</div><div class="bk-value">${currentUser.name}</div></div></div>
        <div class="bk-row"><div><div class="bk-label">Doctor</div><div class="bk-value">${a.doctor}</div></div></div>
        <div class="bk-row">
          <div><div class="bk-label">Department</div><div class="bk-value" style="font-size:13px;">${a.dept}</div></div>
          <div style="text-align:right;"><div class="bk-label">Date</div><div class="bk-value">${a.date} ${a.month}</div></div>
        </div>
        <div class="bk-row">
          <div><div class="bk-label">Time</div><div class="bk-value">${a.time}</div></div>
          <div style="text-align:right;"><div class="bk-label">Status</div>
            <div class="bk-value" style="color:${a.status === 'confirmed' ? 'var(--green)' : 'var(--amber)'};">
              ${a.status.toUpperCase()}
            </div>
          </div>
        </div>
        <div class="bk-qr">
          <div class="qr-mock">▄▀▄<br>▀█▀<br>▄▀▄<br>${qr.slice(0, 6)}</div>
        </div>
        <hr class="bk-divider"/>
        <div style="text-align:center;">
          <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">BOOKING ID</div>
          <div class="booking-id">${a.id}</div>
          <div style="font-size:11px;color:var(--text3);margin-top:8px;">Show this at the clinic reception</div>
        </div>
      </div>
    </div>
  `;
}