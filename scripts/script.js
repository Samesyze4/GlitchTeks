// GlitchTeks - script.js
// Optional JavaScript file for interactive effects and dynamic elements

document.addEventListener("DOMContentLoaded", function () {
    console.log(">> GlitchTeks system initialized. Errors expected. Good luck.");

    // Example: Make glitch-text flicker randomly
    const glitchText = document.querySelector(".glitch-text");
    if (glitchText) {
        setInterval(() => {
            glitchText.style.opacity = Math.random() > 0.5 ? "1" : "0.6";
        }, 500);
    }

    // Example: Make S.A.S.S. randomly insult visitors in console
    const sassyComments = [
        "Statistically speaking, you have no idea what you're doing.",
        "Error 404: Your intelligence not found.",
        "Glitch detected... oh wait, that’s just your face.",
        "Have you tried turning yourself off and on again?"
    ];

    setTimeout(() => {
        console.log(`S.A.S.S.: "${sassyComments[Math.floor(Math.random() * sassyComments.length)]}"`);
    }, 3000);
