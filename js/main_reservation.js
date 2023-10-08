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

// scrolling Eles
const scels = document.querySelector(".book-table form").children;

for (let i = 0; i < scels.length; i += 1) {
    scels[i].classList.add("scalex-rev", "trans");

    function sce() {
        "use strict";
        if (window.scrollY >= scels[i].offsetHeight + scels[i].offsetTop - window.innerHeight) {
            scels[i].classList.remove("scalex-rev");

            setTimeout(_ => scels[i].classList.remove("trans"), 1005);

            window.removeEventListener("scroll", sce);
        }
    }

    window.addEventListener("scroll", sce);
}