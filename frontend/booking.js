// ═══════════════════════════════════════════════════
// BOOKING — Modal, confirmation, ID generation
// ═══════════════════════════════════════════════════

function openBookingModal(docId) {
  const dept = DEPARTMENTS.find(d => d.id === selectedDept);
  const doc = (DOCTORS[selectedDept] || []).find(d => d.id === docId);
  if (!doc || !selectedSlot) return;

  pendingBooking = { docId, doc, dept, slot: selectedSlot };
  document.getElementById('modal-desc').textContent =
    `Booking with ${doc.name} (${dept.name}) at ${selectedSlot}`;
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

  const now = new Date();
  UPCOMING_APPTS.unshift({
    id,
    doctor: pendingBooking.doc.name,
    dept: pendingBooking.dept.name,
    date: (now.getDate() + 1).toString(),
    month: now.toLocaleString('default', { month: 'short' }),
    time: pendingBooking.slot + ' AM',
    status: 'pending',
    reason
  });

  // Mark slot as booked in the data
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
  setTimeout(() => switchTabDirect('rec', 'bookings'), 100);
}