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


let submitBtn = document.querySelector(".submit-btn");
let nameInp = document.querySelector(".name-inp");
let emailInp = document.querySelector(".email-inp");
let textArea = document.querySelector("#text-area");
let paras = document.querySelectorAll(".para");
let icons = document.querySelectorAll(".complete-icon");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let hasError = false;

    paras.forEach(p => p.classList.remove("active"));
    icons.forEach(i => i.classList.remove("active"));

    if (nameInp.value.trim() === "") {
        paras[0].classList.add("active");
        hasError = true;
    } else {
        icons[0].classList.add("active");
    }

    if (emailInp.value.trim() === "") {
        paras[1].classList.add("active");
        hasError = true;
    } else {
        icons[1].classList.add("active");
    }

    if (textArea.value.trim() === "") {
        paras[2].classList.add("active");
        hasError = true;
    } else {
        icons[2].classList.add("active");
    }

    if (!hasError) {
        console.log("Form submitted!");
    }
});

nameInp.addEventListener("input", () => {
    icons[0].classList.toggle("active", nameInp.value.trim() !== "");
});

emailInp.addEventListener("input", () => {
    icons[1].classList.toggle("active", emailInp.value.trim() !== "");
});

textArea.addEventListener("input", () => {
    icons[2].classList.toggle("active", textArea.value.trim() !== "");
});

