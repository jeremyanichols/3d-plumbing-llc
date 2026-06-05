/* 3D Plumbing, LLC — light interactivity. No dependencies. */
(function () {
  "use strict";

  // Mobile nav toggle
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav__toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("nav-open");
      var open = header.classList.contains("nav-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close menu when a link is tapped
    header.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () { header.classList.remove("nav-open"); });
    });
  }

  // Shadow on header once scrolled
  var onScroll = function () {
    if (!header) return;
    header.classList.toggle("is-stuck", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Quote / contact form.
  // Leads are emailed via FormSubmit (https://formsubmit.co) — no backend needed.
  // Set the destination ONCE per form via the data-email attribute (in the HTML).
  // FIRST submission triggers a one-time activation email to that address; click the
  // link in it and every submission after that lands in the inbox automatically.
  document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }

      var ok = form.querySelector(".form-success");
      var btn = form.querySelector('button[type="submit"]');
      var email = form.getAttribute("data-email") || "";
      var showSuccess = function () {
        form.querySelectorAll("input, select, textarea, button").forEach(function (el) { el.style.display = "none"; });
        if (ok) ok.style.display = "block";
      };

      // Demo mode: no real email wired yet → just show the success state.
      if (!email || /EXAMPLE\.COM/i.test(email)) {
        console.warn("[3D Plumbing] Form not wired to a real inbox yet. Set data-email on the <form> to go live.");
        showSuccess();
        return;
      }

      if (btn) { btn.textContent = "Sending…"; btn.disabled = true; }
      var data = new FormData(form);
      data.append("_subject", "New quote request — 3D Plumbing website");
      data.append("_template", "table");
      data.append("_captcha", "false");

      fetch("https://formsubmit.co/ajax/" + encodeURIComponent(email), {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(showSuccess)
        .catch(function () {
          // Network/activation issue — don't lose the lead, point them to the phone.
          if (btn) { btn.disabled = false; btn.textContent = "Request My Free Quote"; }
          alert("Sorry, something went wrong sending your request. Please call us at (636) 386-8755.");
        });
    });
  });

  // Mark current page's nav link active.
  // Works for clean URLs (/services) on GitHub Pages and for /services.html locally.
  var key = function (s) {
    return (s || "").replace(/[#?].*$/, "").replace(/^\.\//, "").replace(/\/+$/, "").replace(/\.html$/, "");
  };
  var seg = key(location.pathname.split("/").pop()); // "" home, "services", "index"->"" below
  if (seg === "index") seg = "";
  var navLinks = document.querySelectorAll(".nav__links a");
  var matched = false;
  navLinks.forEach(function (a) {
    var k = key(a.getAttribute("href"));
    if (k !== "" && k === seg) { a.classList.add("active"); matched = true; }
  });
  if (!matched) { // home (site root, /index, or the Pages project-root segment)
    navLinks.forEach(function (a) { if (key(a.getAttribute("href")) === "") a.classList.add("active"); });
  }
})();
