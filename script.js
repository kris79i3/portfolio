/*------------------------------
1: BURGER MENU
2: HEALINE
3: MEDIA Q
4:
------------------------------*/

window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("siden vises");

    document.querySelector("#menu_button").addEventListener("click", clickMenu);
}

/*------------------------------
1: BURGER MENU
------------------------------*/

function clickMenu() {
    console.log("clickBurgerMenu");

    document.querySelector(".burger_menu").classList.toggle("hidden");

    if (document.querySelector("#menu_button").classList.contains("open")) {
        document.querySelector("#menu_button").classList = "closed";
    } else {
        document.querySelector("#menu_button").classList = "open";
    }
}


/*------------------------------
2: HEADLINE
------------------------------*/
function mouseoverPortfolioWeb() {
    console.log("mouseoverPortfolioWeb");

    document.querySelector(".headline").classList.add("portfolio_move");
    document.querySelector(".headline").addEventListener("mouseout", mouseoutLink);
}


function mouseoverOmWeb() {
    console.log("mouseoverOmWeb");

    document.querySelector(".headline").classList.add("om_move");
    document.querySelector(".headline").addEventListener("mouseout", mouseoutLink);
}


function mouseoutLink() {
    console.log("mouseoutLink");
    this.removeEventListener("mouseout", mouseoutLink);

    document.querySelector(".headline").classList.remove("portfolio_move");
    document.querySelector(".headline").classList.remove("om_move");
}


/*------------------------------
2: MEDIA QUERY
------------------------------*/

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector(".burger_menu").classList.remove("hidden");

        document.querySelector("#menu_background").classList.remove("menu_background");
        document.querySelector(".forside_portfolio").addEventListener("mouseover", mouseoverPortfolioWeb);
        document.querySelector(".forside_om").addEventListener("mouseover", mouseoverOmWeb);
    }
}

var x = window.matchMedia("(min-width: 900px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
