document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");
  
    // Toggle menu saat hamburger ditekan
    hamburger.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      hamburger.classList.toggle("active");
  
      // Ubah ikon hamburger
      if (hamburger.classList.contains("active")) {
        hamburger.innerHTML = "✖"; // Ikon close
      } else {
        hamburger.innerHTML = "&#9776;"; // Ikon hamburger
      }
    });
  
    // Klik di luar menu untuk menutup
    document.addEventListener("click", function (event) {
      if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
        hamburger.innerHTML = "&#9776;"; // Kembali ke ikon hamburger
      }
    });
  });
  