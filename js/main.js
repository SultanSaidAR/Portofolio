var audio = document.getElementById("audioPlayer");
const musicbutton = document.getElementById("musicButton");

musicbutton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    musicButton.innerText = "Pause";
  } else {
    audio.pause();
    musicButton.innerText = "Play";
  }
  gsap.to("#musicButton", {
    duration: 1,
    x: "40vw",
    y: "-40vw",
    ease: "power2.out",
  });
});

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const ScrollTriggerConfig = (triggerElement) => ({
  trigger: triggerElement,
  start: "top 60%",
  end: "bottom 50%",
  toggleActions: "play reverse play reverse ", // Hanya menjalankan animasi saat masuk
  onLeave: (self) => {
    self.animation.timeScale(3).reverse(); // Mempercepat animasi dengan timeScale dan membalik
  },
  onEnterBack: (self) => {
    self.animation.timeScale(1).play(); // Kembali normal ketika masuk ulang
  },
});

// Membuat timeline baru
const tl = gsap.timeline({
  scrollTrigger: ScrollTriggerConfig("#hero"), // Menambahkan ScrollTrigger ke timeline
});

// Animasi pertama: Backlight muncul dengan opacity 0
tl.from(".bottom-section img", {
  duration: 1,
  y: "200px", // Bergerak dari bawah 200px
  opacity: 0,
});

tl.from(".backlight", {
  duration: 0.5,
  opacity: 0,
});

// Animasi kedua: Teks h1 muncul dengan opacity 0
tl.from(".tagline h1", {
  duration: 1,
  opacity: 0,
});

// Animasi ketiga: Menambahkan teks di .job
tl.to(".job", {
  duration: 1,
  text: "Front End Developer & Data Analys",
  ease: "none",
});

// Animasi keempat: Gambar di .bottom-section bergerak dari bawah

particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, // Jumlah partikel (salju)
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // Warna salju
    },
    shape: {
      type: "star", // Bentuk partikel
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.8, // Transparansi
      random: true,
    },
    size: {
      value: 5, // Ukuran salju
      random: true,
    },
    line_linked: {
      enable: false, // Nonaktifkan garis penghubung
    },
    move: {
      enable: true,
      speed: 2, // Kecepatan salju
      direction: "bottom", // Jatuh ke bawah
      random: true,
      straight: false,
      out_mode: "out", // Menghilang saat keluar layar
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
    },
  },
  retina_detect: true, // Untuk layar resolusi tinggi
});

// card

const cardTL = gsap.timeline({
  scrollTrigger: ScrollTriggerConfig("#project"), // Menambahkan ScrollTrigger ke timeline
});

for (let i = 1; i <= 6; i++) {
  cardTL.from(`.card${i}`, {
    duration: 0.3,

    y: "200px", // Bergerak dari bawah 200px
    opacity: 0,
  });
}

// colapse
const grid = document.querySelector(".grid-container");
const backButtons = document.querySelectorAll(".back");

// Loop untuk menangani setiap tombol collapse (view1, view2, dst) dan kontennya
for (let i = 1; i <= 6; i++) {
  const colapseButton = document.getElementById(`view${i}`);
  const contentSection = document.getElementById(`content${i}`);

  colapseButton.addEventListener("click", () => {
    contentSection.classList.add("show");
    grid.classList.add("hide");

    gsap.from(contentSection, {
      duration: 1,
      x: "-300px",
      opacity: "0",
      duration: 2,
      ease: "power2.out",
    });
    gsap.from(".judul", {
      duration: 1,
      x: "190px",

      ease: "power2.out",
      scrollTrigger: ScrollTriggerConfig("#project"),
    });
  });
}

// Loop untuk menangani tombol "BACK"
backButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Loop untuk menghapus class "show" dari semua konten
    for (let i = 1; i <= 6; i++) {
      const contentSection = document.getElementById(`content${i}`);
      contentSection.classList.remove("show");
    }
    // Menampilkan kembali grid
    grid.classList.remove("hide");
    for (let i = 1; i <= 6; i++) {
      // cardTL.from(`.card${i}`, {
      //   duration: 0.3,
      //   y: "200px", // Bergerak dari bawah 200px
      //   opacity: 0,
      // });
    }
    gsap.from(".judul", {
      duration: 1,
      x: "-200px",
      opacity: "0",
      ease: "power2.out",
      scrollTrigger: ScrollTriggerConfig("#project"),
    });
  });
});

const aboutTL = gsap.timeline({
  scrollTrigger: ScrollTriggerConfig("#about"), // Menambahkan ScrollTrigger ke timeline
});

// aboutTL.from(".grid-2", {
//   duration: 2,
//   x: "-300px",
//   opacity: "0",
//   ease: "power2.out",
// });

aboutTL.add(
  gsap.from(".about-right", {
    duration: 0.5,
    x: "200px",
    opacity: 0,
    ease: "power2.out",
  }),
  0 // Waktu di mana animasi ini dimulai (0 = dari awal)
);

aboutTL.add(
  gsap.from(".about-left", {
    duration: 0.5,
    x: "-400px",
    opacity: 0,
    ease: "power2.out",
  }),
  0 // Waktu di mana animasi ini dimulai (0 = dari awal)
);
aboutTL.from(".about-right img", {
  duration: 0.5,
  x: "300px",
  opacity: "0",
  ease: "in-out",
});
aboutTL.from(".about-left h2", {
  duration: 0.3,
  x: "-300px",
  opacity: "0",
  ease: "in-out",
});
aboutTL.from(".about-left p ", {
  duration: 0.5,
  y: "300px",
  opacity: "0",
  ease: "in-out",
});
aboutTL.from(".about-left h3", {
  duration: 0.3,
  x: "-300px",
  opacity: "0",
  ease: "in-out",
});
aboutTL.from(" .about-left i", {
  duration: 0.5,
  y: "300px",
  opacity: "0",
  ease: "in-out",
});

// contact

gsap.from(".contact-content", {
  duration: 2,

  opacity: "0",
  ease: "power2.out",
  scrollTrigger: ScrollTriggerConfig("#contact"),
});

gsap.from(".judul", {
  duration: 1,
  x: "-200px",
  opacity: "0",
  ease: "power2.out",
  scrollTrigger: ScrollTriggerConfig("#project"),
});
