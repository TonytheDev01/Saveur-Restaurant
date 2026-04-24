/* =====================================================
   SAVEUR RESTAURANT TEMPLATE — main.js
   No console.log. No alert(). No const/let.
   Private functions prefixed with underscore (_).
   ===================================================== */

(function () {
  /* ---- NAVBAR: scroll state & mobile toggle ---- */
  var _navbar = document.getElementById("navbar");
  var _navToggle = document.getElementById("navToggle");
  var _navMenu = document.getElementById("navMenu");

  function _handleNavbarScroll() {
    if (window.scrollY > 60) {
      _navbar.classList.add("is-scrolled");
    } else {
      _navbar.classList.remove("is-scrolled");
    }
  }

  function _handleNavToggle() {
    var isOpen = _navMenu.classList.toggle("is-open");
    _navToggle.classList.toggle("is-open", isOpen);
    _navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

  function _closeNavOnLinkClick() {
    var links = _navMenu.querySelectorAll(".navbar__link, .btn");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        _navMenu.classList.remove("is-open");
        _navToggle.classList.remove("is-open");
        _navToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    }
  }

  window.addEventListener("scroll", _handleNavbarScroll, { passive: true });
  _navToggle.addEventListener("click", _handleNavToggle);
  _closeNavOnLinkClick();
  _handleNavbarScroll();

  /* ---- MENU TABS: filter by category ---- */
  var _menuTabs = document.querySelectorAll(".menu-tab");
  var _menuCards = document.querySelectorAll(".menu-card");

  function _filterMenu(category) {
    for (var i = 0; i < _menuCards.length; i++) {
      var card = _menuCards[i];
      if (
        category === "all" ||
        card.getAttribute("data-category") === category
      ) {
        card.classList.remove("is-hidden");
      } else {
        card.classList.add("is-hidden");
      }
    }
  }

  function _handleTabClick() {
    /* Remove active state from all tabs */
    for (var i = 0; i < _menuTabs.length; i++) {
      _menuTabs[i].classList.remove("is-active");
      _menuTabs[i].setAttribute("aria-selected", "false");
    }
    this.classList.add("is-active");
    this.setAttribute("aria-selected", "true");
    _filterMenu(this.getAttribute("data-tab"));
  }

  for (var t = 0; t < _menuTabs.length; t++) {
    _menuTabs[t].addEventListener("click", _handleTabClick);
  }

  /* ---- RESERVATION FORM: submit handler ---- */
  var _reserveForm = document.querySelector(".reserve__form");

  function _showToast(msg) {
    var toast = document.getElementById("toast");
    var toastMsg = document.getElementById("toastMsg");
    toastMsg.textContent = msg;
    toast.removeAttribute("hidden");
    setTimeout(function () {
      toast.setAttribute("hidden", "");
    }, 4000);
  }

  function _handleReserveSubmit(e) {
    e.preventDefault();
    var name = document.getElementById("reserveName").value.trim();
    var phone = document.getElementById("reservePhone").value.trim();
    var guests = document.getElementById("reserveGuests").value;
    var date = document.getElementById("reserveDate").value;
    var time = document.getElementById("reserveTime").value;

    if (!name || !phone || !guests || !date || !time) {
      _showToast("Please fill in all required fields.");
      return;
    }

    /* Build WhatsApp message */
    var message =
      "Hi Saveur! I'd like to reserve a table.\n\n" +
      "Name: " +
      name +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "Guests: " +
      guests +
      "\n" +
      "Date: " +
      date +
      "\n" +
      "Time: " +
      time;

    var whatsappURL =
      "https://wa.me/2348030000000?text=" + encodeURIComponent(message);
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    _reserveForm.reset();
    _showToast("Reservation sent! We'll confirm via WhatsApp shortly.");
  }

  if (_reserveForm) {
    _reserveForm.addEventListener("submit", _handleReserveSubmit);
  }

  /* ---- BACK TO TOP ---- */
  var _backToTop = document.getElementById("backToTop");

  function _handleBackToTopVisibility() {
    if (window.scrollY > 400) {
      _backToTop.classList.add("is-visible");
    } else {
      _backToTop.classList.remove("is-visible");
    }
  }

  _backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", _handleBackToTopVisibility, {
    passive: true,
  });

  /* ---- SET CURRENT YEAR IN FOOTER ---- */
  var _yearEl = document.getElementById("year");
  if (_yearEl) {
    _yearEl.textContent = new Date().getFullYear();
  }

  /* ---- INTERSECTION OBSERVER: fade-in on scroll ---- */
  function _setupScrollAnimations() {
    var observerOptions = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" };

    var _observer = new IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.style.opacity = "1";
          entries[i].target.style.transform = "translateY(0)";
          _observer.unobserve(entries[i].target);
        }
      }
    }, observerOptions);

    var animateEls = document.querySelectorAll(
      ".menu-card, .testi-card, .feature-card, .contact-card, .about__content",
    );

    for (var j = 0; j < animateEls.length; j++) {
      animateEls[j].style.opacity = "0";
      animateEls[j].style.transform = "translateY(24px)";
      animateEls[j].style.transition = "opacity 0.5s ease, transform 0.5s ease";
      _observer.observe(animateEls[j]);
    }
  }

  /* Only animate if reduced-motion is not preferred */
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    _setupScrollAnimations();
  }
})();
