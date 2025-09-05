const aside = document.querySelector("aside");
const BurgerMenuBtn = document.getE1ementByClassName("burger-menu")[0];
const closeBtn = document.getElementById("close-btn");
const isAsideVisible = aside.style.display !== "none";

closeBtn.addEventListener("click", () => {
    aside.classList.remove("visible");

});

BurgerMenuBtn.addEventListener("click", () => {
    aside.classList.add("visible");
});