const clicker = document.getElementById('clicker');
const navbox = document.querySelector('.nav-box');
const remover = document.getElementById("remover");

clicker.addEventListener('click', () => {
    navbox.style.display = "flex";
    clicker.style.display = "none";
    remover.style.display = "block";
});

remover.addEventListener('click', () => {
    remover.style.display = "none";
    clicker.style.display = "block";
    navbox.style.display = "none";
})
