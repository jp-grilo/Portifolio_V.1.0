/* --------------- Constants used --------------- */

// Navbar
const header = document.querySelector("header");

// Skills Progress Bar Animation
const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

// Services Counter Animation
const ml_section = document.querySelector(".milestones");
const ml_counters = document.querySelectorAll(".number span");

// Portfolio Filter Animation
const prt_section = document.querySelector(".portifolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const next_btn = document.querySelector(".next-btn");
const prev_btn = document.querySelector(".prev-btn");

// Change Active Link On Scroll
const links = document.querySelectorAll(".nav-link");

/* --------------- Events --------------- */

window.addEventListener("scroll", stickyNavbar);

window.addEventListener("scroll", () => {
    activeLink();
    if (!skillsPlayed) skillCounter();
    if (!mlPlayed) mlCounter();
})

/* --------------- Functions --------------- */

function hasReached(element) {
    let topPosition = element.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + element.offsetHeight) return true;
    return false;
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

sr.reveal(".showcase-info", { delay: 700 });
sr.reveal(".showcase-image", { origin: "top", delay: 650 });

/* --------------- Skills Progress Bar Animation --------------- */

let skillsPlayed = false;

function updateCount(num, maxNum) {
    let currentNum = +num.innerText;
    if (currentNum < maxNum) {
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12);
    }
}

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

function updateCountMl(num, maxNum) {

    let currentNum = +num.innerText;
    if (currentNum < maxNum) {

        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCountMl(num, maxNum);
        }, 75);

    }
}

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

let mixer = mixitup('.portifolio-gallery');


/* --------------- Modal Pop Up Animation Animation --------------- */

let currentIndex = 0;

function changeImage(index) {
    images.forEach((img) => img.classList.remove("showImage"));
    //console.log(images[index]);
    images[index].classList.add("showImage")

}

prev_btn.addEventListener("click", () => {
    if (currentIndex === 0) {
        currentIndex = 5;
    } else {
        currentIndex--;
    }
    // console.log(currentIndex);
    changeImage(currentIndex);
})

next_btn.addEventListener("click", () => {
    if (currentIndex === 5) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    // console.log(currentIndex);
    changeImage(currentIndex);
})

zoom_icons.forEach((inc, i) =>
    inc.addEventListener("click", () => {
        prt_section.classList.add("open");
        document.body.classList.add("stopScrolling");
        currentIndex = i;
        changeImage(currentIndex);
    })
);

modal_overlay.addEventListener("click", () => {
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling");
})

/* --------------- Modal Pop Up Animation Animation --------------- */

const swiper = new Swiper('.swiper', {

    loop: true,
    speed: 500,
    autoplay: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

/* --------------- Change Active Link On Scroll --------------- */

function activeLink() {
    let sections = document.querySelectorAll("section[id]");
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i
        };
    }).filter(sct => sct.y <= 0)

    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
    links[currSectionID].classList.add("active");
}

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */