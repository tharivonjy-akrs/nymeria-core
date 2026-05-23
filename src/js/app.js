// Vider formulaire

const form = document.getElementById("contactForm");

form.addEventListener("submit", function () {
  setTimeout(() => {
    form.reset();
  }, 50);
});