// STATE — Global app state
// Centralised here so all modules can import/mutate

let currentRole = 'student';
let currentUser = {};
let selectedDept = null;
let selectedDoctor = null;
let selectedSlot = null;
let pendingBooking = {};
let lastBookingId = '';
let activeChatId = null;
let chatContacts = [];