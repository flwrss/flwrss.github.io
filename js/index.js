const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
const darkMode = document.querySelector(".dark-mode-btn")
darkMode.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark-mode")
})
