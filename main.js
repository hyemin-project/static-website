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
    setTimeout(() =>{
      window.scrollTo(0, window.scrollY - 50);
      scroll();
    }, 10);
  }
}

logo.addEventListener('click',scroll);