// for mobile version nav

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('activeNav');
});



// dark mode / light mode

const input = document.querySelector('#switch');

const container = document.querySelector('html');
input.addEventListener('change', (e) => {
    if (e.target.checked) {
        container.setAttribute('theme', 'dark-mode');
    } else {
        container.setAttribute('theme', '');
    }
});