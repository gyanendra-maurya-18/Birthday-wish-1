/* Typing Message */
const text = "Wishing you a day full of smiles, happiness and love 💕";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 60);
    }
}
typingEffect();

/* Image Slider */
/* Romantic Smooth Slider */
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}, 3500);

/* Floating Hearts */
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 300);
}

/* Celebrate */
function celebrate() {
    document.getElementById("surprise").classList.remove("hidden");
    document.getElementById("card").classList.add("fullscreen");
    createHearts();
    typeName();
}

/* Typing Name */
const myName = "— From Gyanendra ❤️";   // ✨ CHANGE NAME HERE
let n = 0;

function typeName() {
    if (n < myName.length) {
        document.getElementById("signature").innerHTML += myName.charAt(n);
        n++;
        setTimeout(typeName, 80);
    }
}

/* Love Letter */
function openLetter() {
    document.getElementById("letterBox").classList.remove("hidden");
}

function closeLetter() {
    document.getElementById("letterBox").classList.add("hidden");
}

/* Night Mode */
function toggleNight() {
    document.body.classList.toggle("night");
}

/* WhatsApp Share */
function shareWhatsApp() {
    const message = encodeURIComponent(
        "🎂 Happy Birthday 💖\n\nI made something special for you 💕\nHope it makes you smile 😊"
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
}