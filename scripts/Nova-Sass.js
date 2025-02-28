document.addEventListener("DOMContentLoaded", function() {
    // Nova - Tangible Chaos Monkey
    const nova = document.createElement("img");
    nova.src = "nova.png"; // Replace with actual Nova image URL
    nova.alt = "Nova the Cyber Monkey";
    nova.style.position = "fixed";
    nova.style.bottom = "20px";
    nova.style.left = "20px";
    nova.style.width = "100px";
    nova.style.cursor = "pointer";
    nova.style.transition = "all 0.3s ease-in-out";
    document.body.appendChild(nova);

    // Nova Randomly Moves
    setInterval(() => {
        let x = Math.random() * (window.innerWidth - 100) + "px";
        let y = Math.random() * (window.innerHeight - 100) + "px";
        nova.style.transform = `translate(${x}, ${y})`;
    }, 5000);

    // Nova Causes Small Screen Shake When Clicked
    nova.addEventListener("click", function() {
        document.body.classList.add("shake");
        setTimeout(() => document.body.classList.remove("shake"), 500);
    });

    // Sass - The Holographic AI Gremlin
    const sass = document.createElement("div");
    sass.innerHTML = "SASS ONLINE";
    sass.style.position = "fixed";
    sass.style.top = "10px";
    sass.style.right = "10px";
    sass.style.padding = "10px 20px";
    sass.style.background = "rgba(128,0,128,0.7)";
    sass.style.color = "#fff";
    sass.style.fontFamily = "monospace";
    sass.style.borderRadius = "5px";
    sass.style.animation = "glitch 1s infinite";
    document.body.appendChild(sass);

    // Sass Randomly Glitches Text
    setInterval(() => {
        sass.innerHTML = Math.random() > 0.5 ? "SASS ONLINE" : "S4SS 0NLINE";
    }, 2000);
});
