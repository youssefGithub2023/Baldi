// scrolling Eles
const scels = document.querySelector(".contact-us form").children;

for (let i = 0; i < scels.length; i += 1) {
    scels[i].classList.add("scaley-rev", "trans");

    function sce() {
        "use strict";
        if (window.scrollY >= scels[i].offsetHeight + scels[i].offsetTop - window.innerHeight) {
            scels[i].classList.remove("scaley-rev");

            setTimeout(_ => scels[i].classList.remove("trans"), 1005);

            window.removeEventListener("scroll", sce);
        }
    }

    window.addEventListener("scroll", sce);
}