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
function dark(){
    let body = document.querySelector("body")
    body.setAttribute('class', 'dark-mode')
    // let light = document.getElementById('light-mode')
    // light.innerText('Light Mode')
}
