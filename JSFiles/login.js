
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        var users = firebase.auth().currentUser;
        if (user != null) {
           var userID = users.uid;
           var Name = users.displayName;
           var Email = users.email;
           var firebaseRef = firebase.database().ref('/users/'+userID);
           firebaseRef.update({
             email:Email,
             isAdmin:true,
             isPatients:true,
             isDoctor:true,
           });
            //document.getElementById("user").innerHTML = "Welcome User "+Email;
            console.log(users.uid)
            window.location.href="index.html";
          }
    } else {
      // No user is signed in.
    }
    var users = firebase.auth().currentUser;
   
  });

function login(){
    var Email = document.getElementById("email").value;
    var Password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(Email, Password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
      });
      
}

