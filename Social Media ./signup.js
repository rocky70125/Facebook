// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPJ-uGl533xYFfrUespUpplyZmai9q0DY",
  authDomain: "login-signup-2466b.firebaseapp.com",
  projectId: "login-signup-2466b",
  storageBucket: "login-signup-2466b.firebasestorage.app",
  messagingSenderId: "475490274256",
  appId: "1:475490274256:web:39712d64e555995cec87d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Btn = document.querySelector(".google");
Btn.addEventListener("click",() => {
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      alert("Successfully login with Google!");
      
    setTimeout(() => { window.location.href = "./friendrequestpage.html" }, 2000);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
});

let  btn = document.querySelector(".signupBtn");
btn.addEventListener("click", () => {

    let email = document.querySelector(".signupEmail").value;
    let password = document.querySelector(".signupPassword").value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    localStorage.setItem("user", email);
    setTimeout(() => { window.location.href = "./friendrequestpage.html" }, 2000);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
});
