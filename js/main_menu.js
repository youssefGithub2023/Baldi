const mySlideshow = document.getElementById("slideshow_ind"),
    mySlideshowImgs = mySlideshow.querySelectorAll("img");

setInterval(function () {
    mySlideshow.querySelector("img.active").classList.remove("active");
    mySlideshowImgs[i].classList.add("active");
    i += 1;
    if (i == mySlideshowImgs.length) {
        i = 0;
    }
}, 4000);

// Start meals time
const myMealsTime = document.querySelector(".meal-time").children,
    myMeals = document.querySelector(".menu").children,
    nowMenu = new Date(), // dont forget to import this variable fom main.js
    hourMenu = nowMenu.toTimeString().slice(0, 2); // dont forget to import this variable fom main.js

if (hourMenu >= 4 && hourMenu < 10) {
    myMealsTime[0].classList.add("active");
    myMeals[0].classList.add("active");
} else if (hourMenu >= 10 && hourMenu <= 16) {
    myMealsTime[1].classList.add("active");
    myMeals[1].classList.add("active");
} else {
    myMealsTime[2].classList.add("active");
    myMeals[2].classList.add("active");
}

function removeAtciveClass() {
    document.querySelector(".meal-time").querySelector(".active").classList.remove("active");
    
    for (let i = 0; i < myMeals.length; i += 1) {
        if (myMeals[i].classList.contains("active")) {
            myMeals[i].classList.remove("active");
        }
    }
}

function oneByOne() {
    "use strict";
    const myScelesa = document.querySelectorAll(".menu > section.active .art_flex");
    for (let i = 0; i < myScelesa.length; i += 1) {
        myScelesa[i].classList.add("trans", "opa");
        setTimeout(function () {
            "use strict";
            myScelesa[i].classList.remove("opa");
            setTimeout(_ => myScelesa[i].classList.remove("trans"), 1005);
        }, i * 200);
    }
}

myMealsTime[0].onclick = function () {
    removeAtciveClass();
    this.classList.add("active");
    myMeals[0].classList.add("active");

    oneByOne();
}

myMealsTime[1].onclick = function () {
    removeAtciveClass();
    this.classList.add("active");
    myMeals[1].classList.add("active");

    oneByOne();
}

myMealsTime[2].onclick = function () {
    removeAtciveClass();
    this.classList.add("active");
    myMeals[2].classList.add("active");

    oneByOne();
}

// scrolling articles

// get scrolling elements
const mySceles = document.querySelectorAll(".menu > section.active .art_flex"),
    rsc = ["scalet-rev", "scaleb-rev","scalex-rev", "scaley-rev", "transltr-rev", "transrtl-rev", "transbtt-rev", "transttb-rev", "rotatex-rev", "rotatey-rev", "rotsca-rev", "translrot-rev", "transrrot-rev"];

for (let i = 0; i < mySceles.length; i += 1) {
    const scele = mySceles[i],
        sc = rsc[Math.floor(Math.random() * rsc.length)];

    scele.classList.add(sc, "trans");
    
    function scEle() {
        if (window.scrollY >= scele.offsetTop + scele.offsetHeight - window.innerHeight) {
            scele.classList.remove(sc);
            
            setTimeout(_ => scele.classList.remove("trans"), 1005);

            window.removeEventListener("scroll", scEle);
        }
    }

    window.addEventListener("scroll", scEle);

}

// cart
function clacTotal() {
    "use strict";
    const allPurchases = myShowCart.querySelectorAll("article");

    let total = 0;

    for (let i = 0; i < allPurchases.length; i += 1) {
        total += parseFloat(allPurchases[i].querySelector("ul").children[1].textContent.slice(0, -2)) * parseInt(allPurchases[i].querySelector("input").value);
    }

    document.querySelector(".total .total-value").textContent = `${total.toFixed(2)}dh`;
}

const myShowCart = document.querySelector(".cart-cont"),
    mealCounter = document.querySelector(".cart-map .count"),
    atcButs = document.querySelectorAll(".meal .cart");

for (let i = 0; i < atcButs.length; i += 1) {
    atcButs[i].onclick = function () {
        "use strict";

        this.classList.add("disclick");
        this.firstElementChild.className = "fas fa-check-circle";
        mealCounter.textContent = parseInt(mealCounter.textContent) + 1;
        const cAticle = document.createElement("article"),
            cFigure = document.createElement("figure"),
            cImg = document.createElement("img"),
            cul = document.createElement("ul"),
            cLi1 = document.createElement("li"),
            cLi2 = document.createElement("li"),
            cLi3 = document.createElement("li"),
            cInput = document.createElement("input"),
            cSection = document.createElement("section"),
            cI = document.createElement("i"),
            imgsrc = this.parentElement.firstElementChild.firstElementChild.getAttribute("src"),
            mealName = this.parentElement.children[1].textContent,
            mealPrice = this.parentElement.querySelector("section.price").textContent,
            mealDate = new Date().toLocaleString().slice(0, -3);

        myShowCart.appendChild(cAticle);
        cAticle.appendChild(cFigure);
        cFigure.appendChild(cImg);
        cAticle.appendChild(cul);
        cul.appendChild(cLi1);
        cul.appendChild(cLi2);
        cul.appendChild(cLi3);
        cAticle.appendChild(cInput);
        cAticle.appendChild(cSection);
        cSection.appendChild(cI);

        cImg.setAttribute("src", imgsrc);
        cLi1.textContent = mealName;
        cLi2.textContent = mealPrice;
        cLi3.textContent = mealDate;
        cInput.value = "1";
        cInput.type = "number";
        cInput.oninput = clacTotal;
        cSection.classList.add("remove");
        cI.classList.add("fa", "fa-trash");
        cI.setAttribute("aria-hidden", "true");

        cSection.onclick = function () {
            "use strict";
            this.parentElement.remove();
            mealCounter.textContent = parseInt(mealCounter.textContent) - 1;
            atcButs[i].classList.remove("disclick");
            atcButs[i].firstElementChild.className = "fas fa-cart-plus";
            clacTotal();
        }

        clacTotal();
    }
}
