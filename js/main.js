const colors = ["#eed600", "#ff7700", "#2de200", "#E91E63", "#00BCD4"],
    html = document.documentElement,
    mainColor = colors[Math.floor(Math.random() * colors.length)];

html.style.setProperty("--main-color", mainColor);

let i = 1;

// Change color in the daytime and night
const now = new Date(),
    hour = now.toTimeString().substring(0, 2);
    
if (hour >= 6 && hour < 19) {
    html.style.setProperty("--black-white", "#000");
    html.style.setProperty("--black-white-light", "#e7e7e7");
    html.style.setProperty("--color-opacity", "#ffffffaa");
} else {
    document.body.style.backgroundColor = "#000000";
    html.style.setProperty("--black-white", "#fff");
    html.style.setProperty("--black-white-light", "#3e3e3e");
    html.style.setProperty("--color-opacity", "#000000aa");
}

// Show map and cart
const myContCm = document.querySelectorAll(".cont-cm"),
    myMap = myContCm[1],
    myCart = myContCm[0],
    showMap = document.querySelector(".show-map"),
    showCart = document.querySelector(".show-cart");

myMap.onclick = _ => {
    showMap.classList.toggle("active");
    myMap.classList.toggle("active");
}

myCart.onclick = _ => {
    showCart.classList.toggle("active");
    myCart.classList.toggle("active");
}

// Loading page
const loading = document.querySelector(".loading"),
    myH1 = document.querySelector("h1"),
    myPInfo = document.querySelector(".info-left p"),
    mySquaresInfo = document.querySelectorAll(".info-left .squares .square"),
    myButtonInfo = document.querySelector(".info-left button"),
    myRightSquare = document.querySelector(".rightSquare");

window.onload = function () {
    setTimeout(function () {
        loading.style.display = "none";
    }, 1000);

    setTimeout(function () {
        myH1.classList.add("animi");
        myPInfo.classList.add("animi");
        myButtonInfo.classList.add("animi");
        myRightSquare.classList.add("animi");

        mySquaresInfo[0].classList.add("animi");
        let s = 1;
        let myInt = setInterval(function () {
            mySquaresInfo[s].classList.add("animi");
            s += 1;
            if (s == mySquaresInfo.length) {
                clearInterval(myInt);
            }
        }, 200);

    }, 1005)
}

// h2 scrolling efects
const allh2 = document.querySelectorAll("h2");

for (let i = 0; i < allh2.length; i += 1) {
    const h2ele = allh2[i];

    function scorollingH2() {
        "use strict";
        if (window.pageYOffset >= h2ele.offsetTop + h2ele.offsetHeight - window.innerHeight) {
            h2ele.classList.add("scroll");
            window.removeEventListener("scroll", scorollingH2);
        }
    }

    window.addEventListener("scroll", scorollingH2);
}

// show menu
const myButMenu = document.querySelector(".menu-cont"),
    myMenu = myButMenu.nextElementSibling;

myButMenu.onclick = function () {
    "use strict";
    this.classList.toggle("active");
    myMenu.classList.toggle("active");
}

document.onclick = function (e) {
    "use strict";
    if (!e.path.includes(myMap) && !e.path.includes(showMap) && showMap.classList.contains("active")) {
        showMap.classList.toggle("active");
        myMap.classList.toggle("active");
    }

    if (!e.path.includes(myCart) && !e.path.includes(showCart) && showCart.classList.contains("active")) {
        showCart.classList.toggle("active");
        myCart.classList.toggle("active");
    }

    if (!e.path.includes(myButMenu) && !e.path.includes(myMenu) && myMenu.classList.contains("active")) {
        myButMenu.classList.toggle("active");
        myMenu.classList.toggle("active");
    }
};

// change slideshow height by contribution to img if window width is less than 1024px
if (!document.querySelector('header a[href*="contact.html"]').classList.contains("active")) {
    const sShow = document.querySelector(".slideshow"),
        anyImg = sShow.children[1],
        myInfo = document.querySelector(".info");

    function sShowHei() {
        "use strict";
        if (window.innerWidth <= 1024) {
            sShow.style.height = anyImg.offsetHeight + "px";
            myInfo.style.height = sShow.style.height;
        } else {
            sShow.removeAttribute("style");
        }

        if (window.innerWidth <= 768) {
            myInfo.style.height = "auto";
        }
    }
    sShowHei();
    window.onresize = sShowHei;
}
