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


const form = document.querySelector("#submit");

const nameInput = document.querySelector(".name-inp");
const emailInput = document.querySelector(".email-inp");
const commentInput = document.querySelector("#text-area");

const fields = document.querySelectorAll(".fields");


/*VALIDATION FUNCTIONS*/

function validateName() {
    const errorMessage = nameInput
        .parentElement
        .querySelector(".para");

    const completeIcon = nameInput
        .parentElement
        .querySelector(".complete-icon");

    if (nameInput.value.trim() === "") {
        errorMessage.classList.add("active");
        completeIcon.classList.remove("active");

        return false;
    }

    errorMessage.classList.remove("active");
    completeIcon.classList.add("active");

    return true;
}


function validateEmail() {
    const errorMessage = emailInput
        .parentElement
        .querySelector(".para");

    const completeIcon = emailInput
        .parentElement
        .querySelector(".complete-icon");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {
        errorMessage.textContent = "Email can not be empty";
        errorMessage.classList.add("active");
        completeIcon.classList.remove("active");

        return false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage.textContent = "Please enter a valid email";
        errorMessage.classList.add("active");
        completeIcon.classList.remove("active");

        return false;
    }

    errorMessage.classList.remove("active");
    completeIcon.classList.add("active");

    return true;
}


function validateComment() {
    const errorMessage = commentInput
        .parentElement
        .querySelector(".para");

    const completeIcon = commentInput
        .parentElement
        .querySelector(".complete-icon");

    if (commentInput.value.trim() === "") {
        errorMessage.classList.add("active");
        completeIcon.classList.remove("active");

        return false;
    }

    errorMessage.classList.remove("active");
    completeIcon.classList.add("active");

    return true;
}


form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nameIsValid = validateName();
    const emailIsValid = validateEmail();
    const commentIsValid = validateComment();

    if (
        nameIsValid &&
        emailIsValid &&
        commentIsValid
    ) {
        console.log("Form is valid!");

        // Your form can be submitted here
        // form.submit();

        alert("Message sent successfully!");

        form.reset();

        document
            .querySelectorAll(".complete-icon")
            .forEach(icon => {
                icon.classList.remove("active");
            });
    }
});


nameInput.addEventListener("input", validateName);

emailInput.addEventListener("input", validateEmail);

commentInput.addEventListener("input", validateComment);
