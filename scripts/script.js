// Randomly position the chat bubbles within the chat container
document.addEventListener("DOMContentLoaded", function() {
  const chatContainer = document.getElementById("chatContainer");
  const novaBubble = document.getElementById("novaBubble");
  const sassBubble = document.getElementById("sassBubble");

  function positionRandomly(element) {
    // Get container dimensions
    const containerRect = chatContainer.getBoundingClientRect();
    // Get element dimensions
    const elemWidth = element.offsetWidth;
    const elemHeight = element.offsetHeight;
    // Calculate max available positions within container
    const maxLeft = containerRect.width - elemWidth;
    const maxTop = containerRect.height - elemHeight;
    // Set random positions
    element.style.left = Math.floor(Math.random() * maxLeft) + "px";
    element.style.top = Math.floor(Math.random() * maxTop) + "px";
  }

  // Randomize positions for both chat bubbles
  positionRandomly(novaBubble);
  positionRandomly(sassBubble);
});
