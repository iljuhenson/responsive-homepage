document.addEventListener("DOMContentLoaded", function() {
    
    
    console.log("loaded");
    const burgerMenu = document.querySelector(".nav-burger");
    burgerMenu.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("clicked");
        burgerContent = burgerMenu.children[0];
        navigation = document.querySelector(".list-wrapper");
        if(burgerContent.classList.contains("nav-burger__active")) {
            burgerContent.classList.remove("nav-burger__active");
            navigation.classList.remove("list-wrapper__active");
            navigation.children[0].classList.remove("nav-list__active");

        } else {
            burgerContent.classList.add("nav-burger__active");
            navigation.classList.add("list-wrapper__active");
            navigation.children[0].classList.add("nav-list__active");
        }
    })
});
