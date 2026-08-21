(function () {
  "use strict";

  /* Footer year */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------------------ */
  /* Mobile navigation toggle                                           */
  /* ------------------------------------------------------------------ */
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("main-nav");

  function closeNav() {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }
  function openNav() {
    mainNav.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.contains("is-open");
      isOpen ? closeNav() : openNav();
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 900) closeNav();
    });
  }

})();
