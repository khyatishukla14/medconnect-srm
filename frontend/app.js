// ═══════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════
const DEPARTMENTS = [
  { id:'general', name:'General Medicine', icon:'🩺', desc:'Primary care, fever, flu & general health', doctors:3, available:true },
  { id:'dental', name:'Dental Clinic', icon:'🦷', desc:'Oral health, teeth cleaning, fillings', doctors:2, available:true },
  { id:'mental', name:'Counselling & Mental Health', icon:'🧠', desc:'Stress, anxiety, depression support', doctors:2, available:false },
  { id:'ortho', name:'Orthopaedics', icon:'🦴', desc:'Bone, joint & sports injuries', doctors:2, available:true },
  { id:'eye', name:'Ophthalmology', icon:'👁️', desc:'Eye care, vision testing, infections', doctors:1, available:true },
  { id:'ent', name:'ENT', icon:'👂', desc:'Ear, nose & throat specialist', doctors:2, available:false },
  { id:'derma', name:'Dermatology', icon:'🧴', desc:'Skin issues, acne, rashes, infections', doctors:1, available:true },
  { id:'gynaec', name:'Gynaecology', icon:'🌸', desc:'Women\'s health, reproductive care', doctors:1, available:true },
];

const DOCTORS = {
  general: [
    { id:'d1', name:'Dr. Priya Suresh', spec:'MBBS, MD – General Physician', exp:'12 yrs', rating:'4.9', slots:['09:00','09:30','10:30','11:00','02:00','03:00'], booked:['09:30','11:00'] },
    { id:'d2', name:'Dr. Ramesh Kumar', spec:'MBBS – General Physician', exp:'8 yrs', rating:'4.7', slots:['09:00','10:00','10:30','11:30','02:30','04:00'], booked:['09:00','10:00'] },
    { id:'d3', name:'Dr. Kavitha Nair', spec:'MBBS, MD – Internal Medicine', exp:'15 yrs', rating:'4.8', slots:['08:30','09:30','01:00','01:30','03:30'], booked:['08:30'] },
  ],
  dental: [
    { id:'d4', name:'Dr. Arun Mathew', spec:'BDS, MDS – Dental Surgeon', exp:'10 yrs', rating:'4.8', slots:['09:00','10:00','11:00','01:00','02:00'], booked:['11:00'] },
    { id:'d5', name:'Dr. Sneha Pillai', spec:'BDS – Dentist', exp:'6 yrs', rating:'4.6', slots:['09:30','10:30','02:30','03:30'], booked:[] },
  ],
  mental: [
    { id:'d6', name:'Dr. Meera Krishnan', spec:'MBBS, MD – Psychiatry', exp:'14 yrs', rating:'5.0', slots:['10:00','11:00','02:00','03:00'], booked:['10:00','11:00','02:00','03:00'] },
    { id:'d7', name:'Ms. Divya Rajan', spec$:'M.Sc Psychology – Counsellor', exp:'7 yrs', rating:'4.9', slots:['09:00','10:00','11:00','01:00','02:00','03:00'], booked:['09:00','11:00'] },
  ],
  ortho: [
    { id:'d8', name:'Dr. Suresh Babu', spec:'MBBS, MS – Orthopaedics', exp:'18 yrs', rating:'4.9', slots:['09:00','10:00','11:00','01:00'], booked:['09:00'] },
    { id:'d9', name:'Dr. Anitha Roy', spec:'MBBS – Ortho Resident', exp:'4 yrs', rating:'4.5', slots:['02:00','03:00','04:00'], booked:[] },
  ],
  eye: [
    { id:'d10', name:'Dr. Venkat Raman', spec:'MBBS, MS – Ophthalmology', exp:'16 yrs', rating:'4.8', slots:['09:00','10:30','12:00','02:00','03:30'], booked:['09:00','10:30'] },
  ],
  ent: [
    { id:'d11', name:'Dr. Lalitha Menon', spec:'MBBS, MS – ENT Specialist', exp:'11 yrs', rating:'4.7', slots:['10:00','11:00','02:00','03:00'], booked:['10:00','11:00','02:00','03:00'] },
    { id:'d12', name:'Dr. Kiran S.', spec:'MBBS – ENT Resident', exp:'3 yrs', rating:'4.4', slots:['09:30','10:30','01:30'], booked:['09:30','10:30','01:30'] },
  ],
  derma: [
    { id:'d13', name:'Dr. Pooja Chandran', spec:'MBBS, MD – Dermatology', exp:'9 yrs', rating:'4.9', slots:['09:00','10:00','11:00','02:00','03:00'], booked:['09:00'] },
  ],
  gynaec: [
    { id:'d14', name:'Dr. Saranya Bose', spec:'MBBS, MS – OB/GYN', exp:'13 yrs', rating:'5.0', slots:['09:00','10:00','11:00','01:00','02:00'], booked:['09:00','11:00'] },
  ],
};

const UPCOMING_APPTS = [
  { id:'APT2024001', doctor:'Dr. Priya Suresh', dept:'General Medicine', date:'21', month:'Mar', time:'10:30 AM', status:'confirmed', reason:'Fever & Cold' },
  { id:'APT2024002', doctor:'Dr. Arun Mathew', dept:'Dental Clinic', date:'25', month:'Mar', time:'09:00 AM', status:'pending', reason:'Tooth Pain' },
];
const PAST_APPTS = [
  { id:'APT2024000', doctor:'Dr. Kavitha Nair', dept:'General Medicine', date:'14', month:'Mar', time:'01:30 PM', status:'confirmed', reason:'Routine Check' },
];

const DOC_NOTIFS = [
  { id:'n1', student:'Arjun Menon', reg:'RA2211003010001', time:'09:00 AM Today', reason:'Fever & headache', unread:true },
  { id:'n2', student:'Preethi Lakshmi', reg:'RA2211003010087', time:'10:30 AM Today', reason:'Follow-up consultation', unread:true },
  { id:'n3', student:'Vikram Chandran', reg:'RA2211003010042', time:'02:00 PM Today', reason:'Back pain', unread:false },
];

const CHAT_CONTACTS_STUDENT = [
  { id:'c1', name:'Dr. Priya Suresh', spec:'General Medicine', avatar:'P', lastMsg:'Please drink warm fluids and rest well.', time:'10:32 AM', msgs:[
    { from:'doc', text:'Hello! How are you feeling today?', time:'10:20 AM' },
    { from:'me', text:'I have been having fever since yesterday evening, around 101°F.', time:'10:22 AM' },
    { from:'doc', text:'I see. Are you experiencing any body ache or sore throat along with the fever?', time:'10:24 AM' },
    { from:'me', text:'Yes, sore throat and slight body ache.', time:'10:26 AM' },
    { from:'doc', text:'Please drink warm fluids and rest well. I will prescribe something at your appointment tomorrow.', time:'10:32 AM' },
  ]},
  { id:'c2', name:'Dr. Arun Mathew', spec:'Dental Clinic', avatar:'A', lastMsg:'Avoid very cold/hot foods before your visit.', time:'Yesterday', msgs:[
    { from:'doc', text:'Hi! Saw your appointment booking for tooth pain. How long has it been?', time:'Yesterday 3:00 PM' },
    { from:'me', text:'About 2 days. The pain is on the upper left side.', time:'Yesterday 3:05 PM' },
    { from:'doc', text:'Avoid very cold/hot foods before your visit. See you on the 25th!', time:'Yesterday 3:10 PM' },
  ]},
];

const CHAT_CONTACTS_DOCTOR = [
  { id:'s1', name:'Arjun Menon', spec:'RA2211003010001 · CSE', avatar:'A', lastMsg:'Thank you doctor.', time:'10:40 AM', msgs:[
    { from:'me', text:'Hello Arjun! How are you feeling today?', time:'10:20 AM' },
    { from:'doc', text:'I have been having fever since yesterday evening, around 101°F.', time:'10:22 AM' },
    { from:'me', text:'Are you experiencing body ache as well?', time:'10:24 AM' },
    { from:'doc', text:'Yes, sore throat and slight body ache.', time:'10:26 AM' },
    { from:'me', text:'Drink warm fluids and rest. I will see you at your appointment.', time:'10:32 AM' },
    { from:'doc', text:'Thank you doctor.', time:'10:40 AM' },
  ]},
  { id:'s2', name:'Preethi Lakshmi', spec:'RA2211003010087 · ECE', avatar:'P', lastMsg:'Got it, I will follow the prescription.', time:'Yesterday', msgs:[
    { from:'me', text:'Hi Preethi! How is the medication working?', time:'Yesterday 2:00 PM' },
    { from:'doc', text:'Much better today, thank you!', time:'Yesterday 2:15 PM' },
    { from:'me', text:'Good. Continue the course for 5 days as prescribed.', time:'Yesterday 2:20 PM' },
    { from:'doc', text:'Got it, I will follow the prescription.', time:'Yesterday 2:25 PM' },
  ]},
];

const PRESCRIPTIONS = [
  {
    id:'RX2024001', date:'14 Mar 2025', doctor:'Dr. Kavitha Nair', dept:'General Medicine',
    patient:'Arjun Menon', reg:'RA2211003010001', diagnosis:'Acute Pharyngitis',
    meds:[
      { name:'Amoxicillin 500mg', dose:'1-0-1 after meals', dur:'5 days' },
      { name:'Paracetamol 650mg', dose:'0-1-1 (if fever)', dur:'3 days' },
      { name:'Betadine Gargle', dose:'Twice daily', dur:'7 days' },
    ],
    notes:'Rest well. Drink plenty of warm fluids. Return if fever persists beyond 3 days.'
  }
];

// STATE
let currentRole = 'student';
let currentUser = {};
let selectedDept = null;
let selectedDoctor = null;
let selectedSlot = null;
let pendingBooking = {};
let lastBookingId = '';
let activeChatId = null;
let chatContacts = [];

// ═══════════════════════════════════════════════════
// AUTH
// ═══════════════════════════════════════════════════
function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.role-tab').forEach((t,i) => { if((i===0&&role==='student')||(i===1&&role==='doctor')) t.classList.add('active'); });
  document.getElementById('login-email').value = role === 'student' ? 'RA2211003010001@srmist.edu.in' : 'dr.priya@srmist.edu.in';
}

function doLogin() {
  const email = document.getElementById('login-email').value;
  if (!email) return;
  if (currentRole === 'student') {
    currentUser = { name:'Arjun Menon', initials:'AM', role:'student', dept:'CSE – III Year' };
    chatContacts = CHAT_CONTACTS_STUDENT;
  } else {
    currentUser = { name:'Dr. Priya Suresh', initials:'PS', role:'doctor', dept:'General Medicine' };
    chatContacts = CHAT_CONTACTS_DOCTOR;
  }
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  buildNav();
  initApp();
}

function doLogout() {
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('app').style.display = 'none';
}

// ═══════════════════════════════════════════════════
// NAV
// ═══════════════════════════════════════════════════
function buildNav() {
  document.getElementById('nav-avatar').textContent = currentUser.initials;
  document.getElementById('nav-name').textContent = currentUser.name;
  const links = currentRole === 'student' ? [
    { id:'home', label:'🏥 Find Doctor' },
    { id:'appointments', label:'📅 Appointments', badge:true },
    { id:'records', label:'📋 My Records' },
    { id:'chat', label:'💬 Messages', badge:true },
  ] : [
    { id:'doc-dashboard', label:'📊 Dashboard', badge:true },
    { id:'doc-patients', label:'👥 My Patients' },
    { id:'doc-prescription', label:'📝 Prescriptions' },
    { id:'chat', label:'💬 Messages', badge:true },
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

// ═══════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════
function initApp() {
  // Set today's date for prescription form
  const today = new Date().toISOString().split('T')[0];
  const rxDateEl = document.getElementById('rx-date');
  if (rxDateEl) rxDateEl.value = today;

  if (currentRole === 'student') {
    buildDeptGrid();
    buildAppointments();
    buildRecords();
    buildChat();
    showPage('home');
  } else {
    buildDocDashboard();
    buildDocPatients();
    buildChat();
    buildRxPreview();
    showPage('doc-dashboard');
  }
}

// ═══════════════════════════════════════════════════
// DEPARTMENTS
// ═══════════════════════════════════════════════════
function buildDeptGrid() {
  const grid = document.getElementById('dept-grid');
  grid.innerHTML = DEPARTMENTS.map(d => {
    const avail = d.available ? `<span class="dept-badge badge-green"><span class="dot dot-green"></span> Available</span>` : `<span class="dept-badge badge-red"><span class="dot dot-red"></span> Fully Booked</span>`;
    return `
      <div class="dept-card" onclick="openDept('${d.id}')">
        <div class="dept-icon">${d.icon}</div>
        <div class="dept-name">${d.name}</div>
        <div class="dept-info">${d.desc}</div>
        <div style="font-size:12px;color:var(--text3);margin-top:6px;">${d.doctors} doctor${d.doctors>1?'s':''} on duty</div>
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

function buildDoctorGrid(deptId, filter='') {
  const docs = (DOCTORS[deptId] || []).filter(d => !filter || d.name.toLowerCase().includes(filter.toLowerCase()));
  const grid = document.getElementById('doctor-grid');
  if (!docs.length) { grid.innerHTML = '<div class="empty-state"><div class="icon">🔍</div><p>No doctors found</p></div>'; return; }
  grid.innerHTML = docs.map(d => {
    const freeSlots = d.slots.filter(s => !d.booked.includes(s));
    const availBadge = freeSlots.length > 3 ? `<span class="dept-badge badge-green">🟢 ${freeSlots.length} slots available</span>` :
                       freeSlots.length > 0 ? `<span class="dept-badge badge-amber">🟡 ${freeSlots.length} slot${freeSlots.length>1?'s':''} left</span>` :
                       `<span class="dept-badge badge-red">🔴 Fully booked</span>`;
    const slotsHtml = d.slots.map(s => `<div class="slot ${d.booked.includes(s)?'booked':''}" onclick="selectSlot(this,'${d.id}','${s}')">${s}</div>`).join('');
    return `
      <div class="doctor-card" id="dc-${d.id}">
        <div class="doctor-header">
          <div class="doctor-avatar">${d.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
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
  // Deselect others in same card
  el.closest('.doctor-card').querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
  el.classList.add('selected');
  selectedDoctor = docId;
  selectedSlot = slot;
  const btn = document.getElementById('btn-book-' + docId);
  btn.disabled = false;
  btn.textContent = `Book ${slot} →`;
  // Disable other cards' book buttons
  document.querySelectorAll('.btn-book').forEach(b => { if(b.id !== 'btn-book-'+docId) { b.disabled = true; b.textContent = 'Select a slot to book'; } });
}

function filterDoctors(val) { buildDoctorGrid(selectedDept, val); }
function filterByAvailability(val) { buildDoctorGrid(selectedDept); }

// ═══════════════════════════════════════════════════
// BOOKING
// ═══════════════════════════════════════════════════
function openBookingModal(docId) {
  const dept = DEPARTMENTS.find(d => d.id === selectedDept);
  const doc = (DOCTORS[selectedDept]||[]).find(d => d.id === docId);
  if (!doc || !selectedSlot) return;
  pendingBooking = { docId, doc, dept, slot: selectedSlot };
  document.getElementById('modal-desc').textContent = `Booking with ${doc.name} (${dept.name}) at ${selectedSlot}`;
  document.getElementById('booking-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('booking-modal').classList.remove('open');
}

function generateId() {
  return 'APT' + Date.now().toString().slice(-7);
}

function confirmBooking() {
  const reason = document.getElementById('modal-reason').value || 'General Consultation';
  const id = generateId();
  lastBookingId = id;
  // Add to upcoming
  const now = new Date();
  UPCOMING_APPTS.unshift({
    id, doctor: pendingBooking.doc.name, dept: pendingBooking.dept.name,
    date: (now.getDate()+1).toString(), month: now.toLocaleString('default',{month:'short'}),
    time: pendingBooking.slot + ' AM', status:'pending', reason
  });
  // Mark slot as booked
  const docData = DOCTORS[selectedDept].find(d => d.id === pendingBooking.docId);
  if (docData) docData.booked.push(pendingBooking.slot);
  closeModal();
  document.getElementById('booking-id-display').textContent = id;
  document.getElementById('success-modal').classList.add('open');
  buildAppointments();
}

function goToReceipt() {
  document.getElementById('success-modal').classList.remove('open');
  buildRecords();
  showPage('records');
  // Switch to bookings tab
  setTimeout(() => switchTabDirect('rec','bookings'), 100);
}

// ═══════════════════════════════════════════════════
// APPOINTMENTS
// ═══════════════════════════════════════════════════
function buildAppointments() {
  const upEl = document.getElementById('upcoming-list');
  const pastEl = document.getElementById('past-list');
  upEl.innerHTML = UPCOMING_APPTS.map(a => apptItemHTML(a, true)).join('') || '<div class="empty-state"><div class="icon">📅</div><p>No upcoming appointments</p></div>';
  pastEl.innerHTML = PAST_APPTS.map(a => apptItemHTML(a, false)).join('') || '<div class="empty-state"><div class="icon">📅</div><p>No past appointments</p></div>';
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
      <span class="status-badge status-${a.status}">${a.status.charAt(0).toUpperCase()+a.status.slice(1)}</span>
      ${upcoming ? `<button class="btn-sm danger" onclick="cancelAppt('${a.id}')">Cancel</button>` : ''}
      ${upcoming ? `<button class="btn-sm" onclick="viewReceipt('${a.id}')">Receipt</button>` : ''}
    </div>
  `;
}

function cancelAppt(id) {
  const i = UPCOMING_APPTS.findIndex(a => a.id === id);
  if (i > -1) UPCOMING_APPTS.splice(i, 1);
  buildAppointments();
}

function viewReceipt(id) {
  lastBookingId = id;
  buildRecords();
  showPage('records');
  setTimeout(() => switchTabDirect('rec','bookings'), 100);
}

// ═══════════════════════════════════════════════════
// RECORDS
// ═══════════════════════════════════════════════════
function buildRecords() {
  buildRxList();
  buildBookingCards();
}

function buildRxList() {
  const el = document.getElementById('rx-list');
  el.innerHTML = PRESCRIPTIONS.map(rx => rxCardHTML(rx)).join('');
  // Add newly issued ones
}

function rxCardHTML(rx) {
  return `
    <div class="rx-card" style="margin-bottom:20px;">
      <div class="rx-header">
        <div>
          <h3>Prescription</h3>
          <div class="rx-date">${rx.date} · ${rx.dept}</div>
          <div style="margin-top:6px;font-size:13px;opacity:0.8;">Dr. ${rx.doctor.replace('Dr. ','')}</div>
        </div>
        <div class="rx-symbol">℞</div>
      </div>
      <div class="rx-body">
        <div class="rx-patient">
          <div class="field"><label>Patient</label><span>${rx.patient}</span></div>
          <div class="field"><label>Reg. No.</label><span>${rx.reg}</span></div>
          <div class="field"><label>Diagnosis</label><span>${rx.diagnosis}</span></div>
          <div class="field"><label>Rx ID</label><span style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--accent);">${rx.id}</span></div>
        </div>
        <div class="rx-meds">
          <h4>Medications</h4>
          ${rx.meds.map((m,i) => `
            <div class="med-row">
              <div class="med-num">${i+1}</div>
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
  const qr = a.id.replace('APT','');
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
          <div style="text-align:right;"><div class="bk-label">Status</div><div class="bk-value" style="color:${a.status==='confirmed'?'var(--green)':'var(--amber)'};">${a.status.toUpperCase()}</div></div>
        </div>
        <div class="bk-qr">
          <div class="qr-mock">
            ▄▀▄<br>▀█▀<br>▄▀▄<br>${qr.slice(0,6)}
          </div>
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

// ═══════════════════════════════════════════════════
// CHAT
// ═══════════════════════════════════════════════════
function buildChat() {
  const listEl = document.getElementById('chat-list');
  listEl.innerHTML = chatContacts.map(c => `
    <div class="chat-item" onclick="openChat('${c.id}')" id="chat-item-${c.id}">
      <div class="chat-avatar">${c.avatar}</div>
      <div class="chat-item-info">
        <h5>${c.name}</h5>
        <p>${c.lastMsg}</p>
      </div>
      <div class="chat-time">${c.time}</div>
    </div>
  `).join('');
}

function openChat(id) {
  activeChatId = id;
  const contact = chatContacts.find(c => c.id === id);
  if (!contact) return;
  document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
  document.getElementById('chat-item-'+id)?.classList.add('active');
  document.getElementById('chat-doc-name').textContent = contact.name;
  document.getElementById('chat-doc-spec').textContent = contact.spec;
  document.getElementById('chat-doc-avatar').textContent = contact.avatar;
  const msgsEl = document.getElementById('chat-messages');
  msgsEl.innerHTML = contact.msgs.map(m => {
    const isSent = (currentRole==='student' && m.from==='me') || (currentRole==='doctor' && m.from==='me');
    return `
      <div class="msg ${isSent?'sent':'recv'}">
        <div class="msg-bubble">${m.text}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    `;
  }).join('');
  msgsEl.scrollTop = msgsEl.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !activeChatId) return;
  const contact = chatContacts.find(c => c.id === activeChatId);
  if (!contact) return;
  const now = new Date().toLocaleTimeString('en-US', {hour:'2-digit',minute:'2-digit'});
  contact.msgs.push({ from:'me', text, time: now });
  contact.lastMsg = text;
  contact.time = now;
  input.value = '';
  openChat(activeChatId);
  buildChat();
  // Simulate reply
  setTimeout(() => {
    const replies = [
      'Thank you for sharing. Let me check on that.',
      'I understand. Please make sure to follow the prescribed routine.',
      'That sounds like a concern we should discuss at your appointment.',
      'Got it! Is there anything else you\'d like to know?',
      'Please come in and we can do a proper examination.'
    ];
    const reply = replies[Math.floor(Math.random()*replies.length)];
    contact.msgs.push({ from:'doc', text:reply, time: new Date().toLocaleTimeString('en-US',{hour:'2-digit',minute:'2-digit'}) });
    contact.lastMsg = reply;
    if (activeChatId === contact.id) openChat(activeChatId);
    buildChat();
  }, 1200);
}

// ═══════════════════════════════════════════════════
// DOCTOR DASHBOARD
// ═══════════════════════════════════════════════════
function buildDocDashboard() {
  const notifEl = document.getElementById('notif-list');
  notifEl.innerHTML = DOC_NOTIFS.map(n => `
    <div class="notif-item ${n.unread?'unread':''}" id="notif-${n.id}">
      <div class="notif-icon">${n.unread?'🔔':'📋'}</div>
      <div class="notif-content">
        <h4>${n.student} <span style="font-size:12px;font-weight:400;color:var(--text3);">${n.reg}</span></h4>
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
  const times = ['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','01:00','01:30','02:00','02:30','03:00','03:30','04:00'];
  const booked = { '09:00':'Arjun Menon', '10:30':'Preethi Lakshmi', '02:00':'Vikram Chandran' };
  const el = document.getElementById('doc-schedule');
  el.innerHTML = `
    <div class="schedule-grid">
      <div class="time-col">
        ${times.map(t => `<div class="time-slot-label">${t}</div>`).join('')}
      </div>
      <div class="sched-col">
        ${times.map(t => {
          if (booked[t]) return `<div class="sched-slot sched-slot-filled"><span style="font-size:12px;font-weight:600;color:var(--accent);">${t}</span> <span style="font-size:13px;">${booked[t]}</span></div>`;
          return `<div class="sched-slot sched-slot-open" onclick="alert('Slot ${t} is currently open. You can mark it unavailable.')"><span style="font-size:12px;color:var(--text3);">${t}</span><span style="font-size:11px;color:var(--green);margin-left:8px;">Open</span></div>`;
        }).join('')}
      </div>
    </div>
  `;
}

function acceptAppt(id) {
  const el = document.getElementById('notif-'+id);
  if(el) { el.classList.remove('unread'); el.querySelector('.notif-actions').innerHTML = '<span style="color:var(--green);font-size:13px;font-weight:600;">✓ Accepted</span>'; }
}
function declineAppt(id) {
  const el = document.getElementById('notif-'+id);
  if(el) el.remove();
}
function rescheduleAppt(id) {
  const newTime = prompt('Enter new time (e.g. 11:30 AM):');
  if (newTime) {
    const el = document.getElementById('notif-'+id);
    if(el) {
      const meta = el.querySelector('p');
      meta.textContent = 'Rescheduled to: ' + newTime + ' · ' + meta.textContent.split('·')[1];
      el.querySelector('.notif-actions').innerHTML = '<span style="color:var(--blue);font-size:13px;font-weight:600;">⟳ Rescheduled to '+newTime+'</span>';
    }
  }
}

function toggleAvailability() {
  const on = document.getElementById('doc-avail-toggle').checked;
  document.getElementById('avail-label').textContent = on ? 'Available' : 'Unavailable';
  document.getElementById('avail-label').style.color = on ? 'var(--green)' : 'var(--accent)';
}

// ═══════════════════════════════════════════════════
// DOC PATIENTS
// ═══════════════════════════════════════════════════
function buildDocPatients() {
  const list = [
    { id:'APT001', student:'Arjun Menon', reg:'RA2211003010001', dept:'General Medicine', date:'21', month:'Mar', time:'09:00 AM', status:'confirmed', reason:'Fever & headache' },
    { id:'APT002', student:'Preethi Lakshmi', reg:'RA2211003010087', dept:'General Medicine', date:'21', month:'Mar', time:'10:30 AM', status:'confirmed', reason:'Follow-up' },
    { id:'APT003', student:'Vikram Chandran', reg:'RA2211003010042', dept:'General Medicine', date:'21', month:'Mar', time:'02:00 PM', status:'pending', reason:'Back pain' },
  ];
  const el = document.getElementById('doc-patients-list');
  el.innerHTML = list.map(a => `
    <div class="appt-item">
      <div class="appt-date-block"><div class="day">${a.date}</div><div class="month">${a.month}</div></div>
      <div class="appt-details">
        <h4>${a.student} <span style="font-size:12px;font-weight:400;color:var(--text3);font-family:'JetBrains Mono',monospace;">${a.reg}</span></h4>
        <div class="meta">${a.reason}</div>
      </div>
      <div class="appt-time">${a.time}</div>
      <span class="status-badge status-${a.status}">${a.status.charAt(0).toUpperCase()+a.status.slice(1)}</span>
      <button class="btn-sm" onclick="showPage('doc-prescription')">📝 Prescribe</button>
    </div>
  `).join('');
}

// ═══════════════════════════════════════════════════
// PRESCRIPTION WRITE
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
  document.getElementById('rx-patient-name').value='';
  document.getElementById('rx-patient-reg').value='';
  document.getElementById('rx-diagnosis').value='';
}

function issueRx() {
  const name = document.getElementById('rx-patient-name').value || 'Patient';
  const reg = document.getElementById('rx-patient-reg').value || '—';
  const diagnosis = document.getElementById('rx-diagnosis').value || '—';
  const date = document.getElementById('rx-date').value;
  // Collect meds
  const medRows = document.getElementById('meds-list').querySelectorAll('.med-input-row');
  const meds = [];
  medRows.forEach(row => {
    const inputs = row.querySelectorAll('input');
    if (inputs[0]?.value) meds.push({ name: inputs[0].value, dose: inputs[1]?.value||'—', dur: inputs[2]?.value||'—' });
  });
  const rx = {
    id: 'RX'+Date.now().toString().slice(-7),
    date: new Date(date).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'}),
    doctor: currentUser.name, dept: currentUser.dept,
    patient: name, reg, diagnosis, meds,
    notes: 'Follow prescribed dosage. Return if symptoms worsen.'
  };
  PRESCRIPTIONS.unshift(rx);
  alert('✅ Prescription issued successfully! ID: ' + rx.id);
  buildRxPreview();
}

function buildRxPreview() {
  const rx = PRESCRIPTIONS[0] || {
    id:'RX—', date:'—', doctor: currentUser.name||'Dr. Priya Suresh', dept:'General Medicine',
    patient:'Preview Patient', reg:'RA—', diagnosis:'—',
    meds:[{ name:'Medicine Name', dose:'Dosage', dur:'Duration' }],
    notes:'Notes will appear here.'
  };
  const el = document.getElementById('rx-preview');
  if (el) el.innerHTML = rxCardHTML(rx);
}

// ═══════════════════════════════════════════════════
// TAB HELPERS
// ═══════════════════════════════════════════════════
function switchTab(group, panel, btn) {
  const prefix = group + '-tab-';
  document.querySelectorAll('[id^="'+prefix+'"]').forEach(p => p.classList.remove('active'));
  document.getElementById(prefix+panel)?.classList.add('active');
  if (btn) {
    btn.closest('.tab-bar').querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}
function switchTabDirect(group, panel) {
  const prefix = group + '-tab-';
  document.querySelectorAll('[id^="'+prefix+'"]').forEach(p => p.classList.remove('active'));
  document.getElementById(prefix+panel)?.classList.add('active');
}
