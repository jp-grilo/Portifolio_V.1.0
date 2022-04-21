const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

window.addEventListener("scroll", stickyNavbar);

window.addEventListener("scroll", () => {
    if (!skillsPlayed) skillCounter();
    if (!mlPlayed) mlCounter();
})

function hasReached(element) {
    let topPosition = element.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + element.offsetHeight) return true;
    return false;
}

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

function updateCountMl(num, maxNum) {

    let currentNum = +num.innerText;
    if (currentNum < maxNum) {

        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 75);

    }
}

/* --------------- Grab elements from DOM --------------- */

/* --------------- Sticky Navbar --------------- */
function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
    //console.log(window.pageYOffset>0);
}

stickyNavbar();

/* --------------- Reveal Animation --------------- */

let sr = ScrollReveal({
    duration: 1800,
    distance: "60px"
});

sr.reveal(".showcase-info", { delay: 300 });
sr.reveal(".showcase-image", { origin: "top", delay: 300 });

/* --------------- Skills Progress Bar Animation --------------- */



let skillsPlayed = false;

function skillCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counters.forEach((counter, i) => {
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target)
        }, 400);
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}

/* --------------- Services Counter Animation --------------- */

let mlPlayed = false;

function mlCounter() {
    if (!hasReached(ml_section)) return;

    mlPlayed = true;

    ml_counters.forEach(ctr => {
        let target = +ctr.dataset.target;
        setTimeout(() => {
            updateCountMl(ctr, target)
        }, 400);
    })
}

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */