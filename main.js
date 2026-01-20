let close = document.querySelector(".menu-close");

let ham = document.querySelector(".hamburger");

let nav = document.querySelector(".navigation");

ham.addEventListener("click", () => {
    nav.classList.add("active");
    close.classList.add("active");
})

close.addEventListener("click", () => {
    nav.classList.remove("active")
    close.classList.remove("active")
})


const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
} else {
    scrollBtn.style.display = 'none';
}
});

scrollBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});
