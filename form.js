
// Tambahkan endpoint agar mudah disesuaikan di GitHub atau lingkungan lain
const endpoint = "<APPS_SCRIPT_URL>"; 
const SCRIPT_URL = endpoint || "https://script.google.com/macros/s/AKfycbyZXU59zERppJb9vSdm32XOAaeP1h3HlTPD3n3EwzNGNKl73X787wFfsIRiQ75i0zMIEQ/exec";

document.getElementById('complaintForm').addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    name: document.getElementById('customerName').value,
    whatsapp: document.getElementById('whatsapp').value,
    type: document.querySelector('input[name="complaintType"]:checked').value,
    comments: document.getElementById('comments').value
  };

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  })
    .then(res => res.text())
    .then(response => {
      alert("✅ Keluhan berhasil dikirim!");
      document.getElementById('complaintForm').reset();
    })
    .catch(err => alert("❌ Gagal mengirim: " + err));
});
