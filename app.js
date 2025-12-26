import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "PASTE_YOURS",
  authDomain: "PASTE_YOURS",
  projectId: "PASTE_YOURS",
  appId: "PASTE_YOURS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

signInAnonymously(auth).then(() => {
  console.log("Player connected");
});

document.getElementById("play").onclick = () => {
  alert("Mission started 🚀");
};
