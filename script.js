
const toggleButton = document.getElementById("darkModeToggle");
const cartCounter = document.getElementById("cartCounter");
const totalBelanja = document.getElementById("totalBelanja");

let jumlahKeranjang = 0;
let totalHarga = 0;

// Dark mode
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const isDark =
      document.body.getAttribute("data-bs-theme") === "dark";

    document.body.setAttribute(
      "data-bs-theme",
      isDark ? "light" : "dark"
    );

    toggleButton.textContent = isDark
      ? "Mode Gelap"
      : "Mode Terang";
  });
}

// Keranjang belanja
document.querySelectorAll(".btn-beli").forEach((button) => {
  button.addEventListener("click", () => {
    const harga = Number(button.dataset.harga);

    jumlahKeranjang++;
    totalHarga += harga;

    cartCounter.textContent = jumlahKeranjang;
    totalBelanja.textContent =
      "Rp " + totalHarga.toLocaleString("id-ID");
  });
});

// Validasi formulir kontak
const formKontak = document.getElementById("contactForm");

if (formKontak) {
  formKontak.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("inputEmail").value.trim();
    const pesan = document.getElementById("inputPesan").value.trim();
    const notifikasi = document.getElementById("alertNotification");

    if (!email || !pesan) {
      notifikasi.textContent = "Semua kolom wajib diisi!";
      notifikasi.className = "alert alert-danger";
      return;
    }

    notifikasi.textContent =
      "Pesan berhasil diproses di halaman ini.";
    notifikasi.className = "alert alert-success";

    formKontak.reset();
  });
}
