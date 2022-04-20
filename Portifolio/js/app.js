const header = document.querySelector("header");

/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    //console.log(window.pageYOffset>0);
}

stickyNavbar();
window.addEventListener("scroll", stickyNavbar);

/* --------------- Reveal Animation --------------- */

let sr = ScrollReveal({
    duration: 2300,
    distance: "60px"
});

sr.reveal(".showcase-info", { delay: 700 });
sr.reveal(".showcase-image", { origin: "top", delay: 700 });

/* --------------- Skills Progress Bar Animation --------------- */

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

function hasReached(element) {
    let topPosition = element.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + element.offsetHeight) return true;
    return false;
}

function skillCounter() {
    if (!hasReached(first_skill)) return;

    sk_counters.forEach((couter, i) => {
        let target = +couter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);
        //console.log(strokeValue);

        progress_bars[i].style.setProperty("--target", strokeValue);
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}

window.addEventListener("scroll", () => {
    skillCounter();
})

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */