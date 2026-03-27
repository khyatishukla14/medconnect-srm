// AUTH — Login, logout, role switching

function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.role-tab').forEach((t, i) => {
    if ((i === 0 && role === 'student') || (i === 1 && role === 'doctor')) {
      t.classList.add('active');
    }
  });
  document.getElementById('login-email').value =
    role === 'student' ? 'RA2211003010001@srmist.edu.in' : 'dr.priya@srmist.edu.in';
}

function doLogin() {
  const email = document.getElementById('login-email').value;
  if (!email) return;

  if (currentRole === 'student') {
    currentUser = { name: 'Arjun Menon', initials: 'AM', role: 'student', dept: 'CSE – III Year' };
    chatContacts = CHAT_CONTACTS_STUDENT;
  } else {
    currentUser = { name: 'Dr. Priya Suresh', initials: 'PS', role: 'doctor', dept: 'General Medicine' };
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