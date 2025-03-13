// Select Elements
const scrollLine = document.querySelector(".scroll-line");
const section = document.querySelector("#scroll-line-section");
const scrollLineContent = section.querySelectorAll(".scroll-line-content p");

// Scroll Event for the Line and Paragraphs
window.addEventListener("scroll", () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight; // Ensure accurate height calculation
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Animate the vertical line
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        const progress = ((scrollY - sectionTop) / sectionHeight) * 100;
        scrollLine.style.height = `${progress}vh`; // Dynamically adjust height
    } else {
        scrollLine.style.height = "0"; // Reset the line height outside the section
    }

    // Animate content visibility
    scrollLineContent.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < windowHeight - 100) { // Reveal when item enters viewport
            item.classList.add("visible");
        }
    });
});

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

