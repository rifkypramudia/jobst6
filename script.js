
document.addEventListener("DOMContentLoaded", function () {

    // Fitur Dark Mode
    const toggleButton = document.getElementById("darkModeToggle");

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            const currentTheme = document.body.getAttribute("data-bs-theme");

            if (currentTheme === "dark") {
                document.body.setAttribute("data-bs-theme", "light");
                toggleButton.textContent = "Mode Gelap";
                toggleButton.className = "btn btn-outline-light btn-sm";
            } else {
                document.body.setAttribute("data-bs-theme", "dark");
                toggleButton.textContent = "Mode Terang";
                toggleButton.className = "btn btn-outline-light btn-sm";
            }
        });
    }

    // Validasi Formulir Kontak
    const formKontak = document.getElementById("contactForm");

    if (formKontak) {
        formKontak.addEventListener("submit", function (event) {
            event.preventDefault();

            const emailInput = document.getElementById("inputEmail").value.trim();
            const pesanInput = document.getElementById("inputPesan").value.trim();
            const alertPlaceholder = document.getElementById("alertNotification");

            if (!emailInput || !pesanInput) {
                alertPlaceholder.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Gagal! Semua kolom wajib diisi.
                    </div>
                `;
                return;
            }

            alertPlaceholder.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Berhasil! Pesan dari ${emailInput} telah diproses di browser.
                    Catatan: pesan ini belum dikirim ke server atau email.
                </div>
            `;

            formKontak.reset();
        }
        );
    }
});
