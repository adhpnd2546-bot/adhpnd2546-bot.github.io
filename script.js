const form = document.getElementById("contactForm");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const pesan = document.getElementById("pesan");

const notif = document.getElementById("notifikasi");
const preview = document.getElementById("preview");
const listPesan = document.getElementById("listPesan");

// Preview realtime
pesan.addEventListener("input", function () {
  preview.textContent = pesan.value;
});

// Validasi
function validasi() {
  let valid = true;

  document.querySelectorAll(".error").forEach(e => e.textContent = "");

  if (nama.value.length < 3) {
    errorNama.textContent = "Nama minimal 3 karakter";
    valid = false;
  }

  if (!email.value.includes("@")) {
    errorEmail.textContent = "Email tidak valid";
    valid = false;
  }

  const hpRegex = /^[0-9]{10,}$/;
  if (!hpRegex.test(hp.value)) {
    errorHP.textContent = "Nomor HP minimal 10 digit angka";
    valid = false;
  }

  if (pesan.value.length < 5) {
    errorPesan.textContent = "Pesan terlalu pendek";
    valid = false;
  }

  return valid;
}

// Submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (validasi()) {
    notif.textContent = "✅ Pesan berhasil dikirim!";
    notif.style.color = "green";

    const item = document.createElement("li");
    item.textContent = `${nama.value} (${hp.value}): ${pesan.value}`;
    listPesan.appendChild(item);

    form.reset();
    preview.textContent = "";
  } else {
    notif.textContent = "❌ Input masih salah!";
    notif.style.color = "red";
  }
});