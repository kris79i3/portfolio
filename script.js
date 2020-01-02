window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menu_button").addEventListener("click", clickMenu);
}


function clickMenu() {
    console.log("clickBurgerMenu");

    document.querySelector(".burger_menu").classList.toggle("hidden");

    if (document.querySelector("#menu_button").classList.contains("open")) {
        document.querySelector("#menu_button").classList = "closed";
    } else {
        document.querySelector("#menu_button").classList = "open";
    }
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".burger_menu").classList.remove("hidden");
        document.querySelector("#menu_background").classList.remove("menu_background");
    }
}

var x = window.matchMedia("(min-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
