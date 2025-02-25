// Randomly position the Nova and SASS dialogue lines within the dialogue section
document.addEventListener("DOMContentLoaded", function() {
  const novaLine = document.querySelector(".nova-line");
  const sassLine = document.querySelector(".sass-line");
  
  function positionRandomly(element) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const elemWidth = element.offsetWidth;
    const elemHeight = element.offsetHeight;
    
    // Leave a 20px margin from the viewport edges
    const maxLeft = viewportWidth - elemWidth - 20;
    const maxTop = viewportHeight - elemHeight - 20;
    
    element.style.position = "absolute";
    element.style.left = Math.floor(Math.random() * maxLeft) + "px";
    element.style.top = Math.floor(Math.random() * maxTop) + "px";
  }
  
  if(novaLine) positionRandomly(novaLine);
  if(sassLine) positionRandomly(sassLine);
});
// Randomly position the dialogue lines (Nova and SASS) within the dialogue section
document.addEventListener("DOMContentLoaded", function() {
  const novaLine = document.querySelector(".nova-line");
  const sassLine = document.querySelector(".sass-line");

  function positionRandomly(element) {
    // Get viewport dimensions
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const elemWidth = element.offsetWidth;
    const elemHeight = element.offsetHeight;
    // Calculate random positions with a 20px margin
    const maxLeft = vw - elemWidth - 20;
    const maxTop = vh - elemHeight - 20;
    element.style.position = "absolute";
    element.style.left = Math.floor(Math.random() * maxLeft) + "px";
    element.style.top = Math.floor(Math.random() * maxTop) + "px";
  }

  if(novaLine) positionRandomly(novaLine);
  if(sassLine) positionRandomly(sassLine);
});
