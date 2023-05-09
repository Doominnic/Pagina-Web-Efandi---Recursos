// Smooth scrolling animation

const allLinks = document.querySelector(".nav-menu").querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/////////////////////////////////////////////////////////////////
// Sticky navigation //

const sectionHeroEl = document.querySelector(".hero-section");
const sectionOneEl = document.querySelector(".section-content-1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.add("sticky");
      document.querySelector(".logo-nav").classList.add("on");
      document.querySelectorAll(".sm-icon").forEach(function (icon) {
        icon.classList.add("on");
      });
      document.querySelector(".nav-menu").classList.add("on");
    }

    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.remove("sticky");
      document.querySelector(".logo-nav").classList.remove("on");
      document.querySelectorAll(".sm-icon").forEach(function (icon) {
        icon.classList.remove("on");
      });
      document.querySelector(".nav-menu").classList.remove("on");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-150px",
  }
);
obs.observe(sectionHeroEl);

const obsSectionOne = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === true) {
      document.querySelector(".header").classList.add("blue-menu");
    }

    if (ent.isIntersecting === false) {
      document.querySelector(".header").classList.remove("blue-menu");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-30px",
  }
);
obsSectionOne.observe(sectionOneEl);

///////////////////////////////////////////////////////////////////
// CURSOR

const innerCursor = document.querySelector(".inner-cursor");
const outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

const links = Array.from(document.querySelectorAll("a"));

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

//////////////////////////////////////////////////////////////
// NAV MENU MOBILE

const navMenu = document.querySelector(".header");
const menuButton = document.querySelector(".btn-mobile-nav");
const menuLinks = document.querySelector(".nav-menu").querySelectorAll("a");

menuButton.addEventListener("click", e => {
  e.preventDefault();
  navMenu.classList.toggle("nav-menu-open");
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", e => {
    e.preventDefault();
    navMenu.classList.remove("nav-menu-open");
  });
});
