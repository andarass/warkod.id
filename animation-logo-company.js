document.addEventListener("DOMContentLoaded", function () {
    const partnerLogos = document.querySelectorAll(".partner-logos img");
  
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 0.3}s`;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
  
    partnerLogos.forEach((logo) => {
      observer.observe(logo);
    });
  });