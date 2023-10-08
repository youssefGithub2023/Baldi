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

// Scroll about us
const aboutUs = document.querySelector(".about-us"),
    aufigure = aboutUs.querySelector(".about-us figure"),
    auh3 = aboutUs.querySelector(".container-info h3"),
    aup = aboutUs.querySelector(".container-info p"),
    auul = aboutUs.querySelector(".container-info ul"),
    aubutton = aboutUs.querySelector(".container-info button");

function aboutUsScroll() {
    "use strict";
    if (window.pageYOffset >= aboutUs.offsetTop + aboutUs.offsetHeight - window.innerHeight) {
        aufigure.classList.add("scroll");
        auh3.classList.add("scroll");
        aup.classList.add("scroll");
        auul.classList.add("scroll");
        aubutton.classList.add("scroll");

        // after the statement
        window.removeEventListener("scroll", aboutUsScroll);
    }
}

window.addEventListener("scroll", aboutUsScroll);

// scrolling articles

// get scrolling elements
const mySceles = Array.from(document.querySelectorAll(".art_flex")).concat(Array.from(document.querySelectorAll(".gallery li"))),
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

// show gallery images
const oImg = document.querySelector(".o-img"),
    galImgs = Array.from(document.querySelectorAll(".gallery ul li")),
    showImg = document.querySelector(".o-img .show-img img"),
    closeImg = document.querySelector(".o-img .close"),
    previous = document.querySelector(".o-img .previous section"),
    next = document.querySelector(".o-img .next section"),
    galleryImgsSrc = [];

for (let i = 0; i < galImgs.length; i += 1) {
    galImgs[i].onclick = function () {
        "use strict";

        showImg.setAttribute("src", this.firstElementChild.getAttribute("src"));

        oImg.style.display = "block";
        setTimeout(() => oImg.classList.add("active"), 5);
    }

    galleryImgsSrc.push(galImgs[i].firstElementChild.getAttribute("src"));
}

closeImg.onclick = function () {
    "use strict";
    this.parentElement.parentElement.classList.remove("active");
    setTimeout(_ => this.parentElement.parentElement.style.display = "none", 1005);
}

previous.onclick = function () {
    "use strict";
    
    const myImg = this.parentElement.parentElement.querySelector("img"),
        ind = Number(galleryImgsSrc.indexOf(myImg.getAttribute("src")));

        if (ind !== 0) {
            myImg.setAttribute("src", galleryImgsSrc[ind - 1]);
        }
}

next.onclick = function () {
    "use strict";

    const myImg = this.parentElement.parentElement.querySelector("img"),
        ind = Number(galleryImgsSrc.indexOf(myImg.getAttribute("src")));

        if (ind !== (galleryImgsSrc.length - 1)) {
            myImg.setAttribute("src", galleryImgsSrc[ind + 1]);
        }
}