const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");
const preloader = document.getElementById("preloader");
const homeSection = document.querySelector(".home");
const homeH3 = document.querySelector(".home h3");
const homeH2 = document.querySelector(".home h2");
const homeP = document.querySelector(".home p");
const homeImg = document.querySelector(".home img");

let lastScrollTop = 0; 

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  searchIcon.classList.toggle("uil-search");
  searchIcon.classList.toggle("uil-times");
});


navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});


navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});




window.addEventListener("scroll", () => {
  // Hanya jalankan efek scroll jika menu tidak terbuka
  if (!nav.classList.contains("openNav")) {

    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

    // Hide/Show Nav saat scroll
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("hidden");
    }
    lastScrollTop = Math.max(scrollTop, 0); 
  }
});


// Page Load and Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";

    setTimeout(() => {
      preloader.classList.add("hide");
      homeSection.classList.add("show");

      setTimeout(() => homeH3.classList.add("show"), 600);
      setTimeout(() => homeH2.classList.add("show"), 900);
      setTimeout(() => homeP.classList.add("show"), 1200);
      setTimeout(() => homeImg.classList.add("show"), 300);
    }, );
  }, 1500);
});

window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});



document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navOpenBtn = document.querySelector(".navOpenBtn");
  const navCloseBtn = document.querySelector(".navCloseBtn");
  const mainContent = document.querySelector(".main-content");


  navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    mainContent.classList.add("blur");
  });

  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
    mainContent.classList.remove("blur");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let elements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    elements.forEach((el) => {
      let windowHeight = window.innerHeight;
      let elementTop = el.getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});
