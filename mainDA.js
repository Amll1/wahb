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
      const messagesRef = firebase.database().ref("animals");
      
      // Listen for form submit
      document.getElementById('formanimal').addEventListener('submit', submitForm);
    
      // Submit form
      function submitForm(e){
        e.preventDefault();
      
        // Get values
        var name = getInputVal('input_15');
        var classifcation0 = getInputVal('input_17');
       
         var pt =getInputVal('input_26');
         var size=getInputVal('input_27');
         var pc =getInputVal('input_28');
         var ph = getInputVal('input_16');
        
        //نرجع لها للتاريخ
        //var date = getInputVal('day_13-month_13-year_13');
        /*var day = getInputVal('day_13');
        var month = getInputVal('month_13');
        var year = getInputVal('year_13');*/
        
      
        // Save message
        saveMessage(name, classifcation0,pt,size, pc,ph);
    
      // Show alert
        document.querySelector('.alert').style.display = 'block';
      
        // Hide alert after 3 seconds
        setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
        },3000);
      
        // Clear form
        document.getElementById('formanimal').reset();
      }
      
      // Function to get get form values
      function getInputVal(id){
        return document.getElementById(id).value;
      }
      
      // Save message to firebase
      function saveMessage(input_15,input_17,input_26,input_27,input_28,input_16){
        var newMessageRef = messagesRef.push();
      
        newMessageRef.set({
  
         
            name:input_15,
            classifcation0:input_17,
            pt:input_26,
            size:input_27,
            pc:input_28,
            ph:input_16

         /* month:month_13,
          day:day_13,
          year:year_13*/
        }
     
      
        );
        window.alert("thanks");
      }
     
    
        
   