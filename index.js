const d = document;

const nav = d.getElementById('nav');
const hamburguer = d.getElementById("hamburguer");

hamburguer.addEventListener("click", (e) => {
    hamburguer.classList.toggle('is-active')
    nav.classList.toggle('active-menu')
})