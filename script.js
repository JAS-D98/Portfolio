let yearText = document.querySelector("#year");
let currentYear = new Date();
yearText.textContent = currentYear.getFullYear();

/* scroll reveal */
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home, .heading, .contact-content", { origin: "top" });
ScrollReveal().reveal(".services-container, .project-container, .mySwiper", {
  origin: "bottom",
});
ScrollReveal().reveal(".about-col-1, .contactInfo", { origin: "left" });
ScrollReveal().reveal(".about-col-2, .contactForm", { origin: "right" });
