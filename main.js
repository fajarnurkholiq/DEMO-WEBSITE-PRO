// ============================================================
// ARUNA — script bersama untuk semua halaman
// ============================================================

document.addEventListener('DOMContentLoaded', function () {
  // Isi semua tombol WhatsApp dari config terpusat (assets/config.js)
  document.querySelectorAll('.wa-link').forEach(function (el) {
    var msg = el.getAttribute('data-msg') || '';
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + (msg ? '?text=' + encodeURIComponent(msg) : '');
    el.setAttribute('href', url);
  });

  // Full-screen navigation overlay
  var openBtn = document.querySelector('.nav-open-btn');
  var closeBtn = document.querySelector('.nav-close-btn');
  var overlay = document.querySelector('.nav-overlay');
  if (openBtn && overlay) {
    openBtn.addEventListener('click', function () {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', function () {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
  if (overlay) {
    overlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
});
