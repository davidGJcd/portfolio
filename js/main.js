const navToggle = document.querySelector('.navbar__nav-toggle');
const navLinks = document.querySelectorAll('.navbar__nav-link')


function toggleNavMenu() {
    document.body.classList.toggle('nav-open')
}

function closeNavMenu() {
    document.body.classList.remove('nav-open')
}

navToggle.addEventListener('click', toggleNavMenu);
navLinks.forEach(link => link.addEventListener('click', closeNavMenu))