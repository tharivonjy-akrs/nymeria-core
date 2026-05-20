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
  }, 1000);

  const s = setInterval(() => {
    introDiv.style.top = "-100%";
    introDiv.style.opacity = "0";
    const u = setInterval(() => {
      introDiv.style.display = "none";
      appDiv.style.display = "block";
      const v = setInterval(() => {
        appDiv.style.marginTop = "0";
        const u = setInterval(() => {
          appDiv.style.opacity = "1";
        }, 300);
      }, 500);
    }, 1000);
  }, 2500);
});
