document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded");
    const burgerMenu = document.querySelector(".nav-burger");
    burgerMenu.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("clicked");
        burgerMenu.classList.add("nav-burger__active")
    })
});
