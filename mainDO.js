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
      const messagesRef = firebase.database().ref("others");
      
      // Listen for form submit
      document.getElementById('formother').addEventListener('submit', submitForm);
      
      // Submit form
      function submitForm(e){
        e.preventDefault();
      
        // Get values
        var name = getInputVal('input_15');
        var details = getInputVal('input_22');
        var classifcation0 = getInputVal('input_14');
        var ph=getInputVal('input_20')
        
        //نرجع لها للتاريخ
        //var date = getInputVal('day_13-month_13-year_13');
        /*var day = getInputVal('day_13');
        var month = getInputVal('month_13');
        var year = getInputVal('year_13');*/
        
      
        // Save message
        saveMessage(name, details, classifcation0,ph);
   
     
      // Show alert
        document.querySelector('.alert').style.display = 'block';
      
        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);
      
        // Clear form
        document.getElementById('formother').reset();
      }
      
      // Function to get get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      
      // Save message to firebase
      function saveMessage(input_15,input_14, input_22,input_20){
        var newMessageRef = messagesRef.push();
        
        newMessageRef.set({
  
         
            name:input_15,
            classifcation0:input_14,
            details: input_22,
            ph:input_20
         /* month:month_13,
          day:day_13,
          year:year_13*/
        }
        
      
        );
        window.alert("thanks");
      }
       
      
        
      