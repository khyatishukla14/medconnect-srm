// ═══════════════════════════════════════════════════
// CHAT — Contact list, message thread, send & reply
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
  document.getElementById('chat-item-' + id)?.classList.add('active');
  document.getElementById('chat-doc-name').textContent = contact.name;
  document.getElementById('chat-doc-spec').textContent = contact.spec;
  document.getElementById('chat-doc-avatar').textContent = contact.avatar;

  const msgsEl = document.getElementById('chat-messages');
  msgsEl.innerHTML = contact.msgs.map(m => {
    const isSent = (currentRole === 'student' && m.from === 'me') ||
                   (currentRole === 'doctor' && m.from === 'me');
    return `
      <div class="msg ${isSent ? 'sent' : 'recv'}">
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

  const now = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  contact.msgs.push({ from: 'me', text, time: now });
  contact.lastMsg = text;
  contact.time = now;
  input.value = '';
  openChat(activeChatId);
  buildChat();

  // Simulate auto-reply
  setTimeout(() => {
    const replies = [
      'Thank you for sharing. Let me check on that.',
      'I understand. Please make sure to follow the prescribed routine.',
      'That sounds like a concern we should discuss at your appointment.',
      "Got it! Is there anything else you'd like to know?",
      'Please come in and we can do a proper examination.'
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    contact.msgs.push({
      from: 'doc',
      text: reply,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
    contact.lastMsg = reply;
    if (activeChatId === contact.id) openChat(activeChatId);
    buildChat();
  }, 1200);
}