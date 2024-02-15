var flag = false;
// for mobile version nav

const toggleBtn = document.querySelector('.navbar__toggleBtn');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('activeNav');
});


const button = document.querySelector('#switch');
const container = document.querySelector('html');
const userTheme = localStorage.getItem('theme');

// loading page
document.addEventListener('DOMContentLoaded', () => {
    if (userTheme === 'dark-mode') {
        clickDarkMode();
    } else if (userTheme === '') {
        clickLightMode();
    }
})

// change event
button.addEventListener('change', (e) => {
    if (e.target.checked) {
        clickDarkMode();
    } else {
        clickLightMode();
    }
})

// dark mode / light mode change event
function clickDarkMode() {
    localStorage.setItem("theme", "dark-mode");
    container.setAttribute('theme', 'dark-mode');
    button.checked = true;
}
function clickLightMode() {
    localStorage.setItem("theme", "");
    container.setAttribute('theme', '');
    button.checked = false;
}