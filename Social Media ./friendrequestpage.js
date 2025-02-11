import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBO5R1pBY0ZgxLif13xHDhu15aCHi212kY",
    authDomain: "database-e77bf.firebaseapp.com",
    projectId: "database-e77bf",
    storageBucket: "database-e77bf.firebasestorage.app",
    messagingSenderId: "445149188563",
    appId: "1:445149188563:web:7de8f2b637871929fe5f26"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


let sendRequestFriend = document.querySelector(".requestboxreqfrd");
sendRequestFriend.addEventListener("click", async () => {
    try {
        const docRef = await addDoc(collection(db, "users"), {
          Name: "Muhammad Hashim",
          From: localStorage.getItem("user"),
          To: "xyz@gmail.com",
          Phone: "0123456789",
          Status: "Request Sent"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}); 
// sendRequestFriend.innerHTML = "<button>Request Send</button>";
// sendRequestFriend.classList.add("requestedboxreqfrd");
// sendRequestFriend.classList.remove("requestboxreqfrd");