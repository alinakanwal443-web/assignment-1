const text = document.getElementById("sampleText");
const textArea = document.getElementById("textArea");

const originalText = text.innerText;
const originalBackground = "#fff7e8";

const colors = ["#d93025", "#1769aa", "#188038", "#8e44ad"];
let colorIndex = 0;

document.getElementById("colorBtn").addEventListener("click", () => {
  text.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

document.getElementById("increaseBtn").addEventListener("click", () => {
  const currentSize = parseFloat(getComputedStyle(text).fontSize);
  text.style.fontSize = `${currentSize + 2}px`;
});

document.getElementById("decreaseBtn").addEventListener("click", () => {
  const currentSize = parseFloat(getComputedStyle(text).fontSize);
  text.style.fontSize = `${Math.max(12, currentSize - 2)}px`;
});

document.getElementById("fontSelect").addEventListener("change", (event) => {
  text.style.fontFamily = event.target.value;
});

document.getElementById("underlineBtn").addEventListener("click", () => {
  text.classList.toggle("underline");
});

document.getElementById("overlineBtn").addEventListener("click", () => {
  text.classList.toggle("overline");
});

document.getElementById("strikeBtn").addEventListener("click", () => {
  text.classList.toggle("strike");
});

document.getElementById("boldBtn").addEventListener("click", () => {
  text.style.fontWeight =
    text.style.fontWeight === "bold" ? "normal" : "bold";
});

document.getElementById("italicBtn").addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});

document.getElementById("leftBtn").addEventListener("click", () => {
  text.style.textAlign = "left";
});

document.getElementById("centerBtn").addEventListener("click", () => {
  text.style.textAlign = "center";
});

document.getElementById("rightBtn").addEventListener("click", () => {
  text.style.textAlign = "right";
});

document.getElementById("upperBtn").addEventListener("click", () => {
  text.style.textTransform = "uppercase";
});

document.getElementById("lowerBtn").addEventListener("click", () => {
  text.style.textTransform = "lowercase";
});

document.getElementById("backgroundColor").addEventListener("input", (event) => {
  textArea.style.backgroundColor = event.target.value;
});

document.getElementById("modeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("resetBtn").addEventListener("click", () => {
  text.innerText = originalText;
  text.removeAttribute("style");
  text.classList.remove("underline", "overline", "strike");

  textArea.style.backgroundColor = originalBackground;
  document.getElementById("fontSelect").value = "Arial";
  document.getElementById("backgroundColor").value = originalBackground;
  document.body.classList.remove("dark-mode");
  colorIndex = 0;
});