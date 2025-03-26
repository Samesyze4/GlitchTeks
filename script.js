// Firebase config placeholder
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Login Function
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};

// Signup Function
window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    await setDoc(doc(db, "members", uid), { tier: "primal" }); // default new users to primal
  } catch (error) {
    alert("Signup failed: " + error.message);
  }
};

// Logout Function
window.logout = async function () {
  await signOut(auth);
  location.reload();
};

// Auth State Listener
onAuthStateChanged(auth, async (user) => {
  const loginForm = document.getElementById("auth-section");
  const tierContent = document.getElementById("tier-content");

  if (user) {
    loginForm.style.display = "none";
    tierContent.style.display = "block";
    document.getElementById("user-email").textContent = user.email;

    let tier = "primal";

    // Master override for full access
    if (user.email === "samesyze@gmail.com") {
      tier = "architect";
    } else {
      const docSnap = await getDoc(doc(db, "members", user.uid));
      if (docSnap.exists()) {
        tier = docSnap.data().tier || "primal";
      }
    }

    // Reveal appropriate content
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
