<script>
  // Example banter lines for Nove and S.A.S.S.
  const noveLines = [
    "Greetings, fleshy humans! I'm Nove, the better-looking chimp.",
    "Seriously, S.A.S.S., do you ever stop complaining?",
    "I once hacked a banana dispenser. Best day ever!"
  ];

  const sassLines = [
    "Oh, look, it's Nove. Because one cyber-chimp wasn't enough?",
    "I’m not complaining, I’m providing a constant stream of brilliance.",
    "Bananas? Really? You hack a vending machine once and never shut up about it."
  ];

  let noveIndex = 0;
  let sassIndex = 0;

  const noveBubble = document.getElementById("nove-bubble");
  const sassBubble = document.getElementById("sass-bubble");

  // Show the first lines on load
  window.addEventListener("DOMContentLoaded", () => {
    noveBubble.textContent = noveLines[noveIndex];
    sassBubble.textContent = sassLines[sassIndex];
    noveBubble.classList.add("show");
    sassBubble.classList.add("show");

    // Alternate lines every 5 seconds
    setInterval(() => {
      // Nove's turn
      noveIndex = (noveIndex + 1) % noveLines.length;
      noveBubble.textContent = noveLines[noveIndex];

      // S.A.S.S.'s turn
      sassIndex = (sassIndex + 1) % sassLines.length;
      sassBubble.textContent = sassLines[sassIndex];
    }, 5000);
  });
</script>
