// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/////////////////////////////////////////////////////////////////
// Sticky navigation //

const sectionHeroEl = document.querySelector(".hero-section");

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
