// ═══════════════════════════════════════════════════
// PRESCRIPTION — Write, issue & preview prescriptions
// ═══════════════════════════════════════════════════

function addMedRow() {
  const div = document.createElement('div');
  div.className = 'med-input-row';
  div.innerHTML = `
    <div class="form-group" style="margin:0;"><input type="text" placeholder="Medicine name"/></div>
    <div class="form-group" style="margin:0;"><input type="text" placeholder="Dosage"/></div>
    <div class="form-group" style="margin:0;"><input type="text" placeholder="Duration"/></div>
    <button class="btn-danger" onclick="this.closest('.med-input-row').remove()">✕</button>
  `;
  document.getElementById('meds-list').appendChild(div);
}

function clearRxForm() {
  document.getElementById('rx-patient-name').value = '';
  document.getElementById('rx-patient-reg').value = '';
  document.getElementById('rx-diagnosis').value = '';
}

function issueRx() {
  const name = document.getElementById('rx-patient-name').value || 'Patient';
  const reg = document.getElementById('rx-patient-reg').value || '—';
  const diagnosis = document.getElementById('rx-diagnosis').value || '—';
  const date = document.getElementById('rx-date').value;

  // Collect medicine rows
  const medRows = document.getElementById('meds-list').querySelectorAll('.med-input-row');
  const meds = [];
  medRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    if (inputs[0]?.value) {
      meds.push({ name: inputs[0].value, dose: inputs[1]?.value || '—', dur: inputs[2]?.value || '—' });
    }
  });

  const rx = {
    id: 'RX' + Date.now().toString().slice(-7),
    date: new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
    doctor: currentUser.name,
    dept: currentUser.dept,
    patient: name,
    reg,
    diagnosis,
    meds,
    notes: 'Follow prescribed dosage. Return if symptoms worsen.'
  };

  PRESCRIPTIONS.unshift(rx);
  alert('✅ Prescription issued successfully! ID: ' + rx.id);
  buildRxPreview();
}

function buildRxPreview() {
  const rx = PRESCRIPTIONS[0] || {
    id: 'RX—',
    date: '—',
    doctor: currentUser.name || 'Dr. Priya Suresh',
    dept: 'General Medicine',
    patient: 'Preview Patient',
    reg: 'RA—',
    diagnosis: '—',
    meds: [{ name: 'Medicine Name', dose: 'Dosage', dur: 'Duration' }],
    notes: 'Notes will appear here.'
  };
  const el = document.getElementById('rx-preview');
  if (el) el.innerHTML = rxCardHTML(rx);
}