const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("animate-charcter");
        }
    });
});

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("bounce-whatsapp");
        }
    });
});

let elements=document.querySelectorAll(".animation");
let fontAnimation=document.querySelectorAll(".font-animation");
let bounceAnimation=document.querySelectorAll(".bounce-animation");


elements.forEach((el) => observer.observe(el));
fontAnimation.forEach((el) => observer2.observe(el));
bounceAnimation.forEach((el) => observer3.observe(el));