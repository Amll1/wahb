//import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
//import { initializeApp } from "firebase/app";
//import { getStorage } from "firebase/storage";
//import { getFirestore } from "firebase/firestore";
// Initialize Firebase (ADD YOUR OWN DATA)




const firebaseConfig = {
  apiKey: "AIzaSyBkrwXriFJ6H74orTEzQBI-W1SdzQUUjXg",
  authDomain: "wahb2-dd5b6.firebaseapp.com",
  databaseURL: "https://wahb2-dd5b6-default-rtdb.firebaseio.com",
  projectId: "wahb2-dd5b6",
  storageBucket: "wahb2-dd5b6.appspot.com",
  messagingSenderId: "552219860554",
  appId: "1:552219860554:web:8187ef64f4d1164bb190b3"
};
 // Initialize Firebase
firebase.initializeApp(firebaseConfig);



  // Reference messages collection
  const messagesRef = firebase.database().ref("messages");
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }