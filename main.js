// scoll : add class in nav

const nav = document.querySelector(".top-nav");

document.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});

// get back to top page

const logo = document.querySelector(".logo");

const scroll = () => {
  if (window.scrollY !== 0){
    const scrollPosition = document.querySelector('.header').offsetTop;
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }
}

logo.addEventListener('click',scroll);

// for mobile version nav

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('activeNav');
});