// ═══════════════════════════════════════════════════
// DATA — All static/mock data for the prototype
// In production, these will come from Flask API calls
// ═══════════════════════════════════════════════════

const DEPARTMENTS = [
  { id:'general', name:'General Medicine', icon:'🩺', desc:'Primary care, fever, flu & general health', doctors:3, available:true },
  { id:'dental', name:'Dental Clinic', icon:'🦷', desc:'Oral health, teeth cleaning, fillings', doctors:2, available:true },
  { id:'mental', name:'Counselling & Mental Health', icon:'🧠', desc:'Stress, anxiety, depression support', doctors:2, available:false },
  { id:'ortho', name:'Orthopaedics', icon:'🦴', desc:'Bone, joint & sports injuries', doctors:2, available:true },
  { id:'eye', name:'Ophthalmology', icon:'👁️', desc:'Eye care, vision testing, infections', doctors:1, available:true },
  { id:'ent', name:'ENT', icon:'👂', desc:'Ear, nose & throat specialist', doctors:2, available:false },
  { id:'derma', name:'Dermatology', icon:'🧴', desc:'Skin issues, acne, rashes, infections', doctors:1, available:true },
  { id:'gynaec', name:'Gynaecology', icon:'🌸', desc:"Women's health, reproductive care", doctors:1, available:true },
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
    { id:'d7', name:'Ms. Divya Rajan', spec:'M.Sc Psychology – Counsellor', exp:'7 yrs', rating:'4.9', slots:['09:00','10:00','11:00','01:00','02:00','03:00'], booked:['09:00','11:00'] },
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