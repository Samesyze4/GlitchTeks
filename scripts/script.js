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
/***********************************************
 * membership.js
 * 
 * Simple front-end code for a Members-Only page:
 * 1. Blog-like comments/suggestions
 * 2. Event creation
 * 3. Direct chat link opening
 * 
 * This uses localStorage for demonstration only.
 * In a real app, you'd need server-side code for
 * persistent storage & multi-user support.
 ***********************************************/

/** Run once the DOM content is fully loaded */
document.addEventListener("DOMContentLoaded", () => {
  /****************************************
   * 1) BLOG / SUGGESTIONS
   ****************************************/
  
  // Elements for blog posts
  const blogPostsContainer = document.querySelector(".blog-posts"); 
  const newPostForm = document.querySelector(".new-post-form");
  const suggestionTitleInput = document.getElementById("suggestion-title");
  const suggestionBodyInput = document.getElementById("suggestion-body");

  // Load existing blog posts from localStorage (if any)
  let blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  // Function to display all blog posts on the page
  function renderBlogPosts() {
    // Clear the container first
    blogPostsContainer.innerHTML = "";

    // Create a DOM element for each post
    blogPosts.forEach((post, index) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("blog-post");
      
      const title = document.createElement("h3");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      // Optional: a delete button so you can remove a post
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.style.marginTop = "0.5rem";
      deleteBtn.addEventListener("click", () => {
        
