const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyZXU59zERppJb9vSdm32XOAaeP1h3HlTPD3n3EwzNGNKl73X787wFfsIRiQ75i0zMIEQ/exec";

fetch(SCRIPT_URL)
  .then(res => res.json())
  .then(data => {
    const table = document.getElementById('complaintTable');
    if (!data.length) {
      table.innerHTML += "<tr><td colspan='5'>Belum ada data keluhan.</td></tr>";
      return;
    }

    data.reverse().forEach(item => {
      table.innerHTML += `
        <tr>
          <td>${item.timestamp}</td>
          <td>${item.name}</td>
          <td>${item.whatsapp}</td>
          <td>${item.type}</td>
          <td>${item.comments}</td>
        </tr>
      `;
    });
  })
  .catch(err => console.error("Error mengambil data:", err));
