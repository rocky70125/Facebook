import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
//  import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyAN3vyT1zRUykvDZjLBHb7mKjL5rCiie-8",
   authDomain: "smit-project-a55c0.firebaseapp.com",
   projectId: "smit-project-a55c0",
   storageBucket: "smit-project-a55c0.firebasestorage.app",
   messagingSenderId: "801548382249",
   appId: "1:801548382249:web:414cd370cbf1c5a877ac38"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();

 let btnSignup = document.querySelector(".signupBtn");

btnSignup.addEventListener("click", datahandler);
function datahandler(event){
 
    event.preventDefault();
let userName = document.querySelector(".name").value;
    localStorage.setItem("userName", userName);
    let email = document.querySelector(".signupEmail").value;
    let password = document.querySelector(".signupPassword").value;

    if(email=="" || password==""){
      alert("Required Email And Password");
    }
    else{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    // window.localStorage.setItem('emailForSignIn', email);
    const user= userCredential.user;
    alert("Creating Account...");

    window.location.href= "./index.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("User Already Exists");
    // ...
  });
}
}