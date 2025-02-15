const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

let lastScrollTop = 0;

// Toggle Search Icon
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  searchIcon.classList.toggle("uil-search");
  searchIcon.classList.toggle("uil-times");
});

// Open Nav
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});

// Close Nav
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Add scrolled class when the page is scrolled
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

window.addEventListener('load', () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  });


  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const navOpenBtn = document.querySelector(".navOpenBtn");
    const navCloseBtn = document.querySelector(".navCloseBtn");
    const mainContent = document.querySelector(".main-content");
  
    // Buka menu dan tambahkan efek blur
    navOpenBtn.addEventListener("click", () => {
      nav.classList.add("openNav");
      mainContent.classList.add("blur");
    });
  
    // Tutup menu dan hilangkan efek blur
    navCloseBtn.addEventListener("click", () => {
      nav.classList.remove("openNav");
      mainContent.classList.remove("blur");
    });
  });
  