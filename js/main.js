/* ==========================
   STATE
========================== */
let isDark = localStorage.getItem("theme") === "dark";
let currentUser = null;
let chatHistory = [];
let mbOpen = false;

/* ==========================
   DOM READY
========================== */
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initFeatureCards();
    initCursorGlow();
    initNavbar();
    initReveal();
});


/* ==========================
   THEME
========================== */
function initTheme() {
    applyTheme();
    const themeBtn = document.getElementById("thbtn");
    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }
    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) {
        darkToggle.checked = isDark;
    }
}

function toggleTheme() {
    isDark = !isDark;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme();
    if (typeof updateChartColors === "function") {
        updateChartColors();
    }
}

function applyTheme() {
    document.documentElement.classList.toggle("lm", !isDark);
    toggleDisplay("suni", !isDark);
    toggleDisplay("mooni", isDark);
    toggleDisplay("dbSunI", !isDark);
    toggleDisplay("dbMoonI", isDark);

    const darkToggle = document.getElementById("darkModeToggle");
    if (darkToggle) {
        darkToggle.checked = isDark;
    }
}

function toggleDisplay(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = show ? "inline" : "none";
}

/* ==========================
   FEATURE CARDS
========================== */
function initFeatureCards() {
    const cards = document.querySelectorAll(".feature-card");
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const index = [...cards].indexOf(entry.target);
            setTimeout(() => {
                entry.target.classList.add("show");
            }, index * 120);
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.2
    });

    cards.forEach(card => {
        observer.observe(card);
        card.addEventListener("mousemove", e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty("--x", `${e.clientX - rect.left}px`);
            card.style.setProperty("--y", `${e.clientY - rect.top}px`);
        });
    });
}

/* ==========================
   CURSOR GLOW
========================== */
function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.body.style.setProperty("--x", `${mouseX}px`);
        document.body.style.setProperty("--y", `${mouseY}px`);
    });

    function animate() {
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;
        glow.style.left = `${currentX}px`;
        glow.style.top = `${currentY}px`;
        requestAnimationFrame(animate);
    }
    animate();
}

/* ==========================
   NAVBAR
========================== */
function initNavbar() {
    const navbar = document.getElementById("nbar");

    if (navbar) {
        window.addEventListener("scroll", () => {
            navbar.classList.toggle("scr", window.scrollY > 40);
        });
    }

    const menuBtn = document.getElementById("mbtog");
    const menu = document.getElementById("mbmenu");

    if (!menuBtn || !menu) return;

    menuBtn.addEventListener("click", () => {
        mbOpen = !mbOpen;
        menu.classList.toggle("open", mbOpen);
        toggleDisplay("barIcon", !mbOpen);
        toggleDisplay("xIcon", mbOpen);
    });

    menu.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("click", () => {
            mbOpen = false;
            menu.classList.remove("open");
            toggleDisplay("barIcon", true);
            toggleDisplay("xIcon", false);
        });
    });
}

/* ==========================
   REVEAL ANIMATION
========================== */
function initReveal() {
    const revealItems = document.querySelectorAll(".rv");

    if (!revealItems.length) return;
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });

    revealItems.forEach(item => observer.observe(item));
}

/* ==========================
   BG IMG SLIDER
========================== */
const heroImages = [
    "/assets/img/hero_bg.png",
    "/assets/img/hero_bg2.jpg",
];

const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

let index = 0;
let activeBg = bg1;
let inactiveBg = bg2;

activeBg.style.backgroundImage = `url(${heroImages[0]})`;
activeBg.classList.add("active");

setInterval(() => {
    index = (index + 1) % heroImages.length;
    inactiveBg.style.backgroundImage = `url(${heroImages[index]})`;
    inactiveBg.classList.add("active");
    activeBg.classList.remove("active");
    [activeBg, inactiveBg] = [inactiveBg, activeBg];
}, 5000);
