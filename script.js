onAuthStateChanged(auth, async (user) => {
  const loginForm = document.getElementById("auth-section");
  const tierContent = document.getElementById("tier-content");
  
  if (user) {
    loginForm.style.display = "none";
    tierContent.style.display = "block";
    document.getElementById("user-email").textContent = user.email;

    let tier = "primal";

    if (user.email === "samesyze@gmail.com") {
      tier = "architect"; // full access override
    } else {
      const docSnap = await getDoc(doc(db, "members", user.uid));
      if (docSnap.exists()) {
        tier = docSnap.data().tier || "primal";
      }
    }

    // Reveal tier-specific content
    document.getElementById("primal-spark").style.display = "block";
    if (tier === "synth" || tier === "architect") {
      document.getElementById("synth-ascendant").style.display = "block";
    }
    if (tier === "architect") {
      document.getElementById("architect-of-ruin").style.display = "block";
    }
  } else {
    loginForm.style.display = "block";
    tierContent.style.display = "none";
  }
});
