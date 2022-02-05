const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");
const overlay__feature = doc.querySelector("#feature__button");
const overlay__reviews = doc.querySelector("#reviews__button");
const overlay__aboutus = doc.querySelector("#aboutus__button");




menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--active");
});

overlay__feature.addEventListener("click", () => {
    overlay.classList.toggle("overlay--active");
});

overlay__reviews.addEventListener("click", () => {
    overlay.classList.toggle("overlay--active");
});

overlay__aboutus.addEventListener("click", () => {
    overlay.classList.toggle("overlay--active");
});