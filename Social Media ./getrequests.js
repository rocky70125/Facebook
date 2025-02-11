import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

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

const userReq = collection(db, "users");

let receiveRequests = document.querySelector(".receiveRequests");
receiveRequests.addEventListener("click",async ()=>{
    console.log(getDocs("users"));;
});

    
   
// Create a query against the collection.
// const q = query(userReq, where("From", "==", "abc@gmail.com")); // yhn email mi jis ko request receive krni hi us ki email likho
// console.log(q);

