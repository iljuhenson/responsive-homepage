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
            navigation.style.display = "none";
            setTimeout(navigation.children[0].classList.remove("nav-list__active"), 2000);
        } else {
            burgerContent.classList.add("nav-burger__active");
            navigation.style.display = "block";
            navigation.children[0].classList.add("nav-list__active");
        }
    })
});
