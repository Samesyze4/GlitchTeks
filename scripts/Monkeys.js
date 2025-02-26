const noveLines = [
  "Greetings, fleshy humans! I'm Nove, the better-looking chimp.",
  "Seriously, S.A.S.S., do you ever stop complaining?",
  "I once hacked a banana dispenser. Best day ever!"
];

const sassLines = [
  "Oh, look, it's Nove. Because one cyber-chimp wasn't enough?",
  "I’m not complaining; I’m providing a constant stream of brilliance.",
  "Bananas? Really? You hacked a dispenser and now brag about it?"
];

let noveIndex = 0;
let sassIndex = 0;

const noveBubble = document.getElementById("nove-bubble");
const sassBubble = document.getElementById("sass-bubble");

window.addEventListener("DOMContentLoaded", () => {
  noveBubble.textContent = noveLines[noveIndex];
  sassBubble.textContent = sassLines[sassIndex];
  noveBubble.classList.add("show");
  sassBubble.classList.add("show");

  setInterval(() => {
    noveIndex = (noveIndex + 1) % noveLines.length;
    sassIndex = (sassIndex + 1) % sassLines.length;
    noveBubble.textContent = noveLines[noveIndex];
    sassBubble.textContent = sassLines[sassIndex];
  }, 5000);
});
