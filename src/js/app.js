let declenche = document.getElementById("declenche");
let left = document.getElementById("left");
let right = document.getElementById("right");
let txtLogo = document.getElementById("txtLogo");
let introDiv = document.getElementById("introDiv");
let appDiv = document.getElementById("appDiv");

declenche.addEventListener("click", () => {
  left.style.left = "-110%";
  right.style.right = "-110%";
  const t = setInterval(() => {
    txtLogo.style.top = "40%";
  }, 1500);

  const s = setInterval(() => {
    introDiv.style.top = "100vh";
    introDiv.style.opacity = "0";
    const u = setInterval(() => {
      introDiv.style.display = "none";
    }, 1000);
  }, 3500);
});
