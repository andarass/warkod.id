// Toggle Menu untuk Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('active');
});

// Animasi Scroll
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
});

document.getElementById('lang-en').addEventListener('click', function() {
    alert('Switch to English');
    // Add logic to switch language to English
});

document.getElementById('lang-id').addEventListener('click', function() {
    alert('Switch to Indonesian');
    // Add logic to switch language to Indonesian
});

document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#fff';
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#fff';
    document.body.style.color = '#333';
});