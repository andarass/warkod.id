// Objek untuk menyimpan teks dalam dua bahasa
const translations = {
    en: {
      navMenu1:"About",
      navMenu2: "Services",
      navMenu3: "Portfolio",
      navMenu4: "Bundle",
      navMenu5: "Contact",
      heroTitle: "Your Digital Technology Solution in Just",
      heroHighlight: "Minutes!",
      heroDescription:
        "Get your website, desktop application, and mobile application now easily, reliably, innovatively, and with high quality.",
      heroList1: "100% free consultation of complaints and needs",
      heroList2: "Can adapt to your needs",
      heroList3: "Pay 10% upfront, the rest upon product completion",
      ctaButton: "Consult Now",
      servicesTitle: "Our Services",
      service1Title: "Website Development",
      service1Desc: "Responsive and modern websites for your business needs.",
      service2Title: "Desktop Application",
      service2Desc: "Powerful and easy-to-use desktop applications.",
      service3Title: "Mobile Application",
      service3Desc: "Mobile applications for iOS and Android platforms.",
      stepApplications1Title: "Application Development Stages",
      stepApplications1Desc: "We implement a structured and professional development process to ensure high-quality products.",
      stepApplications2Title: "1. Consultation & Analysis",
      stepApplications2Desc: "Identifying business needs and determining the key features of the application.",
      stepApplications3Title: "2. UI/UX Design",
      stepApplications3Desc: "Creating wireframes and interactive prototypes for optimal user experience.",
      stepApplications4Title: "3. Development",
      stepApplications4Desc: "Implementing code with the latest technology according to project requirements.",
      stepApplications5Title: "4. Testing & Revision",
      stepApplications5Desc: "Conducting testing and refinements to ensure the application runs smoothly.",
      stepApplications6Title: "5. Deployment & Maintenance",
      stepApplications6Desc: "Launching the application and providing technical support as well as updates.",
      portfolioPageTitle: "Portfolio",
      portfolioPageDesc: "These projects are designed to enhance user experience and strengthen a brand. With us, your project will get the right professional touch.",
      partnerTitle: "Our Partners",
      aboutPageTitle: "About Us",
      aboutPageDesc: "Warkod is a tech company focused on developing digital solutions for businesses. With an experienced professional team, we are ready to help you achieve business goals through the latest technology.",
      teamMember1Name: "Andara Puteri Syalsabella",
      teamMember1Role: "Team Management",
      teamMember2Name: "Duta Alif Gunawan",
      teamMember2Role: "Team Management",
      contactInfoTitle: "Free Consultation",
      contactInfoDesc: "We would be delighted to hear from you if you're interested in collaborating! Do you have any questions, feedback, or just want to say hello? Feel free to reach out to us.",
      contactItem1Title: "Email",
      contactItem2Title: "Mobile",
      formGroup1Label: "Name",
      formGroup2Label: "Email",
      formGroup3Label: "Subject",
      formGroup4Label: "Message",
      submitButton: "Send",
      footerLogoDesc: "Warkod is a Software House company specializing in software development, digital solutions, and technology services to support business growth in the digital era.",
      footerKiri: "Contact",
      footerTengahTitle: "Quick Access",
      footerTengah1Desc: "Home",
      footerTengah2Desc: "About",
      footerTengah3Desc: "Services",
      footerTengah4Desc: "Portfolio",
      footerTengah5Desc: "Packages",
      footerTengah6Desc: "Contact",
      footerKananTitle: "Social Media"

    },
    id: {
      navMenu1: "Tentang",
      navMenu2: "Layanan",
      navMenu3: "Portofolio",
      navMenu4: "Paket",
      navMenu5: "Kontak",
      heroTitle: "Solusi Teknologi Digitalmu Hanya",
      heroHighlight: "Dalam Hitungan Menit!",
      heroDescription:
        "Dapatkan website, aplikasi desktop, dan aplikasi mobile anda sekarang dengan mudah, terpercaya, inovatif dan berkualitas tinggi.",
      heroList1: "Konsultasi keluhan dan kebutuhan 100% gratis",
      heroList2: "Mampu menyesuaikan kebutuhan anda",
      heroList3:
        "Bayar 10% di awal, sisa dibayarkan ketika produk sudah jadi",
      ctaButton: "Konsultasi Sekarang",
      servicesTitle: "Layanan Kami",
      service1Title: "Pembuatan Website",
      service1Desc: "Website responsif dan modern untuk kebutuhan bisnis Anda.",
      service2Title: "Aplikasi Desktop",
      service2Desc: "Aplikasi desktop yang powerful dan mudah digunakan.",
      service3Title: "Aplikasi Mobile",
      service3Desc: "Aplikasi mobile untuk platform iOS dan Android.",
      stepApplications1Title: "Tahapan Pengembangan Aplikasi",
      stepApplications1Desc: "Kami menerapkan proses pengembangan yang terstruktur dan profesional untuk memastikan produk berkualitas tinggi.",
      stepApplications2Title: "1. Konsultasi & Analisis",
      stepApplications2Desc: "Mengidentifikasi kebutuhan bisnis dan menentukan fitur utama aplikasi.",
      stepApplications3Title: "2. Desain UI/UX",
      stepApplications3Desc:"Membuat wireframe dan prototype interaktif untuk pengalaman pengguna yang optimal.",
      stepApplications4Title: "3. Pengembangan",
      stepApplications4Desc:"Implementasi kode dengan teknologi terbaru sesuai kebutuhan proyek.",
      stepApplications5Title: "4. Pengujian & Revisi",
      stepApplications5Desc:"Melakukan uji coba dan penyempurnaan untuk memastikan aplikasi berjalan dengan baik.",
      stepApplications6Title: "5. Penerapan & Pemeliharaan",
      stepApplications6Desc:"Meluncurkan aplikasi dan memberikan dukungan teknis serta pembaruan.",
      portfolioPageTitle: "Portofolio",
      portfolioPageDesc: "Proyek berikut dirancang untuk meningkatkan pengalaman pengguna dan memperkuat sebuah brand. Bersama kami, proyek anda akan mendapatkan sentuhan profesional yang tepat.",
      partnerTitle: "Partner Kami",
      aboutPageTitle: "Tentang Kami",
      aboutPageDesc: "Warkod adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital untuk bisnis. Dengan tim profesional yang berpengalaman, kami siap membantu Anda mencapai tujuan bisnis melalui teknologi terkini.",
      teamMember1Name: "Andara Puteri Syalsabella",
      teamMember1Role: "Manajemen Tim",
      teamMember2Name: "Duta Alif Gunawan",
      teamMember2Role: "Manajemen Tim",
      contactInfoTitle: "Konsultasi Gratis",
      contactInfoDesc: "Kami akan senang mendengarnya jika anda tertarik bekerjasama! Apa mungkin anda memiliki pertanyaan, masukan, atau hanya sekedar ingin menyapa? Jangan ragu untuk menghubungi kami.",
      contactItem1Title: "Email",
      contactItem2Title: "Seluler",
      formGroup1Label:"Nama",
      formGroup2Label:"Email",
      formGroup3Label:"Subjek",
      formGroup4Label:"Pesan",
      submitButton:"Kirim",
      footerLogoDesc:"Warkod adalah perusahaan Software House yang mengkhususkan diri dalam pengembangan perangkat lunak, solusi digital, dan layanan teknologi untuk mendukung bisnis berkembang di era digital.",
      footerKiri:"Kontak",
      footerTengahTitle:"Akses Cepat",
      footerTengah1Desc:"Home",
      footerTengah2Desc:"Tentang",
      footerTengah3Desc:"Layanan",
      footerTengah4Desc:"Portofolio",
      footerTengah5Desc:"Paket",
      footerTengah6Desc:"Kontak",
      footerKananTitle:"Sosial Media"
    },
  };
  
  // Fungsi untuk mengubah bahasa
  function changeLanguage(lang) {
    document.querySelector(".nav-menu li a").textContent = translations[lang].navMenu1;
    document.querySelectorAll(".nav-menu li a")[1].textContent = translations[lang].navMenu2;
    document.querySelectorAll(".nav-menu li a")[2].textContent = translations[lang].navMenu3;
    document.querySelectorAll(".nav-menu li a")[3].textContent = translations[lang].navMenu4;
    document.querySelectorAll(".nav-menu li a")[4].textContent = translations[lang].navMenu5;
    
    document.querySelector(".hero-content h1").innerHTML =
      translations[lang].heroTitle +
      ' <span class="highlight">' +
      translations[lang].heroHighlight +
      "</span>";
  
    document.querySelector(".hero-content p").textContent =
      translations[lang].heroDescription;
  
    const heroList = document.querySelectorAll(".hero-content ul li .translate");
    heroList[0].textContent = translations[lang].heroList1;
    heroList[1].textContent = translations[lang].heroList2;
    heroList[2].textContent = translations[lang].heroList3;
  
    document.querySelector(".cta-button").textContent =
      translations[lang].ctaButton;
  
    document.querySelector(".services h2").textContent =
      translations[lang].servicesTitle;
    document.querySelectorAll(".service-item h3")[0].textContent =
      translations[lang].service1Title;
    document.querySelectorAll(".service-item p")[0].textContent =
      translations[lang].service1Desc;
    document.querySelectorAll(".service-item h3")[1].textContent =
      translations[lang].service2Title;
    document.querySelectorAll(".service-item p")[1].textContent =
      translations[lang].service2Desc;
    document.querySelectorAll(".service-item h3")[2].textContent =
      translations[lang].service3Title;
    document.querySelectorAll(".service-item p")[2].textContent =
      translations[lang].service3Desc;
 
    document.querySelector(".step-applications h2").textContent = translations[lang].stepApplications1Title;
    document.querySelector(".step-applications p").textContent = translations[lang].stepApplications1Desc;

    const stepTitles = document.querySelectorAll(".step-applications h3");
    const stepDescs = document.querySelectorAll(".step-applications p");

    if (stepTitles.length >= 5 && stepDescs.length >= 6) {
        stepTitles.forEach((title, index) => {
            title.textContent = translations[lang][`stepApplications${index + 2}Title`];
        });

        stepDescs.forEach((desc, index) => {
            if (index > 0) {
                desc.textContent = translations[lang][`stepApplications${index + 1}Desc`];
            }
        });
    } else {
        console.error("Jumlah <h3> atau <p> tidak sesuai.");
    }


    document.querySelector(".container-porto h2").textContent =
      translations[lang].portfolioPageTitle;
    document.querySelector(".container-porto p").textContent =
      translations[lang].portfolioPageDesc;
  
    document.querySelector(".partners h2").textContent =
      translations[lang].partnerTitle;
    
    document.querySelector(".contact-content h2").textContent = translations[lang].aboutPageTitle;
    document.querySelector(".contact-content p").textContent = translations[lang].aboutPageDesc;
    document.querySelectorAll(".team-card h2")[0].textContent = translations[lang].teamMember1Name;
    document.querySelectorAll(".team-card h2")[1].textContent = translations[lang].teamMember2Name;
    document.querySelectorAll(".team-card p")[0].textContent = translations[lang].teamMember1Role;
    document.querySelectorAll(".team-card p")[1].textContent = translations[lang].teamMember2Role;

    document.querySelector(".contact-info h1").textContent = translations[lang].contactInfoTitle;
    document.querySelector(".contact-info p").textContent = translations[lang].contactInfoDesc;
    document.querySelectorAll(".info-item h3")[0].textContent = translations[lang].contactItem1Title;
    document.querySelectorAll(".info-item h3")[1].textContent = translations[lang].contactItem2Title;
    document.querySelectorAll(".form-group label")[0].textContent = translations[lang].formGroup1Label;
    document.querySelectorAll(".form-group label")[1].textContent = translations[lang].formGroup2Label;
    document.querySelectorAll(".form-group label")[2].textContent = translations[lang].formGroup3Label;
    document.querySelectorAll(".form-group label")[3].textContent = translations[lang].formGroup4Label;
    document.querySelector(".btn-submit .submit-btn").textContent = translations[lang].submitButton;

    document.querySelector(".footer-description").textContent = translations[lang].footerLogoDesc;
    document.querySelector(".footer-left h3").textContent = translations[lang].footerKiri;
    document.querySelector(".footer-middle h3").textContent = translations[lang].footerTengahTitle;
    document.querySelectorAll(".footer-middle li a")[0].textContent = translations[lang].footerTengah1Desc;
    document.querySelectorAll(".footer-middle li a")[1].textContent = translations[lang].footerTengah2Desc;
    document.querySelectorAll(".footer-middle li a")[2].textContent = translations[lang].footerTengah3Desc;
    document.querySelectorAll(".footer-middle li a")[3].textContent = translations[lang].footerTengah4Desc;
    document.querySelectorAll(".footer-middle li a")[4].textContent = translations[lang].footerTengah5Desc;
    document.querySelectorAll(".footer-middle li a")[5].textContent = translations[lang].footerTengah6Desc;
    document.querySelector(".footer-right h3").textContent = translations[lang].footerKananTitle;
  }
  
  // Event listener untuk tombol bahasa
  document.querySelector("#lang-en").addEventListener("click", () => {
    changeLanguage("en");
  });
  document.querySelector("#lang-id").addEventListener("click", () => {
    changeLanguage("id");
  });
  
  const contactTitleEl = document.querySelector(".contact-info h2");
  const contactDescEl = document.querySelector(".contact-info p");
  const infoItems = document.querySelectorAll(".info-item h3");
  const formLabels = document.querySelectorAll(".form-group label");
  const submitBtn = document.querySelector(".btn-submit .submit-btn");
  
  if (contactTitleEl && contactDescEl && infoItems.length >= 2 && formLabels.length >= 4 && submitBtn) {
      contactTitleEl.textContent = translations[lang].contactInfoTitle;
      contactDescEl.textContent = translations[lang].contactInfoDesc;
      infoItems[0].textContent = translations[lang].contactItem1Title;
      infoItems[1].textContent = translations[lang].contactItem2Title;
      formLabels[0].textContent = translations[lang].formGroup1Label;
      formLabels[1].textContent = translations[lang].formGroup2Label;
      formLabels[2].textContent = translations[lang].formGroup3Label;
      formLabels[3].textContent = translations[lang].formGroup4Label;
      submitBtn.textContent = translations[lang].submitButton;
  } else {
      console.error("Salah satu elemen tidak ditemukan. Periksa struktur HTML.");
  }
  