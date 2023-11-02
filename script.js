let btn = document.getElementById("enterBtn");
let p = document.getElementById("status");
let h1 = document.createElement("h1");
let body = document.querySelector("body");

btn.addEventListener("click", () => {
  p.remove();
  body.appendChild(h1);
  h1.innerText = "Entered Metaverse";
});
