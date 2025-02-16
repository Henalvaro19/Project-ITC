const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

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
 
  if (!nav.classList.contains("openNav")) {

    if (window.scrollY > 10) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }


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
      elements.forEach((el, index) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 150; // Muncul lebih lambat
  
        if (elementTop < windowHeight - elementVisible) {
          setTimeout(() => {
            el.classList.add("active");
          }, index * 200); // Delay bertahap per elemen
        }
      });
    }
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  
  