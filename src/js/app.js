const menuButtonOpen = document.getElementById("btnMenuOpen");
const menuButtonClose = document.getElementById("btnMenuClose");
const form = document.getElementById("contactForm");
const menuToggle = document.getElementById("menuToggle");
const black = document.getElementById("black");

menuButtonOpen.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  menuToggle.style.top = "0";
  black.style.background = "#0000007c";
  black.style.display = "flex";
  menuButtonOpen.style.display = "none";
  menuButtonClose.style.display = "flex";
});

menuButtonClose.addEventListener("click", () => {
  document.body.style.overflowY = "scroll";
  menuToggle.style.top = "-35vh";
  black.style.background = "none";
  menuButtonOpen.style.display = "flex";
  menuButtonClose.style.display = "none";
});

form.addEventListener("submit", function () {
  setTimeout(() => {
    form.reset();
  }, 50);
});
